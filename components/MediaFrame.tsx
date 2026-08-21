"use client";

import Image from "next/image";
import { ImageIcon, Play } from "lucide-react";
import { useState } from "react";
import type { ProjectMedia } from "@/data/projects";

export default function MediaFrame({ media, priority = false, className = "" }: { media?: ProjectMedia; priority?: boolean; className?: string }) {
  const [missing, setMissing] = useState(false);
  if (!media || missing) return <div className={`media-placeholder ${className}`}><ImageIcon size={24} /><span>Add project media</span><code>{media?.src ?? "Set media in data/projects.ts"}</code></div>;
  if (media.type === "video") return <div className={`relative overflow-hidden bg-zinc-950 ${className}`}><video className="h-full w-full object-cover" controls muted playsInline preload="metadata" poster={media.poster} onError={() => setMissing(true)} aria-label={media.alt} /><span className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur"><Play size={12} fill="currentColor" /> Demo</span></div>;
  return <div className={`relative overflow-hidden bg-zinc-950 ${className}`}><Image src={media.src} alt={media.alt} fill sizes="(max-width: 768px) 100vw, 60vw" priority={priority} className="object-cover" onError={() => setMissing(true)} /></div>;
}
