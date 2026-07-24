import { Compass, Map, MapPin, Plane, UtensilsCrossed } from "lucide-react";
import Nav from "@/components/Nav";
import { Cloud } from "@/components/SceneBits";

const countries = [
  ["Canada", "HOME BASE", "CA", "Toronto"],
  ["China", "FAMILY + FOOD", "CN", "Old streets"],
  ["United States", "CITY WALKS", "US", "Big skylines"],
  ["Japan", "DETAILS + DESIGN", "JP", "Tiny discoveries"],
  ["France", "STREETS + TYPE", "FR", "Café corners"],
  ["Italy", "LIGHT + ESPRESSO", "IT", "Slow afternoons"],
];

export default function Travels() {
  return (
    <main className="travelsPage">
      <Nav />
      <Cloud className="cloudOne" /><Cloud className="cloudTwo" />
      <header className="travelHead">
        <div className="personalPassport">
          <span>CANADA</span><b>JY</b><small>FIELD PASSPORT<br />№ 0436532</small>
        </div>
        <div>
          <span className="chapter">STOP 05 · JADEN&apos;S PASSPORT LOG</span>
          <h1>Places that changed<br /><em>my point of view.</em></h1>
          <p>Part travel log, part memory map—small details I carried home.</p>
        </div>
      </header>
      <section className="travelMap">
        <div className="mapPaper">
          <span className="mapLand landOne" /><span className="mapLand landTwo" /><span className="mapLand landThree" />
          <span className="mapPin pinOne" /><span className="mapPin pinTwo" /><span className="mapPin pinThree" />
          <span className="mapCompass"><i /></span>
          <span className="mapCoordinates">43°39&apos;N / 79°23&apos;W<br />JY ROUTE ARCHIVE</span>
          <span className="personalRoute"><i>YYZ</i> · · · · · · · · · ✈ · · · · · · · · · <b>NEXT</b></span>
          <div className="mapNote noteOne"><UtensilsCrossed /> follow the food</div>
          <div className="mapNote noteTwo"><MapPin /> walk without a plan</div>
        </div>
      </section>
      <section className="passportGrid travelPassportGrid">
        {countries.map(([country, note, code, memory], index) => (
          <article className={`countryStamp stamp${index + 1}`} key={country}>
            <span>{code}</span><Map /><h2>{country}</h2><small>{note}</small><em>{memory}</em>
          </article>
        ))}
        <article className="nextStamp"><Plane /><span>NEXT<br />STAMP?</span></article>
      </section>
      <div className="travelPhilosophy">
        <Compass />
        <p>I travel the way I build: stay curious, notice the details, leave room to change the route.</p>
      </div>
      <p className="draftNote">Initial passport log—ready for your real destinations and stories.</p>
    </main>
  );
}
