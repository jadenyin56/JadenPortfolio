import { ArrowUpRight, Coffee, Gamepad2, Music2, Radio, Wrench } from "lucide-react";
import Nav from "@/components/Nav";
import { Cloud } from "@/components/SceneBits";

const sideProjects = [
  ["Corner Radio", "A tiny internet radio for discovering independent stations by mood.", <Radio key="radio" />, "React · Web Audio"],
  ["Pocket Arcade", "A collection of small browser games made to study playful interaction.", <Gamepad2 key="game" />, "Canvas · TypeScript"],
  ["Now Playing", "A minimalist music dashboard for friends who over-curate every playlist.", <Music2 key="music" />, "Next.js · Spotify API"],
];

export default function SideProjects() {
  return (
    <main className="townPage sideTown">
      <Nav />
      <Cloud className="cloudTwo" />
      <header className="sideHead">
        <span className="chapter">STOP 03 · THE OLD TOWN</span>
        <h1>Little builds with<br /><em>big personality.</em></h1>
        <p>Experiments, useful oddities, and weekend ideas made for the joy of making.</p>
      </header>
      <section className="shopRow">
        {sideProjects.map(([name, copy, icon, stack], index) => (
          <article className={`projectShop shop${index + 1}`} key={name as string}>
            <div className="shopRoof"><em /></div>
            <div className="shopSign">{icon}<span>{name}</span></div>
            <div className="shopWindow">
              <span className="windowGlow" />
              <p>{copy}</p>
              <b>{stack}</b>
            </div>
            <span className="flowerBox" />
            <a href="#"><Wrench /> View project <ArrowUpRight /></a>
          </article>
        ))}
      </section>
      <section className="townStreet enhancedStreet" aria-label="Detailed illustrated old town">
        <div className="cobble" />
        <div className="streetLamp"><i /><b /></div>
        <div className="cafeTable"><Coffee /><i /></div>
        <div className="townBench"><i /><b /><b /></div>
        <div className="townBike"><i /><b /><span /></div>
        <div className="townPigeons">⌁　⌁　⌁</div>
        <div className="streetSign">SIDE QUEST SQUARE</div>
      </section>
    </main>
  );
}
