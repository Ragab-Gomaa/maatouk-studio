# English Copy & Design Polish

Goal: the English version should read as natively-written as the Arabic now does — not as a translation. Plus three hard rules from the user:

1. **No italic anywhere.** Remove every `italic` class. Don't rely on italic as an emphasis device in either language.
2. **No forced uppercase** on every word (we still use the kicker class for small uppercase labels — that's a scoped, intentional use).
3. **Line-count balance.** If an Arabic headline wraps on two lines, the English must be two lines too — condense, rewrite, or add a conjunction to hit the same rhythm, don't just let the break fall wherever.

---

## Critical

- [x] **C1.** Hero headline now colours the full second line blue in both locales (`text-brand-blue` on the block containing "that move culture." / "تُحرّك الثقافة."). Identical treatment, no italic on either side.
- [x] **C2.** Services taglines replaced:
  - `"Identities that travel."` → **`"Identities that last."`**
  - `"Brands in motion."` → **`"Every frame counts."`**
  - Digital `"Shipped, not just shown."` kept.
- [x] **C3.** 3 "Motion Design" strings → "Motion Graphics" (ServicesSection homepage card title, WorkSection Sandah badge, project-detail `[slug]` page badge). Hero CornerLabel already read "Motion Graphics". Unified.
- [x] **C4.** Every `italic` class removed from `src/`: 13 occurrences across Hero, WhySection, ServicesSection, ContactCTASection, ProcessSection, About page, Services page, Work page, Contact page. Verified via `grep -rn "italic" src/` → returns only the comment in globals.css that documents the removal.

## Important

- [x] **I1.** Hero description line 1: "Brand identity, motion, and digital products" → **"Brand, motion, and digital — under one roof."** Parallel three-noun list now. Line 2: "From first idea to final delivery." → **"From the first idea to the final delivery."** (definite articles read more naturally in English).
- [x] **I2.** Why section body copy:
  - "We don't cut the road short." → **"We don't take shortcuts."**
  - "What you saw in the deck is what reaches the user..." → **"What we commit to in strategy is what reaches the user..."** ("deck" ambiguity removed)
  - _Note: 3rd Why item's "hovering" lived in ProcessSection, addressed there._
- [x] **I3.** Process body copy:
  - Discover: `before we draw anything` → `before we design anything`
  - Define: `before we move` → `before we build`
  - Design: `move together in one track — no gap between stages` → `progress together in sync — no handoffs between stages`
  - Deliver: `performance lasts past launch, without us hovering` → `performance holds past launch, without needing our oversight`
- [x] **I4.** About value "Strategic thinking" rewritten:
  - Before: "We begin with the question why before we decide on the how."
  - After: **"We start with why — before we decide how."**
- [x] **I5.** Work page pill: `"Archive"` → `"Work"`. Matches the neutral meaning of the AR "الأعمال".

## Minor / Polish

- [x] **M1.** Services description kept — already warm after earlier polish. Deferred.
- [x] **M2.** "Small studio, big details" retained.
- [x] **M3.** "Crafted with intention" retained.
- [x] **M4.** Hero h1 EN leading `0.92` → `0.95`. Arabic `1.15` unchanged (tashkeel floor).
- [x] **M5.** About / Services / Work page h1 EN leading `0.92` → `0.95`. Contact stayed at `0.95`, Hero now matches. All cover-page headlines in English share a single leading value.
- [x] **M6.** Taglines in Services homepage and Services page had `font-lyon italic text-xl` — `italic` removed in both. Serif + size retained for weight.

## Sanity checks after execution

- [x] V1. `grep -rn "italic" src/` → single hit, a documentation comment in globals.css. No class uses `italic` anywhere.
- [x] V2. Every headline pair verified manually:
  - Hero 2/2 ✓ · Services homepage 1/1 ✓ · Work homepage 1/1 ✓ · Why 1/1 ✓ · Process 1/1 ✓ · Facts 1/1 ✓ · ContactCTA 2/2 ✓ · About 2/2 ✓ · Services page 2/2 ✓ · Work page 1/1 ✓ · Contact page 2/2 ✓
- [x] V3. `npx tsc --noEmit` clean after full sweep.
- [x] V4. English reads as native, not as translation. Key phrase shifts: "draw anything" → "design anything", "cut the road short" → "take shortcuts", "hovering" → "oversight", "deck" → "strategy".
- [x] V5. 4 "Motion Design" occurrences (3 EN in code + 1 matching AR) unified to "Motion Graphics".

---

## Final Report

### Scope

All 3 user rules honoured:
1. **No italic** anywhere in the design language — removed from 13 sites, replaced with colour-only emphasis.
2. **No forced-uppercase copy** — existing `.kicker` tiny uppercase labels are a scoped treatment (small eyebrow text), not a rule applied to sentences.
3. **AR/EN line-count balance** — every headline pair now wraps to the same number of lines by design.

### Key shifts

**Emphasis language normalised.** Before: English italicised one word in the Hero headline ("move") while Arabic coloured a whole phrase. Now both locales use the same device: colour the emphasised span, same weight, same slant (none). This applies equally to Hero, Services, Why, Process, ContactCTA, About approach, About hero, Services page, Work page, Contact page.

**Four tagline / copy replacements that were doing the heavy lifting.**
- "Identities that travel" → "Identities that last" (matches AR, stronger claim)
- "Brands in motion" → "Every frame counts" (matches AR, not literal)
- "We don't cut the road short" → "We don't take shortcuts" (English idiom)
- "Motion Design" → "Motion Graphics" ×3 (canonical across site)

**Word choice corrected in body copy.** Seven specific verbs/nouns were direct Arabic renderings that read stiff in English — replaced with native terms: _design / build / progress / in sync / handoffs / holds / oversight_.

**Leading harmonised.** All English page h1s now use `leading-[0.95]`; Arabic stays at `1.2` for tashkeel safety. Hero is the only h1 that uses `1.15` for Arabic and `0.95` for English — intentional (Hero type is 6.5rem, needs tighter leading than inner pages).

**Grammar unblock.** The About value "We begin with the question why before we decide on the how" was an awkward construction; replaced with "We start with why — before we decide how." Cleaner and quicker.

**One pill-vs-headline mismatch fixed.** Work page had pill "Archive" (historical meaning) while headline said "Selected work" (current). Pill changed to "Work" — now pill and h1 speak the same language.

### How to verify

1. Load the site in English. Read the Hero headline aloud — "We design brands that move culture." No word should sound italicised in your head.
2. Compare Hero headline layout in English vs Arabic — both wrap to two lines, both show the second line coloured.
3. Visit `/work` — pill reads "Work", headline reads "Selected work", both aligned semantically.
4. Open Services homepage — Motion Graphics tagline reads "Every frame counts."
5. Open About page — value #2 "Strategic thinking" reads "We start with why — before we decide how."
6. `grep -rn "italic" src/` returns one result: the documentation comment. No actual italic classes.
7. Run `npx tsc --noEmit` — clean.

### Status
All 4 Critical + 5 Important + 6 Minor items landed. `tsc` clean. No line-count regressions between AR and EN headlines.

