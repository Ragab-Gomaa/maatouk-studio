import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/components/i18n/LangProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://maatouk-studio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Maatouk Studio — Brands, Digital, Motion",
  description:
    "An independent design studio crafting brands, digital experiences and motion.",
  alternates: {
    canonical: "/",
    languages: { en: "/", ar: "/" },
  },
  openGraph: {
    title: "Maatouk Studio",
    description:
      "Brands, Digital, Motion. An independent design studio crafting work that earns attention by deserving it.",
    type: "website",
    url: SITE_URL,
    siteName: "Maatouk Studio",
    images: [
      {
        url: "/images/work/blankos.jpg",
        width: 1280,
        height: 720,
        alt: "Maatouk Studio — motion work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatouk Studio",
    description: "Brands, Digital, Motion.",
    images: ["/images/work/blankos.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={inter.variable} suppressHydrationWarning>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
