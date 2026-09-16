import type { Metadata } from "next";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { PageMasthead } from "@/components/ui/PageMasthead";

export const metadata: Metadata = {
  title: "Projects — Jaden Yin",
  description: "Selected products, systems, hardware, and experiments by software engineer Jaden Yin.",
};

export default function ProjectsPage() {
  return <main className="projects-page"><PageMasthead index="01" marker="作品" eyebrow="Projects" title="Six builds," italic="six points of view." description="A visual archive spanning accessible travel, machine learning, embedded healthcare, games, and product systems." photo={{src:"/images/editorial/projects-garden.jpg", alt:"A traditional garden in Kyoto with a pond, shaped pines, and a moss-covered pavilion", credit:"Akiyo Ikeda", creditUrl:"https://unsplash.com/photos/mvMIbLocMRA", nightSrc:"/images/editorial/night-chongqing.jpg", nightAlt:"Chongqing's illuminated riverfront layered beneath high-rise towers at night", nightCredit:"Ming Chen", nightCreditUrl:"https://unsplash.com/photos/city-skyline-during-night-time-CXBsml4qTuE"}}/><ProjectsSection showHeading={false}/></main>;
}
