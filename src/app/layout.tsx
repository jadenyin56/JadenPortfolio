import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AudioDock } from "@/components/audio/AudioDock";
import { PageTransition } from "@/components/motion/PageTransition";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex-mono", weight: ["400", "500", "600"], display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", style: ["normal", "italic"], display: "swap" });

export const metadata: Metadata = {
  title: "Jaden Yin — Software Engineer",
  description: "Jaden Yin is a software engineer and Computer Engineering student building thoughtful products, systems, and AI experiences.",
  openGraph: {
    title: "Jaden Yin — Software Engineer",
    description: "Selected software, systems, and field notes from the journey between them.",
    type: "website",
    locale: "en_CA",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3eee4" },
    { media: "(prefers-color-scheme: dark)", color: "#05070d" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="day" data-scroll-behavior="smooth" suppressHydrationWarning className={`${manrope.variable} ${plexMono.variable} ${newsreader.variable}`}><body><Script id="visual-theme" strategy="beforeInteractive">{`try{const t=localStorage.getItem("jaden-portfolio-theme");const v=t==="night"?"night":"day";document.documentElement.dataset.theme=v;document.documentElement.style.colorScheme=v==="night"?"dark":"light"}catch(e){document.documentElement.dataset.theme="day"}`}</Script><a className="skip-link" href="#main-content">Skip to content</a><Navbar/><div id="main-content"><PageTransition>{children}</PageTransition></div><Footer/><AudioDock/></body></html>;
}
