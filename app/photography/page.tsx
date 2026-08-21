import { ArrowLeft, Camera, ImageIcon } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";

export default function PhotographyPage() {
  return <main className="photo-destination"><Nav /><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24"><Link href="/#about" className="text-link"><ArrowLeft size={15} /> Back home</Link><header className="max-w-3xl py-16"><span className="destination-tag">Detour 01 · The Contact Sheet</span><p className="eyebrow">Field notes / Photography</p><h1 className="archive-title text-balance text-5xl font-semibold tracking-[-.055em] text-white sm:text-6xl">Things worth noticing.</h1><p className="mt-6 text-lg leading-8 text-zinc-400">A quieter side of the site for photographs, places, and details outside the code editor.</p></header><section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["photo-01.webp", "photo-02.webp", "photo-03.webp", "photo-04.webp", "photo-05.webp", "photo-06.webp"].map((file, index) => <Reveal className={`media-placeholder rounded-xl border border-white/8 ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`} key={file} delay={index * 50}><Camera size={22} /><span>Add a photograph</span><code>/personal/photography/{file}</code></Reveal>)}</section><p className="mt-8 flex items-center gap-2 text-xs text-zinc-600"><ImageIcon size={13} /> Replace these slots with Next.js Image components after adding your final photographs.</p></div></main>;
}
