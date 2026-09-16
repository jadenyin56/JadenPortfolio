import type { Metadata } from "next";
import { HomeExperiencePreview } from "@/components/experience/HomeExperiencePreview";
import { PageMasthead } from "@/components/ui/PageMasthead";

export const metadata: Metadata = {
  title: "Experience — Jaden Yin",
  description: "Concise professional notes and selected engineering outcomes from Jaden Yin.",
};

export default function ExperiencePage() {
  return <main className="experience-page"><PageMasthead index="02" marker="経歴" eyebrow="Experience" title="Useful systems," italic="made with people." description="A concise record of production work, engineering decisions, and the teams and users behind them." tone="cool" photo={{src:"/images/editorial/experience-onsen.jpg", alt:"A quiet Japanese onsen bath lit warmly against dark wood", credit:"Wren Chai", creditUrl:"https://unsplash.com/photos/_j54YXzW1_c", nightSrc:"/images/editorial/night-shanghai.jpg", nightAlt:"Shanghai skyscrapers glowing through purple night fog", nightCredit:"Spencer Liao", nightCreditUrl:"https://unsplash.com/photos/shanghai-skyline-at-night-HISGDbuMfro"}}/><HomeExperiencePreview standalone/></main>;
}
