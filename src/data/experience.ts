import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "TD Bank",
    title: "Software Engineering Intern",
    location: "Toronto, Ontario",
    dates: "May 2026 — Aug 2026",
    code: "YYZ · 01",
    description: "Built internal software and automation systems across Java, Spring Boot, React, and Salesforce.",
    accomplishments: [
      "Created an event-driven AI automation tool that reduced manual effort in an internal process by approximately 90%.",
      "Implemented secure role-based navigation with SQL Server and REST APIs.",
      "Shipped Salesforce features and automated testing for applications used by 100+ users.",
    ],
    technologies: ["Java", "Spring Boot", "React", "SQL Server", "REST APIs", "Salesforce", "Apex", "Jest"],
    media: [
      {
        kind: "photo-placeholder",
        alt: "Placeholder for a photograph from the TD Bank internship",
        label: "Workplace / 01",
        caption: "Team and workplace photography",
      },
      {
        kind: "photo-placeholder",
        alt: "Placeholder for a second photograph from the TD Bank internship",
        label: "Field note / 02",
        caption: "A moment from the internship",
      },
    ],
  },
];
