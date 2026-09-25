"use client";

import dynamic from "next/dynamic";
import { Component, forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { ThemePhoto } from "@/components/ui/ThemePhoto";
import type { TravelEntrancePhase } from "@/components/travel/TravelsExperience";

export type ShadeCommand = {
  id: number;
  target: number;
  commit: boolean;
};

type AirplaneWindowExperienceProps = {
  phase: TravelEntrancePhase;
  reduceMotion: boolean;
  onOpen: () => void;
  onCameraPass: () => void;
  onSkip: () => void;
};

class WindowErrorBoundary extends Component<
  { children: React.ReactNode; onError: () => void },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.failed ? <WindowStaticView /> : this.props.children;
  }
}

const AirplaneWindowCanvas = dynamic(
  () => import("@/components/travel/AirplaneWindowCanvas"),
  {
    ssr: false,
    loading: () => null,
  },
);

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    return Boolean(context);
  } catch {
    return false;
  }
}

function WindowStaticView({ status }: { status?: string }) {
  return (
    <div className="travel-window-static" aria-hidden="true">
      <div className="travel-window-static-frame">
        <div className="travel-window-static-view">
          <ThemePhoto
            className="travel-window-static-photo"
            daySrc="/images/editorial/travel-train.jpg"
            nightSrc="/images/editorial/night-tokyo-train.jpg"
            dayAlt=""
            nightAlt=""
            sizes="(max-width: 760px) 78vw, 42vw"
            preload
          />
          <span className="travel-window-static-shade" />
        </div>
      </div>
      {status ? <span className="travel-window-loading">{status}</span> : null}
    </div>
  );
}

export const AirplaneWindowExperience = forwardRef<HTMLDivElement, AirplaneWindowExperienceProps>(
  function AirplaneWindowExperience(
    { phase, reduceMotion, onOpen, onCameraPass, onSkip },
    forwardedRef,
  ) {
    const [capability, setCapability] = useState<"checking" | "ready" | "fallback">("checking");
    const [canvasReady, setCanvasReady] = useState(false);
    const [theme, setTheme] = useState<"day" | "night">("day");
    const [shadeCommand, setShadeCommand] = useState<ShadeCommand>({ id: 0, target: 0.1, commit: false });
    const sliderRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef(0.1);
    const reportedPercentRef = useRef(-1);

    useEffect(() => {
      const frame = window.requestAnimationFrame(() => {
        setCanvasReady(false);
        setCapability(reduceMotion || !supportsWebGL() ? "fallback" : "ready");
      });
      return () => window.cancelAnimationFrame(frame);
    }, [reduceMotion]);

    useEffect(() => {
      const root = document.documentElement;
      const update = () => setTheme(root.dataset.theme === "night" ? "night" : "day");
      const frame = window.requestAnimationFrame(update);
      const observer = new MutationObserver(update);
      observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
      return () => {
        window.cancelAnimationFrame(frame);
        observer.disconnect();
      };
    }, []);

    const updateProgress = useCallback((progress: number) => {
      progressRef.current = progress;
      const percent = Math.round(progress * 100);
      if (percent === reportedPercentRef.current) return;
      reportedPercentRef.current = percent;
      sliderRef.current?.setAttribute("aria-valuenow", String(percent));

      const layer = sliderRef.current?.closest<HTMLElement>(".travel-window-layer");
      if (layer) {
        const range = Math.max(0, Math.min(1, (progress - 0.1) / 0.85));
        const eased = 1 - (1 - range) ** 2;
        layer.style.setProperty("--travel-copy-shift-x", `${-16 * eased}px`);
        layer.style.setProperty("--travel-copy-shift-y", `${-82 * eased}px`);
        layer.style.setProperty("--travel-copy-scale", String(1 - 0.24 * eased));
        layer.style.setProperty("--travel-copy-mobile-y", `${-36 * eased}px`);
        layer.style.setProperty("--travel-copy-mobile-scale", String(1 - 0.18 * eased));
        layer.style.setProperty("--travel-copy-tracking", `${0.11 + 0.04 * eased}em`);
      }

      window.dispatchEvent(new CustomEvent("travel-window-progress", { detail: progress }));
    }, []);

    useEffect(() => () => {
      window.dispatchEvent(new CustomEvent("travel-window-progress", { detail: 0 }));
    }, []);

    const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
      if (phase !== "window" || capability !== "ready") return;
      let handled = true;
      let target = progressRef.current;
      let commit = false;

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        target = Math.min(0.94, target + (event.key === "PageUp" ? 0.2 : 0.08));
      } else if (event.key === "ArrowDown" || event.key === "PageDown") {
        target = Math.max(0, target - (event.key === "PageDown" ? 0.2 : 0.08));
      } else if (event.key === "Home") {
        target = 0;
      } else if (event.key === "End" || event.key === "Enter" || event.key === " ") {
        target = 1;
        commit = true;
      } else {
        handled = false;
      }

      if (handled) {
        event.preventDefault();
        setShadeCommand((current) => ({ id: current.id + 1, target, commit }));
        if (commit) onOpen();
      }
    }, [capability, onOpen, phase]);

    const fallback = capability === "fallback";
    const markCanvasReady = useCallback(() => setCanvasReady(true), []);
    const handleCanvasError = useCallback(() => {
      setCanvasReady(false);
      setCapability("fallback");
    }, []);
    const showCanvas = capability === "ready" && canvasReady;

    return (
      <div
        ref={forwardedRef}
        className={`travel-window-layer is-${phase}${fallback ? " is-fallback" : ""}`}
        aria-label="Airplane window entrance to the travel diary"
      >
        <div
          ref={sliderRef}
          className="travel-window-interaction"
          role={fallback ? undefined : "slider"}
          tabIndex={fallback ? -1 : 0}
          aria-label={fallback ? undefined : "Airplane window shade"}
          aria-describedby={fallback ? undefined : "travel-window-instructions"}
          aria-valuemin={fallback ? undefined : 0}
          aria-valuemax={fallback ? undefined : 100}
          aria-valuenow={fallback ? undefined : 10}
          aria-orientation={fallback ? undefined : "vertical"}
          onKeyDown={handleKeyDown}
        >
          <div className={`travel-window-stage${showCanvas ? " is-ready" : ""}`}>
            <WindowStaticView status={capability === "checking" ? "Preparing the cabin" : undefined} />
            {capability === "ready" ? (
              <WindowErrorBoundary onError={handleCanvasError}>
                <AirplaneWindowCanvas
                  phase={phase}
                  theme={theme}
                  command={shadeCommand}
                  onProgress={updateProgress}
                  onOpen={onOpen}
                  onCameraPass={onCameraPass}
                  onReady={markCanvasReady}
                />
              </WindowErrorBoundary>
            ) : null}
          </div>
        </div>

        <div className="travel-window-copy">
          <p id="travel-window-instructions">
            {fallback ? "A quieter entrance is ready." : "Lift the shade to enter the diary."}
          </p>
          {fallback ? (
            <button type="button" onClick={onSkip}>Enter travel diary</button>
          ) : (
            <span>Drag, touch, or use the arrow keys</span>
          )}
        </div>

        <button className="travel-window-skip" type="button" onClick={onSkip}>
          Skip entrance
        </button>
      </div>
    );
  },
);
