# What the site is, right now
### The single place any brief, agent or session reads to find out what exists

**Last verified 2026-08-24** by `MF.validate()` run in a browser against this tree, by driving the seam's clicks by hand, and by walking a lump through assay → swing → glance-off → swing → yard through the real DOM. The last **screenshot** pass was 2026-08-22 — the 2026-08-24 pass measured geometry from the DOM instead, because the preview pane renders a `file://` page as a static snapshot and its pixels are not the live page.

---

## Why this file exists, and the hazard it carries

> **The agent briefs do not describe the build. They point here.**
> **This is the only document that states what exists. If a fact about the site appears anywhere else — a brief, a spec, a comment — it is a copy, and copies drift.**

**And this file is load-bearing, which is its own danger.** The 2026-08-18 cycle caught it asserting a protection the build did not have, and it then sat stale through the whole v1 rebuild. Every brief opens by reading it as fact, so a false line here produces clean passes that are indistinguishable from real ones. **Nobody owns whether this file is true.** That gap is standing and unclosed.

---

## The build

| | |
|---|---|
| **File** | **one** — `index.html`, ~4,400 lines, fully self-contained |
| **Screens** | **five** — surface, the Stamp Mill, the Casting Shed, the mine, the forge |
| **Layers** | **five**, all reachable from the first screen, none gated on anything |
| **Instruments** | **seven**, all made at the forge, none granted |
| **Validation** | `MF.validate()` → **8,481 checks / 23 groups / 0 errors**, two controls that must fail, and do |

> **A check is only as wide as the space it sweeps.** The `truthy` group reported 0 errors across 642 checks while **1,970 Decimal Dial states printed a falsehood**, because it tested each lump's original integer coefficients and never nudged `c` — the one thing the dial exists to do. It now sweeps every slider position the control can reach (3,287 checks). Ask of any green result: *what did it not look at?*
| **Runtime** | Zero dependencies, no build step, no network requests, no storage, runs from `file://` |

## The metaphor, and it is load-bearing

**Ore** is any expression. **The mine breaks and the forge smelts**, and the two acts never mix (`MINE-SPEC.md` §11).

| | THE MINE | THE FORGE |
|---|---|---|
| imagery | pick, rock, dust, anvil | furnace, crucible, molten stream, mold |
| the act | **break** ore until what is left will not break | **pour** metal into a mold |
| the maths | **factoring** | **distributing** |
| the signal | the seam runs, or the pick glances off | the casting is sound, or it is scrap |

What will not break further is **native metal** — a prime, or a polynomial no whole-number seam runs through, *and they are the same object*. It is not a lump that refused to break. It is **already an element**.

## The loop

**ASSAY → BREAK, and BREAK again.**

- **Assay** is a gate: `display:none` on stage 2 until the seam is called correctly. Verified on a freshly built, never-clicked, detached task.
- **Break** is one swing at a time. You name **one** thing that is in the rock; the seam runs and the lump comes apart into that factor and the remainder, or the hammer glances off and the rock is described. **Both pieces land on the floor, and anything still carrying a seam goes back under the hammer.**

**The lump is drawn on an anvil.** A **London-pattern anvil on a stump** — horn, step, polished face, hardy and pritchel holes, waisted body, feet, iron banding, a pair of tongs leaning on it — with the lump sitting on the face where the hammer lands and its expression cut into the stone.

**The hammer stands upright over the work with its striking face pointing down at it** — haft vertical with a bound grip, a block head with the eye and its wedge, a flared bright face, a cross-peen off the back. It is part of the drawing, not a box floating over it, which is what let it become the shape a hammer actually is.

**You type what to cut the head to**, in a bar under the picture: `( [ ] x + [ ] )`.

| | |
|---|---|
| **x-part empty** | a single x — `MF.readPickM`, and `x` / `-x` are read too |
| **x-part `0`** | no x at all, so you are taking out a plain metal |
| **number empty** | no number on the end, so something like `3x` |

> A drag-a-tile-into-the-head version came and went. It made the head a wide plate carrying two sign toggles, two number boxes and two remove buttons — it stopped looking like a hammer and it overflowed the column. **What survived is the part that was the actual fix rather than the mechanism:** an empty x-part means **one**, not nought, and the bar echoes **"the hammer is cut to (x + 6)"** before you swing. Those are what stop a cleared box swinging `6` at a lump you meant to hit with `(x + 6)` — reported as a maths error, and it was an input error (`VERIFICATION.md` §47).

**The swing is a true arc and it takes a full three seconds.** One move with four beats: the weight shifts, the hammer goes **up**, it hangs at the top, and then it comes down. It rests at **−62°** — held up and back, clear of the work — winds up to −84° over the first 1,380ms, then strikes through to +6° at 1,740ms and rests on the face before lifting. Everything on the beat shares the same 3000ms clock and the same 58%: the anvil shudder, the rock squash, the burst and the new pieces all land together.

> **The resting angle used to cover the maths.** At −20° the head overlapped the expression cut into the ore by **49×10px**, and the expression is 11px tall — it was hiding the thing the student is there to read. Measured against the label’s own box, it clears from −55°; it rests at −62° with 7px to spare.

The impact throws a comic burst — **THUD!** when the seam runs, **CLANG!** when it glances and the hammer comes straight back off the face. Under `prefers-reduced-motion` the burst still reports the hit; it just does not perform.

```
60             -> 6 | 10  -> 2 | 3, 5 | 2
2x² + 10x + 12 -> 2 | x² + 5x + 6 -> (x + 2) | (x + 3)
```

That is the payoff: prime factorisation and polynomial factoring are not two methods sharing a word, they are **one repeated act**.

- **There are two correctness signals, one per place, and both are physical.** In the mine the rock came apart or it did not; in the forge the casting is sound or it is scrap, naming which term disagrees. Neither is a mark, and `MF.breakOff` multiplies every split back together before handing it over.

## The Stamp Mill, and the two teaching rooms

The **Smelting House is the Stamp Mill** — the mine does not smelt any more, and a stamp mill is the real building that breaks ore. Its room is a **battery of five iron stamps** in a timber frame, lifted by cams on a shaft and dropped into mortar boxes, falling out of step with each other. That machine *is* the workshop's lesson standing in the corner: big things come apart into smaller ones, over and over, until what is left will not come apart.

The **Casting Shed** is unchanged — it still teaches the mold, which is still the forge's move.

> The `doors` group hardcoded `/Smelt/i` for this building. It moved with the name **deliberately** rather than being quietly deleted, and it is `/Stamp|Mill|Crush|Break/i` now — proved by renaming the door to "The Tea Room" and watching it fire.

## The seam

The face is **2280px of rock**, several screens wide, scanned by dragging, scrolling or the scan buttons, with a position indicator. Fifteen lumps spread down its length, refilling where they were taken. You inspect a lump — what it is, how many veins run through it, what sits in front of the x² — and it says plainly that *what kind of seam runs through it is not visible from here*, which is the assay's job. Then the pick swings, lands, shatters it, and the lump drops into the cart.

**Every click on a lump is answered where the mouse is.** The rock takes a knock, chips come off it, a ring goes out from the point of contact and the pick tips in — 300ms and local, deliberately not the 720ms swing that means *breaking*. This holds for the three clicks that used to be silent: the lump already picked out (which repainted the face to an identical picture), any lump at all during a swing (which answers "not now" and changes nothing), and the cart lump already on the bench. The `knock` group in `MF.validate` asserts the reaction in the DOM — 11 checks, with a control that unwires the reaction and must be caught.

**And the reason none of it fired at first: the pick was eating the click.** It follows the cursor with its *handle* under the pointer and is painted after the rocks, so hit-testing the centre of a lump returned the pick's handle, head and collar — the rock was never reached. The same fault sat on the surface, where Mr Factor, the portal's dark mouth and the out-going cart are all painted after the hotspots: **the blackest, most mine-looking part of the mine was the one place a click did nothing.** Both are now stated as a class — *in a scene, only a door takes a hit; on the face, only a lump does; everything else is a picture* — and swept by the `overlay` group (56 checks, control: put the pick back in front of the mouse, and it is caught).

**The mine's hotspot is now the bluff, not a box below it.** It was `712,300 152×100`, starting 54 units below the top of the rock, so the arch, the timber head and the nameplate reading *The Mine* were all outside the target. It is now `712,244 162×132`, matching the graphic's drawn bounds. **The other three buildings' hotspots have not been re-measured against their graphics** — only the mine was.

**Digging is decoupled from breaking.** You may descend to the deepest layer and hoard raw ore having broken nothing.

## The yard: a heap and a rack

The yard takes **both**. Metal broken all the way down to an element goes on **the rack**, and that is what the forge spends. Ore tipped there still carrying a seam goes on **the heap** — nothing is destroyed, nothing is counted against you, and it is there when you come back for it. Leaving a lump half-broken has a visible consequence and still no mark anywhere.

**It is drawn as a place**: a paling fence along the back with a lit lamp on a post, dirt below it with barrow ruts, metal racked on timber and rock heaped on the ground in the same knocked-corner silhouette the seam uses. The fence-and-lamp band is a **fixed 76px, sliced and pinned to the right edge** — filling the panel with `preserveAspectRatio:none` smeared the palings over 438px and rendered the lamp as an ellipse. Verified round and on screen at column widths 240 → 460.

**Rock goes back under the pick** by clicking it *or* dragging it onto the floor — the drag is built on pointer events (there is no HTML5 drag-and-drop anywhere in this file) and a movement under 5px is not a drag at all, so the click still lands. It routes through the cart, because the cart is the one way anything reaches the anvil.

> **The scenery is inert.** `pointer-events:none` on the yard's svg, asserted by the `overlay` group with its own control — the same fault class that had the pick eating every click on the seam (`VERIFICATION.md` §43).

## The belt, and holding an instrument to a lump

The belt is **a leather strap with the instruments hanging in loops**, not a list of cards. You take one off it and use it.

**The belt hangs inside the floorbox, directly above the pieces it acts on.** It was in the yard column on the far side of the page, so the drag crossed the whole screen — and under 1080px the columns stack, so it was a *scroll* away, and you cannot scroll while you are holding something. The furthest drag is now **94px**, and the belt and every piece are on screen together at 1280px and at 760px. There is exactly one belt: a second copy in the yard column would be the one a student reached for, and it was the far one.

**Every piece on the breaking floor has a slot.** Drag a tool onto the piece, or open its slot and choose — both routes reach the same place, because a drag with no click path is a control half the users cannot reach. The slot lights up with whatever is in it and keeps showing it, and a panel rises with that instrument's reading.

**The panel is a real dialog:** `role="dialog"`, `aria-modal`, focus moved in, **Tab trapped**, Escape closes, focus handed back to the slot it came from, and nothing left in the DOM — a scrim left behind covers the page and makes every control dead, which is §43's fault class page-wide. One function builds it for all three routes (tool-on-lump, tool explained off the belt, empty slot); three copies of the focus wiring was three chances to lose the trap.

**Every order names one exact object, and the objects climb with the tool.**

The board used to ask for a *shape* — "three pure ingots", "any four metals at all" — and any three primes filled it. That taught nothing about what a factorisation is, because there was no particular thing to hit: 2·3·5 and 7·11·13 were both accepted. An order now names one object and the casting must come out as **that object, exactly**. Finding which metals multiply to `6x² + 7x − 3` *is* factoring, run backwards, with a definite answer.

`rank` runs 1–7, ordered by how much the instrument does for you when you are getting metal out of rock, and the object it is cast from gets harder in step:

| rank | tool | cast | from | held to a lump, it |
|---|---|---|---|---|
| 1 | **Deep Pick** | `12` | 2 · 2 · 3 | says plainly that it works at the seam, not on the floor |
| 2 | **Pit Lantern** | `30` | 2 · 3 · 5 | says whether a seam still runs through it. Never says along what. |
| 3 | **Steel Pick** | `3x + 12` | 3 · (x+4) | rips the common metal out in one blow, and touches nothing else |
| 4 | **Decimal Dial** | `x² + 3x + 2` | (x+1)(x+2) | shows why nothing will come out, when nothing will |
| 5 | **Exponent Rail** | `x² + 8x + 16` | (x+4)(x+4) | shows where its x² can have come from |
| 6 | **Core Drill** | `x² − 25` | (x+5)(x−5) | lists every pair that could run through it, and marks none |
| 7 | **Powered Auger** | `6x² + 7x − 3` | (2x+3)(3x−1) | reads what the x-part and the number *have* to divide before a seam can run; traces the division on a swing that lands |

Plain numbers → a metal spread over a bracket → two brackets → a square → a twin seam → loaded at both ends. **The target is on the order card and again, large, on the open mold**, and a casting that misses is described term by term — *"the x² came out 2 and the order wants 6"* — exactly as the mine describes a pick that glanced off.

> **A precise target can become an unreachable one, so it is checked.** The `forge` group (44) stocks a yard from 70 real smelts and asserts, for every order: some set of metals on it casts the object; those metals are judged sound; **one metal nudged by one is not**; and the rejection says where it missed. It also asserts the ranks run 1..7 with no ties and that no two orders are cut for the same object — a board that claims an escalation has to have one. Controls: an unreachable target, duplicate targets, tied ranks, a judge that accepts anything, and a judge that rejects without explaining — all five caught.

**The ladder buys reach and sight, never an answer.** The Steel Pick only takes the metal every term is already carrying — a move the student demonstrated at the forge to earn it — and the Auger narrows where to look without naming anything. The hand pick is free and always in your hands; the `nogate` group still walks every layer with an empty yard and no tools.

> **An instrument may say what is there, never what to swing.** The `sheet` group asserts the Lantern's reading never contains the factorisation, with a control that prints it and must be caught. **The pair scanner is no longer free** — it is the Drill's reading now, the same move §10a made with the casting preview, and it also stopped the swing button falling below the fold.

## The forge: orders on the left, the yard and the mold on the right

**The yard is on screen from the moment you walk in.** It used to appear only *inside* the mold, after an order had already been chosen — so a student picked a tool with no idea what metal they were holding and found out afterwards. What you own is the whole reason one order is possible and another is not, so it sits beside the board while you choose.

- **Left — the order board.** Seven orders as cards on a board, each showing whether it is in your hands, whether you have the metal, or whether it needs more. **Every one opens**, including the ones you cannot fill: a disabled button explains nothing, and an open mold can say what it is waiting for, which is what sends you back down the shaft knowing what to look for. Clicking one you have already made explains it instead of remaking it.
- **Right, top — the yard**, drawn as the same place it is in the mine. Metal on the rack is **clickable and goes straight into the mold**; metal already in the mold greys out on the rack. Clicking a metal with no order open says so rather than doing nothing.
- **Right, below — the craft floor.** The mold, its slots, the pour, and the casting. Cold and plainly labelled until an order is picked.

**The heap is drawn here and is deliberately not spendable.** The forge takes native metal; rock still carrying a seam is no use until it has been broken. It is not a button, because a control that looks live and refuses is worse than a thing that plainly is not one — and seeing it sitting there unusable is what sends a student back down. That is the sink working.

On one column the **work comes first** and the seven-item board follows it, the same rule the mine follows — verified stacked at 760px with the yard above the board.

**The forge repaints in place.** Every click in it used to call `MF.go('forge')`, which rebuilds the screen, moves focus, restarts the arrival wipe and scrolls to the top — so dropping one metal threw the page back to the masthead, and choosing metals and pouring meant four jumps. `MF.paintForge()` now repaints the two columns only, guarded on `isConnected` exactly as `paintMine` is. The one scroll left is the casting after a pour, `block:'nearest'`, and only when it lands below the fold. Verified across seven interactions from a page parked at 420px: none moved it.

> **A denominator that had been silently wrong:** the `contrast` group mounted the forge **cold**, so the crucible, the filled and empty slots and the not-on-the-rack warning were never measured. It now mounts it with a mold open and something in it. Verified by counting the probe's contents rather than trusting the total, which went *down* — the cold plate left the sweep as the mold entered it.

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

**Three of the five screens did not open at all, and no instrument noticed.**
`MF.roomScene` referenced `outMount`, a symbol declared inside `MF.surfaceScene`
— an edit had matched the wrong one of two identically-shaped scene builders,
for the **third** time in this project. `roomScene` threw on every call, so both
workshops and the forge rendered nothing but "This screen did not build", and
the homepage cart vanished with it.

**It was reported as two faults, and was one.** The Smelting House *is* the ore
workshop: its page is where ore is selectable. "Ores not selectable" and
"workshop pages not accessible" were the same broken screen seen twice. Ore
selection on the mine seam was measured and found working in every path — clean,
after a drag, refused mid-swing by design, and working again after — so nothing
was changed there. **A reported symptom is a place to look, not a diagnosis.**

Two checks now exist so this cannot ship silently again, both proven by
reintroducing the exact fault: **`screens`**, which builds every entry in
`MF.SCREENS` — enumerated from the registry, never a written list — and fails on
a throw or a near-empty surface; and a guard in **`animmount`**, which used to
construct the scenes in a bare array literal, so a throwing builder **killed
`MF.validate` outright** rather than reporting. An instrument that dies on the
defect it exists to catch is worse than a silent one: the crash reads as the
tool being broken.


**The forge phase.** The reward moment was invisible — a successful pour set the tool, and the `&& !hasTool` guard then stopped painting the mold that held the casting. The Shifter's rail was built at paint time and showed the slot values from *before* the student typed. The layer-1 depth line measured 3.82:1 — it passed on the four dark layers and failed on the lightest rock.

**The seam phase.** The single-column grid used `1fr`, whose automatic minimum grows to fit its widest child, so the 2280px seam stretched the whole page sideways instead of scrolling. Caught only because the preview pane had collapsed to 279px — the measurement hazard `VERIFICATION` §2 warns about, exposing a real bug.

**The visual pass.** The ore cart escaped into the sky and the headframe wheel drifted off its tower: a CSS `transform` animation *replaces* the SVG `transform` attribute rather than composing with it. Visible only in a screenshot.

**From the 2026-08-18 oversight cycle**, all fixed: the live casting preview was blank on every entry to the crucible (looked up by `id` while the bench was detached); typing a letter left the literal string `NaN` in the student's box; every irreducible polynomial collapsed into one yard chip; two of three gear announcements were written into a panel the next repaint destroyed; and the decimal dial printed the finished factorisation directly above the pour button.

## Findings that were instrument error, and were correctly NOT "fixed"

- A gate appeared to leak; the page held stale state from a sweep that had clicked every option.
- Eight contrast failures on gradient backgrounds — the checker walked past the gradient to the body colour. Resolving the real stops gave zero failures.
- A 375px capture appeared to clip text; at a true 375px viewport nothing clipped.
- A source read reported depth 5 printing its split at load; the rendered box showed the uncut lump.
