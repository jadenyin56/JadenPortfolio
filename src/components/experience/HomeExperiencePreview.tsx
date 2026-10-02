import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";

export function HomeExperiencePreview({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className="home-experience">
      <div className="page-container home-experience-list">
        {experience.map((role, index) => (
          <article className="experience-feature" key={`${role.company}-${role.dates}`}>
            <div className="home-experience-index" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="home-experience-copy">
              <div className="experience-feature-meta">
                <span>{role.dates}</span>
                <span>{role.location}</span>
              </div>
              <p className="experience-company">{role.company}</p>
              <h2>{role.title}</h2>
              <p className="home-role-summary">{role.description}</p>
              {!standalone ? (
                <Link className="archive-link archive-link-light" href="/experience">
                  Read the work notes <ArrowUpRight size={15} />
                </Link>
              ) : null}
            </div>

            <figure className="experience-logo-panel" style={{ backgroundColor: role.logo.background }}>
              <Image
                className="experience-company-logo"
                src={role.logo.src}
                alt={role.logo.alt}
                width={role.logo.width}
                height={role.logo.height}
                sizes="(max-width: 760px) calc(100vw - 86px), 34vw"
                unoptimized
              />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}
