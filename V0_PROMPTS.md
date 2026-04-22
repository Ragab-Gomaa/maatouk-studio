# v0.dev Prompts — Maatouk Studio

**كيفية الاستخدام:** الصق الـ "Context Primer" أول مرة، ثم استخدم البرومتات بالترتيب. كل برومت يبني على السابق.

---

## 🔰 CONTEXT PRIMER (الصقه أول مرة فقط)

```
I'm designing a bilingual (Arabic + English, RTL + LTR) marketing website for Maatouk Studio — a Gulf-based creative studio specializing in Branding, Motion Design, and Digital Products (websites, e-commerce, ERP).

BRAND (do not change):
- Primary: #0029D6 (electric blue)
- Accent: #3CFFC5 (mint green)
- Surface: #FBF9F9
- Text: #1B1B1C
- Display font: serif (Lyon / Playfair Display fallback)
- Body font: sans-serif (Inter)
- Arabic font: IBM Plex Sans Arabic or Noto Naskh Arabic
- Brand mark: geometric diamond logo (4 rotated squares forming an X)

DESIGN DIRECTION:
- Editorial magazine aesthetic (like Pentagram, Koto, Made Thought, Locomotive)
- Typography-forward with extreme scale play (huge headlines, small body)
- Generous whitespace, wide margins
- Gallery-like, refined, confident
- Arabic typography treated as equal to Latin
- Subtle motion only — no bouncing, no floating gradients
- No stock images, no generic icons

NEVER:
- Add new fonts beyond what's listed
- Use purple/pink/orange colors
- Make it look like a SaaS dashboard
- Add fake "trusted by" logos (Apple, Google, Meta)
- Use stock photos

Tech stack I'll integrate into: Next.js 16 App Router, Tailwind CSS 4, Framer Motion.

I'll tell you which section to design next. Show me 2-3 variations each time and I'll pick one to refine.
```

---

## 📄 BROMPT 01 — Hero Section (ابدأ بده)

```
Design the Hero section for the homepage.

Requirements:
- Full viewport height (100vh)
- Editorial, magazine-cover style
- MUST NOT show any featured project or website screenshot
- MUST show original art/illustration expressing the three studio disciplines (Branding, Motion, Digital) as a composed visual piece
- Bilingual: English LTR version

Content to include:
- Small masthead label "Creative Studio · Maatouk · 2026"
- Large editorial headline (something about designing for brands with intent)
- Short 1-2 sentence lede about the studio
- Two CTAs: "View our work" (primary) + "Start a project" (secondary outline)
- Hero visual: a typographic/illustrative composition showing all three disciplines as art — e.g., a triptych of three art plates (I. Branding: big Arabic+Latin letterforms with construction marks. II. Motion: stylized motion frames with trails. III. Digital: a minimal UI/code artifact as art)

Style notes:
- Use the brand blue #0029D6 confidently
- Typography is the star — make the headline HUGE (text-[8rem] or similar)
- Clean, no gradient blobs, no floating shapes
- Subtle entrance animation only

Show me 3 variations.
```

---

## 📄 BROMPT 02 — Studio Manifesto Strip

```
Design a short "Studio Manifesto" section that sits below the Hero on the homepage.

Structure:
- Two-column editorial layout (sticky left label, flowing right content)
- Left column: small label "§01 — The Studio" + a large editorial pull-quote in serif italic like "Design is a craft. We treat it that way."
- Right column: 2-3 short paragraphs about the studio philosophy + a small metrics row (03 disciplines / AR·EN bilingual / 01 team)

Style: magazine editorial, generous type scale, minimal chrome. White background.

Show 2 variations.
```

---

## 📄 BROMPT 03 — Selected Work Section

```
Design the "Selected Work" section for the homepage — 3 featured case studies.

Layout:
- Section header: small label "§02 — Selected Work" + headline "Three pieces we're proud of" + small "View all work →" link
- Project 1 (Dolcebello — luxury sweets e-commerce): full-bleed card on charcoal background with gold accents, laptop + phone mockup composition
- Project 2 (Meezan — Arabic-first ERP): half-width card on deep navy + mint accent, with laptop mockup
- Project 3 (Sandah — Motion logo animation): half-width card on pure black, with a Vimeo-style video thumbnail

Each card has:
- Project number "№ 01/02/03"
- Category tag + year
- Big project title in serif
- Short description
- "Open case study →" link (reveal on hover)

Style: Each project has its OWN color palette (don't force brand blue on all). Magazine layout — asymmetric is fine.

Show 2 variations.
```

---

## 📄 BROMPT 04 — Capabilities Section

```
Design the "Capabilities" section — three disciplines explained.

Structure:
- Section header: "§03 — Capabilities" + headline "Strategy, craft, under one roof"
- NOT a 3-column grid of cards — instead, three editorial rows stacked vertically
- Each row: big Roman numeral (I, II, III) + title (Branding / Motion / Digital) + italic tagline + description paragraph + list of deliverables

DO NOT reference specific client projects in this section. Talk about the craft generically.

Style: editorial stack with dividing lines. Typography hierarchy should be strong — title in 5rem serif, everything else small.

Show 2 variations.
```

---

## 📄 BROMPT 05 — Process Section

```
Design the "Process" section showing our 4-step method:
1. Discover — research + strategy
2. Define — creative direction
3. Design — production
4. Deliver — launch + systems

Layout options:
- Option A: Vertical timeline with alternating left/right steps, numbered circles on a center line
- Option B: Four columns with big numbers and short descriptions

Include: section header "§04 — The Method" + "From insight to impact" headline.

Style: clean, editorial, not tech-startup-grid.

Show both options.
```

---

## 📄 BROMPT 06 — Why Maatouk / Principles

```
Design the "Why Maatouk" section — four guiding principles:
I. Strategy-led design
II. Bilingual by craft
III. Full-stack delivery
IV. Built to scale

Layout:
- Each principle as an editorial row (not a card grid)
- Roman numeral (I, II, III, IV) + principle title + italic aside quote + description paragraph
- Horizontal dividers between rows

Section header: "§05 — Why Maatouk" + headline "Four principles, one way of working"

Style: like reading a manifesto in a magazine.

Show 1 variation.
```

---

## 📄 BROMPT 07 — Marquee / Disciplines Ticker

```
Design a "Disciplines Marquee" section for visual pacing between content blocks.

Structure:
- Full-bleed black background
- Two rows of marquee scrolling in opposite directions
- Text: "Branding · Motion · Websites · Identity · E-commerce · Strategy · Animation · Platforms" (repeating)
- Text is huge — 6rem+, ghosted white (opacity 10-20%)
- Between the two rows: a large pull-quote "We don't just make things that look good — we make them work hard." with "Studio philosophy" attribution

Style: editorial, cinematic. Subtle animation (slow scroll).
```

---

## 📄 BROMPT 08 — Clients Strip

```
Design a "Selected Clients" section showing 4-5 client logos.

Structure:
- Small label "§06 — Selected clients" on left + thin divider + small descriptive text on right
- Row of client logos — grayscale by default, colored on hover
- Clean grid with hairline dividers

Keep it simple and restrained. NO fake "trusted by Google/Apple" — the logos will be real client logos I provide.
```

---

## 📄 BROMPT 09 — Testimonials

```
Design the "Testimonials" section.

Structure:
- Two-column sticky layout
- Left (sticky): label "§07 — In their words" + headline "Trusted by ambitious brands" + numbered navigator (01, 02, 03, 04) to switch between testimonials
- Right: one big testimonial at a time — huge opening quote mark, the quote in 2-3rem serif, attribution (name + role + company) with avatar

Include 4 testimonial slots (content-agnostic — I'll fill in).

Style: magazine feature page, considered typography.
```

---

## 📄 BROMPT 10 — Contact CTA Closer

```
Design the closing "Contact CTA" section for the homepage.

Structure:
- Full-bleed brand blue #0029D6 background
- Asymmetric two-column: left = big editorial headline "Got a brief worth making?" with "make" in green italic. Right = short body text + two CTAs ("Start a project" in green / "Email directly" ghost) + a small metadata row (Response time / Engagement type)

Style: confident, final statement. The closing spread of the "magazine."
```

---

## 📄 BROMPT 11 — Case Study Page Template

```
Design the template for individual case study pages (/work/[slug]).

Structure:
1. HERO: Full-bleed in the project's own color palette (NOT brand blue — each case study has its own). Contains: breadcrumb, project number, year, huge project title, short description, laptop + phone mockup composition on the side.

2. AT-A-GLANCE: 4-column meta row (Client / Category / Year / Live at) on white.

3. OVERVIEW: Two-column — label on left, long editorial summary paragraph on right (serif, 2rem).

4. NARRATIVE: Three editorial blocks stacked — Challenge, Approach, Outcome. Each is a title + body. Label on left, content on right.

5. FEATURE SPOTLIGHT: On the project's palette background — one feature explained with a big laptop mockup.

6. PALETTE + TYPOGRAPHY: Two blocks — Color Palette (5 swatches with hex) + Type Specimen (big letterforms showing the project's fonts).

7. MORE FEATURES: Compact grid of 3-4 additional features as small cards.

8. TECH STACK + STATS: Badges row + a stats block in brand blue.

9. LIVE PREVIEW: Browser-framed iframe showing the live site.

10. NEXT PROJECT: Full-bleed in the next project's palette with big next project title.

Style: each case study should feel like its own publication. Editorial, considered, professional.
```

---

## 📄 BROMPT 12 — Work Archive Page (/work)

```
Design the "Work Archive" page listing all case studies + motion projects.

Structure:
- Hero: "Selected Work" + filter bar (All, Websites, E-commerce, ERP, Motion-Client, Motion-Personal)
- Case Studies section: Each project rendered on its own color palette, alternating text/mockup left/right for editorial rhythm. Full-width cards, not grid.
- Motion Projects section: On black background, two groups — Client work (with green "Client" badge) and Personal/Spec work (with "Personal" badge + disclaimer). Vimeo thumbnails.

Style: editorial catalog, not a Pinterest grid.
```

---

## 📄 BROMPT 13 — Services Page (/services)

```
Design the dedicated Services page.

Structure:
- Hero: "Services" + "Three disciplines. One vision." + short intro
- Three detailed service blocks (Branding / Motion / Digital):
  - Each has: section header, extensive description, full capabilities list, typical deliverables, duration indicator
  - Use editorial two-column layouts, not cards
- Closing CTA: "Have a project in mind?" → Contact

Style: deeper than the Capabilities homepage section. This is where prospective clients dig in.
```

---

## 📄 BROMPT 14 — About Page (/about)

```
Design the About page.

Structure:
- Hero: "Studio built on craft and conviction" + intro paragraph
- Values section: 3 values as editorial rows (Intentional Design / Strategic Thinking / Relentless Craft)
- Studio photograph placeholder (large 21:9 aspect)
- Approach section: two-column — narrative on left + a large pull-quote in a brand blue block on right
- DO NOT include team bios (studio is solo + freelancers)

Style: quiet, confident, magazine feature.
```

---

## 📄 BROMPT 15 — Contact Page (/contact)

```
Design the Contact page.

Structure:
- Two-column asymmetric layout
- Left (70%): large editorial headline "Let's build something remarkable" + subheading + direct email link in huge text
- Right (30%): form in a white card:
  - Name input
  - Email input
  - Company (optional)
  - Service chooser (pill buttons: Branding / Motion / Website / Full Package)
  - Budget range chooser (pill buttons: <$10k / $10-25k / $25-50k / $50k+)
  - Message textarea
  - Submit button
- Form states: loading, success (with thank-you message), error

Style: the form should feel premium, not standard-issue.
```

---

## 📄 BROMPT 16 — Header / Footer

```
Design the global Header and Footer components.

HEADER:
- Desktop: Logo left / Nav center (Work, Services, About, Contact) / Language toggle + "Start a project" CTA right
- Mobile: Logo / Language toggle / Hamburger → full-screen menu
- Becomes elevated (subtle shadow) on scroll
- Active nav link has underline or color change

FOOTER:
- Dark (black) background
- Top section: Big CTA "Ready to start?" + "Start a project" green button
- Middle section: 4-column — Brand + tagline / Navigation / Connect (social links) / Get in touch (email)
- Bottom: copyright + "Crafted with intention" tagline

Style: restrained, editorial, final-page-of-the-magazine feel.
```

---

## 🎯 WORKFLOW مقترح

1. استخدم **Context Primer** أول حاجة
2. ابدأ بـ **Prompt 01 (Hero)** — هذا الأهم
3. اختار variation ووافق عليه
4. اطلب "Refine: make the headline larger" أو أي تعديلات
5. انتقل للـ **Prompt 02 (Manifesto)**
6. كمل الصفحة الرئيسية أولاً (Prompts 01-10)
7. ثم صفحات الـ Case Study والـ Work (11-12)
8. ثم باقي الصفحات (13-15)
9. أخيراً Header/Footer (16)

---

## 💡 نصائح مهمة

- بعد كل variation، اسأل v0: **"Show the Arabic RTL version"** — عشان نتأكد يشتغل صح
- لو جاب حاجة مش عجباك، قول **"More editorial, less tech-looking"**
- لو عايز تعديل محدد: **"Keep structure but make headline serif and 2x bigger"**
- لا تقبل أول variation — اطلب **"Show 2 more variations"**
- احفظ screenshots للـ variations اللي عجباك حتى لو مش النهائية

---

لما تخلص من أي صفحة، ابعتلي screenshots أو share v0 link وأنا أبدأ التنفيذ.
