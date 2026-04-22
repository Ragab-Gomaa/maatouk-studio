# Maatouk Studio — Website Design Brief

**Paste this entire document into v0.dev (new chat, NOT connected to any GitHub project) and into Google Stitch.**

---

## THE STUDIO

Design a complete marketing website for **Maatouk Studio** — an independent creative studio based in the Gulf region, specializing in three disciplines:

1. **Branding** — visual identity systems, logo, typography, guidelines
2. **Motion Design** — logo animations, campaign ads, explainer videos, product motion
3. **Digital Products** — websites, e-commerce, booking platforms, ERP systems, enterprise apps

The studio is **bilingual by default** — every page must work flawlessly in both:
- **Arabic (RTL)** — primary market, treated as first-class typography
- **English (LTR)** — secondary but equal

Clients are ambitious Gulf brands and businesses — luxury e-commerce, catering companies, enterprise software companies, restaurant chains. The studio has shipped real projects: Dolcebello, Nobles Catering, Meezan, Royal Catering, Nobles Respond.

---

## BRAND SYSTEM (LOCKED — do not propose alternatives)

### Colors
- **Primary (blue):** `#0029D6` — deep electric blue
- **Accent (green):** `#3CFFC5` — mint green
- **Surface:** `#FBF9F9` — warm off-white
- **Text:** `#1B1B1C` — near black
- **Pure white:** `#FFFFFF` (for contrast moments)
- **Pure black:** `#000000` (for dark sections)

### Fonts
- **Display (Latin):** a refined editorial serif — Lyon, Playfair Display, Libre Caslon, or similar
- **Body (Latin):** Inter or similar clean sans-serif
- **Arabic:** IBM Plex Sans Arabic, Noto Naskh Arabic, or Mizan — should pair visually with the Latin serif

### Logo
- A geometric diamond mark — 4 rotated squares forming an X-pattern in the brand blue
- Appears in the header, footer, favicon
- Can be used as a decorative signature element

---

## DESIGN PERSONALITY

The website must feel like an **editorial design magazine**, not a SaaS product page. Think:

### Visual references (study these)
- **pentagram.com/work** — magazine-style case studies
- **koto.studio** — per-project visual identity
- **madethought.com** — refined typography, hushed tone
- **instrument.com** — bold editorial with motion
- **tatabi.com** — asymmetric layouts, strong type
- **locomotive.ca** — cinematic motion, large visuals
- **29lt.com** — Arabic typography mastery

### Character
- **Confident** but not loud
- **Editorial** — sentences read like a magazine, not marketing copy
- **Bilingual with dignity** — Arabic is original, not translated
- **Typography is the protagonist** — type IS the design, not decoration

### Design moves
- **Extreme scale play** — headlines at 6–10rem, body at 16–18px, nothing in between
- **Generous whitespace** — content breathes
- **Asymmetric layouts** where it earns attention
- **Numbered sections** (§01, §02) as editorial devices
- **Wide margins** on desktop
- **Minimal borders and boxes** — hierarchy through typography and space

---

## DO NOT

- ❌ Do not make it look like a Silicon Valley SaaS dashboard
- ❌ Do not use purple, pink, orange, or rainbow gradients
- ❌ Do not add "Trusted by: Google, Apple, Meta" — these are not real clients
- ❌ Do not use stock photography or AI-generated photos
- ❌ Do not use generic icons (Lucide, Feather, etc.) as decoration
- ❌ Do not create 3-column grids of identical feature cards
- ❌ Do not include FAQ section
- ❌ Do not add newsletter signup
- ❌ Do not add dark mode toggle
- ❌ Do not use floating gradient blobs or "glassmorphism"
- ❌ Do not hide content behind "Read more" toggles
- ❌ Do not show a featured project inside the Hero — show ORIGINAL ART

## DO

- ✅ Treat each Case Study as its own mini-publication with its own color palette and typographic voice
- ✅ Show Arabic and Latin typography TOGETHER in editorial compositions
- ✅ Use the brand mark (diamond) as a signature element
- ✅ Let sections have DIFFERENT structures — avoid repetition
- ✅ Use scale and whitespace as primary design tools
- ✅ Subtle motion — typographic reveals, not decoration

---

## PAGES REQUIRED

### 1. Homepage `/`

**§ Hero (100vh):**
- Editorial, magazine-cover style
- Large typographic headline with Arabic + Latin type treatment
- Short lede paragraph
- Two CTAs: "View our work" + "Start a project"
- **Hero visual must be original art expressing the three disciplines** — NOT a project screenshot. Ideas: a triptych of three art plates (Branding / Motion / Digital), each an independent artwork; or a composed poster combining typographic, motion, and code elements
- Masthead strip with studio name, year, disciplines

**§ Studio Manifesto strip:**
- Short editorial paragraph about studio philosophy
- Two-column asymmetric layout

**§ Selected Work (3 featured projects):**
- Dolcebello (Luxury E-commerce) — on dark + gold palette
- Meezan (Arabic-first ERP) — on navy + mint palette
- Sandah (Motion logo animation) — on black with Vimeo video
- Each has: number (№01), year, category, title, description, "Open case study →" link
- Each card in its OWN color palette — do NOT force brand blue on all
- Mockups: laptop + phone composition showing real project screenshots

**§ Capabilities (Three disciplines):**
- NOT a 3-column grid — use editorial stacked rows
- Each row: Roman numeral (I, II, III) + title + italic tagline + description + deliverables list
- Titles: "Branding" / "Motion Design" / "Digital Products"
- Do NOT reference specific client projects here

**§ Process (4 phases):**
- Discover → Define → Design → Deliver
- Timeline layout (vertical with alternating sides) or editorial columns
- Each phase: number, title, description

**§ Why Maatouk (4 principles):**
- Strategy-led design
- Bilingual by craft
- Full-stack delivery
- Built to scale
- Editorial rows with Roman numerals

**§ Marquee / Disciplines ticker:**
- Full-width black section
- Two marquee rows scrolling (Branding · Motion · Websites · Identity · E-commerce · etc.)
- Between the rows: a large pull-quote "We don't just make things that look good — we make them work hard."

**§ Selected Clients:**
- Row of 4–5 client logos (Dolcebello, Nobles Catering, Royal Catering, Forkpos)
- Grayscale default, color on hover

**§ Testimonials:**
- 3–4 client quotes
- Sticky label column on the left + one big quote at a time on the right
- Numbered navigator (01, 02, 03, 04)

**§ Closing Contact CTA:**
- Full-bleed brand blue section
- Big headline: "Got a brief worth making?"
- CTAs: "Start a project" + "Email directly"
- Meta row: Response time (24h) / Engagement type (Full-service)

---

### 2. Work Archive page `/work`

- Hero with "Selected Work" title + filter bar (All, Websites, E-commerce, ERP, Motion — Client, Motion — Personal)
- Case studies list: each rendered on its own color palette, alternating text/mockup sides for editorial rhythm (NOT a grid)
- Motion section: on black background, grouped as "Client work" (green badge) and "Personal projects / Spec work" (with clear disclaimer about not being affiliated with shown brands)
- Vimeo video thumbnails for motion

---

### 3. Case Study page `/work/[slug]`

**The most important page. Each case study must feel like its OWN publication.**

Per-project visual identity — each has its own color palette and typography treatment:
- **Dolcebello:** charcoal black + gold, Playfair Display
- **Meezan:** navy + mint, IBM Plex
- **Nobles Catering:** forest green + gold, Cormorant Garamond
- **Royal Catering:** burgundy + gold, Libre Caslon
- **Nobles Respond:** teal + bright green, IBM Plex Sans

**Sections (in order):**

1. **Project Hero:** on project palette, breadcrumb, project number, year, huge title, short description, laptop + phone mockup composition on the side
2. **At a Glance:** 4-column meta row on white — Client / Category / Year / Live URL
3. **Overview:** two-column (label + big editorial summary paragraph)
4. **Narrative (3 editorial rows):** Challenge → Approach → Outcome
5. **Feature Spotlight:** on project palette, one feature explained with large laptop mockup
6. **Color Palette:** 5 color swatches with hex values and roles
7. **Typography Specimen:** display letterforms in Latin + Arabic on project palette
8. **More Features:** compact grid of 3–4 additional feature cards
9. **Tech Stack:** badges row
10. **Stats:** key numbers in a brand blue block
11. **Live Preview:** one iframe in a realistic browser chrome (not two)
12. **Next Project:** full-bleed section in the NEXT project's palette, with big next project title

---

### 4. Services page `/services`

- Hero: "Three disciplines. One vision." + intro
- Three detailed blocks (Branding / Motion / Digital):
  - Full description
  - Complete capabilities list
  - Typical deliverables
  - Duration indicator
  - Editorial two-column layout (not cards)
- Closing CTA: "Have a project in mind?"

---

### 5. About page `/about`

- Hero: "Studio built on craft and conviction" + intro paragraph
- Values: 3 values in editorial rows (Intentional Design / Strategic Thinking / Relentless Craft)
- Studio photograph placeholder (21:9 aspect)
- Approach section: two-column — narrative on left + pull-quote in blue block on right
- DO NOT include team member bios — studio is solo + freelancers

---

### 6. Contact page `/contact`

- Two-column asymmetric
- Left (60%): huge editorial headline "Let's build something remarkable" + subheading + direct email in large serif
- Right (40%): form in white card with fields:
  - Name
  - Email
  - Company (optional)
  - Service chooser (pill buttons: Branding / Motion Design / Website / Full Package)
  - Budget range (pill buttons: <$10k / $10–25k / $25–50k / $50k+)
  - Message textarea
  - Submit button
- Form states: loading, success, error

---

### 7. Header (global)

**Desktop:**
- Logo (diamond mark + "Maatouk Studio" wordmark) on the left
- Nav in center: Work · Services · About · Contact
- Right: Language toggle (عربي / EN) + "Start a project" CTA
- On scroll: elevate with subtle shadow
- Active nav link has underline or color change

**Mobile:**
- Logo + Language toggle + Hamburger
- Hamburger opens full-screen menu with big nav links + CTA button

---

### 8. Footer (global)

- Dark (black) background
- Top: Big CTA strip "Ready to start?" + green "Start a project" button
- Middle: 4-column grid:
  - Brand: logo + tagline
  - Navigation: Work / Services / About / Contact
  - Connect: Instagram / Behance / LinkedIn / Twitter (social links)
  - Get in touch: hello@maatouk.studio (email)
- Bottom bar: copyright + "Crafted with intention" tagline

---

## CONTENT SAMPLES (for layouts)

### Sample headlines
- EN: "Designing brands that earn trust."
- AR: "نصمّم علامات تكسب الثقة."
- EN: "A studio for brands with intent."
- AR: "استوديو يصنع علامات بنية."

### Sample testimonials (4)
1. "The digital storefront genuinely feels like walking into our boutique. The Arabic typography and checkout flow are exceptional." — Dolcebello
2. "They rebuilt our entire booking platform without disrupting daily operations." — Nobles Catering
3. "Finally — an accounting system designed around Arabic, not retrofitted." — Meezan
4. "From strategy to motion to code, it was one team and one vision." — Royal Catering

### Case study project titles + short descriptions
- **Dolcebello:** A premium luxury sweets storefront built for Kuwait's most refined gifting occasions.
- **Meezan:** An Arabic-first cloud ERP and accounting system built for ambitious Gulf-region businesses.
- **Nobles Catering:** A premium catering booking platform for Kuwait with a 6-step wizard and full admin backend.
- **Royal Catering:** A full rebuild of an established Kuwaiti catering brand's online booking experience.
- **Nobles Respond:** An enterprise operational response platform with bilingual dashboards and PWA capabilities.

---

## DELIVERABLES

Generate the following screens (each at desktop 1440×900 and mobile 390×844):

1. Homepage — full page, all sections
2. Work archive page
3. Case study page template (pick one of the 5 projects — Dolcebello preferred)
4. Services page
5. About page
6. Contact page
7. Header component (desktop + mobile states)
8. Footer component
9. 404 / Not Found page

Each screen should be delivered in:
- **English (LTR)** — primary
- **Arabic (RTL)** — mirror of layout, Arabic typography

---

## FINAL NOTES

- Start from ZERO. Do not assume any existing design patterns.
- Prioritize originality over convention.
- If a design decision feels "safe," push it further.
- The studio is competing against top-tier agencies — the site must look like it belongs in that tier.
- Every pixel should feel considered. No filler.
