export type ProjectMedia = { type: "image" | "video"; src: string; alt: string; poster?: string };
export type ArchitectureNode = { label: string; detail: string };
export type Project = {
  slug: string; title: string; eyebrow: string; summary: string; origin: string; problem: string;
  built: string[]; architecture: ArchitectureNode[]; challenges: string[]; features: string[];
  technology: string[]; learnings: string[]; githubUrl?: string; demoUrl?: string;
  featuredMedia?: ProjectMedia; gallery: ProjectMedia[]; accent: "blue" | "amber" | "violet"; incomplete?: boolean;
};

export const projects: Project[] = [
  {
    slug: "roamable", title: "RoamAble", eyebrow: "Accessible travel platform",
    summary: "A travel platform designed to make planning and navigating trips easier for elderly travellers and people with accessibility needs.",
    origin: "Inspired by difficulties our team experienced while travelling with our grandparents.",
    problem: "Most travel tools optimize for the average traveller. Accessibility information is often fragmented, difficult to verify, or missing at the moment it is needed.",
    built: ["An accessible React interface for discovering and organizing travel information.", "Authentication and persisted user data backed by Supabase.", "Backend integrations supporting travel and map-oriented workflows."],
    architecture: [{ label: "React client", detail: "Accessible trip-planning and discovery interface" }, { label: "Node.js services", detail: "Application logic and external integrations" }, { label: "Supabase", detail: "Authentication and persisted application data" }],
    challenges: ["Designing flows that stay clear across a wide range of user needs.", "Keeping authentication, client state, and backend data synchronized.", "Turning incomplete accessibility information into a useful product experience."],
    features: ["Accessible interaction patterns", "User authentication", "Travel planning", "Map-oriented functionality"],
    technology: ["React", "Node.js", "Supabase", "Vercel"],
    learnings: ["Accessibility must shape the product model, not be added at the end.", "Personal experiences can reveal meaningful engineering problems."],
    featuredMedia: { type: "image", src: "/projects/roamable/hero.webp", alt: "RoamAble product overview" },
    gallery: [{ type: "image", src: "/projects/roamable/screen-01.webp", alt: "RoamAble interface screenshot" }, { type: "video", src: "/projects/roamable/demo.mp4", poster: "/projects/roamable/demo-poster.webp", alt: "RoamAble product demo" }], accent: "blue",
  },
  {
    slug: "circadia", title: "Circadia", eyebrow: "Embedded healthcare system",
    summary: "An Arduino-based hospital environmental control system designed to reduce hospital-induced delirium by stabilizing light, sound, and temperature.",
    origin: "Built around the idea that a hospital room can respond to patient needs instead of remaining a static environment.",
    problem: "Disrupted circadian rhythms, environmental noise, and uncomfortable temperatures can worsen disorientation for vulnerable hospital patients.",
    built: ["Sensor-driven environmental monitoring on Arduino hardware.", "Automated circadian lighting and adaptive sound responses.", "Temperature monitoring and regulation logic connecting software decisions to physical outputs."],
    architecture: [{ label: "Environment", detail: "Light, sound, and temperature conditions" }, { label: "Sensors", detail: "Continuous readings from the hospital room" }, { label: "Arduino controller", detail: "Thresholds, schedules, and automation logic" }, { label: "Actuators", detail: "Lighting, sound, and temperature responses" }],
    challenges: ["Coordinating noisy sensor readings with predictable system behaviour.", "Balancing automation with safe, understandable controls.", "Testing hardware and software as one system."],
    features: ["Circadian lighting", "Adaptive sound control", "Temperature monitoring", "Sensor-based automation"], technology: ["Arduino", "C / C++", "Sensors", "Embedded systems"],
    learnings: ["Physical systems make timing, noise, and failure states impossible to ignore.", "The best technical decisions start with the real-world environment."],
    featuredMedia: { type: "image", src: "/projects/circadia/hero.webp", alt: "Circadia hardware and control system" },
    gallery: [{ type: "image", src: "/projects/circadia/prototype.webp", alt: "Circadia prototype" }, { type: "video", src: "/projects/circadia/demo.mp4", poster: "/projects/circadia/demo-poster.webp", alt: "Circadia system demonstration" }], accent: "amber",
  },
  {
    slug: "ai-travel-mcp", title: "AI Travel / MCP", eyebrow: "Agentic travel system · In progress",
    summary: "An AI-powered travel project exploring agentic workflows and the Model Context Protocol.",
    origin: "TODO: describe what motivated this project and who it is for.", problem: "TODO: define the specific travel-planning problem this system solves.",
    built: ["TODO: describe the agent workflow.", "TODO: list MCP servers, tools, or external data sources.", "TODO: describe the user-facing product surface."],
    architecture: [{ label: "User experience", detail: "TODO: web, chat, or another interface" }, { label: "Agent", detail: "TODO: model and orchestration approach" }, { label: "MCP tools", detail: "TODO: connected capabilities and data" }, { label: "Travel services", detail: "TODO: verified external integrations" }],
    challenges: ["TODO: add a real technical challenge.", "TODO: describe reliability or evaluation work.", "TODO: document a design tradeoff."],
    features: ["Agentic workflow (details pending)", "MCP integration (details pending)"], technology: ["AI agents", "MCP", "TODO: add verified technologies"],
    learnings: ["TODO: add lessons after the implementation is documented."], featuredMedia: { type: "image", src: "/projects/ai-travel/hero.webp", alt: "AI travel project preview" }, gallery: [], accent: "violet", incomplete: true,
  },
];
export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
