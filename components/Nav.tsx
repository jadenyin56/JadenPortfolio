"use client";

import { Menu, Plane, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["/experience", "Experience"],
  ["/projects", "Projects"],
  ["/side-projects", "Side Projects"],
  ["/photography", "Photography"],
  ["/travels", "Travels"],
];

export default function Nav({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${light ? "navLight" : ""}`}>
      <Link className="brand" href="/">
        <span className="brandBubble"><Plane size={17} /></span>
        <span>Jaden.dev</span>
      </Link>
      <div className={`navLinks ${open ? "open" : ""}`}>
        {links.map(([href, label]) => (
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="resumePill" href="/side-projects" onClick={() => setOpen(false)}>Side Projects ↗</Link>
      </div>
      <button
        className="menuButton"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </nav>
  );
}
