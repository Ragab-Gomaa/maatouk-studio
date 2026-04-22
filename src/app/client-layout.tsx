"use client";

import { ReactNode } from "react";
import { LocaleProvider } from "@/lib/LocaleContext";
import { Locale } from "@/lib/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function ClientLayout({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  return (
    <LocaleProvider initialLocale={initialLocale}>
      <Header />
      <main>{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
