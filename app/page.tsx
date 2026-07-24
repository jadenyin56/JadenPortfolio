"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Map,
  Menu,
  MoveRight,
  Plane,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    place: "Toronto → Everywhere",
    title: "Roam",
    type: "Product design · 2025",
    description:
      "A smarter trip-planning companion that turns scattered inspiration into one calm, collaborative itinerary.",
    outcome: "32% faster planning",
    tone: "sunset",
    stamp: "PRODUCT",
  },
  {
    number: "02",
    place: "Vancouver, BC",
    title: "Tide & Timber",
    type: "Brand identity · 2024",
    description:
      "A coastal hospitality identity built to feel local, considered, and a little weathered by the Pacific.",
    outcome: "Identity + digital",
    tone: "forest",
    stamp: "BRAND",
  },
  {
    number: "03",
    place: "New York, NY",
    title: "Common Ground",
    type: "Web development · 2024",
    description:
      "A story-first digital home for a community studio, designed to turn curious visitors into regulars.",
    outcome: "2.4× more inquiries",
    tone: "cobalt",
    stamp: "BUILD",
  },
];

const timeline = [
  ["2025 — NOW", "Independent designer & developer", "Building thoughtful digital experiences for teams with places to go."],
  ["2023 — 2025", "Product designer · Northstar", "Led end-to-end product work across discovery, systems, and launch."],
  ["2021 — 2023", "Designer · Field Office", "Made identities and websites for culture, hospitality, and technology."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Jaden Yin, home">
          <span className="brandMark">JY</span>
          <span>Jaden Yin</span>
        </a>
        <div className={`navLinks ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#log" onClick={() => setMenuOpen(false)}>Travel log</a>
          <a className="navCta" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </div>
        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="gridTexture" />
        <div className="route routeOne" />
        <div className="heroCopy">
          <div className="eyebrow"><Compass size={16} /> Based in Toronto · Available worldwide</div>
          <h1>I make ideas<br />worth <em>going places</em> for.</h1>
          <p>
            I&apos;m Jaden, a multidisciplinary designer and developer turning
            ambitious ideas into memorable digital experiences.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#work">
              Explore my work <MoveRight size={18} />
            </a>
            <a className="textLink" href="#about">
              A little about me <ArrowDown size={17} />
            </a>
          </div>
        </div>

        <div className="heroJournal" aria-hidden="true">
          <div className="postcard">
            <div className="postcardImage">
              <span className="sun" />
              <span className="mountain mountainBack" />
              <span className="mountain mountainFront" />
              <span className="postcardLabel">somewhere<br />worth going</span>
            </div>
            <div className="postcardBottom">
              <span>FIELD NOTE № 24</span>
              <span>43.6532° N</span>
            </div>
          </div>
          <div className="ticket">
            <span className="ticketSmall">BOARDING PASS</span>
            <strong>YYZ</strong>
            <Plane size={20} />
            <strong>NEXT</strong>
            <span className="barcode">|||| ||| || ||||</span>
          </div>
          <div className="passportStamp">
            <span>JADEN YIN</span>
            <Compass size={24} />
            <b>CREATIVE EXPLORER</b>
          </div>
          <div className="paperclip" />
        </div>

        <div className="heroFooter">
          <span>DESIGNING SINCE 2021</span>
          <span className="coordinates">43.6532° N &nbsp; 79.3832° W</span>
          <span>SCROLL TO DEPART ↓</span>
        </div>
      </section>

      <section className="projects section" id="work">
        <div className="sectionIntro">
          <div>
            <span className="kicker">01 / SELECTED EXPEDITIONS</span>
            <h2>A few places<br />I&apos;ve taken ideas.</h2>
          </div>
          <p>
            A collection of products, identities, and digital spaces made with
            care, curiosity, and a healthy respect for the details.
          </p>
        </div>

        <div className="projectList">
          {projects.map((project) => (
            <a className="projectCard" href="#contact" key={project.title}>
              <div className={`projectVisual ${project.tone}`}>
                <span className="projectNumber">{project.number}</span>
                <div className="visualRoute">
                  <i />
                  <Plane size={24} />
                </div>
                <div className="projectStamp">
                  <span>{project.stamp}</span>
                  <Sparkles size={20} />
                  <small>JY · 2025</small>
                </div>
                <span className="placeTag">{project.place}</span>
              </div>
              <div className="projectInfo">
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="projectMeta">
                  <b>{project.outcome}</b>
                  <span className="roundArrow"><ArrowUpRight size={20} /></span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifestoMark"><Map size={28} /></div>
        <p className="handwritten">My north star</p>
        <blockquote>
          “The best work doesn&apos;t just look good. It gives people a sense
          of <em>where they are</em> and makes them excited about where they
          could go next.”
        </blockquote>
        <div className="signature">Jaden</div>
      </section>

      <section className="about section" id="about">
        <div className="aboutCard">
          <div className="portrait">
            <div className="portraitScene">
              <div className="portraitSun" />
              <span className="figure">JY</span>
            </div>
            <span className="tape tapeTop" />
            <span className="tape tapeBottom" />
            <span className="portraitCaption">On location · probably overthinking the details</span>
          </div>
          <div className="aboutCopy">
            <span className="kicker">02 / FIELD NOTES</span>
            <h2>Curious by nature.<br />Intentional by design.</h2>
            <p className="lead">
              I&apos;m a designer who codes, a developer who cares about type,
              and a lifelong collector of good stories.
            </p>
            <p>
              My approach blends strategy, visual craft, and technical
              thinking. I like getting close to the real problem, mapping the
              messy middle, and making the final experience feel inevitable.
            </p>
            <div className="skills">
              <span>Product design</span><span>Creative development</span>
              <span>Brand systems</span><span>Prototyping</span>
              <span>Good questions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline section" id="log">
        <div className="timelineHead">
          <span className="kicker">03 / TRAVEL LOG</span>
          <h2>The route so far.</h2>
        </div>
        <div className="timelineRows">
          {timeline.map(([year, role, description], index) => (
            <div className="timelineRow" key={year}>
              <span className="timelineYear">{year}</span>
              <span className="timelineDot">{index === 0 && <i />}</span>
              <h3>{role}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactRoute" />
        <div className="contactInner">
          <span className="kicker light">04 / NEXT DESTINATION</span>
          <h2>Have somewhere<br />interesting in mind?</h2>
          <p>I&apos;m always up for a good conversation and a new challenge.</p>
          <a className="button cream" href="mailto:hello@jadenyin.com">
            <Send size={18} /> Say hello
          </a>
        </div>
        <footer>
          <div className="brand footerBrand"><span className="brandMark">JY</span><span>Jaden Yin</span></div>
          <div className="socials">
            <a href="#top">LinkedIn ↗</a>
            <a href="#top">Dribbble ↗</a>
            <a href="#top">GitHub ↗</a>
          </div>
          <span>© 2026 · MADE WITH CURIOSITY</span>
        </footer>
      </section>
    </main>
  );
}
