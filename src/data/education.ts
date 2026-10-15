import type { MediaItem } from "@/types";

export const education = {
  institution: "University of Waterloo",
  level: "Undergraduate",
  degree: "Bachelor of Applied Science",
  program: "Computer Engineering",
  format: "Co-op",
  dates: "Current",
  location: "Waterloo, Ontario",
  description:
    "Studying Computer Engineering through Waterloo's co-op program, with a focus on software systems, embedded development, digital hardware, and collaborative engineering design.",
  focus: ["Computer Engineering", "Software Systems", "Embedded Systems", "Co-op"],
  logo: {
    src: "/images/experience/uwaterloo-logo.png",
    alt: "University of Waterloo logo",
    width: 400,
    height: 160,
  },
  media: [
    {
      kind: "photo-placeholder",
      alt: "Placeholder for a University of Waterloo campus photograph",
      label: "Waterloo photo 2",
      caption: "Add a campus photograph",
    },
    {
      kind: "photo-placeholder",
      alt: "Placeholder for a photograph from Computer Engineering at Waterloo",
      label: "Waterloo photo 3",
      caption: "Add a classroom, lab, or team photograph",
    },
  ] satisfies MediaItem[],
} as const;
