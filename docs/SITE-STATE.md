# What the site is, right now
### The single place any brief, agent or session reads to find out what exists

**Last verified 2026-08-18**, after an oversight-supervised review cycle, by `MF.validate()`, `MF.sweep()`, `MF.positionAudit()` and headless-Edge screenshots.

> **This file described the Word Problem Express until 2026-08-18.** It now describes **Mr Factor's Mining Operation**, which is what this repository builds. The Express remains a sister site; nothing here is a copy of it.

---

## Why this file exists, and why nothing else may restate it

> **The agent briefs do not describe the build. They point here.**
> **This is the only document that states what exists. If a fact about the site appears anywhere else — a brief, a spec, a comment — it is a copy, and copies drift.**

**And this file is itself load-bearing, which is its own hazard.** The 2026-08-18 review found this document asserting a protection the build did not have (see *Corrections* below). Every brief opens by reading it as fact, so a false line here produces five clean passes indistinguishable from real ones. **Nobody owns whether this file is true.** Treat that as the standing gap.

---

## The build

| | |
|---|---|
| **File** | **one** — `index.html`, 100% self-contained |
| **Depths** | **7**, all reachable from the first screen, none gated on performance |
| **Play panels** | **7** — one per depth, usable without answering anything |
| **Choice tasks** | **27 groups, 123 options**, every option carrying a written diagnosis |
| **Gated tasks** | **10** (depths 4, 5, 6) — seam call → find the pair → check by multiplying back |
| **Validation** | `MF.validate()` → **615 checks, 0 errors**, control fails as required |
| **Runtime** | Zero dependencies, no build step, no network requests, no storage, runs from `file://` |

## The seven depths

`d0 Surface Cut → d1 Assay Bench → d2 Smelter → d3 Sorting Line → d4 Split Seam → d5 Deep Seam → d6 Assay Office`

- **d0** distributive property, area model, both directions.
- **d1** factor pairs, primality, divisibility tests, and **two shafts one seam** — two different first cuts reaching the same prime seam.
- **d2** the furnace **forwards**: `(mx+p)(nx+q)` melting into a trinomial, nudge step switchable to **halves and tenths**.
- **d3** the recognition gate as a conveyor of ten pieces, with a live tell sheet.
- **d4** `x² + bx + c`, the vein scanner walking every pair.
- **d5** `ax² + bx + c` by the `a·c` split, with an assay lamp that goes out when `c` moves onto a half.
- **d6** the open face: any integer or any expression up to `x²`, parsed, called, factored, drawn and checked.

Every depth is `PLAY FIRST` (no questions) and then a **working face the student opens themselves**.

## Invariants enforced in code, not asserted in prose

- **One factor engine.** `MF.factorQuadratic` is the only thing that factors; nothing that *displays* a factorisation computes one. `MF.expand` multiplies it back; validate round-trips all 605 engine cases.
- **One polynomial formatter.** `quad()` for HTML, `quadText()` for SVG tiles, `sqTerm()` for leading terms. Hand-rolled strings are a defect — two of them once printed `x² + 0x − 9` beneath a heading reading `x² − 9`.
- **The picture shows what is GIVEN — on the working face, which is where it matters.** Stage 2 of every gated task draws the area tile and **both sides as dashed slots holding `?`**, captioned *"the mine will not fill them in for you."* Sides are drawn only at stage 3, after the student produces them. *(This is the line that was false until 2026-08-18 — the `?` existed only in the depth-4 play panel.)*
- **`MF.areaModel` appends; it does not own its host.** Callers that redraw clear their own container.
- **The gate cannot be skipped.** Stage 2 is `display:none` until the seam is called correctly — verified on a freshly built, never-clicked, detached task. The pair field rejects empty and non-integer input with different messages.
- **A Solid Rock piece has an exit** — it asks the student to rule out the whole list rather than produce a pair that cannot exist.
- **No gated task's answer appears anywhere else on its screen.** Play-panel defaults are deliberately *different* numbers from the gated pieces below them, and depth 3's working face uses different instances from the conveyor above it.
- **Right/wrong never rests on colour.** The glyph hangs off `.choice[data-result]::before` on the button itself.
- **Described, never graded.** No score, percentage, timer or level-up, **and no tally of failed attempts** — the Shift Report says *"you worked along the list until both conditions held"*, not *"after testing 4 pairs"*.

## The instruments, and what each is allowed to claim

| | |
|---|---|
| `MF.validate()` | 615 checks, 0 errors. Carries a **control that must fail**. Includes container-integrity and end-to-end render checks. |
| `MF.sweep()` | Opens every working face; counts groups, options, missing diagnoses. **Does not measure option position** and no longer pretends to. |
| `MF.positionAudit()` | **Destructive** — clicks every option. Correct-answer position across 27 groups: `{0:3, 1:10, 2:4, 3:6, 4:4}`. Best single-position strategy scores **37%**; exactly one correct option per group, none missing. |

## Measured, with ambient animations explicitly paused

`document.getAnimations().length` is **27 and never 0** on this page — 26 dust motes plus the lamp, all infinite, which is the ambient life philosophy §1 asks for. They stop only under `prefers-reduced-motion`. So the settle step here is `getAnimations().forEach(a => a.pause())`, and every figure below was taken after it.

- Contrast on `--paper`: ink 14.93, ink-soft 7.94, ore-t 6.45, vein 7.35, twin 7.90, loaded 6.94, solid 6.27. **`--ore` is 3.57 and is never used for text.**
- `.btn.primary` 6.41:1, `.panel-tag` 6.41:1.
- **Zero interactive elements under 44px.**
- 375px wide: `document.body.scrollWidth === 375`, no horizontal page scroll.

## What is NOT true, and must not be assumed

- **No real student has used it.** Every claim about what a demoralised fifteen-year-old finds useful is a model's guess.
- **`student-tester` has never returned a result.** It was dispatched in the 2026-08-18 cycle and did not report. **The lived-experience surface is uncovered**, and no other brief covers it.
- **Appearance is verified for the header, depths 0–1, the depth-0 working face and a gated task rendered in isolation.** Depths 2–6 in situ are verified by rendered DOM and geometry, not by eye — headless Edge will not reliably scroll to a fragment on a page this tall.
- **No git repository, and no remote.** There is no `git checkout` safety net — every write is irreversible.
- **Never deployed**, so nothing has been verified against a published URL (`VERIFICATION.md` §34).

---

## Corrections made after the 2026-08-18 oversight cycle

The cycle returned **NO-GO** on two findings, both of which were real, and both of which every shipped instrument reported clean while they were live.

1. **`MF.areaModel` opened with `host.innerHTML=''` and destroyed authored content at 2 of its 6 call sites.** It deleted the Step 3 *"check it by melting it back"* heading and expansion from **5 of 9** gated tasks, and the **entire SEAM CALLED verdict** — seam name, tell, factorisation, check-back note — from **6 of 10** Assay Office examples. The two examples that survived were precisely the Solid Rock branch, which never calls the model. `12x² − 75`, this build's own flagship fixed defect, had its corrected seam call computed and never shown.
   **Fixed** at the root: the function appends and no longer owns its host. **A third check now exists that fires on it** — reintroducing the wipe produces 4 named errors and restoring clears them.
2. **The answer to the first gated task was printed above it at page load.** Depth 4's scanner opens on `b=7, c=12` and prints *"3 and 4 multiply to 12 and add to 7"* — and the first gated piece was `x² + 7x + 12`, 357px below. Depth 5 had the same collision at 526px. **Fixed** by changing the gated pieces to `x² + 9x + 20` and `3x² + 7x + 2`.
3. **Depth 3's working face asked about the same five expressions the conveyor had already labelled** one panel above. **Fixed** — same five classes, different instances.
4. **This document was false about the `?` on the working face** (finding 4). Rather than soften the claim, the build was changed to match it: stage 2 now draws the ask-model.
5. **`MF.sweep()` declared a `positions` field it never wrote**, returning `{}` while this file cited it as the source of the distribution. Split into `MF.positionAudit()`.
6. **The Shift Report tallied failed attempts** (*"after testing 4 pairs"*) — a score with the numeral left in, in the one place that was counting. Reworded.
7. **Two hand-rolled polynomial strings disagreed with the heading 60px above them.** Routed through `quadText()`/`sqTerm()`.
8. **`aria-controls` was absent on all 7 working-face toggles.** Added.

### Earlier in the same build, found by running rather than reading

- `12x² − 75` was called a Twin Seam — the engine classified the core after the GCF instead of the piece in front of the student.
- **Every depth after 0 rendered empty**: `MF.areaModel` named its height `H`, shadowing the global `H()` builder. Invisible to DOM checks that had all just passed; visible only in a screenshot. The class is fixed too — `MF.boot` isolates each depth, and validate asserts all seven rendered.
- The area-model caption was **clipped at both ends** as centred SVG `<text>`.
- `.panel.work .panel-tag` matched nothing, so every SEAM CALLED tag rendered unstyled.
- `5x + 15` rendered as `0x² + 5x + 15`.

### Findings that were instrument error, and were correctly NOT "fixed"

- A gate appeared to leak; the page held stale state from a sweep that had clicked every option. Settled on a detached, never-clicked control.
- `--lamp` measured 2.04:1 because the checker walked past the header's *gradient* to the body colour. True backdrop `#4A3F34`, true ratio ≈5.1:1.
- A 375px capture appeared to clip text; at a true 375px viewport nothing clips and `scrollWidth === 375`.
- A source read reported depth 5 printing its split at load; the rendered box shows the uncut lump. Source-read over-reached the rendered state.
