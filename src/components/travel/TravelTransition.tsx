"use client";

import { useEffect } from "react";
import gsap from "gsap";

type TravelTransitionProps = {
  active: boolean;
  reduceMotion: boolean;
  windowLayer: React.RefObject<HTMLDivElement | null>;
  diaryLayer: React.RefObject<HTMLDivElement | null>;
  onComplete: () => void;
};

export function TravelTransition({
  active,
  reduceMotion,
  windowLayer,
  diaryLayer,
  onComplete,
}: TravelTransitionProps) {
  useEffect(() => {
    if (!active || !windowLayer.current || !diaryLayer.current) return;

    const context = gsap.context(() => {
      gsap.set(diaryLayer.current, { opacity: 1 });
      gsap.to(windowLayer.current, {
        opacity: 0,
        duration: reduceMotion ? 0.01 : 0.72,
        ease: "power2.inOut",
        onComplete,
      });
    }, windowLayer);

    return () => context.revert();
  }, [active, diaryLayer, onComplete, reduceMotion, windowLayer]);

  return null;
}
