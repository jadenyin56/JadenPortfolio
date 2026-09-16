import { ContactSection } from "@/components/contact/ContactSection";
import { HomeExperiencePreview } from "@/components/experience/HomeExperiencePreview";
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { TravelsPreview } from "@/components/travel/TravelsPreview";

export default function HomePage() {
  return <main><Hero/><ProjectsSection preview/><HomeExperiencePreview/><TravelsPreview/><ContactSection/></main>;
}
