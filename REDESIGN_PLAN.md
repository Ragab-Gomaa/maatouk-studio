# Maatouk Studio — Full Redesign Plan

**الحالة:** تنفيذ مباشر بدون مراجعات وسيطة
**التاريخ:** 2026-04-22

---

## الفلسفة

الموقع الحالي "tech SaaS" مش "creative studio". التحويل كامل لـ:
- **Editorial magazine aesthetic** (مش data-driven dashboard)
- **Typography-forward** (النص الكبير = بطل التصميم)
- **Per-project distinct identity** (كل case study بشخصيتها اللونية/الطباعية)
- **Motion هادئ سينمائي** (مش bounces و scales)
- **Whitespace يتنفس** (مش معبّى)

---

## البراندينج المحفوظ

- **Logo**: BrandMark كما هو
- **Primary Blue**: `#0029D6`
- **Accent Green**: `#3CFFC5`
- **Fonts**: Lyon (Latin display) + Mizan (Arabic)
- **Surface**: `#FBF9F9`

---

## الجديد في الـ Redesign

### 1. System Foundation
- Per-project color palettes (accent لكل case study)
- New typography scale (display / deck / body / caption)
- Cinematic motion primitives

### 2. Homepage — Editorial
- **Hero**: نص مانيفستو ضخم + mockup كبير لمشروع مختار (مش panel متبدل)
- **Work Section**: 3 مشاريع بكروت مصممة لكل مشروع (مش template موحد)
- **Services → Capabilities**: typographic rows، بدون ربط بالمشاريع
- **Clients**: 4 شعارات حقيقية فقط (حذف Meezan placeholder)
- **Testimonials**: مبسط
- **Process**: refined
- **FAQ**: refined
- **Contact CTA**: full-bleed

### 3. Case Studies — Per-Project Identity
كل مشروع له:
- **Hero مخصص**: خلفية بلون المشروع + mockup laptop+phone بصور فعلية
- **At-a-Glance**: meta grid
- **Color Palette**: مربعات ألوان المشروع
- **Typography Specimen**: الخط المستخدم في الموقع
- **Narrative**: Challenge / Approach / Solution / Outcome
- **Feature Spotlight**: screenshots حقيقية مع annotations
- **Device Mockups**: laptop + phone + (ipad أحياناً) مع ظلال واقعية
- **Tech Stack**: badges
- **Live Preview**: iframe واحدة (للناس اللي عايزة تجرب)
- **Next Project**: تنقل راقي

### 4. Screenshot Generation
- استخدام **puppeteer** (local script) لالتقاط screenshots من الـ 5 live sites
- لكل مشروع: home + 2-3 صفحات internal على desktop (1440×900) و mobile (390×844)
- Optimize بـ sharp
- Save to `/public/images/projects/{slug}/`

### 5. Per-Project Palettes
| Project | Primary | Accent | Type |
|---------|---------|--------|------|
| Dolcebello | `#1A1A1A` | `#D4AF37` | Serif feel |
| Meezan | `#0C2340` | `#3CFFC5` | Technical sans |
| Nobles Catering | `#0A3D2E` | `#C6A664` | Warm serif |
| Royal Catering | `#7B1E3A` | `#D4AF37` | Heritage |
| Nobles Respond | `#0A5540` | `#3CFFC5` | Modern functional |

---

## خطة التنفيذ

### Phase 1 — Assets (screenshots capture)
1. Install puppeteer
2. Write capture script (5 sites × 2 viewports × 2-3 pages)
3. Run capture
4. Optimize with sharp

### Phase 2 — Design System
1. Extended typography tokens in globals.css
2. Per-project palette in content.ts
3. New motion primitives

### Phase 3 — Rebuild Components
- `<ProjectHero>` (per-project hero with mockup composition)
- `<ColorPalette>` (swatches)
- `<TypeSpecimen>` (typography showcase)
- `<DeviceMockup>` (laptop + phone frames, realistic shadows)
- `<FeatureSpotlight>` (annotated screenshot)
- `<NextProject>` (refined)
- `<SimpleLivePreview>` (one iframe, not dual)
- `<EditorialHero>` (homepage)
- `<CapabilitiesSection>` (redesigned services)

### Phase 4 — Rewrite Pages
- `src/app/page.tsx` — new homepage composition
- `src/app/work/[slug]/page.tsx` — new editorial case study
- `src/app/work/page.tsx` — refined grid

### Phase 5 — Polish
- Mobile tuning per breakpoint
- iOS Safari specific fixes
- Accessibility sweep
- Build + smoke test
- Commit + deploy

---

## نطاق التنفيذ

**Total estimated effort:** 7-10 ساعات متتالية.
**Execution mode:** Single long session, no checkpoints, commit at the end.

---

**Starting now.**
