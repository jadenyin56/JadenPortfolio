"use client";

import { Code2, ExternalLink, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/data/site";

const internal = [
  { href: "/#mountains", label: "Work" },
  { href: "/#shanghai", label: "Experience" },
  { href: "/#coast", label: "About" },
  { href: "/photography", label: "Photography" },
  { href: "/travels", label: "Travel Notes" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#090b10]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg border border-white/15 bg-white/[.06] text-xs text-white transition group-hover:border-sky-400/50">JY</span>
          <span>Jaden Yin</span>
        </Link>
        <div className="hidden items-center gap-5 text-sm text-zinc-400 lg:flex">
          {internal.map((link) => <Link className="nav-link" href={link.href} key={link.href}>{link.label}</Link>)}
          <a className="nav-link" href={site.resumeUrl}>Resume</a>
          <a className="icon-link" href={site.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17} /></a>
          <a className="icon-link" href={site.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><ExternalLink size={17} /></a>
        </div>
        <button className="icon-link lg:hidden" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/8 bg-[#090b10] lg:hidden">
            <div className="flex h-full flex-col px-5 py-8">
              {[...internal, { href: site.resumeUrl, label: "Resume" }].map((link, index) => (
                <motion.a initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .05 }} className="border-b border-white/8 py-5 text-2xl font-medium" href={link.href} key={link.label} onClick={() => setOpen(false)}>{link.label}</motion.a>
              ))}
              <div className="mt-auto flex gap-3">
                <a className="button-secondary flex-1" href={site.githubUrl}><Code2 size={17} /> GitHub</a>
                <a className="button-secondary flex-1" href={site.linkedinUrl}><ExternalLink size={17} /> LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
