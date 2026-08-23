"use client";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";
import type { ProjectMedia } from "@/data/projects";
export default function MediaFrame({ media, priority = false, className = "" }: { media?: ProjectMedia; priority?: boolean; className?: string }) {
  const [missing, setMissing] = useState(false);
  if (!media || missing) return <div className={`media-placeholder ${className}`}><ImageIcon size={19} /><span>Project media</span><code>{media?.src ?? "Add media in data/projects.ts"}</code></div>;
  if (media.type === "video") return <video className={className} controls muted playsInline preload="metadata" poster={media.poster} aria-label={media.alt} onError={() => setMissing(true)} />;
  return <div className={`media-image ${className}`}><Image src={media.src} alt={media.alt} fill sizes="(max-width: 700px) 100vw, 50vw" priority={priority} onError={() => setMissing(true)} /></div>;
}
