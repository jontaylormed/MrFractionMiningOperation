# What the site is, right now
### The single place any brief, agent or session reads to find out what exists

**Last verified 2026-09-05** by `MF.validate()` in a browser over a **local HTTP server** at **380, 560, 994 and 1250px**, by `MF.playthrough(4)` and `(5)`, and by hand-driven contrast sweeps of **145 mine states and 146 forge/workshop states at each of those four widths — 1,164 renders** (`VERIFICATION.md` §67, §68). **`file://` could not be used:** the preview pane renders it as a static snapshot and `MF` never runs, so nothing on the page can be exercised at all.

---

## Why this file exists, and the hazard it carries

> **The agent briefs do not describe the build. They point here.**
> **This is the only document that states what exists. If a fact about the site appears anywhere else — a brief, a spec, a comment — it is a copy, and copies drift.**

**And this file is load-bearing, which is its own danger.** The 2026-08-18 cycle caught it asserting a protection the build did not have, and it then sat stale through the whole v1 rebuild. Every brief opens by reading it as fact, so a false line here produces clean passes that are indistinguishable from real ones. **Nobody owns whether this file is true.** That gap is standing and unclosed.

---

## The build

| | |
|---|---|
| **File** | **one** — `index.html`, ~9,000 lines, fully self-contained |
| **Screens** | **eight** — surface, the Stamp Mill, the Casting Shed and its three workshops, the mine, the forge |
| **Layers** | **five**, all reachable from the first screen, none gated on anything |
| **Instruments** | **seven**, all made at the forge, none granted |
| **Validation** | `MF.validate()` → **12,308 checks / 40 groups / 0 errors**, two controls that must fail, and do — **run it at the width you ship from**, because `layout`, `reach`, `hollow` and `cartdraw` measure the live viewport and report it (`VERIFICATION.md` §61, §63, §65). Verified at **380×780, 560×760, 994×700 and 1250×900** |

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

**BREAK, and BREAK again — with the assay offered alongside, never in front.**

- **Assay is not a gate and has not been since `MINE-SPEC.md` §15a.** This file said `display:none` on stage 2 until the seam is called correctly, which stopped being true and stayed written down — the exact drift the warning at the top of this file describes. A freshly built, never-clicked bench has **live swing controls**, and the `nogate` group asserts it with a control that restores the gate. The offer sits in the bench's top-right corner; taking it opens the five choices, and a call once made settles into the body with its reason and stays.
- **Break** is one swing at a time. You name **one** thing that is in the rock; the seam runs and the lump comes apart into that factor and the remainder, or the hammer glances off and the rock is described. **Both pieces land on the floor, and anything still carrying a seam goes back under the hammer.**

**The lump is drawn on an anvil, and the anvil is drawn flat.** A London-pattern anvil on a stump — horn, step, face, hardy hole, waisted body — with the lump on the face where the hammer lands and its expression cut into the stone. **Four flat planes and a dark outline**, the same way the valley, the yard, the stamp mill and the gallery wall six inches above it are drawn.

> It used to be the only **rendered** object on the site: seven gradients, a metallic bevel on every plane, tongs leaning on the stump, bolt heads, grain lines, chips of swarf across the floor. Against a build that is flat fill and outline everywhere else it read as a photograph pasted into a drawing. **Same silhouette, same coordinates** — the hammer's pivot, the rock's seat on the face and the shatter animation are all pinned to those numbers and none of them moved. What went is the shading and the clutter. The rock keeps **one** mark on it: the orange seam, which is the only mark that means anything.

**The hammer stands upright over the work with its striking face pointing down at it** — vertical haft, a block head with the eye through it, a flared light face, a cross-peen off the back. It is part of the drawing, not a box floating over it, which is what let it become the shape a hammer actually is.

**You type what to cut the head to**, in a bar under the picture: `( [ ] x + [ ] )`.

| | |
|---|---|
| **x-part empty** | a single x — `MF.readPickM`, and `x` / `-x` are read too |
| **x-part `0`** | no x at all, so you are taking out a plain metal |
| **number empty** | no number on the end, so something like `3x` |

> A drag-a-tile-into-the-head version came and went. It made the head a wide plate carrying two sign toggles, two number boxes and two remove buttons — it stopped looking like a hammer and it overflowed the column. **What survived is the part that was the actual fix rather than the mechanism:** an empty x-part means **one**, not nought, and the bar echoes **"the hammer is cut to (x + 6)"** before you swing. Those are what stop a cleared box swinging `6` at a lump you meant to hit with `(x + 6)` — reported as a maths error, and it was an input error (`VERIFICATION.md` §47).

**The swing is a true arc and it takes a full three seconds.** One move with four beats: the weight shifts, the hammer goes **up**, it hangs at the top, and then it comes down. It rests at **−62°** — held up and back, clear of the work — winds up to −84° over the first 1,380ms, then strikes through to +6° at 1,740ms and rests on the face before lifting. Everything on the beat shares the same 3000ms clock and the same 58%: the anvil shudder, the rock squash, the burst and the new pieces all land together.

> **The resting angle used to cover the maths.** At −20° the head overlapped the expression cut into the ore by **49×10px**, and the expression is 11px tall — it was hiding the thing the student is there to read. Measured against the label’s own box, it clears from −55°; it rests at −62° with 7px to spare.

The impact throws a comic burst — **THUD!** when the seam runs, **CLANG!** when it glances and the hammer comes straight back off the face — **at the anvil, where the blow is**. On the **finishing blow** the hammer bar has gone, so the anvil is drawn once more with the piece that was struck, the hammer comes down on it, and **the last piece shatters and leaves the anvil bare**: there is nothing left to work, and ore still lying there would say the opposite. Under `prefers-reduced-motion` the burst still reports the hit and the last piece is still gone; neither performs.

**And the copy under the bare anvil is readable now.** The note that tells a student the lump is finished — *"not a failure to get further into it"* — was **`#E4D5BB` on `#F1F8F5`, 1.34:1**. `.note` and its three variants each lay down a near-white card and none of them set a `color`, so a note dropped in the breaking floor's dark panel kept its white card and inherited the panel's cream ink. The ink is set on `.note` itself, because **seventeen** notes are built in this file and any of them can land on a dark surface. The words **"native metal"** on a finished piece went the same way at **3.2:1**, and are now 4.98.

> **Neither had ever been rendered by anything.** The finished bench exists only once every piece on the floor is native, and **nothing in this build had ever broken a lump all the way down**. `mine-done` does — through `MF.swing`, the same engine the student swings, not by handing `paintBreak` a floor it could never reach — and it **asserts that it got there**, so a pass that mounts nothing reports that rather than reporting clean (`VERIFICATION.md` §66).

**The burst word is dark and its halo is light.** It was cream lettering with a dark outline, painted on the star — **1.30:1** for THUD! on gold and **1.08:1** for CLANG! on silver, the two worst readings on the site. The fill and the stroke have swapped roles: near-black letters against **11.98 / 7.91 / 4.52** and **14.8 / 8.81 / 4.28** across each star's stops.

> **The contrast sweep read it as 14.9:1 and had done for weeks.** The star is an absolutely-positioned *sibling* of the word, not an ancestor, so the backdrop walker climbed straight past it to the dark panel behind them both. `_backdrops` checks for a painted, positioned sibling covering the text before it walks the tree, and the burst is now mounted on purpose as `mine-blow` — it exists only during a swing, rests at `opacity:0`, and animations are paused before anything measures, so it was unreachable three separate ways (`VERIFICATION.md` §64).

```
60             -> 6 | 10  -> 2 | 3, 5 | 2
2x² + 10x + 12 -> 2 | x² + 5x + 6 -> (x + 2) | (x + 3)
```

That is the payoff: prime factorisation and polynomial factoring are not two methods sharing a word, they are **one repeated act**.

- **There are two correctness signals, one per place, and both are physical.** In the mine the rock came apart or it did not; in the forge the casting is sound or it is scrap, naming which term disagrees. Neither is a mark, and `MF.breakOff` multiplies every split back together before handing it over.

## The Stamp Mill, and the two teaching rooms

The **Smelting House is the Stamp Mill** — the mine does not smelt any more, and a stamp mill is the real building that breaks ore. Its room is a **battery of five iron stamps** in a timber frame, lifted by cams on a shaft and dropped into mortar boxes, falling out of step with each other. That machine *is* the workshop's lesson standing in the corner: big things come apart into smaller ones, over and over, until what is left will not come apart.

The **Casting Shed is an introduction, and behind it are three workshops.** It used to be one page with three lessons stacked down it, and the third was a screen and a half below the fold.

The Shed itself says what the building is for and what a mold does — an introduction that only lists doors is a menu — and then offers three cards. The three are **pages of the Casting Shed, not places of their own**: each carries a back link, the nav keeps the Casting Shed lit while you are in one, and each ends with the other two and a way into the mine.

| | teaches | its illustration |
|---|---|---|
| **The Mold** | distributing — the slider player, and one question that runs it backwards | two metals run down separate channels into a mold that fills, and one bar is lifted out |
| **The Words** | the translation table, mining word → mathematical term | two columns facing each other, a light travelling the bar that joins each pair |
| **The Methods** | the seven schemas, readable whether or not you own the tool | a lamp climbing seven rungs against ore that grows |

**Not one word is inside those SVGs.** `roomScene` has carried that rule since the rooms shipped and `shedArt` broke it on its first pass: SVG `<text>` paints with `fill` and inherits the CSS `color` a contrast sweep measures, so **ten labels failed at 1.06:1** — real arithmetic about nothing you can see. Every label is an HTML span pinned over the drawing in percentages, which is measurable, selectable and translatable. Under `prefers-reduced-motion` each illustration stops on a frame that still reads, stated explicitly, because the global rule collapses every duration to .001s and lands each animation on its **last** keyframe — which for the running metal is `opacity:0`.

**Every workshop ends with questions, and not one of them is marked.** Three or four each: recognition questions where **every option carries its own description**, so choosing the one the mathematics does not support gets a description of *that lump* rather than a buzzer — plus one typed question per room that goes to `MF.breakOff` or `ingotProduct`. The Words' typed question has three answers rather than two: 6 is the greatest, **3 divides both and is not the greatest** — *"the seam is real and the hammer would land, but 6 also divides both"* — and 5 glances off.

> **The `quiz` group (60) exists because a described question can quietly describe the wrong thing**, with no verdict on screen to contradict it. The fact under each option is written in `MF.QUIZ_CLAIMS` as an **engine call** and verified; every option is clicked and must say something back; every typed question is driven with a right and a wrong answer and must not print the same sentence to both. Controls: a claim the engine contradicts, an option with nothing to say, a typed question not wired to the engine, and a workshop that asks nothing — all four caught.

> The building **keeps its name**. The `doors` assertion `/Cast|Mold/` did not move, unlike the Stamp Mill's, because nothing about what this room is called changed.

> The `doors` group hardcoded `/Smelt/i` for this building. It moved with the name **deliberately** rather than being quietly deleted, and it is `/Stamp|Mill|Crush|Break/i` now — proved by renaming the door to "The Tea Room" and watching it fire.

## The surface, and the day that turns over it

**A full day takes four minutes**, on one clock **belonging to the session rather than to the scene**, and every part of it is a phase of the same turn:

| | | |
|---|---|---|
| **0s** | morning | the sun clears the eastern hills, the dawn sky is up |
| **60s** | noon | sun overhead, sky at its bluest, moon under the ground |
| **120s** | dusk | sun setting west, the sky burns |
| **180s** | midnight | moon overhead, stars out, the whole site goes dark |

The sky is **four tinted sheets cross-fading** over the base gradient — you cannot animate the stops of a gradient, so you fade whole skies instead. The sun and the moon ride **one circle whose centre sits on the horizon** at `(450,310)`, which is what puts each of them up for exactly half the turn; drop the centre lower and the sun is only out for a third of the day. They rise and set **behind the hills**, which are drawn after them. Night falls on the **whole site**, not just the sky — the darkening rect is appended last, over the buildings and the cart, because a night sky above a daylit yard reads as a mistake. Windows and lanterns only earn their light after dark.

**The day does not restart when you come back to it.** `MF.go` rebuilds a screen from nothing on every arrival and a CSS animation starts at zero, so the surface used to open at dawn every time — mine, forge, surface, and the sun was back on the eastern hills whatever the session clock said. One start time is taken when the file loads (`MF._dayT0`), and `MF.syncDay` gives every part of the sky a **negative `animation-delay`** equal to how far through the four minutes we are, which drops it into the cycle already running. No timers, nothing to keep in sync, and it is correct even for a scene built and never mounted.

Under `prefers-reduced-motion` the day stops at noon rather than flickering through four skies.

**The windmill's bottom windows no longer touch its door.** They ended at y=174, which is exactly where the door's arch begins, and sat over the doorway's own width — two openings sharing an edge read as one hole in the wall. They are at y=148 now, ending seven clear of the arch, and spread either side of the doorway.

**Every light on the site answers the clock** — **twenty-three** of them, in two ranges, because a lamp and the light it throws are not the same thing:

| | |
|---|---|
| **`sc-lit`** | the *source* — lantern glass, a furnace mouth, a lit window. Never goes out, only gets stronger: **0.36 at noon → 0.99 at midnight**. |
| **`sc-glow`** | the light *cast* — a halo, a pool on the ground. All but nothing by day, unmistakable after dark: **0.03 → 0.92**. |

**And every named source is wired, including two that never were.** The windmill's four windows, **both** of the Stamp Mill's, **both** of the Casting Shed's, the furnace, the lanterns, and — for the first time — **the miner's helmet lamp**. The helmet was the one light a student identifies with and the only one on the site that never changed; the second window on each workshop was a dead rect that stayed dark through midnight while the one beside it burned. `MF.art` takes an options argument for it, and **only the surface instance asks**: `MF.syncDay` runs on that scene alone, so a lit Mr Factor anywhere else would animate the day from dawn whatever the session clock said.

> **THE NIGHT WAS CANCELLING THE LIGHTS, and turning them up could not fix it.** `.sc-night` is a `mix-blend-mode:multiply` rect over the whole site, so it took every lamp down with the hillside — raising the keyframes made the sources brighter and the scene no more legible. The halos are painted **after** the night rect, in a `screen`-blended layer that can only ever *add*. The night still falls on the whole operation; the lights now cut holes in it. One list of `[x, y, radius]` in scene coordinates, written beside the source each belongs to.

**The furnace is built like a lantern now.** It was an orange arch the same colour as the wall it was cut into, with a flat ellipse on the ground — the brightest thing on the site drawn as the dimmest. It has a dark mouth behind it so the fire has something to be brighter *than*, a flickering body, a white-hot core, and a wide halo in the light layer.

> **The level goes on a wrapper, not on the flickering shape.** `.sc-lamp` already animates opacity at 3.2s, and **two animations cannot share one property**: the later rule wins outright and the other silently does nothing. `.sc-lamp` is declared below the level classes, so it was cancelling the day/night level on **five of the nine lamps** — every one a student would call a lamp — and nothing said a word. Nested, the two opacities multiply.

> **No source may be capped below full, either.** A window pinned at `opacity:.55` can never be brighter than half lit however far the ramp climbs, which left the level only the top half of its range — the windmill's windows shipped that way. The `surface` group (58) asserts it, along with a floor on how many sources are wired at all, so a light added to the scene and left off the clock fails the build. Controls: the helmet unwired, and a window pinned back to .55 — both caught.

**All three buildings have tiled roofs and rain gutters**, drawn by one module-scope `tiledRoof` — the Stamp Mill in clay pantiles, the Casting Shed in slate, the Forge in warm pantiles. Each gets courses of tiles offset row to row so no joint runs, a ridge cap over the apex, a fascia board, and a **gutter**: a trough along the eaves with its inside in shadow, brackets under it, a downpipe strapped to the wall and a shoe at the foot throwing the water clear.

They were three flat coloured triangles before. The Forge had seven rake lines drawn from eaves to ridge — a hint at a roof rather than a roof — and it was the only one of the three with even that.

> **The tiles are clipped to the pitch.** Courses are laid as full-width rows across the roof's bounding box and cut to the triangle, so they narrow toward the ridge on their own. Laying each course to its own width would be arithmetic that has to be kept in step with the roofline, and it would not be.

> **The Stamp Mill's downpipe is on the LEFT corner, and that is not arbitrary.** On the right it came down exactly where Mr Factor stands and he covered the entire run of it — found by asking `elementsFromPoint` what was on top, after a pixel sample said the pipe was the wrong colour. A gutter drains at a corner anyway; mid-wall is the wrong place for one.

**The forge has two chimneys** — the tall one off the hearth and a squatter one off the second fire, each smoking on its own delay — and its walls are **coursed rubble stone**: offset joints, dressed quoins down both corners, a heavy sill course, a tiled roof with a gutter on it, and a pool of furnace light on the ground outside.

> **The `surface` group (58) checks all of it**, and it has to run on a **live, mounted** scene: a detached svg has no running animations and `getBBox` on one returns zeroes, so a probe-built check would have passed for exactly the wrong reason. It asserts no window's box meets the door's; that every part of the day runs for the same 240,000ms; that the sun is up at noon and under at midnight with the moon opposite; that each sky owns its phase; that **no light carries both the flicker and a level**; that the lamps and their cast light are **measurably brighter at midnight**; and that the forge smokes from two flues. Controls: the windows back where they shipped (2 errors), one part of the day on a 90s clock (2), the sun stopped (1), the flicker/level conflict restored (10), lights that never brighten (2), the forge back to one chimney (1).

## The seam

The face is **2280px of rock**, several screens wide, scanned by dragging, scrolling or the scan buttons, with a position indicator. Fifteen lumps spread down its length, refilling where they were taken. You inspect a lump — what it is, how many veins run through it, what sits in front of the x² — and it says plainly that *what kind of seam runs through it is not visible from here*, which is the assay's job. Then the pick swings, lands, shatters it, and the lump drops into the cart.

**Every click on a lump is answered where the mouse is.** The rock takes a knock, chips come off it, a ring goes out from the point of contact and the pick tips in — 300ms and local, deliberately not the 720ms swing that means *breaking*. This holds for the three clicks that used to be silent: the lump already picked out (which repainted the face to an identical picture), any lump at all during a swing (which answers "not now" and changes nothing), and the cart lump already on the bench. The `knock` group in `MF.validate` asserts the reaction in the DOM — 11 checks, with a control that unwires the reaction and must be caught.

**And the reason none of it fired at first: the pick was eating the click.** It follows the cursor with its *handle* under the pointer and is painted after the rocks, so hit-testing the centre of a lump returned the pick's handle, head and collar — the rock was never reached. The same fault sat on the surface, where Mr Factor, the portal's dark mouth and the out-going cart are all painted after the hotspots: **the blackest, most mine-looking part of the mine was the one place a click did nothing.** Both are now stated as a class — *in a scene, only a door takes a hit; on the face, only a lump does; everything else is a picture* — and swept by the `overlay` group (56 checks, control: put the pick back in front of the mouse, and it is caught).

**The mine is cut into a mountain range, and the range is kept east.** It used to be a single dome of rock standing in a green field with soft hills a long way behind it — nobody digs a mine into a boulder, and the whole eastern end of the site read as a stone dropped on a lawn. There are two ridgelines behind it now, hazy blue and nearer grey, and a rocky shoulder that climbs out of the pasture and carries the portal on its foot.

**Measured by rendering the scene with the range and without it and diffing the two:** it touches **x=516..899 of 900**, so the **western 57% of the illustration is untouched** — the plains, the fence, the cart track and the four western pines are exactly as they were. What it adds grows eastward: 10px of peak above the hill line at x=520, 96px at x=720, 173px at x=880. The two eastern pines now stand silhouetted against rock rather than against empty sky.

> **The bases are drawn down to y=300 and y=330 and the two soft hills, painted immediately after, cover them completely.** Only peaks show. And they have to be *tall enough to show*: the first pass peaked at 154 against a hill topping out at 185–222, so a few pixels stood clear and the rest was buried.
>
> **Aerial perspective is a tint, not an erasure.** At 50% over a pale sky the far range was so hazy that a colour test written to find sky classified the mountain as sky. It is 72% now.

> `ridgePath(points, baseY)` is module scope and **pure** — it returns a path string and touches no DOM — so it carries none of the three-identical-scene-builders hazard (`CLAUDE.md` 1). Straight segments deliberately: a quadratic gives rolling hills and this scene already has two of those. Mountains have edges.

> **All of it is inert.** Nine `.sc-range` paths, and the existing `.scene svg * { pointer-events:none }` rule means not one of them can take a click. Verified at the portal mouth (still "Into the Mine"), on the new hillside and on a far peak.

**The mine's hotspot is now the bluff, not a box below it.** It was `712,300 152×100`, starting 54 units below the top of the rock, so the arch, the timber head and the nameplate reading *The Mine* were all outside the target. It is now `712,244 162×132`, matching the graphic's drawn bounds. **The other three buildings' hotspots have not been re-measured against their graphics** — only the mine was.

**Digging is decoupled from breaking.** You may descend to the deepest layer and hoard raw ore having broken nothing.

## The breaking floor: one anvil, the belt over it, and the ore on top

**Measured 2026-09-06, all four widths, 0 errors over 12,308 checks in 40 groups, both controls failing.**

**There is one box, and the anvil in it is the work.** The `workpair` is gone. It was two boxes: one held a row of chips and the belt, the other held a drawing of an anvil, two number boxes and the swing button — so **the anvil a student was looking at was not the thing their ore was on**, and the drawing was decoration beside the work. What is here now is the gallery you are standing in: the belt overhead, the anvil, the stone on its face, and whatever has come off it lying on the ground. **A first lump has nothing on the ground at all.**

**The ore on the anvil is `MF.oreRock`** — the same drawn lump the seam and the cart show, expression cut into the stone, numbers as HTML pinned over it. It used to be an SVG polygon with an SVG `<text>` on it, which cannot carry the coloured spans an instrument's re-spelling is made of and inherits the `color` a contrast sweep reads (`VERIFICATION.md` §59). Measured in the scene's own 340×232 viewBox: the anvil face runs **x 112..262 with its top at y 154**; the stone sits **x 109..251, y 56..156** — two units onto the face — and its label sits **x 120..240**, inside the stone. The hammer at rest clears it: its striking face is at **x 258..297**.

**And it is a live piece.** `.piece[data-piece]` on the stone, so the belt's drag, `MF.pieceAt` and `MF.applyTool` reach it exactly as they reach a chip on the ground. **A tool dropped on it re-spells the stone in place, and the same tool again takes it off** — verified live: `x² + 5x + 6` under the lantern becomes `( x + 2 )( ? )` and comes back plain. The instrument's tag rides on the stone's top corner.

**The hammer is asked for, once.** The permanent swing bar — a label, two boxes, an echo line, two hints and a button, on screen whether or not the student had chosen anything to hit — is now `MF.openHammer`, a dialog opened by striking the ore. Nothing in it changed except when it exists. **It closes before it swings:** the scrim covers the page, and left up it would hide the blow that was just struck. One panel is one blow — a glance comes back as a note beside the anvil and the stone is still there to click again.

**The cursor over the floor is the hand, the same as in the layer.** It was built as a drawn 32px hammer with its hotspot on the striking face — *"the mouse cursor in the layer should be a hammer"* — and the user asked for the hand back the same day, having seen it: *"When the mouse is on the breaking field, it can be the hand icon as its in the layer tool."* What still has to hold is that **the ore says it is clickable** — it is the only control on this floor and no button on screen names it — so `.floorbox .piece` asks for the floor's cursor by name rather than restating it. Native metal takes `default`: there is nothing to bring a hammer down on.

**A piece on the ground goes on the anvil; it does not also open the hammer.** Picking a rock up and deciding what to hit it with are two acts, and running them together would ask the question about a stone the student had not yet seen sitting on the anvil.

**A shattered lump is gone whether or not anything is playing.** `.anvilrock.shatter{opacity:0}` is set by the paint, not by the animation — a repaint of a finished bench, or reduced motion, used to draw the stone whole on the anvil again.

> **`nogate` (40) walks the route rather than hunting a button**: the ore must be on the anvil, and striking it must open a panel with a swing in it. `swing` (22) drives the same route and adds two: the panel must let go of the screen before the blow, and no burst may be drawn outside the anvil stage. `reach` (9) measures **belt → the ore**, asserts the belt is above the anvil, and asserts the panel's content fits its own box. `contrast` (1,748) gained a **`hammersheet`** pass, because the whole swing bar moved into a node appended to `document.body` and mounting the five screens does not see it.

> **Every one of those was proved by reintroducing its fault.** A hammer that opens nothing fires `nogate` ×3, `swing` ×3, `reach` and the new `contrast` pass. A stone handed back as scenery fires `nogate` ×5. The belt put back under the anvil fires `reach` by name. A swing button that does not close the panel fires `swing` ×3. A burst appended to the floorbox fires `swing` ×3. `.hammerask .cutlab` forced to `#3A2E20` fires `contrast` at 1.26:1.

**The assay is unreachable from the bench and that is deliberate** (`MINE-SPEC.md` §25a). It is not deleted — naming the rock was already optional, and the Prospector's Pick reads the kind at the face, one step earlier, where it stands between nothing. `MF.paintAssay` and its five choices are still in the file and still checked by `explain` (4).

**The yard is drawn on the surface.** Bottom-left corner of the operation: a fenced enclosure, a rack of steel bars, a heap of rock with an orange seam still in it, and a nameplate. **Scenery with a nameplate, not a door** — the yard is not a screen, it lives in the mine's fourth band.

**And the face asks where a cut lump goes.** Two buttons on a lump still in the wall — *into the cart* to work it, or *straight to the yard* to set it aside. The **Prospector's Pick** informs it. Routing lives in `MF.placeCut`, pulled out of `breakRock`'s 900ms timer so it can be checked at all (`VERIFICATION.md` §70).

**A lump can go straight from the cart to the yard.** `MF.stow` is the single place that decides **rack or heap**, and both routes call it. Checked both ways, with a control that drops the ore.

**The cart is a built object now, drawn to the reference the user sent** (2026-09-04): a heavy lipped rim bolted along its length, riveted corner straps down a body that flares from the lip to the sill, chips knocked out of the plate, a bolted chassis bar, spoked wheels with a rust-coloured hub cap, and a **drawbar and ring off the front** — the part that says it belongs to a train of carts rather than being a bucket on wheels. **The ore still lives inside it**, with its layer tag and its two route buttons, which is what the request was about.

**Two things it is built around, and both are load-bearing.** The bed gradient stays on `.cartbody` as a CSS background, because `_backdrops` walks *up* from the layer tag to find paint and an SVG fill behind the content is invisible to that walk — it would report cream ink on the panel's cream paper. And the box **stretches**, so the rim and the straps are HTML with repeating bolt heads in pixels, and the only SVG in the body is the outline, drawn `preserveAspectRatio="none"` with a **non-scaling stroke**. The flare is a `clip-path`, which takes the border with it, so the outline is drawn at double width and the clip removes half.

> **The straps were skewed, and a skew cannot express this.** The taper is 4% of the *width*; the lean it needs is a function of the *height*, which is a scrolling list of one to a 430px cap. The same 2.3° that matched at 200px tall threw the strap 21px off the plate at 526px. They run straight down the corner now and the body's own clip trims them to it. **Nothing in `MF.validate()` caught it** — `cartdraw` measures the wheels and the rail and says so; the straps are inside the box it does not look at (`VERIFICATION.md` §75).

**The undercarriage is positioned, not flexed.** `space-around` put the wheels at the quarter points, 570px apart on a 1140px cart, with the drawbar stranded 80px in front of nothing. Measured at 1250px: chassis bar **226..1024**, wheels **215..259** and **991..1035**, the drawbar running behind the front wheel from **184 to 230**.

**And the ore sits in the middle of it.** `repeat(auto-fill, minmax(190px, 1fr))` could not centre, for two reasons at once: `auto-fill` **keeps** the empty tracks it makes, so one lump in a 1140px cart sat in the first of five columns; and a `1fr` maximum lets the tracks absorb every spare pixel, so `justify-content` had nothing left to centre. `repeat(auto-fit, minmax(190px, 230px))` with `justify-content:center` fixes both — and the 230px cap is also what stops one stone stretching to 1140px, which is what a bare `auto-fit` would have done. Measured: at 1250px one lump has **444px either side** and two have **322px**; at 380px one lump has **14px either side**; at 560px two lumps stack in one column at **165..395** in a cart running **61..499**.

> **And the cart keeps its shape as it empties.** `.cartrail` — 6px of track under the wheels — is a flex item of a column with a 430px cap and had no `flex-shrink:0`, so it measured 2.02, 2.44, 2.82, 3.52, 4.69, 6.00px as lumps left. The **list** gives up height in that column; the cart drawn around it is scenery and scenery does not breathe. `cartdraw` renders six cart sizes and compares the chrome against all of them (`VERIFICATION.md` §65) — and the new undercarriage keeps the class `cartwheels` so it goes on measuring the thing it was written for.

**THE MINE IS FOUR BANDS.** The places you move between across the top, then the **cart**, then the **work**, then the **yard** — each full width, so the cart is wide enough to drag an instrument onto a lump and the breaking floor is wide enough to be an anvil rather than two narrow columns.

**The breaking floor does not exist until the ore is sent to it.** `MF.placeCut` no longer selects what it puts in the cart, which is what used to open the bench under a student who had only just cut a lump.

**The seam is 2900 × 360 units drawn at 4365 × 542px**, one zoom on both axes: `MF.SEAM_ZOOM = 1.505`. It scrolls horizontally inside `.seamview`, whose content box is exactly 542px — **blankTop 0, blankBottom 0** at every layer.

> **It was a letterbox, and nothing in the build could see it.** The commit that made the seam taller set `height:542px` on `.seamview svg` in CSS and left the width at the viewBox's own 2900 in JS. `xMidYMid meet` fits the *width*, at 1.0, and letterboxes the rest — the rock painted 360px tall in a 542px element with **91px of dead space above and below**. `layout` measures the right edge; `hollow` measures a box against the *text* in it and this box holds a picture; `contrast` walks text nodes and the seam has none; `reach` measures between two controls and this was inside one element. Every group was right about what it measures (`VERIFICATION.md` §76). Both axes come off one constant now and the stylesheet states no height.

**And the rock is drawn, not washed.** `MF.seamRock` fills the window back to front: **jointing** (big low-contrast blocks and cracks, the way rock breaks), **ore stringers** threaded through the wall — deliberately dim, because a stringer is not breakable and a bright one would compete with the lumps that are — a **roof** with a ragged hanging edge, points coming down off it, ore glinting in it and drips, and a **floor**: a ragged sill, a muck pile of broken chunks flecked with ore, and a dark band under it. 282 shapes at layer 3.

> Three things it is built around. It carries `pointer-events:none` and is appended **before** the lumps — `overlay` is the group that caught the pick eating every click on the seam. It is seeded off the **layer**, because `paintFace` runs on every `paintMine` and a texture drawn from `Math.random` would reshuffle the wall on every click anywhere in the mine. And it does **not** draw from `MF.state.rng`, which is the ore stream — taking numbers out of it here would change which lumps get dug.

> **`seam` (17)** asserts ore is spread across all three thirds of every layer, that the drawing fills its window on all five, and that something is drawn in the **top 44 and bottom 44 units** of each — because filling the element is not the same as filling the picture, and both halves of the user's report were true. Controls: a height stated independently of the width (the exact fault that shipped), and a texture group with its head and foot stripped out.

**Both orange buttons in the mine are one treatment**, and both carry **dark ink**: `--ore` fill, `--lamp` border, `#1A120B` text. Cream on `--ore` is **3.55:1** and the Stamp Mill button shipped at exactly that, unmeasured, for weeks (`VERIFICATION.md` §62).

> **The forge's craft floor lost 100px too.** The pour picture was 324px of the 805px between the target and the pour button. At 310px wide the same drawing is 232 tall and the whole cluster fits a 700px laptop. Found only once `reach` stopped lying (`VERIFICATION.md` §61).
> **The forge's craft floor lost 100px too.** The pour picture was 324px of the 805px between the target and the pour button — the single biggest reason a student had to scroll to reach the thing they were about to press. At 310px wide the same drawing is 232 tall and the whole cluster fits a 700px laptop. Found only once `reach` stopped lying (`VERIFICATION.md` §61).

## The tools draw, and every one leaves a ?

They were correct and unreadable: a method name, a paragraph of reasoning, and the method narrated as a numbered list. **Every group said they were true and none said whether they were a picture.**

**The X method is the spine** — `a·c` on top, `b` on the bottom, the pair on the sides. With `a = 1` the sides are the bracket constants; with `a ≠ 1` they split the middle and the four terms go into the **X-box**, whose rows and columns give up the factors.

| tool | draws | leaves open |
|---|---|---|
| **Drill** | the X, and every pair that multiplies to a·c | one side of the X |
| **Shifter** | the X, carried into the 2×2 box | the other side, and every edge |
| **Auger** | the full X-box: X → split middle → box → factors on the edges | the pair, a corner, both brackets |
| **Lantern** | the split: one lump above, two pieces below | the dark side |
| **Steel** | the terms, and what divides all of them | what goes inside the bracket |

**Not one number is inside an SVG.** The strokes are SVG; every number is an HTML span pinned over them in percentages, the way `MF.shedArt` does it — `VERIFICATION.md` §59 is what happens otherwise.

**The mine draws; the Casting Shed reads.** The full schema is one line on the panel now, with the method a click away in the room that already renders every one of them in full. Nothing was deleted.

> **The `visual` group (39)** asserts what no group asserted before: each reading **draws** (an `<svg>`), **leaves a hole** (a `.qm`), and is **not mostly prose** (a budget on text outside the diagrams). It also checks the X's own arithmetic against the engine — the sides multiply to the top and add to the bottom. Writing it immediately found four faults in the work done to fix the complaint. Controls: no diagram, every `?` filled, prose padding, and a nudged pair — all caught.

## The yard: a heap and a rack

The yard takes **both**. Metal broken all the way down to an element goes on **the rack**, and that is what the forge spends. Ore tipped there still carrying a seam goes on **the heap** — nothing is destroyed, nothing is counted against you, and it is there when you come back for it. Leaving a lump half-broken has a visible consequence and still no mark anywhere.

**It is drawn as a place**: a paling fence along the back with a lit lamp on a post, dirt below it with barrow ruts, metal racked on timber and rock heaped on the ground in the same knocked-corner silhouette the seam uses. The fence-and-lamp band is a **fixed 76px, sliced and pinned to the right edge** — filling the panel with `preserveAspectRatio:none` smeared the palings over 438px and rendered the lamp as an ellipse. Verified round and on screen at column widths 240 → 460.

**Rock goes back under the pick** by clicking it *or* dragging it onto the floor — the drag is built on pointer events (there is no HTML5 drag-and-drop anywhere in this file) and a movement under 5px is not a drag at all, so the click still lands. It routes through the cart, because the cart is the one way anything reaches the anvil.

> **The scenery is inert.** `pointer-events:none` on the yard's svg, asserted by the `overlay` group with its own control — the same fault class that had the pick eating every click on the seam (`VERIFICATION.md` §43).

## The belt, and holding an instrument to a lump

The belt is **a leather strap with the instruments hanging in loops**, not a list of cards. You take one off it and use it.

**The belt hangs inside the floorbox, directly above the pieces it acts on.** It was in the yard column on the far side of the page, so the drag crossed the whole screen — and under 1080px the columns stack, so it was a *scroll* away, and you cannot scroll while you are holding something. The furthest drag is now **94px**. There is exactly one belt: a second copy in the yard column would be the one a student reached for, and it was the far one.

**And the belt, the pieces and the swing are on one screen together — 794px, measured.** The anvil-and-hammer stage is the tallest thing on the bench and it used to sit *between* the pieces and the boxes you type into, so a swing meant scrolling back up to see what you were hitting. The order is the order of the work now: choose a piece, cut the head, **swing** — and the blow plays out underneath the button that fired it. `.anvilsvg` is capped at 260px rather than 340. The three-second arc and every one of its beats is untouched; only the picture moved.

**Every piece on the breaking floor has a slot.** Drag a tool onto the piece, or open its slot and choose — both routes reach the same place, because a drag with no click path is a control half the users cannot reach. The slot lights up with whatever is in it and keeps showing it, and a panel rises with that instrument's reading.

**The panel is a real dialog:** `role="dialog"`, `aria-modal`, focus moved in, **Tab trapped**, Escape closes, focus handed back to the slot it came from, and nothing left in the DOM — a scrim left behind covers the page and makes every control dead, which is §43's fault class page-wide. One function builds it for all three routes (tool-on-lump, tool explained off the belt, empty slot); three copies of the focus wiring was three chances to lose the trap.

**Every order names one exact object, and the objects climb with the tool.**

The board used to ask for a *shape* — "three pure ingots", "any four metals at all" — and any three primes filled it. That taught nothing about what a factorisation is, because there was no particular thing to hit: 2·3·5 and 7·11·13 were both accepted. An order now names one object and the casting must come out as **that object, exactly**. Finding which metals multiply to `6x² + 7x − 3` *is* factoring, run backwards, with a definite answer.

`rank` runs 1–7, ordered by how much the instrument does for you when you are getting metal out of rock, and the object it is cast from gets harder in step:

| rank | tool | cast | from | the method it carries, by its real name |
|---|---|---|---|---|
| 1 | **Prospector's Pick** | `12` | 2 · 2 · 3 | *testing the rock before you swing* — it names the KIND of a lump still in the wall |
| 2 | **Pit Lantern** | `30` | 2 · 3 · 5 | *one side lit, one side dark* — lights **one** factor, prints `?` for the other |
| 3 | **Steel Pick** | `3x + 12` | 3 · (x+4) | *pulling out the common factor (the GCF)* |
| 4 | **Decimal Dial** | `x² + 3x + 2` | (x+1)(x+2) | *the whole-number test* |
| 5 | **Exponent Rail** | `x² + 8x + 16` | (x+4)(x+4) | **the box method** — a 2×2 box, both sides dashed `?` |
| 6 | **Core Drill** | `x² − 25` | (x+5)(x−5) | *the pair hunt, and the difference of two squares* |
| 7 | **Powered Auger** | `6x² + 7x − 3` | (2x+3)(3x−1) | **factoring by grouping**, in full — four of its five steps stay open |

Plain numbers → a metal spread over a bracket → two brackets → a square → a twin seam → loaded at both ends. **The target is on the order card and again, large, on the open mold**, and a casting that misses is described term by term — *"the x² came out 2 and the order wants 6"* — exactly as the mine describes a pick that glanced off.

> **A precise target can become an unreachable one, so it is checked.** The `forge` group (44) stocks a yard from 70 real smelts and asserts, for every order: some set of metals on it casts the object; those metals are judged sound; **one metal nudged by one is not**; and the rejection says where it missed. It also asserts the ranks run 1..7 with no ties and that no two orders are cut for the same object — a board that claims an escalation has to have one. Controls: an unreachable target, duplicate targets, tied ranks, a judge that accepts anything, and a judge that rejects without explaining — all five caught.

## A tool shows PART of a factorisation, and the hammer confirms it

**Amended 2026-08-25 by user decision (`MINE-SPEC` §13).** The old rule was *an instrument may say what is there, never what to swing*. It is now:

> **A tool may show PART of a factorisation. It may never show all of it.**

**The Lantern lights one side and leaves the other dark.** Held to `x² − 5x + 6` it prints `( x − 2 ) × ( ? )`. Which side it lights is the **simpler** one — plain metal before a bracket, the smaller bracket before the larger — so a rank-7 lump still leaves the harder half. A factorisation's two sides are not independent: once one is out the other is exactly what is left, so one side is a foothold and the division is still the work.

**Nothing in a panel judges.** You write the other side into the `?`, press **cut the hammer to it**, and the pick bar opens cut to what you named. Then you swing, and the rock answers. A wrong answer gets **no warning from the panel** — verified by typing one — and the hammer glances off exactly as it does for anything else typed into the bar. `MINE-SPEC` §11e is untouched: the rock is the only judge in the mine.

> `B.rawFor` is load-bearing in that handoff. `paintBreak` resets `B.raw` to `MF.pickDefault` whenever `rawFor` does not match the piece under the pick, so setting `raw` alone would be discarded on the very next paint and the bar would open empty with nothing on screen saying why.

**One schema, two surfaces.** `MF.SCHEMA` holds each method once — its real name, why it works, `steps(ore)` worked on the lump in front of you, and a **fixed** practice lump. It is drawn in the tool panel in the mine and walked on the Casting Shed's working floor. Two copies would be two chances to drift, which is the reason `_openSheet` builds every dialog and `quad()` prints every expression.

**THE FORGE TEACHES NOTHING.** *"There should no more lessons on the tools in the forge"* (user, 2026-09-04). The whole method, its reasoning and a practice used to be appended to the casting three seconds after a pour, when what the student is looking at is the object they just made. What is left there is a line saying the lesson has opened, and a route to it.

**THE CASTING SHED IS THREE MODULES: The Words, The Molds, The Tools** — the user's own names for them (2026-09-05). The screen keys are unchanged (`shed-words`, `shed-mold`, `shed-methods`) because they are wired into the door table, four check groups and every jump on the site; what changed is what a student reads on the card.

**MR FACTOR GUIDES, FROM A DOCK** (`MINE-SPEC.md` §42). He was on three of eight screens; there was a character and no guide, so *where do I start* had no answer on the site. He is a fixed portrait in the corner of every room now, opening himself once per room with two to four beats about what to **do** there, and starting again from the top whenever you tap him. He lives outside `#screen` because `MF.go` clears that element on every arrival — a guide destroyed by the act of arriving cannot greet you when you get there.

> **The `guide` group (57) checks the refusals rather than the feature**, because every default for an onboarding tour breaks a rule this project already has: no scrim and nothing disabled behind him, `pointer-events:none` on the dock so it cannot swallow a click, the `nogrades` regex pointed at his own copy, and a brevity budget of 210 characters a beat. A room he has not spoken in gets a **lit helmet lamp** — no count, no badge, nothing that adds up. Controls: a room with no copy, a beat padded into a paragraph, a guide that reopens every arrival, a dock that swallows clicks, and a progress counter on the bubble. His copy is swept for contrast per room, because putting him outside `#screen` had put every word he says outside the sweep (`VERIFICATION.md` §89).

**THE WORDS ROOM DOES SOMETHING INSTEAD OF ASKING A FIFTH TIME** (§45). It had five question cards against the Molds room's three and the Tools room's four — the heaviest assessment in the building on the module whose content is a vocabulary list. Three now, and **`MF.paintMatch`** took the other two: six pairs from `MF.ROSETTA`, the mine's word against the textbook's, both columns ordered separately by `MF.balanced` or it is two lists read straight down. `quiz` asserts the **spread** rather than a cap, because a cap of three would pass just as happily if the Molds room dropped to one.

**AND THE YARD ON THE SURFACE HOLDS ORE** (§43). It held four steel bars and a brown blob, because the lump's silhouette and palette were literals inside `MF.oreRock`. One `MF.ORE_ART` now, with `MF.oreRock` and `MF.oreLump` over it — the mine and the surface cannot show two different rocks. `surface` asserts the yard carries **both** kinds with the right signal on each: gold and seamless, or brown with the vein through it.

**THE MOLDS SHOW THE MULTIPLICATION.** The room drew an area model and one line of algebra, and the area model **only ever held one row** — a depth over two parts, `a(b + c)`. That is a number distributed over a sum, and it is not the move the mine runs backwards: the mine's job is two brackets, four products, and two middles that turn out to be the same kind of thing. `MF.pourChain` writes the pour out a line at a time — what went in, every part meeting every part, each pair multiplied out, the two middles collapsing, one object — and the room gains a third thing you can pour (**two brackets**). It does **no arithmetic of its own**: every number comes from `MF.moldMaths`, which the `mold` group already checks against `ingotProduct`, so there is no second copy to drift.

**AND THE ROOM POURS THE FORGE'S OWN MOLD** (`MINE-SPEC.md` §40). It drew `MF.shedArt('mold')` — a flat diagram of the idea that moved for nothing — while the working room a click away draws a ladle tipping into sand. It is `MF.moldScene` now, cut to an **expression** rather than a tool, re-poured on every slider and mode change, so the sliders are the ladle. One function draws every mold on the site. The picture is 310px here, where it **is** the lesson, and 276px on the craft floor, where it is a status display for a pour already ordered — `reach` had the forge 15px past one 700px screen at 979px wide.

> **The pour was printing a falsehood, and two separate things kept it green.** `MF.moldMaths` listed plain metals as their own products, so pouring 3 and 9 printed `3 + 9` over a casting of `27` — in the Forge too, because the Pick and the Lantern both cast from plain metal. The assertion that products add up to the casting carried `if(!allPlain && …)`, **an exemption that described the defect and licensed it**; and the sweep walked `MF.toolOrder()`, so the Molds room's own arithmetic had never been through it at all. Both closed: the shortcut is gone, the exemption is gone, and 486 checks pour the room's three modes across both sliders. Control: put the shortcut back — 83 errors.

> **A new `cavity` group (3), because an exemption is not a pass.** The contrast sweep skipped the mold's cavity on the wrong predicate — *is it an emoji?* — and cutting the cavity to an expression put three copies of a **shape** into the sweep at 1.08:1. The predicate is now *can `color` reach a pixel?*: no for anything inside `<defs>`/`<mask>`/`<clipPath>`/`<symbol>`, and no through `filter: brightness(0)`. What replaced the reading measures the cut **as it renders** — black against the sand gradient it is cut into, both read off a live mold — at 5.05:1, and fails loudly if `.mdcut` ever stops being forced black (`VERIFICATION.md` §84, §85).

> `mold` (112) asserts the chain over four pours, that its last line agrees with `ingotProduct`, and that a two-bracket pour shows **both** the pairings and the two middles collapsing. Control: strip the working out of `moldMaths`.

**THE TOOLS ARE MOSTLY NOT READING.** *"The core of the activity is applying tools to ores."* Every lesson carries a **bench**: three lumps, the instrument on a hook, and the cart's own gesture — pick it up, put it on a rock, the numbers cut into the stone change; click again and it comes off. It is **the mine's mechanism, not a demonstration of it** (`MF.oreDisplay` → `MF.lensFor`, the same path the anvil uses), and it is **not gated behind the walkthrough**, because reading about an instrument is the half a student can skip and using one is not. Two deliberate differences: the bench keeps **its own armed flag** rather than touching `MF.state.armedTool`, which belongs to the belt in the mine; and it **says what the instrument found in words under the stone**, which the mine may never do (§21) and this room may, because the user drew that line — *"Tutorials can have numbers out of the ore for teaching purposes."* The lumps are **copied per lesson**, because applying an instrument mutates the lump and `MF.LESSON_ORES` is a shared literal.

**THE WHY IS SLIDE ONE.** It was behind a `<details>` labelled *why this works* — the best paragraph in the lesson, one click away and therefore unread. Beat zero of the walk now; the button that opens the second slide says *now how →*.

**AND NOT EVERY SECTION ENDS ON A QUESTION.** Each tool lesson closes on a **real-world example** — a place the same move is made by somebody who has never heard of this site, with a tie-back naming *which part of the method it is*, because "maths is everywhere" is a poster and "this is that step, here" is a lesson. The Words room closes on a **reflection**: a box that is never read, checked or kept, and says so. The Molds room closes on why a mold is cut once and every casting out of it is identical — the determinism the mine depends on.

**THE WORKING FLOOR.** One lesson per instrument **cast**, in the Casting Shed. The lump is **preselected per tool** — `SCHEMA[key].practice.ore`, the one the method was written against and the one the `schema` group already checks the practice answer comes out of — so the walkthrough and the thing you then try are the same rock, and it is **drawn** beside the method's name. The method is revealed **one step at a time**, with a count and pips saying how long the corridor is; a step the schema marks `open` is announced by the control that opens it (*"and then it is yours →"*); back a step loses nothing; and at the end the practice on the same lump, answered by `MF.breakOff` — so a miss is described by the rock, not marked.

**AND EVERY STEP OF EVERY METHOD DRAWS** (`MINE-SPEC.md` §41). Measured the day the user asked for it: **one step in the whole module carried a diagram**, against 1,649–2,082 characters of prose per lesson and 34 characters of worked lines in the worst one. The Pick draws the five kinds with one lit; the Lantern a split; the Steel the metal out in front of an empty bracket; the Dial a ruler with the seam on a mark and then in the gap; the Shifter the box at both ends; the Drill the **X**; the Auger the full **X-box**. Two new drawers — `MF.kindStrip`, `MF.tickLine` — for the two methods nothing existing could express. Prose is **899–1,143** now: four hint lines that came to 457 in one lesson are one, seven `why` paragraphs are one claim each, and the real-world close folds while its tie-back stays.

> **The group that asks this had been green for weeks, pointed at a different surface.** `visual` sweeps `MF.TOOL_READ` — the mine's reading of a lump. A lesson renders `MF.SCHEMA[].steps` — the method. The new **`taught` group (73)** asks the same three questions where the lesson actually is, and had to re-derive one of them: a hole is a `.qm` **or an SVG `?`**, because `MF.areaModel` marks an unknown side with SVG text and counting only spans would have called the one diagram that was already there empty. Controls: the Drill and Auger stripped of diagrams (11 errors), every hole filled (2), prose padded back on (`VERIFICATION.md` §86).

**THE ROOMS TURN ONE QUESTION AT A TIME**, and the turn **wraps**. Cards are built and hidden rather than rebuilt, so an answered one keeps its choice. The Words room was showing two — its *what did the miner do wrong* closer is an `.ask` built outside `MF.paintQuestions` — and it joins the rotation through `also`. The contrast sweep **reveals every hidden card before measuring**, because it skips `display:none` and would otherwise have stopped looking at two thirds of every quiz; the rotation is asserted separately by `quiz` so it cannot rot behind that reveal.

**AND THE MOLD POURS A LOADED TRINOMIAL.** Both brackets were monic, so the casting's square term was the literal string `x²` at all 81 settings — the room built to explain the pour could not pour the shape layers 4 and 5 are made of. The first bracket carries a depth now, `( d·x + a )( x + c )`, on its own state so the mode still opens monic. The pour channel went from 39 units to 108, the type sizes itself off the longest term it carries, and the room's picture is 460px because the text is inside it: **10 CSS px → 21**. The halo moved to `em` in the same breath, and `contrast` caught the × at 3px on 26px type the moment the type started moving (`VERIFICATION.md` §87).

> **Where each student is lives on `MF.state.school`**, so leaving the room and coming back does not send them to step one. The lesson repaints into its own body and never through `MF.go`, which would rebuild the screen, scroll to the top and close the `<details>` being read — and focus is put back deliberately, because the repaint destroys every control in it.

> **The gate is on the lesson, not on the mine.** A tool never gates descent — `nogate` walks every layer with an empty belt and an empty yard to prove it, untouched. What is gated is a lesson about an instrument you are holding. The empty state is **not a locked door**: it says where instruments come from, says nothing in the mine is waiting on it, and carries routes to the forge and the Stamp Mill. That last part is checked.

> **The `schema` group (132) enforces the rule over all seven**, not just the Lantern: no method may print more than one of a lump's own factors, every method renders on all seven ore shapes, and **every practice answer is checked against `MF.breakOff`** rather than against itself. It also holds the lesson count to the belt at 0, 1, 2 and 7 cast, refuses a lesson for a tool not cast, requires a way out of the empty room, and asserts **the casting carries no lesson**. Controls: a method that prints the whole factorisation, a practice answer nudged by one, `MF.hasTool` unhooked, a `.practice` appended to a casting, and the empty state's routes removed — all caught. The `sheet` group (59) covers the Lantern in **both** directions, because a check loosened to "not more than one" passes on an instrument naming **none** — see `VERIFICATION.md` §55.

> **Swapping the surface silently dropped 140 checks.** `contrast` sweeps the screen list generically, with whatever `MF.state.tools` happens to hold — nothing, through most of a run. The old index rendered all seven methods regardless, so the sweep measured seven lessons *by accident*; the new floor renders none without a cast tool, so the same sweep mounted the empty state. **Both runs were green; the only signal was the denominator moving.** A `shed-taught` pass now casts every tool and walks each lesson to its end, because the last step, the practice and the start-it-over control exist only once the walk is finished (`VERIFICATION.md` §77).

**The ladder buys reach and sight, never an answer.** The Steel Pick only takes the metal every term is already carrying — a move the student demonstrated at the forge to earn it — and the Auger narrows where to look without naming anything. The hand pick is free and always in your hands; the `nogate` group still walks every layer with an empty yard and no tools.

> **A tool shows part, never all — and the pair scanner is not free.** The `sheet` group (59) holds the Lantern to naming **exactly one** side, in both directions, and the `schema` group (121) holds all seven methods to the same rule. The pair scanner is the Drill's reading, the same move §10a made with the casting preview, and it also stopped the swing button falling below the fold.

## The pour, seen from above

**You are standing over the sand, looking down at the mold.** Metal runs down an **iron trough**, off the lip, into the pouring basin, along the runner and into the shape — in that order, because that is the order a real pour fills them.

**The cavity is the tool's own icon, blacked out.** Not a silhouette drawn to look like it: the same glyph the order board, the belt and every panel use, rendered large and knocked to black with `filter:brightness(0)` — which is what a shape cut into sand looks like from directly overhead, and which means the hole and the thing on your belt can never be two different shapes. **It is cut the moment the order is taken**, so you can see what you are making before you own any metal.

**The metal rises in the cavity, and the black outline fills with molten metal.** A clip rect rests empty on the **floor** of the glyph and grows upward — `y` walking 261 → 111 while `height` grows 0 → 150 — so the metal comes up from the bottom, which is what a mold filling from underneath actually looks like. The black cut stays underneath the whole time.

**What fills it is a molten gradient, not the glyph's own colours** — and that distinction is the whole reason the pour works at all. The reveal used to paint the tool's glyph again, unfiltered, on the assumption that a tool icon is a colour emoji. **Four of the seven are not:** ⛏ 🕯 ⇆ ⚙ are monochrome text glyphs and measure mean chroma 0.0, so the "coloured" copy came out black over a black cut and the pour changed nothing a student could see. The glyph is an **alpha mask** now and the metal is painted through it: the silhouette is the tool's own shape, and the colour owes the font nothing.

**And then it cools, in three beats.** Molten at 2.45s, red fully in by 3.65s and held for three quarters of a second, steel from 4.4s — hot, dull red, cold grey, while the maths is still being read over it. Sampled inside the silhouette: warmth `r−b` **34 (cut) → 74 (molten) → 66 (red) → 31 (steel)**. Under `prefers-reduced-motion` the casting is simply cold, which is what a finished one is.

> **It used to be a wipe with a sheet over it.** The reveal grew left to right and carried a translucent orange panel 212×172 across the *whole cavity area* — a transparent sheet dropped over the sand rather than metal arriving in a shape. The panel is gone and nothing replaced it: the sand around the tool stays sand.

> **The `mold` group (95) asserts the property, not the implementation.** It used to require the reveal to hold *nothing but a `<text>`* — which was true, and was the defect. Every child of the reveal must now be **masked**, which catches both faults at once: a masked child cannot paint outside the silhouette, and a mask means the colour comes from a fill rather than from whatever palette the font happens to carry. It also asserts the mask is cut from the tool's **own icon** and that the metal is filled with a gradient. Controls: the bare glyph put back, an unmasked panel, a mask cut to the wrong tool, a flat fill — all four caught.

**And the liquid is the background for the maths**, with the operations written out:

```
(2x + 3) × (3x − 1)                      ← what went in
2x × 3x    2x × −1    3 × 3x    3 × −1   ← where each product comes from
   6x²       −2x        9x        −3
              −2x + 9x = 7x             ← the two middles run together
              = 6x² + 7x − 3            ← one thing
```

That is the whole lesson of the forge told with **almost no words**: the metals go in separate and the object comes out single. The Core Drill's pour is the best of them — `−5x + 5x = 0` in front of you, which is what a twin seam *is*.

The prose that used to re-say all of this in a paragraph is gone. What is left is the verdict — **"Sound."** or **"Scrap."** — plus, on a miss, which term missed and by how much: *"Missed: x² 2, wanted 6 · middle 5, wanted 7 · end 3, wanted −3."*

> **The `mold` group (67) checks that the picture is true**, against the engine rather than against itself: what the pour shows it coming to must be the order’s own casting; **no term may be nothing at all** (a nought on the sand is a product that does not exist); the products shown must add up to the casting; a merge must take **exactly two** terms, and terms marked as merging must actually merge; **the cavity must be cut to the tool’s own icon**; and there must be something to reveal as the metal crosses it. Controls: a phantom `0` term (7 errors), a merge with nothing to merge (4), products that do not add up (1), a cavity cut to the wrong shape (7), nothing to reveal (7), and a pour that shows the wrong casting.

> **A pictograph is a picture, and `color` does not draw it.** The contrast sweep failed the build over the blacked-out cavity at 1.08:1 — real arithmetic about nothing you can see, since a colour emoji carries its own colour table and the property being measured touches not one pixel of it. `MF._measureContrast` skips an element only when it has **no word character at all** and is pictographic, so a label with an icon *in* it is still measured. Proved: `invisible words` and `🔧 invisible with an icon` are both still caught; a bare `🔧` is not.

## The forge: orders on the left, one work cluster on the right

**The metal you own is beside the mold you are filling.** It used to be a yard panel above the craft floor, and before that it appeared only *inside* the mold after an order was chosen — so a student picked a tool with no idea what they were holding. It is neither now: the rack is part of the craft floor.

- **Left — the order board.** Seven orders as cards, each showing whether it is in your hands, whether you have the metal, or whether it needs more. **Every one opens**, including the ones you cannot fill: a disabled button explains nothing, and an open mold can say what it is waiting for. Clicking one you have already made explains it instead of remaking it. It stays `position:sticky`, so the target does not scroll away.
- **Right — the craft floor, in one run:** the target large, the mold seen from above, the slots, **the rack**, the pour. Metal on the rack is clickable and goes straight into a slot; metal already in the mold greys out; clicking a metal with no order open says so rather than doing nothing.
- **Right, below — the heap**, drawn as the yard it is.

**The heap is deliberately not spendable.** The forge takes native metal; rock still carrying a seam is no use until it has been broken. It is not a button, because a control that looks live and refuses is worse than a thing that plainly is not one — and seeing it sitting there unusable is what sends a student back down. That is the sink working, and it works just as well underneath the mold as it did above it.

On one column the **work comes first** and the seven-item board follows it, the same rule the mine follows — verified stacked at 760px.

**The forge repaints in place.** Every click in it used to call `MF.go('forge')`, which rebuilds the screen, moves focus, restarts the arrival wipe and scrolls to the top — so dropping one metal threw the page back to the masthead, and choosing metals and pouring meant four jumps. `MF.paintForge()` now repaints the two columns only, guarded on `isConnected` exactly as `paintMine` is. The one scroll left is the casting after a pour, `block:'nearest'`, and only when it lands below the fold. Verified across seven interactions from a page parked at 420px: none moved it.

> **A denominator that had been silently wrong:** the `contrast` group mounted the forge **cold**, so the crucible, the filled and empty slots and the not-on-the-rack warning were never measured. It now mounts it with a mold open and something in it. Verified by counting the probe's contents rather than trusting the total, which went *down* — the cold plate left the sweep as the mold entered it.

## The forge, and the instruments

Metals are **spent** here — this is the yard's sink. Forging *is* distributing, and each tool is forged by demonstrating the move it then assists with: the **Lantern** from three primes, the **Shifter** from two x-ingots, the **Drill** from a matched pair. Plus the **Prospector's Pick** and the **Decimal Dial**.

**The casting preview is the Lantern's power, not a default.** Before you forge one, the mold is dark and you learn from the casting.

**And the forge now teaches the tool it hands over.** A sound pour lands the casting, the verdict, then **a short tutorial** — the method's real name, why it works, and one practice on a fixed lump — and only then *Hang it on your belt*. The practice has **no judge of its own**: it hands what the student names to `MF.breakOff`, the same engine the anvil swings through, so a miss comes back described by the rock (*"the hammer glanced off"*) rather than marked. The same tutorial reopens from the belt, because a lesson that exists only in the three seconds after a pour is a lesson nobody re-reads.

> **The tutorial was outside the contrast sweep, so the sweep was widened rather than the gap documented.** The `contrast` group mounted the forge cold, then with a mold open — never **poured**, so not one pixel of the casting's tutorial was measured. It now mounts a poured forge and, separately, **the tool panel itself**, which is appended to `document.body` rather than into a screen and had therefore never been swept at all. 461 → **783 elements**, 0 failures, proved by colouring the method text `#FBF6EE` and watching nine readings fire at 1.02:1.

> **Tools assist; they never gate.** The `nogate` check walks every layer with an empty yard and no tools and asserts ore still comes up.

## Invariants enforced in code, not asserted in prose

- **One engine.** `MF.smeltPoly` is the only thing that factors; `ingotProduct` the only thing that multiplies. `MF.validate` round-trips 1182 engine cases.
- **One formatter.** `quad()` for HTML, `quadText()` for SVG, `sqTerm()` for leading terms. Hand-rolled strings are a defect — two once printed `x² + 0x − 9` under a heading reading `x² − 9`.
- **`MF.areaModel` appends; it does not own its host.** It once opened with `innerHTML=''` and deleted authored content at two of six call sites.
- **The picture shows what is GIVEN.** Where a question is being asked, sides are dashed slots holding `?`.
- **Described, never graded** — and now **spendable**. No percentages, no accuracy, no X-out-of-Y, no ranks, nothing with a ceiling, nothing that goes down. Requirements are drawn as slots, never counted.

## The work fits on one screen, and that is measured

**The user's requirement, and it is the first one in this project about *reaching* the work rather than about the work:** *"less hurdles in our UI design for students that will easily give up on a site that makes them scroll or click too many unnecessary buttons."*

**The forge is one cluster now.** Target → the mold picture → the slots → **the rack** → the pour, with nothing between any two of them. The rack used to be a panel of its own *above* the craft floor with the heap between it and the mold, so a three-metal order meant five scroll moves, none of which was mathematics. The heap and the drawn yard are still there, underneath, unspendable and deliberately not a button — §11d untouched.

**The pour arms on FULL and never on CORRECT.** It is disabled while a slot is empty and goes bright, armed and **focused** on the drop that fills the mold — without moving the page (`preventScroll`). A wrong set of metals looks exactly like a right one, because lighting it only for a correct set would hand over the answer before the pour and leave the casting with nothing to say (`MINE-SPEC` §15a).
**In the mine the far end of the cluster is the stone, not a button.** The swing button lives in the hammer panel now — a fixed dialog centred on the viewport, so the distance to it is not a property of the bench and measuring it would report a pass however long the bench got. What a student has to see at once is **what they are holding and what they are hitting**: the belt, and the ore on the anvil. Measured at 985px: **335px** from the top of the belt to the bottom of the stone.

> **The `reach` group (9)** mounts both clusters at the live viewport width and fails if either runs past one screen-height; it asserts the craft floor's order (slots, then rack, then pour), that **the belt hangs above the anvil**, that **filling the mold hands focus to the pour**, and that the **hammer panel's content fits its own box**. Controls: a cluster taller than a screen, a rack above the slots, a pour that never takes focus, and a hammer panel padded past the bottom of itself — all caught.

> **The panel check earned itself on its first run.** At 380px the hammer panel held **870px of question in a 681px box**: everything present, nothing overflowing the page, no contrast failure — and the swing button below the fold of a dialog that does not look like it scrolls. `.toolsheet` caps itself at `88vh`, so measuring the panel's own height can never report it; measured as content against box it fails immediately. **The panel was cut until it fit** — a shorter title, a shorter close, one heading fewer, a smaller stone under 620px — not the threshold raised. It now runs **623px in a 686px cap** (`VERIFICATION.md` §74).

> **It found two things on its earlier runs.** The craft floor measured **1399px** from target to pour, because the mold is a 400×300 drawing at `width:100%` and grew to fill a wide column — `.moldwrap` is capped at 430px now, and *the number came from the check rather than from someone squinting at a screenshot*. And the pour's `focus()` was called before the panel was mounted, so it did nothing and said nothing: a control that looked wired and silently was not (`VERIFICATION.md` §58).

## Nothing walks off the right of a narrow screen, and it is measured now

- Contrast across every screen in the registry plus a **poured** forge and the **tool panel**: **905 elements** measured against real gradient backdrops, 0 failures.
- **Zero interactive elements under 44px.**
- **No horizontal page scroll**, and this is the first build where that is a *check* rather than a sentence. The `layout` group (9) mounts **every screen in the registry** at a real 320px and asserts nothing crosses the right edge, skipping anything inside a scroll container because a scroll container is allowed to hold something wider than itself. Control: nowrap text far wider than the stage.

> **It was a fossil before that.** This file had claimed "verified down to a 279px viewport" since the seam shipped — made by hand, once, on the screens that existed that day. The three new workshops broke it immediately and **all thirty groups stayed green over 155px of sideways scroll**, because contrast measures colour, `quiz` measures behaviour, and nothing measured width. Two causes, neither of which looks like a layout hazard in the source: a `display:flex` question row turned every inline `<b>` into a flex item that would not wrap, and a `<table>` given `display:block` still leaked its min-content width to the page (`VERIFICATION.md` §57).

## Measured, with ambient animations explicitly paused

`document.getAnimations().length` is **never 0** on this page — the dust and lamp are infinite, which is the ambient life §1 asks for. The settle step is `getAnimations().forEach(a => a.pause())`, and every figure below was taken after it.

- The settle step is `getAnimations().forEach(a => a.pause())`, and **that is a hazard as well as a tool**: run immediately after `MF.go` it freezes `main.arriving` mid-wipe, and a screenshot of a page caught halfway through arriving is indistinguishable from a clipped layout (`VERIFICATION.md` §56). Pause the ambient ones; **finish** the transitional ones.
- Every illustration is asserted to be **actually running** when mounted, not merely to carry the rule — `getAnimations({subtree:true})` on each of the three, all in `playState:'running'`.

## What is NOT true, and must not be assumed

- **No real student has used it.** Every claim about what a demoralised fifteen-year-old finds useful is a model's guess.
- **`student-tester` has never once returned a result.** Dispatched twice; killed by session limits both times. **The lived-experience surface has never been covered by anything but the author.**
- **`math-content` has never run against the generated ore.** The ore is generated rather than authored, so most lumps a student will meet have been checked only by `MF.validate`'s own sweep — which the author also wrote (§16).
- **Never deployed.** No `gh` CLI, no remote, no published URL. Nothing has been checked against the copy a student would open, which `VERIFICATION.md` §34 says is the only check that matters.
- **The scene overhaul is unfinished.** The surface and the mine are rendered places; the bench, the workshops, the yard and the forge are still panels.
- **No student has read one word of the new teaching copy, and none has seen the X.** The X diagram, the redacted work lines and the five rewritten tool panels were built in one sitting by the author. The `visual` group asserts that a panel DRAWS and LEAVES A HOLE; **nothing asserts that the diagram is legible, that the redacted number is the interesting one, or that the X is drawn the way a particular teacher draws it.** Those are human readings and they have not happened.
- **No student has read one word of the other new teaching copy.** Ten translation rows, seven method names, seven "why it works" paragraphs and seven practices were written in one sitting by the author. `rosetta` asserts that each row's *example* is true; **nothing asserts that the English on the left is the translation a teacher would use**, and no check on this page can. That is a human reading and it has not happened.
- **Every screen has been swept for contrast, and the sweep had edges.** The mine at 145 states × 4 widths (§67) and the forge, the Casting Shed, its three workshops and the Stamp Mill at 146 × 4 (§68) — **1,164 renders, two real failures, both fixed**. It measured **text against its backdrop, at rest**: not `:hover` or `:focus` colours, not disabled controls, and nothing mid-transition beyond the burst frames and the pour, both forced visible. **Text that carries its own halo is asserted structurally, not measured** — the halo *is* its backdrop, so the check says the halo exists, contrasts and is thick enough, and cannot say a stroke looks thick enough on a busy casting. **And contrast is not legibility** — size, weight, tracking and whether a sentence is worth reading are human questions, and none of them has been asked of one line on this site.
- **Nothing asserts that the anvil now matches the rest of the art.** "It does not match the art style" was a human reading and so is "it does now". The build can say there are no gradients left in `MF.anvilScene`; it cannot say the drawing sits right beside the gallery wall above it. **No group measures style.**
- **`hollow` looks at one element, at one width.** It measures `.benchore` against its own text, at whatever the window happens to be. It says nothing about any other box on the bench, and a run at 1250px cannot see a fault that only exists under 560px. Its value is that it is honest about the width it swept.
- **`MF.validate()` cannot be run from `file://` any more — and could not before.** The preview pane renders a `file://` page as a static snapshot, so `MF` is never defined and *nothing* on the page can be exercised. This build was verified over a local HTTP server. The claim that the site "runs from `file://`" is still believed and is still **unproven in a browser this session**.

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
