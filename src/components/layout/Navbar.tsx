"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { site } from "@/data/site";
import { playUiTap } from "@/lib/audio";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const links = [
  { href: "/", label: "Home", alt: "入口", code: "00" },
  { href: "/projects", label: "Projects", alt: "作品", code: "01" },
  { href: "/experience", label: "Experience", alt: "経歴", code: "02" },
  { href: "/travels", label: "Travels", alt: "旅", code: "03" },
  { href: "/contact", label: "Contact", alt: "連絡", code: "04" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
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
        <Link
          className="nav-brand"
          href="/"
          aria-label="Jaden Yin, back to home"
        >
          <span className="brand-seal" aria-hidden="true">
            JY
          </span>
          <span>{site.name}</span>
        </Link>
        <div className="nav-coordinates" aria-hidden="true">
          <span>Toronto</span>
          <i />
          43.6532° N
        </div>
        <div className="nav-controls">
          <ThemeToggle />
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
        </div>
        <nav
          id="primary-menu"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Primary navigation"
        >
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return <Link className={active ? "is-active" : undefined} aria-current={active ? "page" : undefined} href={link.href} key={link.href} onClick={() => { playUiTap(); setOpen(false); }}>
              <span>{link.code}</span>
              <span className="nav-label-swap"><span>{link.label}</span><span lang="ja">{link.alt}</span></span>
            </Link>;
          })}
        </nav>
      </div>
    </header>
  );
}
