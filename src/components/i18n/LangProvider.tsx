"use client";

import { copy, type Dict } from "@/lib/i18n";

// English-only. Kept as a thin hook so components share one copy source
// (and re-adding localization later stays a one-file change).
type LangValue = { lang: "en"; copy: Dict };

const value: LangValue = { lang: "en", copy };

export function LangProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function useLang(): LangValue {
  return value;
}
