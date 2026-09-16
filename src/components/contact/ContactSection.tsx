import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { ThemePhoto } from "@/components/ui/ThemePhoto";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <ThemePhoto
        className="contact-photo"
        daySrc="/images/editorial/contact-tokyo-night.jpg"
        nightSrc="/images/editorial/night-shanghai.jpg"
        dayAlt="A lantern-lit side street in Tokyo at night"
        nightAlt="Shanghai skyscrapers glowing through purple night fog"
        sizes="100vw"
      />
      <span className="contact-photo-shade" aria-hidden="true" />

      <div className="page-container contact-grid">
        <div className="contact-label">
          <span aria-hidden="true">次</span>
          <p>04 / Contact</p>
        </div>
        <div className="contact-main">
          <p>
            Have a role, a project,
            <br />
            or a place worth exploring?
          </p>
          <h2>
            Where to
            <br />
            <em>next?</em>
          </h2>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
            <ArrowUpRight size={22} />
          </a>
        </div>
        <div className="contact-links">
          <a href={site.github} target="_blank" rel="noreferrer">
            <Github size={16} />GitHub <ArrowUpRight size={13} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} />LinkedIn <ArrowUpRight size={13} />
          </a>
          <a href={`mailto:${site.email}?subject=Resume request`}>
            <Mail size={16} />Request résumé <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <a
        className="contact-photo-credit theme-caption-day"
        href="https://unsplash.com/photos/lantern-on-the-street-at-nighttime--F3wMFrZ7z0"
        target="_blank"
        rel="noreferrer"
      >
        Tokyo · Denys Nevozhai
      </a>
      <a className="contact-photo-credit theme-caption-night" href="https://unsplash.com/photos/shanghai-skyline-at-night-HISGDbuMfro" target="_blank" rel="noreferrer">Shanghai · Spencer Liao</a>
    </section>
  );
}
