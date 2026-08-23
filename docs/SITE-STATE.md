# What the site is, right now
### The single place any brief, agent or session reads to find out what exists

**Last verified 2026-08-22** by `MF.validate()` run in a browser against this tree, by clicking through the loop by hand, and by headless-Edge screenshots.

---

## Why this file exists, and the hazard it carries

> **The agent briefs do not describe the build. They point here.**
> **This is the only document that states what exists. If a fact about the site appears anywhere else — a brief, a spec, a comment — it is a copy, and copies drift.**

**And this file is load-bearing, which is its own danger.** The 2026-08-18 cycle caught it asserting a protection the build did not have, and it then sat stale through the whole v1 rebuild. Every brief opens by reading it as fact, so a false line here produces clean passes that are indistinguishable from real ones. **Nobody owns whether this file is true.** That gap is standing and unclosed.

---

## The build

| | |
|---|---|
| **File** | **one** — `index.html`, ~3,600 lines, fully self-contained |
| **Screens** | **five** — surface, two workshops, the mine, the forge |
| **Layers** | **five**, all reachable from the first screen, none gated on anything |
| **Instruments** | **five**, all forged, none granted |
| **Validation** | `MF.validate()` → **5,610 checks / 16 groups / 0 errors**, two controls that must fail, and do |

> **A check is only as wide as the space it sweeps.** The `truthy` group reported 0 errors across 642 checks while **1,970 Decimal Dial states printed a falsehood**, because it tested each lump's original integer coefficients and never nudged `c` — the one thing the dial exists to do. It now sweeps every slider position the control can reach (3,287 checks). Ask of any green result: *what did it not look at?*
| **Runtime** | Zero dependencies, no build step, no network requests, no storage, runs from `file://` |

## The metaphor, and it is load-bearing

**Ore** is any expression. **Smelting separates** — that is factoring. An **ingot** is an irreducible: a prime, or a polynomial no whole-number seam runs through, *and they are the same object.* The **mold combines** — that is distributing. **Pouring** is the check.

An ingot is not a lump that refused to break. It is **already pure**.

## The loop

**ASSAY → SMELT → POUR**, everywhere, at every layer, in the forge as well as at the bench.

- **Assay** is a gate: `display:none` on stage 2 until the seam is called correctly. Verified on a freshly built, never-clicked, detached task.
- **Smelt** is where you say what metals are in there. **Nothing here judges you.**
- **Pour** is the only correctness signal in the entire build. The mold forms around what you poured — you never choose the shape — and the casting is clean or visibly deformed, naming which term disagrees.

## The seam

The face is **2280px of rock**, several screens wide, scanned by dragging, scrolling or the scan buttons, with a position indicator. Fifteen lumps spread down its length, refilling where they were taken. You inspect a lump — what it is, how many veins run through it, what sits in front of the x² — and it says plainly that *what kind of seam runs through it is not visible from here*, which is the assay's job. Then the pick swings, lands, shatters it, and the lump drops into the cart.

**Digging is decoupled from smelting.** You may descend to the deepest layer and hoard raw ore having processed nothing.

## The forge, and the instruments

Metals are **spent** here — this is the yard's sink. Forging *is* distributing, and each tool is forged by demonstrating the move it then assists with: the **Lantern** from three primes, the **Shifter** from two x-ingots, the **Drill** from a matched pair. Plus the **Deep Pick** and the **Decimal Dial**.

**The casting preview is the Lantern's power, not a default.** Before you forge one, the mold is dark and you learn from the casting.

> **Tools assist; they never gate.** The `nogate` check walks every layer with an empty yard and no tools and asserts ore still comes up.

## Invariants enforced in code, not asserted in prose

- **One engine.** `MF.smeltPoly` is the only thing that factors; `ingotProduct` the only thing that multiplies. `MF.validate` round-trips 1182 engine cases.
- **One formatter.** `quad()` for HTML, `quadText()` for SVG, `sqTerm()` for leading terms. Hand-rolled strings are a defect — two once printed `x² + 0x − 9` under a heading reading `x² − 9`.
- **`MF.areaModel` appends; it does not own its host.** It once opened with `innerHTML=''` and deleted authored content at two of six call sites.
- **The picture shows what is GIVEN.** Where a question is being asked, sides are dashed slots holding `?`.
- **Described, never graded** — and now **spendable**. No percentages, no accuracy, no X-out-of-Y, no ranks, nothing with a ceiling, nothing that goes down. Requirements are drawn as slots, never counted.

## Measured, with ambient animations explicitly paused

`document.getAnimations().length` is **never 0** on this page — the dust and lamp are infinite, which is the ambient life §1 asks for. The settle step is `getAnimations().forEach(a => a.pause())`, and every figure below was taken after it.

- Contrast across all five layers and all five screens: **205 elements measured against real gradient backdrops, 0 failures.**
- **Zero interactive elements under 44px.**
- No horizontal page scroll; verified down to a 279px viewport.

## What is NOT true, and must not be assumed

- **No real student has used it.** Every claim about what a demoralised fifteen-year-old finds useful is a model's guess.
- **`student-tester` has never once returned a result.** Dispatched twice; killed by session limits both times. **The lived-experience surface has never been covered by anything but the author.**
- **`math-content` has never run against the generated ore.** The ore is generated rather than authored, so most lumps a student will meet have been checked only by `MF.validate`'s own sweep — which the author also wrote (§16).
- **Never deployed.** No `gh` CLI, no remote, no published URL. Nothing has been checked against the copy a student would open, which `VERIFICATION.md` §34 says is the only check that matters.
- **The scene overhaul is unfinished.** The surface and the mine are rendered places; the bench, the workshops, the yard and the forge are still panels.

---

## Defects found by running it, this build

**The forge phase.** The reward moment was invisible — a successful pour set the tool, and the `&& !hasTool` guard then stopped painting the mold that held the casting. The Shifter's rail was built at paint time and showed the slot values from *before* the student typed. The layer-1 depth line measured 3.82:1 — it passed on the four dark layers and failed on the lightest rock.

**The seam phase.** The single-column grid used `1fr`, whose automatic minimum grows to fit its widest child, so the 2280px seam stretched the whole page sideways instead of scrolling. Caught only because the preview pane had collapsed to 279px — the measurement hazard `VERIFICATION` §2 warns about, exposing a real bug.

**The visual pass.** The ore cart escaped into the sky and the headframe wheel drifted off its tower: a CSS `transform` animation *replaces* the SVG `transform` attribute rather than composing with it. Visible only in a screenshot.

**From the 2026-08-18 oversight cycle**, all fixed: the live casting preview was blank on every entry to the crucible (looked up by `id` while the bench was detached); typing a letter left the literal string `NaN` in the student's box; every irreducible polynomial collapsed into one yard chip; two of three gear announcements were written into a panel the next repaint destroyed; and the decimal dial printed the finished factorisation directly above the pour button.

## Findings that were instrument error, and were correctly NOT "fixed"

- A gate appeared to leak; the page held stale state from a sweep that had clicked every option.
- Eight contrast failures on gradient backgrounds — the checker walked past the gradient to the body colour. Resolving the real stops gave zero failures.
- A 375px capture appeared to clip text; at a true 375px viewport nothing clipped.
- A source read reported depth 5 printing its split at load; the rendered box showed the uncut lump.
