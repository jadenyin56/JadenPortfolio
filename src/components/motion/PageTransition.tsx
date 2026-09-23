"use client";

import { motion, useReducedMotion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type DoorPhase = "closing" | "covered" | "opening";
type DoorState = { href: string; phase: DoorPhase; theme: "day" | "night" };

const WorkDoorContext = createContext<(href: string) => boolean>(() => false);

export function useWorkDoorTransition() {
  return useContext(WorkDoorContext);
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [door, setDoor] = useState<DoorState | null>(null);
  const busyRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);
  const safetyTimerRef = useRef<number | null>(null);

  const startWorkDoor = useCallback((href: string) => {
    if (reduceMotion || pathname === href) return false;
    if (busyRef.current) return true;
    busyRef.current = true;
    setDoor({ href, phase: "closing", theme: document.documentElement.dataset.theme === "night" ? "night" : "day" });
    closeTimerRef.current = window.setTimeout(() => {
      setDoor((current) => current ? { ...current, phase: "covered" } : current);
      router.push(href);
      safetyTimerRef.current = window.setTimeout(() => {
        setDoor((current) => current?.phase === "covered" ? { ...current, phase: "opening" } : current);
      }, 5000);
    }, 900);
    return true;
  }, [pathname, reduceMotion, router]);

  useEffect(() => {
    if (door?.phase !== "covered" || pathname !== door.href) return;
    if (safetyTimerRef.current !== null) {
      window.clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
    const timer = window.setTimeout(() => setDoor((current) => current?.phase === "covered" ? { ...current, phase: "opening" } : current), 100);
    return () => window.clearTimeout(timer);
  }, [door, pathname]);

  useEffect(() => {
    if (door?.phase !== "opening") return;
    const timer = window.setTimeout(() => {
      busyRef.current = false;
      setDoor(null);
    }, 950);
    return () => window.clearTimeout(timer);
  }, [door]);

  useEffect(() => () => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    if (safetyTimerRef.current !== null) window.clearTimeout(safetyTimerRef.current);
  }, []);

  return (
    <WorkDoorContext.Provider value={startWorkDoor}>
      <motion.div
        aria-hidden="true"
        className={door ? "route-curtain is-suppressed" : "route-curtain"}
        key={pathname}
        initial={reduceMotion ? false : { scaleY: 1 }}
        animate={reduceMotion ? undefined : { scaleY: 0 }}
        transition={{ duration: 0.68, ease: [0.76, 0, 0.24, 1] }}
      />
      <div className="route-frame">{children}</div>
      {door ? <div className={`work-door-overlay is-${door.phase} is-${door.theme}`} aria-hidden="true"><div className="work-door-panel is-left"/><div className="work-door-panel is-right"/><span className="work-door-caption">01 / WORK</span></div> : null}
    </WorkDoorContext.Provider>
  );
}
