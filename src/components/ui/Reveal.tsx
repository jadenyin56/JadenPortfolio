"use client";

import { motion, useReducedMotion } from "motion/react";

export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <div className="reveal-mask"><motion.div className={className} initial={reduceMotion ? false : { y: "112%", rotate: 0.7 }} whileInView={reduceMotion ? undefined : { y: "0%", rotate: 0 }} viewport={{ once: true, margin: "-48px" }} transition={{ duration: .82, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div></div>;
}
