import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Jaden Yin — Software Engineer", template: "%s — Jaden Yin" }, description: "Computer Engineering student at the University of Waterloo building full-stack, backend, cloud, and AI systems." };
export const viewport: Viewport = { themeColor: "#f3ead8" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
