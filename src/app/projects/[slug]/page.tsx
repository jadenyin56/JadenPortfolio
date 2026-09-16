import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { MediaRail } from "@/components/ui/MediaRail";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} — Jaden Yin`, description: project.description } : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <main className={`project-page project-page-${project.slug}`}>
      <header className="project-page-header page-container">
        <Link className="project-back" href="/projects"><ArrowLeft size={14}/> Project archive</Link>
        <div className="project-page-id"><span>{String(index + 1).padStart(2, "0")}</span><strong>{project.route}</strong></div>
        <h1>{project.title}</h1>
        <div className="project-page-intro"><p>{project.description}</p><span>{project.category}<br/>{project.location} · {project.year}</span></div>
      </header>
      <section className="project-page-visual page-container">
        <MediaRail items={project.media} title={`${project.title} project media`} autoPlay />
      </section>
      <section className="project-page-notes page-container">
        <p>Build notes / concise by design</p>
        <h2>The complete case study<br/><em>can grow here later.</em></h2>
        <div>
          <p>This page is ready for the engineering challenge, product decisions, and outcomes when those notes and final visuals are available.</p>
          <div className="project-tags">{project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
          <div className="project-links">
            {project.github ? <a href={project.github} target="_blank" rel="noreferrer"><Github size={14}/> GitHub <ArrowUpRight size={13}/></a> : null}
            {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={13}/></a> : null}
          </div>
        </div>
      </section>
      <Link className="next-project" href={`/projects/${nextProject.slug}`}><span>Next project / {String(((index + 1) % projects.length) + 1).padStart(2, "0")}</span><strong>{nextProject.title}</strong><ArrowUpRight size={28}/></Link>
    </main>
  );
}
