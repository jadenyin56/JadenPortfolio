import {
  ArrowDown,
  Code2,
  Coffee,
  Github,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Plane,
  Sparkles,
} from "lucide-react";
import Nav from "@/components/Nav";
import { Cloud } from "@/components/SceneBits";

export default function Home() {
  return (
    <main className="arrivalPage">
      <Nav />
      <Cloud className="cloudOne" />
      <Cloud className="cloudTwo" />
      <div className="tropicalSun" />
      <section className="arrivalHero">
        <div className="arrivalCopy">
          <span className="locationPill"><MapPin size={15} /> Toronto · Remote friendly</span>
          <h1>Developer by trade.<br /><em>Explorer</em> by nature.</h1>
          <p className="intro">
            I&apos;m Jaden, a software developer building reliable, expressive
            digital products where thoughtful engineering meets human-centered design.
          </p>
          <p>
            I&apos;m happiest untangling a complicated system, tuning an
            interface until it feels effortless, or wandering Toronto with a
            camera after closing my laptop.
          </p>
          <div className="arrivalActions">
            <a className="cartoonButton coral" href="mailto:hello@jadenyin.com">
              <Mail size={18} /> Send a postcard
            </a>
            <a className="plainLink" href="#field-notes">More about me <ArrowDown size={16} /></a>
          </div>
        </div>
        <div className="airportScene" aria-label="Illustrated tropical airport arrival">
          <span className="skyBirds" aria-hidden="true">⌁　⌁</span>
          <div className="planeReal"><Plane /></div>
          <div className="islandBackdrop">
            <i className="farIsland" /><i className="nearIsland" />
            <span className="waterShine">﹏　﹏　﹏　﹏</span>
            <div className="sailboat"><i /><b /></div>
          </div>
          <div className="terminal">
            <div className="terminalGlass"><span>ARRIVALS</span><b>JY 2026 · ON TIME</b></div>
            <div className="terminalWindows" />
            <div className="terminalRoof" />
            <span className="terminalAntenna" />
            <div className="terminalDoor" />
            <div className="airportPeople"><i /><b /><span /></div>
            <div className="luggageCart"><i /><b /></div>
          </div>
          <div className="palm detailedPalm"><i /><b /><strong /><em /><span className="coconuts" /></div>
          <div className="luggageSticker"><Code2 size={18} /> FULL-STACK<br />TRAVELLER</div>
          <div className="passportStamp">✈ JY</div>
          <div className="runwayMarker">09L　· · ·　YYZ　· · ·　27R</div>
        </div>
      </section>

      <section className="fieldNotes" id="field-notes">
        <div className="polaroidProfile">
          <div className="profileImage">
            <span className="profileSun" />
            <span className="profilePerson">JY</span>
            <i className="profileLeaf" />
          </div>
          <p>Somewhere warm, probably debugging.</p>
          <span className="photoTape" />
        </div>
        <div className="notesCopy">
          <span className="chapter">ABOUT + CONTACT · BASE CAMP</span>
          <h2>Curious mind.<br />Practical builder.</h2>
          <p>
            I grew into software through equal parts logic and curiosity. My
            work blends product thinking, interface craft, and technical depth;
            the same instinct that makes me notice a crooked sign or a perfect
            patch of evening light makes me care about the last 5% of a product.
          </p>
          <div className="factGrid">
            <span><Code2 /> TypeScript + Python</span>
            <span><Sparkles /> Detail obsessed</span>
            <span><Languages /> English + Chinese</span>
            <span><Coffee /> Coffee-powered</span>
          </div>
          <div className="contactDock">
            <a href="mailto:hello@jadenyin.com"><Mail /> hello@jadenyin.com</a>
            <a href="#"><Github /> GitHub ↗</a>
            <a href="#"><Linkedin /> LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <footer className="arrivalFooter">Next departures: mountains · night city · old town</footer>
    </main>
  );
}
