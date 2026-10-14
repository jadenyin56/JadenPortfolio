"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import Image from "next/image";

const highlights = [
  {
    title: "St. Marks Summit",
    label: "Vancouver, Canada",
    note: "Legs were fried",
    src: "/images/PassportImages/IMG_0310.JPG",
    alt: "Jaden beside the trail marker at St. Mark's Summit",
    position: "center 58%",
  },
  {
    title: "Futian Skyline",
    label: "Shenzhen, China",
    note: "Legs were fried pt. 2",
    src: "/images/PassportImages/IMG_0467.JPG",
    alt: "Jaden pointing toward a skyscraper in the Shenzhen skyline",
    position: "center 58%",
  },
  {
    title: "Shenzhen After Hours",
    label: "Shenzhen, China",
    note: "Did the same hike again",
    src: "/images/PassportImages/IMG_1040.JPG",
    alt: "Jaden giving two thumbs up in front of the Shenzhen skyline at night",
    position: "center 62%",
  },
  {
    title: "Predjama Castle",
    label: "Slovenia",
    note: "Vinland",
    src: "/images/PassportImages/IMG_6244.JPG",
    alt: "Jaden walking toward Predjama Castle built into a rocky hillside",
    position: "center 64%",
  },
  {
    title: "Harbourfront Bikeway",
    label: "Toronto, Canada",
    note: "Forever a tourist in my own city - Drake",
    src: "/images/PassportImages/IMG_7740.JPEG",
    alt: "Jaden standing across the water from the Toronto skyline",
    position: "center 58%",
  },
  {
    title: "World Cup 2026",
    label: "Toronto, Canada",
    note: "Project Mbappe is coming",
    src: "/images/PassportImages/IMG_7803.JPG",
    alt: "Jaden posing with a football trophy at a match-day photo booth",
    position: "center 42%",
  },
  {
    title: "Eiffel Tower",
    label: "Paris, France",
    note: "Didn't get a video of the sparkles :(",
    src: "/images/PassportImages/IMG_7810.JPG",
    alt: "Jaden looking toward the illuminated Eiffel Tower beside the Seine",
    position: "center 50%",
  },
  {
    title: "Split",
    label: "Split, Croatia",
    note: "Can't lie the water tasted really good",
    src: "/images/PassportImages/IMG_8236.JPG",
    alt: "Jaden beside an ornate stone fountain set into an old wall",
    position: "center 54%",
  },
  {
    title: "上海 Lego",
    label: "Shanghai, China",
    note: "Took this 5 mins before napping in the restaurant",
    src: "/images/PassportImages/IMG_9320.JPG",
    alt: "Jaden pointing to an illuminated LEGO model of Shanghai",
    position: "center 52%",
  },
  {
    title: "Dream Plaza Wuhan",
    label: "Wuhan, China",
    note: "Don't check the go pro footage",
    src: "/images/PassportImages/IMG_9774.JPG",
    alt: "Jaden and two friends holding snowboards at an indoor snow park",
    position: "center 48%",
  },
  {
    title: "Wuhan Three Towns FC",
    label: "Wuhan, China",
    note: "Number 19 was carrying",
    src: "/images/PassportImages/IMG_9946.JPG",
    alt: "Jaden in the stands overlooking a football match at night",
    position: "72% center",
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
                <Image className="passport-photo-image" src={highlight.src} alt={highlight.alt} fill sizes="(max-width: 760px) 75vw, 360px" style={{ objectPosition: highlight.position }} />
              </div>
              <div className="passport-page-copy"><span>{highlight.label}</span><h2>{highlight.title}</h2><p>{highlight.note}</p></div>
            </>
          ) : (
            <>
              <div className="passport-page-top"><span>JY / 旅程</span><span>Photo diary</span></div>
              <div className="passport-cover-photo">
                <Image className="passport-photo-image" src="/images/PassportImages/IMG_0079.JPG" alt="Jaden with the illuminated Shanghai skyline behind him" fill sizes="(max-width: 760px) 75vw, 360px" preload />
              </div>
              <div className="passport-cover-copy"><span>Passport / volume one</span><h2>Trip<br /><em>Highlights</em></h2><p>Memories from my travels</p></div>
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
