import { ArrowDown, ArrowUpRight, Code2, Compass, MapPin, Plane } from "lucide-react";
import DeveloperPassport from "@/components/DeveloperPassport";
import Environment from "@/components/Environment";
import Footer from "@/components/Footer";
import JourneyNav from "@/components/JourneyNav";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { destinations } from "@/data/destinations";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { site, technologies } from "@/data/site";

const [departure, shanghai, mountains, coast, destination] = destinations;

export default function Home() {
  return <main>
    <Nav /><JourneyNav /><DeveloperPassport />

    <section id="departure" className="hero-destination journey-section relative overflow-hidden border-b border-white/8 scroll-mt-20">
      <div className="hero-grid absolute inset-0" aria-hidden="true" /><div className="route-line" aria-hidden="true"><Plane size={18} /><span /></div>
      <div className="departure-composition relative mx-auto min-h-[calc(100svh-4rem)] max-w-[1500px] px-5 py-16 sm:px-8 md:min-h-[760px] md:py-24">
        <Reveal className="departure-meta"><LocationMeta destination={departure} /><div className="boarding-label"><span>YYZ</span><i /><span>WORLD</span><small>DEPARTURE 01</small></div></Reveal>
        <Reveal delay={70} className="departure-name"><span>Jaden</span><strong>Yin</strong></Reveal>
        <Reveal delay={140} className="departure-role"><p>Software Engineer</p><span>Computer Engineering<br />@ Waterloo</span></Reveal>
        <Reveal delay={190} className="departure-description"><p>I build full-stack systems, backend infrastructure, AI tools, and useful products—then sweat the details that make them reliable.</p><div><a href={site.resumeUrl}>Resume <ArrowUpRight size={14} /></a><a href={site.githubUrl}>GitHub <Code2 size={14} /></a></div></Reveal>
        <Reveal delay={240} className="departure-explore"><a href="#shanghai">Explore <ArrowDown size={16} /></a><span>43.6777 N<br />079.6248 W</span></Reveal>
      </div>
      <div className="transition-layer transition-to-city" aria-hidden="true" />
    </section>

    <section id="shanghai" className="shanghai-section journey-section relative overflow-hidden scroll-mt-20">
      <Environment destination={shanghai} />
      <div className="shanghai-composition relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-8 md:py-36">
        <LocationMeta destination={shanghai} />
        <div className="shanghai-title"><span>02 / Experience</span><h2>Built<br />in the<br />city.</h2><small>上海 · 2026</small></div>
        {experience.map((role) => <Reveal className="experience-editorial" key={role.company}>
          <div className="experience-identity"><p>{role.period}</p><h3>{role.company}</h3><strong>{role.role}</strong><span>{role.location}</span></div>
          <div className="experience-narrative"><p>{role.summary}</p><ol>{role.highlights.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></div>
          <div className="experience-stack"><span>Technical manifest</span>{role.technology.map((tech) => <b key={tech}>{tech}</b>)}</div>
        </Reveal>)}
      </div>
      <div className="transition-layer transition-city-mountain" aria-hidden="true" />
    </section>

    <section id="mountains" className="mountain-section journey-section relative overflow-hidden scroll-mt-20">
      <Environment destination={mountains} />
      <div className="mountain-composition relative z-10 mx-auto max-w-[1500px] px-5 py-24 sm:px-8 md:py-36">
        <LocationMeta destination={mountains} />
        <div className="mountain-title"><span>03 / Selected work</span><h2>Built<br />along<br />the way.</h2><p>Each stop explores a real problem, the engineering behind the solution, and what I learned along the route.</p></div>
        <div className="project-trail"><span aria-hidden="true" />{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div>
      </div>
      <div className="transition-layer transition-mountain-coast" aria-hidden="true" />
    </section>

    <section id="coast" className="coast-section journey-section relative overflow-hidden scroll-mt-20">
      <Environment destination={coast} />
      <div className="coast-composition relative z-10 mx-auto max-w-[1500px] px-5 py-28 sm:px-8 md:py-44">
        <LocationMeta destination={coast} />
        <div className="coast-title"><span>04 / The Coast</span><h2>Beyond<br />the code.</h2></div>
        <Reveal className="coast-story"><p>I&apos;m studying Computer Engineering at the University of Waterloo and enjoy building software that solves tangible problems.</p><p>I&apos;m especially interested in backend systems, cloud infrastructure, AI, and thoughtful full-stack products. Outside coursework, you&apos;ll usually find me at a hackathon, building a side project, taking photos, or planning where to travel next.</p><div><a href="/photography">Photography <ArrowUpRight size={14} /></a><a href="/travels">Travel notes <ArrowUpRight size={14} /></a></div></Reveal>
        <div className="technology-manifest"><span>What I build with</span>{Object.entries(technologies).map(([category, items]) => <div key={category}><strong>{category}</strong><p>{items.join(" · ")}</p></div>)}</div>
        <div className="mt-24 grid gap-4 md:grid-cols-2"><a className="departure-card photography-card" href="/photography"><span><Compass size={18} /> Contact sheet</span><h3>Photography</h3><p>Street light, small moments, and everyday observations.</p><ArrowUpRight /></a><a className="departure-card travel-card" href="/travels"><span><Plane size={18} /> Passport log</span><h3>Travel Notes</h3><p>Places, perspective, and details carried home.</p><ArrowUpRight /></a></div>
      </div>
      <div className="transition-layer transition-coast-night" aria-hidden="true" />
    </section>

    <div id="destination" className="journey-section scroll-mt-20"><Environment destination={destination} /><Footer /></div>
  </main>;
}

function LocationMeta({ destination }: { destination: (typeof destinations)[number] }) {
  return <div className="location-meta"><MapPin size={12} /><span>{destination.name}{destination.country ? `, ${destination.country}` : ""}</span><i /> <span>{destination.coordinates}</span></div>;
}
