import { ArrowUpRight, MapPinned } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stops = [
  { code: "YYZ", label: "Toronto", className: "map-stop map-stop-yyz" },
  { code: "YVR", label: "Vancouver", className: "map-stop map-stop-yvr" },
  { code: "TBD", label: "Next stop", className: "map-stop map-stop-next" },
];

export function TravelsPreview() {
  return <section className="travels-section" id="travels"><div className="page-container">
    <SectionHeading index="03" marker="旅" eyebrow="Travels" title={<>Places I&apos;ve been,<br/><em>things I&apos;ve kept.</em></>} description="A future archive of places, photos, routes, and the small stories collected between departures."/>
    <Reveal className="travel-map">
      <div className="map-grid" aria-hidden="true"/>
      <svg className="world-lines" viewBox="0 0 1200 520" aria-hidden="true"><path d="M45 170c75-82 154-96 233-58 67 33 116 17 179-20 71-42 162-71 239-29 65 35 102 20 167 0 73-23 166-3 230 62 52 52 83 129 62 198-20 63-81 101-151 102-74 1-135 34-207 53-81 21-137-21-203-51-69-31-132-17-203 6-84 27-166 5-220-54-54-58-54-127-91-188-12-20-24-28-35-21Z"/><path d="M102 248c118 44 192-12 278-61 94-54 185-21 270 28 108 62 200-56 340-29"/><path className="route-dash" d="M287 198C470 102 699 390 906 238"/></svg>
      {stops.map((stop) => <div className={stop.className} key={stop.code}><span/><strong>{stop.code}</strong><small>{stop.label}</small></div>)}
      <div className="travel-coming"><MapPinned size={20}/><span>Archive note / coming soon</span><strong>The route is still unfolding.</strong><p>City stories, photographs, and chronological travel paths are planned for a future release.</p><a href="#contact">Leave a recommendation <ArrowUpRight size={14}/></a></div>
    </Reveal>
  </div></section>;
}
