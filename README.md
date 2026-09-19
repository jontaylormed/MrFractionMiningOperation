# Mr Factor's Mining Operation

[![Built with Claude](https://img.shields.io/badge/built%20with-Claude%20AI-D97757?style=flat-square&logo=anthropic&logoColor=white)](https://claude.com/claude-code)
[![Audio: Epidemic Sound](https://img.shields.io/badge/audio-Epidemic%20Sound-1D1D1D?style=flat-square)](https://www.epidemicsound.com)
[![One file](https://img.shields.io/badge/one%20file-no%20build%20step-2E7D64?style=flat-square)](index.html)
[![Checks](https://img.shields.io/badge/MF.validate()-44%2C000%20checks-4A6FA5?style=flat-square)](docs/VERIFICATION.md)

A single-file, zero-dependency website for learning to factor, built on one idea: **a prime and an irreducible polynomial are the same object.** Factoring 72 and factoring `x² − 5x + 6` are the same act, taught here with the same tools.

The site is a working mine. Expressions are ore, factoring is breaking rock, and distributing is pouring metal into a mold.

## Run it

Open `index.html`. There is no build step, no server, no package to install, and nothing is stored.

**≈2.93 MB, one file, and it runs from `file://`.**

Available in **English, Spanish, Brazilian Portuguese, French, German, Italian, Indonesian, Turkish, Vietnamese, Russian, Simplified Chinese, Japanese, Korean, Hindi, Arabic and Urdu** — under Reading & Access → Language. Every student-facing string lives in one table per language, and a missing string falls back to English rather than to a blank. **Arabic and Urdu read right to left**: the page turns around, and the mathematics stays left to right inside it.

The only files it ever fetches are the sounds in `sfx/`, and every one of those fetches is allowed to fail. Without the folder, cues fall back to synthesised tones and the music stays silent.

## The model

| | |
|---|---|
| **ore** | any expression — a number, a monomial, a binomial, a trinomial |
| **smelting** | **factoring.** Ore separates into what was always inside it |
| **an ingot** | an **irreducible** — a prime, or a polynomial no whole-number factor divides |
| **the mold** | **distributing.** Metals go in, one formed object comes out |
| **the pour** | the check, and the only correctness signal in the build |

An ingot is not a lump that failed to break; it is already pure. `x² + 4` is an element in exactly the way 97 is.

## How a student works

**Assay → smelt → pour.**

- **Assay.** Name the kind of rock you are holding.
- **Smelt.** Say which factors are in it. Nothing at this stage tells you whether you are right.
- **Pour.** The mold forms around what you poured, and the casting comes out clean or visibly deformed, naming the term that disagrees.

Correctness is a physical result, not a mark.

**Digging is separate from smelting.** You can descend as deep as you like and fill your cart without processing anything, so depth is a choice rather than a reward. The shaft has **nine layers**, ordered by what the ore demands: plain numbers → shared factors → two-term ore and primes → `x² + bx + c` → `ax² + bx + c` → four terms in two letters → `x⁴ + bx² + c` → `x² + bxy + cy²` → `x³ ± a cube`. All nine are open from the start.

## Tools, and how they are earned

Tools are forged at the forge by demonstrating the move they later assist with: three primes cast the Lantern, two x-ingots cast the Shifter, a matched pair casts the Drill. Metals are spent when forging, so needing a factor you do not have is what sends you back down the shaft.

**Tools assist; they never gate.** A student who has forged nothing can still reach and work the deepest layer.

## Scoring, not grading

The yard counts what you own, and unlike a mark you can spend it. There are **no percentages, no accuracy rates, no X-out-of-Y, no ranks, and nothing that goes down** — a rule enforced mechanically, with a control that must fail. Order requirements are drawn as slots, filled or empty, never counted.

The distinction is set out in `docs/MR-FRACTION-PHILOSOPHY.md` §2.5a.

## Checking it

```bash
# open index.html, then in the browser console:
MF.validate()
```

**About 44,000 checks across 49 groups, 0 errors, and two controls that must fail — and do.** The sweep covers the factor engine, seam classification, hundreds of generated lumps across all nine layers, the printer, the pour, the forge, every tool's reading and lesson, colour contrast on every rendered surface, the reading-and-access panel, the sound layer, the no-gate rule and the no-grades rule.

Every check carries a control that must fail, and a new check is proved by reintroducing the fault it exists to catch. `docs/VERIFICATION.md` records 109 such rules, each written after a real failure.

Run it at **380×780, 560×760, 994×700 and 1250×900**; a group green at one width has only proved itself at that width. `MF.playthrough(layer)` drives a whole lump end to end and reports what it did.

## Publishing to GitHub Pages

1. Create an empty repository on GitHub, then from this folder:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git && git push -u origin HEAD
```

2. **Settings → Pages → Deploy from a branch**, then pick your branch and `/ (root)`.

3. **Open the published URL, open the browser console, and paste in the whole of `tools/verify-published.js`.**

Step 3 is the only check that examines what a student actually opens. It re-runs the site's own checks on the published copy, confirms nothing is fetched over the network, builds all five screens, and re-asserts the no-grades rule. On a sister project this step was skipped and the site went live broken, because two directories had never been committed — something no local check could have caught.

## Layout

```
index.html                       the entire site
sfx/                             six cues and two beds — Epidemic Sound, see below
sfx/SOURCES.md                   what was cut from where, measured levels, the licence note
docs/MINE-SPEC.md                what v1 is, and what is deliberately out
docs/MR-FRACTION-PHILOSOPHY.md   what makes it a Mr Fraction site (incl. §2.5a)
docs/SITE-STATE.md               the only document that states what exists
docs/VERIFICATION.md             109 rules, each written after a real failure
docs/VOICE.md                    the recording script for Mr Factor
.claude/agents/                  five review charters, deliberately disjoint
tools/verify-published.js        run this on the live URL — see above
tools/text-harvest.js            every student-facing string, before vs after
tools/                           serve.ps1, zz-drive.js — scaffolding, never shipped
```

## Status and limitations

v1 is **the Ore Cart**: scan the seam, inspect a lump, break it, assay, smelt, pour, then spend the metals at the forge. The guided route and the fully open face are planned as modes on the same bench rather than rebuilds.

- **The 15 non-English translations are drafts by Claude that no fluent speaker or teacher has read.** The language picker says so, and corrections are welcome one string at a time.
- **No student has used this, and no independent reviewer has assessed it.** Everything here was checked by the person who wrote it, which `docs/VERIFICATION.md` §16 names as the weakest form of check.

## Credits and attribution

### Music and sound — © Epidemic Sound

**All music and sound effects are the copyright of [Epidemic Sound AB](https://www.epidemicsound.com)** and are used under the author's active subscription. They are not original to this project, they are not in the public domain, and no licence to them passes to anyone who clones this repository.

| | |
|---|---|
| `music.m4a` | the music bed — cut to a 112 s seamless loop |
| `bed.m4a` | the mine's room tone — a 40 s loop |
| `thud` `clang` `stamp` `tick` `pour` | the five cues |

`sfx/SOURCES.md` names the track each one was cut from, where in it, and why.

**If you fork this, the audio does not come with you.** Delete `sfx/` and the site runs as it always has, with synthesised cues and silent beds.

**One caution before publishing:** on GitHub Pages every file in `sfx/` is directly fetchable at a public URL, and a subscription library's terms generally cover *use in content* rather than *redistribution as standalone files*. Worth confirming with Epidemic Sound first.

### Built with Claude AI

This site was designed, written and verified in collaboration with [Claude](https://claude.com/claude-code) (Claude Code, Anthropic). The metaphor, the `MF.validate()` harness, the verification rules and most of the prose were worked out in conversation.

- **Every commit carries a `Co-Authored-By: Claude` trailer**, so `git log` is the complete record.
- `docs/VERIFICATION.md` is the collaboration's clearest output: 109 rules, most written immediately after a failure Claude introduced.

Mathematical content, pedagogy and every decision about what this teaches are the author's.

### Everything else

The code, the mine, the mathematics and Mr Factor himself are original to this project. There are no third-party libraries and no fonts fetched over the network.

**The scenery is drawn in SVG at runtime** — the surface, the seam, the cart, the anvil, the molds, every building and all nine layers of rock are code, not pictures. **Mr Factor is four supplied illustrations**, embedded as WebP data URIs and squeezed from 1,051 KB to about 90 KB. He is the only bitmap in the build, and a check fails if any pose stops being a data URI.
