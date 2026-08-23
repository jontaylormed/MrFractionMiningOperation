# Mr Factor's Mining Operation

A single-file, zero-dependency site for learning to factor — built on one idea: **a prime and an irreducible polynomial are the same object.** Factoring 72 and factoring `x² − 5x + 6` are not two topics taught years apart. They are the same act, and down here they use the same three tools.

**Ore looks like rock.** `x² − 5x + 6` looks like a lump.

## Run it

Open `index.html`. That is the whole instruction — no build step, no server, no dependencies, no network requests, no storage. Verified: **0 external references, 0 network calls, 0 storage APIs, 136 KB.**

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

**2,037 checks across eleven groups, 0 errors, and two controls that must fail — and do.** It sweeps the factor engine, seam classification, **800 generated lumps across the five layers** (the ore is generated, not authored, so nobody has ever seen most of it), the printer, the pour, the forge, the seam's whole length, the doors on the surface, the no-gate rule, and the no-grades rule.

`MF.playthrough(layer)` drives a whole lump end to end — dig, assay, smelt, pour — and reports what it did.

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
docs/MINE-SPEC.md                what v1 is, and what is deliberately out
docs/MR-FRACTION-PHILOSOPHY.md   what makes it a Mr Fraction site (incl. §2.5a)
docs/SITE-STATE.md               the only document that states what exists
docs/VERIFICATION.md             42 rules, each written after a real failure
.claude/agents/                  five review charters, deliberately disjoint
tools/verify-published.js        run this ON THE LIVE URL — see above
tools/                           serve.ps1, zz-drive.js — scaffolding, never shipped
```

## Status

v1 is **the Ore Cart**: scan the seam, look a lump over, break it, assay, smelt, pour, then spend the metals at the forge. The guided route and the fully open face are v2 and v3 — modes on the same bench rather than rebuilds — and the challenge shafts open one at a time, grouping first.

**No student has used this yet**, and neither has any independent reviewer: the lived-experience and generated-ore review passes have been dispatched repeatedly and killed by session limits every time. Everything here has been checked by the person who wrote it, which `docs/VERIFICATION.md` §16 names as the weakest kind of check there is.
