"use client";

import { useEffect, useState } from "react";
import { destinations } from "@/data/destinations";

export default function JourneyNav() {
  const [active, setActive] = useState(destinations[0].id);

  useEffect(() => {
    const sections = destinations.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id as typeof active);
    }, { rootMargin: "-35% 0px -45%", threshold: [0, .2, .5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <nav className="journey-nav" aria-label="Journey progress">
    {destinations.map((destination, index) => <a className={active === destination.id ? "active" : ""} href={`#${destination.id}`} key={destination.id} aria-label={`Go to ${destination.name}`} aria-current={active === destination.id ? "location" : undefined}><i /><span>{String(index + 1).padStart(2, "0")} {destination.name}</span></a>)}
  </nav>;
}
