import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three disciplines, one studio: branding, motion graphics, and digital products. Strategy and craft together, from first sketch to launched product.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Branding, Motion, Digital Products",
    description:
      "Branding, motion graphics, and digital products under one roof — strategy and craft in sync.",
    url: "/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
