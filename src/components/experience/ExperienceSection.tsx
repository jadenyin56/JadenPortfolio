import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function ExperienceSection({ showHeading = true }: { showHeading?: boolean }) {
  return <section className={showHeading ? "experience-section" : "experience-section experience-section-no-heading"} id="experience"><div className="page-container">
    {showHeading ? <SectionHeading index="02" marker="経歴" eyebrow="Experience" title={<>A journey measured<br/><em>by what shipped.</em></>} description="Professional stops, production systems, and engineering decisions made with real users in mind." light/> : null}
    <ExperienceTimeline/>
  </div></section>;
}
