import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { PlaneHeroScene } from "./PlaneHeroScene";

export function Hero() {
  return <section className="hero page-container" id="home">
    <div className="hero-main">
      <Reveal className="hero-copy">
        <p className="hero-overline"><span>JY / 旅程</span>Portfolio · 2026</p>
        <h1>Jaden <em>Yin</em></h1>
        <p className="hero-role">Software engineer<br/>&amp; occasional traveller.</p>
        <p className="hero-intro">I build thoughtful software across <strong>full-stack products, backend systems, cloud infrastructure, and AI</strong>—then collect places along the way.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">View work <ArrowDownRight size={16}/></a><a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={15}/></a></div>
      </Reveal>
      <Reveal className="hero-meta" delay={.08}>
        <div><MapPin size={15}/><span>Based in Canada</span><strong>Toronto / Waterloo</strong></div>
        <div className="hero-route"><span>Route note</span><strong>YYZ <i/> YVR</strong></div>
      </Reveal>
    </div>
    <Reveal className="hero-visual" delay={.14}><PlaneHeroScene/></Reveal>
    <div className="hero-margin-note" aria-hidden="true">Quiet systems / useful journeys</div>
  </section>;
}
