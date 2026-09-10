import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export function ContactSection() {
  return <section className="contact-section" id="contact"><div className="page-container contact-grid">
    <div className="contact-label"><span aria-hidden="true">次</span><p>04 / Contact</p></div>
    <div className="contact-main"><p>Have a role, a project,<br/>or a place worth exploring?</p><h2>Where to<br/><em>next?</em></h2><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={22}/></a></div>
    <div className="contact-links"><a href={site.github} target="_blank" rel="noreferrer"><Github size={16}/>GitHub <ArrowUpRight size={13}/></a><a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn <ArrowUpRight size={13}/></a><a href={`mailto:${site.email}?subject=Resume request`}><Mail size={16}/>Request résumé <ArrowUpRight size={13}/></a></div>
  </div></section>;
}
