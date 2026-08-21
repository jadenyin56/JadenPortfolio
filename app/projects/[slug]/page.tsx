import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check, Code2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Footer from "@/components/Footer";
import MediaFrame from "@/components/MediaFrame";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: `${project.title} — Jaden Yin`, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return <main>
    <Nav />
    <article>
      <header className="case-header"><div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24"><Link className="text-link mb-12" href="/#mountains"><ArrowLeft size={15} /> All work</Link><Reveal><div className="project-stamp case-stamp"><strong>{project.title}</strong><span>Engineering case study</span></div><p className="eyebrow">{project.eyebrow}</p><div className="grid gap-8 md:grid-cols-[1.25fr_.75fr] md:items-end"><div><h1 className="text-5xl font-semibold tracking-[-.055em] text-white sm:text-6xl md:text-7xl">{project.title}</h1><p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-400">{project.summary}</p></div><div className="flex flex-wrap gap-2 md:justify-end">{project.technology.map((tech) => <span className="tech-pill" key={tech}>{tech}</span>)}</div></div></Reveal><Reveal delay={100} className={`project-media accent-${project.accent} mt-12`}><MediaFrame media={project.featuredMedia} priority className="aspect-[16/8]" /></Reveal></div></header>
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
        {project.incomplete && <div className="mb-14 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 text-sm leading-6 text-amber-200">This case study intentionally contains TODO placeholders in <code>data/projects.ts</code>. Replace them only with verified project details.</div>}
        <CaseSection number="01" title="Overview"><p className="case-lead">{project.origin}</p></CaseSection>
        <CaseSection number="02" title="Problem"><p className="case-lead">{project.problem}</p></CaseSection>
        <CaseSection number="03" title="What I built"><BulletList items={project.built} /></CaseSection>
        <CaseSection number="04" title="Architecture"><p className="mb-8 text-zinc-400">Select a component to inspect its responsibility. Replace or extend these nodes in the project data as the system evolves.</p><ArchitectureDiagram nodes={project.architecture} /></CaseSection>
        <CaseSection number="05" title="Technical challenges"><div className="grid gap-3 sm:grid-cols-3">{project.challenges.map((item, index) => <div className="rounded-xl border border-white/8 bg-white/[.02] p-5" key={item}><span className="font-mono text-xs text-sky-400">0{index + 1}</span><p className="mt-4 text-sm leading-6 text-zinc-400">{item}</p></div>)}</div></CaseSection>
        <CaseSection number="06" title="Key features"><BulletList items={project.features} /></CaseSection>
        <CaseSection number="07" title="What I learned"><BulletList items={project.learnings} /></CaseSection>
        <CaseSection number="08" title="Screenshots / demo"><div className="grid gap-5 sm:grid-cols-2">{project.gallery.length ? project.gallery.map((media) => <MediaFrame media={media} className="aspect-[4/3] rounded-xl border border-white/10" key={media.src} />) : <MediaFrame className="aspect-[16/7] rounded-xl border border-white/10 sm:col-span-2" />}</div></CaseSection>
        <section className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-10"><div><p className="font-medium text-white">Explore the implementation</p><p className="mt-1 text-sm text-zinc-500">Links appear when added to the project data.</p></div><div className="flex gap-3">{project.githubUrl ? <a className="button-secondary" href={project.githubUrl}><Code2 size={17} /> GitHub</a> : <span className="button-disabled"><Code2 size={17} /> GitHub · add URL</span>}{project.demoUrl && <a className="button-primary" href={project.demoUrl}>Live demo <ArrowUpRight size={15} /></a>}</div></section>
      </div>
    </article>
    <Footer />
  </main>;
}

function CaseSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) { return <Reveal className="case-section"><div><span className="font-mono text-xs text-zinc-600">{number}</span><h2>{title}</h2></div><div>{children}</div></Reveal>; }
function BulletList({ items }: { items: string[] }) { return <ul className="space-y-4">{items.map((item) => <li className="flex gap-3 leading-7 text-zinc-400" key={item}><Check className="mt-1.5 shrink-0 text-sky-400" size={15} />{item}</li>)}</ul>; }
