import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Maatouk Studio is an independent creative studio working at the intersection of strategy, craft, and technology. We design brands that hold together — across identity, motion, and digital products.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Maatouk Studio",
    description:
      "An independent creative studio working at the intersection of strategy, craft, and technology.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
