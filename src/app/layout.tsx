import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "Maatouk Studio",
    description:
      "Brands, Digital, Motion. An independent design studio crafting work that earns attention by deserving it.",
    type: "website",
    url: SITE_URL,
    siteName: "Maatouk Studio",
    images: [
      {
        url: "/images/work/01-saraya.jpg",
        width: 2400,
        height: 1600,
        alt: "Maatouk Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatouk Studio",
    description: "Brands, Digital, Motion.",
    images: ["/images/work/01-saraya.jpg"],
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
