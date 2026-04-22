import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import { ClientLayout } from "./client-layout";

const SITE_URL = "https://maatouk-studio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  authors: [{ name: "Maatouk Studio" }],
  creator: "Maatouk Studio",
  publisher: "Maatouk Studio",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Maatouk Studio | معتوق — Branding, Motion & Websites",
    description:
      "Creative studio specializing in branding, motion design, and digital experiences.",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    siteName: "Maatouk Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maatouk Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatouk Studio | معتوق",
    description:
      "Branding, Motion & Websites for visionary brands.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0029D6",
  width: "device-width",
  initialScale: 1,
};

const localeInitScript = `
(function(){try{
  var l=localStorage.getItem("maatouk-locale");
  if(l==="ar"||l==="en"){
    document.documentElement.lang=l;
    document.documentElement.dir=l==="ar"?"rtl":"ltr";
  }
}catch(e){}})();
`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maatouk Studio",
  alternateName: "ستوديو معتوق",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-512.png`,
  description:
    "Creative studio specializing in branding, motion design, and digital experiences for visionary brands.",
  sameAs: [],
  knowsLanguage: ["en", "ar"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
