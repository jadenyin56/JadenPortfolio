import { ArrowUpRight, CodeXml, Database, Github, ServerCog } from "lucide-react";
import Nav from "@/components/Nav";
import { Stars } from "@/components/SceneBits";

const projects = [
  ["01", "Roam API", "TypeScript · Node.js · PostgreSQL", "Collaborative trip planning with real-time itineraries, intelligent search, and resilient offline sync.", "45% faster planning"],
  ["02", "Summit", "Next.js · GraphQL · AWS", "A performance dashboard that turns complex team data into clear, actionable product decisions.", "99.9% uptime"],
  ["03", "Trailhead", "React · Python · FastAPI", "An accessible learning platform with adaptive paths and an exceptionally quick interface.", "2.3× engagement"],
];

export default function Projects() {
  return (
    <main className="cityPage projectsCity">
      <Nav light />
      <Stars />
      <div className="moonGlow"><span className="moonDisc" /></div>
      <span className="droneStreak" />
      <header className="cityHead">
        <span className="chapter">STOP 02 · NIGHT CITY</span>
        <h1>Software that<br /><em>keeps the lights on.</em></h1>
        <p>Production projects engineered for speed, clarity, and life after launch.</p>
      </header>
      <section className="projectBillboard">
        {projects.map(([number, name, stack, copy, result]) => (
          <article className="nightProject" key={name}>
            <div className="projectNeon">PROJECT {number}<span>营业中 · ONLINE</span></div>
            <h2>{name}</h2>
            <b>{stack}</b>
            <p>{copy}</p>
            <div className="nightResult"><span>{result}</span><span><Github /><ArrowUpRight /></span></div>
          </article>
        ))}
      </section>
      <section className="techMarquee">
        <span><CodeXml /> React / Next.js</span><span><ServerCog /> Node.js / Python</span>
        <span><Database /> PostgreSQL / Redis</span>
      </section>
      <div className="shanghaiAtmosphere" aria-hidden="true">
        <span className="rain rainBack" /><span className="rain rainFront" />
        <div className="pearlTower"><i /><b /><strong /><em /></div>
        <div className="skyBridge"><span>上海 · SHANGHAI　　未来由你创造</span></div>
        <div className="maglev"><i>02</i><b>浦东　PUDONG</b><span>▦ ▦ ▦ ▦ ▦</span></div>
        <div className="neonSign signCode">代<br />码<small>CODE</small></div>
        <div className="neonSign signFuture">未 来<br /><small>BUILD / SHIP / REPEAT</small></div>
        <span className="powerLine lineOne" /><span className="powerLine lineTwo" />
      </div>
      <div className="citySkyline detailedCity" aria-hidden="true">
        <i /><i /><i className="withAntenna" /><i /><i />
        <span className="windowGrid wg1" /><span className="windowGrid wg2" />
        <span className="lantern l1">程</span><span className="lantern l2">码</span><span className="lantern l3">创</span>
        <span className="streetMist" />
        <span className="wetStreet"><i /><b /><em /></span>
      </div>
    </main>
  );
}
