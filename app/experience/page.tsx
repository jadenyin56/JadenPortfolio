import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";
export const metadata: Metadata = { title: "Experience", description: "Jaden Yin's software engineering experience." };
export default function ExperiencePage() { return <><Nav /><main><header className="site-container page-head"><div><p className="page-index">02 / Experience</p><h1>Work that<br />shipped.</h1></div><p>Production software, internal systems, and engineering decisions made with real users in mind.</p></header>{experience.map((role) => <section className="experience-band" key={role.company}><Reveal className="site-container experience-layout"><div className="experience-main"><div className="experience-meta"><span>{role.company}</span><span>{role.period}</span></div><h2>{role.role}</h2><p className="experience-summary">{role.summary}</p><ul>{role.highlights.map((item) => <li key={item}>{item}</li>)}</ul><div className="stack-line">{role.technology.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="experience-media"><span>Internship media</span><code>{role.media[0].src}</code></div></Reveal></section>)}</main><Footer /></>; }
