import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/types";
import { MediaRail } from "@/components/ui/MediaRail";
import { Tag } from "@/components/ui/Tag";
import Link from "next/link";

export function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  const projectNumber = String(index + 1).padStart(2, "0");
  return (
    <article
      className={
        `${project.featured ? "project-card project-featured" : "project-card"} ${compact ? "project-compact" : ""} project-${project.slug}`
      }
    >
      <MediaRail
        className="project-image-wrap"
        items={project.media}
        title={`${project.title} media`}
        eyebrow={project.route}
        autoPlay
        direction={index % 2 === 0 ? 1 : -1}
      />
      <div className="project-details">
        <div className="project-ticket-top">
          <span>Journal entry / {projectNumber}</span>
          <span>
            {project.location} · {project.year}
          </span>
        </div>
        <div>
          <div className="project-category">
            {project.category}
            {project.status === "in-progress" ? <span>In progress</span> : null}
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div>
          <div className="project-tags">
            {project.technologies.map((technology) => (
              <Tag key={technology}>{technology}</Tag>
            ))}
          </div>
          <div className="project-links">
            <Link href={`/projects/${project.slug}`}>
              View project <ArrowUpRight size={13} />
            </Link>
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github size={14} />
                GitHub <ArrowUpRight size={13} />
              </a>
            ) : (
              <span>Case notes available on request</span>
            )}
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live project <ArrowUpRight size={13} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
