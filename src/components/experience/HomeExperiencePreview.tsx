import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import type { MediaItem } from "@/types";
import { ExperienceBrandMedia } from "./ExperienceBrandMedia";

function PhotoSlot({ item }: { item: MediaItem }) {
  if (item.kind === "image" && item.src) {
    return (
      <figure className="experience-gallery-image">
        <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1050px) 50vw, 24vw" />
      </figure>
    );
  }

  return (
    <figure className="experience-gallery-placeholder" aria-label={item.alt}>
      <span>{item.label}</span>
      <figcaption>{item.caption}</figcaption>
    </figure>
  );
}

export function HomeExperiencePreview({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className="home-experience" aria-label="Experience and education">
      <div className="page-container home-experience-list">
        {experience.map((role) => (
          <article className="experience-feature" key={`${role.company}-${role.dates}`}>
            <div className="home-experience-copy">
              <header className="experience-entry-header">
                <span className="experience-brand-mark" style={{ backgroundColor: role.logo.background }}>
                  <Image src={role.logo.src} alt="" width={role.logo.width} height={role.logo.height} unoptimized />
                </span>
                <span className="experience-entry-identity">
                  <strong>{role.company}</strong>
                  <small>Professional experience</small>
                </span>
                <span className="experience-feature-meta">
                  <strong>{role.dates}</strong>
                  <small>{role.location}</small>
                </span>
              </header>

              <h2 className="experience-entry-title">{role.title}</h2>
              <p className="home-role-summary">{role.description}</p>

              <div className="experience-tool-group">
                <p>Tools used</p>
                <div className="experience-tool-list" aria-label={`Tools used at ${role.company}`}>
                  {role.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </div>

              {!standalone ? (
                <Link className="archive-link archive-link-light" href="/experience">
                  Read the work notes <ArrowUpRight size={15} />
                </Link>
              ) : null}
            </div>

            <div className="experience-gallery experience-gallery-td" aria-label={`${role.company} photo gallery`}>
              <figure className="experience-gallery-primary" style={{ backgroundColor: role.logo.background }}>
                <ExperienceBrandMedia logo={role.logo} />
              </figure>
              {role.media.slice(0, 2).map((item) => <PhotoSlot item={item} key={item.label} />)}
            </div>
          </article>
        ))}

        {standalone ? (
          <article className="experience-feature experience-feature-education">
            <div className="home-experience-copy">
              <header className="experience-entry-header">
                <span className="experience-brand-mark experience-brand-mark-waterloo">
                  <Image
                    src={education.logo.src}
                    alt=""
                    width={education.logo.width}
                    height={education.logo.height}
                    unoptimized
                  />
                </span>
                <span className="experience-entry-identity">
                  <strong>{education.institution}</strong>
                  <small>{education.level}</small>
                </span>
                <span className="experience-feature-meta">
                  <strong>{education.dates}</strong>
                  <small>{education.location}</small>
                </span>
              </header>

              <h2 className="experience-entry-title">{education.degree}</h2>
              <p className="home-role-summary">{education.description}</p>

              <dl className="education-facts">
                <div><dt>Program</dt><dd>{education.program}</dd></div>
                <div><dt>Format</dt><dd>{education.format}</dd></div>
              </dl>

              <div className="experience-tool-group">
                <p>Program focus</p>
                <div className="experience-tool-list" aria-label="Program focus">
                  {education.focus.map((focus) => <span key={focus}>{focus}</span>)}
                </div>
              </div>
            </div>

            <div className="experience-gallery experience-gallery-education" aria-label="University of Waterloo photo gallery">
              <figure className="experience-gallery-primary experience-waterloo-logo">
                <Image
                  src={education.logo.src}
                  alt={education.logo.alt}
                  width={education.logo.width}
                  height={education.logo.height}
                  sizes="(max-width: 1050px) calc(100vw - 48px), 44vw"
                  unoptimized
                />
              </figure>
              {education.media.map((item) => <PhotoSlot item={item} key={item.label} />)}
            </div>
          </article>
        ) : null}
      </div>
    </section>
  );
}
