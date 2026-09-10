export type MediaItem = {
  kind: "image" | "photo-placeholder" | "video-placeholder";
  src?: string;
  alt: string;
  label: string;
  caption: string;
};

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
  media: MediaItem[];
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
  media: MediaItem[];
};
