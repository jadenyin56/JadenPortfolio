"use client";

import { Pause, Play, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { tracks } from "@/data/music";
import { playUiTap, setSoundMuted, soundIsMuted } from "@/lib/audio";

type AmbientRig = {
  context: AudioContext;
  master: GainNode;
  oscillators: OscillatorNode[];
};

export function AudioDock() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const rigRef = useRef<AmbientRig | null>(null);
  const track = tracks[trackIndex];

  const stop = useCallback(() => {
    const rig = rigRef.current;
    if (!rig) return;
    const now = rig.context.currentTime;
    rig.master.gain.cancelScheduledValues(now);
    rig.master.gain.setValueAtTime(rig.master.gain.value, now);
    rig.master.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    window.setTimeout(() => {
      rig.oscillators.forEach((oscillator) => oscillator.stop());
      void rig.context.close();
    }, 220);
    rigRef.current = null;
  }, []);

  const start = useCallback(() => {
    stop();
    const context = new AudioContext();
    const master = context.createGain();
    master.gain.setValueAtTime(0.0001, context.currentTime);
    master.gain.exponentialRampToValueAtTime(muted ? 0.0001 : 0.025, context.currentTime + 0.45);
    master.connect(context.destination);
    const oscillators = track.tones.map((frequency, index) => {
      const oscillator = context.createOscillator();
      const voice = context.createGain();
      oscillator.type = index === 0 ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      oscillator.detune.value = index === 1 ? -5 : index === 2 ? 4 : 0;
      voice.gain.value = index === 0 ? 0.62 : 0.18;
      oscillator.connect(voice).connect(master);
      oscillator.start();
      return oscillator;
    });
    rigRef.current = { context, master, oscillators };
  }, [muted, stop, track.tones]);

  useEffect(() => {
    const syncTimer = window.setTimeout(() => setMuted(soundIsMuted()), 0);
    const syncMute = (event: Event) => setMuted(Boolean((event as CustomEvent<boolean>).detail));
    window.addEventListener("portfolio-audio-change", syncMute);
    return () => {
      window.clearTimeout(syncTimer);
      window.removeEventListener("portfolio-audio-change", syncMute);
    };
  }, []);

  useEffect(() => () => stop(), [stop]);

  useEffect(() => {
    const rig = rigRef.current;
    if (!rig) return;
    rig.master.gain.setTargetAtTime(muted ? 0.0001 : 0.025, rig.context.currentTime, 0.06);
  }, [muted]);

  function togglePlayback() {
    playUiTap();
    if (playing) stop();
    else start();
    setPlaying((value) => !value);
  }

  function changeTrack(direction: number) {
    playUiTap();
    const next = (trackIndex + direction + tracks.length) % tracks.length;
    const wasPlaying = playing;
    stop();
    setPlaying(false);
    setTrackIndex(next);
    if (wasPlaying) {
      window.setTimeout(() => setPlaying(true), 20);
    }
  }

  useEffect(() => {
    if (playing && !rigRef.current) start();
  }, [playing, start]);

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    setSoundMuted(next);
  }

  return (
    <aside className="audio-dock" aria-label="Ambient music player">
      <button className="vinyl-button" type="button" onClick={togglePlayback} aria-label={playing ? "Pause ambient music" : "Play ambient music"}>
        <span className={playing ? "vinyl is-spinning" : "vinyl"} aria-hidden="true"><i /></span>
        <span className="vinyl-state">{playing ? <Pause size={11} /> : <Play size={11} />}</span>
      </button>
      <div className="audio-copy">
        <span>{playing ? "Now playing" : "Music / optional"}</span>
        <strong>{track.title}</strong>
      </div>
      <div className="audio-actions">
        <button type="button" onClick={() => changeTrack(-1)} aria-label="Previous track"><SkipBack size={13} /></button>
        <button type="button" onClick={() => changeTrack(1)} aria-label="Next track"><SkipForward size={13} /></button>
        <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute all sound" : "Mute all sound"}>{muted ? <VolumeX size={13} /> : <Volume2 size={13} />}</button>
      </div>
    </aside>
  );
}
