import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    company: "TD Bank",
    title: "Software Engineering Intern",
    location: "Toronto, Ontario",
    dates: "May 2026 — Aug 2026",
    code: "YYZ · 01",
    description: "Built and supported internal full-stack systems spanning AI automation, secure navigation, and Salesforce workflows.",
    accomplishments: [
      "Developed a full-stack AI automation tool in an event-driven architecture, reducing manual effort in an internal process by approximately 90%.",
      "Built end-to-end error handling across backend and frontend systems.",
      "Implemented secure deep-link navigation with SQL Server and REST APIs to route users to role-specific application pages.",
      "Delivered Salesforce work across Lightning UI, Apex, Flows, database querying, defect resolution, and automated testing for applications used by 100+ users.",
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
      {
        kind: "video-placeholder",
        alt: "Placeholder for an experience recap video",
        label: "Film / 03",
        caption: "Experience recap coming soon",
      },
    ],
  },
];
