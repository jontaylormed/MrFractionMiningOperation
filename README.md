# Mr Factor's Mining Operation

[![Built with Claude](https://img.shields.io/badge/built%20with-Claude%20AI-D97757?style=flat-square&logo=anthropic&logoColor=white)](https://claude.com/claude-code)
[![One file](https://img.shields.io/badge/one%20file-no%20build%20step-2E7D64?style=flat-square)](index.html)
[![Checks](https://img.shields.io/badge/MF.validate()-46%2C525%20checks-4A6FA5?style=flat-square)](docs/VERIFICATION.md)
[![Licence](https://img.shields.io/badge/code-Apache--2.0-4E8098?style=flat-square)](LICENSE)
[![Content](https://img.shields.io/badge/content-CC%20BY--SA%204.0-7A6FA5?style=flat-square)](LICENSE-CONTENT)

A single-file, zero-dependency website for learning to factor, built on one idea: **a prime and an irreducible polynomial are the same object.** Factoring 72 and factoring `x² − 5x + 6` are the same act, taught here with the same tools.

The site is a working mine. Expressions are ore, factoring is breaking rock, and distributing is pouring metal into a mold.

## Run it

Open `index.html`. There is no build step, no server, no package to install, and nothing is stored.

**≈3.17 MB, one file, and it runs from `file://`.**

Available in **English, Spanish, Brazilian Portuguese, French, German, Italian, Indonesian, Turkish, Vietnamese, Russian, Simplified Chinese, Japanese, Korean, Hindi, Arabic and Urdu** — under Reading & Access → Language. Every student-facing string lives in one table per language, and a missing string falls back to English rather than to a blank. **Arabic and Urdu read right to left**: the page turns around, and the mathematics stays left to right inside it.

**It fetches nothing at all.** One file is the whole site: no libraries, no fonts over the network, no audio, no analytics, no requests of any kind. Saved to a disk and opened from `file://` it behaves exactly as it does when published.

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

## Learning targets, and the Teacher Guide

The site carries its own guide for teachers: open **`index.html#teachers`**, or press **For Teachers** under Reading & Access. It is the one page written for the teacher rather than the student, and it holds:

- **16 learning targets**, each written as an "I can…" statement with its level in Bloom's Taxonomy (2001 revision) and a button straight to the room that teaches it — from *a prime and an irreducible polynomial are the same kind of object* through to *why an expression has no whole-number factors even when a decimal pair exists*. The matching Common Core standards are 4.OA.B.4, 6.NS.B.4, A-APR.A.1 and A-SSE.A.2.
- **The pedagogy**, as eight decisions: the metaphor is the verb, correctness is physical, tools assist but never gate, the site scores but never grades, and so on.
- **How to use it with a class:** before, during and after a session, four classroom moves, four things to avoid, and how to assess away from a site that records nothing.
- **A suggested five-session sequence**, each session with its targets, a question to ask and what to listen for.
- **What the site does not cover**, stated plainly: factoring to find zeros (A-SSE.B.3a), completing the square, and fractional coefficients.

It is written in all 16 languages, and **the targets are stated, never tracked** — a tally of targets met is the kind of count the no-grades rule forbids.

## Checking it

```bash
# open index.html, then in the browser console:
MF.validate()
```

**About 46,525 checks across 50 groups, 0 errors, and two controls that must fail — and do.** The sweep covers the factor engine, seam classification, hundreds of generated lumps across all nine layers, the printer, the pour, the forge, every tool's reading and lesson, colour contrast on every rendered surface, the reading-and-access panel, the no-gate rule, the no-grades rule, and the 432 assertions that the site can make no sound and that read-aloud still works.

Every check carries a control that must fail, and a new check is proved by reintroducing the fault it exists to catch. `docs/VERIFICATION.md` records 114 such rules, each written after a real failure.

Run it at **380×780, 560×760, 994×700 and 1250×900**; a group green at one width has only proved itself at that width. `MF.playthrough(layer)` drives a whole lump end to end and reports what it did.

## Published

**The site is live at [jontaylormed.github.io/MrFractionMiningOperation](https://jontaylormed.github.io/MrFractionMiningOperation/).**

It deploys through **`.github/workflows/pages.yml`**: every push to `main` uploads the repository as it stands and publishes it, with **Settings → Pages → Source set to GitHub Actions**. A `.nojekyll` file at the root stops any preprocessing, so nothing is rewritten and no folder is skipped for being named with a dot.

*The branch source — "Deploy from a branch" — was tried first and never triggered a build at all: fifteen minutes, zero runs in Actions, 404 throughout. If you fork this, start with the workflow.*

**After every deploy, run the published-copy check.** Open the live URL, open the browser console, and paste in the whole of `tools/verify-published.js`.

It is the only check that examines what a student actually opens: it re-runs the site's own checks on the published copy, confirms nothing is fetched over the network, builds **every** screen in the registry, and re-asserts the no-grades rule against the student screens while sparing the teacher page. On a sister project this step was skipped and the site went live broken, because two directories had never been committed — something no local check could have caught.

Last run on the live URL: **12 of 12 pass**, `MF.validate()` 0 errors across 46,505 checks, both controls failing as required, 9 of 9 screens built. *That run predates the removal of the audio; the next deploy needs a fresh one.*

## Layout

```
index.html                       the entire site
.github/workflows/pages.yml      publishes every push to main
.nojekyll                        no preprocessing on the way out
LICENSE                          Apache-2.0 — the code
LICENSE-CONTENT                  CC BY-SA 4.0 — the writing and the art
NOTICE                           who owns what, and what the licences do not cover
docs/MINE-SPEC.md                what v1 is, and what is deliberately out
docs/MR-FRACTION-PHILOSOPHY.md   what makes it a Mr Fraction site (incl. §2.5a)
docs/SITE-STATE.md               the only document that states what exists
docs/VERIFICATION.md             114 rules, each written after a real failure
.claude/agents/                  five review charters, deliberately disjoint
tools/verify-published.js        run this on the live URL — see above
tools/text-harvest.js            every student-facing string, before vs after
tools/                           serve.ps1, zz-drive.js — scaffolding, never shipped
```

## Status and limitations

v1 is **the Ore Cart**: scan the seam, inspect a lump, break it, assay, smelt, pour, then spend the metals at the forge. The guided route and the fully open face are planned as modes on the same bench rather than rebuilds.

- **The 15 non-English translations are drafts by Claude that no fluent speaker or teacher has read.** The language picker says so, and corrections are welcome one string at a time.
- **No student has used this, and no independent reviewer has assessed it.** Everything here was checked by the person who wrote it, which `docs/VERIFICATION.md` §16 names as the weakest form of check.

## Licence

**Two licences, one repository**, because a single file here is both a program and a piece of writing:

| | |
|---|---|
| **The code** — the script, markup and stylesheet inside `index.html`, and everything in `tools/` | [Apache License 2.0](LICENSE) |
| **The content** — the student-facing text and all sixteen translations, the runtime SVG scenery, the four Mr Factor illustrations and the documents in `docs/` | [CC BY-SA 4.0](LICENSE-CONTENT) |

Attribute as: **"Mr Factor's Mining Operation" by Jon Taylor, CC BY-SA 4.0.**

Share-alike is deliberate: the fifteen non-English tables are unreviewed drafts, and a teacher who corrects one should be handing that correction back to the next teacher, not into a closed fork.

**One thing is not licensed:** the names. **Mr Fraction** is a brand and **Mr Factor** is a character, so neither licence gives anyone the right to call a derivative work by either name. `NOTICE` states this in full.

## The site has no sound

**There is no music, no sound effects and no soundtrack, and there is no audio file in this repository.** This is deliberate and it is checked: 316 of the assertions in `MF.validate()` exist to prove the site cannot make a sound — that no call builds an `AudioContext`, that nothing reports having played, that no audio path or media element survives anywhere in the document, and that none of the sixteen languages still carries a sound-control string.

Earlier versions shipped nine cues and two beds cut from a subscription library. The library was asked, in writing, whether its licence covered catalogue audio used as interaction cues inside a free educational web application that publishes its own source under CC BY-SA — a licence that invites anyone to copy, adapt and rehost everything in it. The answer was no. The files were removed from the working tree and purged from the repository's history.

Sound will return when there is audio the project has the right to publish **under terms that survive its own share-alike licence**. That is the condition the last set failed, and it is a stricter test than "we paid for it": a licence that permits use but forbids redistribution cannot sit inside a work that grants redistribution to everyone.

**Read-aloud is not affected, and it keeps its volume.** It uses the browser's own speech synthesiser, plays no file and needs nobody's permission. Under **Reading & Access → READ ALOUD** it has Read this page, Stop, a speed from 0.6× to 1.6×, and a **voice volume** from off to 100% — all of it in all sixteen languages. It is the one thing on the site that makes a noise, and the checks require it to stay.

> The volume nearly went out with the audio. Read-aloud had never needed a volume control of its own because the engine's sliders were always sitting next to it, so removing the engine removed the accommodation — while the checks, which asked only whether read-aloud *existed*, kept reporting it fine. `docs/VERIFICATION.md` §114 is the rule that came out of it.

## Credits and attribution

### Built with Claude AI

This site was designed, written and verified in collaboration with [Claude](https://claude.com/claude-code) (Claude Code, Anthropic). The metaphor, the `MF.validate()` harness, the verification rules and most of the prose were worked out in conversation.

- **Every commit carries a `Co-Authored-By: Claude` trailer**, so `git log` is the complete record.
- `docs/VERIFICATION.md` is the collaboration's clearest output: 114 rules, most written immediately after a failure Claude introduced.

Mathematical content, pedagogy and every decision about what this teaches are the author's.

### Everything else

The code, the mine, the mathematics and Mr Factor himself are original to this project. There are no third-party libraries and no fonts fetched over the network.

**The scenery is drawn in SVG at runtime** — the surface, the seam, the cart, the anvil, the molds, every building and all nine layers of rock are code, not pictures. **Mr Factor is four supplied illustrations**, embedded as WebP data URIs and squeezed from 1,051 KB to about 90 KB. He is the only bitmap in the build, and a check fails if any pose stops being a data URI.
