"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AirplaneWindowExperience } from "@/components/travel/AirplaneWindowExperience";
import { TravelTransition } from "@/components/travel/TravelTransition";

export type TravelEntrancePhase = "window" | "opening" | "revealing" | "diary";

export function TravelsExperience({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<TravelEntrancePhase>("window");
  const [reduceMotion, setReduceMotion] = useState(false);
  const windowLayerRef = useRef<HTMLDivElement>(null);
  const diaryLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (phase === "diary") return;
    const previousOverflow = document.documentElement.style.overflow;
    const outsideLayers = Array.from(
      document.querySelectorAll<HTMLElement>(".site-nav, .site-footer, .audio-dock"),
    );
    const previousInert = outsideLayers.map((element) => element.inert);
    document.documentElement.style.overflow = "hidden";
    outsideLayers.forEach((element) => {
      element.inert = true;
    });
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      outsideLayers.forEach((element, index) => {
        element.inert = previousInert[index];
      });
    };
  }, [phase]);

  const beginOpening = useCallback(() => setPhase((current) => current === "window" ? "opening" : current), []);
  const beginReveal = useCallback(() => setPhase("revealing"), []);
  const finishReveal = useCallback(() => {
    setPhase("diary");
    window.requestAnimationFrame(() => {
      document.getElementById("travel-diary")?.focus({ preventScroll: true });
    });
  }, []);
  const skipEntrance = useCallback(() => setPhase("revealing"), []);

  return (
    <div className={`travels-experience is-${phase}`}>
      <div
        ref={diaryLayerRef}
        id="travel-diary"
        className="travel-diary-layer"
        tabIndex={-1}
        aria-hidden={phase !== "diary"}
        inert={phase !== "diary"}
      >
        {children}
      </div>

      {phase !== "diary" ? (
        <AirplaneWindowExperience
          ref={windowLayerRef}
          phase={phase}
          reduceMotion={reduceMotion}
          onOpen={beginOpening}
          onCameraPass={beginReveal}
          onSkip={skipEntrance}
        />
      ) : null}

      <TravelTransition
        active={phase === "revealing"}
        reduceMotion={reduceMotion}
        windowLayer={windowLayerRef}
        diaryLayer={diaryLayerRef}
        onComplete={finishReveal}
      />
    </div>
  );
}
