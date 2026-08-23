"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [{ href: "/", label: "Home" }, { href: "/experience", label: "Experience" }, { href: "/projects", label: "Projects" }];
export default function Nav() {
  const pathname = usePathname(); const [open, setOpen] = useState(false);
  return <header className="site-nav"><div className="site-container nav-inner"><Link href="/" className="nav-brand"><span>JY</span>Jaden Yin</Link><button className="nav-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={19} />}</button><nav className={open ? "nav-menu open" : "nav-menu"} aria-label="Primary navigation">{links.map((link) => <Link className={pathname === link.href || (link.href === "/projects" && pathname.startsWith("/projects/")) ? "active" : ""} href={link.href} onClick={() => setOpen(false)} key={link.href}>{link.label}</Link>)}</nav></div></header>;
}
