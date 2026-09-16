"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { playUiTap } from "@/lib/audio";

type VisualTheme = "day" | "night";

function readTheme(): VisualTheme {
  return document.documentElement.dataset.theme === "night" ? "night" : "day";
}

function subscribeToTheme(onStoreChange: () => void) {
  window.addEventListener("portfolio-theme-change", onStoreChange);
  return () => window.removeEventListener("portfolio-theme-change", onStoreChange);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeToTheme, readTheme, () => "day");

  function toggleTheme() {
    const nextTheme: VisualTheme = readTheme() === "night" ? "day" : "night";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme === "night" ? "dark" : "light";
    window.localStorage.setItem("jaden-portfolio-theme", nextTheme);
    window.dispatchEvent(new Event("portfolio-theme-change"));
    playUiTap();
  }

  const nightMode = theme === "night";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={nightMode ? "Switch to day mode" : "Switch to cyberpunk night mode"}
      aria-pressed={nightMode}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {nightMode ? <Sun size={13} /> : <Moon size={13} />}
      </span>
      <span className="theme-toggle-copy" aria-hidden="true">
        <small>{nightMode ? "Day signal" : "Night shift"}</small>
        <strong>{nightMode ? "日光" : "夜景"}</strong>
      </span>
    </button>
  );
}
