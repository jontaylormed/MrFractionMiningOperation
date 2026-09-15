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
| **Validation** | `MF.validate()` → **26,600 checks / 48 groups / 0 errors**, two controls that must fail, and do — **run it at the width you ship from**, because `layout`, `reach`, `hollow` and `cartdraw` measure the live viewport and report it (`VERIFICATION.md` §61, §63, §65). Verified at **380×780, 560×760, 994×700 and 1250×900** |

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

**Measured 2026-09-07, all four widths, 0 errors over 26,600 checks in 48 groups, both controls failing.**

> **The count moves with the sound files, and that is why two numbers were in circulation.**
> `MF.validate()` run the instant after Enter reports about **90 fewer checks** than the same
> build run once `sfx/` has finished decoding, because the `sound` group and everything
> downstream of a loaded buffer have nothing to sweep yet. Every count in this file is taken
> **after the beds are up**, at 1250×900, on a freshly loaded page that has not been driven —
> a page that has been through `playthrough(1..9)` reports different denominators again.

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

- **Left — the order board.** Seven orders as cards, each showing whether it is in your hands, whether you have the metal, or whether it needs more. **Every one opens**, including the ones you cannot fill: a disabled button explains nothing, and an open mold can say what it is waiting for. Clicking one you have already made explains it instead of remaking it. It is `position:static` since 2026-09-13, because Deep Castings and the Shelf now hang under it in the same column (see *Where the Deep Castings board is*).
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

## The seven instruments, audited on ore they were not written for

**USER, 2026-09-06:** *"All tools have not been tested by the user because the user has been
using them for a long time in the mine."* Driving an instrument yourself teaches you what it
says about the lumps you happen to dig, which is the least representative sample there is.

Every tool was held to a fixed bench of 21 shapes and to ~300 generated lumps each. **Every
group was green while all of this was true**, because `lens` and `schema` ask whether a
reading exists and whether it over-shares, `visual` asks whether a hole is somewhere on the
panel, and `contrast` asks about colour — **none of them asked whether the sentence is well
formed, or whether the tool is telling the truth about the lump in front of it.**

**Three fixed 2026-09-07:**

1. **The Auger printed `x² + −2x + ? + 6`.** Its split step joined every term with `" + "`
   regardless of sign — **137 of 307 swept lumps, 45% of the mine.** The same defect as the
   `x² + 0x − 9` the "one formatter" rule was written after. Both call sites now go through
   **`MF.termLine`**, where the signs are the joiner's job. *A hole carries its own sign:*
   `?` stands for a whole signed term, because printing `+ ?` where the answer is `−3x` is
   both wrong and a leak — it hands over the sign the student is being asked for.
2. **The Steel invited a swing at native metal.** On the prime 97 it said *"The X is the way
   into this one"* — there is no a·c on a number — and then *"Both sides are still yours.
   Name one and swing."* It now names the lump finished and offers nothing.
3. **The Drill handed over everything, and offered a swing at a prime.** On 97 it printed the
   pair table and *"Any of them can be swung; some leave more still to break."* On 72 it laid
   out all 24 rows **with no `?` anywhere** — the only reading in the build that held nothing
   back. A prime now gets named as one; a composite keeps the table but leads with `72 = ? × ?`.

**Native metal is the one object this site calls complete, and a tool telling a student to
keep swinging at it is the site contradicting its own thesis in the room where the thesis
lives.** It is not a wording slip: a student who swings is told the pick glanced off, and has
no way to learn it never could have run.

| tool | admits a finished lump, before → after |
|---|---|
| Lantern | 7/7 → 7/7 |
| Steel | **0/7 → 7/7** |
| Drill | **0/7 → 6/7** |
| Crosscut | 5/7 |
| Pick, Shifter, Auger | **0/7 — still open** |

**Still open, reported and not yet fixed:** the Pick is identical on all 21 shapes and leaves
no hole; the Crosscut still renders a vestigial "DECIMAL DIAL" block under its old name, on
exactly the lumps it has just declined; both X sides remain `?`; and Pick, Shifter and Auger
say nothing about native metal.

**New group `reading` — 619 checks.** No printed sign-run, no unresolved value, no throw, no
swing offered at a lump the bench *literally* marks finished, and the two tools that now name
it must keep naming it. See `VERIFICATION.md` §94 and §95 — the first version of this group
guarded itself with `MF.isNative`, the exact call the fix turns on, and its control was then
misread because `validate()` only returned the first twenty errors.

## The sound layer, and the two beds

**Added 2026-09-06, at the user's request, mirroring the sister site's volume controls.** The
site made no sound at all before this; `THUD!` and `CLANG!` were painted `<div>`s.

`MF.audio` is one `AudioContext` behind three buses — `fxBus`, `ambBus`, `musicBus` — into a
`master` that mute pulls to zero. **It never speaks first:** the context is built on the
"Enter the Operation" button and not one moment earlier, and `play`, `say` and every bed
refuse to construct one on their own. That is enforced on a detached `Object.create(MF.audio)`
copy rather than by nulling the live one, which is `VERIFICATION.md` §80 exactly.

**Nine cues, each on a moment that already has a picture** — `pick` when a lump is cut out of
the wall, `thud` when a seam runs, `clang`
on a glance, `pour` at the ladle *and* in the Molds room, `stamp` under the mill press, `tick`
when a lump is picked out, and `hoist` when the cage moves between layers. Each is
**synthesised by default and file-backed when a file is there**, and every failure — no
folder, 404, a format the decoder refuses, a fetch still in flight — falls back to the
oscillators. **Adding sound files can never take sound away.**

**THE PICK SWING WAS SILENT, AND 132 SOUND CHECKS SAID NOTHING. USER, 2026-09-07:**
*"There should be a sound a pick axe... There are no sounds. Something is very broken that you
think is working."*

`MF.breakRock` — the **"Swing the pick"** button, a 400 ms pick-arm animation and a nine-shard
burst, the loudest gesture in the mine — fired no cue at all. The faint noise a student *did*
hear was `tick`, which belongs to merely **selecting** a lump one step earlier. Every check was
about the sound *layer* — a cue can fire, fall back, be muted, be levelled, duck the beds — and
**none asked whether the button a student presses fires one.** `VERIFICATION.md` §97.

A literal `GESTURES` table now names every physical moment and the cue it owes, plus the
reverse: a cue nothing plays is a failure, not 7 KB nobody notices.

**And the two hammer outcomes are now two real hammer strikes**, chosen by how they decay
rather than by spectral tilt — the physically true distinction and a much louder one:

| | RMS | still ringing at 180 ms | |
|---|---|---|---|
| `thud` — the seam runs | −21.5 | −36.9 | **lands and stops** |
| `clang` — the pick glances | −23.0 | −18.8 | **bounces and sings** |

19.5 dB apart, which is what "tellable with your back to the screen" means as a number. The
old `clang` came from a take literally named *"Put Hammer In Box"* — a set-down, and a
confident metallic clunk is what success sounds like, not a miss.

**THE BEDS DUCK UNDER A CUE. USER, 2026-09-07:** *"I am hearing the elevator. But I am barely
hearing any sound effect for the pick. And i hear nothing for the hammer."*

The hammer was firing correctly — verified by driving the real bench. **Duration was doing the
work:** the elevator is four seconds of continuous motor, the hammer four tenths of a second,
and two beds at ~−21 dB RMS mask a short transient however it is levelled. Levelling harder
only reaches the point of clipping, and compression was measured to make it *worse* — it pulls
down the transient that dominates the RMS and cost 6 dB of the spectral tilt that makes a
scrape tellable from an impact.

So `MF.audio.DUCK` pulls both beds down **~10 dB for 0.28 s** on the three impacts, gentler and
longer for the pour and the hoist. Measured live: 0.600 → 0.180 → 0.600. **The `tick` is
deliberately not in that table** — it fires on every lump picked out of the wall, and a bed
that dips on every pick is a bed that pumps.

**The Molds room pours through `playSettled`, not `play`.** That room re-pours on every slider
tick, so a cue on the repaint fired forty times across one drag and only the last matched what
the student ended up holding. It waits 420 ms for the hand to stop, then pours once.

**Two beds, not one, and they are asymmetric on purpose:**

| | falls back to | why |
|---|---|---|
| `amb` — the mine's room tone | **the oscillators** | a mine with no room tone is the thing the fallback exists to prevent |
| `music` — the track | **nothing** | you cannot synthesise a song, and a drone arriving where a student turned on "Music" reads as a fault rather than as music |

They have separate buses and separate sliders because a room tone and a song are not the same
request. Both start at **off**; effects start at **`MF.ACCESS_FX` = 0.85**, up from 0.35 — the beds sit at ~−21 dB RMS and the cues at −24 to −28, so a further 9 dB cut had been putting a hammer landing *underneath the music it lands over*. The `sound` group holds the default to a floor of 0.6.

> **The bed assertion is an IFF, not "it starts".** A bed runs exactly when it is wanted *and*
> has something to play. "Turning music up starts the bed" is red on every `file://` open —
> the fetch cannot succeed there — and `file://` is the one way this page is guaranteed to be
> used. `sound` is 132 checks; six of its controls were proved by reintroducing the fault,
> including one slider carrying both beds and the music bed quietly synthesising a drone.

**All audio in `sfx/` is © Epidemic Sound**, under the author's subscription. `sfx/SOURCES.md`
and the README credits section carry it. Deleting the folder is a supported state, not a
degraded one — which is exactly what makes the licence honourable by removing a directory.

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

## The hammer is three sounds, and the rooms open the beds

**USER, 2026-09-07:** *"There should be a swing, sound, and then a chip when the hammer strikes
the ore, corresponding with the clank or thud."*

**The cue was 1740 ms early.** `.hammerswing` runs `hammerarc` over 3000 ms with the strike
keyframe at 58%, and one `play('thud')` at the moment the swing was *decided* fired while the
hammer was still winding up. Nothing was broken — the cue played, the bus measured 0.63 — the
sound and the picture were describing different moments. `VERIFICATION.md` §98.

`MF.audio.playAt(name, delay)` schedules on the audio clock, and `MF.audio.hammer(kind)` lays
three cues on three keyframes:

| | | |
|---|---|---|
| 46% · 1380 ms | the downswing begins | `swish` |
| 58% · 1740 ms | **the strike** | `thud` / `clang` (57% · 1710 ms on the bounce) |
| + 100 ms | the rock giving way | `chip` — **a hit only** |

Measured against the live animation: the arc starts **4 ms** after the cues are scheduled.

**The chip never follows a glance.** Loose rock coming away is what "the seam ran" *sounds*
like; a glance is the hammer skidding off with nothing broken, and debris on it would say the
opposite of what the rock did. The check enforces the order *and* that meaning, reading 3000 ×
0.58 out of the stylesheet rather than comparing `MF.HAMMER` to itself.

`swish` is **the one cue with no recording behind it** — a blacksmith take is all strikes, and
none of the supplied material contains a hammer moving through air. Filtered noise swept up and
away is what a whoosh physically is.

### What each room opens the beds at

**USER, 2026-09-07:** music at 30% on the surface, no ambience; ambience at 40% on entering the
mine.

- **The music is a state default** (`MF.ACCESS_MUSIC = 0.30`) — no room enforces it, so nothing
  can undo it.
- **`MF.ROOM_SOUND = { mine:{ambience:0.40} }`** — the pump-jack bed is the mine's own room
  tone, so the mine is the only room that raises it.

**It is a first arrival only, and a slider the student has touched is off limits to every room
for the rest of the visit.** A room that reasserted a volume on every arrival would be silently
undoing the panel, and the panel is the one place on this site that promises the student is in
charge.

> **The first version had `home:{music:0.30, ambience:0}` and it was a real bug**: walking back
> up out of the mine forced the room tone off, wiping a level the student may have set. The
> check written for it caught it on its first run. A room may **raise** a bed it owns; a room
> that lowers one is undoing a setting from somewhere else, and that is now its own assertion.

## Layer 6 — the Grouping shaft

**USER, 2026-09-07:** continue building the other shafts. `MINE-SPEC.md` §7 settles *which*
and *how many*: **"Grouping ships first"**, and **"one shaft opens per release — four families
shipped together is four separate recognitions with four separate methods, all under-taught."**
So Grouping is finished and **Higher Ground** now carries the *next shaft to open* note.

**The ore is `xy + b·x + c·y + d`, and it needs one number fewer than it looks:**

```
(x + c)(y + b) = xy + b·x + c·y + b·c
```

Four terms group **exactly when the end is the product of the two in the middle.** Nothing is
hunted — that is what makes it the purest separation move in the mine, and why it makes the
loaded trinomial feel inevitable rather than arbitrary. It is **deliberately monic**: a common
metal would be layer 2's lesson wearing a disguise, so there is no plain seam in these at all.

**About a quarter of the layer does not group, and that is the layer as much as the grouping
is.** If every four-term lump came apart, "check the end against the product of the middle"
would be a ritual rather than a question, and a student would learn to swing without looking.
The share is asserted between 10% and 45% rather than hoped for.

### The second letter is where the risk was

`x + 3` and `y + 3` have identical coefficients and are **not the same bracket.**

- **`MF.oreEq`** compares the letter; **`MF.rebuild`** multiplies a floor back together
  whatever letters are in it.
- **`MF.oreMul` stays one variable forever** and now *refuses* a group rather than running it
  through `oreCoeffs` and returning NaN — a silent wrong answer, and what 71 of the first
  validate run's failures were made of.
- **The hammer asks which letter** — two dies on the head, replacing the x-count box, because
  both brackets carry a single letter and a box that can only be filled one way should not be
  there. **The right number on the wrong letter glances**, which is the mistake this layer
  exists to make available.
- **A y-bracket reaches the yard labelled**, like an irreducible quadratic, so the forge can
  never pour one believing it had the other. Grouping metals go on the rack and cannot be
  spent — the same standing the quadratics already had.

### What the instruments say about it

| | |
|---|---|
| **Auger** | the real method: the two halves, one bracket pulled off the first, and the second left as **the hole** — whether the *same* thing comes out of the other half is the entire question |
| **Lantern** | the shape of one bracket, digit held back, per its own rule |
| Steel | there is no plain metal in a monic four-term lump, and says so |
| Crosscut, Shifter, Drill | decline, and name the Auger |

**Five of them had been reading `ore.b` and `ore.c` as if a four-term lump were a quadratic**,
printing "? × 2" and "is the middle term nothing? no — it is 3x". Saying nothing would have
been better than saying that, because it was confident.

**New group `grouping` — 2,574 checks.** The identity from both directions over every b,c in
−6..6; both letters swinging and the wrong letter glancing; 300 generated lumps classified,
broken and rebuilt; the native share held in band; the yard keeping the letter. Driven through
the real UI as well as the API — dig, cart, bench, `y + 2` glances, `y + 3` runs, floor is
`y + 3 · x + 2`, both on the rack.

### The Casting Shed lesson for it

**The Auger's lesson now teaches the four-term lump, and ends by pointing back at the
trinomial** — not the other way round.

`MF.drawLesson` runs `steps(practice.ore)`, so the practice lump chooses which case the whole
lesson walks. It is `xy + 3x + 2y + 6` now, in six slides:

| | |
|---|---|
| 1 | four terms already, nothing to split — and they are **counted** on screen |
| 2 | take them two at a time |
| 3 | pull the common piece off each half — the second bracket is the hole |
| 4 | did the **same** bracket come out of both? |
| 5 | so the end tells you before you start: `b × c` |
| 6 | a trinomial is this, one step later — the X **makes** the four terms |

**That ordering is the pedagogy.** The trinomial lesson taught this move with a manufacturing
step bolted on the front; a four-term lump arrives with its four terms already there, so the
method is visible on its own — and once a student has seen it here, the X stops looking like a
rule and starts looking like a way of *getting* here.

The practice takes the same x/y head the anvil uses. **`MF.letterPick` is one builder shared by
all three places that ask for a bracket** — the hammer, the practice, and "the other side"
under a tool reading — because three copies of a toggle is three chances for them to drift into
disagreeing about what a bracket looks like.

> **The `taught` group caught this lesson three times while it was being written:** a slide
> that was told and not shown, and 1617 then 1232 characters of prose against a budget of
> 1150. It is 1153 now. The budget is why the slides read as short as they do, and nothing was
> relaxed to fit.

## Layer 7 — Higher Ground

**`x⁴ + b·x² + c`, which is a trinomial wearing a disguise.** Put `u = x²` and `x⁴ − 5x² + 4`
is `u² − 5u + 4` — layer 4. And the halves that come off are ordinary two-term lumps:

```
x⁴ − 5x² + 4  =  (x² − 1)(x² − 4)  =  (x−1)(x+1)(x−2)(x+2)
```

**This layer adds no method. It stacks two that already exist**, and the lesson is that the
first move makes the second one available. A lump here takes **three swings** where nothing
else in the mine takes more than two, and the generator asserts that **at least 60% of
breakable lumps go past one swing** — one that stopped after the substitution would teach that
x⁴ is a trinomial and nothing more.

The hammer head reads **`( [ ] x² + [ ] )`** on a quartic and switches back to `( [ ] x + [ ] )`
the moment the halves land on the floor. A head labelled `x +` would be telling a student they
had typed a shape that is not in there.

### `x⁴ + 4` is not an element, and that was the whole risk

It is **not** enough that no whole pair multiplies to c and adds to b:

```
x⁴ + 4  =  (x² − 2x + 2)(x² + 2x + 2)
```

A quartic of this shape can also split into two quadratics whose x terms cancel —
`(x² + sx + t)(x² − sx + t) = x⁴ + (2t − s²)x² + t²`. Putting `x⁴ + 4` on the rack as native
metal would be the site telling a flat lie about the one claim it is built on. **`MF.isNative`
tests both ways**, and `MF.quartCrossSplit` is the second. The generator also **refuses lumps
that only split the cross way**, because no instrument in this mine teaches that move: every
lump up here is either breakable the way the Shifter shows, or genuinely done.

> The `quartic` group brute-forces both splits over every lump the generator can produce and
> holds `MF.isNative` to the answer. Its control — deleting the cross test — reports
> **30 lumps**, `x⁴ + 4` first.

### What the instruments say

| | |
|---|---|
| **Shifter** | the gear change: `(x²)² − 5(x²) + 4`, then the X, then *"look at each half again"* |
| **Drill** | reads `x⁴ − 16` **directly** — no middle term, both ends square. Declining there would have been an instrument refusing work it can plainly do because the exponents looked unfamiliar |
| **Lantern** | one half's shape, digit held back |
| Steel | no plain metal in a monic quartic, and says so |
| Crosscut, Auger | decline, and name the Shifter |

**`MF.rebuild` needed degree 4** to prove a floor of four linear pieces is still the lump it
came from. `oreMul` stays quadratic — widening it would put a four-deep loop under every swing
in the mine — so the wider multiplier lives beside `rebuild` and nowhere else. Its first
version dropped the four-linear case: `x − 1` is stored as `{a:0,b:1,c:-1}` and comes out as a
length-3 array, so four of them reached length 7 and tripped the degree cap. **The zeros are
padding, not degree**; `trimArr` is the fix.

**New group `quartic` — 2,452 checks.** The substitution both ways over every pair in −8..8;
`x⁴ + 4` by name and every `(s,t)` form by construction; the hammer taking `x²` halves and
nothing else; 300 generated lumps brute-forced against `MF.isNative`; the depth and native
shares held in band. Driven through the real UI: `x² − 1` runs, the head switches gear, `x − 1`
runs, and the floor rebuilds `x⁴ − 5x² + 4`.

**Two shafts remain cut and not timbered:** Two Elements (`x² + 5xy + 6y²`) is next, then Cubes.

### The Casting Shed lesson for it

**The Shifter's lesson keeps the box and puts the gear change on the front of it.** Five slides
on `x⁴ − 5x² + 4`:

| | |
|---|---|
| 1 | x² multiplied by itself is x⁴ — so read the x² as the unit |
| 2 | which is a trinomial, and it goes in the box like any other |
| 3 | the sides carry a single x², and both are still yours |
| 4 | **and then the part a trinomial never has: look at each half again** |

**The box is not replaced, it is reached.** A quartic lesson that dropped the area model would
have cost this instrument its own method in order to teach a substitution — so slides two and
three are the box, drawn one gear up, and slide four is the only thing the trinomial version
never has to say.

All three heads that ask for a bracket now read **`( [ ] x² + [ ] )`** on a quartic —
the anvil's hammer, this practice, and "the other side" under a tool reading.

> **Two rendering bugs, both caught by looking at the rendered slides rather than the source.**
> `&sup4;` is not an HTML entity — only `&sup1;`, `&sup2;` and `&sup3;` exist — so it reached
> the screen as the literal text `&sup4;`; it is `&#8308;` now. And `MF.areaModel` draws its
> cells as SVG `<text>` and sets `textContent`, so `x<sup>4</sup>` in a cell printed as that
> exact string. **Markup belongs in `act` and `caption` and nowhere near a cell.**

## Layer 8 — Two Elements

**`x² + b·xy + c·y²` is the plain trinomial with a second letter on it, and nothing else:**

```
x² + 5xy + 6y²  =  (x + 2y)(x + 3y)        2 × 3 = 6,  2 + 3 = 5
```

The pair hunt is layer 4's, unchanged. What is different is only what the brackets *look*
like — and that is the whole lesson. A student who has been told "the numbers on the ends
multiply to c" finds out here that they were never numbers, they were **coefficients**, and the
y was invisible because it was 1.

### The test for "finished" is complete here, which the quartic's was not

The lump is degree 2 and **monic in x**, so any split into two linear forms over ℤ has leading
coefficients multiplying to 1 — both brackets are `x + something·y`, and the somethings are
exactly a whole pair. **There is no third way in.** Asserted by brute force over every b in
−9..9 and c in −20..20 rather than reasoned about and left there.

| | |
|---|---|
| `two` | the lump, `x² + bxy + cy²` |
| `bi` | one bracket, `x + p·y` — not a shape `poly` can hold, which has one variable |

**The hammer head reads `( x + [ ] y )`** — one box, because both brackets are monic in x and
there is nothing to choose between the letters. That is the opposite of a grouping lump, where
the two letters sit in *different* brackets and the head has to ask which. `MF.swing` now
supplies the 1 for every head with no x-count box rather than reading an empty string left over
from another lump.

`x + 2y` reaches the yard **labelled**, so the forge cannot pour it believing it had `x + 2`.

### What the instruments say

| | |
|---|---|
| **Crosscut** | the pair hunt, and then the one slide that matters: the pair land as *coefficients* |
| **Drill** | reads `x² − 9y²` **directly** — no middle term, both ends squares, and the second being a letter squared changes nothing about the shape it recognises |
| **Lantern** | one bracket's shape including the y, digit held back |
| Steel | a lump with a single x² at the front never carries a plain metal |
| Shifter, Auger | decline, and name the Crosscut |

**Each shaft has gone to a different instrument** — Grouping to the Auger, Higher Ground to the
Shifter, Two Elements to the Crosscut. `MF.readBracket` gives all seven the same answer on a
single bracket rather than each inventing a reason.

**New group `twoel` — 2,928 checks**, including a **sign-coverage** assertion: a layer that only
ever handed out `x² + 5xy + 6y²` would teach the shape rather than the method, so all four sign
combinations have to turn up. Its control — a generator drawing only positives — reports one of
four.

### The lesson

The Crosscut's lesson walks the two-letter lump in five slides: the same X, the same hunt,
**what is new is where they land**, then `x² + 5x + 6` was doing this all along with a y of 1,
and finally — unchanged — no whole pair still means no seam. The `taught` group rejected it
once at 1380 characters against the 1150 budget.

## Layer 9 — Cubes, and the map has nothing left on it

**Two identities, read off the shape:**

```
p³x³ − q³  =  (px − q)(p²x² + pqx + q²)
p³x³ + q³  =  (px + q)(p²x² − pqx + q²)
```

`MINE-SPEC.md` §7 writes it `a³ ± b³`. It is the same identity with x in the first slot — the
form school teaches, and far more usefully, **the form whose pieces the mine already holds.**
`x − 2` is an ordinary linear and `x² + 2x + 4` an ordinary quadratic, so nothing new goes to
the yard, nothing new goes to the forge, and **the hammer needs no new head at all.**

### Two things make this layer unlike every other

**1. The second piece never comes apart.** Its discriminant is −3p²q², negative for every p and
q there are — so `x² + 2x + 4` is an element for exactly the reason `x² + 4` is. A student who
has spent eight layers learning to keep going until nothing breaks meets a lump here that
**stops after one swing and is genuinely finished.** The `cubes` group asserts that over every
p in 1..5 and q in 1..6 rather than on one example.

**2. "Finished" is one question, not two.** A cubic factors over ℤ **iff** it has a linear
factor — there is no way to write a degree 3 as two quadratics — so `MF.isNative` searches for a
rational root rather than pattern-matching the identity. That distinction is load-bearing:

> **`2x³ − 16` has a root at x = 2 and is not a difference of cubes.** A mine that tested only
> for the identity would put it on the rack as native metal. The generator keeps such lumps out
> by enforcing `gcd(a, d) = 1` — which makes "both ends are whole cubes" and "something linear
> comes out" **the same question**, proved by brute force over every coprime a ≤ 30, |d| ≤ 30.

**The Drill owns it**, and that is the right home: its whole character is recognising rather
than searching, and a cube seam is that exactly. Its lesson is renamed **"Two ends, read on
sight"** — squares and cubes are two instances of one habit. The other six decline and name it.

**New group `cubes` — 3,155 checks.** Both identities, the always-native second piece, the
`2x³ − 16` trap, the coprime equivalence, the hammer taking the identity's bracket and nothing
else, both signs turning up in the generator — and **that the map has no unopened shafts left
drawn on it.**

### `MF.SHUT_SHAFTS` is empty, and stays empty

Four shafts were drawn from the first build so the mine would read as *continuing* rather than
as stopping. All four are cut and timbered now. **A fifth invented to keep the list from being
empty would be a promise nobody has decided to keep**, so the array is empty and a check fails
the build if anything is added to it without a layer behind it.

**All nine layers play through end to end**: `playthrough(1..9)` all whole.

### The lesson, and the three copies that went stale under it

**The Drill's lesson shipped with layer 9** (commit `1839720`) as **"Two ends, read on sight"** —
four slides on `x³ − 8`, practising the bracket that comes off. Squares and cubes are two
instances of one habit, which is what this instrument has always been for.

**But opening the shaft widened the instrument's job, and an instrument describes itself in
four separate strings.** Three of them went stale and stayed green:

| | |
|---|---|
| `ds` — the order board | still "says whether it is a twin seam" |
| `does` — the belt list | still "the difference of two squares, on sight" |
| `REALWORLD.tie` | **"that is a difference of two squares"** — directly under four cube slides |
| `SCHEMA.name` | correct |

The tie-back is the worst of the three: it sat one screen below a walkthrough and a practice
that were **entirely about cubes**, contradicting them.

**This is the file's most frequent failure, not a new one** — a second copy of the words
drifting away from the code. It has cost `t.teaches`, the voice script, and now this. All four
strings are now held to naming **both** identities, with the limit written down beside the
check: it proves the strings mention the right words, not that the sentences around them are
true. Worth having anyway — all three failures were a whole missing subject, not a subtle one.

> The real-world entry now carries both shortcuts: `47 × 53 = 50² − 3²`, and `1001 = 10³ + 1³
> = 11 × 91`, which is why 1001 = 7 × 11 × 13 and why any three digits repeated divide by all
> three. The `taught` prose budget counts the folded anecdote too, so it was trimmed to fit.

## When an instrument has nothing to say

**USER, 2026-09-07, after driving all nine layers:** *"We need a strategy when a tool does
nothing to help the student understand why the ore didn't change."*

**Measured before designing anything: 69 of 119 tool-on-lump combinations changed nothing at
all.** The Steel was silent on 15 lumps out of 17. More than half of every instrument-on-rock
a student can try did visibly nothing.

`MF.lensFor` returned `null` and `MF.oreDisplay` fell back to the plain label — so **a lump
with a tool held to it was drawn exactly as a lump with no tool on it.** Three different
situations (the tool is broken, I failed to apply it, the tool has no business here) collapsed
into one blank.

> The comment that stood there was half right, and the half it got wrong cost the most: *"null
> is a real answer, not a failure: an instrument that has nothing to say should say nothing
> rather than invent."* Not inventing is correct and stays. But **"say nothing" and "look
> identical to having done nothing" are not the same thing**, and only the first was intended.

### The strategy, in three parts

1. **It is visibly held.** The lump changes, so the student knows the tool landed.
2. **It cannot be mistaken for a reading.** Dimmed, nothing re-spelt, no hole drawn — because
   the one genuinely dangerous outcome is "no bite" read as a fact about the rock.
3. **It points at the one that does bite** — `MF.OWNS`, keyed by the assay, so the engine's own
   classification does the pointing.

**And it points with a glyph, not a sentence.** The first version wrote the instrument's name
under the lump and the `lens` group threw it straight out — **§21: in the mine a lens re-spells
the ore and says nothing beside it.** It was right; a caption under a rock is a panel wearing a
different hat. It now points with the owning tool's **own belt icon**, which is where the
student goes to pick it up. The words live in `found`, where a screen reader gets them and the
rock does not.

### What it turned up

**Native lumps were being sent to the Lantern, and the Lantern's lens had nothing to say
either** — the one instrument whose stated job is *whether a seam still runs through this*. Its
reading always said "Nothing moves in there"; its lens declined. It now marks an element with
the diamond the Pick already uses, because a second glyph for the same fact is a second thing
to learn.

**`reading` is 1,580 checks now.** Every tool on every bench lump must change the ore; a
no-bite mark must not draw a hole or write words; and **the tool it points at must actually
bite** — a dead end that points at another dead end is worse than one that says nothing.

## The hammer takes a power now

**USER, 2026-09-07:** *"The hammer also needs to factor in variables with powers higher than 1."*

**The head used to pre-cut it.** On Higher Ground the bar arrived reading `( [ ]x² + [ ] )` —
which hands the student the one thing that layer exists to make them notice: that the halves
come out in **x²** rather than x. Every instrument on this site is careful to show part and
never all, and the hammer was quietly giving away the shape of the answer before a single swing.

The bar is now **`( [m] x [p] + [k] )`** on every lump that takes a bracket — one shape, and the
power is typed. **Empty is 1**, because `x` on its own is x¹ and nobody writes the 1; zero and
negatives are not shapes a hammer can be cut to.

| typed | on `x⁴ − 5x² + 4` |
|---|---|
| `x − 1` | *"This lump is built out of x² halves, and the head is cut to x."* |
| `x² − 1` | the seam runs → `x² − 1 · x² − 4` |
| `x² − 2` on `x² − 5x + 6` | *"There is no x² anywhere in this one for that to bite on."* |

**A wrong power glances like any other wrong shape** rather than being quietly corrected —
which is the only version of this that teaches anything. `MF.simplestFactor` carries `p` so
every sweep that follows the engine swings the bracket the engine actually meant.

> The grouping and two-element heads keep their own shapes. Those lumps are monic and
> single-power **by construction**, so a power box there could only ever be filled one way —
> and a box that can only be filled one way is a box that should not be there.

## The surface closes on three claims, and all three are about factoring

The bottom of the home screen is a `.stats-strip` — the sister site's closing move, a numeral
over a label over one line — replacing a **SHAFTS NOT YET OPEN** panel that had become an empty
frame the moment layers 6–9 were cut. A panel promising more over a blank row says the opposite
of what it means.

| | | |
|---|---|---|
| **9** | shapes | Plain numbers down to cubes. **Naming the shape** is most of the work. |
| **2** | directions | The mine breaks; the forge pours. **Factoring is distributing, run backwards.** |
| **1** | idea | A prime and an irreducible polynomial are **the same object**. |

**The first version spent a box on there being no marks, and the user threw it out** — *"you are
focusing too much on nothing marked. focus on other concepts of factorization."* That box was
true and it was a claim about the **place** rather than about the mathematics. A stranger reading
these three now learns what factoring is here: what the nine layers are for, that breaking and
pouring are one move run in opposite directions, and the thesis the site rests on. Nothing is
marked anywhere on this site and it does not need a third of the front page to say so.

**The 9 is read off `MF.LAYERS.length`, not typed.** A front page claiming nine when a tenth
shaft opens is a lie nobody would think to go and correct, and a number that cannot be wrong is
stronger than a check that catches it.

### The `sell` group — 12 checks

These three boxes are the only place on the site that makes a **claim to a stranger** rather than
describing what is in front of them, and the panel they replaced went stale for a whole session
with nothing saying so. So the group asserts three boxes, each carrying all three of value /
label / line, and the numeral matching the mine. It reads `textContent`, not node presence —
**an empty span is still a span**, which is exactly how two lesson-reveal checks passed for a day
(`VERIFICATION.md` §94). Proved by putting each fault in the file: a blanked box fires *"box 3 has
no label"* and *"box 3 has no say"*, a deleted box fires *"the surface closes on 2 boxes, not
three"*, and a hardcoded numeral fires *"the front page claims 9000 shapes and the mine cuts 9."*

## Deep Castings: four orders, and not one of them is an instrument

**USER, 2026-09-07:** *"Add orders for the deep shaft metals."*

Layers 6–9 produce metal the order board could not spend — a `y`-bracket, `x + 2y`, `x² + 4`,
`x² + 2x + 4`. Every one of the seven orders is a **one-letter quadratic**, so four layers' ore
piled up on the rack with nothing to do and nothing saying why.

### What was nearly built instead, and the evidence that stopped it

The first answer was **two new instruments** — one for grouping, one for the gear change — and
both already exist:

| | |
|---|---|
| `MF.SCHEMA.auger` | named **"Factoring by grouping"**, leads with `if(MF.isGroup(ore))`, practises on `xy + 3x + 2y + 6` |
| `MF.SCHEMA.shifter` | opens the quartic with *"read the x² as the unit"*, practises on `x⁴ − 5x² + 4` |
| `MF.SCHEMA.dial` | practises on `x² + 5xy + 6y²` |
| `MF.SCHEMA.drill` | practises on `x³ − 8` |

**All four deep-reading tools already teach their deep case, and all four already practise on the
deep shape.** `MF.OWNS` maps `grouped`→Auger and `stacked`→Shifter because those instruments
genuinely own those methods, not because they were stretched to cover them. A rank-8 "Pairing
Bar" would have shipped a second grouping lesson beside the Auger's.

**So the instrument economy is saturated, and a part is not a tool.** No lens, no schema, no belt
slot, and nothing in the mine reads differently for one — because inventing an effect for it
would be the "tool with no effect" `MINE-SPEC` §25b calls useless.

### What a part is: one exact deep object, and a multiplication nothing else asks for

| | order | cast | from |
|---|---|---|---|
| ⛶ | The Winding Frame | `xy + 2x + 3y + 6` | `(x + 3)(y + 2)` — four products, **none merge** |
| ◫ | The Fourth Stamp | `x⁴ + 5x² + 4` | `(x² + 1)(x² + 4)` — the gear change, forwards |
| 🚆 | The Second Rail | `x² + 3xy + 2y²` | `(x + y)(x + 2y)` — two letters, and the middles **do** merge |
| ⬢ | The Cube Counterweight | `x³ − 8` | `(x − 2)(x² + 2x + 4)` — six products, **four cancel** |

Those four multiplications appear nowhere else in the build. §12b holds hardest here: a student
will not believe a cube's companion bracket until they have watched the middles go, and the mold
now draws exactly that — `2x² − 2x² + 4x − 4x` → `0`, over `= x³ − 8`.

**`x⁴ − 5x² + 4` was the first target and it is unfillable.** Its halves are `(x² − 1)(x² − 4)`
and neither is native, so nothing would ever reach the rack — the unreachable order §12c exists
to catch. `x⁴ + 5x² + 4` splits into two irreducibles instead. The `parts` group now fails the
build over it, proved by putting it back.

### What had to change underneath

- **A target is an ORE, not `{a,b,c}`.** `castOre` on the order; `MF.castText`, `MF.castPlain`,
  `MF.castableFrom` and `MF.forgeJudge` all take both. The judge tests the deep target **first** —
  every deep object "overflows" the mold's two numbers by definition, and the overflow branch
  would otherwise have called the ordered part scrap for being the ordered part.
- **`MF.oreTerms` / `MF.termProducts`** — ore as `{c, x, y}` terms, so a pour with two letters or
  six products can be drawn at all. Plain characters, never markup: `MF.moldScene` sets
  `textContent`, and `x<sup>4</sup>` reaches the screen as itself (the `areaModel` defect).
- **The rack has a third shelf.** Deep ingots carry `m = 0` — that is what stops the forge
  multiplying a labelled ingot as `m·x + k` — so `y + 2` and `x² + 4` were filing themselves under
  **plain metal**, on a shelf whose heading says they are numbers. Harmless while they were
  unspendable; a plain falsehood the moment an order wanted one.
- **The shelf**, under the craft floor: what the deep metal became. Objects and empty places,
  never a tally.

### The `parts` group — 206 checks

Everything `forge` asserts about an order, against an ore target: reachable, sound when right,
**not** sound when one metal is nudged by one, and the rejection says what it cast instead. Plus
the mold's picture read back from the drawn text — independently of the code that wrote it
(§94) — and the one thing only a part can get wrong: **quietly becoming a tool.** If one ever
grows a `SCHEMA`, a `LENS` or a `TOOL_READ` entry, this decision has been reversed by accident and
the build fails.

Proved by putting four faults in the file: a target whose halves are not native (*"wants x² − 1,
which is not native — the rack would never hold it"*), a lens on a part (*"has a reading, so it is
an instrument and not a part"*), markup in a term (*"draws the term 4x&lt;sup&gt;2&lt;/sup&gt; as
markup, and the mold sets textContent"*, plus the products no longer adding up), and a shared
glyph (*"The Fourth Stamp and The Drill cut the same cavity"*).

### Where the Deep Castings board is, and why it is not on the left

**USER, 2026-09-07, with a screenshot:** *"The new items are being rolled over the old tools.
They should be elsewhere in the forge."*

The board was appended under the order board in the **left** column. `.orderboard` is
`position:sticky; top:12px` — it pins itself as the column scrolls — so a second board below it
scrolled straight over the pinned one and **the Winding Frame was drawn across the Crosscut**.
Setting the new board `position:static` did not help and could not have: the fault is one sticky
element with a sibling under it, not the sibling's own positioning.

It is in the **right** column now, and that is where it belonged anyway — the right column already
runs the deep economy end to end:

```
the craft floor   the target, the mold, the slots, the rack, the pour
DEEP CASTINGS     the four deep orders
the shelf         what the deep metal became
the heap          rock that cannot be spent at all
```

Pick a deep order, pour it, and the thing you made is drawn directly beneath it. The left column
goes back to being one sticky board, which is the only thing sticky was ever for: **the order you
are filling does not scroll away.**

> **The overlap check that was written first would not have caught it.** Two block siblings never
> overlap in a static mount; they overlapped on screen because one of them pins itself and the
> page scrolled, and a probe that does not scroll cannot see that (§97, again). What the group
> asserts is the *mechanism* — **nothing may follow a `position:sticky` board inside its own
> column** — which is true of the broken build and false of this one without scrolling anything.
> Proved by putting the original placement back: *"the sticky order board has 1 element(s) below
> it in its own column."* The geometric overlap sweep is kept beside it for what it can see, and
> the forge is mounted into the document to measure, because a detached probe is 0×0 on every
> element and would have passed on exactly the build that failed.

**2026-09-13: it moved back under the order board, and the sticky went instead.** The user asked
for *"the yard above the Deep Castings"* and *"Deep Casting and the Shelf always below The Order
Board"*. The collision was never the column — it was a sticky board with a sibling under it — so
`.orderboard` is `position:static` now and the columns read:

```
row 1   THE ORDER BOARD      the craft floor, the yard under it   (first when stacked)
row 2   DEEP CASTINGS        the shelf, level with it
```

The same afternoon: *"Align the Shelf to the right, next to the Deep Castings."* So Deep Castings
and the shelf are the forge grid's **second row** — two cells, so their tops are level whatever
height the first row comes out. On one column everything stacks: craft floor, yard, order board,
Deep Castings, shelf.

What this gives up is the pinned target: on a wide screen the order you are filling can scroll
away while you work the mold. The target is repeated at the head of the craft floor, so nothing
is lost that the mold does not also show. The sticky-sibling rule still runs, and `parts` now also
measures, in the mounted forge, that Deep Castings hangs under the order board, the shelf sits
level beside it on the right (or follows it, on one column), the yard hangs under the craft floor
and above Deep Castings — with controls that hand "under" and "beside" their pairs the wrong way
round.

**The wording pass that came with it.** "The board to the left" and "the board on the left" became
**The Order Board** (it is below, not left, when the columns stack); Mr Factor's forge line says
*"the seven on The Order Board"*; the rack reads *"native metal, ready to spend"*; the empty shelf
names *Deep Castings* without saying where it is, because that changes with the width. And the **mine's** rack had only two shelves, so deep metal
(`m` zeroed) sat under "plain metal" there while the forge filed it correctly — it has the same three
shelves now.

## The site stopped telling anyone it is not marking them

**USER, 2026-09-11:** *"Also remove Nothing here is marked - from the website. Any mention or
similar is not needed."*

Eleven surfaces said some version of it — the mine's banner, the Casting Shed, the tool sheet's
foot, the Reading & Access panel, the yard, the Words room, three lesson feet, the Tools room, the
surface lede. Every one of them was true. Saying it is still the wrong move: **a room that keeps
announcing it is not grading you has raised the subject**, and a student who was not thinking
about marks now is. The rule lives in the mechanism, not in a caption.

Each line was rewritten to say the positive thing rather than truncated, so nothing became a stub:

| was | is |
|---|---|
| Nothing here is marked and nothing is timed. | Nothing here is timed. |
| No row is marked, and the drill will not mark one. | The drill will not choose a row for you. |
| Nothing here is a mark, and nothing here swings for you. | Nothing here swings for you. |
| Nothing here is a mark. It is a record of what you have — and unlike a mark, you can spend it. | A record of what you have — and you can spend it. **Removed 2026-09-13** at the user's request: the rack and "Haul the metal to the forge" above it already say both. |
| the drill lists every pair and marks none | the drill lists every pair and chooses none |
| Nothing here is kept and nothing here is marked. | Nothing here is kept. |

**`docs/VOICE.md` moved with it** — two recording lines quoted the old copy, and a script that
says something the site does not is a voice recording waiting to contradict the screen.

> **The `nogrades` group gained a second sweep, and it is not a duplicate of the first.** The
> original catches the vocabulary of grading — *"7 out of 10"*, *accuracy*, *rank*. This one
> catches the **denial** of it, which sails straight through the original **because it is a
> negation** — the same blind spot the home-page box was reworded over rather than exempted from.
> Proved by putting *"Nothing here is marked."* back into the home screen: *`nogrades: screen
> "home" says "marked" — the site does not discuss marking, including to deny it`*.
>
> **The ruler's tick marks are deliberately not matched.** `mark` on a number line is a point, and
> means nothing about a student — *"Between two marks is the rock, not you"* stays exactly as it is.

**`README.md` keeps the rule and the reasoning.** It is the repository's own documentation rather
than anything a student opens, and deleting the *why* from the one place that records it is how a
line like this gets written again in six months.

### Mr Factor was never swept, and a comment said he was

The `teacher` agent reviewed his dialogue on 2026-09-11 and found the denial of marking still
standing in his voice — `room-shed-words-2`, *"Nothing is counted"* — **one day after the same
denial was taken off eleven other surfaces**. The reason is the interesting part.

A comment above `MF.GUIDE` claimed *"`nogrades` sweeps his copy along with everything else."*
**It did not, and never had.** Both sweeps build `MF.SCREENS` into a detached probe, and the dock
lives **outside `#screen`** by design. Measured directly: a `SCREENS.home` probe contains not one
word of `room-home-1`. The `contrast` group states this exact blind spot and builds the dock into
its own probe to beat it; the two `nogrades` sweeps did not — and the omission was invisible
because *a sweep reporting a denominator of eighteen looks like a sweep that is working*
(`CLAUDE.md` rule 5, again).

`MF.voiceLines()` already enumerates every beat in every room, because `docs/VOICE.md` is
generated from it. Sweeping that is the whole fix and costs one loop. `nogrades` is **44 checks**
now, up from 18. Proved by putting the sentence back into the beat: *`nogrades: Mr Factor says
"Nothing is counted" in room-shed-words-2`*.

**Three of his lines were also stale or false, and all three are fixed:**

| room | was | why it was wrong |
|---|---|---|
| `room-forge-3` | *"If the casting is sound you keep the tool. A tool never gates anything — it reads a lump for you and that is all."* | True of seven orders and **false of four of the eleven** since the Deep Castings landed. A part carries no lens and reads nothing — a student who had dug layers 6–9 was told the Winding Frame would read a lump for them. |
| `room-home-3` | *"…where your metal ends up. **You have not put anything in it yet.**"* | The portrait replays from the top at any time (§42), so the second sentence is false for anyone who has racked a metal. It also named the one thing in the scene that is **not** a door, one beat after saying everything out there is a building you can walk into. |
| `room-forge-2` | *"Take an order off **the** board"* | There are two boards now. |

> **`docs/VOICE.md` moved with all four.** A recording script that says something the site does
> not is a voice-over waiting to contradict the screen — the same reason it was updated during the
> marking sweep the day before.

## The clank ladder was saying false things, and nothing had ever run it

The `math-content` agent drove `MF.clankAdvice` over **5,676 floor pieces** on 2026-09-11 and
found three defects. Every group on the page was green over all of them, for one reason:
**nothing had ever executed the two rungs that carry a lump's own numbers.** `MF.voiceLines`
records them as *"(varies with the lump)"* and stops — which is honest about a recording script
and useless as a check.

| rung | on | said | the truth |
|---|---|---|---|
| give | `x⁴ + 5x² + 4` | *"x + 1 runs through it"* | it is `x² + 1`. At `x = −1` the lump is **10**, so `x + 1` is not a factor — and `MF.breakOff` would have **refused it**. He was telling a stuck student to swing at something the rock then called wrong. |
| give | `x² + 3xy + 2y²` | *"x + 1 runs through it"* | it is `x + y`. Quieter and worse: the swing **lands**, because `breakOff` reads `k` as the y-coefficient, so nothing on screen contradicts the false sentence. |
| hint | every deep kind | *"multiply to **?** and add to **?**"* | `a·c` off ore that has no `a` → `NaN` → `num(NaN)` prints `?`. And the X is not even the method for `group`, `cube` or `bi`. |

**Both give-rung faults were rendering, not arithmetic.** `MF.simplestFactor` was right every time
— `{m:1,k:1,p:2}` for the quartic — and `ingotHtml` renders `m·x + k` and silently drops the rest.
`MF.simplestFactorOre` now returns the split's own `left` ore and the sentence goes through
`MF.oreLabel`, the site's one printer, which already wrote `x² + 1` and `x + y` correctly
everywhere else.

**The hint rung now has a branch per shape** — pair the terms for a grouping lump, two cube roots
for a cube, *"nothing to hunt, it is finished"* for a lone two-letter bracket, the gear change then
the X for a quartic, the X with the letter riding along for two letters — and where the X **is**
right, the target is `c`, which the engine was holding all along.

**Three smaller ones, same review:**

- *"Nothing runs through that one at all"* on native metal **blurred the ring**. `x² − 2` is native
  here and factors over the reals; the engine even records its roots, and the Decimal Dial exists
  to show exactly that. `MF.ASSAY.pure` has always said *"no whole-number seam"* — this line was
  the one place that dropped the qualifier. 46 of 288 native quadratic pieces, all reachable.
- *"If no whole pair does both, there is nothing in there to find"* is **false** for a numeric
  common factor over an irreducible core: `2x² + 2` has no pair making 4 and adding to 0, and `2`
  runs straight through it. Not currently reachable from the generator (0 in 5,676) — but it is a
  sentence a student carries out of the mine, and his own give rung on that lump contradicts it.
- The plain-number hint stopped at *"2, then 3, then 5"*, and `49` reaches the anvil (break `98`).

### The `guide` group grew a sweep over what he says about a lump

Ten ore kinds, both rungs, and the assertion that matters is: **the factor he names must be one
the rock accepts.** It hands the ingot to `MF.breakOff` — the same engine the anvil swings through
— so a sentence and a swing cannot disagree without this firing.

> **The first version of the second assertion was circular and is recorded here because it took a
> fault plant to notice.** It compared the printed sentence against `simplestFactorOre` — the very
> thing the sentence is built from — so planting a wrong factor made both sides wrong together and
> the check sailed through (§94, for the fifth time on this project). What replaced it multiplies
> the two halves back together through `MF.rebuild` and asks whether the original lump returns,
> which is an independent statement about arithmetic. Proved by restoring the old `ingotHtml`
> rendering: *"on quart he says … x + 1 … but what comes off is x² + 1"*, and the same for `two`.

## Mr Factor comes inside the dialog, because he could not reach it

**USER, 2026-09-11:** *"Mr Fraction should also be around in the Breaking Room and the Cast Shed.
It's ok to disappear from the surface and stamp mill and forge after the first lesson. But Mr
Fraction should be around when students have the potential to be struggling with the correct
inputs and understanding."*

He was already docked in all eight rooms. **The gap was not which rooms — it was `z-index`.** The
dock is `40` and `.scrim` is `70`, so he sat behind every dialog on the site, and the hammer panel
*is* a dialog. At the one moment the whole clank ladder exists for — a student looking at the
boxes, about to type a factor, having already missed three times — the lamp was lit on a tab
nobody could click.

**Raising the dock over the scrim would have been the wrong fix.** These sheets carry a focus trap
(`MF._sheetKeys`); a control floating outside the dialog is one a keyboard cannot reach and a
screen reader is told is not there. He is rendered **inside** the sheet instead, above the foot,
where the trap already includes him — wired into `MF._openSheet` as an optional `guide`, and
passed by the two panels a stuck student actually holds open: **the hammer** (`MF.openHammer`) and
**any instrument held to a lump** (`MF.openTool`, which is the Casting Shed's bench as well as the
mine's).

**He is still silent by default.** It renders nothing unless `MF.clankAdvice` returns a rung — the
same ladder as ever: nothing before three clanks, and it resets the moment a seam runs. A panel
that offered help every time it opened would be the hint button this project has refused since
§10a.

### He arrives folded, and the `reach` group is the reason

Open, he is 177px of paper. Added to the hammer panel at **380px** that put the dialog at *787px
of question in a 681px box* — **the swing button below the fold**, which is the exact failure that
panel has already been trimmed for twice. Caught on the first measurement rather than by a
student. A guide who buries the button you need is not help.

Folded he is **60px** with a **44px** touch target; one click opens the rung. And the padding is
`6px`, not the `11px` it was drawn with, because at **994×700** the panel is capped at 88vh = 616px
and its content measured 615 — *four pixels* of headroom before the swing button needs a scroll.

| | folded | open |
|---|---|---|
| height | 60px | 182px |

> Verified at all four widths, and the `give` rung — the loud one, which hands over a factor — is
> the one that takes the most room and was the one measured.

## What the student-tester could not click, and the empty swing that lied

Driven as a student, at real widths, 2026-09-11.

### 1. His bubble was lying on the mine, and the clicks vanished

Measured at **380×780, on arrival, scrollY 0, no animations running**: the bubble is **330px wide
in a 380px viewport** — 87% of the screen, a fixed 190px band — and it covered **LAYER 1, LAYER 2
and LAYER 3**. It takes pointer events, so the clicks were *eaten*, not passed through. The
buttons simply did not respond and nothing on screen looked like the reason. The same band ate the
forge's whole rack, and at **1250×900** it covered 72% of **"Enter the mine"** — the card he had
just told the student to use.

**A scrim was the obvious fix and is forbidden**, by the rule written on the dock's own CSS: he is
never modal, because *a guide you must dismiss before you can work is a gate with a friendly face
on it*. That rule is right and it stays.

**So he yields instead.** A pointerdown anywhere outside his own buttons closes him, and Escape
closes him. The click that used to vanish now visibly puts him away and the second one works — one
wasted click **with feedback**, rather than a dead control with none. Escape was the reflex the
tester tried first, four different ways, all inert; it is what every other overlay here already
answers to.

> **The first version of the handler reproduced the bug it was written for.** It exempted the whole
> dock, and the thing lying over LAYER 2 is `p.gtext` — so a click aimed at the button landed on
> his *prose*, counted as "his own control", and was eaten exactly as before. Only what a student
> can press may swallow a pointerdown. **Reaching through his words is reaching past him.**

The `overlay` group never saw any of this: it asks whether the **dock** swallows clicks, and the
dock does not — `pointer-events` is off on it and on only for its children. The new check asserts
the behaviour instead of the geometry, because something will always be under a corner overlay on
a phone: **a click on his prose must put him away.** Proved by removing the handler.

### 2. The swing reported a miss on a question nobody answered

The tester cleared all three boxes and pressed **"Bring the hammer down"**. The panel's own echo
line said *"the head is empty — type what you are taking out"*. The button was **not disabled**. It
swung the full three seconds, gave **CLANG!**, and the floor reported: *"The hammer glanced off…
The hammer was cut to (x)."*

`(x)` is what an **empty** box parses to — `readInt('')` is 0 and the x-part defaults to 1 — not
anything the student chose. Read as a student that is *you got it wrong* about a question they
never answered, and **it counted a clank**, moving them up the ladder toward Mr Factor handing over
a factor.

The echo has had this exact test since it was written; the swing never got a copy of it. There is
**one `MF.headEmpty`** now, read by both, and the button is disabled while the head is empty —
which is what the forge has always done one room away (*"Pour the mold"*, disabled, *"The mold is
not full yet."* underneath).

### 3. And that uncovered a bench row that had not been testing what it is named

The `swing` group's three rows type into `.hbox input` **by index**. An ordinary poly panel has
*three* inputs — how many x, **what power**, the number on the end — so `ins[1]` has been the
**power box** ever since the power box was added, and the end box has never been filled. The row
called **"the finishing blow"** was typing `x⁶`, measuring a glance, and its `finished`-only
assertions sat there never firing. Green for weeks.

Nothing caught it because every hard assertion in that loop — scrim gone, stage present, animation
running, burst at the anvil — **is equally true of a miss**. It surfaced only when the swing
learned to refuse an empty head, which turned a silent wrong-box into two errors. The bench selects
by role now.

> **Also fixed from the same run:** the bubble had no `role`, no `aria-live` and no `aria-label`,
> so a screen reader was told nothing when it opened by itself on arrival.

## Four more from the same run, and one of them was drawing nothing

### The cavity's lit wall has never been drawn, on any mold

`MF.moldScene` builds the pit's wall rect with `cavL` and `cavW` — **declared 33 lines below the
use**. `var` hoists the declaration and not the assignment, so the rect went out with
`x="undefined"` and `width="undefined"` every time.

It announced itself the whole time and nobody was listening: the student-tester counted **492
`<rect> attribute x: Expected length, "undefined"` on a fresh load before clicking anything**, over
which `MF.validate()` reported 0 errors. Their point is the one worth keeping — *you cannot tell a
silent exception from missing feedback when the channel is already full of noise.* Fixed by moving
the declaration above its first use; a fresh boot now emits **nothing**, confirmed by bracketing a
reload between two console markers (the tab's buffer survives navigation, so the first two attempts
at measuring this were reading the previous load).

### The dot row said "finished" when it meant "you are here"

It filled cumulatively (`i <= G.at`), so the last of three beats was three dark dots. Three states
now — current, seen, not yet — and the current one is ringed.

> **And the first fix for its accessibility failed the build, correctly.** The row had no role and
> no label, so a screen reader was told nothing; I gave it `aria-label="Part 1 of 4 of what he has
> to say"` and the `guide` group threw it out — *"the dock is counting something"*. That is an
> X-out-of-Y, an aria-label is **read aloud**, and the rule does not care which channel it is on. I
> had written *"never 2 of 3 in visible text"* in the comment directly above and then put it
> somewhere a blind student would hear it. The row is `aria-hidden` now: the bubble is a live region
> that reads each new beat, and the next button says *"The next thing he has to say"* until the last
> one, where it becomes *"got it"*. The information was already there twice, without a tally.

### The mine's hints swallowed the room

Once there were pieces on the floor, the clank rung **replaced** the mine's four beats: the heading
changed from THE MINE to a generic "MR FACTOR", the dot row collapsed to one permanently-lit dot,
and there was no way back to the room's orientation short of reloading. Every other room replays.
The rung goes **first** now and the room's script follows it as one sequence — the stuck student
still gets the hint the moment he opens, and pressing next still walks back through what the mine
is for. `MF.audio.say` indexes across both scripts, so the recording and the screen cannot say two
different things.

### And one reported finding was wrong

*"The hammer panel has no way out except swinging."* It has a labelled **"Put it down"** button in
the head, the head does not scroll away (measured at 380 and at 994×700, where the sheet scrolls by
17px), and the foot already reads *"**Esc** puts the hammer down."* Reported, checked, not true.
The head is `position:sticky` now anyway — cheap insurance, since the sheet grows and Mr Factor's
rung is the newest thing in it.

## The seam: a lump you can tell from the wall it is in

**USER, 2026-09-12:** *"Fix the seam contrast."*

It was a dark stone outlined in a darker one, on a wall of the same family. Measured across all
nine layers:

| | body vs wall | outline vs wall |
|---|---|---|
| shallowest (layer 1) | **1.50:1** | 2.46:1 |
| deepest (layer 9) | **1.33:1** | 1.57:1 |

**Not one layer reached the 3:1 that WCAG 1.4.11 asks of a graphical object, and it got worse with
depth** — every palette below layer 3 is a set of near-identical darks, so on the deepest ground
the only thing telling a student where a lump was were the ore streaks drawn on it. The face says
*"Look one over before you swing"* over shapes that were barely there.

**Both obvious fixes were measured and both fail:**

- **Darken the outline.** Reaches 3:1 on layers 1–3 and *cannot* below that — the wall is already
  dark, so the arithmetic runs out at black. Layer 5's outline tops out at 2.00:1 when it is
  literally `#000000`.
- **Lighten the body.** Reaches 3:1 everywhere and destroys the lump: the veins and the glint are
  drawn **on** it, so the ore streak falls to **1.03:1** and the whole mine goes pale.

**So the shape is carried by a rim and the body stays dark.** `look.glint` is the layer's own
lamp-catch colour, already in every palette, and it clears 3:1 against the wall on **every layer**
— 3.32 at the tightest to 12.39 at the deepest — while sitting 5–16:1 off the body it outlines.
The veins keep their dark ground and lose nothing. It is also the true picture: a rock in a lit
gallery catches the lamp on its edge. The old dark outline stays underneath as the drawn seam
between stone and wall, so a lump still reads as cut **out of** the rock rather than pasted on it.

### And the check caught two more the moment it existed

The new sweep measures **from `MF.LAYER_LOOK`**, not from a list of expected hexes, so it follows
the palette instead of needing to be edited beside it. Its second assertion — the ore streak must
read on the body it is drawn on — failed immediately on two layers nobody had asked about:
**layer 2 at 2.06:1** and **layer 4 at 2.47:1**. Those ores are `#D8945E` and `#CB6956` now, both
just over 3:1 on their own rock, hue kept.

> The `contrast` group had nothing to say about any of this and was right not to: it sweeps
> rendered **text**. A lump is a polygon and its wall is a polygon, and until now nothing on this
> site compared two polygons.

## He is the size his brother is

**USER, 2026-09-12:** *"Look at the sister site and see how big Mr Fraction dialogue and animation
is. I think he is too small now."*

Measured on the Word Problem Express's `.mf-companion`, at both ends, against ours:

| | sister 380 | sister 1440 | ours (before) | ours (now) |
|---|---|---|---|---|
| **figure** | 72 × 84 | 104 × 122 | **64 × 64**, and **54 × 54** under 430px | 72 × 72 → 104 × 104 |
| bubble | 210 wide | 252 wide | **330 wide** | 264 wide |
| dialogue | 13.12px | 13.76px | 15px | 15px |

**The dialogue was never the problem — ours is the larger of the two and it stays.** It is the
FIGURE that was under half his brother's, which is why he read as an icon rather than as somebody
standing there. Worse, a `max-width:430px` rule shrank him to **54px with a 35px drawing**, so the
narrowest screen got the smallest possible Mr Factor — smaller again than the 64px he was
everywhere else, and precisely the screen where a student most needs to find him.

**And the bubble was too wide, which is the same finding from the other end.** 330px in a 380px
viewport is 87% of the screen — that is what put him across LAYER 2 and LAYER 3 in the first place.
The sister keeps hers at 210–252 at every width. At 264 he covers less of the ladder, and the
click-to-yield rule handles what is left; a bottom-corner overlay on a phone will always sit on
something, and the fix for that is that reaching past him works, not that he covers nothing.

> He scales with the viewport the way she does — a phone gets a figure it has room for, a desk gets
> one you can see — rather than being one fixed size that is wrong at both ends.

## Mr Factor is drawn by a person now

**USER, 2026-09-12:** *"Update Mr Fraction with these illustrations and animations."* Four poses
supplied as 571×669 PNGs — front, back, left, right.

**There was no animated GIF.** `Miner_Mr_Fraction_GIF.png` is a PNG (magic bytes `89 50 4E 47`,
checked) and is the same front pose as the other front file at higher quality. So the *animation*
is the one four drawings can honestly carry: **he turns.**

### Why they are embedded rather than shipped beside the file

This page opens from `file://` with nothing fetched, and that property is worth more than the
bytes: `<img src="art/front.png">` makes the guide a thing that can 404, on a site whose one hard
promise is that opening the file works. So they were cut down until embedding was affordable:

| | |
|---|---|
| as supplied | **1,051 KB** — four PNGs at 571×669 |
| cropped to content, 256px, WebP | **~60 KB** |
| as base64 in `index.html` | **~90 KB**, about 6% on top of the file |

**One crop box for all four, deliberately** — the union of their content bounds (538×490 at 18,70).
Cropping each pose tight would have filled the frame better and made him **change size every time
he turned**. The artist drew him a consistent height across the four (488/490/474/468); a shared
box is what keeps that.

### What changed in the code, and what did not

`MF.art(size, opts)` **still returns an `<svg>`**. It is called from eight places and four
stylesheets size him with `svg` selectors; handing back an `<img>` would have meant touching every
one and finding out later which was missed. The illustration goes *inside* as an `<image>`, the
viewBox carries the sizing maths, every caller is unchanged. `MF.artVector` is the miner this site
has always drawn, kept whole as the fallback.

| where | pose | motion |
|---|---|---|
| the splash | all four | **620ms a frame** — a place where you are only waiting, so movement is the point |
| the surface figure | all four | **3.4s a frame** — a man looking round his own yard |
| dock, hero, masthead, lessons | front | none — every one of these is him mid-sentence |

> **The helmet lamp still answers the day clock, and the check caught it the moment it did not.**
> The lamp glass used to be a vector circle carrying `sc-lit`, which the `surface` group looks for
> by name alongside the `sc-glow` halo. The illustration's lamp is *painted* — equally bright at
> noon and midnight, which is the exact fault that check exists to catch. Both now sit over the
> painted lamp at its measured position, (0.496, 0.265) of the crop box.

### The dock lost its circle, because that is what a PNG is for

**USER:** *"The bottom dialogue Mr Fraction should have no circle around it. That it is why it is a
png file."* The disc was right for a flat vector icon and wrong for an illustration with a real
alpha channel — boxing it throws away the silhouette the transparency exists to give. `drop-shadow()`
reads the alpha, so what lifts him off the page traces the pick and the helmet instead of drawing a
ring around them; the **lit-lamp state** is now a warm glow on *him* rather than a coloured border.
The touch target is unchanged at 76/112px — only the paint went.

> A check asserts all four poses are `data:` URIs, that `MF.art` renders one, and that the drawn
> fallback still exists. Proved by pointing a pose at `art/front.webp`: *"the 'front' pose is not
> embedded … which this page cannot fetch from file://"*.

## The GIF is real, the turn is gone, and the surface stopped being crowded

**USER, 2026-09-12:** *"Here is the correct gif file."* And it is — **GIF87a, 571×669, seven
frames over 0.78s**, a front-on idle. The earlier note that no animated GIF had been supplied was
true of the file that existed then (`Miner_Mr_Fraction_GIF.png`, a PNG still) and is not true of
this one.

**It is one animated WebP, not seven stills.** Consecutive frames of an idle are nearly identical,
so inter-frame compression earns its keep: **108 KB as six separate images against 50 KB as one
animation**. The browser plays it — no timer, no frame bookkeeping. 176px wide, which is twice the
88px the splash draws him at, because the splash is its only home.

> **Under `prefers-reduced-motion` it is not loaded at all.** An animated image has no CSS pause,
> so the only honest way to respect the setting is to hand back the static pose instead — which
> also means somebody who asked for stillness never downloads 50 KB of movement. The check tests
> exactly that: `MF.artIdle` must stop returning the animation, not merely toggle a class.

### The four-pose turn was built, shipped, and thrown out the same day

**USER:** *"flipping between poses does not look good on the surface."* Correct, and the reason is
worth keeping so it is not built again: **four drawings have no in-between.** At 74px the cycle is
a hard cut from one silhouette to a different one every few seconds — a glitch, not a man looking
round. The supplied GIF has real intermediate frames, which is precisely why it reads as movement
and the turn did not. `MF.artTurn` and `MF.ART_TURN` are gone; `MF.artIdle` is the only animation.

### Four of him on one screen was three too many

**USER:** *"On the homepage, Mr Fraction is appearing too much."* The surface carried him in the
masthead, standing in the scene, as a 104px portrait beside the lede, **and** in the dock — two of
those within 200px of each other. **The hero portrait went**: it was the largest and the most
redundant, sitting between a scene that already has him standing in his own yard and a dock that
has him talking a few hundred pixels below. Three remain and each does a different job — a mark, a
figure in the world, and the guide.

> **Open question, and it is a 57 KB one.** With the turn gone, only the `front` pose was ever
> rendered: `back`, `left` and `right` were embedded and displayed nowhere. They are kept rather
> than deleted because they are supplied artwork and where they belong is a design decision, not a
> defect — but they are dead weight until they are placed, and `§92` is clear about what happens to
> data nobody reads.
>
> **`left` is placed (2026-09-13).** The Stamp Mill's Mr Factor and the one in The Molds, each beside
> his speech bubble, use it at the user's request — `MF.says(html, size, pose)` takes an optional
> pose, and only those two calls pass one. The file names the side of him you see: in `left` his face and pick point RIGHT,
> toward his bubble and the stamps. `back` and `right` are still displayed nowhere.

## The notes in `index.html` are headlines now (2026-09-13)

**USER:** *"Clean the code to make sure the HTML file is efficient. Remove unnecessary notes from
the user. Do not remove all notes, but let's get the code as clean as possible."*

Comments were **602 KB of a 1.55 MB file — 39%**, most of it the history of each decision: who
asked, on which date, what broke and how it was measured. Every note is still there; **1,245 of
the 1,966 were cut to their opening sentence**, with user quotes and `(user, date)` tags taken
out. Short notes (one line, 160 characters or less, no user quote) and the file header were left
exactly as they were. **The file is ≈1.09 MB and 18,757 lines**, from 25,968.

**Nothing was lost; it moved into history.** The full reasoning behind every rule is at commit
`3b90bbd` — `git show 3b90bbd:index.html` — and the rules themselves still live here and in
`VERIFICATION.md`. A note's headline is its pointer back to that.

**How, and how it was proved.** A tokenizer, not a find-and-replace: the script is full of regex
literals, template literals and strings containing `/*` and `//`, and a regex over the source
would have eaten code. It ran in PowerShell/.NET reading and writing UTF-8 — never `perl`, §99. A
multi-line note sharing a line with code would have been left alone, because shortening it can
change automatic semicolon insertion; there turned out to be none. Then:

- **the code is identical** once every comment is set aside, in both files — 940,436 characters,
  compared exactly, with only blank lines and trailing spaces normalised;
- `MF.validate()` — **0 errors at 380, 560, 994 and 1250**, 48 groups, both controls failing;
- `MF.playthrough(1…9)` — every layer driven to native metal; no console errors.

**What it did not look at:** whether each headline is the *right* sentence. It is the first one,
mechanically chosen, and a few are terse (*"310, not 430."*) or end on "…". Where a headline
misleads, the fix is to rewrite that one note from the full text at `3b90bbd`, not to restore the
essay.

## Languages, phase 0: every word goes through one door (2026-09-13)

**USER:** *"As many mainstream languages as possible, as we get notes - we will update the text."*

**Only English exists.** What exists is the machinery a second language drops into, and the
proof that fitting it changed nothing a student sees.

- **`MF.STR.en`** holds every student-facing string by key; **`MF.t(key, vars)`** looks one up in
  the current language, falls back to English per key, and fills `{placeholders}`. A key nobody
  wrote lands in `MF._missing` and comes back as itself, never as blank.
- **Glued sentences became whole templates** (`'Into ' + name` → `{room}`), so a translator can
  move words. Pure maths stays literal — `MF.oreLabel` and friends print symbols only.
- **Tables kept their shape.** `MF.TOOLS`, `LAYERS`, `ASSAY`, `PARTS`, `SCHEMA`, `GUIDE`, `SAYS`,
  `ROSETTA`, `REALWORLD` and the rest read their words through getters, so nothing that consumes
  them changed.
- **`MF.LANG`** says how each language reads: name, direction, speech voice, sentence stop.
  `MF.applyAccess` sets `lang` and `dir` on `<html>`, and **a change of language — and only
  that — rebuilds the room you are in.** Read aloud sets the voice when it is not English.
- **The Language row in Reading & Access appears only when there is more than one language**, so
  today it is not drawn.
- **The `lang` group** (49th): every offered language has a table and its reading details, no
  translation carries a key English lacks or different placeholders, no key asked for during the
  run is missing. Two controls: an unknown key is noticed, and a throwaway language fills its
  placeholders and falls back to English.

### How it was proved: `tools/text-harvest.js`

Before any extraction, a copy of the page was stored as the baseline. `MFHarvest.compare()` loads
the baseline and today's file into hidden frames, **hooks every way text reaches the DOM**, pins the
clock the ore is seeded from, silences all audio, runs `MF.validate()` and `MF.playthrough(1…9)`,
walks the finished DOM, and diffs the two sets of strings. **Every batch was identical before it was
committed** — 2,557 strings at 1250 and 2,558 at 380, 0 errors at both.

**`MFHarvest.english()`** runs the same drive with a stand-in language that wraps every string in
⟦ ⟧, and lists what is still English outside the brackets. **What is left is the checks' own probe
text and the two language names** — nothing a student sees.

**What it did not look at:** text on a path neither validate nor the playthroughs reach, and pixels.

### Kept wrong on purpose, to be fixed as their own change

Byte-identical meant keeping three English slips, each flagged in a comment beside its key:
`lens.readby` and `slot.title` print *"the The Lantern"*, and `cart.aria.armed` does the same.

### Still to do before a second language

- ~~Checks that are English-shaped~~ — **done.** The beat length, the no-grades, marking and
  counting regexes, the swing-invite phrases and how the hint names the Casting Shed live in
  `MF.LANG.en.checks`; `MF.langChecks()` gives English's for any a language leaves out, and the
  `lang` group reports each one missing. Checks that found an element by its English text use a
  class (`.swingbtn`) or the table (`MF.plainT`, `MF.fromKey`). Each rewired check was proved by
  putting its fault back: all eight fired. With the stand-in language on, **one** error is left —
  a 211-character beat, because the brackets add two.
- **The caveat under the picker**, *"Translations are drafts — corrections welcome."* — **approved
  and in** (`access.lang.hint`). It shows only once a second language exists, because the
  Language row does.

## The surface shows what the student has: the yard, and the Deep Castings on their buildings (2026-09-13)

**USER:** *"Parts on their buildings, and show the actual metal. And subtly indicate that this was
made from deeper casting for the student to get a sense of accomplishment."*

**The yard on the surface was set dressing** — four bars and five stones, always, for a student
who had never swung. It is the student's yard now: **bare ground** until metal comes up, then up
to four bars on the rack and five stones on the heap, drawn from `MF.state.yard` and
`MF.state.rockpile`. A picture of what is there, **never a count** — the fifth metal draws nothing
new. Hovering the yard names what is in it (*"On the rack: 2, 3. On the heap: 12."*).

**A Deep Casting, once cast, is fitted to the building it was cut for** — `part.<key>.fits` already
said where:

| part | fitted to | drawn as |
|---|---|---|
| The Winding Frame | the winding house | a braced cross-frame bolted to the windmill tower |
| The Fourth Stamp | the stamp mill | a stamp on a beam off the mill's end wall, over its die |
| The Second Rail | the cart track | a second, still-bright rail beside the first |
| The Cube Counterweight | the headframe | a cube on a beam run out past the mine portal |

**The accomplishment is quiet, and it is not a checklist.** A part not yet cast draws nothing — no
outline, no empty bracket, no count. Each fitted part carries **the same small gold spark**, and
hovering it says *"cast from metal you brought up out of the deep shafts"*. The picture's
description names what is fitted. In the forge, the Deep Castings hint and the Shelf now say once
that a cast part goes up on the surface, and a cast part's sheet says it is there. **Nothing calls
it a reward, and none of it is an instrument** — a fitted part does nothing.

**The `surface` group** builds the surface three times: bare (no lumps, no parts), every part cast
(all four fitted, each with its mark and a name, and the description says so), and stocked (the
lumps are metal and rock in the right colours, inside the fence, named on hover). The stocked
build is the control for the bare one. Each was proved by putting its fault back — a part fitted
whether or not it was cast, a yard that draws metal for nobody, a part with its mark taken off.

**Also fixed in passing:** a deep metal dropped in the mold showed **"0"** — `ingotHtml` read `m`
and `k`, which a labelled ingot keeps at zero. The `parts` group now puts each Deep Casting's own
metals in the mold and reads the chips back.

## On a phone, Mr Factor peeks from the edge (2026-09-13)

**USER:** *"Fix Mr Factor covering the text at 380px."*

At 560px and under the text column is the width of the screen, and the dock portrait fixed in
the corner sat over text at **10 of 13 scroll positions** at 380. **He keeps his size** (76px, the
sister site's phone size) and now tucks past the right edge with **30px showing**; he comes all the
way in when he has something new (`data-new`), while he is talking (`data-open` on the dock, set in
`MF.paintGuide`), and on keyboard focus or hover. Measured after: **1 of 13 positions, by 5px**;
opened, he is wholly on screen and the bubble's tail lands on his centre.

**The first attempt did nothing, and the reason is worth keeping:** a `@media(max-width:430px)` block
later in the stylesheet put him back in the corner at 380, so a rule written above it lost on
source order. The peek now comes after the phone block.

## Languages, phase 1: Spanish (2026-09-13)

**USER:** *"Continue with the language project."*

**Español is the second language, and it is a draft.** Every one of the **1,158 keys** in `MF.STR.en`
has a Spanish string in `MF.STR.es`, in the same order, in one block headed
`/* ===== LANGUAGE: es ===== */`. **No fluent speaker or teacher has read any of it.** The picker
now shows in Reading & Access, with the approved line under it: *"Translations are drafts —
corrections welcome."* Neutral Spanish, *tú*.

**The words the mine turns on:** *veta* (seam), *metal nativo* (native metal), *lingote* (ingot),
*paréntesis* (bracket), *MCD* (GCF), *el Bocarte* (the Stamp Mill — the real mining word),
*la Nave de Fundición* (the Casting Shed), *la Forja*. Mr Factor keeps his name. Instruments:
*el Pico de Prospector, la Linterna, el Pico de Acero, el Crucero, el Cambiador, el Taladro,
la Barrena Mecánica*. The mining wordplay is where a draft is most likely to read strangely.

### What had to change so a second language could pass honestly

- **Twenty more checks were reading English.** The doors, the cart buttons, the swing pop-out, the
  Drill's squares and cubes, the finished-metal readings, and the prose budgets all moved into
  `MF.LANG.<lang>.checks`. Spanish's budgets are English's plus about 15%; its beat limit is 250.
- **The two controls that must fail were English sentences**, so Spanish's sweeps passed them.
  Each language now carries its own (`markyControl`, `bannedControl`).
- **The quiz shuffle was seeded from the words on screen**, so Spanish put the supported answer in
  slot 3 for four of six questions — a slot worth guessing. `MF.qSeed` seeds every language from
  the English (each question carries its key as `id`), so the order is the same everywhere and
  **no English option moved** (7 questions compared, old file against new).
- **One Spanish phrase was too long for the Order Board** (`tool.auger.does`, 58 of 56); it was
  shortened, not the limit raised.

### How it was proved

- `MF.validate()` in Spanish: **0 errors at 1250 and 380**, 27,799 checks, both controls failing
  as required; `MF.playthrough(1…9)` clean; no key fell back to English.
- In English: **0 errors at 1250 and 380**; the text harvest differs by exactly the four strings of
  the picker (*English, Español, Language*, the caveat).
- **Every rewired check fired with its fault put back, in Spanish** — the marking control, the
  no-grades control, the Drill's prime reading, and the quiz slot seeded from the Spanish text.

**What it did not look at:** whether the Spanish is good Spanish, and pixels at 560 and 994.

## Languages, phase 1 continued: Brazilian Portuguese (2026-09-13)

**Português (Brasil) is the third language, and it is a draft** — all **1,158 keys** in
`MF.STR['pt-BR']`, same order, one block. No fluent speaker or teacher has read it. *Você*.

**The words:** *veio* (seam), *metal nativo*, *lingote*, *parêntese* (bracket), *MDC* (GCF),
*o Engenho de Pilões* (the Stamp Mill), *o Galpão de Fundição* (the Casting Shed), *a Forja*.
Instruments: *a Picareta de Garimpeiro, a Lanterna, a Picareta de Aço, a Travessa, o Câmbio,
a Broca, a Perfuratriz*.

**It needed no new check machinery** — every English-shaped check was already per-language after
Spanish, so Portuguese only had to supply its own words for all 22 of them.

### It found a bug Spanish had too

**Mr Factor in the header is drawn once, at startup, before any language is chosen**, so his
screen-reader label stayed *"a miner with a helmet lamp and a pick"* under a Portuguese or Spanish
page. The Spanish sweep had missed it because it skipped anything containing "Mr Factor".
`MF.paintStatic` now relabels the header and splash portraits on every change of language.

**The `lang` group checks it, with a control** — and the first attempt to prove the check was
wrong: planting the English label and running validate passed, because validate repaints the
page's static text before the `lang` group reads it. **The fault is the relabel missing, not the
label being stale.** With `paintStatic` wrapped to leave the English label behind on every
repaint, the check fires, and nothing else does.

### How it was proved

- `MF.validate()` in Portuguese: **0 errors at 1250 and 380**, 28,982 checks, both controls failing
  as required; `MF.playthrough(1…9)` clean; no key fell back to English; **no English left on any
  screen**, the header label included.
- Spanish, re-run: **0 errors**.
- English: **0 errors at 1250 and 380**; the harvest differs only by *Português (Brasil)* and the
  new control's planted label.

**What it did not look at:** whether the Portuguese is good Portuguese, and pixels in Portuguese.

## Languages, phase 1 continued: French (2026-09-14)

**Français is the fourth language, and it is a draft** — all **1,158 keys** in `MF.STR.fr`, same
order, one block. No fluent speaker or teacher has read it. *Tu*, and typographic apostrophes
(’) throughout, so no string needs escaping.

**The words:** *filon* (seam), *métal natif*, *lingot*, *parenthèse* (bracket), *PGCD* (GCF),
*le Bocard* (the Stamp Mill — the real French mining word), *l’Atelier de Coulée* (the Casting
Shed), *la Forge*, and *le Carreau* for the yard — the real name for a mine's surface yard.
Instruments: *le Pic du Prospecteur, la Lanterne, le Pic d’Acier, le Travers-Banc, le
Sélecteur, la Foreuse, la Tarière Mécanique*.

### What French needed that the others did not

- **A word boundary is not a word boundary before an accent.** In a JavaScript regex, `é` is not a
  word character, so `\bnoté\b` never matches *noté* followed by a space. French's no-grades and
  marking patterns end on a lookahead (`(?![a-zà-ÿ])`) instead of `\b` wherever a word can end in
  an accent.
- **"7 sur 10" is how a French mark is written**, so *sur* between two numbers is banned — and the
  question counter uses *de* (`{at} de {n}`) rather than a slash or *sur*, which the sweep would
  have read as a grade. That was caught before it ran, not by it.
- **Budgets are a fifth larger:** beat 260, lesson prose 1640, panel prose 760.

### How it was proved

- `MF.validate()` in French: **0 errors at 1250 and 380**, 30,169 checks, both controls failing
  as required; `MF.playthrough(1…9)` clean; no key fell back to English; no English left on any
  screen.
- English: **0 errors**; the text harvest differs by exactly one string, *Français*.

**What it did not look at:** whether the French is good French.

## Languages, phase 1 continued: German (2026-09-14)

**Deutsch is the fifth language, and it is a draft** — all **1,158 keys** in `MF.STR.de`, same
order, one block. No fluent speaker or teacher has read it. *Du*, and „…“ quotation marks.

**The real mining words wherever they exist:** *gediegenes Metall* (native metal — the actual
mineralogy term), *das Pochwerk* (the Stamp Mill), *die Halde* (the heap), *der Querschlag* (the
Crosscut), *Übertage* (the surface), *Sohle* (a mine level). Also *Ader* (seam), *Barren*
(ingot), *Klammer* (bracket), *ggT* (GCF), *Kubikzahl* (cube number), *die Gießhalle* (the
Casting Shed), *die Schmiede*.

### What German needed

- **"7 von 10" is ambiguous in German** — it is how a mark is written, and it is also how "slide 1
  of 5" is written. The no-grades pattern only flags the pair with a grade word behind it
  (*Punkten*), so the lesson's slide counter stays *Folie 1 von 5*; the shelf and the dock still
  refuse any pair. The question counter reads *Nr. 1 (3 insgesamt)*.
- **ä ö ü ß are not word characters to `\b`**, like the French accents, so no German pattern leans
  on a boundary next to one.
- **Budgets are a quarter larger:** beat 270, lesson prose 1700, panel prose 790.

### The one thing the checks caught

**The Powered Auger's closing hint offered a swing at finished metal.** The draft said *Beide
Seiten bleiben deine Sache* — "both sides are still yours", the exact phrase German's swing-invite
check looks for — under readings of x² + 4 and three other native pieces. English says "Both
sides *are* yours" there, which is not an invitation. The German now says *gehören dir*, which
matches the English. 4 errors at both widths, then 0.

### How it was proved

- `MF.validate()` in German: **0 errors at 1250 and 380**, 31,349 checks, both controls failing as
  required; `MF.playthrough(1…9)` clean; no key fell back to English; no English left on any screen.
- **At 380, on the surface, forge and mine: nothing scrolls sideways, and no button or heading
  clips its text** — the long compounds wrap.
- English: **0 errors**; the text harvest differs by exactly one string, *Deutsch*.

**What it did not look at:** whether the German is good German.

## Languages, phase 1 continued: Italian (2026-09-14)

**Italiano is the sixth language, and it is a draft** — all **1,158 keys** in `MF.STR.it`, same
order, one block. No fluent speaker or teacher has read it. *Tu*, and typographic apostrophes (’)
throughout — Italian elides constantly (*l’*, *dell’*), so no string needs escaping.

**The words:** *filone* (seam), *metallo nativo*, *lingotto*, *parentesi* (bracket), *MCD* (GCF),
*raccoglimento parziale* for factoring by grouping — the name Italian schools actually use —
*il Frantoio* (the Stamp Mill), *la Fonderia* (the Casting Shed), *la Fucina* (the Forge), *il
Piazzale* (the yard). Instruments: *il Piccone del Cercatore, la Lanterna, il Piccone d’Acciaio,
il Traverso, il Cambio, la Carotatrice, la Trivella a Motore*.

### What the earlier languages had already taught

Italian was the first language drafted with every lesson so far applied up front, and it passed
**first time, with no correction**:

- **Words ending on an accent** (*è*, *più*, *perché*) — like French — so no pattern leans on
  `\b` next to one.
- **"7 su 10" is how a mark is written**, so *su* between numbers is banned, and the counters use
  *di*.
- **The Auger's "Both sides are yours" is *sono tuoi*,** not *restano a te* — the swing-invite
  phrase is kept for "still yours" only, which is the mistake German made.
- ***Corretto* is an ordinary word** ("correct") in Italian, so it is not in the marking pattern.
- **Budgets are a little under a fifth larger:** beat 250, lesson prose 1580, panel prose 740.

### How it was proved

- `MF.validate()` in Italian: **0 errors at 1250 and 380**, 32,530 checks, both controls failing
  as required; `MF.playthrough(1…9)` clean; no key fell back to English; no English left on any
  screen.
- **At 380, on the surface, forge and mine: nothing scrolls sideways, and no button or heading
  clips its text.**
- English: **0 errors**; the text harvest differs by exactly one string, *Italiano*.

**What it did not look at:** whether the Italian is good Italian.

## Languages, phase 1 continued: Indonesian (2026-09-14)

**Bahasa Indonesia is the seventh language, and it is a draft** — all **1,158 keys** in
`MF.STR.id`, same order, one block. No fluent speaker or teacher has read it. *Kamu* for the
student, *aku* for Mr Factor. No accents and no apostrophes, so nothing in it needs escaping.

**The words:** *urat* (seam), *logam asli* (native metal), *batangan* (ingot), *kurung* (bracket),
*FPB* (GCF), *pemfaktoran dengan pengelompokan*, *Pabrik Penumbuk* (the Stamp Mill), *Bengkel
Pengecoran* (the Casting Shed — *Pengecoran* alone on the nav and the nameplate), *Tempa* (the
Forge), *pelataran* (the yard). Instruments: *Beliung Pencari, Lentera, Beliung Baja, Potong
Silang, Pemindah Gigi, Bor, Bor Ulir Mesin*. The costing example is in rupiah.

### What is different about Indonesian's checks

- **No accents, so `\b` is safe** — the first language since English where it is.
- **"7 dari 10" is also how a slide counter is written** (*salindia 2 dari 5*), so the no-grades
  pattern asks for a grade word behind the pair (*poin*, *benar*), the way German asks for
  *Punkt*. The shelf and the dock still refuse any pair at all.
- ***Nilai* means "a mark" and also an ordinary "value"**, so the drafts avoid the word rather
  than ban it; *dinilai* and *penilaian* are the marking words.
- **"Still yours" is *masih milikmu* only where English says "still yours"**; a plain "yours"
  (the Auger's hint, the lesson footers) is *urusanmu*. That keeps the swing-invite pattern off
  every native-metal reading, which is what German got wrong.
- **Budgets:** beat 260, lesson prose 1650, panel prose 780.

### How it was proved

- `MF.validate()` in Indonesian: **0 errors at 1250 (33,710 checks) and 380 (33,787)**, both
  controls failing as required; `MF.playthrough(1…9)` clean at both; no key fell back to English.
  It passed **first time, with no correction**.
- **The English stop-word sweep, over all eight screens, found one string:** *the rock is ready*,
  the last tick of the loading screen, which was built in English before the language changed
  and is never on screen again. Every language so far has had it, and no student can see it: the
  picker is inside the operation.
- **At 380, on all eight screens: nothing scrolls sideways**, and the only element past the edge
  is Mr Factor's dock tab, which peeks by design.
- English: **0 errors**; the text harvest differs by exactly one string, *Bahasa Indonesia*.

**What it did not look at:** whether the Indonesian is good Indonesian.

## Languages, phase 1 continued: Turkish (2026-09-14)

**Türkçe is the eighth language, and it is a draft** — all **1,158 keys** in `MF.STR.tr`, same
order, one block. No fluent speaker or teacher has read it. *Sen*, and typographic apostrophes
(’) for the suffixes Turkish hangs on names and numbers (*Mr Factor’un*, *x&sup2;’yi*).

**The words:** *damar* (seam), *doğal metal* (native metal), *külçe* (ingot), *parantez*, *EBOB*
(GCF), *gruplandırarak çarpanlara ayırma*, *iki kare farkı*, *dağılma özelliği*, *indirgenemez
polinom*; *Kırma Değirmeni* (the Stamp Mill), *Dökümhane* (the Casting Shed), *Demirhane* (the
Forge), *saha* (the yard). Instruments: *Arayıcı Kazması, Fener, Çelik Kazma, Çapraz Galeri,
Vites Kolu, Matkap, Motorlu Burgu*. The costing example is in lira.

### What is different about Turkish's checks

- **ç ğ ı ö ş ü are not word characters to `\b`**, so patterns end on lookaheads — and the
  English stop-word sweep is unreliable here in the other direction too: *eşit* matched *it*,
  and *metal* is a Turkish word. Its hits were read one by one; none was English.
- **A mark is "10 üzerinden 7" or "7/10"**, so the counters never put two numbers side by side:
  *2. slayt (toplam 5)*, *3. soru (toplam 4)*.
- **A percentage is written in front** (*%70*), so the pattern looks on both sides of the sign.
- ***Not* is a mark and also a note**, so a notebook is *defter* throughout and the word is
  never used.
- **"Still yours" is *hâlâ senin* only where English says it**; a plain "yours" is *sana
  kalmış*.
- **Budgets:** beat 250, lesson prose 1550, panel prose 730.

### How it was proved — and a run that measured the test instead

- **The first validate reported 6 errors, all about Mr Factor's dock** ("the dock will not open",
  "coming off the loading screen did not greet the student"). **The tab had never pressed
  Enter.** `MF.guideArrive()` refuses to greet anyone while the loading screen is up — which is
  correct — and the same tab then gave Indonesian the same 6. Nothing was changed in the page.
  **A validate run has to enter the operation first**; the earlier languages' runs happened to.
- Entered, `MF.validate()` in Turkish: **0 errors at 1250 (34,971 checks) and 380 (34,878)**, both
  controls failing as required; `MF.playthrough(1…9)` clean at both; no key fell back to English.
- **At 380, on all eight screens: nothing scrolls sideways, and no button or heading clips.**
- English: **0 errors**; the text harvest differs by exactly one string, *Türkçe*.

**What it did not look at:** whether the Turkish is good Turkish — and one known rough edge:
the dock's screen-reader label lower-cases the room name, and JavaScript lower-cases *İ* to
*i̇* (with a combining dot) rather than *i*.

## Languages, phase 1 continued: Vietnamese (2026-09-14)

**Tiếng Việt is the ninth language, and it is a draft** — all **1,158 keys** in `MF.STR.vi`, same
order, one block. No fluent speaker or teacher has read it. *Bạn* for the student, *tôi* for Mr
Factor, *ông ấy* when the page speaks about him.

**The words:** *vỉa* (seam), *kim loại tự sinh* (native metal — the mineralogists' term),
*thỏi* (ingot), *ngoặc* (bracket), *ƯCLN* (GCF), *phân tích thành nhân tử*, *nhóm hạng tử*,
*hiệu hai bình phương*, *tính chất phân phối*, *đa thức bất khả quy*; *Xưởng Nghiền* (the Stamp
Mill), *Xưởng Đúc* (the Casting Shed), *Lò Rèn* (the Forge), *bãi chứa* (the yard). Instruments:
*Cuốc Thăm Dò, Đèn Mỏ, Cuốc Thép, Lò Xuyên Vỉa, Cần Số, Máy Khoan, Khoan Xoắn Máy*. The costing
example is in đồng. One gift from the language: *nguyên tố* is "element", and a prime is *số
nguyên tố* — an element number — which is the site's thesis already in the textbook's word.

### A defect only pixels showed: the heading face had no Vietnamese in it

- **Every heading, label and button that uses `--display` rendered its marked vowels in a
  different face from the rest of the word.** The stack is *Black Han Sans, Arial Black,
  Impact*; none is embedded, and Arial Black and Impact carry Latin-1 and Latin Extended-A —
  enough for French, German and Turkish — but not the Latin Extended Additional block where
  *ư ờ ỏ ủ ặ* live. So *Công Trường Mỏ của* came out in two faces at once. No DOM read could see
  it; the first 380 screenshot did.
- **Fix: `:root:lang(vi){--display:…}`** with a stack that has the whole range (*Segoe UI Black,
  Noto Sans Display, Helvetica Neue, Noto Sans*). `MF.applyAccess` already puts `lang="vi"` on
  `<html>`, so nothing in the script changed. **Control:** with English on, the computed heading
  family is still *Black Han Sans, Arial Black…*; with Vietnamese on it is the new stack.
- **Every later script will need the same thing** — Cyrillic, CJK, Devanagari and Arabic are not
  in that stack either. The plan already said so for CJK; it is true for all of them.

### What is different about Vietnamese's checks

- **Nearly every syllable carries a mark**, so no pattern uses `\b` at all, and the English
  stop-word sweep matches only at spaces and punctuation.
- **A mark is "7 trên 10" or "7/10"**, so the counters read *Câu 2 (tổng 5)*, *Trang 2 (tổng 5)*.
- ***Điểm* is a grade and also a geometric point**, so the drafts avoid the word; *chấm điểm* and
  *điểm số* are what is banned.
- **"Still yours" is *vẫn là việc của bạn* only where English says it**; a plain "yours" is *tùy
  bạn*.
- **Budgets:** beat 260, lesson prose 1650, panel prose 780.

### How it was proved

- Entered first (the lesson from Turkish), `MF.validate()` in Vietnamese: **0 errors at 1250
  (36,080 checks) and 380 (36,070)** after the font fix, both controls failing as required;
  `MF.playthrough(1…9)` clean at both; no key fell back to English.
- **The stop-word sweep found only** *the rock is ready*, the loading tick no student sees.
- **At 380, on all eight screens: nothing scrolls sideways, and no button or heading clips** —
  including vertically, which is the risk with stacked marks.
- English: **0 errors**; the text harvest differs by exactly one string, *Tiếng Việt*.

**What it did not look at:** whether the Vietnamese is good Vietnamese, and how the new heading
stack looks on a Mac or an Android phone — only Windows was rendered.
