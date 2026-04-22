"use client";

import { motion } from "framer-motion";
import type { Stat } from "@/data/content";
import { useTranslation } from "@/lib/LocaleContext";

interface StatsBlockProps {
  stats: Stat[];
  color?: "light" | "dark";
}

export default function StatsBlock({ stats, color = "dark" }: StatsBlockProps) {
  const { t } = useTranslation();
  const isDark = color === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className={`${
        isDark ? "bg-brand-blue text-white" : "bg-surface text-black"
      } p-8 md:p-12`}
    >
      <div
        className={`grid gap-8 md:gap-6 ${
          stats.length === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : stats.length === 3
            ? "grid-cols-1 sm:grid-cols-3"
            : "grid-cols-2 md:grid-cols-4"
        }`}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className={`text-center ${
              i < stats.length - 1
                ? `sm:border-r ${isDark ? "sm:border-white/15" : "sm:border-black/10"}`
                : ""
            }`}
          >
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12 }}
              className={`block text-4xl md:text-5xl lg:text-6xl font-lyon font-bold mb-2 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              {s.value}
            </motion.span>
            <span
              className={`text-[11px] md:text-xs uppercase tracking-[0.2em] font-medium ${
                isDark ? "text-white/60" : "text-black/50"
              }`}
            >
              {t(s.label.en, s.label.ar)}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
