import type { Destination } from "@/data/destinations";
import EnvironmentalMedia from "./EnvironmentalMedia";

export default function Environment({ destination }: { destination: Destination }) {
  return <div className={`environment environment-${destination.environment}`} aria-hidden="true">
    <EnvironmentalMedia media={destination.media} />
    {destination.environment === "city" && <><i className="city-glow" /><div className="skyline"><b /><b /><b /><b /><b /><b /></div><span className="city-reflection" /></>}
    {destination.environment === "mountain" && <><i className="mist mist-one" /><i className="mist mist-two" /><span className="ridge ridge-far" /><span className="ridge ridge-near" /></>}
    {destination.environment === "coast" && <><i className="coast-sun" /><span className="coast-horizon" /><span className="coast-water" /></>}
    {destination.environment === "night" && <><span className="starfield">·　✦　·　　·　✧　·　　✦　·</span><i className="night-route" /></>}
  </div>;
}
