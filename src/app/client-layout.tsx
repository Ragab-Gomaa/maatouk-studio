"use client";

import { ReactNode } from "react";
import { LocaleProvider } from "@/lib/LocaleContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
