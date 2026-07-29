"use client";

import { Plane } from "lucide-react";
import { useEffect, useState } from "react";

type Phase = "hold" | "takeoff" | "exit" | "done";

export default function Intro() {
  const [phase, setPhase] = useState<Phase>("hold");

  useEffect(() => {
    const seen = sessionStorage.getItem("jy-intro-seen");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) setPhase("done");
  }, []);

  function board() {
    setPhase("takeoff");
    setTimeout(() => setPhase("exit"), 1350);
    setTimeout(() => finish(), 2150);
  }

  function finish() {
    sessionStorage.setItem("jy-intro-seen", "1");
    setPhase("done");
  }

  if (phase === "done") return null;

  return (
    <div className={`introScreen ${phase === "takeoff" ? "introTakeoff" : ""} ${phase === "exit" ? "introExit" : ""}`}>
      <div className="introSkyline" aria-hidden="true">
        <i /><i /><i /><i /><i /><i /><i />
      </div>
      <div className="introTower" aria-hidden="true"><span /></div>
      <div className="introPlane" aria-hidden="true"><Plane /></div>

      <div className="boardingPass">
        <div className="passMain">
          <div className="passHead">
            <span className="passAirline"><Plane size={16} /> JADEN AIR</span>
            <span className="passClass">PORTFOLIO CLASS</span>
          </div>
          <div className="passRoute">
            <div className="passCity"><b>YYZ</b><span>Toronto</span></div>
            <div className="passRouteLine"><i /><Plane size={15} /><i /></div>
            <div className="passCity passCityEnd"><b>JY</b><span>Jaden.dev</span></div>
          </div>
          <div className="passDetails">
            <div><small>Passenger</small><span>J. Yin</span></div>
            <div><small>Gate</small><span>01</span></div>
            <div><small>Seat</small><span>1A</span></div>
            <div><small>Boarding</small><span>Now</span></div>
          </div>
        </div>
        <div className="passStub">
          <span className="passFlightNo">JY · 2026</span>
          <span className="passBarcode" />
          <button className="passBoardBtn" onClick={board}>Board now</button>
        </div>
      </div>

      <span className="introSkip" onClick={finish} role="button" tabIndex={0} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && finish()}>
        Skip intro ↦
      </span>
    </div>
  );
}
