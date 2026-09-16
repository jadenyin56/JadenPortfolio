import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { PlaneHeroScene } from "./PlaneHeroScene";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero page-container" id="home">
      <div className="hero-main">
        <div className="hero-copy hero-copy-enter">
          <p className="hero-overline">
            <span>JY / 旅程</span>Engineer · Toronto
          </p>
          <h1>
            <span
              className="name-swap"
              tabIndex={0}
              aria-label="Jaden Yin, Chinese name Yin Zehua"
            >
              <span className="name-primary" aria-hidden="true">
                Jaden <em>Yin</em>
              </span>
              <span className="name-chinese" lang="zh-Hans" aria-hidden="true">
                尹<em>泽华</em>
              </span>
            </span>
          </h1>
          <p className="hero-role">
            <span>Software engineer,</span>
            <br />
            <span>occasional traveller.</span>
          </p>
          <p className="hero-intro">
            <span>
              I build considered software across{" "}
              <strong>
                full-stack products, backend systems, cloud infrastructure, and AI
              </strong>
              —and collect places along the way.
            </span>
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">
              View work <ArrowDownRight size={16} />
            </Link>
            <Link className="button button-secondary" href="/contact">
              Get in touch <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="hero-meta hero-meta-enter">
          <div>
            <MapPin size={15} />
            <span>Based in Canada</span>
            <strong>Toronto / Waterloo</strong>
          </div>
          <div className="hero-route">
            <span>Currently studying</span>
            <strong>Waterloo CE</strong>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <PlaneHeroScene />
      </div>
      <div className="hero-margin-note" aria-hidden="true">
        Quiet systems / useful journeys
      </div>
    </section>
  );
}
