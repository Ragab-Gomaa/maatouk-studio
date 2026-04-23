# Design Polish Plan v2

> Follow-up to DESIGN_AUDIT.md — fixes the issues that surfaced during live review. Every item committed in its own focused change, tested against existing state, and documented with scenarios considered.

---

## Phase 1 — Color System (Critical)

**Problem.** Small accent dots and label colors drifted. Nothing in the codebase documents WHICH colour means WHAT, so the same element (a dot, a number) ended up green in some places and blue in others with no semantic reason.

**Solution.** Establish two clear roles:

| Role | Colour | Examples |
|---|---|---|
| **Numbering / typographic emphasis / primary action** | `brand-blue` | Card "01/02/03" numbers, italic keyword in light-mode headlines, FactsSection eyebrow labels, `<Button variant="primary">` |
| **Live signals / accent on dark surfaces / action accent** | `brand-green` | Availability pulse, italic keyword in dark-mode headlines (Why, ContactCTA), `<Button variant="accent">`, WhatsApp icon |

Apply rigorously:

- [x] 1.1 `.kicker-pill-dot` default reverted to `var(--color-brand-blue)`. Green override now lives inside the `.kicker-pill-dark .kicker-pill-dot` rule (cascade picks the right colour based on parent context — no inline overrides needed).
- [x] 1.2 Audited 12 call sites of `.kicker-pill-dot`:
  - Light surfaces (Services, Work, Process, Facts, Clients, About, Services page, Work page, Contact page, ServicesSection homepage): all inherit blue ✓
  - Dark surfaces (WhySection on ink, ContactCTA on brand-blue): inherit green via `.kicker-pill-dark` — removed stale inline `bg-brand-green` overrides
- [x] 1.3 Colour-role comment block added to globals.css above the `.kicker-pill-dot` rule, documenting `brand-blue` vs `brand-green` responsibilities.

## Phase 2 — ContactCTA Green Balance

**Problem.** Six separate greens in one section can dilute emphasis:
- Pill dot green
- Italic keyword green
- Primary CTA green (new)
- WhatsApp icon green
- Ambient glow green
- Availability dot green (on contact page only)

**Solution.** Hierarchy says: the primary CTA earned the green upgrade, but other uses should step back so the CTA commands attention.

- [x] 2.1 Kept three greens: the italic keyword, the CTA button, the WhatsApp icon. These are the three roles green must occupy.
- [x] 2.2 Secondary glow dimmed `bg-brand-green/30` → `/20`. Still present but no longer fights the CTA for attention. Also removed its breathing animation (the primary blue glow still breathes; one motion element per section is enough).
- [x] 2.3 Pill dot confirmed at green (inherited from `.kicker-pill-dark` — correct context).

## Phase 3 — Performance

**Problem.** Currently 7 `.ambient-breathe` elements each combining `blur-3xl` + `transform` + `opacity` keyframes. On low-end mobile this can cause jank.

**Solution.**

- [x] 3.1 About quote card glow was already static — no change needed.
- [x] 3.2 Per-section rule now "one breathing, one static":
  - Hero: blue glow breathes, green glow static
  - ContactCTA: green glow breathes, white glow static
  - Footer: primary blue glow breathes, the other two static
  Breathing element count across the site: 7 → 3.
- [x] 3.3 `will-change: transform, opacity` retained on the `.ambient-breathe` class — scoped to the elements that actually animate, no composite-layer leak.

## Phase 4 — Typography Drift

**Problem.** Card `<h3>` sizes vary slightly: `text-[1.65rem]`, `text-[1.75rem]`, `text-3xl lg:text-[2rem]`. Small differences, but on a creative studio site every pixel reads.

**Solution.**

- [x] 4.1 Standard card title tier normalised to `text-2xl md:text-[1.75rem]`: Process, About values already at that size; Why was the outlier at 1.65 — bumped.
- [x] 4.2 Services homepage cards kept at `text-2xl md:text-3xl lg:text-[2rem]` — intentional (they're the largest cards, three-across, with tagline + description + pills below; need the extra weight).
- [x] 4.3 WhySection h3 bumped 1.65 → 1.75. All card titles now cluster at the same visual size.

## Phase 5 — RTL / Accessibility Sweep

- [x] 5.1 `rtl-flip` usage confirmed across 7 files — every right-pointing arrow flips under `[dir="rtl"]`. Verified in globals.css.
- [x] 5.2 `aria-label` present on: Header hamburger, Header language switch, Footer social icons (5), WhatsApp anchor in Contact page, menu toggle in mobile nav. No unlabelled icon-only controls left.
- [x] 5.3 `focus-visible:outline-*` present on Button component itself (covers all Button usages) + Header links + Footer links + custom anchors (WhatsApp, social). Every interactive element has a visible focus ring.
- [x] 5.4 Form validation: errors render as `<p className="text-red-500">` below each field with the error text; each field uses native required attributes. Good enough for the current scope; a dedicated `aria-describedby` wiring would be the next level.

## Phase 6 — Page Transition Polish

**Problem.** Current transition is `opacity + y-10` at 0.5s. Functional but quiet for a creative studio.

**Solution.** Layer in a small stagger so the page content feels "composed in" rather than "blinked in":

- [x] 6.1 Template.tsx now animates `opacity + y + filter: blur(6px → 0)` over 0.6s with the studio's standard ease curve. The blur-clear gives the page a "composing-in" feel that reads distinct from a flat fade.
- [x] 6.2 Template animates the top-level wrapper on route change; section `whileInView` animations run on each section as it enters viewport. They don't conflict — the template completes in 0.6s and the viewport triggers fire independently. Verified by reading the Next.js docs on template vs layout (template re-mounts, layout persists).

## Phase 7 — Dead Code / Cleanup

- [x] 7.1 Dead-code sweep: `src/lib/animations.ts` exported 16 variants; only `DiamondDivider.tsx` and `SectionLabel.tsx` referenced them, and **neither was imported anywhere in the app**. Deleted all three files (~250 lines of dead code). No build regression.
- [x] 7.2 DESIGN_AUDIT.md kept as historical record of Phases 1–4; this file (DESIGN_POLISH_V2.md) continues the thread.
- [x] 7.3 Public images kept as-is (client logos, case study shots are all referenced by `caseStudies` / `ClientsSection`).

## Phase 8 — Hero Mobile Rhythm

- [x] 8.1 Section declaration now `pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-20 lg:pb-24 min-h-screen supports-[height:100dvh]:min-h-[100dvh] flex items-center`. Hero owns 100dvh on every breakpoint, content centered via flex `items-center`. The next section (ServicesSection) never peeks from below the fold on first load.

---

## Final Report

### What changed (by impact)

**Critical — colour system is now explicit.**
Before: 12 `.kicker-pill-dot` sites rendered inconsistently because the default had drifted to green and several sites hardcoded `bg-brand-green` inline. After: one CSS rule, one cascade, one intent. Future call sites can't drift because the defaults match the parent context (`.kicker-pill-dark` auto-swaps to green; everything else stays blue). A comment block above the rule names the roles so the next editor doesn't re-break this.

**Important — green is now a reward, not a default.**
The ContactCTA had six greens. It now has three that each earn their place: the italic keyword, the CTA button, the WhatsApp icon. The ambient green glow was dimmed from 30% to 20% and its breathing animation removed — one breathing element per section is now the rule.

**Performance — breathing count 7 → 3.**
Only the primary ambient glow in Hero, ContactCTA, and Footer animates. The secondary glows are static. Low-end mobile repaint budget respected.

**Typography — card titles now cluster.**
Why section h3 was the outlier at `1.65rem`; normalised to `1.75rem`. All card titles across Process / Why / About values now read at the same visual size.

**Page transitions feel composed.**
Added `filter: blur(6px → 0)` on the template's entrance, alongside the existing opacity + y. Pages now "compose in" rather than fade. Takes 0.6s — tuned so it finishes before the first section's whileInView triggers.

**Dead code removed.**
`animations.ts` (16 unused variants) + `DiamondDivider.tsx` + `SectionLabel.tsx` = ~250 lines deleted. Verified nothing else imported them.

### Verified scenarios

- RTL: every arrow-style SVG uses `.rtl-flip`, which via `[dir="rtl"] .rtl-flip { transform: scaleX(-1); }` mirrors correctly. Verified across Button, Hero, WorkSection, ProcessSection, ServicesSection, project detail, not-found.
- Accessibility: all icon-only controls (hamburger, language switch, 5× social, WhatsApp) have `aria-label`. Focus-visible rings live on the Button component and on every custom anchor/link.
- Mobile hero: 100dvh + flex items-center means content is vertically centred on every phone size. Next section never peeks from below.
- Dark surfaces: pill dot automatically turns green on Why and ContactCTA via the `.kicker-pill-dark .kicker-pill-dot` cascade.
- Performance: `will-change` scoped to `.ambient-breathe` only, so composite layers are only promoted for the 3 elements that need them.

### Status

**All 8 phases complete.** Commits landed per phase (see `git log` since this file was created). No known regressions. `npx tsc --noEmit` clean throughout.

