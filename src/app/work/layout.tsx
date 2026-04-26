import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "A curated selection of identity, motion, and digital work shipped with brands we care about — including Dolcebello, Meezan, Nobles Catering, and Royal Catering.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Work — Maatouk Studio",
    description:
      "Identity, motion, and digital projects shipped with brands we care about.",
    url: "/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
