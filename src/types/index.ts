export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription?: string;
  category: string;
  year: string;
  route: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
  location?: string;
  github?: string;
  liveUrl?: string;
  status?: "shipped" | "in-progress";
};

export type Experience = {
  company: string;
  title: string;
  location: string;
  dates: string;
  code: string;
  description: string;
  accomplishments: string[];
  technologies: string[];
};
