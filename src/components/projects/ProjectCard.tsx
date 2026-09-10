import Image from "next/image";
import { ArrowUpRight, Github, Radio } from "lucide-react";
import type { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const projectNumber = String(index + 1).padStart(2, "0");
  return <article className={project.featured ? "project-card project-featured" : "project-card"}>
    <div className="project-image-wrap">
      <Image className="project-image" src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 65vw" priority={index === 0}/>
      <div className="image-corner image-corner-top"/><div className="image-corner image-corner-bottom"/>
      <span className="project-route">{project.route}</span>
    </div>
    <div className="project-details">
      <div className="project-ticket-top"><span>Journal entry / {projectNumber}</span><span>{project.location} · {project.year}</span></div>
      <div>
        <div className="project-category"><Radio size={12}/>{project.category}{project.status === "in-progress" ? <span>In progress</span> : null}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div>
        <div className="project-tags">{project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
        <div className="project-links">
          {project.github ? <a href={project.github} target="_blank" rel="noreferrer"><Github size={14}/>Source <ArrowUpRight size={13}/></a> : <span>Case notes available on request</span>}
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={13}/></a> : null}
        </div>
      </div>
    </div>
  </article>;
}
