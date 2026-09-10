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
  description: "Software engineer and Computer Engineering student at the University of Waterloo building full-stack products, backend systems, cloud infrastructure, and AI.",
  openGraph: {
    title: "Jaden Yin — Software Engineer",
    description: "A travel-inspired portfolio of software, systems, and the journey behind them.",
    type: "website",
    locale: "en_CA",
  },
};

export const viewport: Viewport = { themeColor: "#f3ece0", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${manrope.variable} ${plexMono.variable} ${newsreader.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><Navbar/><div id="main-content">{children}</div><Footer/></body></html>;
}
