import { ContactSection } from "@/components/contact/ContactSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { TravelsPreview } from "@/components/travel/TravelsPreview";

export default function HomePage() {
  return <main><Hero/><ProjectsSection/><ExperienceSection/><TravelsPreview/><ContactSection/></main>;
}
