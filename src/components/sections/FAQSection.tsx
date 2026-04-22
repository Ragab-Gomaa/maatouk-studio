"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { fadeUp } from "@/lib/animations";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

type FAQ = {
  q: { en: string; ar: string };
  a: { en: string; ar: string };
};

const faqs: FAQ[] = [
  {
    q: {
      en: "How long does a typical project take?",
      ar: "كم يستغرق المشروع عادةً؟",
    },
    a: {
      en: "Most branding engagements run 4–6 weeks. Websites and digital products typically take 6–12 weeks depending on scope. Motion projects are 2–4 weeks per deliverable. Every timeline starts with a detailed schedule you approve before we begin.",
      ar: "معظم مشاريع الهوية تأخذ ٤–٦ أسابيع. المواقع والمنتجات الرقمية عادةً ٦–١٢ أسبوع حسب النطاق. مشاريع الموشن ٢–٤ أسابيع لكل تسليم. كل جدول زمني يبدأ بخطة تفصيلية توافق عليها قبل البدء.",
    },
  },
  {
    q: {
      en: "How much does a project cost?",
      ar: "ما هي تكلفة المشروع؟",
    },
    a: {
      en: "Pricing is scope-dependent. Branding projects start around $10k; e-commerce and platform builds start around $25k; ERP-grade systems are $50k+. We provide a detailed estimate after a discovery call — no surprises.",
      ar: "التسعير يعتمد على النطاق. مشاريع الهوية تبدأ من ~٣٠٠٠ دك؛ التجارة الإلكترونية والمنصات من ~٧٥٠٠ دك؛ أنظمة ERP من ١٥٠٠٠+ دك. نقدّم تقديراً مفصلاً بعد جلسة اكتشاف — بلا مفاجآت.",
    },
  },
  {
    q: {
      en: "Do you work with international clients?",
      ar: "هل تعملون مع عملاء دوليين؟",
    },
    a: {
      en: "Yes. Our core market is the Gulf region, but we work globally. We operate remotely with async-first workflows and structured weekly syncs across time zones.",
      ar: "نعم. سوقنا الأساسي منطقة الخليج، لكننا نعمل عالمياً. نعمل عن بُعد بتدفقات غير متزامنة أولاً مع اجتماعات أسبوعية منظمة عبر المناطق الزمنية.",
    },
  },
  {
    q: {
      en: "Can you handle Arabic design properly?",
      ar: "هل يمكنكم التعامل مع التصميم العربي بشكل صحيح؟",
    },
    a: {
      en: "Arabic-first is how we work, not a retrofit. We treat Arabic typography with the same craft as Latin — proper font pairings, correct RTL layout, and culturally-aware design decisions. Every project ships bilingual by default.",
      ar: "العربية أولاً هي منهجيتنا، ليست إضافة لاحقة. نتعامل مع الخط العربي بنفس الحرفية التي نتعامل بها مع اللاتيني — تركيبات خطوط صحيحة، تخطيط RTL دقيق، وقرارات تصميم واعية ثقافياً. كل مشروع ثنائي اللغة تلقائياً.",
    },
  },
  {
    q: {
      en: "What does your process look like?",
      ar: "كيف تسير عمليتكم؟",
    },
    a: {
      en: "Four phases: Discover (research + strategy), Define (creative direction), Design (production), Deliver (launch + systems). Each phase ends with an alignment review before moving forward. You stay in the loop every step.",
      ar: "أربع مراحل: اكتشاف (بحث + استراتيجية)، تعريف (اتجاه إبداعي)، تصميم (إنتاج)، تسليم (إطلاق + أنظمة). كل مرحلة تنتهي بمراجعة توافق قبل التقدم. تبقى معنا في كل خطوة.",
    },
  },
  {
    q: {
      en: "Do you offer ongoing support after launch?",
      ar: "هل تقدمون دعماً مستمراً بعد الإطلاق؟",
    },
    a: {
      en: "Yes. Every project includes 30 days of post-launch support. After that, we offer retainer agreements for ongoing design, development, and motion work — flexible to your pace.",
      ar: "نعم. كل مشروع يتضمن ٣٠ يوم دعم بعد الإطلاق. بعدها، نقدّم اتفاقيات استمرار لأعمال التصميم والتطوير والموشن المستمرة — مرنة حسب وتيرتك.",
    },
  },
  {
    q: {
      en: "How do we get started?",
      ar: "كيف نبدأ؟",
    },
    a: {
      en: "Fill out the contact form or email us directly. We'll schedule a discovery call within 24 hours to understand your project and then send a detailed proposal with scope, timeline, and pricing.",
      ar: "املأ نموذج التواصل أو راسلنا مباشرةً. نحدد جلسة اكتشاف خلال ٢٤ ساعة لفهم مشروعك ثم نرسل عرضاً مفصلاً يشمل النطاق والجدول الزمني والتسعير.",
    },
  },
];

export default function FAQSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-36 bg-surface-low relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div className="lg:sticky lg:top-32">
            <SectionLabel>{t("FAQ", "الأسئلة الشائعة")}</SectionLabel>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-lyon font-bold tracking-tight mt-6 mb-6"
            >
              {t("Questions answered.", "أجوبة مباشرة.")}
            </motion.h2>
            <p className="text-black/60 leading-relaxed mb-8 max-w-sm">
              {t(
                "Common questions about how we work, pricing, and timelines. Don't see yours?",
                "أسئلة شائعة عن أسلوب عملنا والتسعير والجدول الزمني. لا ترى سؤالك؟"
              )}
            </p>
            <Button href="/contact" variant="primary" size="md" withArrow>
              {t("Ask us directly", "اسألنا مباشرة")}
            </Button>
          </div>

          {/* Right column - FAQ list */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            className="divide-y divide-black/[0.08] border-y border-black/[0.08]"
          >
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-start justify-between gap-6 py-6 md:py-7 text-left focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-2 group"
                  >
                    <span className="text-lg md:text-xl font-lyon font-bold tracking-tight text-black group-hover:text-brand-blue transition-colors">
                      {t(f.q.en, f.q.ar)}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 w-8 h-8 mt-1 flex items-center justify-center border border-black/15 group-hover:border-brand-blue"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 16 16" className="w-3 h-3 text-black group-hover:text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 2v12M2 8h12" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 text-black/65 leading-relaxed text-base md:text-lg max-w-2xl">
                          {t(f.a.en, f.a.ar)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
