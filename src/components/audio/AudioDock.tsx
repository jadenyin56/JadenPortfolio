"use client";

import Script from "next/script";
import { ChevronDown, ChevronUp, ExternalLink, Pause, Play, Volume2, VolumeX, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { spotifyPlaylist } from "@/data/music";
import { playUiTap, setSoundMuted, soundIsMuted } from "@/lib/audio";

type PlaybackEvent = {
  data: {
    isBuffering?: boolean;
    isPaused?: boolean;
    playingURI?: string;
  };
};

type TrackPreview = {
  artwork: string;
  title: string;
  url: string;
};

type SpotifyOEmbed = {
  thumbnail_url?: string | null;
  title?: string;
};

type SpotifyController = {
  addListener: (event: "ready" | "playback_started" | "playback_update", listener: (event: PlaybackEvent) => void) => void;
  destroy?: () => void;
  play: () => void;
  togglePlay: () => void;
};

type SpotifyIFrameApi = {
  createController: (
    element: HTMLElement,
    options: { height: number; uri: string; width: string },
    callback: (controller: SpotifyController) => void,
  ) => void;
};

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIFrameApi) => void;
  }
}

export function AudioDock() {
  const [expanded, setExpanded] = useState(false);
  const [requested, setRequested] = useState(false);
  const [controllerReady, setControllerReady] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [scriptAttempt, setScriptAttempt] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [trackPreview, setTrackPreview] = useState<TrackPreview | null>(null);
  const [muted, setMuted] = useState(false);
  const controllerRef = useRef<SpotifyController | null>(null);
  const controllerReadyRef = useRef(false);
  const embedTargetRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const loadTimerRef = useRef<number | null>(null);
  const previewUriRef = useRef<string | null>(null);

  const loadTrackPreview = useCallback(async (playingURI?: string) => {
    if (!playingURI?.startsWith("spotify:track:") || previewUriRef.current === playingURI) return;
    previewUriRef.current = playingURI;
    setTrackPreview(null);
    const trackId = playingURI.slice("spotify:track:".length);
    const trackUrl = `https://open.spotify.com/track/${trackId}`;

    try {
      const response = await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(trackUrl)}`);
      if (!response.ok) throw new Error("Spotify artwork request failed");
      const data = await response.json() as SpotifyOEmbed;
      if (previewUriRef.current !== playingURI) return;
      if (!data.thumbnail_url) {
        previewUriRef.current = null;
        return;
      }
      setTrackPreview({ artwork: data.thumbnail_url, title: data.title ?? "Current track", url: trackUrl });
    } catch {
      if (previewUriRef.current === playingURI) {
        previewUriRef.current = null;
        setTrackPreview(null);
      }
    }
  }, []);

  const createController = useCallback((api: SpotifyIFrameApi) => {
    const target = embedTargetRef.current;
    if (!target || controllerRef.current) return;

    api.createController(
      target,
      { height: 352, uri: spotifyPlaylist.uri, width: "100%" },
      (controller) => {
        controllerRef.current = controller;
        controller.addListener("ready", () => {
          if (loadTimerRef.current !== null) window.clearTimeout(loadTimerRef.current);
          controllerReadyRef.current = true;
          setLoadError(false);
          setControllerReady(true);
        });
        controller.addListener("playback_started", ({ data }) => {
          setPlaying(true);
          void loadTrackPreview(data.playingURI);
        });
        controller.addListener("playback_update", ({ data }) => {
          void loadTrackPreview(data.playingURI);
          if (typeof data.isPaused !== "boolean") return;
          setPlaying(!data.isPaused && !data.isBuffering);
        });
      },
    );
  }, [loadTrackPreview]);

  useEffect(() => {
    const syncTimer = window.setTimeout(() => setMuted(soundIsMuted()), 0);
    const syncMute = (event: Event) => setMuted(Boolean((event as CustomEvent<boolean>).detail));
    window.addEventListener("portfolio-audio-change", syncMute);
    return () => {
      window.clearTimeout(syncTimer);
      window.removeEventListener("portfolio-audio-change", syncMute);
    };
  }, []);

  useEffect(() => () => {
    if (window.onSpotifyIframeApiReady === createController) delete window.onSpotifyIframeApiReady;
    if (loadTimerRef.current !== null) window.clearTimeout(loadTimerRef.current);
    controllerRef.current?.destroy?.();
  }, [createController]);

  useEffect(() => {
    if (expanded && requested) closeButtonRef.current?.focus();
  }, [expanded, requested]);

  function startLoadTimer() {
    if (loadTimerRef.current !== null) window.clearTimeout(loadTimerRef.current);
    loadTimerRef.current = window.setTimeout(() => {
      if (!controllerReadyRef.current) setLoadError(true);
    }, 10000);
  }

  function requestPlayer() {
    window.onSpotifyIframeApiReady = createController;
    setLoadError(false);
    setRequested(true);
    startLoadTimer();
  }

  function togglePlayback(event: MouseEvent<HTMLButtonElement>) {
    playUiTap();
    if (!expanded) openerRef.current = event.currentTarget;
    setExpanded(true);
    if (!requested) {
      requestPlayer();
      return;
    }
    if (!controllerReady) return;
    controllerRef.current?.togglePlay();
  }

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    setSoundMuted(next);
  }

  function closePlayer() {
    setExpanded(false);
    window.requestAnimationFrame(() => openerRef.current?.focus());
  }

  function toggleExpanded(event: MouseEvent<HTMLButtonElement>) {
    if (expanded) {
      closePlayer();
      return;
    }
    openerRef.current = event.currentTarget;
    setExpanded(true);
    if (!requested) requestPlayer();
  }

  function retryPlayer() {
    controllerRef.current?.destroy?.();
    controllerRef.current = null;
    controllerReadyRef.current = false;
    setControllerReady(false);
    setLoadError(false);
    if (embedTargetRef.current) embedTargetRef.current.replaceChildren();
    window.onSpotifyIframeApiReady = createController;
    setScriptAttempt((attempt) => attempt + 1);
    startLoadTimer();
  }

  return (
    <aside className={`audio-player${expanded ? " is-expanded" : ""}`} aria-label="Spotify playlist player">
      {requested ? (
        <Script
          id={`spotify-iframe-api-${scriptAttempt}`}
          src={`https://open.spotify.com/embed/iframe-api/v1?attempt=${scriptAttempt}`}
          strategy="afterInteractive"
          onError={() => setLoadError(true)}
        />
      ) : null}

      <div className="audio-dock">
        <button className="vinyl-button" type="button" onClick={togglePlayback} disabled={requested && !controllerReady} aria-label={!requested ? "Open Spotify player" : !controllerReady ? "Spotify player loading" : playing ? "Pause Spotify playlist" : "Play Spotify playlist"}>
          <span className={playing ? "vinyl is-spinning" : "vinyl"} aria-hidden="true"><i /></span>
          <span className={`record-cover${trackPreview ? " has-artwork" : ""}`} aria-hidden="true">
            {trackPreview ? (
              // Spotify oEmbed supplies the current track's canonical square artwork at runtime.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={trackPreview.artwork} alt="" referrerPolicy="no-referrer" />
            ) : <><small>JY</small><strong>LISTEN</strong><i>02 / SP</i></>}
          </span>
          <span className="vinyl-state">{playing ? <Pause size={11} /> : <Play size={11} />}</span>
        </button>
        <button className="audio-copy" type="button" onClick={toggleExpanded} aria-expanded={expanded}>
          <span>{playing ? "Now playing" : "Music"}</span>
          <strong>{trackPreview?.title ?? (controllerReady ? "Playlist ready" : "Open listening room")}</strong>
          <small>{trackPreview ? "Current track · Spotify" : "Official playlist player"}</small>
        </button>
        <div className="audio-actions">
          <button type="button" onClick={toggleExpanded} aria-label={expanded ? "Collapse playlist" : "Expand playlist"}>{expanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}</button>
        </div>
      </div>

      {requested ? (
        <section className={`spotify-sleeve${expanded ? " is-visible" : ""}`} aria-label="Spotify playlist" aria-hidden={!expanded}>
          <div className="spotify-sleeve-heading">
            <div><span>Listening room</span><strong>Spotify playlist</strong></div>
            <div className="spotify-sleeve-actions">
              <a href={spotifyPlaylist.url} target="_blank" rel="noreferrer" aria-label="Open playlist in Spotify"><ExternalLink size={14} /></a>
              <button ref={closeButtonRef} type="button" onClick={closePlayer} aria-label="Close playlist"><X size={15} /></button>
            </div>
          </div>
          <div className="spotify-embed-frame" aria-busy={!controllerReady && !loadError}>
            <div ref={embedTargetRef} />
            {!controllerReady && !loadError ? <p>Loading Spotify…</p> : null}
            {loadError ? (
              <div className="spotify-error" role="status">
                <strong>Spotify did not load.</strong>
                <span>Try again, or open the playlist directly.</span>
                <div><button type="button" onClick={retryPlayer}>Retry</button><a href={spotifyPlaylist.url} target="_blank" rel="noreferrer">Open Spotify <ExternalLink size={12} /></a></div>
              </div>
            ) : null}
          </div>
          <div className="spotify-sleeve-footer">
            <p className="spotify-attribution">Playback and track details are provided by Spotify.</p>
            {trackPreview ? <a className="spotify-current-track" href={trackPreview.url} target="_blank" rel="noreferrer">Current track <ExternalLink size={11} /></a> : null}
            <button type="button" onClick={toggleMute} aria-label={muted ? "Turn interface sounds on" : "Turn interface sounds off"}>{muted ? <VolumeX size={12} /> : <Volume2 size={12} />} Interface sounds {muted ? "off" : "on"}</button>
          </div>
        </section>
      ) : null}
    </aside>
  );
}
