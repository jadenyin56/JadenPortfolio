import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceTimeline() {
  return <div className="experience-timeline">{experience.map((item, index) => <Reveal key={`${item.company}-${item.dates}`}><ExperienceItem item={item} index={index}/></Reveal>)}</div>;
}
