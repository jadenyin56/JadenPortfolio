import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
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

export const viewport: Viewport = { themeColor: "#f3eee4", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${manrope.variable} ${plexMono.variable} ${newsreader.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><Navbar/><div id="main-content">{children}</div><Footer/></body></html>;
}
