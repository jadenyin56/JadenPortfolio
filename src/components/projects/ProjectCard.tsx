import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { MediaRail } from "@/components/ui/MediaRail";
import { Tag } from "@/components/ui/Tag";

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
            {project.github ? (
              <a
                className="project-icon-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                title="View source code on GitHub"
              >
                <Github aria-hidden="true" size={19} strokeWidth={1.6} />
              </a>
            ) : (
              <span className="project-link-note">Case notes available on request</span>
            )}
            {project.liveUrl ? (
              <a
                className="project-icon-link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} live project`}
                title="Open live project"
              >
                <ExternalLink aria-hidden="true" size={19} strokeWidth={1.6} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
