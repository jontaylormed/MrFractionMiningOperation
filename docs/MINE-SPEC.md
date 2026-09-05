# The Mine — specification
### **Status: v1 built. Amended 2026-08-22 — see §10.**

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

---

## 10. Amendment, 2026-08-22 — the Forge, the instruments, and the scanning seam

Two user decisions changed what v1 is. Recorded here rather than applied silently.

### 10a. Gear is **forged**, not granted — and every tool is a mathematical instrument

The original §8 listed "gear that appears (decimal dial, assay lamp, deeper pick)". That is now wrong in both halves.

> **The user's words:** *"The tools need more scaffolding of mathematical concepts… you get enough ore in the first level to forge a lantern that helps you distribute on the second level, and then a shifter that helps with exponent rules, and then a drill that helps you find patterns. The tools need to be useful, not just descriptive."*

**Why this matters more than a feature.** The v1 loop had **no sink**: `addToYard` wrote metals and only `paintYard` ever read them. An accumulating pile that nothing consumes is a trophy shelf, which is precisely what §2.5a says turns a score into a grade. The forge spends metals, so needing a factor you have not got is what sends a student back down.

**Each tool is forged by demonstrating the move it then assists with.** The forging *is* the lesson:

| tool | cast from | forging it is | what it does |
|---|---|---|---|
| **Lantern** | three primes | distribution over plain numbers | lights the mold — a live area model of what you hold |
| **Shifter** | two x-ingots | watching `x·x` become `x²` | the exponent rail: the four products, traced |
| **Drill** | a matched pair `(x+k)(x−k)` | casting a twin seam on purpose | reads structure across the yard |
| **Prospector's Pick** | three plain metals | — | names what kind of ore a lump is, at the face, before you swing |
| **Decimal Dial** | any four metals | — | nudges a lump off the whole numbers |

**The casting preview is no longer free.** It let a student nudge numbers until it matched, which made the pour ceremonial and broke §6's one rule. It is now the Lantern's power: before you forge one you pour and the casting teaches you; after, you can see what you are building.

> **THE BINDING CONSTRAINT: a tool ASSISTS, it never GATES.** Free descent (§4) is untouched. A student who has forged nothing can still reach and work the deepest layer. `MF.validate`'s **`nogate`** group walks every layer with an empty yard and no tools and asserts ore still comes up.

**And requirements are drawn, never counted.** An order shows **slots, filled or empty** — never "2 of 3 metals", which is an X-out-of-Y and which the `nogrades` check would fail the build over. That is the check doing its job.

### 10b. The face scans

The rock face is a **seam 2280px long** — several screens wide — scanned along by dragging, scrolling or the scan buttons, with a position indicator. Fifteen lumps are spread down its length and refill where they were taken. The **`seam`** check asserts every layer stocks fully, that ore appears in all three thirds of the length, and that nothing is drawn outside the rock.

### 10c. What v1 now contains

Everything in §8's original in-list, **plus** the forge screen, the five forgeable instruments, and the scanning seam. Still out: the guided route, the fully open face, and all four challenge shafts.

`MF.validate()` now runs **2027 checks across ten groups** — engine, classify, ore, print, pour, **forge**, **seam**, **nogate**, nogrades, control — with two controls that must fail, and do.

---

## 11. Amendment, 2026-08-24 — the mine breaks, the forge smelts

A user decision moved the mold out of the mine. §3 said the bench has three verbs — assay, smelt, **pour** — and that a fourth is out of scope until the spec is revised. This is that revision, and it *removes* a verb rather than adding one.

> **The user's words:** *"In the mine, they should be able to break up the ore, but they should only be pouring into molds in the Forge making tools. This is also pedagogically true because they are really factoring… it is ok to have a second breaking of the ore in the mine as if swinging the pick again because the lantern showed it was still a composite expression."*

### 11a. The split, and why it is load-bearing

| | THE MINE | THE FORGE |
|---|---|---|
| imagery | pick, rock, dust, anvil | furnace, crucible, molten stream, mold |
| the act | **break** ore until what is left will not break | **pour** metal into a mold |
| the maths | **factoring** | **distributing** |
| the signal | the seam runs, or the pick glances off | the casting is sound, or it is scrap |

The old bench had the student **distributing inside the mine** in order to check a factorisation. That is the opposite move performed in the wrong place, and it left the mine full of furnace equipment — crucible, molten stream, mold — that has nothing to do with breaking rock.

**§2's table is amended:** the mine no longer smelts. What will not break further is **native metal**, which is exactly what a prime and an irreducible polynomial are. The identity survives without a furnace: nobody smelts to find native gold.

### 11b. The verbs are now ASSAY → BREAK, and BREAK repeats

You name **one** factor and swing. The seam runs and the lump comes apart into that factor and the remainder, or the pick glances off and the rock is described. **Both pieces land on the floor, and anything on the floor still carrying a seam goes back under the pick.**

```
60             -> 6 | 10  -> 2 | 3, 5 | 2
2x² + 10x + 12 -> 2 | x² + 5x + 6 -> (x + 2) | (x + 3)
```

That is the amendment's whole pedagogical payoff: **prime factorisation and polynomial factoring stop being two methods that share a word and become one repeated act.** The recognition gate (§3's ASSAY) is untouched.

### 11c. §6 is amended: there are two correctness signals, one per place

The old §6 said the pour is the whole feedback mechanism and there is no second one. There are now two, and each belongs to the act it judges:

- **In the mine:** the rock came apart, or it did not. Described, never marked — *"the pick glanced off"* is a fact about the rock.
- **In the forge:** the casting is sound, or it is scrap, and you can see where.

Neither has a ceiling, a percentage or a comparison. The `nogrades` group still asserts that mechanically.

### 11d. The yard takes ore, not only metal

The yard now has **a heap and a rack**. Metal broken all the way down goes on the rack and is what the forge spends; ore tipped there still carrying a seam goes on the heap and can be broken again later. Nothing is destroyed and nothing is counted against you.

### 11e. Still out

Everything §8 excludes, unchanged — the guided route, the fully open face, the four challenge shafts. **Also out:** any second way of checking a factorisation in the mine. The rock is the only judge there.

---

## 12. Amendment, 2026-08-24 — every order names one exact object

> **The user's words:** *"The tools need a precise target answer that increases with difficulty per increase in tool usefulness in extracting. This [is so] the student knows what exactly simplifying the factors means."*

§10a made each tool *forged by demonstrating the move it then assists with*. That was right about **which** move and silent about **what**, so the board asked for shapes — "three pure ingots", "any two ingots that carry an x", "any four metals at all". Any three primes filled the Lantern. A student could satisfy every requirement on the board without ever hitting a particular object, which is precisely the thing a factorisation is.

### 12a. The rule

**An order names one object. The casting must come out as that object, exactly.** There is one judgement in the forge now, where there were seven shape predicates, and a miss is described term by term rather than by which rule it broke.

### 12b. The ladder, and what it teaches

`rank` runs 1–7 by how much the instrument does for you when you are getting metal out of rock; the object climbs with it:

| | tool | cast | from |
|---|---|---|---|
| 1 | Prospector's Pick | `12` | 2 · 2 · 3 — plain numbers, one repeated |
| 2 | Pit Lantern | `30` | 2 · 3 · 5 — three different primes |
| 3 | Steel Pick | `3x + 12` | 3 · (x+4) — a metal spread over a bracket |
| 4 | Decimal Dial | `x² + 3x + 2` | (x+1)(x+2) — two brackets, one apart |
| 5 | Exponent Rail | `x² + 8x + 16` | (x+4)(x+4) — a square |
| 6 | Core Drill | `x² − 25` | (x+5)(x−5) — a twin seam |
| 7 | Powered Auger | `6x² + 7x − 3` | (2x+3)(3x−1) — loaded at both ends |

**Why this is the answer to the question the user asked.** *Simplifying the factors* is not "break it into smaller things" — it is landing on **one determinate set**. Hunting the metals that multiply to a named object is the same work as taking that object apart, done in the direction where the answer is checkable at a glance. The mine teaches it forwards; the forge now teaches it backwards, against a target.

### 12c. What this costs, and the check that pays it

A precise target can be an **unreachable** one. The `forge` group stocks a yard from 70 real smelts and asserts, per order, that some set of metals on it casts the object, that those metals are judged sound, that one metal nudged by one is **not**, and that the rejection says where it missed. It also asserts the ranks run 1..n with no ties and that no two orders share a target.

**Still binding:** a tool assists, it never gates (§10a). Nothing on the board is required to work any layer.

---

## 13. Amendment, 2026-08-25 — a tool shows PART of a factorisation, and the hammer confirms it

A user decision changed what an instrument is allowed to say. Recorded here rather
than applied silently.

> **The user's words:** *"The lantern, when put on the ore, should give the answer,
> but it should show one factor and put a ? for the other factor. Each tool is a
> schema for approaching the ore to identify the more complex factors."*
>
> and, on what that means for the rest of the belt: *"The tools is help realize part
> of the factor not all the factor. The hammer should comfirm the test. Other tools
> should factor by grouping or factor with the box method."*

### 13a. The binding rule loosens by exactly one notch

§10a's instruments obeyed *an instrument may say what IS THERE, never what to swing*.
That is now too tight in one direction and it was never the real constraint. The rule
is:

> **A tool may show PART of a factorisation. It may never show all of it.**

The Lantern lights **one side** and prints `?` for the other. The Drill lists every
pair and marks none. The Auger reads what a seam has to satisfy and chooses nothing.
The rule is enforced mechanically, over all seven tools, by the `schema` group — a
method that prints every side of a lump fails the build — and, for the Lantern
specifically, in both directions by the amended `sheet` group.

**Why one side is not the answer.** A factorisation has two sides and they are not
independent: once one is out, the other is exactly what is left. So one side is a
foothold, and the division that gets you the other is the work. The Lantern lights
the **simpler** side, so a loaded lump still leaves the harder half.

### 13b. Every tool is a named method, and two of them are the ones the user named

Each instrument now carries a **schema**: the real name of the move, why it works, and
the method worked on the lump in front of you, with the steps that are still the
student's marked open and drawn as `?`.

| rank | tool | the method, by its real name |
|---|---|---|
| 1 | Prospector's Pick | testing the rock before you swing — it has no factoring move, and says so |
| 2 | Lantern | one side lit, one side dark |
| 3 | Steel Pick | pulling out the common factor (the GCF) |
| 4 | Decimal Dial | the whole-number test |
| 5 | Shifter | **the box method** — a 2×2 box with both sides dashed |
| 6 | Drill | the pair hunt, and the difference of two squares |
| 7 | Powered Auger | **factoring by grouping** |

The two the user named sit at ranks 5 and 7, where the ore is loaded enough to need
them.

### 13c. Nothing in a panel judges. The hammer does.

§11e says the rock is the only judge in the mine, and that is untouched. What a
student writes in the `?` goes to the **pick bar** — `MF.cutHammerTo` — and they
swing it. The panel says nothing about whether it will run. A wrong answer gets no
warning and the hammer glances off, exactly as it does for anything else typed into
the bar.

### 13d. The forge teaches the tool it hands over

A sound pour now lands the casting, the verdict, **a short tutorial** — the method,
why it works, and one practice on a fixed lump — and then the belt. The practice has
no judge of its own: it hands the answer to `MF.breakOff`, the same engine the anvil
swings through, so a miss is described by the rock rather than marked. The same
tutorial reopens from the belt, because a lesson that exists only in the three
seconds after a pour is a lesson nobody re-reads.

### 13e. The Casting Shed is the learning hub

It still teaches the mold. Under it now: a **translation table** from every mining
word to the mathematics it stands for — ore→expression, seam→factor,
breaking→factoring, **native metal→a prime or an irreducible polynomial**, twin
seam→difference of two squares, common metal→GCF, loaded ore→`ax² + bx + c` with
`a ≠ 1`, the pour→the distributive property — every row carrying a worked example
**generated from the engine and asserted by the `rosetta` group**, so a row cannot
drift into teaching a falsehood. Then all seven methods, readable whether or not you
own the tool, and a way into every other room.

**The building keeps its name.** It is the Casting Shed, and the `doors` assertion
`/Cast|Mold/` does not move.

### 13f. Still out

Everything §8 excludes, unchanged. **Also still out:** any second judge in the mine.
A panel that marked an answer would be exactly the thing §11e forbids.

---

## 14. Amendment, 2026-08-25 — the Casting Shed is an introduction, and the lessons are three rooms

> **The user's words:** *"The Casting Shed needs an introduction page. Then three
> buttons to link to different workshops. And each workshop gets its own page, an
> animated illustration, and follow-up questions for understanding."*

§13e made the Casting Shed the learning hub by stacking three lessons in one column —
the mold player, then the translation table, then seven folded methods. That is three
lessons on one page, and the third was a screen and a half below the fold.

### 14a. The Shed introduces; the workshops teach

`workshop-mold` is now an **introduction**: what the building is for, what a mold
does, and three cards. It still explains distribution in prose, because an
introduction that only lists doors is a menu.

| button | screen | what it teaches |
|---|---|---|
| **The Mold** | `shed-mold` | distributing — the slider player, and running it backwards |
| **The Words** | `shed-words` | the translation table, mining word → mathematical term |
| **The Methods** | `shed-methods` | the seven schemas, readable without the tools |

The Stamp Mill stays its own building on the surface. The three workshops are **pages
of the Casting Shed, not places of their own** — they carry a back link, the nav keeps
the Casting Shed lit while you are in one, and each ends with the other two plus a way
into the mine.

### 14b. Each workshop opens with a moving illustration

One per room, and each is a drawing of the idea rather than decoration beside it: two
metals running into a mold that fills and yields one bar; two columns of words with a
light travelling the bar that joins each pair; a lamp climbing seven rungs against ore
that grows. Under `prefers-reduced-motion` each stops on a frame that still reads.

**Not one word is inside the SVG.** `roomScene` already carried that rule and this
function broke it on its first pass: SVG `<text>` paints with `fill` and inherits the
CSS `color` the contrast sweep measures, so ten labels failed at 1.06:1 — real
arithmetic about nothing you can see. Every label is an HTML span pinned over the
drawing in percentages.

### 14c. Follow-up questions, and not one of them is marked

Three or four per workshop: recognition questions where **every option carries its own
description**, so choosing the one the mathematics does not support gets a description
of *that lump* rather than a buzzer — plus one typed question per room that goes to
`MF.breakOff` or `ingotProduct`, the same engine the anvil swings through. There is no
tally, no "correct", no attempt counter and nothing that goes up or down.

> **A described question can quietly describe the wrong thing**, because there is no
> verdict on screen to contradict it. So the fact under each option is written in
> `MF.QUIZ_CLAIMS` as an **engine call**, and the `quiz` group verifies every one of
> them. It also clicks every option and asserts it says something back, and drives each
> typed question with a right and a wrong answer to prove it is wired to the engine at
> all rather than printing the same sentence to both.

### 14d. Still out

Everything §8 excludes, unchanged. No workshop gates anything, and nothing in the
Casting Shed is required before any layer of the mine.

---

## 15. Amendment, 2026-08-25 — reach is a requirement, and the pour still judges

> **The user's words:** *"Scrolling to find buttons and belts need to be addressed
> with the mind of creating less hurdles in our UI design for students that will
> easily give up on a site that makes them scroll or click too many unnecessary
> buttons."*

This is the first requirement in this spec that is about **getting to** the work
rather than about the work. It is written down because it is exactly the kind of
claim that rots: `SITE-STATE` asserted "no horizontal page scroll" for weeks while
the page scrolled 155px sideways (`VERIFICATION` §57), and reach decays the same way
— every panel added between two controls pushes them apart by exactly as much as
nobody measured.

**So reach is a budget, and the `reach` group enforces it.** The bench (belt → **the
ore on the anvil**, §26) and the craft floor (target → mold → slots → rack → pour) must
each fit inside one screen-height, measured at the live viewport, with controls that
must fail. The hammer panel is measured separately, as content against its own capped
box (`VERIFICATION.md` §74).

### 15a. The pour button arms on FULL, and never on CORRECT

The user asked for the pour button to be *"selected when the correct factors"*. Asked
to choose, they took the reading that keeps the casting as the judge:

> **The button is bright, armed and focused the moment the last slot fills — and a
> wrong set of metals looks exactly like a right one.**

Lighting it only for a correct set would hand over the answer before the pour, which
is precisely the fault §10a removed the free casting preview over: it makes the pour
ceremonial and leaves §6 with no mechanism. What the student gets instead is the
*absence of a hurdle* — the next thing to do is the next thing on screen, under the
hand that just dropped the metal.

### 15b. The forge is one cluster; the heap moved under it

Target, mold, slots, rack, pour, in that order, with nothing between any two of them.
The rack used to be a panel of its own **above** the craft floor with the heap between
it and the mold, so filling a three-metal order meant five scroll moves, none of which
was mathematics. The heap and the drawn yard are still there — §11d is untouched —
they are simply no longer standing between the student and the work.

### 15c. The mine: the picture goes below the controls

The belt was already beside the pieces. What separated them from the swing was the
anvil-and-hammer stage, the tallest thing on the bench. The order is the order of the
work now — choose a piece, cut the head, swing — and **the blow plays out underneath
the button that fired it**. The three-second arc is untouched.

### 15d. Light is contrast, not brightness

Every named source now answers the day: the windmill's four windows, both of the Stamp
Mill's, both of the Casting Shed's, the furnace, the lanterns, and — for the first time
— **the miner's helmet lamp**, which was the one light a student identifies with and
the only one that never changed.

> **And turning them up was not enough.** `.sc-night` is a multiply blend over the
> whole site, so it took the lamps down with the hillside and the contrast between a
> lit window and the wall around it barely moved. The halos are painted **after** the
> night in a `screen`-blended layer, which can only ever add light. The night still
> falls on the whole operation; the lights now cut holes in it.

---

## 15. Amendment, 2026-08-26 — the tools draw, and the bench stops asking permission

> **The user's words:** *"I'm not sure we still need the question beforehand… allow
> students to put it directly in the yard… we can redirect students to the Stamp
> Yard for number sense."*
>
> and on the instruments: *"the tools need to open a view screen with more visuals
> and less reading… give supporting information and nearly bring them to a solution,
> but at least one number needs to be a ?… visual overlays, as if they were diagrams…
> teach the X method of factoring, which is still popular in school… line-by-line
> steps with some numbers redacted to force the student to bring their own critical
> thinking. But right now, when you [use] a tool, it is mostly text with no diagrams
> and not enough number information."*

### 15a. The assay stops gating. It is not deleted.

§3 names ASSAY one of the three verbs and §11b said the recognition gate was
untouched. **The gate is gone; the verb is not.** The bench opens on the hammer, and
*"what kind of rock is this?"* is a control you may press at any time and never have
to. A call, once made, still settles and persists with its reason — which is what the
`explain` group asserts and why deleting it was the wrong move.

`nogate` now sweeps the bench itself: on a freshly built, never-clicked bench the
swing must be present, the choices must **not** be, and the offer must be. Control:
the gate restored — and note that the gate was never the `step` field but a
conditional around `paintBreak`, so a control that only set the field proved nothing.

### 15b. A lump can go straight from the cart to the yard

The bench used to be the only door out of the cart: putting a lump down meant picking
it up first. `MF.stow` is now the one place that decides rack or heap, and both
routes — tipping the breaking floor, and **→ yard** on a cart lump — call it.

### 15c. The X method, and it is the spine

For `ax² + bx + c`: **a·c on top of an X, b on the bottom, and the two numbers that
multiply to the top and add to the bottom on the left and right.** With `a = 1` those
two are the bracket constants. With `a ≠ 1` they split the middle term and the four
terms go into the **X-box**, whose rows and columns give up the factors when the
common metal is pulled off each.

| tool | draws | leaves open |
|---|---|---|
| Drill | the X, and every pair that multiplies to a·c | one side of the X |
| Shifter | the X, carried into the 2×2 box | the other side, and every edge of the box |
| Auger | the full X-box: X → split middle → box → factors on the edges | the pair, a corner, both brackets |
| Lantern | the split — one lump above, two pieces below | the dark side |
| Steel | the terms and what divides them all | what goes inside the bracket |

**At least one number is always a `?`.** That is the user's rule, and it is the rule
the `schema` group already enforced from the other side: on a monic trinomial the two
sides of the X *are* the two bracket constants, so filling both in would print the
whole factorisation and fail the build. The two rules are one rule.

### 15d. The mine draws; the Casting Shed reads

The panels carried the whole schema — name, a paragraph of reasoning, the method
narrated in sentences. It is one line now, with the full method a click away in the
Casting Shed, where `paintSchemaIndex` and `toolLesson` already render every schema
in full. **Nothing was deleted; it moved to the room built for reading.**

### 15e. Plain numbers point at the Stamp Mill

Numbers still break in the mine — the *72 and x² − 5x + 6 are one job* thesis needs
them to — but a number on the bench now carries a link to the room built for factor
trees and primes.

### 15f. The mine is two bands

The three **places** you move between — shaft, face, yard — sit tight across the top
on a 12px gap. The **work** is a full-width band beneath them, and the two boxes in
it are **side by side**: what is on the floor, and what is under the hammer. Stacked
in a third of the page, the pieces you choose between and the bar you cut the head to
could not be looked at together, and that is the one pairing the act depends on.

### 15g. Still out

Everything §8 excludes. And still: no second judge in the mine. The `?` goes to the
pick bar and the rock answers.

## 16. The bench has a corner, and the drawing is flat

*User, 2026-08-29.*

### 16a. Everything that is not the work goes in the top-right corner

The bench's head is the ore and a corner column, and nothing else. The ore is the
**headline** — the one thing every control on the screen refers to. The **Stamp Mill**
signpost and the **assay** offer are stacked into a single column hard against the
top-right, each with its own line of explanation directly beneath its own button.

> An optional question laid across the full width of the bench, between the student
> and the hammer, is the **shape** of the gate §15a removed — even with the gate itself
> gone. Position carries the same claim the sequence used to. Clicking the offer still
> opens the five choices in the body, where they have room, and a call once made still
> settles into the body with its reason.

### 16b. The second action on a lump looks like the second action

A lump's route to the yard is a **small centred tab** under its chip, not a slab the
same width as the lump above it. The lump is what the student should reach for first
and the layout has to say so.

### 16c. One orange, and it carries dark ink

Anything in the mine that points somewhere is `--ore` fill with a `--lamp` border and
near-black text. **Cream on `--ore` is 3.55:1 and does not ship** (`VERIFICATION.md`
§62).

### 16d. The anvil is drawn the way everything else is drawn

Flat fill, dark outline, no gradients. The whole site is drawn that way and the anvil
was not, which made the one object the student looks at hardest the one object that
looked pasted in. Detail that is not load-bearing comes off; the **silhouette and
every coordinate the animations are pinned to stay exactly as they are**.

## 17. Every layer pays, and the first tool reads the rock

*User, 2026-08-30. Both reported as defects, and both were.*

### 17a. A tool must change something on screen

The Deep Pick promised three lumps a swing and delivered a different button label —
`MF.breakRock` never read the belt. **An instrument that costs metal and has no effect
is worse than no instrument**: the student pays for it and then doubts their own
reading of the screen.

It is now **The Prospector's Pick**, and it works one step earlier than everything
else. Held to a lump still in the wall it names the **kind** of ore — shared metal, a
twin seam, a plain trinomial, a loaded one, an ingot already pure — and stops there.
It never names a number in the rock, so the rock is still the only judge (§11e).
Inspecting the face is free and breaks nothing, so the tool turns choosing what to cut
out into a decision instead of a lottery.

### 17b. Every layer must be able to pay for the starting tools

The pick is `12 = 2·2·3` and the lantern `30 = 2·3·5` — **plain numbers**. A monic
trinomial cannot produce a plain number even in principle, so layers 4 and 5 produced
none at all and layer 3 produced no fives. Three of the five layers could not buy the
lantern at any amount of digging.

A minority of deep-layer lumps now carry a **common metal in front** — `g(x+p)(x+q)`,
`g((mx)²−n²)`, `g·(loaded)`. That is not a concession to the economy; **it is the move
that should be taught first**: look for something every term carries before anything
else. Layer 5's inner quadratic stays genuinely loaded, so the layer is still itself.

> The rates are held low enough that each layer keeps its identity. Layer 4 at 0.32
> starved the Decimal Dial by thinning the supply of monic trinomials, and the `forge`
> group caught it. The answer was to salt less, not to widen the sample until the
> failure went away.

## 18. The yard is a place you can see, and the face asks where a lump goes

*User, 2026-08-30.*

### 18a. The yard is drawn on the surface

Four of the five places a student goes are buildings they can see from the valley. The
**yard** — where every metal they have broken out is kept, and the only thing the forge
spends from — was drawn nowhere. *"Carry the metal to the yard"* named somewhere they
had never seen.

It stands in the **bottom-left corner** of the operation: a fenced enclosure, a rack of
steel bars, a heap of rock with a seam still in it, and a nameplate. **The rack and the
heap are the two answers to the question the face now asks**, so they are drawn to be
told apart at a glance — steel against rock-brown-with-an-orange-seam.

> **Scenery with a nameplate, not a door.** The yard is not a screen; it lives in the
> mine's right-hand column. The Windmill is labelled the same way for the same reason:
> a nameplate says *this is a thing in the world*, and only a hotspot says *this is a
> way in*.

### 18b. The choice happens at the face, not afterwards

Cutting a lump out of the wall now asks **where it goes**: *into the cart* to work it,
or *straight to the yard* to set it aside. The decision lands at the moment the rock is
acquired, which is when it is actually a decision — not after it is already in the cart
and the student has to undo something.

Both routes go through `MF.stow`, the one place that decides rack or heap (§15b).

### 18c. And the Prospector's Pick informs it

The pick's reading (§17a) now carries a second line in the words of the decision:
*"A seam runs through it. Worth carting."* or *"Nothing to break. The yard is where this
one belongs."*

**That adds no information the kind did not already carry** — *already an element* and
*nothing to break* are the same sentence — and it still never names a factor. It just
says it in the language of the choice the student is about to make. Without the tool,
the face says the choice exists and that the pick reads which is which.

## 19. A tool is a lens over the ore, not a panel beside it

*User, 2026-08-30: "the tools need to act like tools not text boxes… Students should
see ore in front of them, apply a tool, and the visual of the ore changes… literally
making the ore data appear different giving clues to how to properly factor."*

Every instrument used to open a sheet **next to** the lump, so the rock sat there
unchanged while a panel talked about it. A tool is a **lens**: applied to a lump it
re-draws *that lump*, so the structure the tool is about becomes visible in the ore.

| tool | the lump | what it becomes |
|---|---|---|
| **Steel Pick** | `6x² + 15x` | `3·2x² + 3·5x` — the shared metal written **inside every term** |
| **Core Drill** | `x² − 5x + 6` | the X, built from this lump's own two numbers |
| **Powered Auger** | `6x² + 7x − 3` | the middle term **split** — `6x² + 9x − ?x − 3` — then boxed |
| **Exponent Rail** | `x² + 8x + 16` | the same terms re-laid as a 2×2 area |
| **Pit Lantern** | any | `( x − 2 ) × ( ? )` — one side lit, one dark |
| **Decimal Dial** | `x² + 3x + 2` | the tail on a dial: turn it and the lump's own `c` changes |
| **Prospector's Pick** | at the face | names the kind (§17a) — it has already spoken by the floor |

### 19a. The binding rule: a lens rearranges and never adds

Whatever arithmetic a lens puts on screen must reconstruct the lump it was handed. A
panel that is wrong is wrong *about* the ore; **a lens that is wrong IS the ore** as far
as the student can see. The `lens` group checks every reading against the engine.

And §13 still holds: at least one number stays a `?`.

### 19b. Compact everywhere, expanded on click

Eight pieces share the breaking floor and a 2×2 box is far taller than a line of
expression. Each lens is a **head plus a body**: the head carries the tool's icon and
the one line it found — *"every term carries 3"* — and the click opens the full form.
**The finding is never behind the click**, only the detail; the piece under the pick
opens expanded.

## 20. The mine works without explaining itself

*User, 2026-08-30: "The students should be able to use a tool without an explanation
but have the option to understand why the tool works if they want it… The mine should
act with little explanation or clicked boxes… If students want to understand how a tool
works, send them to the casting shed or stamp mill."*

### 20a. The flow

**Cut the ore → it lands in the cart → put instruments on it there → send it to the
breaking floor or the yard.**

- The **face** is one Swing button again. The cart-or-yard choice that lived there for
  one session has moved to the cart, because that is where the tools are: you read the
  lump *before* you decide, rather than deciding and then reading.
- The **cart has a belt.** It did not before — instruments only existed once ore was on
  the bench, so the first thing a student could do with a lump they had just cut was
  move it somewhere else.
- **A lump in the cart is a drop target, not a button.** Drag an instrument onto it and
  the lump changes (§19). Where it goes is two controls underneath: *To the breaking
  floor* / *To the yard*.
- **The instrument rides with the ore.** A tool dropped on a lump in the cart is still
  on it when the lump reaches the floor — it is the same object.
- On the **breaking floor** the ore is at the top of the box and the belt is under it.
  The belt was first, so the thing a student came to look at sat below a rack of tools.

### 20b. No panel rises, anywhere in the mine

Applying a tool used to open a sheet. It does not any more: the reading **is** the
ore, re-drawn. The lesson is not deleted — every instrument's belt loop carries a
small **how?** that opens the room built to teach it: the **Stamp Mill** for the tools
priced in plain numbers, the **Casting Shed** for the rest. A student who wants the
why gets a room; a student who does not gets a working tool.

## 21. The information is in the ore

*User, 2026-08-30: "Critical: Information needs to appear in the ore. NOT next to it
while in the Mine or Yard. Tutorials can have numbers out of the ore for teaching
purposes."*

This is the correction to §19's first build, which drew a box **under** the lump with
the finding in it — a panel beside the rock wearing a different hat.

**A lens returns the ore's own expression, re-spelt, and that goes where the plain
expression was.** `6x² + 15x` in the cart does not grow a note saying every term
carries 3. It *becomes* `3·2x² + 3·5x`.

| tool | the lump | the lump, with the tool on it |
|---|---|---|
| **Steel Pick** | `6x² + 15x` | `3·2x² + 3·5x` |
| **Pit Lantern** | `2x² + 10x + 12` | `( 2 )( ? )` |
| **Core Drill** | `x² − 5x + 6` | `x² + ( −2 + ? )x + 6` — the **middle**, as a sum |
| **Exponent Rail** | `x² − 5x + 6` | `x² − 5x + ( −2 · ? )` — the **end**, as a product |
| **Powered Auger** | `6x² + 7x − 3` | `6x² + 9x + ?x − 3` — the middle actually split |
| **Decimal Dial** | `x² + 3x + 2` | `x² + 3x + ⟨2⟩` — the tail, marked as what moves |

### 21a. The diagrams did not survive into the mine, and that is the point

An X and a 2×2 box are **teaching apparatus** — numbers taken *out* of the ore and laid
beside it. They belong in the Casting Shed and the Stamp Mill, which is where the
`how?` on every belt loop goes (§20b). **The mine gets the ore.**

`lens` enforces it: a reading whose text contains words rather than an expression fails
the build. A lens that starts explaining is the panel coming back under a new name.

### 21b. The breaking floor does not exist until a lump is sent to it

It used to hold a line telling you to pick a lump — a whole band of screen spent saying
that a band of screen was empty, sitting under the cart, so every student scrolled past
an instruction to do the thing they were already doing. Nothing selected, nothing drawn.

## 22. The mine, redesigned: four bands and rocks you can read

*User, 2026-08-30, with two screenshots — the anvil labelled "text inside the ore",
the cart labelled "information not in the ore. You keep getting this wrong and all your
tests are failing." Plus: "the cart is not large enough to drag anything or properly
see the ore… for the third time, the Breaking Floor should not show up until the button
is pushed… mostly ores, buttons, and animations."*

### 22a. Four bands, each doing one job

1. the **shaft** and the **rock face**, side by side
2. **THE CART** — full width
3. **THE BREAKING FLOOR** — and it is not in the DOM until a lump is sent
4. **THE YARD**

The cart used to be the middle column of a three-column grid — a third of the page —
which is why a lump was a 44px list row with nowhere to drop a tool. It is a tray of
drawn rocks now, `repeat(auto-fill, minmax(190px, 1fr))`, measured at **216×167** where
it was 44 tall.

### 22b. A lump is a drawn rock with its numbers cut into the stone

`MF.oreRock` — one renderer, used wherever ore appears. The expression sits **on** the
stone; an instrument dropped on it changes **those** numbers. `6x² + 15x` becomes
`3·2x² + 3·5x` with the 3s picked out, on the rock.

> **The numbers are HTML pinned over the SVG**, never SVG `<text>` (§59): a lens marks
> the shared metal in colour, and SVG text paints with `fill` while inheriting the
> `color` a sweep reads. The stone is a drawing; every character on it is a span.

> **And `_backdrops` had to learn that a drawing is a backdrop.** The rock's colour is a
> polygon `fill`, not a CSS background, so the contrast walker climbed past it to the
> panel behind and reported dark-on-steel at 1.65:1 for ink actually sitting on gold.
> Same rule as §64, one layer down.

### 22c. Cutting does not select

`MF.placeCut` ran `if(!MF.state.selected) MF.state.selected = o;` — so the first lump a
student ever cut opened the floor by itself. **The floor was asked to stay shut three
times and the panel was hidden twice** while the state behind it was still being set.
Hiding a panel cannot beat the thing that opens it. `nogate` now asserts the **state**:
cutting leaves nothing selected, so a future fix that hides the floor while still
selecting fails the build.

## 23. An instrument comes off as easily as it goes on

*User, 2026-08-30: "You should be able to select and unselect a tool in the cart and
breaking floor."*

A tool put on a rock could not be taken off. The stone stayed re-spelt and the only way
back to the plain expression was to break the lump. **Selecting without unselecting is
half a control**, on a screen a student is meant to experiment with.

Three gestures, all reversible, in **both** the cart and the breaking floor:

| | |
|---|---|
| **on the belt** | click an instrument to pick it up, click it again to put it back |
| **on a rock** | click the rock to use it — the *same* instrument again takes it off |
| **the slot** | a rock carrying an instrument shows it with a ×; clicking it takes it off |

### 23a. The slot only exists when something is in it

It used to sit on every piece: filled it re-opened the tool sheet, empty it opened a
chooser. **The sheet stopped existing when the mine stopped explaining itself (§20b)**,
so the filled slot was a control that opened nothing — and the empty one was a second
way *in* when the belt had just become the way in. It is now one thing: the way back
off. `nogate` fails the build if a bare rock shows a slot.

## 24. Gravel pays quickly, and the seam holds more ore

*User, 2026-08-30: "The Layer should have more minable area. And I was spending a lot
of time looking for factors of 2, 3, and 5 to get the first two tools… it's taking a
bit to get to the tools."*

### 24a. Time to the first two tools

The pick is `12 = 2·2·3` and the lantern `30 = 2·3·5`, so a layer-1 dig is only worth
something if it yields 2s, 3s or 5s. Gravel drew a prime from **13–97 twenty-eight per
cent of the time** — one dig in four paying nothing toward either tool — and a random
12–144 otherwise.

Measured, digs until both tools are affordable:

| | |
|---|---|
| **before** | 1, 1, 2, 5, 8, 12, 14, 21 — median **8** |
| **after** | 1,1,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,6,9,11 — median **3**, seventeen of twenty inside four |

**Primes stay** — *"held to the light it stays exactly what it is"* is the thesis and a
student has to meet one early. They are **small** now, with 2, 3 and 5 listed twice, so
a prime is a lesson *and* a payment rather than a lesson and a wasted swing. Every
composite is built from 2, 3 and 5 (with the odd 7 or 11), so breaking one always puts
something on the rack.

> `ore` asserts this: eight students, each must afford both tools inside fourteen
> lumps. Its control restores the old draw and reports two students at 25 and 24.
> **READ THE DENOMINATOR** — it measures the *engine's* shortest path, breaking each
> lump with the factor the engine itself names. A real student picks their own and will
> sometimes take longer. It is a floor on the experience, not a description of it.

### 24b. More minable area

`SEAM_COUNT` 15 → **24**, over a seam widened only 2280 → 2900. The face is nearly
twice as tall as it was (§22), so the extra ore goes into height that already existed:
lumps sit 117 units apart instead of 145 and spread over 228 units of height instead of
142. The scan is barely longer; there is simply more in it.

## 25. The breaking floor is the work, and every tool marks the rock

*User, 2026-08-30: "The top part, text, and buttons above the anvil and hammer need to
be removed. As the prospector pick has no effect on the ore in the mine and will appear
to be a useless tool, tools just click away in the mine."*

### 25a. Nothing above the two work boxes

The bench head is gone: the ore as a 76px headline, the Stamp Mill signpost, the assay
offer, and the line of instruction under them. Each was defensible alone; together they
were a screen of furniture between a student and the hammer. The bench is now
`panel-tag > workpair`.

The **headline had become a duplicate** — the lump is drawn on the stone in the floor
box (§22), so the number was on screen twice and the larger copy was the one you could
not act on.

**The assay is not deleted, it is unreachable from here.** Naming the rock was already
optional (§15a), and the Prospector's Pick reads the kind at the face (§17a) — one step
earlier, where it stands between nothing.

### 25b. A tool with no effect on the ore is a useless tool

Now that an instrument's whole visible job is re-spelling the rock it is dropped on, a
tool that re-spells nothing is the Deep Pick's original sin under a new name (§17a).
The Prospector's Pick gets the cheapest reading there is, which suits the cheapest tool:
**is this a product or an element**, naming neither side.

| | |
|---|---|
| `6x + 15` | `( ? )( ? )` |
| `x² + 4` | `x² + 4 ◆` |

The lantern lights one side; this only says there *is* one.

> `nogate` follows the capability rather than the button: it required an assay offer on
> the bench, and now requires the pick to have something to say about every shape.
> Muting the pick fails the build by name.

## 26. One anvil, the belt over it, and the ore on top

*User, 2026-09-04: "after the breaking floor has been selected from the cart, an anvil
should appear with a tool belt above it. The ore should be on top of the anvil, and its
text should change as different [tools] are applied and unapplied. Then the mouse cursor
in the layer should be a hammer. When the mouse clicks on the ore, a pop-up box should
ask what factor to hammer into the ore. And then it should split for this process to be
repeated."*

### 26a. The anvil is the work, not a picture beside it

The `workpair` is gone. It was two boxes: one held a row of chips and the belt, the
other held a drawing of an anvil, two number boxes and the swing button. So **the anvil
a student was looking at was not the thing their ore was on** — the ore was a chip in
the other box — and the drawing was decoration.

There is one box now, and it is the gallery you are standing in: the belt overhead, the
anvil, the stone on its face, and whatever has already come off it lying on the ground.
A first lump has nothing on the ground at all.

### 26b. The ore on the anvil is `MF.oreRock`, and it is a live piece

It used to be an SVG polygon with an SVG `<text>` on it, which could not do what was
asked. An SVG `<text>` cannot carry the coloured spans an instrument's re-spelling is
made of, and it paints with `fill` while inheriting the `color` a contrast sweep reads
(VERIFICATION §59).

So the stone is the same drawn lump the seam and the cart already show — expression cut
into the rock, numbers as HTML pinned over it (§22) — mounted over the anvil's face. It
carries `.piece[data-piece]`, so the belt's drag, `MF.pieceAt` and `MF.applyTool` reach
it exactly as they reach a chip on the ground, and **a tool dropped on it re-spells the
stone in place**. It keeps the class `anvilrock`, so the squash and the shatter find it.

Position lives on the outer `.anvilmount`, animation on the lump inside it (§5g).

### 26c. The hammer is asked for, once

The permanent swing bar — a label, two boxes, an echo line, two hints and a button,
sitting under the anvil whether or not the student had chosen anything to hit — is now
`MF.openHammer`, a dialog that opens when the ore is struck. **A question that is always
on screen has stopped reading as one.** Nothing in it changed except when it exists.

It closes *before* it swings: the scrim covers the whole page, and left up it would hide
the blow the student just struck. One panel is one blow — a glance comes back as a note
beside the anvil and the stone is still there to click again, which is the loop.

**The cursor over the floor is the hand, the same as in the layer.** It was built as a
drawn hammer with its hotspot on the striking face — *"the mouse cursor in the layer
should be a hammer"* — and the user asked for the hand back the same day, having seen
it: *"When the mouse is on the breaking field, it can be the hand icon as its in the
layer tool."* What still has to be true is that **the ore says it is clickable**: it is
the only control on this floor and no button on screen names it, so `.floorbox .piece`
asks for the floor's cursor by name and cannot lose it to a later rule. Native metal is
finished and takes `default` — there is nothing to bring a hammer down on.

### 26d. What the checks had to do about it

| | |
|---|---|
| `nogate` | walked the route instead of hunting a button: the ore must be on the anvil, and striking it must open a panel with a swing in it |
| `swing` | drives the same route; asserts the panel lets go of the screen before the blow, and that no burst is drawn outside the anvil stage |
| `reach` | belt → **the ore**, not belt → a button that now lives in a fixed dialog; and the panel's content must fit its own box |
| `contrast` | a new `hammersheet` pass — the whole swing bar moved into a node appended to `document.body`, which mounting the five screens does not see |

> The `reach` panel check earned itself immediately: at 380px the hammer panel held
> 870px of question in a 681px box, putting the swing button below the fold of a dialog
> that does not look like it scrolls. The panel was cut down until it fit, not the check.

## 27. The cart is a built object, and the ore still lives in it

*User, 2026-09-04, with a reference image: "Redesign the minecart to include details as
shown in the included picture, such as the hitch and the bolted edges, etc. But leave
space for the Ore to exist and be factored."*

From the reference: a heavy lipped rim bolted along its length, riveted corner straps
down a body that **flares** — wide at the lip, narrower at the sill — chips knocked out
of the plate, a bolted chassis bar, and spoked wheels with a rust-coloured hub cap. Plus
the coupling: a drawbar and ring off the front, which is the one part of a mine cart
that says it belongs to a *train* of them.

### 27a. Two constraints it had to be built around

**The bed colour stays on `.cartbody` as a CSS background.** The contrast sweep's
`_backdrops` walks *up* from a piece of text looking for paint (`VERIFICATION` §64), and
the layer tag under each lump has nothing between it and the cart's bed. Repaint the bed
as an SVG fill behind the content and that walk climbs straight past it to the panel's
paper, and reports cream ink on cream. **The ironwork is drawn over a bed that has not
moved.**

**The box has to stretch.** It holds a scrolling list with a 430px cap, so nothing here
may be a drawing that distorts as the box grows. The rim and the straps are HTML with
repeating bolt heads sized in pixels; the only SVG in the body is the outline, which is
`preserveAspectRatio="none"` with a **non-scaling stroke**, so a tall cart is a tall cart
and not a fat one.

### 27b. The flare is a clip, and the straps are not skewed

A `clip-path` takes the border with it, so the outline is a separate path tracing the
same trapezoid at **double** stroke width — the clip removes the outer half and 3px is
what shows.

The corner straps were skewed to lean with the taper, and that was wrong: **a skew is a
fixed angle and the taper is a percentage of the width**, so the lean a strap needs is a
function of a height that changes with every lump added. The same 2.3° that matched at
200px tall threw the strap 21px off the plate at 526px. They run straight down the
corner now and the body's own clip trims their outer edge to the plate — which is how a
strap over a tapering corner is drawn in flat art anyway.

### 27c. The undercarriage is positioned, not flexed

`justify-content:space-around` put the wheels at the quarter points, which on a 1140px
cart is 570px apart with the drawbar stranded 80px in front of nothing. Percent offsets
hold the same proportions at every width, and the chassis bar and the coupling are then
pinned to the wheels rather than to the box. Measured at 1250px: bar 226..1024, wheels
215..259 and 991..1035, the drawbar running behind the front wheel from 184 to 230.

> It keeps the class `cartwheels`, because that is what `cartdraw` measures — six cart
> sizes against the height of this row — and because it is still, in fact, the wheels.

### 27d. The ore sits in the middle of the cart

*User, 2026-09-04: "The Ore should be centered alligned in the cart."*

`repeat(auto-fill, minmax(190px, 1fr))` could not do it, for two reasons at once:
**`auto-fill` keeps the empty tracks it makes**, so one lump in a 1140px cart sat in the
first of five columns; and a **`1fr` maximum lets the tracks absorb every spare pixel**,
so `justify-content` had nothing left to centre.

`repeat(auto-fit, minmax(190px, 230px))` with `justify-content:center` does both jobs:
`auto-fit` collapses the empty tracks to zero, and the 230px cap leaves the spare width
*outside* the tracks, where centring can reach it. The cap is also what stops a single
stone stretching to 1140px, which is what a bare `auto-fit` would have done instead.

Measured: at 1250px one lump has **444px either side**, two have **322px**; at 380px one
lump has **14px either side**; at 560px two lumps stack in one column at **165..395** in
a cart running **61..499**.

## 28. The layer is rock all the way up and all the way down

*User, 2026-09-04: "The Layer window should be filled with illustrated rock and ore
textures. The blank spaces on the top and bottom of the layer need to be redesigned."*

### 28a. Most of the blank was not in the drawing at all

**91px at the top and 91px at the bottom, measured.** The commit that made the seam
taller set `height:542px` on `.seamview svg` in CSS and left the width at the viewBox's
own `W` — 2900 — in JS. A 2900×360 viewBox in a 2900×542 box with the default
`xMidYMid meet` scales to fit the **width**, at 1.0, and letterboxes the rest: the rock
painted 360px tall in the middle of the element with dead space above and below it.

Both axes come off one constant now — `MF.SEAM_ZOOM = 1.505`, the ratio the old comment
already claimed the seam was drawn at — and `.seamview svg` no longer states a height.
The window is 4365×542 and the rock fills it: **blankTop 0, blankBottom 0**.

> **Nothing in the build could see it.** `layout` measures the right edge and says so;
> `hollow` measures a box against the *text* drawn in it and this box holds a picture;
> `contrast` walks text nodes and the seam has none. A drawing that does not fill its
> element crosses no edge, moves no control and has no ink.

### 28b. And the picture's own head and foot were bare

The other half was real: the top 40 and the bottom 60 units of the seam held a gradient,
a couple of strata lines and some grit. `MF.seamRock` draws, back to front:

| | |
|---|---|
| **jointing** | big low-contrast blocks and cracks — the way rock actually breaks |
| **stringers** | ore threaded through the wall. Dim on purpose: a stringer is not breakable, and a bright one would compete with the lumps that are |
| **the roof** | a hanging wall with a ragged edge, points coming down off it, ore glinting in it, and drips |
| **the floor** | a ragged sill, a muck pile of broken chunks flecked with ore, and a dark band under it |

Three things it is built around. **It must not take a click** — one group, appended
before the lumps, `pointer-events:none`; `overlay` is the group that caught the pick
eating every click on the seam. **It must not move on a repaint** — `paintFace` runs on
every `paintMine`, so it is seeded off the layer. And **it must not draw from
`MF.state.rng`**, which is the ore stream: taking numbers out of it here would change
which lumps get dug.

> `seam` (17) now asserts the drawing fills its window on all five layers, and that
> something is drawn in the top 44 and bottom 44 units of each. Controls: a height stated
> independently of the width — the exact fault that shipped — and a texture group with
> its head and foot stripped out. Both fail by name.

## 29. One place teaches a tool, and it is not the forge

*User, 2026-09-04: "The Casting Shed should include a section that teaches how to use
the tools on preselected ores, with an interactive, guided textual explanation. Only
tools that have been successfully cast should be available as lessons."*
*And, the same day: "There should no more lessons on the tools in the forge."*

### 29a. What replaced what

| gone | why |
|---|---|
| `MF.paintSchemaIndex` | listed all seven methods as folded essays whether or not you owned the tool — a page to read rather than a thing to be walked through |
| `MF.toolLesson` | ran in the forge three seconds after a pour, when what the student is looking at is the object they just made; and again seven times over in the Shed |

The **working floor** (`MF.paintToolSchool` → `MF.drawLesson`) is what is there now. One
lesson per instrument **cast**, each walked a step at a time.

### 29b. The walk

The ore is **preselected per tool** and it is `SCHEMA[key].practice.ore` — the lump the
method was written against, and the one the `schema` group already checks the practice
answer comes out of. One lump, so the walkthrough and the thing you then try are the
same rock, and it is **drawn** beside the method's name.

`SCHEMA[key].steps(ore)` is the script; the lesson reveals one step at a time with a
count and pips saying how long the corridor is. A step the schema marks `open` — *this
one is yours* — is announced by the control that opens it (*"and then it is yours →"*)
rather than arriving unlabelled. Back a step is always available and loses nothing. At
the end, the practice on the same lump, answered by `MF.breakOff` — the engine the anvil
swings through — so a miss is **described by the rock**, not marked.

Where each student is in each lesson lives on `MF.state.school`, so leaving the room and
coming back does not send them to step one. The lesson **repaints into its own body**,
never through `MF.go`, which would rebuild the screen, scroll to the top and close the
`<details>` they are reading (the `inplace` rule) — and focus is put back deliberately,
because every control in it is destroyed by that repaint.

### 29c. The gate, and why it is not the gate §10a forbids

The binding constraint is that a tool never gates **descent**: a student with an empty
belt reaches and works the deepest layer, and `nogate` walks every layer with an empty
yard to prove it. **Untouched.** What is gated is a *lesson about an instrument you are
holding*, and a lesson about a tool nobody has is a page about a thing that is not in the
room. The methods are not secret: each is performed in the mine the instant the
instrument touches a rock, and the Stamp Mill and the mold room teach the mathematics
with no tool at all.

**The empty state is not a locked door**, and that is checked: it says where instruments
come from, says plainly that nothing in the mine is waiting on it, and carries routes to
the forge and the Stamp Mill.

> `schema` (132) asserts the count follows the belt exactly at 0, 1, 2 and 7 cast, that
> no lesson is drawn for a tool that has not been cast, that the empty room is not a dead
> end, and that **the casting carries no lesson**. Controls: `MF.hasTool` unhooked, a
> `.practice` appended to a casting, and the empty state's routes removed. All fail by
> name.

## 30. The Molds show the multiplication, not just the answer

*User, 2026-09-05: "The Molds need to show multiplication in the pour to illustrate
multiplying terms."*

The mold room drew an area model and one line of algebra, and **the area model only ever
held one row** — a depth over two parts, `a(b + c)`. That is a number distributed over a
sum. It is not the move the mine runs backwards all day, which is **two brackets, four
products, and two middle terms that turn out to be the same kind of thing.**

`MF.pourChain` writes the pour out a line at a time:

```
( x + 2 )( x + 3 )               what went into the mold
x·x  +  x·3  +  2·x  +  2·3      every part of one meets every part of the other
 x²  +   3x  +   2x  +   6       each pair multiplied out
 x²  +       5x      +   6       3x and 2x are the same kind of thing
= x² + 5x + 6                    one object comes out
```

It does **no arithmetic of its own**. Every number and every pairing comes from
`MF.moldMaths`, which the `mold` group already checks against `ingotProduct` — so this is
a rendering of a verified computation, and a second copy could not drift from the first
because there is no second copy. The room gains a third thing you can pour (**two
brackets**) alongside the two it had, and the one-bracket pours draw the same chain, so
the modes read as one act at two sizes rather than two lessons.

> `mold` (112) asserts the chain over four pours, that its last line agrees with
> `ingotProduct`, and that a two-bracket pour shows **both** the pairings and the two
> middles collapsing. Control: strip the working out of `moldMaths` and the chain must
> stop showing them.

## 31. A tool lesson is mostly not reading

*User, 2026-09-05: "The Tools modules are similar to the Cart, but there are walkthroughs
with explicit text about how and why the tool works, with interactive slides and buttons
to work through the process — but the core of the activity is applying tools to ores."*
*And: "not every section needs to end with a quiz; maybe add a reflection or a real-world
example of the tool."*

### 31a. The why is slide one

`SCHEMA[key].why` was behind a `<details>` labelled *why this works* — the best paragraph
in the lesson, one click away and therefore unread. It is **beat zero of the walk** now:
why it works, then how, a step at a time, and the button that opens the second slide says
*now how →*.

### 31b. The bench is the core, and it is not gated behind the walk

Three lumps, the instrument on a hook, and the same gesture the cart uses: pick it up, put
it on a rock, watch the numbers cut into the stone change. Click the same rock again and
it comes off. **It is the mine's mechanism, not a demonstration of it** — `MF.oreDisplay`
reads `ore.tool` and re-spells through `MF.lensFor`, exactly as it does on the anvil.

Two differences, both deliberate. The bench keeps **its own armed flag** rather than
touching `MF.state.armedTool`, which belongs to the belt in the mine and must not be left
armed in another room. And it **says what the instrument found, in words, under the
stone** — which the mine may never do (§21), and which this room may, because the user
drew that line: *"Tutorials can have numbers out of the ore for teaching purposes."*

The lumps are **copied per lesson**. `MF.oreDisplay` reads `ore.tool`, so applying an
instrument mutates the lump, and `MF.LESSON_ORES` is a shared literal — two lessons naming
the same shape would otherwise hold the same object.

### 31c. It ends on a real-world example, not a question

One per instrument: a place the same move is made by somebody who has never heard of this
site, and a tie-back naming **which part of the method it is** — because "maths is
everywhere" is a poster and "this is that step, here" is a lesson. The Words room ends on
a **reflection** instead: a box that is never read, checked or kept, and says so.

> `schema` (165) asserts every bench draws at least three lumps and that holding the
> instrument to them re-spells at least two — not all three, because one lump on some
> benches is deliberately a shape the instrument has nothing to say about, and an
> instrument silent on a hard case is honest while one silent on all three does nothing.
> It also requires a real-world example per tool with a tie-back long enough to be an
> argument, and that the Words and Molds rooms close on something **after** their last
> question. Controls: the bench removed, every reading muted, a tool's example deleted,
> and the reflection removed — all fail by name.

## 32. Picking a lump out does not rebuild the face

*User, 2026-09-05: "When I click on the layer tool, it forcibly moves the screen, which
makes the webpage feel jerky and not smooth."*

Clicking a rock ran `MF.paintMine()`, which tears down and rebuilds the whole middle
column — **691 SVG nodes**, the 24 lumps, the wall texture, the pick — to change which
rock is ringed. It then re-centred the seam on the selected lump and nudged the page.

Measured: scanning 1400px along the seam and clicking a lump that was on screen snapped
the seam back to 0 and moved **the lump the student had just clicked 1400px sideways**.

A selection changes exactly three things, and `MF.selectRock` changes exactly those:

| | |
|---|---|
| the ring moves | a `data-sel` attribute on two groups |
| the pick walks over | a transform on a node that already carries `transition .16s` |
| the panel is redrawn | `MF.paintInspect`, the one thing whose content changed |

The seam is not touched, so its scroll offset cannot move, so nothing under the cursor
can jump. **The full paint is still what runs when the FACE changes** — a new layer, a
lump cut out of the wall, ore arriving.

**Movement that is the point is kept.** The scroll position is restored on every paint
because it belongs to the student; and a selection changed by something *other* than a
click on a visible rock still eases the seam over, because there the student does need
taking somewhere.

> `knock` (19) drives a real click on a visible rock and requires the seam's scroll, the
> rock's position on screen and the page's scroll to be **unchanged** — and separately
> that the click still rings the rock and names it underneath. Control: reintroduce the
> re-centring and it reports the jump.

## 33. The reading is a pop-out over the wall, and it asks one question

*User, 2026-09-05: "When you click on the ore on the layer, there should be a pop out
window asking to swing or keep scanning. This pop out window should be overlaid the layer
window not popping below it."*

The reading was a block in the flow under the seam, so picking a lump out **pushed the
scan row, the cart and everything under them down the page** — the same class of thing as
the seam snapping (§32), one band lower. It is absolutely positioned inside `.facewrap`
now, over the wall, and **nothing below it moves when it opens.**

It asks the question it exists to ask: **Swing the pick**, or **Keep scanning.**

### 33a. Where it lands

**Beside the rock first**, because that is the only placement that covers none of it.
Over-or-under could not win: the panel is ~255px of a 563px window, so the two positions
leave a 25px band neither covers, and a 150px lump spanning the middle got clipped
whichever way it went — **17 of 54 lumps, worst case 77px**. The wall is 931px wide and
the panel 420, so there is room to stand beside it.

On a screen too narrow for that it falls back to over or under, **leaning to whichever
side has more room** and then taking the position that covers *less* of the rock —
compared by actual overlap, not by the rock's centre against the wall's midpoint, which
is only right if the panel is a sliver and it is not.

Swept over 56 lumps across all five layers at three scroll positions: **50 beside, 6
over-or-under, 1 partially covered (46px), 0 outside the wall.**

### 33b. What it is pinned to

`.facewrap` wraps the scroller rather than living inside it: a child of the scroller
would be clipped by it and would scroll away from the student. So the panel is re-placed
on every scroll — and when the rock leaves the window the panel goes with it, because
*"swing this one?"* is meaningless about something off screen.

Every offset is clamped into the wall **in both directions**. The first version clamped
one end, and a rock scrolled off the left has a negative right edge — which put the panel
off the left of the wall. The rock is allowed to be anywhere, including outside.

**Nothing picked out means nothing on screen.** The panel used to carry a "nothing picked
out yet" plate, which is a box of text explaining that there is no box of text — and it
would reserve the height the panel was moved out of the flow to stop reserving.

> `knock` (39) asserts the pop-out is inside the wall's box, that opening it moves what is
> under the wall by **0px**, that it offers both choices, that it is not on screen with
> nothing picked out, and that Escape closes it. Controls: put the reading back in the
> flow — it reports both the shove (216px) and the panel hanging outside the window.

## 34. The layer is the size of the shaft

*User, 2026-09-05: "In the mine, the layer needs to be the same size as the shaft."*

**The two columns were already the same size.** Both stretched to one grid row — 982px at
1250. The mismatch was inside: the seam window was a fixed 563px, so the layer had **264px
of empty rock panel under it** while the shaft was full to the bottom. Two boxes the same
height, one of them two-thirds empty.

So the zoom is **derived rather than declared**. The wall is a flex column, the window
takes what is left of it, and both axes come off that one measured number — the rule §28
established after the letterbox, only now the number is measured instead of written down,
and it follows the shaft because the shaft is what sets the row.

Measured at 1250: shaft 982, wall 982, window 803, drawing 803 — **0 clipped, 0 blank.**

### 34a. Four numbers that had to be right, and each was wrong once

| | |
|---|---|
| `flex-basis` | `auto` makes the basis the *content* height, which is the drawing, which is the thing being sized from the box. The wall inflated the row 71px past the shaft and dragged the shaft up with it — the layer **setting** the row rather than filling it. `flex:1 1 0` breaks the loop. |
| the floor | with a 210px minimum and a zero basis, the stacked layout under 900px — where the wall is content-sized and has no free space — collapsed the window to **205px**, far smaller than the 563 it replaced. `min-height:542px`, the height the seam was designed at, is the floor. |
| the cap | a zoom cap above the window's own height means the drawing is taller than the box and `overflow-y:hidden` clips it: 846px in an 803px window, **43px of the floor cut off**. There is no cap, and no floor either — a floor above what the window can show is a floor on clipping. |
| when to measure | sized before the scan row was appended, the window was 71px larger than it ended up. `MF.fitSeam` runs at the **end** of the paint. |

And `.seamview` is `overflow-x:scroll`, not `auto`: with `auto` the bar is not there when the
drawing is measured and appears once the drawing makes the box overflow, so the height read
15px too large and the seam was sized to a window it then made smaller.

### 34b. More lump, not more walk

`SEAM_W` drops 2900 → 2000. The drawn width is in viewBox units rendered at *window height
÷ `SEAM_H`* per unit, so when the window grew to match the shaft every unit got 48% wider
and the scan ran from 4.7 screens end to end to **7.3**. Fewer units at a bigger zoom is
the same number of *pixels* of seam: the scan holds at **4.8 screens**, and what the extra
height buys is a lump at **58–111px** instead of 39–75.

> `seam` (22) asserts no dead space under the window on the wide layout, on all five
> layers — measured as the gap between the window's foot and the wall's, less the scan row.
> Control: pin the window back to a fixed 542px and it reports 282px of empty wall.
> It says nothing about the stacked layout under 900px, where there is no shaft beside it
> to match.

## 35. The metal comes out of a ladle, and the terms ride down the stream

*User, 2026-09-05, with a reference image: "The illustration around the pouring molds needs
to look more realistic, 3D, as the example shows, and inside the stream there should be
visible text of terms being multiplied."*

### 35a. A vessel, not a channel

What was there was a flat iron gutter — two quadrilaterals and three rivets, seen from the
same overhead angle as the sand. This is the ladle from the reference: a bucket seen in
three quarters and **tipped over**, so the mouth is an **ellipse** rather than an edge, the
metal in it is a pool you look down into, and the depth comes from shading — a gradient
across the barrel, two bands round it, a lit near edge, a shadowed far one, a rim with a
highlight on its top arc, and a hot glow thrown onto the sand.

**The flat-art rule is relaxed here on purpose.** `MF.anvilScene` is flat fill and a dark
outline, and it says so at length — the anvil was cut back to that *because it was the only
rendered object on the site*. The user has now asked for this one to be rendered. It is one
object, in one room, and the anvil is not it.

The tip is **one transform on a static group**. Nothing in the ladle animates, so the
attribute is safe — §5g is about *animated* elements, where a CSS transform would replace
it. The pool and the stream animate their opacity only and carry no transform.

### 35b. The terms are the metal arriving

`(x + 2)` `×` `(x + 3)` fall **down the stream**, a beat apart, into the mold. They used to
be one line laid across the casting — the question printed over the shape that answers it.
Five tokens (a three-metal order) shrink to fit between the lip and the basin.

> **One keyframe for the whole life of a token: in, hold, out.** It was two animations, both
> filling `forwards` on the same property, and they spent the pour arguing about which owned
> the opacity — sampled at 0.82 a third of a second *after* the fade-out should have finished
> it. One animation is one delay and one answer, and it holds each term on screen for 1.4s
> instead of the 0.9 that survived the argument.

**Reduced motion keeps the stream up.** It used to be hidden — a stream frozen in mid-air
over a flat channel looked like a mistake. Coming off the lip of a tipped ladle it is a pour
held still, and the terms are *in* it, so hiding it would leave a reduced-motion student with
no sight of what went in.

> `mold` (119) asserts every token's centre falls **inside the stream's own box** and that
> together they spell what went in, over two pours — two brackets, and the five-token
> three-metal order that has to shrink. Measured as geometry, not presence: a token that
> says the right thing in the wrong place is the state this replaced, and a presence check
> would pass on it. It also requires the pour to come out of a vessel with a mouth. Control:
> put the terms back over the casting and it reports 3 of 3 and 5 of 5 outside the stream.
>
> The check needed **its own stage** — `getBBox` is geometry and geometry needs layout. The
> mold checks above it read attributes off a detached scene, which is why they never needed
> one, and why none of them could have caught text in the wrong place.

## 36. The anvil and the hammer are rendered again

*User, 2026-09-05: "Now make the anvil and hammer look 3D like the ladle."*

This is a reversal of a decision, and the original reason is why it is the right one.
`MF.anvilScene` was cut back to flat fill and a dark outline — and the stated reason was
never that flat is better. It was that the anvil was **the only rendered object on the
site** and read as a photograph pasted into a drawing. The ladle (§35) is rendered now,
and it is the other half of the same act — metal poured, metal broken — so the anvil being
flat made it the odd one out in the other direction.

**What came back is the shading. What did not is the clutter.** Eight gradients across the
planes that face different ways, a specular along the face's top edge and a dark line where
it overhangs the waist, wood grain on the stump and the shadow the anvil casts onto it, the
haft shaded across as a cylinder, a bevel on the head and a polished striking face. No tongs
leaning on the stump, no swarf across the floor, no bolt heads — the silhouette is the one
it has had since it was flattened.

**Every coordinate is the same.** The hammer's pivot at (176,10), the face at y=154 running
x 112..262, the horn, the hardy hole. The ore's mount is pinned to the face in percentages
of this viewBox and the swing animations to the rest, so a number moved here is a lump
floating off the anvil. Nothing moved, and `swing` (22) and `animmount` (30) both still pass
— including that `.hammerswing` carries no transform attribute of its own (§5g).

Measured after: the ore's label on the anvil reads **4.98:1**, unchanged, because it is
measured against `MF.oreRock`'s own flat polygon and not against the anvil behind it.

## 37. The hammer comes down in front of the stone

*User, 2026-09-05: "On the breaking floor, the hammer animation needs to be in front of the
ore but behind the sound text."*

The hammer was drawn inside the scene's own `<svg>`, which put it **under** the stone. The
ore is HTML pinned over the drawing (§26b — an SVG `<text>` cannot carry a lens's coloured
spans), and HTML with a z-index always paints over the `<svg>` it sits on. So the head came
down *behind* the lump it was hitting.

It has its own layer now: a second `<svg>` absolutely over the first, **sharing its viewBox**,
so `transform-origin:176px 10px` is still the same point and the arc does not move by a pixel.

Back to front:

| | |
|---|---|
| the anvil, the stump, the ground | the scene `<svg>` |
| the stone | `.anvilmount`, z 2 |
| the hammer | `.hammerlayer`, z 3 |
| THUD / CLANG | `.thud`, z 4 |

**And the layer is inert to the mouse.** It is a full-size sheet sitting directly over the
one control on this floor — the same fault class as the pick eating every click on the seam,
introduced fresh by putting the hammer on top. Verified by hit test: `elementFromPoint` at the
centre of the stone returns `.orelab`, inside the ore.

> `swing` (26) asserts the order — ore **behind** hammer **behind** burst, stated as an order
> rather than as three numbers, so renumbering the stack is free and inverting it is not — and
> that nothing in the hammer layer is live to the mouse. Controls: put the hammer back behind
> the stone, and make the layer take clicks. Both fail by name.

## 38. The Stamp Mill: a lump on a bench, a press over it, and a lever

*User, 2026-09-05: "The Stamp floor needs updating. First remove nothing to play text. The
Ore needs to sit on a bench and have a press come on it. While the pedagogical focus is
teaching the factors of numbers 1-100. It needs to be more interactive as if the student is
pressing a lever to stamp the ore."*

### 38a. What went

A slider, a number box, and **a row of buttons listing every factor pair of the number** —
which is the pair scanner the mine took off the face for doing the looking for you (§10a),
sitting in a teaching room doing it for free. Picking one drew a static tree. Nothing was
pressed, nothing moved, and the panel was labelled **"PLAY — NOTHING TO ANSWER"**: a sign on
a room saying there is nothing in it, which was true of the room it was labelling.

### 38b. What is here

**The mine's own loop, in numbers 2–100.** A lump sits on the bench under the press. You name
a whole number you think divides it and **pull the lever**. The press comes down and it splits,
or the stamp bounces and says what the remainder was. What comes off stays on the bench and can
be stamped again. When nothing left will split, every piece is an ingot and that row is every
metal in the number.

That is the same act as the breaking floor, which is the whole thesis: breaking a number and
breaking a trinomial are one job (§8a). The stone is `MF.oreRock` again — HTML pinned over the
drawing, for the same reason the anvil's is (§26b).

**Nothing tells you whether it will split.** The stamp does. A bounce names the remainder
— *"7 does not divide 72 — 72 ÷ 7 leaves a remainder of 2"* — which describes the number,
not the student.

> `schema` (190) drives the mill the way a student does, over eight numbers chosen for shape —
> a prime, a square, a prime cube, a highly composite one and both ends of the range. Two
> assertions: every split is a true division and the pieces left multiply back to what went in
> (checked against `primeFactors`, the engine, not against the room); and **a divisor that does
> not divide must bounce**, because a mill that splits on anything teaches that anything
> divides. Control: let the press split on any number and it reports both — *"stamping 36 down
> came to 2·36"* and *"the stamp split 36 on 7, which does not divide it"*.

**No room carries a door to the mine.** The buttons are gone from the Stamp Mill, the Casting Shed hub, all three shed rooms and the Forge (user, 2026-09-05) — the Forge's read "Back to the mine", which is the same route under another name. The masthead carries it on every page, and the surface keeps its own "Enter the mine" because that is the front door on the operation illustration rather than a footer. It is not a dead end: the masthead carries every screen on the site, so the way out is where it is on every other page rather than an extra door at the foot of this one.

> **And the sweep caught a colour on its first run.** `.millpiece.ore` shipped at `#8A7358`,
> which is **4.09:1** against the cream on it — and the file already had the answer written
> down from the yard's rough chips: `#7A6650` is 4.94. Same wall, same fix, found in seconds
> because it is measured rather than eyeballed.

## 39. The Words ends on what the miner did wrong

*User, 2026-09-05: "with the words, remove the reflection and replace with what did the
miner do wrong question."*

The reflection asked a student to put a pair from the table into their own words, and
nothing was read or kept — a fine thing to ask, and a hard thing to learn from on your own.
This asks the harder question: somebody has used the words **wrongly**, the working is on
the bench, and you have to say where it went off.

```
1  x² − 9                              the lump
2  1 and −9 share nothing but 1        checked for a common metal
3  so nothing comes out of it          the step that is wrong
4  → native metal                      racked as finished
```

**Error analysis is the right closer for this room.** Every other question here asks you to
pick the right name for a thing. This one shows a name applied to the wrong thing — and the
mistake is the one the room exists to prevent: reading *"nothing divides every term"* as
*"nothing comes apart"*. They are different claims, and their names are **common factor** and
**irreducible**.

It is described, not marked, like everything else: every option carries its own reading, and
`holds` marks the one the mathematics supports. The options go through `MF.spreadOptions`, so
the supported one does not sit in the same slot (§28-adjacent, and the reason for it).

> `MF.paintMiscut` carries the class `ask` as well as its own, so the `quiz` group's sweep —
> click every option, require each to say something back — covers it for free rather than
> needing a second copy of the same assertion. `quiz` 78 → 85.
>
> And the two facts it rests on are checked **separately** against the engine, because the
> whole question is that they are both true of one lump: `x² − 9` carries no common metal,
> **and** it comes apart anyway. `schema` follows the closer rather than the element — the
> property being protected never changed, which is that the room must not end on another of
> the recognition questions it is already full of. Control: remove the closer and it reports
> *"shed-words does not end on a what-went-wrong"*.
