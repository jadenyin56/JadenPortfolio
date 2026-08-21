import { ArrowLeft, MapPin, Plane } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";

export default function TravelsPage() {
  return <main className="travel-destination"><Nav /><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24"><Link href="/#about" className="text-link"><ArrowLeft size={15} /> Back home</Link><header className="max-w-3xl py-16"><span className="destination-tag">Detour 02 · The Passport Log</span><p className="eyebrow">Field notes / Travel</p><h1 className="archive-title text-balance text-5xl font-semibold tracking-[-.055em] text-white sm:text-6xl">Learning by going.</h1><p className="mt-6 text-lg leading-8 text-zinc-400">Travel remains part of the portfolio&apos;s original identity—now kept as a personal field log that complements the engineering work.</p></header><section className="grid gap-4 md:grid-cols-3">{["A place that changed my perspective", "A detail I brought home", "Where I want to go next"].map((title, index) => <Reveal className="travel-entry rounded-2xl border border-white/8 p-6" key={title} delay={index * 70}>{index === 2 ? <Plane className="text-sky-300" size={20} /> : <MapPin className="text-sky-300" size={20} />}<span className="mt-14 block font-mono text-[10px] text-zinc-500">ENTRY 0{index + 1}</span><h2 className="mt-3 text-xl font-medium text-white">{title}</h2><p className="mt-3 text-sm leading-6 text-zinc-400">TODO: add a real destination, photograph, and short story.</p></Reveal>)}</section></div></main>;
}
