"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="route-curtain"
        key={pathname}
        initial={reduceMotion ? false : { scaleY: 1 }}
        animate={reduceMotion ? undefined : { scaleY: 0 }}
        transition={{ duration: 0.68, ease: [0.76, 0, 0.24, 1] }}
      />
      <div className="route-frame">{children}</div>
    </>
  );
}
