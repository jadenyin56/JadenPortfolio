import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <Reveal className={`project-destination project-destination-${index + 1}`} delay={index * 70}>
    <span className="trail-marker" aria-hidden="true"><i />{String(index + 1).padStart(2, "0")}</span>
    <div className="project-copy">
      <div className="project-stamp"><strong>{project.title}</strong><span>Project 0{index + 1}</span></div>
      <p className="project-kicker">Destination {String(index + 1).padStart(2, "0")} / {project.eyebrow}</p>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <p className="project-origin">Why it matters — {project.origin}</p>
      <div className="project-tech">{project.technology.map((item) => <span key={item}>{item}</span>)}</div>
      <Link className="project-explore" href={`/projects/${project.slug}`} aria-label={`Explore the ${project.title} case study`}>Explore project <ArrowUpRight size={17} /></Link>
    </div>
    <Link className={`project-visual accent-${project.accent}`} href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true"><MediaFrame media={project.featuredMedia} priority={index === 0} className="project-image" /></Link>
  </Reveal>;
}
