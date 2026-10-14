"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { Experience } from "@/types";

type ExperienceLogo = Experience["logo"];

export function ExperienceBrandMedia({ logo }: { logo: ExperienceLogo }) {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reducedMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    void video.play().catch(() => {
      // The poster remains visible if the browser blocks autoplay.
    });
  }, [reducedMotion]);

  if (logo.animationSrc) {
    return (
      <video
        ref={videoRef}
        className="experience-company-animation"
        src={logo.animationSrc}
        poster={logo.src}
        aria-label={logo.alt}
        autoPlay={!reducedMotion}
        loop
        muted
        playsInline
        preload="metadata"
      />
    );
  }

  return (
    <Image
      className="experience-company-logo"
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      sizes="(max-width: 760px) calc(100vw - 86px), 34vw"
      unoptimized
    />
  );
}
