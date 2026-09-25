import type { Metadata } from "next";
import { TravelDiary } from "@/components/travel/TravelDiary";
import { TravelsExperience } from "@/components/travel/TravelsExperience";

export const metadata: Metadata = {
  title: "Travels — Jaden Yin",
  description: "A forthcoming archive of photographs, field notes, and journeys by Jaden Yin.",
};

export default function TravelsPage() {
  return (
    <TravelsExperience>
      <TravelDiary />
    </TravelsExperience>
  );
}
