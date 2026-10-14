import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import { ExperienceBrandMedia } from "./ExperienceBrandMedia";

export function HomeExperiencePreview({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className="home-experience">
      <div className="page-container home-experience-list">
        {experience.map((role) => (
          <article className="experience-feature" key={`${role.company}-${role.dates}`}>
            <div className="home-experience-copy">
              <div className="experience-feature-meta">
                <span className="experience-dates">{role.dates}</span>
                <span className="experience-location">{role.location}</span>
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
              <ExperienceBrandMedia logo={role.logo} />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
}
