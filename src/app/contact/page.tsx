import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Jaden Yin",
  description: "Contact Jaden Yin about software engineering roles, collaborations, or a place worth exploring.",
};

export default function ContactPage() {
  return <main className="contact-page"><ContactSection/></main>;
}
