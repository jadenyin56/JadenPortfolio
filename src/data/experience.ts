import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "TD Bank",
    title: "Software Engineering Intern",
    location: "Toronto, Ontario",
    dates: "May 2026 - Aug 2026",
    code: "YYZ · 01",
    description:
      "Built and shipped internal software and automation systems across Java, Spring Boot, React, and Salesforce, including event-driven workflows and secure role-based tools supporting more than 100 internal users.",
    logo: {
      src: "/images/experience/TD Bank/td-logo.svg",
      animationSrc: "/images/experience/TD Bank/td-bank-animation.mp4",
      alt: "TD Bank logo",
      width: 400,
      height: 358,
      background: "#54b948",
    },
    accomplishments: [
      "Created an event-driven AI automation tool that reduced manual effort in an internal process by approximately 90%.",
      "Implemented secure role-based navigation with SQL Server and REST APIs.",
      "Shipped Salesforce features and automated testing for applications used by 100+ users.",
    ],
    technologies: ["Java", "Spring Boot", "React", "SQL Server", "REST APIs", "Salesforce", "Apex", "Jest"],
    media: [
      {
        kind: "image",
        src: "/images/experience/TD Bank/IMG_8494.JPG",
        alt: "Jaden and colleagues at a TD Bank recognition event",
        label: "TD recognition event",
        caption: "Recognition event with colleagues at TD Bank",
      },
      {
        kind: "image",
        src: "/images/experience/TD Bank/IMG_8498.JPG",
        alt: "Jaden and fellow TD Bank interns standing in front of a TD backdrop",
        label: "TD intern group",
        caption: "TD Bank interns at a company event",
      },
    ],
  },
];
