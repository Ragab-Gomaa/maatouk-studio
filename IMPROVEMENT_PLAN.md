# Maatouk Studio — خطة تطوير الموقع

**الحالة:** الخطة النهائية — جاهزة للاعتماد
**آخر تحديث:** 2026-04-22

---

## الهدف العام

تحويل الموقع من "تصميم جميل" إلى **منتج متكامل جاهز للعملاء** يعكس احترافية الاستوديو ويحوّل الزوار لعملاء فعليين.

---

## 🎯 المشاريع المتاحة — الحالة النهائية

### 💻 مشاريع الويب (كلها LIVE)

| المشروع | الرابط اللايف | النوع |
|---------|-------------|------|
| **Dolcebello** | `dolcebello.net` | E-commerce فاخر (حلويات) |
| **Nobles Catering** | `noblescatering.com` | Catering + Admin Platform |
| **Meezan** | `meezan-app.com` | ERP Arabic-first |
| **Royal Catering** | `royal-catering.vercel.app` | Booking Platform |
| **Nobles Respond** | `noblesrespond.com` | Enterprise Operations |

### 🎬 مشاريع الموشن جرافيك (Vimeo)

#### ✅ Client Work (عمل حقيقي لعملاء)
| # | البراند | الوصف |
|---|--------|------|
| 1 | **Sandah** | Client project |
| 2 | **Forkpos** | Client project |
| 3 | **BlankosKSA** | Client project |
| 4 | **Class Ride** | Client project |

#### 🎓 Personal / Spec Work (تدريبات وإعادة تخيل)
| # | البراند | النوع |
|---|--------|------|
| 5 | Slack | Spec / Personal project |
| 6 | Mercedes-Benz | Spec / Personal project |
| 7 | Nike | Spec / Personal project |
| 8 | Real Time | Spec / Personal project |

**مبدأ مهم:** الـ spec work في الموشن جرافيك ممارسة محترمة ومعترف بها عالمياً لعرض المهارات. هنعرضها بوضوح كـ "Personal Project" أو "Spec Work" عشان نحافظ على الشفافية والاحترافية.

**طريقة العرض المقترحة:**
- تصنيف منفصل "Client Work" و "Personal Projects"
- Badge صغير على فيديوهات الـ spec يوضح "Personal Project — Not affiliated with [Brand]"
- الترتيب: Client Work أولاً، Personal Projects بعدها

---

## 🔄 استراتيجية التحديث المعتمدة

**Live preview للصفحة الرئيسية (تلقائي) + Screenshots مختارة (يدوي)**

| الطريقة | تحديث تلقائي؟ | مناسبة لـ |
|---------|-------------|----------|
| Live iframe للموقع | ✅ فوري | الواجهات الرئيسية |
| Vimeo embed | ✅ فوري | كل الموشن |
| Screenshots مختارة | ❌ يدوي | تفاصيل Admin/Dashboard |
| Device mockups | ❌ يدوي | الـ Hero visuals |

---

## 🔴 الدفعة 1: الأساسيات الحرجة

1. **حذف رابط Journal** — من Nav + Content + Footer
2. **إصلاح الـ RTL** — direction ديناميكي حسب اللغة
3. **توحيد الأزرار** — Button component موحد (Primary/Secondary/Ghost)
4. **إصلاح Hero على الموبايل** — تظهر كلها + visual مبسط
5. **Favicon** — من BrandMark (multi-size: ico, apple-touch, android)
6. **Pattern جديد للـ Hero** — عناصر تخصصات الاستوديو (Type + Motion + Code)
7. **Accessibility** — تباين + focus states + aria-labels
8. **تحسين فورم التواصل** — validation + loading + error/success states

**الوقت المقدر:** 3-5 ساعات (جلسة واحدة)

---

## 🟡 الدفعة 2: Case Studies Infrastructure

### 2.1 تصميم template الـ Case Study

**هيكل عام قابل للتخصيص:**

1. **Hero** — اسم المشروع + تصنيف + سنة + صورة/فيديو ملء الشاشة
2. **At a Glance** — العميل، الصناعة، الخدمات، المدة، الدور
3. **The Challenge** — التحدي (نص قوي + visual)
4. **Our Approach** — المنهجية في خطوات
5. **Live Preview** — iframe للموقع اللايف (مع scroll controls)
6. **Feature Showcase** — عرض الـ features المميزة (screenshots + shrt descriptions)
7. **Tech Stack** — التقنيات المستخدمة (badges)
8. **Results** — الأرقام والنتائج (للمشاريع اللي فيها metrics)
9. **Next Project** — للتنقل بين الأعمال

### 2.2 مكونات Reusable

- `<LivePreview />` — iframe محسّن مع states
- `<FeatureGrid />` — شبكة features مع screenshots
- `<TechStackBar />` — badges للتقنيات
- `<VimeoPlayer />` — مشغل مخصص للموشن
- `<DeviceMockup />` — mockups (laptop/phone/tablet)
- `<ScreenshotGallery />` — معرض صور تفاعلي

### 2.3 فلتر صفحة الأعمال

**Categories:**
- All
- Branding
- Motion Graphics
- Websites
- E-commerce
- ERP / Apps

+ فلتر حسب السنة (اختياري)

**الوقت المقدر:** 4-5 ساعات

---

## 🟡 الدفعة 3: تعبئة Case Studies

### Priority Order (حسب القوة البصرية والتأثير)

#### 🥇 **Dolcebello** (البداية - الأقوى بصرياً)
- Live iframe من `dolcebello.net`
- Screenshots: Product page, Customization, Checkout
- Features: Multi-language, 33 Zones, Payment (KNET/Visa/COD), Customizable products
- Tech: Next.js, Supabase, Framer Motion, next-intl

#### 🥈 **Nobles Catering**
- Live iframe من `noblescatering.com`
- Screenshots: 6-step booking, Admin dashboard
- Features: Map booking, Payment integration, Admin+Sales roles
- Tech: Next.js, Supabase, Leaflet, Ecom.io

#### 🥉 **Meezan** (ERP - شغل متقدم)
- Live iframe من `meezan-app.com`
- Screenshots: Dashboard, Chart of Accounts, Reports
- Features: Multi-company, Drill-down, PDF/Excel exports
- Tech: Next.js, Prisma, Postgres, Recharts

#### 4️⃣ **Royal Catering**
- Live iframe من `royal-catering.vercel.app`
- Screenshots: Map booking, Step-by-step form
- Tech: Next.js, Supabase, Leaflet

#### 5️⃣ **Nobles Respond**
- Live iframe من `noblesrespond.com`
- Screenshots: Dashboard, Landing page
- Features: Bilingual, PWA, Real-time collab
- Tech: Next.js, FastAPI, Docker, PostgreSQL

### 🎬 Motion Projects (قسم منفصل)
- **Section 1: Client Work** (Sandah, Forkpos, BlankosKSA, Class Ride)
- **Section 2: Personal Projects / Spec Work** (Slack, Mercedes-Benz, Nike, Real Time)
- Custom player + thumbnail
- Hover = auto-preview (silent)
- Click = fullscreen modal
- Badges واضحة بـ "Client Work" أو "Personal Project"
- Disclaimer نصي: "Personal projects are not affiliated with the brands shown"

**الوقت المقدر:** ساعة-ساعتين لكل مشروع = 7-10 ساعات

---

## 🟢 الدفعة 4: الإضافات

### 4.1 Testimonials (شهادات موقتة)
- Slider في الصفحة الرئيسية بعد Work
- شهادات موقتة واقعية
- Structure: اقتباس + اسم + منصب + شركة

### 4.2 Clients Logos
- Grid بسيط
- **شعارات العملاء الحقيقيين فقط:**
  - Dolcebello, Nobles Catering, Meezan, Royal Catering
  - Sandah, Forkpos, BlankosKSA, Class Ride
- **مش هنحط** Mercedes/Nike/Slack/Real Time عشان مش عملاء حقيقيين

### 4.3 FAQ
- Accordion animation
- 5-7 أسئلة شائعة

### 4.4 SEO & Meta
- Open Graph images
- JSON-LD structured data
- Sitemap.xml + Robots.txt

### 4.5 Performance
- Image optimization
- Lazy loading
- Font loading optimization

**الوقت المقدر:** 3-4 ساعات

---

## 📊 الجدول الزمني الكامل

| الدفعة | الوقت | إجمالي |
|-------|------|-------|
| الدفعة 1 — الأساسيات | 3-5 ساعات | جلسة واحدة |
| الدفعة 2 — Infrastructure | 4-5 ساعات | جلسة واحدة |
| الدفعة 3 — Case Studies | 7-10 ساعات | 2-3 جلسات |
| الدفعة 4 — الإضافات | 3-4 ساعات | جلسة واحدة |
| **الإجمالي** | **17-24 ساعة** | **5-6 جلسات** |

---

## ✅ ما تم إنجازه

- [x] إعادة تصميم Hero (Split Hero)
- [x] إعادة تصميم Why Maatouk
- [x] استبدال Studio Reel بـ Marquee + Statement
- [x] نشر على Vercel
- [x] ربط `maatouk-studio.com`
- [x] تفعيل Vercel Analytics
- [x] فحص الـ 5 مشاريع الحقيقية
- [x] جمع روابط Vimeo
- [x] جمع الروابط اللايف للـ 5 مشاريع
- [x] تصنيف Motion work (Client / Personal)

---

## ⏸️ مؤجل (ينتظر)

- ربط فورم التواصل بـ Resend (ينتظر الإيميل)
- روابط السوشيال ميديا

---

## 🔥 الخطوة التالية

**المقترح:** نبدأ بـ **الدفعة 1 كاملة** (الأساسيات) الآن، ونشوف النتيجة قبل ما نروح للدفعة 2.

**السبب:** الدفعة 1 بتحسن الموقع الحالي فوراً قبل ما نضيف case studies جديدة.

---

**هل توافق على البدء في الدفعة 1؟**
