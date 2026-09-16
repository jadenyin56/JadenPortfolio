"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ImagePlus, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/types";
import { cn } from "@/lib/utils";

type MediaRailProps = {
  items: MediaItem[];
  title: string;
  className?: string;
  eyebrow?: string;
  autoPlay?: boolean;
  direction?: 1 | -1;
};

export function MediaRail({
  items,
  title,
  className,
  eyebrow,
  autoPlay = false,
  direction = 1,
}: MediaRailProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.22 });
    observer.observe(rail);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay || !inView || reduceMotion || paused || items.length < 2 || window.matchMedia("(max-width: 760px)").matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = direction === 1
          ? (current + 1) % items.length
          : (current - 1 + items.length) % items.length;
        const viewport = viewportRef.current;
        const target = viewport?.children.item(next) as HTMLElement | null;
        if (viewport && target) viewport.scrollTo({ left: target.offsetLeft, top: 0, behavior: "smooth" });
        return next;
      });
    }, 5200);
    return () => window.clearInterval(timer);
  }, [autoPlay, direction, inView, items.length, paused, reduceMotion]);

  useEffect(() => () => {
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
  }, []);

  function moveTo(nextIndex: number) {
    const boundedIndex = Math.max(0, Math.min(nextIndex, items.length - 1));
    const viewport = viewportRef.current;
    const target = viewport?.children.item(boundedIndex) as HTMLElement | null;
    if (viewport && target) viewport.scrollTo({ left: target.offsetLeft, top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    setActiveIndex(boundedIndex);
  }

  function syncActiveSlide() {
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current;
      if (viewport) {
        const slides = Array.from(viewport.children) as HTMLElement[];
        const closestIndex = slides.reduce((closest, slide, index) => {
          const currentDistance = Math.abs(slide.offsetLeft - viewport.scrollLeft);
          const closestDistance = Math.abs(
            slides[closest].offsetLeft - viewport.scrollLeft,
          );
          return currentDistance < closestDistance ? index : closest;
        }, 0);
        setActiveIndex(closestIndex);
      }
      frameRef.current = null;
    });
  }

  return (
    <section ref={railRef} className={cn("media-rail", autoPlay && "media-rail-auto", className)} aria-label={title} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div
        ref={viewportRef}
        className="media-viewport"
        onScroll={syncActiveSlide}
      >
        {items.map((item, index) => (
          <figure className="media-slide" key={`${item.label}-${index}`}>
            {item.kind === "image" && item.src ? (
              <Image
                className="media-image"
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 760px) 92vw, 62vw"
              />
            ) : (
              <div
                className={`media-placeholder is-${item.kind}`}
                role="img"
                aria-label={item.alt}
              >
                {item.kind === "video-placeholder" ? (
                  <Play aria-hidden="true" size={30} strokeWidth={1.25} />
                ) : (
                  <ImagePlus aria-hidden="true" size={30} strokeWidth={1.25} />
                )}
                <span>
                  {item.kind === "video-placeholder"
                    ? "Video placeholder"
                    : "Photo placeholder"}
                </span>
              </div>
            )}
            <figcaption>
              <span>{item.label}</span>
              <strong>{item.caption}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
      {eyebrow ? <span className="media-eyebrow">{eyebrow}</span> : null}
      <div className="media-controls">
        <span aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={() => moveTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label={`Previous ${title.toLowerCase()}`}
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => moveTo(activeIndex + 1)}
          disabled={activeIndex === items.length - 1}
          aria-label={`Next ${title.toLowerCase()}`}
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
