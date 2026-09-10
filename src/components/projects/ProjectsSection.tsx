import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  return <section className="projects-section" id="projects"><div className="page-container">
    <SectionHeading index="01" marker="作品" eyebrow="Selected work" title={<>Software with<br/><em>a reason to exist.</em></>} description="From accessible travel to embedded healthcare, each project begins with a human problem—not a technology checklist."/>
    <div className="projects-list">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index}/>)}</div>
  </div></section>;
}
