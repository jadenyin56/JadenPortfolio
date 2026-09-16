import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/experience";
import { ThemePhoto } from "@/components/ui/ThemePhoto";

export function HomeExperiencePreview({ standalone = false }: { standalone?: boolean }) {
  const role = experience[0];
  return (
    <section className={standalone ? "home-experience is-standalone" : "home-experience"}>
      <div className="page-container home-experience-grid">
        <div className="home-experience-index"><span>02</span><strong>経歴</strong></div>
        <div className="home-experience-copy">
          <p>{role.company} · {role.dates}</p>
          <h2>A practical education<br/><em>in what ships.</em></h2>
          <div className="home-role-line"><strong>{role.title}</strong><span>{role.location}</span></div>
          <p className="home-role-summary">{role.description}</p>
          {standalone ? <div className="home-outcomes"><span>Selected outcomes</span>{role.accomplishments.map((item, index) => <p key={item}><i>0{index + 1}</i>{item}</p>)}</div> : <Link className="archive-link archive-link-light" href="/experience">Read the work notes <ArrowUpRight size={15}/></Link>}
        </div>
        <div className="home-experience-artifact">
          <ThemePhoto className="home-experience-photo" daySrc="/images/editorial/experience-onsen.jpg" nightSrc="/images/editorial/night-shanghai.jpg" dayAlt="A quiet Japanese onsen framed by dark wood" nightAlt="Shanghai skyscrapers emerging through purple night fog" sizes="(max-width: 1050px) 80vw, 38vw" />
          <span className="home-experience-photo-shade" aria-hidden="true" />
          <span>Artifact / 01</span>
          <strong>{standalone ? "The work behind the interface." : <>Workplace photography<br/>can live here.</>}</strong>
          <i aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
