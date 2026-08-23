import { Code2, ExternalLink, Mail } from "lucide-react";
import { site } from "@/data/site";
export default function Footer() { return <footer className="site-footer"><div className="site-container footer-inner"><span>© {new Date().getFullYear()} Jaden Yin</span><div><a href={`mailto:${site.email}`}><Mail size={14} /> Email</a><a href={site.githubUrl}><Code2 size={14} /> GitHub</a><a href={site.linkedinUrl}><ExternalLink size={14} /> LinkedIn</a></div></div></footer>; }
