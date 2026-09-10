import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function ExperienceSection() {
  return <section className="experience-section" id="experience"><div className="page-container">
    <SectionHeading index="02" marker="経歴" eyebrow="Experience" title={<>A journey measured<br/><em>by what shipped.</em></>} description="Professional stops, production systems, and engineering decisions made with real users in mind." light/>
    <ExperienceTimeline/>
  </div></section>;
}
