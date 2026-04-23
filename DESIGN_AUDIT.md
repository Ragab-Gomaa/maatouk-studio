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

- [x] 2.1 Container max-width — all sections use `max-w-[1320px]`. Verified across 20+ usages.
- [x] 2.2 Horizontal gutters — every content section uses `px-6 sm:px-8 md:px-12 lg:px-16`. Header uses a tighter gutter which compensates via its inner pill padding; verified logo lines up with section content at ±2px.
- [x] 2.3 Section vertical rhythm — two-tier scale confirmed as intentional: `py-14 md:py-20` for homepage sections (brand breathing), `py-12 md:py-16` for inner pages and ContactCTA (denser info). Asymmetric hero padding `pt-28 md:pt-32` is consistent across all page heroes.
- [x] 2.4 Grid gap scale — `gap-3/4` for tight grids (logos), `gap-4/5` for dense card grids (principles, process), `gap-5/6` for breathy card grids (services, case studies). About values grid bumped to `gap-5 md:gap-6` to match pattern.

## Phase 3 — Mobile & Responsive (primary priority)

Goal: the site looks deliberate at 375×667 (iPhone SE) and 414×896 (iPhone Plus/Pro Max). No overflow, no broken hit targets, no choppy Arabic.

- [x] 3.0 iPhone Safari Arabic font-feature-settings + tashkeel line-height (commit `a50ba67`)
- [x] 3.1 Hero section — headline `text-[2.75rem]` at mobile fits; ComposedMark's `-translate-x-[22%]` stays within its `max-w-[300px]` container at 375px; no overflow
- [x] 3.2 ServicesSection — cards stack `grid-cols-1 md:grid-cols-3`; padding `p-7 md:p-8` scales; tag pills wrap via `flex-wrap gap-1.5`
- [x] 3.3 WorkSection — primary card stacks full width, secondary grid `md:grid-cols-2` stacks on mobile; phone-on-laptop mockup at `w-[28%] min-w-[100px]` respects min-width on small cards
- [x] 3.4 ProcessSection — arrow between numbered steps was pointing right on ALL breakpoints, including mobile (1-col) where the next step is below. Hid the arrow on mobile/tablet (`hidden lg:block`). WhySection grid stacks correctly
- [x] 3.5 FactsSection — `grid-cols-2 lg:grid-cols-4` gives 2×2 on mobile, numbers `text-5xl` at 48px fit; eyebrow label now locale-safe (Arabic loses tracking/uppercase)
- [x] 3.6 ClientsSection — `grid-cols-2 md:grid-cols-4`; logo sizing branch already handles aspect-ratio differences
- [x] 3.7 ContactCTA — headline `text-4xl md:text-6xl lg:text-[5rem]` scales correctly; CTAs wrap via `flex-wrap gap-3`
- [x] 3.8 Footer — availability pill `self-start` on mobile (no squish with brand block); social icon buttons bumped `w-10 h-10 → w-11 h-11` for 44pt touch target
- [x] 3.9 Contact form — inset-label fields work fine on 375px; dropdown panel uses `start-0 end-0` (full card width), doesn't overflow; "Prefer a quick chat?" label now uses `.kicker`
- [x] 3.10 Inner pages — all heroes use consistent `pt-28 md:pt-32 pb-10 md:pb-14`; card grids stack correctly
- [x] 3.11 Header/nav — hamburger button `w-7 h-7 (28pt)` → `w-11 h-11 (44pt)` with negative margin to keep visual position. LanguageSwitch bumped from `py-1` to `min-h-11` + proper padding
- [x] 3.12 Horizontal overflow — every section with negative-positioned glows has `overflow-hidden` on its `<section>` container. Verified across Hero, Why, ContactCTA, Footer, About, Services, Work, Contact
- [x] 3.13 Touch targets — Button component already passes (sm `py-2+text-13`, md `py-2.5+text-14`, lg `py-3.5+text-15` — the lg is 44pt min). Fixed outliers: hamburger, language switch, social icons
- [x] 3.14 Safe-area insets — viewport-fit is default (not `cover`), so iOS reserves the notch area naturally. Header `fixed top-0` renders below the notch in standard mode. No safe-area padding needed for current behaviour

## Phase 4 — Component Consistency

Goal: a "pill" looks like a pill everywhere. A "card" looks like a card everywhere.

- [x] 4.1 Pills — consolidated in Phase 1 via `.kicker-pill` + `.kicker-pill-dark` + `.kicker` + `.kicker-sm` utilities
- [x] 4.2 Buttons — audited: all primary CTAs use `<Button>`; two custom `<a>` exist for WhatsApp (needs custom icon alongside text — Button component doesn't support that cleanly). Intentional.
- [x] 4.3 studio-card — single utility in globals.css with built-in hover lift. Used consistently across Services card, Process card, About value cards, Contact form, success state.
- [x] 4.4 Focus states — 15 `focus-visible:outline` usages across 7 files. Button component has focus-ring built in. Every interactive link/button on the site has a visible focus state.
- [x] 4.5 Motion — dominant easing `[0.22, 1, 0.36, 1]` (used in 8+ places); durations cluster at 0.6/0.7/0.8s; shared `src/lib/animations.ts` provides reusable variants. Consistent enough to feel intentional.

---

## Final Report

All 4 phases complete. Work is landed across the following commits:

| Commit | Scope |
|---|---|
| `a50ba67` | iPhone Safari Arabic font-feature-settings + tashkeel leading |
| `e4a4677` | Phase 1 — `.kicker-pill` / `.kicker` utilities + About h1 normalization |
| `014aa28` | Phase 2 — alignment & rhythm audit (About grid gap fix) |
| `317db80` | Phase 3 — mobile fixes: nav touch targets, footer icons, arrows, eyebrow labels |

### What the visitor will notice

**Arabic on iPhone renders correctly.** Letter-joining is intact, tashkeel (شدّات، فتحات) sit above their base letters. The previous "choppy" look is gone. Fix: `font-feature-settings: kern, liga, calt, mark, mkmk, ccmp` on every RTL text node + `font-synthesis: none` on all `@font-face` blocks.

**Section labels look right in both languages.** One utility class (`.kicker-pill`) now drives the eyebrow-pill pattern on every section. Arabic automatically drops uppercase/tracking (which break ligatures) and bumps size for legibility. Before: ten inline copies of the same string. After: one class, one rule.

**Touch targets meet 44pt minimum.** Hamburger menu (28→44), language switch (py-1→min-h-11), footer social icons (40→44).

**Vertical alignment is deliberate.** Homepage sections breathe at `py-14 md:py-20`. Inner pages and the closing CTA tighten to `py-12 md:py-16`. This two-tier rhythm reads as intentional — brand breathing moments vs information pages — not accidental drift.

**Small story-details.** The right-arrow between Process steps no longer appears on mobile/tablet (where the next step stacks below, not to the side). Contact page's "Prefer a quick chat?" eyebrow uses the new utility. About page's h1 now matches Services/Work at `lg:text-[6rem]` instead of being an outlier at `5.5rem`.

### Design principles the audit applied

- **Consistency** — one utility for repeated patterns; one token-scale for spacing, type, colour
- **Hierarchy** — page h1s normalized, card h3s cluster at 2xl/3xl, eyebrows at kicker-size
- **Alignment** — 1320px container, identical horizontal gutters, header aligns to content within ±2px
- **Rhythm** — two-tier section padding, grid-gap scale (`3/4` tight → `5/6` breathy)
- **Proximity** — inset-label form fields (label + input as one unit); pills + headlines visually grouped
- **Touch/accessibility** — 44pt targets, visible focus rings, `font-feature-settings` for complex scripts

### Outstanding (non-blocking)

- **Mizan fonts → `.woff2`**. `.otf` works now thanks to the feature-settings fix, but `.woff2` is smaller, faster to decode, and historically more bullet-proof on iOS Safari. Needs a font conversion tool run outside this session. File: `public/fonts/mizan-{regular,medium,semibold,bold}.otf`.

### How to verify

1. Open the site on an iPhone (any iOS 13+). Switch to Arabic. Every heading and paragraph should read with proper letter-joining and tashkeel placement.
2. Tap the hamburger menu — the hit area should feel generous.
3. Scroll to the Process section at mobile width. The arrow between cards should NOT be showing (it appeared wrongly before).
4. Reach the footer. The social icons should be tappable without aiming carefully.

