import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR_DOMAIN.com"), // TODO: replace before deployment.
  title: { default: "Jaden Yin — Software Engineer", template: "%s — Jaden Yin" },
  description: "University of Waterloo Computer Engineering student building full-stack products, backend infrastructure, cloud systems, and AI tools.",
  openGraph: { title: "Jaden Yin — Software Engineer", description: "Selected engineering work, experience, and technical case studies.", type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Jaden Yin — Software Engineer" }] },
  twitter: { card: "summary_large_image", title: "Jaden Yin — Software Engineer", description: "Selected engineering work, experience, and technical case studies.", images: ["/og-image.png"] },
};

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#090b10" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
