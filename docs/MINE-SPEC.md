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
| **Deep Pick** | two x-ingots and a plain metal | — | three lumps a swing |
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
| 1 | Deep Pick | `12` | 2 · 2 · 3 — plain numbers, one repeated |
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
| 1 | Deep Pick | cutting at the face — it has no factoring move, and says so |
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

**So reach is a budget, and the `reach` group enforces it.** The bench (belt →
pieces → swing) and the craft floor (target → mold → slots → rack → pour) must each
fit inside one 800px screen, measured at two widths, with controls that must fail.

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
