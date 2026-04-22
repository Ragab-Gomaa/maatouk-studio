"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

type Client = {
  name: string;
  en: string;
  ar: string;
};

const clients: Client[] = [
  { name: "Dolcebello", en: "Dolcebello", ar: "دولشي بيلو" },
  { name: "Nobles Catering", en: "Nobles Catering", ar: "نوبلز كاترينج" },
  { name: "Meezan", en: "Meezan", ar: "ميزان" },
  { name: "Royal Catering", en: "Royal Catering", ar: "رويال كاترينج" },
  { name: "Sandah", en: "Sandah", ar: "صنده" },
  { name: "Forkpos", en: "Forkpos", ar: "فوركبوس" },
  { name: "Blankos KSA", en: "Blankos KSA", ar: "بلانكوس" },
  { name: "Class Ride", en: "Class Ride", ar: "كلاس رايد" },
];

export default function ClientsSection() {
  const { t } = useTranslation();

  return (
    <section className="py-14 md:py-20 bg-surface border-y border-black/[0.05]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="flex items-center justify-between gap-6 mb-8 md:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rotate-45 bg-brand-blue" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
              {t("Selected Clients", "عملاء مختارون")}
            </span>
          </div>
          <span className="h-px flex-1 bg-black/10" />
          <span className="text-[11px] text-black/40 uppercase tracking-[0.15em] font-medium">
            {t(`${clients.length}+ brands`, `${clients.length}+ علامة`)}
          </span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-black/[0.06]"
        >
          {clients.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group relative bg-surface flex items-center justify-center h-20 md:h-24 transition-colors hover:bg-white"
            >
              <span className="font-lyon text-base md:text-lg font-bold tracking-tight text-black/50 group-hover:text-brand-blue transition-colors duration-300">
                {t(c.en, c.ar)}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
