"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BookOpen, Code2, ExternalLink, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function DeveloperPassport() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const panel = closeRef.current?.closest("[role='dialog']");
      const focusable = panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); previous?.focus(); };
  }, [open]);

  return <>
    <button className="passport-trigger" type="button" onClick={() => setOpen(true)} aria-haspopup="dialog"><BookOpen size={16} /><span>Developer passport</span></button>
    <AnimatePresence>
      {open && <motion.div className="passport-backdrop" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
        <motion.section role="dialog" aria-modal="true" aria-labelledby="passport-title" className="passport-panel" initial={reduce ? false : { opacity: 0, y: 30, rotateX: -5 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, y: 18 }} transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }}>
          <button ref={closeRef} className="passport-close" type="button" onClick={() => setOpen(false)} aria-label="Close developer passport"><X size={18} /></button>
          <div className="passport-cover"><span>JY / DEV</span><BookOpen size={34} /><small>FIELD DOCUMENT · 2026</small></div>
          <div className="passport-content">
            <p className="font-mono text-[9px] uppercase tracking-[.2em] text-sky-900/60">Creative developer passport</p>
            <div className="mt-5 grid gap-6 sm:grid-cols-[.7fr_1.3fr]"><div className="passport-photo">JY<span>CAN</span></div><div><h2 id="passport-title">Jaden Yin</h2><p className="text-sm font-medium text-sky-950">Software Engineer</p><dl className="passport-details"><div><dt>Education</dt><dd>Waterloo Computer Engineering</dd></div><div><dt>Home base</dt><dd>Toronto / Waterloo</dd></div><div><dt>Focus</dt><dd>Backend · Full Stack · Cloud · AI</dd></div><div><dt>Core tools</dt><dd>Java · TypeScript · Python · React · Spring Boot</dd></div></dl></div></div>
            <div className="mt-7 border-t border-sky-950/15 pt-5"><p className="font-mono text-[9px] uppercase tracking-[.18em] text-sky-900/60">Project stamps</p><div className="passport-stamps">{projects.map((project, index) => <a href={`/projects/${project.slug}`} key={project.slug}><strong>{project.title}</strong><span>Project 0{index + 1}</span></a>)}</div></div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-sky-950"><a href={site.githubUrl}><Code2 size={14} /> GitHub</a><a href={site.linkedinUrl}><ExternalLink size={14} /> LinkedIn</a><a href={site.resumeUrl}><ExternalLink size={14} /> Resume</a></div>
          </div>
        </motion.section>
      </motion.div>}
    </AnimatePresence>
  </>;
}
