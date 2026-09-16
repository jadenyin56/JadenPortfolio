import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection({ preview = false, showHeading = true }: { preview?: boolean; showHeading?: boolean }) {
  const visibleProjects = preview ? projects.filter((project) => project.featured).slice(0, 3) : projects;
  return <section className={showHeading ? "projects-section" : "projects-section projects-section-no-heading"} id="projects"><div className="page-container">
    {showHeading ? <SectionHeading index="01" marker="作品" eyebrow={preview ? "Selected work" : "Project archive"} title={<>Software with<br/><em>a reason to exist.</em></>} description={preview ? "Three selected builds. The complete archive holds the experiments, systems, and products behind them." : "Products, systems, hardware, and playful experiments—each framed as a short visual field note."}/> : null}
    <div className={preview ? "projects-list projects-list-preview" : "projects-list"}>{visibleProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} compact={preview}/>)}</div>
    {preview ? <Link className="archive-link" href="/projects">View all projects <ArrowUpRight size={15}/></Link> : null}
  </div></section>;
}
