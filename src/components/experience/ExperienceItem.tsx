import { Check } from "lucide-react";
import type { Experience } from "@/types";
import { Tag } from "@/components/ui/Tag";

export function ExperienceItem({ item, index }: { item: Experience; index: number }) {
  return <article className="experience-item">
    <div className="experience-stop"><span>{String(index + 1).padStart(2, "0")}</span><i/><div className="stop-code">{item.code}</div></div>
    <div className="experience-content">
      <div className="experience-header"><div><p>{item.company}</p><h3>{item.title}</h3></div><div className="experience-place"><span>{item.dates}</span><strong>{item.location}</strong></div></div>
      <div className="experience-summary"><span>Scope</span><p>{item.description}</p></div>
      <p className="experience-subheading">Selected outcomes</p>
      <ul>{item.accomplishments.map((accomplishment, accomplishmentIndex) => <li key={accomplishment}><span className="outcome-number">0{accomplishmentIndex + 1}</span><Check size={14}/><span>{accomplishment}</span></li>)}</ul>
      <p className="experience-subheading tools-heading">Tools &amp; technologies</p>
      <div className="experience-tags">{item.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}</div>
    </div>
  </article>;
}
