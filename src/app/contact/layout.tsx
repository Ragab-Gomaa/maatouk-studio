import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Maatouk Studio. Tell us about your brief — we reply within 24 hours, to every message.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Maatouk Studio",
    description: "Start a project. We reply within 24 hours, to every message.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
