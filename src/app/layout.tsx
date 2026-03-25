import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { ClientLayout } from "./client-layout";

export const metadata: Metadata = {
  title: {
    default: "Maatouk Studio | معتوق — Branding, Motion & Websites",
    template: "%s | Maatouk Studio",
  },
  description:
    "Maatouk Studio is a creative studio specializing in branding, motion design, and digital experiences for visionary brands. ستوديو معتوق",
  keywords: [
    "branding",
    "motion design",
    "web design",
    "creative studio",
    "brand identity",
    "Arabic branding",
    "bilingual design",
    "Maatouk",
    "معتوق",
  ],
  openGraph: {
    title: "Maatouk Studio | معتوق — Branding, Motion & Websites",
    description:
      "Creative studio specializing in branding, motion design, and digital experiences.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    siteName: "Maatouk Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatouk Studio | معتوق",
    description:
      "Branding, Motion & Websites for visionary brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
