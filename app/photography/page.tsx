import { Aperture, Camera, Focus, MapPin } from "lucide-react";
import Nav from "@/components/Nav";

const frames = [
  ["photoNight", "After the rain", "Toronto · 10:42 PM", "f/2.0　1/125　ISO 800"],
  ["photoCoast", "The long way home", "Westbound · 7:18 PM", "f/5.6　1/500　ISO 200"],
  ["photoStreet", "Corner stories", "Spadina Ave · 4:06 PM", "f/4.0　1/250　ISO 400"],
  ["photoMorning", "First light", "Kitchen window · 7:31 AM", "f/2.8　1/80　ISO 320"],
  ["photoTransit", "Between stops", "Line 1 · 6:14 PM", "f/1.8　1/100　ISO 640"],
];

export default function Photography() {
  return (
    <main className="photoPage">
      <Nav light />
      <header className="photoPageHead">
        <div>
          <span className="chapter">STOP 04 · JADEN&apos;S CONTACT SHEET</span>
          <h1>Things I noticed<br /><em>along the way.</em></h1>
        </div>
        <div className="cameraProfile">
          <span className="jyMonogram">JY</span>
          <div><Camera /><b>Everyday observations</b><small>Toronto + wherever I land next</small></div>
        </div>
      </header>
      <section className="contactSheet">
        {frames.map(([style, title, place, settings], index) => (
          <figure className={`travelPhoto sheetPhoto ${style}`} key={title}>
            <div><i /><b /><span /></div>
            <figcaption>
              <strong>{String(index + 1).padStart(2, "0")} · {title}</strong>
              <small>{place}</small>
            </figcaption>
            <em>{settings}</em>
          </figure>
        ))}
        <div className="photoManifesto">
          <Aperture />
          <p>“The camera reminds me to look twice. Good software often starts the same way.”</p>
          <span>— Jaden</span>
        </div>
      </section>
      <div className="filmFooter">
        <span><Focus /> JY FRAME ARCHIVE · 2026</span>
        <span><MapPin /> 43.6532° N · 79.3832° W</span>
      </div>
    </main>
  );
}
