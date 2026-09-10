"use client";

import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#projects", label: "Projects", code: "01" },
  { href: "#experience", label: "Experience", code: "02" },
  { href: "#travels", label: "Travels", code: "03" },
  { href: "#contact", label: "Contact", code: "04" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-nav"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="page-container nav-shell">
        <a
          className="nav-brand"
          href="#home"
          aria-label="Jaden Yin, back to home"
        >
          <span className="brand-seal" aria-hidden="true">
            JY
          </span>
          <span>{site.name}</span>
        </a>
        <div className="nav-coordinates" aria-hidden="true">
          <span>Toronto</span>
          <i />
          43.6532° N
        </div>
        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          id="primary-menu"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
              <span>{link.code}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
