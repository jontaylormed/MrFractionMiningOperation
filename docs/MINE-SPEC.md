# The Mine — specification
### Round 3 of the `ideate` process. **Status: awaiting sign-off. Nothing here is built.**

**Written 2026-08-19** after three rounds of idea development. The existing `index.html` is a **prototype to harvest, not a foundation** — see §9.

---

## 1. What must be true when this is done

A student who freezes at `x² − 5x + 6` can look at a lump and say what is inside it before they swing — and can see that factoring 72 and factoring that trinomial are **the same act**, because a prime and an irreducible polynomial are the same thing: an element that smelting cannot separate further.

**Audience:** drop-in, voluntary, no assignment, no teacher account, no due date. The design question that follows from that and governs everything: *why does this student open it again on a Tuesday with nothing due?*

## 2. The metaphor, corrected

The first build had this backwards. Metallurgy, correctly:

| | |
|---|---|
| **Ore** | any expression — a number, monomial, binomial, trinomial, or challenge form |
| **Smelting** | **factoring.** Ore goes in, separates into its constituents |
| **Pure metal / ingot** | an **irreducible** — a prime, or an irreducible polynomial. *The same object.* Smelting cannot separate it further |
| **Mold** | **distribution.** Pour metals in and one formed object comes out |
| **The forge** | where you pour, and therefore where you find out whether you were right |
| **The yard** | the metals you have extracted and own |

**Why this matters more than a rename.** In the prototype an irreducible was *"Solid Rock"* — a failure, a lump that would not break. Here it is **already pure**: the most refined thing in the mine, not the most stubborn. `x² + 4` is an ingot. That is the number↔polynomial unification made physical instead of asserted, and it is the strongest idea the site has.

## 3. The bench — three verbs, unchanged everywhere

1. **ASSAY** — what kind of ore is this? *(recognition, before any calculation)*
2. **SMELT** — separate it into pure metals *(factor)*
3. **POUR** — cast it back *(distribute — and therefore verify)*

Every route, every layer, every challenge shaft uses these three and only these three. **If a feature needs a fourth verb, it is out of scope until the spec is revised.**

## 4. Digging and smelting are decoupled

**A student may descend as deep as they like and collect richer ore without smelting anything.** Digging is free, unconditional, and never gated on having processed what you already hold. You may hoard raw ore indefinitely.

This is the levelling, and it contains no performance gate at all. Depth is *where you chose to go*, never *what you earned*.

**The layers are ore richness:**

| layer | ore |
|---|---|
| 1 | numbers — 72, 91 |
| 2 | monomials and shared metal — `6x + 15`, `3x² + 12x` |
| 3 | binomials — twin seams `x² − 9`, and pure ingots `x² + 4` |
| 4 | plain trinomials — `x² − 5x + 6` |
| 5 | loaded trinomials — `6x² + 7x − 3` |
| 6+ | the challenge shafts (§7) |

## 5. The three doors, and the vibe rule

Same mine, same wall, same tools. What changes is who picks the ore and how much is said.

- **Ore Cart (less guided)** — you choose from a cart at your depth; the forge asks for objects you can only build from metals you actually own.
- **Guided** — the mine picks the lump and Mr Factor walks beside you, narrating the three verbs.
- **Open face** — prompts off, all tools live, bring your own rock.

> **THE VIBE RULE, and it is a hard requirement.** The guided route must **not feel like a different product**. It is not a tutorial UI with step panels wrapped around a separate world. It is *the same mine, the same wall, the same bench* — with a lamp that talks. A student switching doors should feel they changed how much company they have, not which website they are on.

**The open face always has one seed:** a single lump glinting in the wall — something that looks like a twin seam and is not. No instruction, just an invitation. It exists solely so the open door is never a blank page.

## 6. Scoring, grading, and knowing you were right

Governed by **`MR-FRACTION-PHILOSOPHY.md` §2.5a**, amended by user decision 2026-08-19. In short:

**Permitted:** ore mined, metals owned, a yard that fills, gear that appears, shafts that open. **Forbidden:** percentages, accuracy rates, X-out-of-Y, letter grades, ranks, leaderboards, anything with a ceiling, anything that goes down.

**Correctness lives in the physics, not in a mark.** You pour your metals into the mold and **the casting comes out clean or visibly deformed** — and you can see *where* it deformed. Immediate, private, about this lump rather than about you. That is the whole feedback mechanism; there is no second one.

**The mold is not chosen — it forms around what you pour.** The shape is determined by the metals, because distribution's result is determined. Letting a student pick the mold would make the metaphor lie about the mathematics.

**Gear is a tool, and it appears because you went somewhere.** The decimal dial appears once you have smelted on decimals. Nothing gear does is comparable between two students.

## 7. Challenge shafts

**Grouping ships first** — `ax + ay + bx + by` is the purest separation move in the mine, and it makes the loaded-trinomial method feel inevitable rather than arbitrary.

The other three appear on the map as **unopened shafts**, so they read as *coming* rather than *missing*: higher-degree with a common metal (`x⁴ − 5x² + 4`), two variables (`x² + 5xy + 6y²`), sum and difference of cubes.

**One shaft opens per release.** Four families shipped together is four separate recognitions with four separate methods, all under-taught.

## 8. Scope

### In, for v1

- Load screen; homepage; **two pre-teaching workshops** — the distributive property, and numbers as ore with primes as pure metal.
- The bench: assay → smelt → pour, complete.
- The mine face with **free descent through layers 1–5**, digging decoupled from smelting.
- **The Ore Cart loop, finished** — this is the one that must be at 100%.
- The yard, the forge, clean-vs-deformed casting.
- Gear that appears (decimal dial, assay lamp, deeper pick).
- Endlessly generated ore at every layer.

### Explicitly OUT of v1 — and this is the half that stops scope creep

- The guided route *(v2 — a narration mode on the same bench, not a rebuild)*
- The fully open face *(v3 — the same bench with prompts off)*
- All four challenge shafts *(v4 — grouping first, drawn as unopened until then)*
- Teacher authoring, accounts, saved progress across visits, any backend
- Any second verb beyond assay / smelt / pour
- Equations, solving for x, graphing, quadratic formula
- Anything that ranks, compares, or totals out of a maximum

### Done means

1. A student can enter, descend three layers **without smelting anything**, mine a lump, assay it, smelt it, forge it, and see whether the casting is clean — **without reading instructions.**
2. A wrong smelt produces a visibly deformed casting that shows where it went wrong.
3. Nothing on screen has a ceiling, a percentage, or a comparison.
4. `MF.validate()` passes with its control failing as required, and every check reports its denominator.
5. The site is one file, zero dependencies, runs from `file://`, and has been checked against its published URL.

### Deliberately left uncertain until a real student sees it

- Whether a filling yard reads as exploration or becomes a grade the moment two students compare *(philosophy §6c.3, new claim 7)*.
- Whether the open door gets used at all, or whether everyone takes the cart.
- Whether "pure metal" lands as *refined* rather than as *failed to break*.

## 9. What the prototype gives us, and what it costs

**Harvest:** the factor engine and its 615-check validator with a working control; the smelter's decimal seam meter (slide onto halves and watch the integer seam vanish — the best interactive in the build); the area model that draws the area and leaves both sides as dashed `?`; the assay/recognition gate; the free-text parser; Mr Factor's artwork; `MF.positionAudit()`.

**Throw away:** the seven-depth shaft-and-rail journey — that was the Word Problem Express's furniture inherited rather than chosen, and §4.3 is explicit about what that costs. The "Solid Rock" naming. Every `SITE-STATE.md` claim tied to the old structure.
