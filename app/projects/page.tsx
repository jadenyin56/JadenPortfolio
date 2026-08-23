import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
export const metadata: Metadata = { title: "Projects", description: "Selected software and embedded systems projects by Jaden Yin." };
export default function ProjectsPage() { return <><Nav /><main className="site-container"><header className="page-head"><div><p className="page-index">03 / Projects</p><h1>Things I&apos;ve<br />built.</h1></div><p>Selected projects across accessible products, embedded systems, full-stack engineering, and AI exploration.</p></header><section className="projects-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</section></main><Footer /></>; }
