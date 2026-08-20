# Mr Factor's Mining Operation

A single-file, zero-dependency site for learning to factor binomials and trinomials — by treating factoring and prime factorisation as **the same act at two depths**.

**Ore looks like rock. `x² − 5x + 6` looks like a lump.** A vein *is* a factor: it was in the rock before the miner arrived. Mining here is not guessing where to dig — it is pulling out structure that was already there.

## Run it

Open `index.html`. That is the whole instruction. No build step, no server, no dependencies, no network requests, no storage.

## Publish it on GitHub Pages

1. Push this folder to a repository.
2. **Settings → Pages → Build and deployment → Deploy from a branch**, select your branch and `/ (root)`.
3. Open the published URL and confirm the page loads, the shaft lists seven depths, and the console reports `[mine] booted: 7 depths`.

Step 3 is not optional. A site that works locally says nothing about the copy anyone else is looking at — on the sister project this exact step was skipped and the site went live completely broken while every local check passed.

## The seven depths

| | | |
|---|---|---|
| **0** | The Surface Cut | the distributive property, in both directions |
| **1** | The Assay Bench | factor pairs, primes, and two shafts reaching one seam |
| **2** | The Smelter | `(x + p)(x + q)` melting into a trinomial — the furnace **forwards** |
| **3** | The Sorting Line | naming which of five seams you are holding |
| **4** | The Split Seam | `x² + bx + c` — the pair that multiplies *and* adds |
| **5** | The Deep Seam | `ax² + bx + c` by the `a·c` split |
| **6** | The Assay Office | bring anything: any integer, or any expression up to `x²` |

Every depth opens with a **play panel** — sliders, scanners and animations with nothing to answer — and then a working face **the student opens themselves**. No depth is locked, and none unlocks by performance.

## What it does differently

- **Nothing is scored.** No percentages, no timers, no level-ups. Each depth keeps a "shift report" describing what you did, including changing your mind.
- **The picture shows what you were given.** At the working face the area tiles are drawn and the *sides are left as `?`* — because the sides are the question.
- **You commit before you compute.** Naming the seam type is a gate; the factoring UI does not exist until you have called it.
- **It breaks a surface cue on purpose.** *"It has a minus sign, so it's a difference of squares"* fails on `x² − 5x + 6`, and *"it has a plus sign, so it factors"* fails on `x² + 4`.
- **Integers versus decimals is taught, not assumed.** Push the smelter onto halves and tenths: multiplying never fails, but the seam stops landing on whole numbers. "Cannot be factored" nearly always means *not on these lines* — and `x² − 2` (a real seam, irrational) versus `x² + 4` (no seam at all) is the difference.

## Checking it

Two instruments, both in the page, both reporting their denominator:

```bash
# open index.html, then in the browser console:
MF.validate()   # 612 checks, 0 errors, and a control that MUST fail
MF.sweep()      # opens every working face and inspects the rendered screens
```

`MF.validate()` carries a deliberately false assertion that has to come back false. A check that only ever passes is worthless.

## Layout

```
index.html              the entire site
README.md               this file
docs/SITE-STATE.md      the only document that states what exists
docs/VERIFICATION.md    42 rules, each written after a real failure
docs/MR-FRACTION-PHILOSOPHY.md   what makes something a Mr Fraction site
.claude/agents/         five review agents with deliberately disjoint ownership
tools/                  serve.ps1, zz-drive.js (test scaffolding, never shipped)
```

## Credits

Type stack is Black Han Sans and Atkinson Hyperlegible where installed, with system fallbacks — no font is fetched over the network. Mr Factor is drawn in inline SVG.

**No student has used this yet.** That is the missing check, and nothing in the process above substitutes for it.
