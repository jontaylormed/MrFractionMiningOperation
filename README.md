# Mr Factor's Mining Operation

[![Built with Claude](https://img.shields.io/badge/built%20with-Claude%20AI-D97757?style=flat-square&logo=anthropic&logoColor=white)](https://claude.com/claude-code)
[![Audio: Epidemic Sound](https://img.shields.io/badge/audio-Epidemic%20Sound-1D1D1D?style=flat-square)](https://www.epidemicsound.com)
[![One file](https://img.shields.io/badge/one%20file-no%20build%20step-2E7D64?style=flat-square)](index.html)
[![Checks](https://img.shields.io/badge/MF.validate()-13%2C239%20checks-4A6FA5?style=flat-square)](docs/VERIFICATION.md)

> **Built with [Claude AI](https://claude.com/claude-code)** (Anthropic) in collaboration with the
> author. Every commit in this repository is co-authored by Claude, and the trailer is on each
> one — `git log` is the full record of the collaboration.
>
> **Music and sound effects © [Epidemic Sound](https://www.epidemicsound.com)**, used under the
> author's active subscription. See [Credits and attribution](#credits-and-attribution).

A single-file, zero-dependency site for learning to factor — built on one idea: **a prime and an irreducible polynomial are the same object.** Factoring 72 and factoring `x² − 5x + 6` are not two topics taught years apart. They are the same act, and down here they use the same three tools.

**Ore looks like rock.** `x² − 5x + 6` looks like a lump.

## Run it

Open `index.html`. That is the whole instruction — no build step, no server, no dependencies, no storage. **≈1.03 MB, one file, and it runs from `file://`.**

The only thing it ever fetches is **sound**, out of `sfx/` beside it — and every one of those fetches is allowed to fail. Without the folder the cues fall back to synthesised oscillators, the music bed stays silent, and the site behaves exactly as it did before there was any audio at all. **Adding sound files can never take sound away, and removing them can never break the page.**

## The metaphor, and it is load-bearing

| | |
|---|---|
| **ore** | any expression — a number, a monomial, a binomial, a trinomial |
| **smelting** | **factoring.** Ore goes in and separates into what was always in it |
| **an ingot** | an **irreducible** — a prime, or a polynomial no whole-number seam runs through. *The same thing.* |
| **the mold** | **distributing.** Metals go in, one formed object comes out |
| **the pour** | the check — and the only correctness signal in the build |

An ingot is not a failure. It is not a lump that refused to break. **It is already pure** — the most refined thing in the mine. That reframing is the whole point: `x² + 4` is an element, exactly as 97 is.

## The loop

**ASSAY** → **SMELT** → **POUR**. Three verbs, everywhere, at every layer.

- **Assay** is a gate. Name what kind of rock you are holding; nothing else on the bench opens until you have called it. A call you made is the only thing you can later catch yourself out on.
- **Smelt** is where you say what metals are in there. **Nothing here tells you whether you are right.**
- **Pour** is where you find out. The mold forms around whatever you poured — you never choose the shape, because distribution's result is determined — and the casting comes out **clean, or visibly deformed**, naming which term disagrees.

Correctness lives in the physics of the world, not in a mark.

## Digging is decoupled from smelting

You can descend as deep as you like and fill your cart **without processing anything**. Depth is where you chose to go, never what you earned. There is no performance gate anywhere in the shaft.

Five layers, by ore richness: plain numbers → shared metal → two-term ore and pure ingots → `x² + bx + c` → `ax² + bx + c`. Four further shafts are cut but not yet timbered, and are named on screen so you know the mine keeps going.

## The forge, and tools that are instruments

The yard has a **sink**: metals are spent at the forge, so needing a factor you have not got is what sends you back down the shaft.

**Forging is distributing, and every tool is forged by demonstrating the move it then assists with.** Three primes cast the **Lantern**, which lights the mold — a live area model of what you are holding. Two x-ingots cast the **Shifter**, the exponent rail, and you watch `x·x` become `x²` while making it. A matched pair casts the **Drill** — you forge it *by making a twin seam on purpose*.

The casting preview is not free: it is the Lantern's power. Before you forge one, you pour and the casting teaches you.

> **Tools assist; they never gate.** A student who has forged nothing can still reach and work the deepest layer.

## Scoring, not grading

The yard counts what you own, and unlike a mark you can **spend** it. There are **no percentages, no accuracy rates, no X-out-of-Y, no ranks, and nothing that goes down** — enforced mechanically, with a control that must fail. Order requirements are drawn as **slots, filled or empty**, never counted.

The line between a score and a grade is drawn in `docs/MR-FRACTION-PHILOSOPHY.md` §2.5a.

## Checking it

```bash
# open index.html, then in the browser console:
MF.validate()
```

**13,239 checks across 43 groups, 0 errors, and two controls that must fail — and do.** It sweeps the factor engine, seam classification, **hundreds of generated lumps across the five layers** (the ore is generated, not authored, so nobody has ever seen most of it), the printer, the pour, the forge, the Casting Shed's three workshops, every tool's reading and lesson, colour contrast on every rendered surface, the reading-and-access panel, the sound layer, the seam's whole length, the doors on the surface, the no-gate rule, and the no-grades rule.

**Every check carries a control that must fail**, and a new one is proved by reintroducing the fault it exists to catch — not by watching it pass. `docs/VERIFICATION.md` is 98 rules, each written after a real failure.

Run it at **380×780, 560×760, 994×700 and 1250×900**; a group green at one width has only ever proved itself at that width.

`MF.playthrough(layer)` drives a whole lump end to end — dig, assay, break, pour — and reports what it did.

## Publishing to GitHub Pages

Everything is committed and self-contained; publishing is three steps.

1. Create an empty repository on GitHub, then from this folder:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git && git push -u origin HEAD
```

2. **Settings → Pages → Deploy from a branch**, pick your branch and `/ (root)`.

3. **Open the published URL, open the browser console, and paste in the whole of `tools/verify-published.js`.**

Step 3 is not optional, and it is the only check that examines what a student actually opens. It re-runs the site's own 2,000+ checks *on the published copy*, confirms nothing is fetched over the network, builds all five screens, and re-asserts the no-grades rule — reporting a denominator for each and carrying two controls that must fail.

On the sister project this step was skipped: 67 asset paths had been verified twice, both passes sound, and the site still went live completely broken because two directories had never been committed. Nothing pointed at a local machine could have caught it.

## Layout

```
index.html                       the entire site
sfx/                             six cues and two beds — Epidemic Sound, see below
sfx/SOURCES.md                   what was cut from where, measured levels, the licence note
docs/MINE-SPEC.md                what v1 is, and what is deliberately out
docs/MR-FRACTION-PHILOSOPHY.md   what makes it a Mr Fraction site (incl. §2.5a)
docs/SITE-STATE.md               the only document that states what exists
docs/VERIFICATION.md             98 rules, each written after a real failure
docs/VOICE.md                    the recording script for Mr Factor — generated, not typed
.claude/agents/                  five review charters, deliberately disjoint
tools/verify-published.js        run this ON THE LIVE URL — see above
tools/                           serve.ps1, zz-drive.js — scaffolding, never shipped
```

## Credits and attribution

### Music and sound — © Epidemic Sound

**All music and all sound effects on this site are the copyright of
[Epidemic Sound AB](https://www.epidemicsound.com)** and are used under the site author's
**active Epidemic Sound subscription**. They are not original to this project, they are not
in the public domain, and no licence to them passes to anyone who clones this repository.

Everything in `sfx/` is Epidemic Sound material:

| | |
|---|---|
| `music.m4a` | the music bed — cut to a 112 s seamless loop |
| `bed.m4a` | the mine's room tone — a 40 s loop |
| `thud` `clang` `stamp` `tick` `pour` | the five cues |

`sfx/SOURCES.md` names the specific track each one was cut from, where in it, and why.

> **If you fork this, the audio does not come with you.** Delete `sfx/` and the site runs
> exactly as it always has — every cue falls back to a synthesised one and the beds go quiet.
> That fallback is not a convenience; it is the reason the licence can be honoured by simply
> removing a folder.

**One caution for the author, repeated from `sfx/SOURCES.md`:** on GitHub Pages every file in
`sfx/` is directly fetchable at a public URL, and a subscription library's terms generally
cover *use in content* rather than *redistribution as standalone files*. A subscription
covers the use; it may not cover the hosting. Worth confirming with Epidemic Sound before the
site is published, rather than after.

### Built with Claude AI

This site was **designed, written and verified in collaboration with
[Claude](https://claude.com/claude-code)** (Claude Code, Anthropic). That is not a footnote
about a tool that autocompleted a few lines — the metaphor, the `MF.validate()` harness, the
98 verification rules and most of the prose were worked out in conversation and are
attributed as such:

- **Every commit carries a `Co-Authored-By: Claude` trailer.** `git log` is the complete,
  unedited record — including the commits that record what was broken and why.
- `docs/VERIFICATION.md` is the collaboration's actual output: 98 rules, each one written
  immediately after a real failure, most of them failures Claude introduced.

Mathematical content, pedagogy and every decision about what this teaches are the author's.

### The rest

Everything else — the code, the mine, the mathematics, Mr Factor himself, and all the artwork
(which is **drawn in SVG at runtime, not shipped as images**) — is original to this project.
There are no third-party libraries, no fonts fetched over the network, and no images.

## Status

v1 is **the Ore Cart**: scan the seam, look a lump over, break it, assay, smelt, pour, then spend the metals at the forge. The guided route and the fully open face are v2 and v3 — modes on the same bench rather than rebuilds — and the challenge shafts open one at a time, grouping first.

**No student has used this yet**, and neither has any independent reviewer: the lived-experience and generated-ore review passes have been dispatched repeatedly and killed by session limits every time. Everything here has been checked by the person who wrote it, which `docs/VERIFICATION.md` §16 names as the weakest kind of check there is.
