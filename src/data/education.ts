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
    src: "/images/experience/Education/uwaterloo-logo.png",
    alt: "University of Waterloo logo",
    width: 400,
    height: 160,
  },
  media: [
    {
      kind: "image",
      src: "/images/experience/Education/IMG_4018.JPG",
      alt: "Jaden in his University of Waterloo residence room",
      label: "Waterloo residence",
      caption: "A moment from residence at Waterloo",
    },
    {
      kind: "image",
      src: "/images/experience/Education/IMG_4309.JPG",
      alt: "Jaden and classmates with a model tower in an engineering classroom",
      label: "Engineering classroom",
      caption: "An engineering activity with classmates",
    },
  ] satisfies MediaItem[],
} as const;
