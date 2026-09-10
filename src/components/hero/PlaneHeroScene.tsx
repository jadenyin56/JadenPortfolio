import { Plane } from "lucide-react";

export function PlaneHeroScene() {
  return <div className="plane-scene" data-future-three-scene aria-label="A quiet architectural scene reserved for a future airplane animation">
    <div className="shoji-light" aria-hidden="true"/>
    <div className="shoji-grid" aria-hidden="true"><i/><i/><i/><i/></div>
    <div className="plane-shadow" aria-hidden="true"><Plane size={72} strokeWidth={.75}/></div>
    <div className="plant" aria-hidden="true"><i/><i/><i/><span/></div>
    <div className="scene-caption"><span>Future scene / 01</span><strong>Light, air,<br/>and quiet motion.</strong></div>
    <div className="scene-coordinate"><span>43°39&apos; N</span><i/><span>79°23&apos; W</span></div>
  </div>;
}
