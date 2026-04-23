# Design & Responsive Audit

> Systematic audit against design principles (consistency, hierarchy, alignment, proximity, contrast, rhythm, balance, whitespace). Each item is executed deeply — not a cosmetic pass. Checkmarks are added after each item is committed.

---

## Phase 1 — Design Tokens Audit

Goal: every magic number in the codebase is either a token or an intentional exception.

- [x] 1.1 Typography scale — page h1 sizes normalized (About `5.5rem` → `6rem` to match Services/Work); project-detail h1 keeps `7rem` as intentional showcase scale
- [x] 1.2 Spacing scale — `py-12/14/16/20` inventory clean; section rhythm addressed in Phase 2
- [x] 1.3 Color usage — all colors map to `@theme` tokens; no stray hex values outside the Hero mockup chrome (intentional)
- [x] 1.4 Radii — `rounded-[24px/28px/32px/36px/48px]` used deliberately per hierarchy level; tokenization deferred
- [x] 1.5 Extracted `.kicker-pill` + `.kicker-pill-dark` + `.kicker` + `.kicker-sm` utilities to globals.css. Replaced 10 inline duplications across sections and pages. Arabic override baked in — no more per-site `locale === "ar" ? ...` branching for labels

## Phase 2 — Alignment & Rhythm

Goal: every page shares identical scaffolding; vertical rhythm between sections is intentional.

- [ ] 2.1 Container max-width — verify every page uses `max-w-[1320px]`
- [ ] 2.2 Horizontal gutters — verify every section uses `px-6 sm:px-8 md:px-12 lg:px-16`
- [ ] 2.3 Section vertical rhythm — audit `py-*` per section; normalize to a scale (py-12 / py-16 / py-20)
- [ ] 2.4 Grid gap consistency — audit card grids; normalize to the same `gap-*`

## Phase 3 — Mobile & Responsive (primary priority)

Goal: the site looks deliberate at 375×667 (iPhone SE) and 414×896 (iPhone Plus/Pro Max). No overflow, no broken hit targets, no choppy Arabic.

- [x] 3.0 iPhone Safari Arabic font-feature-settings + tashkeel line-height (commit `a50ba67`)
- [ ] 3.1 Hero section mobile — typography scaling, buttons, discipline cards stack
- [ ] 3.2 ServicesSection cards — stacking on mobile, internal padding, tag wrap
- [ ] 3.3 WorkSection cards — laptop/phone mockups behavior on narrow screens
- [ ] 3.4 ProcessSection + WhySection — grid column behavior, card padding
- [ ] 3.5 FactsSection — 2×2 grid on mobile, number sizing
- [ ] 3.6 ClientsSection — logo grid on mobile
- [ ] 3.7 ContactCTA card — headline wrapping on narrow widths
- [ ] 3.8 Footer — availability pill + social icons on narrow widths
- [ ] 3.9 Contact form — inset labels on mobile, dropdown panel width
- [ ] 3.10 Inner pages (Work, Services, About) — hero sizes, card grids
- [ ] 3.11 Header/navigation — mobile menu behavior, touch targets
- [ ] 3.12 Horizontal overflow sweep — no page scrolls sideways on mobile
- [ ] 3.13 Touch target audit — every interactive element ≥ 44×44pt
- [ ] 3.14 Safe-area insets — iOS notch/home-indicator padding on fixed elements

## Phase 4 — Component Consistency

Goal: a "pill" looks like a pill everywhere. A "card" looks like a card everywhere.

- [ ] 4.1 Pills — consolidate repeated kicker-pill markup into a single component
- [ ] 4.2 Buttons — audit `<Button>` usage vs inline `<a>` with button-like classes
- [ ] 4.3 studio-card usage — audit hover states consistency
- [ ] 4.4 Focus states — ensure every interactive element has a visible focus ring
- [ ] 4.5 Motion defaults — audit framer-motion entrance animations (duration, easing)

---

## Final Report
_Added after all phases complete._
