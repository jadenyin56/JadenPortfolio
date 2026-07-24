import { BriefcaseBusiness, Code2, Flag, Route } from "lucide-react";
import Nav from "@/components/Nav";
import { Cloud } from "@/components/SceneBits";

const roles = [
  ["2025 — NOW", "Software Developer", "Independent", "Building full-stack products and creative web experiences for ambitious teams.", "8,848 M"],
  ["2023 — 2025", "Frontend Developer", "Northstar Labs", "Shipped accessible product features, strengthened the design system, and improved Core Web Vitals.", "5,895 M"],
  ["2022 — 2023", "Developer Intern", "Field Systems", "Built internal tools and APIs that replaced repetitive manual workflows.", "4,478 M"],
];

export default function Experience() {
  return (
    <main className="mountainPage experienceMountain">
      <Nav />
      <Cloud className="cloudOne" /><Cloud className="cloudThree" />
      <header className="destinationHead">
        <span className="chapter">STOP 01 · THE MOUNTAINS</span>
        <h1>The climb<br /><em>so far.</em></h1>
        <p>Every role added new altitude: stronger systems, sharper craft, and better ways to build together.</p>
      </header>
      <div className="mountainRange realisticRange" aria-hidden="true">
        <span className="sunGlow" />
        <span className="atmosphere" />
        <i className="peak peakOne" /><i className="peak peakTwo" /><i className="peak peakThree" />
        <i className="snow snowOne" /><i className="snow snowTwo" /><i className="snow snowThree" />
        <span className="pine p1">▲</span><span className="pine p2">▲</span><span className="pine p3">▲</span>
        <span className="pine p4">▲</span><span className="pine p5">▲</span>
        <span className="mountainCabin"><i /><b /><em /></span>
        <span className="mountainBirds">⌁　⌁</span>
        <span className="valleyFog fogOne" /><span className="valleyFog fogTwo" />
        <span className="tarn"><b /></span>
        <span className="trailPath" />
        <span className="trailLine"><Route /></span>
      </div>
      <section className="climbLog">
        {roles.map(([date, role, company, copy, altitude], index) => (
          <article className="climbStop" key={date}>
            <div className="climbMarker">{index === 0 ? <Flag /> : `0${index + 1}`}</div>
            <div className="climbDate">{date}<small>{altitude}</small></div>
            <div><span>{company}</span><h2>{role}</h2></div>
            <p>{copy}</p>
          </article>
        ))}
      </section>
      <div className="pageTrail"><BriefcaseBusiness size={17} /> Experience earned one switchback at a time.</div>
    </main>
  );
}
