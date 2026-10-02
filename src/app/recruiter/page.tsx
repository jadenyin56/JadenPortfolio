import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Recruiter view — Jaden Yin",
  description: "A concise, text-only overview of Jaden Yin's software projects, experience, education, and contact details.",
};

export default function RecruiterPage() {
  return (
    <main className="recruiter-page">
      <div className="recruiter-shell">
        <header className="recruiter-header">
          <Link href="/">← Portfolio view</Link>
          <p>Text-only overview</p>
        </header>
        <section className="recruiter-intro" aria-labelledby="recruiter-title">
          <h1 id="recruiter-title">Jaden Yin</h1>
          <p>{site.title}</p>
          <p>{site.location}</p>
          <div className="recruiter-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
        <section className="recruiter-section" aria-labelledby="recruiter-experience">
          <h2 id="recruiter-experience">Experience</h2>
          <div className="recruiter-section-content">
            {experience.map((role) => (
              <article className="recruiter-entry" key={`${role.company}-${role.dates}`}>
                <div className="recruiter-entry-heading"><h3>{role.title} · {role.company}</h3><span>{role.dates}</span></div>
                <p>{role.location} · {role.description}</p>
                <ul>{role.accomplishments.map((item) => <li key={item}>{item}</li>)}</ul>
                <p className="recruiter-tech">{role.technologies.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="recruiter-section" aria-labelledby="recruiter-projects">
          <h2 id="recruiter-projects">Projects</h2>
          <div className="recruiter-section-content">
            {projects.map((project) => (
              <article className="recruiter-entry" key={project.slug}>
                <div className="recruiter-entry-heading"><h3>{project.title}</h3><span>{project.year} · {project.category}</span></div>
                <p>{project.description}</p>
                <p className="recruiter-tech">{project.technologies.join(" · ")}</p>
                {project.github || project.liveUrl ? <div className="recruiter-entry-links">{project.github ? <a href={project.github} target="_blank" rel="noreferrer">Source code</a> : null}{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project</a> : null}</div> : null}
              </article>
            ))}
          </div>
        </section>
        <section className="recruiter-section recruiter-last" aria-labelledby="recruiter-education">
          <h2 id="recruiter-education">Education &amp; more</h2>
          <div className="recruiter-section-content">
            <p>Computer Engineering · University of Waterloo</p>
            <p>Based in Toronto / Waterloo, Canada. Travel photographs and field notes are collected separately in the <Link href="/travels">travel archive</Link>.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
