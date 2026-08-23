import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
export default function ProjectCard({ project, index }: { project: Project; index: number }) { return <Reveal className="project-tile" delay={index * 60}><Link href={`/projects/${project.slug}`} className="project-thumb" aria-label={`Open ${project.title} case study`}><MediaFrame media={project.featuredMedia} priority={index < 2} className="project-thumb-media" /></Link><div className="project-tile-meta"><span>Project {String(index + 1).padStart(2, "0")}</span><span>{project.technology.slice(0, 3).join(" · ")}</span></div><h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2><p>{project.summary}</p><Link className="project-read" href={`/projects/${project.slug}`}>View case study <ArrowUpRight size={15} /></Link></Reveal>; }
