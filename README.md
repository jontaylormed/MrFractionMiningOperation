# Mr Factor's Mining Operation

A single-file, zero-dependency site for learning to factor — built on one idea: **a prime and an irreducible polynomial are the same object.** Factoring 72 and factoring `x² − 5x + 6` are not two topics taught years apart. They are the same act, and down here they use the same three tools.

**Ore looks like rock.** `x² − 5x + 6` looks like a lump.

## Run it

Open `index.html`. That is the whole instruction — no build step, no server, no dependencies, no network requests, no storage. Verified: **0 external references, 0 network calls, 0 storage APIs, 78 KB.**

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

## Scoring, not grading

The yard counts what you own and only ever grows. Gear appears because you went somewhere, never because you scored. There are **no percentages, no accuracy rates, no X-out-of-Y, no ranks, and nothing that goes down** — enforced mechanically by a check in `MF.validate()`, with a control that must fail.

The line between a score and a grade is drawn in `docs/MR-FRACTION-PHILOSOPHY.md` §2.5a.

## Checking it

```bash
# open index.html, then in the browser console:
MF.validate()
```

**2,007 checks across seven groups, 0 errors, and two controls that must fail — and do.** It sweeps the factor engine, the seam classification, **800 generated lumps across the five layers** (the ore is generated, not authored, so nobody has ever seen most of it), the printer, the pour, and the no-grades rule.

`MF.playthrough(layer)` drives a whole lump end to end — dig, assay, smelt, pour — and reports what it did.

## Publishing to GitHub Pages

1. Create a repository and push this folder.
2. **Settings → Pages → Deploy from a branch**, pick your branch and `/ (root)`.
3. **Open the published URL and check it.** Console should read `[mine] booted: 5 layers`, and `MF.validate()` should report 0 errors *there*, not just here.

Step 3 is not optional. A site that works locally says nothing about the copy anyone else opens — on the sister project that step was skipped and the live site was completely broken while every local check passed.

## Layout

```
index.html                       the entire site
docs/MINE-SPEC.md                what v1 is, and what is deliberately out
docs/MR-FRACTION-PHILOSOPHY.md   what makes it a Mr Fraction site (incl. §2.5a)
docs/SITE-STATE.md               the only document that states what exists
docs/VERIFICATION.md             42 rules, each written after a real failure
.claude/agents/                  five review charters, deliberately disjoint
tools/                           serve.ps1, zz-drive.js — scaffolding, never shipped
```

## Status

v1 is **the Ore Cart**: dig, assay, smelt, pour, keep the metals. The guided route and the fully open face are v2 and v3 — modes on the same bench rather than rebuilds — and the challenge shafts open one at a time, grouping first.

**No student has used this yet.** That is the missing check, and nothing in the process above substitutes for it.
