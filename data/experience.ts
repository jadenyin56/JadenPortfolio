export type Experience = { company: string; role: string; period: string; location: string; summary: string; highlights: string[]; technology: string[]; media: { src: string; alt: string }[] };
export const experience: Experience[] = [{
  company: "TD Bank", role: "Software Engineering Intern", period: "May 2026 — August 2026", location: "Toronto, Ontario",
  summary: "Built and supported internal full-stack systems spanning AI automation, secure navigation, and Salesforce workflows.",
  highlights: [
    "Developed a full-stack AI automation tool in an event-driven architecture, reducing manual effort in an internal process by approximately 90%.",
    "Built end-to-end error handling across backend and frontend systems.",
    "Implemented secure deep-link navigation with SQL Server and REST APIs to route users to role-specific application pages.",
    "Delivered Salesforce work across Lightning UI, Apex, Flows, database querying, defect resolution, and automated testing for applications used by 100+ users.",
  ],
  technology: ["Java", "Spring Boot", "React", "SQL Server", "REST APIs", "Salesforce", "Apex", "Jest"],
  media: [{ src: "/experience/td/team-or-office.webp", alt: "TD internship team or office" }],
}];
