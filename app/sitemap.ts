import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://YOUR_DOMAIN.com"; return ["", "/photography", "/travels", ...projects.map((p) => `/projects/${p.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? .8 : 1 })); }
