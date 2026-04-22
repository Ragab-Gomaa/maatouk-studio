"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";

/**
 * StudioIntro — a short editorial manifesto that sits between the Hero and
 * the rest of the page. A pull-quote, a supporting paragraph, and a discrete
 * metrics row. This is the "who we are in a breath" moment.
 */
export default function StudioIntro() {
  const { t } = useTranslation();

  const marks = [
    { value: "03", label: { en: "Disciplines", ar: "تخصصات" } },
    { value: "AR · EN", label: { en: "Bilingual by default", ar: "ثنائي اللغة افتراضياً" } },
    { value: "01", label: { en: "Team, one vision", ar: "فريق برؤية واحدة" } },
  ];

  return (
    <section className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-24 items-start">
          {/* Left column — label + corner marks */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rotate-45 bg-brand-blue" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-brand-blue">
                {t("The studio", "الاستوديو")}
              </span>
            </div>

            <p className="font-lyon text-5xl md:text-6xl font-bold tracking-tight leading-[0.95]">
              {t("Design is a", "التصميم")}
              <br />
              <span className="text-black/25">{t("craft.", "حرفة.")}</span>
            </p>
            <p className="mt-4 font-lyon text-2xl md:text-3xl italic text-brand-blue">
              {t("We treat it that way.", "نتعامل معه كذلك.")}
            </p>
          </motion.div>

          {/* Right column — body copy + marks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="space-y-10 md:space-y-12"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-xl md:text-2xl lg:text-[1.6rem] font-lyon text-black/85 leading-[1.4]"
            >
              {t(
                "We make work that ships — not decks that impress. Branding, motion, and digital are built in the same room, by the same people, for the same outcome. The pieces hold together because they were always meant to.",
                "نصنع أعمالاً تُطلَق — لا عروضاً تُبهر. الهوية والحركة والرقمي تُبنى في غرفة واحدة، بنفس الأشخاص، لنفس النتيجة. القطع تتناسق لأنها بُنيت لذلك منذ البداية."
              )}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-base md:text-lg text-black/60 leading-relaxed max-w-2xl"
            >
              {t(
                "The studio is based in the Gulf and built around Arabic as a first-class citizen of every project. That means type pairing, layout, reading direction, and cultural nuance are considered from the first sketch — not translated at the end.",
                "الاستوديو في الخليج ومبني حول العربية كمواطن درجة أولى في كل مشروع. يعني اقتران الخطوط، التخطيط، اتجاه القراءة، والفروق الثقافية تُدرس من أول رسمة — لا تُترجَم في النهاية."
              )}
            </motion.p>

            {/* Marks row */}
            <motion.dl
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="grid grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-10 border-t border-black/[0.08]"
            >
              {marks.map((m, i) => (
                <div
                  key={i}
                  className={`${
                    i < marks.length - 1 ? "border-r border-black/[0.08] pr-3 md:pr-6" : ""
                  }`}
                >
                  <dt className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/45 mb-2">
                    {t(m.label.en, m.label.ar)}
                  </dt>
                  <dd className="font-lyon text-2xl md:text-3xl font-bold text-brand-blue">
                    {m.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
