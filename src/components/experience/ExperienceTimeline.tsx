import { experience } from "@/data/experience";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceTimeline() {
  return <div className="experience-timeline">{experience.map((item, index) => <ExperienceItem key={`${item.company}-${item.dates}`} item={item} index={index}/>)}</div>;
}
