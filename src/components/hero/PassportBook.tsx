"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ThemePhoto } from "@/components/ui/ThemePhoto";

const highlights = [
  {
    title: "Quiet corners",
    label: "Japan / preview",
    note: "Gardens, rain, and a little room to pause.",
    daySrc: "/images/editorial/projects-garden.jpg",
    nightSrc: "/images/editorial/night-tokyo-rain.jpg",
    dayAlt: "A garden pavilion surrounded by water and trees",
    nightAlt: "A Tokyo street glowing with neon after rain",
  },
  {
    title: "Between stops",
    label: "Japan / preview",
    note: "The view from the journey is part of the journey.",
    daySrc: "/images/editorial/travel-train.jpg",
    nightSrc: "/images/editorial/night-tokyo-train.jpg",
    dayAlt: "A rural landscape seen from a train window",
    nightAlt: "A train passing through the city at night",
  },
  {
    title: "After dark",
    label: "City nights / preview",
    note: "A few lights worth remembering.",
    daySrc: "/images/editorial/contact-tokyo-night.jpg",
    nightSrc: "/images/editorial/night-shanghai.jpg",
    dayAlt: "A lantern-lit street in Tokyo",
    nightAlt: "The Shanghai skyline lit up at night",
  },
] as const;

export function PassportBook() {
  const [page, setPage] = useState(0);
  const [autoFlip, setAutoFlip] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!autoFlip || reducedMotion) return;
    const timer = window.setInterval(() => setPage((current) => (current + 1) % (highlights.length + 1)), 5000);
    return () => window.clearInterval(timer);
  }, [autoFlip, reducedMotion]);

  function turn(direction: number) {
    setAutoFlip(false);
    setPage((current) => (current + direction + highlights.length + 1) % (highlights.length + 1));
  }

  const highlight = page > 0 ? highlights[page - 1] : null;

  return (
    <aside className="passport-book" aria-label="Travel photo passport">
      <div className="passport-book-heading"><span>Travel notes</span><span>Vol. 01 / {String(page).padStart(2, "0")}</span></div>
      <div className="passport-stack">
        <div className="passport-sheet" key={page} aria-live={autoFlip ? "off" : "polite"}>
          {highlight ? (
            <>
              <div className="passport-page-top"><span>旅 / field notes</span><span>{String(page).padStart(2, "0")} / {String(highlights.length).padStart(2, "0")}</span></div>
              <div className="passport-photo">
                <ThemePhoto className="passport-photo-image" daySrc={highlight.daySrc} nightSrc={highlight.nightSrc} dayAlt={highlight.dayAlt} nightAlt={highlight.nightAlt} sizes="(max-width: 760px) 75vw, 280px" />
              </div>
              <div className="passport-page-copy"><span>{highlight.label}</span><h2>{highlight.title}</h2><p>{highlight.note}</p></div>
            </>
          ) : (
            <>
              <div className="passport-page-top"><span>JY / 旅程</span><span>Photo diary</span></div>
              <div className="passport-cover-photo">
                <ThemePhoto className="passport-photo-image" daySrc="/images/editorial/travel-train.jpg" nightSrc="/images/editorial/night-tokyo-train.jpg" dayAlt="A Japanese landscape framed by a train window" nightAlt="A train crossing neon-lit Tokyo at night" sizes="(max-width: 760px) 75vw, 280px" />
              </div>
              <div className="passport-cover-copy"><span>Passport / volume one</span><h2>Places<br /><em>in passing.</em></h2><p>Sample frames for the journeys still to be added.</p></div>
            </>
          )}
        </div>
      </div>
      <div className="passport-controls">
        <button type="button" onClick={() => turn(-1)} aria-label="Previous passport page"><ChevronLeft size={17} /></button>
        <span>{page === 0 ? "Cover" : `Page ${page}`} / {highlights.length}</span>
        <button type="button" onClick={() => turn(1)} aria-label="Next passport page"><ChevronRight size={17} /></button>
        <button type="button" className="passport-auto" onClick={() => setAutoFlip((value) => !value)} aria-label={autoFlip ? "Pause automatic page turning" : "Resume automatic page turning"} aria-pressed={autoFlip}>{autoFlip ? <Pause size={13} /> : <Play size={13} />}</button>
      </div>
    </aside>
  );
}
