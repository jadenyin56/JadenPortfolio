import type { Metadata } from "next";
import { TravelsExperience } from "@/components/travel/TravelsExperience";
import { PageMasthead } from "@/components/ui/PageMasthead";

export const metadata: Metadata = {
  title: "Travels — Coming Soon — Jaden Yin",
  description: "Jaden Yin's photographic travel archive is currently under construction.",
};

export default function TravelsPage() {
  return (
    <TravelsExperience>
      <main className="travels-construction-page">
        <PageMasthead
          index="03"
          marker="旅"
          eyebrow="Travels / under construction"
          title="COMING SOON"
          description="A photographic diary of journeys, small details, and the space between stops is currently being assembled."
          photo={{
            src: "/images/editorial/travel-train.jpg",
            alt: "A Japanese landscape framed by a train window",
            credit: "PJH",
            creditUrl: "https://unsplash.com/photos/4DBoU9HeYos",
            nightSrc: "/images/editorial/night-tokyo-train.jpg",
            nightAlt: "A train crossing neon-lit Tokyo at night",
            nightCredit: "mos design",
            nightCreditUrl: "https://unsplash.com/photos/a-train-traveling-through-a-city-at-night-2QZUaKlqkMY",
          }}
        />
      </main>
    </TravelsExperience>
  );
}
