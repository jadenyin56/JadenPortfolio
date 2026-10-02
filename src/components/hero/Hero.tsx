"use client";

import { MapPin } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { PlaneHeroScene } from "./PlaneHeroScene";
import { PassportBook } from "./PassportBook";
import { WorkDoorLink } from "@/components/motion/WorkDoorLink";
import Link from "next/link";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { damping: 28, stiffness: 110, mass: 0.8 });
  const springY = useSpring(pointerY, { damping: 28, stiffness: 110, mass: 0.8 });
  const photoX = useTransform(springX, [-1, 1], [4, -4]);
  const photoY = useTransform(springY, [-1, 1], [3, -3]);
  const passportX = useTransform(springX, [-1, 1], [-7, 7]);
  const passportY = useTransform(springY, [-1, 1], [-5, 5]);
  const heroBounds = useRef<DOMRect | null>(null);

  function measureHero(event: React.PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType === "touch") return;
    heroBounds.current = event.currentTarget.getBoundingClientRect();
  }

  function respondToPointer(event: React.PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType === "touch") return;
    const bounds = heroBounds.current ?? event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  }

  function resetDepth() {
    heroBounds.current = null;
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section className="hero page-container" id="home" onPointerEnter={measureHero} onPointerMove={respondToPointer} onPointerLeave={resetDepth}>
      <div className="hero-main">
        <div className="hero-copy hero-copy-enter">
          <p className="hero-overline">
            <span>JY / 旅程</span>Engineer · Toronto
          </p>
          <h1>
            <span
              className="name-swap"
              tabIndex={0}
              aria-label="Jaden Yin, Chinese name Yin Zehua"
            >
              <span className="name-primary" aria-hidden="true">
                Jaden <em>Yin</em>
              </span>
              <span className="name-chinese" lang="zh-Hans" aria-hidden="true">
                尹<em>泽华</em>
              </span>
            </span>
          </h1>
          <p className="hero-role">
            <span>Computer Engineering @ UWaterloo</span>
          </p>
          <p className="hero-intro">
            <span>
              I build software across{" "}
              <strong>
              full-stack products, backend systems, cloud infrastructure, and AI
              </strong>
              and collect places along the way.
            </span>
          </p>
          <div className="hero-actions">
            <WorkDoorLink />
            <Link className="button button-secondary" href="/recruiter">Recruiter mode</Link>
          </div>
        </div>
        <div className="hero-meta hero-meta-enter">
          <div>
            <MapPin size={15} />
            <span>Based in Canada</span>
            <strong>Toronto / Waterloo</strong>
          </div>
          <div className="hero-route">
            <span>Currently studying</span>
            <strong>Waterloo CE</strong>
          </div>
        </div>
      </div>
      <motion.div className="hero-visual" style={reducedMotion ? undefined : { x: photoX, y: photoY }}>
        <PlaneHeroScene />
      </motion.div>
      <div className="passport-position">
        <motion.div className="passport-depth" style={reducedMotion ? undefined : { x: passportX, y: passportY }}>
          <PassportBook />
        </motion.div>
      </div>
    </section>
  );
}
