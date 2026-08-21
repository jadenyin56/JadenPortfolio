"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { DestinationMedia } from "@/data/destinations";

export default function EnvironmentalMedia({ media }: { media?: DestinationMedia }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { video.pause(); return; }
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting ? void video.play().catch(() => undefined) : video.pause(), { threshold: .15 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (!media || (failed && !media.fallback)) return null;
  const style = { objectPosition: media.position ?? "center", opacity: media.opacity ?? 1 };
  if (media.type === "video" && !failed) return <video ref={videoRef} className="environmental-media" src={media.src} poster={media.fallback} muted loop playsInline preload="none" aria-label={media.alt} style={style} onError={() => setFailed(true)} />;
  const src = failed ? media.fallback : media.src;
  return src ? <Image className="environmental-media" src={src} alt={media.alt} fill sizes="100vw" style={style} onError={() => setFailed(true)} /> : null;
}
