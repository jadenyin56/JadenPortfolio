import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function HomePage() {
  return <><Nav /><main className="home-page"><div className="home-animation" aria-label="Reserved space for Jaden's future travel animation"><div className="animation-sky" /><div className="animation-sun" /><div className="animation-water"><i /><i /><i /></div><div className="animation-route"><span /></div></div><section className="site-container home-hero"><Reveal><p className="page-index">01 / Home · Waterloo, Canada</p><h1>Hey, I&apos;m<br /><em>Jaden.</em></h1><p className="home-role">Computer Engineering @ Waterloo <span>/</span> Software Engineer</p><div className="home-intro"><p>I build practical software across full-stack products, backend systems, cloud infrastructure, and AI.</p><p>Most recently, I worked at TD Bank on internal applications and automation used by more than 100 people.</p></div><div className="home-links"><Link href="/projects">Explore projects <ArrowRight size={16} /></Link><Link href="/experience">View experience <ArrowRight size={16} /></Link><a href={site.githubUrl}><Code2 size={15} /> GitHub</a><a href={site.resumeUrl}>Resume <ExternalLink size={14} /></a></div></Reveal><div className="home-foot"><span>Toronto / Waterloo</span><span>Open to software engineering opportunities</span></div></section></main><Footer /></>;
}
