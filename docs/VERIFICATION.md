# The Verification Standard
### Mr Fraction's Word Problem Express
**Applies to:** every agent, **and to anyone working without one** — see `../CLAUDE.md`.
**Owner:** Oversight. **Last updated:** 2026-08-17. **42 rules.**

Every rule here was written after a specific failure on this project. The evidence is kept with each rule, because a rule without its scar gets softened away.

---

## 0. Why this exists

Across Cycles 1–3, essentially every real defect was found **by running the thing, not by reading it** — and the review log says so in as many words. Cycle 3 went further and fed the validator a deliberately malformed problem to confirm it caught all **13** planted defects, noting: *"A validator that only ever passes is worthless; this one was tested."*

That discipline then **decayed** in Cycles 4–6, as the work moved from arithmetic and markup into visual and geometric territory where "looks plausible" felt like enough. Checks were written, came back green, and were believed. Several were measuring nothing at all.

The standard is not "verify". It is *keep verifying at the same rigour when the subject stops being arithmetic.*

---

## 1. Measure before you assert — in **both** directions

Do not claim a pass without the number. **Do not claim a limit without the number either.**

> **Evidence (C1-2).** The theme spec restricted rail green from small body text, asserting it would fail contrast. Measurement showed **7.2:1** — comfortably AA. The restriction was, in the log's words, *"invented, not measured."* A fabricated constraint costs real design freedom and looks exactly like diligence.

Over-restriction and false-green are the same error pointing opposite ways: a claim made without a measurement.

## 2. Test the test — a check that finds nothing is **suspicious, not passing**

Before believing a sweep, assert it examined a plausible, non-zero number of things.

> **Evidence.** Three separate "clean" results on this project came from scans that examined **nothing**:
> - `"0 external references, fully self-contained"` — the filter excluded `\.claude\`, and the project lives under `.claude`. It scanned **0 files**.
> - `"Shipped code files: 0"` from a PowerShell `-Include` that silently matched nothing.
> - `"readAloudInvocations: 0"` — reported as fine; the button id was wrong and read-aloud never ran.

Also check the harness itself is not the thing that's broken:
- 40 `buildTrip` calls looked like a deterministic selector; they ran inside one millisecond and shared a `Date.now()` seed.
- A busy-wait loop blocked the frame clock and made a working animation read as frozen.
- `getBBox()` on a transformed group returns **local** coordinates; comparing them to a viewBox is meaningless.
- A selector counted three legend swatches as grid cells (`9+6+8 = 23` in a 20-cell grid).
- Layout was measured while the browser pane had collapsed to `innerWidth: 0`.
- **(C8)** A render sweep appended the station `display:none`. `innerText` on a `display:none` subtree silently degrades to `textContent`, so every hidden node reported as visible — nine false answer leaks at once, all of them Model Yard values a student only sees after marking a part. Render off-screen with a width; never hidden.
- **(C8)** The same sweep forced the `route` phase on all 15 problems that have no `secondRoute` and reported 15 errors. The real app never goes there. **Visit a phase only if the app would.**
- **(2026-08-03)** The mirror image of that one: a sweep that only *renders* cannot see anything a phase reveals **on click**. Read 1 hid its model answer behind a button, so the leak scan had never read it — two plants there had already come back NOT CAUGHT and been correctly diagnosed as instrument error. It stopped being tolerable when the Platform Check put a screenful of authored teaching copy behind the same click. Fixed with `st.expandAll`. **When you add progressive disclosure to a phase, go and make the sweep open it** — otherwise the new content is exempt from every scan by accident of interaction design.

**If a result is surprising, suspect the instrument before the subject.**

## 3. Break it on purpose

A rule that has never fired is not known to work. After writing a validator rule, feed it data that should fail and confirm it does.

> **Evidence.** Cycle 3 planted 13 defects and confirmed all 13 were caught. Cycle 6's scene rules were confirmed the same way — groups totalling 22 against a 20-part model, and the restored `60 squares` distractor. Doing this also caught a **false positive** ("90 minutes" flagged as a partition) and a **duplicate rule** that reported one fault twice.

## 4. Attack every gate with the laziest possible input

If an empty field or a single keystroke gets through, the gate checks nothing.

> **Evidence (C5).** The regression suite passed Read 3 by typing `"x"` — for many cycles. That was read as the suite working. It was evidence the station was hollow. Three stations were in this state at once: Read 2 had nothing to get wrong, and the Ticket Booth asked a question the student had answered two screens earlier.

**A test that passes trivially is a finding, not a reassurance.**

## 5. Check in the modality the defect lives in

Looking is the default and it is not enough.

> **Evidence.**
> - **Audible only (C3-3).** Read-aloud said *"holds 12 cups cups"* — invisible to every visual check.
> - **Accessibility tree only (C3-1).** Every composite button had no accessible name; a screen-reader user could not have used the site **at all**.
> - **Geometric only.** Cars bunched on a hairpin leg while distance-to-track and in-view checks both passed — nothing measured the gap *between* vehicles.

## 6. Re-run the whole invariant set, not the property you just fixed

> **Evidence.** The leg-map train: fixed overlap → framing broke; fixed framing → spacing broke; fixed on-rails → spacing was still broken because it had never been measured. Each report said "verified" and each was true about exactly one property.

Keep a named invariant list per feature and run it whole.

## 7. Enumerate the other consumers

Changing a shared path, schema, or requirement breaks siblings you are not looking at.

> **Evidence.**
> - Adding required schema fields **broke the Dispatch Office** — every teacher-authored problem reported "Needs fixing".
> - The Terminus Hub hand-builds its problem markup, so it silently missed the Scene every other station got.
> - Read-aloud queried a fixed tag list, so it silently missed every new control.

Before shipping a shared change, list every surface that reads it.

## 8. Dead content raises no alarm

New content must be **shown reachable**, not assumed to be.

> **Evidence (C5-8).** `pw-cycling-club` was unreachable for 40 trips — its `context` collided with a problem present on every Local trip, so the Hub's novelty rule excluded it every time. No error was raised. Sweep many seeds and assert every item appears.

## 9. Documents drift from the build

> **Evidence.** `JOURNEY-ARCHITECTURE.md` claimed a reload resumed the same trip — impossible under the no-storage rule. `PROBLEM-SCHEMA.md` referenced a validator that was never built. And the reverse: `unknownCarPrompt/Options/Why` were authored in **every** problem and specified in `PEDAGOGY.md`, and the UI **never rendered any of it** while the station fell back to a giveaway question.

Spec-says and build-does must be checked against each other in both directions.

## 10. We are one model wearing five hats

> **Evidence (Cycle 1, standing note).** *"These agents are the same model under different instructions. They share blind spots, and passes reduce correlated error without eliminating it."*

Proven in Cycle 4: every agent passed a site that looked unfinished, because none of them owned that question. **A gap in ownership is invisible to a review process.** When something feels unexamined, ask who owns it — the answer may be nobody.

## 11. The user's judgement has repeatedly been better than ours

> **Evidence (C2-1).** The user's restructure was *pedagogically stronger* than the teacher agent's original, which had every trip teaching the same four Polya moves with different numbers. **(C2-2)** Local/Express/Limited were assigned backwards because we did not know a Local stops at every station. Cycles 4–6: hollow gates, the quilt illustration asserting a derived value, the paragraph structure — all user-found.

Default to **adopt and extend**, not defend. Raise a concern once if there is a real one, then build the thing.

## 12. The check we still do not have

No real student has used this site. Every claim about what a demoralised fifteen-year-old finds useful or patronising is a model's guess. **Classroom testing is the missing check and nothing in this process substitutes for it.** Say so rather than implying the reviews cover it.

## 13. A defect can exist with every file correct

The worst defects this project has shipped were not in any one artifact. They existed only in the **composition** — what one file renders, crossed with when another renders it.

> **Evidence (Cycle 6).** The Model Yard prints `segmentValue` on every car; `stations.js` calls it from the **Plan** phase, which runs before the Engine Room. Any problem whose `segmentValue` equalled a step answer handed that answer over a screen early. It was in **five approved problems**. Every manifest was correct. `model.js` was correct. `stations.js` was correct. Five agent reviews read manifests and passed it.
>
> The same shape, same day: the Hub asked riders to name the line they had just ridden (`app.js` counted lines with content; `selector.js` always draws the hub from the ridden line — neither wrong alone). A locomotive ran backwards (art faces left; scrolling ground and trailing steam both said "moving right"). Flour fell past its bowl (spout at x 74; bowl mouth 96–224).

Reading artifacts one at a time cannot catch these. The question that does is: **what does the student's screen actually contain at this moment?** Render the phase and inspect the output — not the source that produced it.

## 14. Fix the class, not the instance

A fix scoped to the example that produced it leaves the class open, and the next instance looks like a new bug.

> **Evidence.** Cycle 3 found the quilt **scene** asserting step one's answer. A rule was written — for scenes. Nobody re-asked it of the **bar model**, so the identical defect sat in five approved problems until Cycle 6.
>
> Then the same error three more times in one session: a numeric leak rule was added and immediately missed leaks **spelled out in words** ("four times"); those were fixed and a **structural** leak remained (a bar drawn in 3 segments while step 1 asked "how many stretches?"); that was fixed and a new Plan model then made step 1 redundant in two further problems.

On finding a defect, name the **class** and enumerate every surface in it. *Where else can an answer reach a student before it is asked?* — not *fix the quilt*.

## 15. Read the scars before you build — and note where they are written

This project records its failures. Recurrence means the record was not read.

> **Evidence (Cycle 6).** Every ratio table shipped with the correct option first. This was already documented **twice**: `stations.js:245` for the Read 3 options — *"a student could score full marks without reading"* — and `teacher.md` under authoring biases: *"You will write the correct option first. It happened in all seven problems."* The working fix was 200 lines from the new code.

Before building anything resembling something already here — a choice UI, a picture of a problem, a gate, a phase — grep for how the existing one solved it and read the comment above it.

**And note where the lesson lives.** The rule above was in an agent file. Agent files bind only when that agent runs; work done directly, without invoking `teacher` or `art-director`, inherits none of them. A lesson filed only in an agent will be relearned by whoever works without it. Anything that must always hold belongs **here**, and this document is to be read before authoring, not only during a review cycle.

## 16. The author is the worst reviewer of their own fresh work

> **Evidence (Cycle 6).** Four spelled-out answer leaks were found in brand-new Ratio & Rate content, written by the same agent that had just flagged the identical pattern in the Part–Whole set — including an estimate reading *"Ten bags for twenty is two dollars each exactly."*

Sweep a newly discovered class against **your own output first**, before anyone else's. When the authoring pass and the review pass are the same agent, say so in the log rather than letting a sign-off imply independence.

## 17. A green check on a neighbour says nothing about the file you edited

> **Evidence (Cycle 6).** A comment block in `stations.js` was left malformed — `*/` closed it early and two lines of prose fell through as bare code. That is a syntax error that would have killed the file and every station in it. The checks running at that moment exercised `data.js` and `model.js` and passed clean. It was caught by reading the file back.

After editing a file, exercise **that file's own surface**. For a station, that means driving a station.

## 18. Measure the statistic the user actually experiences

Variety counts, distinct-value counts and "at least one" checks are frequently true and useless. The question is almost never *can this happen* — it is *what happens to me, each time*.

> **Evidence (Cycle 7).** Randomised trip generation was reported as working on the strength of "7 different problems open the trip". That counted how many distinct problems **ever** open one. The distribution was not measured, and one problem was opening **two trips in three**. The user reported seeing the same problem every time; the metric said seven. Both were true.

For anything a student meets repeatedly, report the **distribution**, not the range. And where a strategy could beat the content, report its **success rate against chance**, not whether it is theoretically possible.

## 19. A check that reports a miss indicts the instrument first

When a planted defect is not caught, the likeliest explanation is that the defect never reached the check.

> **Evidence (Cycle 7).** The estimate-range rule reported MISSED. It was not broken: the defect had been planted in the problem's **base** estimate, and `materialize()` overwrites that from the chosen number set, so the value under test never reached the validator. Planted in the set — and separately on a problem with no sets — it fired both times.

Number sets introduced a layer where **the authored field and the rendered field are different objects**. Plant defects where the value lives *at render time*. And before "fixing" a rule that reports a miss, prove the subject actually changed.

## 20. Randomness needs its generator checked, not just its output

> **Evidence (Cycle 7).** `makeRng` is an xorshift32 seeded directly with the trip seed. Seeded with small integers it emits a near-linear ramp — seeds 1, 2, 3 produced first draws of 0.000063, 0.000126, 0.000189, and **all 300 small seeds drew below 0.5**. Every two-way shuffle therefore resolved identically, and `pw-soup-serving` was unreachable across 300 consecutive seeds while its only rival won 300/300.
>
> Large `Date.now()`-shaped seeds hid this completely, and that is all the code had ever passed. It surfaced the first time a **reproducible** seed was used — which is exactly when a generator most needs to be sound, because that is when it is being tested.

The failure presented as dead content and was nearly filed as one. Scramble a seed before drawing from it, and sanity-check the first draws across a seed range before trusting any sweep built on them.

## 21. Optimising a proxy can destroy the objective

State the goal, improve the stand-in, then **re-measure the goal**.

> **Evidence (Cycle 7).** Mixed rides were clumping — 37.5% of adjacent stops shared a line — so a stricter alternation rule was added. It worked perfectly: 0% adjacency. It also cut distinct trip line-ups from **20 to 4**, because with two lines the constraint admits almost nothing. Variety was the requirement; tidy alternation was the proxy.
>
> Same session, same shape: levelling option lengths so the correct answer was no longer the wordiest drove "always pick the longest" from a strong signal to **0%** — which is the identical tell inverted. *The wordiest option is always wrong* is still a strategy that is not reading.

A fix that drives a metric to zero deserves the same suspicion as one that leaves it high. Both extremes are signals.

## 22. The picture is part of the arithmetic, so check it like arithmetic

A bar's segment count, its shaded count and a scene's cell counts are *claims about the maths*. Nothing was checking them.

> **Evidence (C8).** A bar deliberately drawn in 3 parts, on a set whose stretch divides the hour into 4, **validated completely clean**. Rule 6f reconciles the *scene* against the segments and never asks whether the segments themselves are right — so the picture and the numbers could disagree in silence. This is the quilt-in-twentieths-described-in-sixtieths defect arriving through a door number sets opened.

`numberChecks` can now name `seg1` and `mark1` (and `seg2`…), the bar as **materialised**. Declare them. A picture that cannot be stated as an equation is a picture nothing is checking.

## 23. A wrong answer nobody would type is not a misconception

Diagnostic feedback only exists if the value can be reached by a student's hand.

> **Evidence (C8).** Converting `pw-band-brass` to number sets, two of its three step-one misconceptions divided by 9 — which needs the headcount divisible by 9 *and* 2, true only of the original 18. Every other set would have shipped `1.333…` as a "common error", and the diagnosis could never once have fired. They were **replaced, not retokenised**. `rr-market-stall` was constrained the same way: the inverted-rate response is bags-per-dollar, so both reciprocals must terminate — 4 bags for 14 dollars gives 0.2857142857.

Two related rules, both cheap and both now in `SWEEP.report()`: no two misconceptions in a step may parse to the same number (`matchMisconception` returns the first hit, so a collision diagnoses a mistake the student did not make), and none may equal the step's answer.

And the constraint that is not arithmetic at all: **a set must keep the story true.** Water stays the bigger share; hydration stays in a range a real loaf occupies; the cheaper stall still charges more in total. `numberChecks` cannot express any of it. Verify it separately and record that you did.

## 24. The first content of a new shape is a test of the engine

Existing code is only known to work on the content it has seen. Adding content of a genuinely new shape does not just add content — it runs the first real test of every assumption the engine made when everything looked alike.

> **Evidence (C9).** Opening the Change Line found four defects, and **all four were in code that predated it**:
> - `phPlan` decided whether a Plan-phase picture existed by testing for `signalBox.barModel.bars[0]`. That was true of every problem then written, ratio problems included, because they all kept a bar beside their table. The first problem with a model and no bar would have rendered an **empty Plan phase with no error anywhere.**
> - `Scene.html` routed every animated scene to the one scene library that existed and returned `''` for anything it did not have — a silent empty frame.
> - The validator's scene checks sat behind `if (p.scene && seg)`, so a problem with no bar model got **no scene checks at all**, including whether its artwork existed.
> - The route chooser offered Local/Express/Limited as a hardcoded 5/4/3. A three-problem line fills two stations, so "Local — 5 stops" delivered two, and the shortfall was reported only in a trip note no student ever sees.

Each was invisible for as long as every problem had the same shape. Before shipping the first item of a new kind, go and read what the engine assumes — and ask what it is testing for when it means "does this exist".

The last one is also §18 wearing a different hat: the metric said the trip built successfully, and the student got less than half the stops they chose.

## 25. When a check reports something surprising, the instrument is the first suspect — and today it was, eight times

Rule 2 says this. 2026-08-02 is the day it stopped being advice and became the dominant failure mode: **more findings were wrong than right.**

> **Evidence, one day.**
> - A render sweep appended the station `display:none`. `innerText` on a `display:none` subtree degrades to `textContent`, so hidden nodes reported as visible — **nine false leaks at once.**
> - The same sweep forced the `route` phase on the 15 problems that never visit it. Fifteen errors, all fictional.
> - A collision check did `parseFloat(x.value)` against `numberSets.numbers`, which holds **plain strings**. Every `n1` and `n3` silently became `NaN` and dropped out. It then declared a demo number "clean" that collided with a distractor.
> - A correct-option-position measurement used a made-up shuffle salt. The real ones are `id+'|read3'`, `|car`, `|changemove|`. It was measuring noise.
> - A polling loop used `requestAnimationFrame` in a hidden browser pane, which never fires. Thirty-second timeout.
> - A station driven by hand was given `{}` as its metrics object. The click handlers do `self.m.misconceptions.push(...)`, so they threw **inside the listener** and aborted before writing feedback. The symptom was an empty feedback panel — indistinguishable from a missing misconception.
> - A bracket check read `innerText`, which excludes `::before`/`::after` content. The brackets were there.
> - Two selectors were scoped to the whole screen rather than the component, so they counted the worked example's cells and the scene illustration's SVG as failures.

The pattern underneath all eight: **the check and the thing being checked were not the same object.** Hidden vs rendered, manifest vs screen, a string vs `{value:}`, the whole page vs one component.

Before believing any result, say out loud what the instrument is actually looking at.

## 26. A narrow fix to a leak class invites the same leak back in a new field

The answer-leak class landed three times in one day, in three disguises, and **each fix was too narrow to catch the next one.**

> **Evidence.**
> 1. A Test Track demonstrated on 12 blocks split into 4, taking 3, announcing **9** — on a problem whose set 1 is a 12-cup pot answering 9. Fix: check the demo's numbers against every value in every set.
> 2. That rule did not cover the cross-multiplying worked example, which used "2 to 3 is the same as 8 to **12**" on a problem answering 12, and remarked that adding gives "**15** and 13" on a problem answering 15. Fix: scan `worked.label`, `.equation`, `.sayCut`, `.sayTake` and the row values.
> 3. **That** rule missed both of those same leaks, because they also lived in `a11yDescription`, which narrates the worked example in prose. Only the rendered sweep caught it.

A rule that inspects a **list of fields** goes stale the moment a field is added — and a field is always added. The rule now **walks the whole object** and compares every number it finds against every answer.

Corollary, learned the same day: the leak scan's own regex used `(?![\d.])` to avoid matching `2` inside `2.5`, and that also stopped it matching a value at the **end of a sentence**. Any leak phrased *"…and that is 9."* was invisible for the whole session. Reject a period only when a digit follows it.

## 27. Two designs were rejected by the user today, and both rejections were correct

Rule 11 says the user's judgement has repeatedly been better than ours. Two more.

> **Evidence.**
> - The Test Track's first design ran a **parallel mini-example** — forty blocks beside a pot of soup. The user: *"this current second animation just makes it confusing, with students trying to understand a second whole."* Correct on two counts: it added a second whole to hold in mind, and its first option (*"Split the 40 into 4 equal parts"*) **announced the sectioning the student was supposed to derive from the fraction**. The percent-to-whole link — the actual lesson — was never taught.
> - The Ratio demonstration's first design animated two bars scaling together and stated the law *"whatever you do to one row, you do to the other."* The user: *"the grouping is too confusing and just repeats the first lesson."* It did: that is almost verbatim the Ratio Table's own law, one screen earlier.

Both were caught by looking at the screen and asking *what is this teaching that the last screen did not?* — a question no check on this project can answer, and the reason classroom testing remains the missing check (rule 12).

## 28. A leak scan that only knows about *answers* cannot see a leak of a *given*

The pre-solve leak scan has always asked one question: *does a value that equals an answer appear before the Engine Room?* That is the wrong question on the numberless read, where **no quantity at all** is allowed on screen — and so a picture printed its fractions beside masked prose for as long as that problem existed, with nothing looking.

> **Evidence (2026-08-03).** `pw-quilt-colors` masks its prose on the first read and always has. Its **scene legend** read *"blue 2/5 · red 1/4"* right next to it, and the grid's `aria-label` said *"8 of 20 blue; 5 of 20 red"* — so the student least able to cross-check got the numbers read aloud to them. Every file was correct alone: `scene.js` drew what it was handed, `stations.js` masked what it rendered, the manifest was right. The defect existed only in the composition (§13). It surfaced because a new phase was added beside it and the screens were swept for digits **for a reason unrelated to answers**.

`Scene.html` now takes `masked`. `SWEEP` now has a check that has nothing to do with answers: **any digit on `read1` or `platform` is a defect.** Confirmed by reverting the masking, which brings the leak straight back on both screens.

The general form, and it will apply to the next rule as much as this one: **a check encodes the question its author was asking that day.** When a rule holds absolutely — *no quantity on this screen* — assert the absolute rule, not the interesting special case of it.

## 29. Never let a shell script do a bulk edit this project's own tools can do safely

On 2026-08-04 a PowerShell "fix-up" script **silently corrupted seven content files**, replacing a single character throughout each one: `w`→`h` in `rr-timetable-run.js` (*"Chosen for the Shitchyard… the hhole lesson"*), `o`→`r` in three more, `a`→`n`, `p`→`r`, `Y`→`o`. Between 17 and 1143 characters per file.

> **The cause.** The script held its replacements in a hashtable of nested arrays. PowerShell **flattens a single-element array**, so for any file with one replacement `$pair` was not a pair but a *string* — and `$pair[0]` was its first **character**. `$t.Replace('w','h')` is a valid overload, so it ran, on the whole file, without error. Files with two or more replacements were untouched, which is why the damage looked random.

**Three things made this recoverable, and only the third was luck.**

1. **Length is invariant under character substitution.** That let the repair assert `disk.Length === clean.Length` before writing a byte.
2. **The browser still held the pre-corruption objects in memory**, because the page had not been reloaded — good for every authored string, useless for comments.
3. **The HTTP cache still held the original file bodies**, comments and all. `fetch(url, {cache:'force-cache'})` returned them. All seven were restored **byte-identical**, verified by comparing disk against the cached copy after the repair.

Recovery cost roughly a quarter of the session and turned on a cache that could have been evicted by a single reload.

**The rules.**

- **Bulk content edits go through `Edit`, not a shell.** It matches an exact unique string, fails loudly when the string is absent, and cannot address a file by character offset. Every one of the seven repairs after recovery was an `Edit`, and every one either applied or errored.

> ### The clause this rule was missing, added 2026-08-17 (Cycle 30)
>
> Since 2026-08-10 this rule has carried the reassurance that *"the worst case is a `git checkout` rather than a lost session"*. **That reassurance silently assumed the file was tracked.** In Cycle 30 a review agent overwrote `.claude/launch.json` without reading it. `git log --all -- .claude/launch.json` returns nothing: git had **never** held a copy, so there was no worst case, only a total loss. The file was untracked because nobody had thought about it, which is exactly the condition under which this happens.
>
> **So: read any file before you overwrite it, and before leaning on the safety net, check that git actually holds a copy of the thing you are about to change.** An untracked file has no safety net at all. And a review pass should not be writing to project files in the first place — the same cycle's `art-director` ran its whole harness against a scratch copy and left the tree untouched, which is the standard to copy.
- **A replace whose arguments are single characters is a bug**, not an edit. Assert the length of every search string before using it.
- ~~**This project has no version control.** There is no `git checkout` here. Treat every scripted write to `content/` as irreversible, because it is.~~
  **THIS IS NO LONGER TRUE, AS OF 2026-08-10.** The folder is a git repository with a full initial commit (105 files). `git checkout -- <file>` now exists and works. **Proven, not assumed:** the exact 2026-08-04 disaster was re-staged — a scripted `w`→`h` substitution across `ch-water-tank.js`, same shape, same 28,261 characters — and one `git checkout --` restored it byte-for-byte, verified by normalising line endings and confirming `git status` clean.
  **The rest of this rule stands unchanged and matters more, not less.** Recovery being cheap is not a licence to write carelessly: a scripted bulk edit can still corrupt seven files between two commits, and everything uncommitted is still unprotected. `Edit` over a shell remains the rule, single-character replacements are still a bug, and the discipline of reading one file back before writing the rest still costs a minute and saves a session. What has changed is only the worst case: it is now a command rather than a quarter of a session spent scraping a browser cache.
- **If a bulk write must happen, read one file back and eyeball it before writing the rest.** The corruption was visible in the first line of the first file.

## 30. A permitted use of a forbidden pattern must be marked in the data, not judged by the reader

This rule is written **before** its failure rather than after one, which makes it the weakest rule in the document. It is here because the failure it anticipates has a known shape: rule 14, fix the class not the instance, arriving from the other direction — a **narrowly scoped exception** widening until it swallows the rule.

**The change (user decision, 2026-08-03).** `PEDAGOGY.md` §2.2 now teaches words in three tiers. Tier 1 *names* an operation (sum, product, quotient, per) and is taught as vocabulary. Tier 2 *names the situation and hands the reader a question* (more than, left, each, of) and is taught as a question that never resolves to an operation. Tier 3 is the keyword strategy, taught only as a hazard. Non-negotiable 4 was rewritten from "no keyword strategies" to **"no word is ever taught as sufficient to choose an operation."**

The site's guard against tier 3 has always been a **grep** — `"more" means`, `look for the word`, `key word`. New hub copy must quote those phrases in order to refute them, so the grep will fire on legitimate content. **The temptation is to soften or drop the grep. That is how this rule dies.**

**Three checks, all mechanical, none relying on anyone's judgement about intent:**

1. **The exemption is a data tag, not a reading.** Hub sections carry `tier: "names" | "asks" | "lies"`. The grep exempts `tier: "lies"` sections and **nothing else**. An untagged hit is a defect even when the prose around it looks well-intentioned — the whole point is that the author is the worst judge of their own intent here (rule 16).
2. **A tier-2 entry with fewer than two examples is a defect.** Each must carry **≥2 worked examples in which the same word takes different operations**. One example is not an illustration of a question — it is a keyword strategy with extra words. This is assertable: count examples per entry, and assert the operations differ.
3. **No operation name adjacent to a tier-2 word in student-facing copy.** Greppable: `add|subtract|multiply|divide|plus|minus|times` within a short window of a tier-2 term, scoped to rendered student strings. Spec prose is exempt; student copy is not.

**And the check that has to be run on a screen, not a manifest** (rule 13): render the hub and ask the rule-13 question — *what does the student's screen contain at this moment?* A tier-2 entry whose two examples are far enough apart on the page that only the first is visible has, on that screen, taught the thing rule 2 above exists to prevent. Verify by rendering, not by counting fields.

**The failure mode to watch for, stated in advance so it can be recognised:** every one of these checks will at some point report a hit on copy whose author is certain it is fine. That report is the system working. The remedy is to tag the section or fix the copy — never to widen the exemption.

## 31. Deletion is the cheapest fix to write and the most expensive to live with

Removing the thing that leaks makes the check go green, so it is the fix that gets written. It is almost never the fix that should ship, and this project now has five instances of the same arc: *find a leak → delete the thing → the screen stops teaching → the user reports it → restore.*

> **Evidence.** Cycle 7 blanked `segmentValue` and left the Model Yard with no numbers in any box; the user reported it three times before it was reversed. Then, in one session on 2026-08-04, **three more, all mine**:
> - Scene grids lit nothing while masked. *"They are blank with no colour… the soup is empty with no colour."*
> - The Model Yard hid derived values, leaving empty boxes. Flagged as reading *"thin"*.
> - The Platform Check's answer set was narrowed to the structural sentence, so students who tapped a sentence holding a number they needed were told *"Not quite."*
>
> Every one of those was written **after** reading the rule that forbids it, and in two cases after quoting it in the same file.

**Why it keeps happening, which is the part worth internalising.** The only thing an agent can measure here is *absence* — "the scan reports zero" is immediate and self-verifiable. Whether the screen still teaches is not measurable from inside; it needs eyes. **A feedback loop that can only see absence will keep producing absence.**

**The control is not the rule, it is a required sentence.** After removing anything from a student-facing surface, state — in the report, in words — **what is left on that screen and whether it is still worth looking at.** Writing that sentence is what makes the emptiness visible while it can still be cheaply undone. In all four recent cases it would have been obviously wrong on sight.

And the specific remedy the project keeps rediscovering: **withhold what the surface SAYS, not what it SHOWS.** The scenes keep their pictures and lose their counts. The Model Yard keeps a number in every box and loses the derived one. The map keeps every row and marks one.

## 32. When a rule is applied to a subset, enumerate the complement

A rule applied where it is *convenient* rather than where it is *true* produces an inconsistency nobody is looking for, because the surfaces that escaped it were never examined.

> **Evidence (2026-08-04).** Number-masking was applied to the scenes that are countable grids — the Part–Whole line — and not to the `anim` illustrations that the Ratio and Change lines use, because those are not countable and were harder. The first read then showed a full illustration on two lines and a blank frame on the third. The defect was not in either branch; it was in the gap between them, and it was found by the user, on screen.

Before shipping a rule that touches some content and not the rest: **list the items it does not touch, and say for each why it is exempt.** If the answer is "it was harder", the rule is not finished.

## 33. If a fact can be derived from data already present, derive it — do not author a copy

An authored duplicate of a derivable fact is drift with a delay on it. Worse, it turns a mechanical question into a judgement call, and judgement calls are where the arguing happens.

> **Evidence (2026-08-04).** `platformCheck.sentences` — which sentences a student must tap — was authored by hand. It was set **too narrow** on nine problems, widened, then found **too wide** on five, both times by the user, both times because a defensible reading was marked wrong. It is now *derived*: exactly the sentences carrying a quantity the problem uses, with the validator asserting the authored set equals the derived one. The disagreement ended permanently, and two earlier decisions — when the question sentence qualifies, when a distractor sentence never does — fell out of the derivation for free.

Author the value if you like, for a reviewer's benefit. But **assert it against the derivation**, so the two cannot part company.

## 34. "It works locally" says nothing about the copy anyone else is looking at

Every check on this project runs against the working folder. The moment there is a second copy of the site — a host, a deployment, a shared drive — every one of them is answering a question about the wrong object, and answering it confidently.

> **Evidence (2026-08-10).** Before the first upload to GitHub Pages, all **67** referenced paths were verified twice: case-exact against the on-disk filenames, and again over HTTP with every one returning 200. Both passes were sound. The site then went live **completely broken** — unstyled, stuck on the loading screen, nothing interactive — because `assets/` and `content/` had never been committed. The ten images had been uploaded to the repository ROOT instead of `assets/art/`.
>
> Nothing about the checks was wrong. They verified that *the local folder is internally consistent*, which was true and useless. The question that mattered — *does the destination have these files* — had never been asked, and could not be answered by any instrument pointed at this machine.

The generalisation, and it is rule 25 arriving from a new direction: **the check and the subject were not the same object.** Local disk is not the deployment. A path resolving here is not a path resolving there.

**So: after any publish, verify against the published URL.** Load it, read the console, and assert the same things the local sweep asserts — stylesheet applied, `MF` defined, the expected problem count, zero validate errors, images 200. Two minutes, and it is the only check that examines what a student will actually open.

## 35. An instrument can destroy the subject, and the wreckage looks like the defect you were hunting

Rule 2 says a surprising result indicts the instrument. This is the harder version: the instrument was not merely wrong, it *caused* the failure it then reported — and the report was indistinguishable from the disaster the check existed to prevent.

> **Evidence (2026-08-10).** Verifying artwork paths before deployment, a link check sent `HEAD` requests to `tools/serve.ps1`. That server set `Content-Length` and then wrote a body regardless, which throws — and the write sat outside any try/catch, so the exception unwound the accept loop and **took the whole server down on the first request**. Every subsequent asset reported FAILED.
>
> Ten art files reporting FAILED is exactly what a case-sensitivity catastrophe looks like on Pages, which was the specific thing being checked for. The files were perfect. The checker had killed the server and then blamed the files.
>
> Compounding it, twice in the same hour: a PowerShell link checker reported **all 67 paths broken** on a run where every one was fine, because `+` binds before `-join` and every URL it built was malformed.

**Two habits, both cheap.** Before trusting a sweep, probe ONE known-good subject and print what the instrument actually built — the URL, the selector, the path. And when a check reports catastrophic, uniform failure, suspect that the check broke the subject before concluding the subject was broken: real defects are usually patchy, and *everything failed at once* is far more often a dead harness.

`serve.ps1` now answers HEAD with headers only, and one bad request can no longer end the session.

## 36. A checker that hardcodes what to check will pass a thing it has never seen

The "discovered, not listed" defect has now been found in **seven files on this project, three of them checkers** — and a checker is the worst place for it, because its output is the thing you use to decide there is nothing to look at.

> **Evidence (2026-08-10).** `tools/check-contrast.ps1` reported **"39 pairs checked, 0 failing"** on a palette that did not include `--line-percent`. The colour had shipped that morning. The script held the five line colours as hex COPIES of what `app.css` declares — so it was also checking values that were free to drift from the stylesheet — and enumerated its pairs by hand, fifteen rows for five lines. Nothing errored. Nothing was missing. It simply never looked, and *0 failing* reads exactly like coverage.
>
> Rebuilt to read `--line-*` out of the stylesheet and generate the pairs, it went to **48 pairs across six colours and found three real AA failures** that had been on the site for as long as the Platform Check has had a "you are here" row.

The three habits that make this class survivable, all cheap:

1. **Ask the world what exists**, do not remember it. A registry, a stylesheet, `Object.keys(global)` — anything the code itself must already be right about.
2. **Never hold a second copy of a derivable fact** (§33). A hardcoded hex is a claim about another file that nothing re-checks.
3. **Refuse to report a clean run on an empty subject set.** `check-contrast.ps1` now exits non-zero if it finds no colours; `preview-scenes.html` turns its banner red; the sweep prints how many screens it rendered. *"0 faults" and "0 subjects" print identically* — so make the tool say which one it means.

## 37. In a BOM-less `.ps1`, a curly quote can appear where you typed an em-dash

Narrow, but it cost a genuinely confusing half-hour and it will recur, because every file in `tools/` is UTF-8 without a BOM and every comment in this project is full of em-dashes.

> **Evidence (2026-08-10).** Adding one line to `check-contrast.ps1` produced `Missing closing '}' in statement block`, pointing at a brace several lines away that was perfectly balanced. Brace-depth counting said the file was fine. Parsing the same text with `ParseInput` said it was fine. Only `ParseFile` — reading the bytes — failed.
>
> **PowerShell 5.1 decodes a BOM-less script as ANSI.** The em-dash's UTF-8 bytes `E2 80 94` become three CP1252 characters, the last of which is **U+201D — a curly closing quote, which PowerShell honours as a string delimiter.** The string ended early and the rest of the line became garbage that swallowed the brace.

**The rule: plain hyphens inside double-quoted strings in `.ps1` files.** Comments and single-quoted strings are unaffected, which is exactly why this hid for months — every other em-dash in `tools/` sits in one of those and has never caused trouble.

And the diagnostic worth keeping: when a syntax error points at balanced punctuation, **suspect the encoding, and compare `ParseFile` against `ParseInput` on the same text.** If they disagree, the problem is in the bytes rather than in the code.

## 38. A reference site is compared as a rendered page, in document order — never as a list of its parts

When another site is named as the standard to match, **file two diffs.** An inventory diff finds what we got *wrong*. Only a composition walk finds what we do not *have*, and an inventory diff cannot substitute for it — it is structurally blind to absence.

> **Evidence (2026-08-16).** Mr. Fraction Factory closes its home page with a `.stats-strip`: three boxes reading *5 STATIONS / ∞ FRACTIONS TO EXPLORE / 1 MR. FRACTION*. This site had nothing of the kind — its map ended on a list of hubs and stopped — and **the user had to point it out.**
>
> `ROADMAP.md` §5, *"Artwork matching the sister site"*, was marked **DONE 2026-08-09**; §5b, *"Palette reconciliation"*, **CLOSED 2026-08-10**. Both were honest work. §5 diffed the Factory's `:root` against ours row by row and listed its art files; §4 quoted its `.mr-companion` rules verbatim off the live site. The audit was thorough enough to extract another site's CSS by hand.
>
> **Every token the strip uses was already on that table, ticked.** `#FDF8F0`, `#C8B89A`, `#C96A1F`, Black Han Sans, Atkinson 700 uppercase — measured off the live Factory afterwards, and each one already recorded as *identical* or *adopted*. The component was invisible to the audit **because it matched.**

> **The audit was blindest exactly where the two sites agreed most.** §5's conclusion — *"the two sites are already the same design system… mostly adoption, not redesign"* — was true, and it was taken as the finding rather than as the starting condition. Once every token reads *identical*, a component assembled entirely from those tokens produces **zero diff signal**.

**The two diffs, and neither one is optional:**

1. **Inventory** — `:root`, `@font-face`, art files, named component rules. Finds what we got wrong.
2. **Composition** — load the reference, walk `document.body` **in document order**, and write its sections and ours as two ordered lists side by side. Every row carries a one-line judgement: *port / deliberately different / not applicable.* Finds what we do not have.

Do the composition walk on the **rendered page**, not the stylesheet and not the source — this is `CLAUDE.md` #2 (*ask what the screen contains at this moment and render it; do not infer it from the source*) pointed at the reference instead of at the build, which is the one direction it had never been aimed. Record the date of the walk: the reference is a live site the same author edits, so a walk goes stale the moment it changes.

**The generalisation, and it is why this rule is not just §36 again.** The token list *was* discovered — read off the live `:root` rather than hand-copied — and it still exempted everything that is not a token. **A discovered enumeration still hardcodes its axis.** §36 is about the *items* being listed; this is one level up, about the *dimension* being assumed, and it is invisible from inside because the list is genuinely complete along the dimension you chose.

> **Before trusting any enumeration, name its axis out loud and name one real thing that could not appear on it.** Here: *"I am enumerating custom properties and asset files. A section of a page is neither."*

**What the same walk found once it was run** — a loader with no progress indicator, no ticker on the loader, an uncaptioned hero image, and a licence and three bundled typefaces that appeared in no file a reader opens. Four more absences, none of which any token diff could ever have surfaced.

*Two are closed since: the loader has a progress bar, and the typeface credits are in the README's License section rather than in a page footer — a colophon was built into `.rail-foot` first and taken out again on the user's call. The ticker and the hero caption remain open.*

---

## 39. A measurement taken while an animation is running is not the settled value

**This has now produced a false accessibility CRITICAL twice, in opposite directions, and both times the harness was the subject rather than the site.**

> **2026-08-03.** `theme-reviewer` filed a CRITICAL: a tapped sentence rendered invisible at **1.23:1**, cream on cream. It had read `background-color` repeatedly and correctly — inside a browser pane where `requestAnimationFrame` never fires, so a 120ms transition never advanced and the property stayed at its from-value **forever**. `art-director`, rendering real pixels, saw a solid fill. The pixels were right.
>
> **2026-08-17 (Cycle 30).** `student-tester` measured Model Yard car buttons at **19.4 × 66px** and filed a WCAG 2.2 touch-target failure. `theme-reviewer` refuted it from the CSS: `min-width: 34px` is a hard clamp on a `flex: 1 1 0` item, so 19.4 cannot come from that rule. **The decisive tell was the height — exactly 66px, the nominal `min-height`, which is what a horizontal-only transform looks like.** `19.4 / 34 = 0.57`, inside the `scaleX(.4) → 1` ramp of `car-arrive`, which on a 20-car problem is still settling at ~1385ms. The measurement was taken mid-animation.

One froze because the animation never advanced; the other was caught while it did. **Neither was detectable from inside the measurement** — both produced plausible numbers, and both agents were working carefully.

**The rule.** Before believing any box, colour or computed style:

```js
document.getAnimations().length   // must be 0
```

**And say in the finding that you checked.** A geometric claim with no statement about animation state is not yet a claim about the settled page. Where the harness cannot settle animations, seek them instead — `art-director` used Edge's `--virtual-time-budget`, which advances virtual time rather than sampling wall-clock, and is the reason its captures were trustworthy where three other passes' were not.

**The generalisation, which is the part worth keeping.** Both errors were caught only because **a second instrument disagreed** — pixels against computed style, CSS against a live probe. Neither agent could have found its own error. So: *when a measured CRITICAL rests on one instrument, get a second one before acting, and treat the disagreement itself as the finding.* Rule 2 says suspect the instrument; this is what that costs when you do not.

---

## 40. When a comment claims a protection, check the thing it names exists

Cycle 30 found **three separate documents asserting a safeguard that was not there**, and no check on this project can see this class — the assertions are prose, and prose validates clean.

1. **`five-situations.js:17`** states in capitals that *"THE TIER-3 SECTION IS TAGGED `tier: "lies"` AND MUST STAY TAGGED"*, citing §30 while doing it. **That file has no `tier` field anywhere.**
2. **`app.css`**, above the answered-choice rules, claimed *"the glyph and the border weight both carry it"* — WCAG 1.4.1 cover for right/wrong. **Both halves were false:** the glyph hung off a `.marker` child that four builders never emit, and `border-width` goes 2px→3px for right and wrong *alike*, so weight separated answered from unanswered and never right from wrong.
3. **`ESTIMATE-INPUT.md` §4a** stated the Engine Room field *"clears him horizontally at 1280"*. It was measured **56% covered** by the companion bubble.

**And §30's exemption mechanism turned out not to exist at all.** `tier` is read in exactly one place, `hub.js:634`, as a filter selecting which vocabulary rows a vocab page renders. It is a display parameter. **Nothing anywhere consults it as an exemption.**

> The failure mode §30 predicted was somebody **widening** the exemption. What actually happened was somebody **asserting** it. A widened exemption is at least visible in a diff; an asserted one reads as diligence.

**The rule.** A comment that says something is safe is a claim about code, and claims about code are checkable. When you read one — or write one — grep for the mechanism it names and confirm it is (a) present in the data and (b) actually consulted by something. A protection nobody reads is not a protection, and a comment describing it is worse than no comment, because it stops the next reader looking.

**Corollary for authors:** if you write a comment asserting an invariant, say in the same breath *what enforces it*. "Tagged `tier: "lies"`" is an assertion; "tagged `tier: "lies"`, which `<file:line>` refuses to render untagged" is a claim someone can falsify.

---

## 41. Read what the instrument printed, not what you expected it to print

Rule 2 is about checks that find nothing and are believed. **This is its opposite and it is more dangerous: checks that report loudly, correctly, and are not read.** Three instances in one day, 2026-08-17, and the first nearly ended the project.

> **The working tree, deleted and committed.** `git commit` printed **`103 files changed, 475 insertions(+), 33774 deletions(-)`** and the deletion of `index.html`, `assets/`, `content/` and `README.md` went in as part of a commit that was meant to add screenshots. The filename list was read; the number was not. Recovery took one command — `git checkout <prev> -- .` — **only because everything had been committed minutes earlier.**
>
> **A case-sensitivity check that was case-insensitive.** Built to prove every asset reference resolves on Linux Pages, using a PowerShell hashtable — which compares keys **case-insensitively by default**. The check reported on 130 references and could not have failed. **It was caught only because it had been given a deliberately mis-cased control**, which came back "not flagged". Without the control it would have gone into a deploy-readiness report as a pass.
>
> **A distribution computed from n=4.** A Ticket Booth position measurement compared rendered labels against `p.unknownCar` where the answer key is `ticketBooth.unknownCarAnswer`. It matched **4 of 148** and printed a tidy three-column percentage table. `n=4` was in the output. It was nearly reported as a finding.

**What the three share:** the instrument told the truth, in the output, at the time. Nobody read it.

**The rules.**

- **Before committing, read the stat line.** Not the file list — the numbers. A commit whose deletions you cannot account for is a commit you do not understand. `git diff --stat` before `git add -A`, every time, and treat any deletion you did not intend as a stop.
- **Every check reports its denominator, and you read it.** "0 failures" is meaningless without "of how many". A denominator that is small, zero, or different from what you expected is the result — not a footnote to it.
- **Give every check a control that must fail.** The case check survived only because of one. A control is not diligence theatre; on this project it is the single highest-yield habit in this document. **State the control and its outcome in the finding.**
- **When an instrument's output surprises you, re-read the output before re-running the check.** Twice today the answer was already on screen.

> **And the corollary that makes §29 honest.** The same day proved both halves: the whole site was **tracked**, so a total working-tree loss cost one command. `.claude/launch.json` was **untracked**, so an overwrite by an agent that had never read it was permanent. **The safety net is not "git exists" — it is "git holds this file". Check which before you rely on it.**

## 42. A control that repaints to the same picture is indistinguishable from one that is not wired up

Rule 41 is about output nobody read. **This is about output that was never produced.** Three clicks in the mine did nothing a student could see, and all three were *correct code*:

> **The lump you already picked out.** `inspectThis` set `MF.state.inspecting = idx` and called `paintMine()`. When `idx` was already the selected lump, the repaint drew a picture pixel-identical to the one on screen. The handler ran, the state was right, nothing happened.
>
> **Any lump during a swing.** `if(MF.state.breaking) return;` — a real and necessary guard, because rebuilding the face mid-break orphans the shatter. But for the 900ms of a swing every rock on the face was a dead control that said nothing about why.
>
> **The cart lump already on the bench.** Clicking it reset the bench to the assay. A real thing to have done — below the fold, where nobody saw it.

**None of these throws, and no check could see them**, because every existing instrument asked *did the state change* or *is the text right*, and the answer to both was yes.

**The rules.**

- **A handler that guards with an early `return` still owes the click an answer.** "Not now" is a response; silence is a bug report the student files against themselves.
- **Feedback must land where the mouse is.** A response below the fold is a response that did not happen — the same reason `inspectThis` scrolls the inspect panel into view.
- **Assert the reaction in the DOM, not the state change.** The `knock` group mounts the mine, dispatches real clicks and asserts a reaction node appears on the face. Its control unwires `MF.knockRock` and re-runs: four assertions must fire. They do.
- **Distinguish the answer from the act.** The knock is 300ms and local; the break is 720ms, nine shards and a shudder through the whole face. If acknowledging a click looked like acting on it, the student would learn nothing from either.

## 43. A covered control is invisible to every instrument that asks whether it works

§42 fixed three clicks that produced no reaction. It was the wrong diagnosis for two of them. **The reaction was wired correctly and could not fire, because the click never arrived.**

> **The pick was eating the seam.** It follows the cursor at `(ux-46, uy-62)`, which puts the pointer at local `(46,62)` — *inside* the handle rect `x:40 y:10 w:9 h:92` — and it is appended after the rocks, so it paints on top of them. `document.elementsFromPoint` at the centre of a lump returned `rect` (handle), `polygon` (head), `rect` (collar). No rock, at any point on the face, ever.
>
> **The same fault held the front door of the mine shut.** Three things go on after the hotspots in `surfaceScene`: Mr Factor, the portal's dark mouth, and the cart rolling out of it. All three were live to the mouse. The black arch — *the most mine-looking part of the whole scene* — was its deadest pixel, and Mr Factor stood on the bottom-right corner of the smelting house.

**Why every instrument said it was fine.** `MF.validate` mounted the mine and dispatched clicks — *on the element*. `el.dispatchEvent(new MouseEvent('click'))` skips hit-testing entirely: it delivers to the node you name, which is precisely the node a real mouse could not reach. The handler ran, the state changed, the reaction appeared, the check went green. **A DOM read of a click handler cannot see an occluder. Only a hit test can.**

**The rules.**

- **To test a click, test the pixel, not the node.** `document.elementsFromPoint(x, y)` and assert the top element is inside the control. Dispatching on the element proves the handler, never the reach.
- **State it as a class, not per element.** `.scene svg *{pointer-events:none}` with `.scene .hot, .scene .hot *{pointer-events:auto}` — and the same shape for `.face svg` and `.rock`. Patching the pick would have left Mr Factor and the portal, and the next decoration would have re-added it.
- **Sweep what is painted after a control, and only that.** Anything painted behind cannot intercept, so checking it is denominator padding. The `overlay` group sweeps 56.
- **A hotspot should be the graphic.** The mine's was a `152×100` box starting 54 units below the top of the bluff — the arch, the timber head and the nameplate were all outside it, and a good half of what it did cover was sky and ground. **Do not size a target to the room you have; size it to the thing the student is aiming at.**

## 44. Rename the assertion with the thing, or delete it and know that you did

The mine stopped smelting (`MINE-SPEC.md` §11) and the Smelting House became the Stamp Mill. One check had the old name compiled into it:

> ```js
> if(!/Smelt/i.test(doors['workshop-ore'])) errs.push('… does not read as smelting');
> ```
>
> It existed because the two workshops had once been **wired to each other's screens**, and it was the only thing standing between that fault and shipping again.

A rename gives you three options and only one of them is honest. **Delete the check** and the fault it caught can come back silently. **Loosen it to nothing** — `/./` — and it passes forever while measuring nothing, which is §41's whole subject. **Move it with the name**: `/Stamp|Mill|Crush|Break/i`, and then *prove the moved one still bites* by renaming the door to something absurd and watching it fire.

**The rules.**

- **A check that hardcodes a name is coupled to that name.** When you rename, grep for the string in the instruments before you grep for it in the copy — the copy is visible and the assertion is not.
- **After moving an assertion, reintroduce the fault it was written for.** "It still passes" is not evidence; it is the same evidence a deleted check gives you. The Tea Room test took ten seconds.
- **The same applies to a class registry.** `MF.ANIM_TRANSFORM_CLASSES` lost `rm-scale` and gained `rm-stamp` in the same edit that replaced the balance with a stamp battery. A new animated part that is not in that list is not checked, and nothing anywhere says so — so the registry is updated in the same commit as the part, and the new entry is proved by planting a transform on it.

## 45. A green sweep of a screen in its resting state has not swept the screen

The `contrast` group mounts every screen and measures every run of text on it. It reported 0 errors on the forge for as long as the forge has existed. It had never measured the mold.

> Mounted cold, `MF.SCREENS.forge` draws an order board and a plate reading *the mold is cold*. **The crucible, the filled slots, the empty slots and the "not on the rack yet" warning only exist once an order is picked** — and nothing picked one, so none of them was ever in the denominator.

The same shape had already been fixed once on the mine, where the probe deliberately digs a lump, sets it on the anvil and advances it past the assay so the working surfaces are on screen when the sweep runs. The forge was left in its resting state and nobody noticed, because a screen with nothing wrong on it and a screen with nothing measured on it both report zero.

**And the fix produced a smaller number.** Contrast went from 240 checks to 236 — because the cold plate and Mr Factor's paragraph left the sweep as the crucible and slots entered it. **A total that moves in the wrong direction is not evidence either way**; the only thing that settled it was counting what the probe actually contained: `crucible 0 → 1`, `slots 0 → 2`, `filled ingots 0 → 1`.

**The rules.**

- **Mount every screen in its WORKING state, not its resting one.** A probe that does not push the screen into the state a student spends their time in is measuring the waiting room.
- **When you widen a sweep, assert what it now contains** — do not read the total. Totals move for two reasons and they look identical.
- **Ask it of every screen you add a mode to.** A panel that only appears after a click is invisible to any check that never clicks.

> **And a hazard in the instrument itself.** Probing this build from the browser console with `var S = document.getElementById('screen')` **overwrites the page's own `S()` SVG helper**, and every scene builder then throws `S is not a function`. The build's graceful failure text — *"This screen did not build. That is a fault in the mine, not in you."* — is what appeared, and it reads exactly like a real defect. This is §35 again, from a new direction: **the probe damaged the subject.** Scope everything in an IIFE, and never take a bare global name in a page whose helpers are `S`, `E`, `H`, `q` and `on`.

## 46. Re-entering a screen to update it throws the page back to the top

Every control in the forge called `MF.go('forge')` to refresh itself. `MF.go` is the *navigation* function: it clears `#screen`, rebuilds it, moves focus, **restarts the arrival wipe and scrolls to the top**. So dropping one metal in a slot threw the page back to the masthead and replayed the arrival animation. Choosing two metals and pouring meant four jumps. The user's word for it was "very very jerky".

The mine had never had this, because the mine repaints its three columns in place (`MF.paintMine`). The forge was written later and reached for the nearest thing that worked.

**The rules.**

- **Navigation and repaint are different verbs.** If a control changes what is on the screen you are already on, repaint the region — never re-enter the screen. A repaint that scrolls, refocuses or replays an entrance animation is a navigation wearing a repaint's name.
- **Scroll only when the answer would otherwise be unseen**, and then `block:'nearest'`. The pour still nudges the casting into view if it lands below the fold; that is one deliberate movement, not a jump on every click.
- **Guard the repaint on `isConnected`.** `MF._forge` outlives a navigation away from the forge, and painting into a detached column is §35's silent failure.

> **The check for this was written wrong first, and only reintroducing the fault found it.** The first version compared the grid node before and after a click — but `MF.go` rebuilds `#screen`, and the probe mounts somewhere else entirely, so a re-entry left the probe's grid untouched and the check passed. It **watches `MF.go` itself** now: neuter it for the duration of a click and record anything that reaches for it. Proved by wiring the forge's metal buttons back the old way — *"dropping a metal called MF.go(\"forge\")"*.
>
> Two of the reintroductions in between were also wrong and worth naming, because both looked like the check failing: one guarded on `MF.state.screen === 'forge'`, which is never true inside `validate()`; the other stubbed `MF.paintForge` to call `MF.go`, which **recursed infinitely** — `go` → `SCREENS.forge` → `paintForge` → `go` — and hung the renderer. **Reintroduce a fault at the layer that had it.** This one lived in the handlers, not the painter.

## 47. It was reported as a maths error. The maths was right and the input lied.

> *"On Layer 5 of the mine asked to factor 3x² + 22x + 24 and x + 6 was marked as not a factor."*

(x + 6) **is** a factor: 3x² + 22x + 24 = (3x + 4)(x + 6). The engine had it right the whole time — `MF.breakOff` accepted it on the first try when tested directly, and a sweep of **36,000 divisor tests against a brute-force cross-check found zero false rejections** across generated ore at every layer.

The fault was one line away from the engine:

> The x-part box and the constant box shared a reader, `MF.readInt`, and it returns **0** for an empty string. That is correct for the constant box — no constant is nought. It is **wrong** for the x-part box, where an empty box means no coefficient written in front of the x, which is **one**, exactly as `x` means `1x` in every notation there is. The box was pre-filled with `1`; the student cleared it to type what they meant; the hammer was cut to **6**; and the refusal read *"6 does not run through every term"* — naming a shape they had never typed, about a factor that was genuinely theirs.

**The rules.**

- **A report of a wrong answer is a report about the whole path, not the arithmetic.** Test the engine first because it is cheap, but a green engine narrows the search — it does not end it. The bug was between the keyboard and the call.
- **Two boxes that mean different things need two readers.** One reader with one empty-string convention is a bug waiting for whichever box the convention is wrong for.
- **Echo the input back before it is committed.** The hammer now says *"cut to (x + 6)"* as you type, and every refusal names the shape that actually landed. Either of those alone would have turned this from a maths error into an obvious typo.
- **Nine readings of the x-part box are asserted** — empty, `1`, `x`, `-x`, `-`, `0`, `3`, `2x`, `−4` — plus the constant box still reading empty as nought, plus the reported case end to end. Control: point the x-part box back at `readInt` and six of them fail.

> **And the interface was the real defect.** Two text boxes under a line of prose could not show what they were about to do. The lump is drawn on an anvil now, the factor is typed into the hammer head, and the hammer comes down on it — so what you cut it to and what you hit it with are the same object on screen.

## 48. An arc needs its pivot in the right place, and zero degrees is the bottom

The hammer was asked to swing in an arc. Two attempts got it wrong in ways worth keeping.

> **First: translation is not rotation.** The head moved with `translateY` and a few degrees of tilt. That is a lift shaft with a wobble. An arc comes from rotating about the **hand**, not the head — `transform-origin` 132px above the head, where a fist would be on the end of the shaft.
>
> **Second, and less obvious: with the pivot directly above, 0° is the LOWEST point of the arc.** Swinging "to +15° for the impact" therefore *lifted the head away from the anvil*. Every angle either side of zero is higher than zero. The head rests level at 0° — readable, typeable, sitting over the rock — winds up anti-clockwise along the arc, sweeps back down through the bottom, and the last of the travel is a short drive straight into the face.

Measured on the settled animation by pausing it and stepping `currentTime`: **131px of horizontal travel and 166px of vertical**, and the head's bottom passes the rock's top at the impact frame. A vertical drop would have shown zero in the first number.

**Two things the arc then broke, both found by hit-testing rather than by looking:**

- **`overflow:hidden` guillotined the wind-up.** The head sweeps ~80px across and ~34px up at −41°, which is off the stage — and it is worst on a narrow column, where the swing is most worth seeing.
- **The head did not fit its column.** Two sign toggles, two number boxes, an x, two remove buttons and four brackets came to more than the middle column is wide, and with visible overflow the whole plate hung off the **left edge to x = −20**, where the x-socket's sign toggle could not be clicked at all. It wraps now. `elementsFromPoint` returned an empty stack — the giveaway that a control is not merely covered but off-screen.

**The rule.** *An animation that moves a control changes where that control is.* Re-run the reach tests after any motion work, at more than one width, and treat an empty hit stack as "off-screen", not "nothing on top".

## 49. Two readers, one flag, and the first one wins

`B.anim` is set by `MF.swing` and read during the repaint to start the swing. It ended up with **two** readers in one function: the floorbox, drawn partway down `paintBreak`, and the anvil stage, built further down. The floorbox read it *and cleared it*. The anvil stage then read `null`.

> Everything about the animation was correct. The keyframes were right, the timing was right, the arc was right. **Nothing reached the hammer.** What a student saw was a flash, and then a THUD in the box *above* the hammer — the burst firing from the one reader that still had the flag, and the blow never happening at all.

It survived a commit because every test I had asked whether the *state* was right — floor, pieces, burst word, `data-anim` on the floorbox — and all of that was right.

**The rules.**

- **A one-shot flag has exactly one consumer.** Read it once, at the top of the function that owns the repaint, into a local; clear it there; pass the local to everything that needs it. Two `if(B.flag)` sites in one function is the bug, not the symptom.
- **Put the effect where the cause is.** The burst was in the floorbox because the hammer bar disappears on the finishing blow — a real problem solved in the wrong place. It belongs at the anvil; the finishing blow now draws the anvil once more, with the piece that was struck on it, so the last swing lands where every other swing landed.
- **Assert the animation is RUNNING, on a live node.** `getAnimations()` returns nothing on a detached element, so a check built on a probe would have passed for exactly the wrong reason. The `swing` group mounts the mine, swings three ways — a swing with work left, the finishing blow, a glance — and asserts the hammer carries a running animation and the burst is inside the anvil stage. Control: re-consume the flag before the stage reads it, and all three fire.

## 50. A control that reintroduces half a bug proves half a check

The windmill's bottom windows ended exactly on the line where the door's arch begins, **and** sat over the doorway's own width. The fix moved them both up and outwards. The control I wrote to prove the new check restored only the `y`:

> ```js
> sWins[2].setAttribute('y','160');          /* the old height */
> if(!sHits(sWins[2])) errs.push('CONTROL: …');
> ```
>
> It fired — correctly. A window at `x=30` is left of a door at `x=44..64` however far down you drag it, so restoring the height alone recreated *nothing*. The control was right and my reintroduction was wrong, and for a moment the two are indistinguishable.

Restoring **both** coordinates — `x=44, y=160`, exactly what shipped — reproduces the fault and the check catches it twice, once per window.

**The rules.**

- **Reintroduce the whole fault, not the part you happened to change last.** A fix that moves two things needs a control that moves both back. Otherwise you have proved the check against a state that never existed.
- **A control that fires is not automatically a working check.** Read what it says. This one said the sweep could not see a window on the door — which was true of the window it was handed.
- **Mount live when the property is a live one.** The day cycle cannot be checked on a detached scene: `getAnimations()` returns nothing and `getBBox()` returns zeroes there, and both would have passed. The `surface` group appends a real scene to the document, stops the clock at noon and midnight, and looks.
- **One clock for one phenomenon.** Parts of a day on different durations drift apart, and by the third turn the sun sets in a blue sky. Every part of it is asserted to run for the same 240,000ms — proved by putting one sky on a 90s clock, which fires twice: the duration, and then the dusk sky not being the one showing at dusk.

## 51. Two animations cannot share one property, and the loser says nothing

The day cycle was supposed to brighten every lamp on the site after dark. It did — except on the lamps.

> `.sc-lamp{animation:lampflicker 3.2s}` was already on the lantern halo, the lantern flame, the smelting-house glow, the casting-shed window and the forge mouth. The new `.sc-lit{animation:lampsup 240s}` went on the same elements. **Both animate `opacity`. Equal specificity, and `.sc-lamp` is declared later, so it wins the whole shorthand and `lampsup` never runs at all.** Five of the nine lamps — every one a student would point at and call a lamp — ignored the clock entirely, and nothing anywhere reported it.
>
> The fix is not to fight over the property. The level goes on a **wrapper**; the flicker stays on the shape; the two opacities **multiply**, which is what "flickering, and brighter after dark" actually means.

**The rules.**

- **Before adding an animation, grep for what already animates that property on that element.** A CSS conflict has no console error, no visual glitch on the winner, and no trace at all on the loser.
- **Composition, not competition.** Nest the two effects when both are wanted. Opacity multiplies down the tree for free.
- **Assert the conflict is absent as a class**, not the instance: `.sc-lamp.sc-lit, .sc-lamp.sc-glow` must match nothing. Proved by re-merging the classes onto one element — 9 lights caught.

> **And the level check had the same shape of bug inside it.** It stopped the sky's animations, sampled the lamps at "noon" and "midnight", and reported `0.72 -> 0.72` — because **the lamps were never added to the set it paused**, so they carried on in real time and both samples read the same moment. It blamed the lights for a fault in the instrument. **A check that stops a clock must stop every hand on it.**

## 52. A rebuilt screen is a new screen, and its animations start at zero

`MF.go` clears `#screen` and builds the whole thing again on every arrival. That is what makes navigation cheap and it is why the mine repaints in place (§46) — but it also means **every CSS animation on that screen restarts from zero**. The four-minute day therefore began again at dawn every time a student came back to the surface: mine, forge, surface, and the sun was on the eastern hills whatever the session clock said.

> **The day belongs to the session, not to the scene.** One start time is taken when the file loads, and every part of the sky is given a **negative `animation-delay`** equal to how far through the cycle we are, which drops it into a turn already running. No timer, nothing to keep in step, and it is right even for a scene that is built and never mounted.

**The rules.**

- **Anything continuous across navigation cannot live in a rebuilt subtree's animation start.** Ask of any long-running animation: *what happens when this screen is torn down and remade?*
- **Negative `animation-delay` is the whole mechanism.** It needs no clock of its own and cannot drift, because the browser is doing the timing either way.
- **Assert the property, not the plumbing:** two scenes built two minutes apart must open two minutes apart. Controls: return `0` from the sync (caught), and — the more interesting one — sync every scene to a *fixed* dawn, which is plumbing that runs and still restarts the day. Both fire.

> **And it broke the instrument that measures the day.** With a delay in play, an animation's progress is `(currentTime − delay) / duration`, so the `surface` group's "stop the clock at noon" set the phase wrong by exactly the page's own offset. Worse, `ms + delay` is **negative** whenever the page is further into its day than the sample point — and a negative `currentTime` sits in the *delay phase*, where `fill:none` means **no keyframe applies at all**. The dawn sky read as its base `0` and the check reported that dawn was not showing at dawn. The fix is to add the delay back and wrap into `[0, duration)`, which is sound because these loop forever: phase *p* and *p + duration* are the same picture.

## 53. Two fill-mode keywords throw away the whole animation

The metal did not flow into the mold. Everything else did — the crucible tipped, the stream fell, the numbers resolved — and the one thing the pour is *about* simply never happened.

> ```css
> animation: mdflow 1500ms cubic-bezier(.42,0,.72,1) .35s backwards forwards;
> ```
>
> `animation-fill-mode` takes **one** of `none | forwards | backwards | both`. Two keywords is a parse error, and a browser discards the **entire shorthand** — not the bad component, the whole declaration. No console warning, no partial effect, nothing in the computed style to look at unless you go asking.

It was caught by `getAnimations().length > 0` on the element, which returned `0` while the CSS sat there looking perfectly reasonable.

**The rules.**

- **`both`, not `backwards forwards`.** If you want a value held before *and* after, it has one name.
- **Assert that an animation is RUNNING, not that the rule exists.** Reading the stylesheet, or the class, or the `data-` attribute would all have passed. `getAnimations()` is the only thing that knows.
- **A silent CSS parse failure looks exactly like a missing feature.** When an effect is simply absent with no error anywhere, suspect the declaration before the logic.

## 54. A pictograph is a picture, and `color` does not draw it

The contrast sweep failed the build over the mold's cavity — a tool icon, deliberately knocked to black — at **1.08:1**.

> A colour emoji **carries its own colour table**. The `color` property the sweep measures does not touch one pixel of it. The reading was real arithmetic about nothing you can see, on a shape whose whole job is to be a black hole in sand.

`MF._measureContrast` skips an element only when it has **no word character at all** *and* is pictographic. A label with an icon in it is still measured, which is the case that matters: `🔧 invisible with an icon` is caught, a bare `🔧` is not.

**The rules.**

- **Widening an exclusion is weakening a check, so prove the check still bites.** The control here is not "does the emoji stop failing" — it is `.castfor .cfeq{color:#FDF8F0}`, real unreadable text on the same screen, which still fires at 1.02:1.
- **Draw the line at "has any word character", not at "starts with an emoji".** The narrow rule keeps every mixed label in the sweep; the broad one would have quietly dropped every button with an icon on it.
- **And prefer removing the second source of truth to measuring it.** The cavity used to be seven hand-drawn silhouettes — a second description of what each tool looks like, free to drift from the icon. It is the icon now, and the `mold` group asserts they are the same character.

## 55. Amending a check has two failure directions, and the old control only covered one

The `sheet` group asserted that the Lantern's reading **never** contains a factor of
the lump, with a control that printed the full factorisation and had to be caught.
A user decision (`MINE-SPEC` §13) made that assertion false by design: the Lantern
now lights one side and leaves the other as a `?`.

The tempting move is to delete the check. The correct move is to make it assert the
rule that actually binds — *part, never all* — and the trap is that an amended check
has **two** ways to be wrong where the original had one.

> Loosened to "must not name more than one side", the check passes on a Lantern that
> names **none** — one that has quietly stopped working. A green group over a dead
> instrument is worse than the leak it replaced, because nothing on screen says so.

So there are two controls, and both must fire: a Lantern that prints
`MF.smeltString` in full, and a Lantern that prints only prose.

**And the second control could not be written the same way as the first.** Counting
factor names in text deliberately ignores single-character ones — a bare `2` also
occurs inside `x − 2`, so matching it would fire on readings that leaked nothing.
That blind spot is harmless when you are asking *did it say too much* and fatal when
you are asking *did it say anything*: the Lantern lighting the `2` of `2x² + 10x + 12`
would have counted as naming nothing at all. The lit side and the dark `?` are
elements, so the second control looks for **elements** — `.onesided` and `.qm` — not
for text.

**The rules.**

- **When a rule changes, move the check with it and keep the old control.** The
  original control still has to fire; it is the half of the rule that did not change.
- **Ask what the loosened check now passes on.** Every relaxation opens a direction,
  and that direction needs its own control before the group goes green.
- **Match the instrument to the question.** "Did it say too much" is a text question.
  "Did it say anything" is a structural one. Using the text counter for both is how a
  known blind spot gets promoted into a false pass.

## 56. A paused arrival wipe is not a clipped page

A screenshot of the new Casting Shed showed the translation table cut off at
285×318px in the corner of a 760px viewport — a clipped container, an obvious
layout bug, and worth reporting.

It was neither. The settle step pauses every animation, and it had been run
immediately after `MF.go`, which **freezes `main.arriving` mid-wipe**. The DOM said
the table was 684×1359 and nothing overflowed anything.

> The picture was of a page caught halfway through arriving. The defect was in the
> instrument, and it was indistinguishable from a real one.

**The rules.**

- **Pause the ambient animations, finish the transitional ones.** They are not the
  same kind of thing: one is life, the other is a page still becoming itself.
- **Measure geometry from the DOM before believing a screenshot of it.** This is the
  second time on this project that the pixels have been the less reliable instrument
  (`SITE-STATE`, 2026-08-24), and both times the DOM settled it in one read.

## 57. A flex container turns every inline tag into an item that will not wrap

Three new workshop pages shipped with the page scrolling **155px sideways at 380px**,
and every one of thirty check groups was green over them.

Two faults, and neither looks like a layout hazard in the source:

> `.qn` is `display:flex` so a numbered badge can sit beside the question. A flex
> container makes each child a **flex item** — and `<b>one</b>` inside the question
> text is a child. Flex items do not wrap the way words do, so the question walked off
> the right edge instead of breaking onto a second line. Nothing about `<b>one</b>`
> reads as dangerous.

> A `<table>` given `display:block` so that `overflow-x:auto` would scroll it **still
> leaks its min-content width to the page** — 450px of row inside a 344px column. The
> scroll container has to be a wrapper *around* the table, not the table itself.

Both were invisible to every existing group, because contrast measures colour, `quiz`
measures behaviour, and nothing measured **width**. `SITE-STATE` had asserted "no
horizontal page scroll, verified down to 279px" since the seam shipped — a claim made
by hand, once, on the screens that existed that day, and unrunnable ever since.

The new **`layout`** group mounts every screen in the registry at a real 320px and
asserts nothing crosses the right edge. It skips anything inside a scroll container,
because a scroll container is *allowed* to hold something wider than itself — that is
what it is for. Control: nowrap text far wider than the stage.

**The rules.**

- **A hand-made claim about geometry decays the moment a screen is added.** If a
  document asserts it, a group should measure it, or the sentence is a fossil.
- **Watch what `display:flex` does to the markup you pass through `innerHTML`.** Give
  the text one wrapper of its own; then there are two items and the wrapping happens
  where it belongs.
- **Make the wrapper scroll, not the table.** `display:block` on a table changes what
  it is without moving where its width comes from.
- **A false green is the expensive kind.** Thirty groups and 9,500 checks said nothing
  while the page scrolled sideways; the fix was one more group, not more checks in the
  ones that already existed.

## 58. Reach is a budget, and a multiply blend takes the lamps down with the hillside

Two findings, one session, and both were invisible to every group that existed.

### The craft floor was 1399px from the target to the pour

The new `reach` group measures the span from the first control of a work cluster to
its last and fails if it will not fit one 800px screen. It fired on its first run:

> The mold is a 400×300 drawing at `width:100%`, so on a wide screen it grew to fill
> the column. Nothing was wrong with the markup, nothing overflowed anything, and no
> other check has an opinion about how tall a picture is allowed to be.

`.moldwrap` is capped at 430px now. **The number came from the check, not from a
person squinting at a screenshot** — which is the whole point of §57's lesson applied
one step further: a geometric requirement gets a group.

### focus() on an unmounted node does nothing and says nothing

The pour button is supposed to take focus on the drop that fills the mold. It was
called before `host.appendChild(box)`, so the button was not in the document yet.

> A control that looks wired and silently is not — the same class as painting into a
> detached column (§35), and it survived a by-hand check because "the button is bright
> and one click away" was true and the focus part simply never happened.

It is asserted now: the `reach` group clicks metals until the mold is full and requires
`document.activeElement` to be the pour button.

### The night was cancelling the lights

`.sc-night` is a `mix-blend-mode:multiply` rect over the whole site. Multiply darkens
everything beneath it, so raising the lamp keyframes from `.55 → 1` to `.34 → 1` made
the sources brighter *and the scene no more legible*, because the same rect immediately
took them back down.

> **You cannot win a multiply by turning the input up.** The halos are painted after
> the night rect in a `screen`-blended layer, which can only add. Noon 0.03 →
> midnight 0.92, over a night that still falls on the whole operation.

**The rules.**

- **A requirement about reaching the work is measurable, so measure it.** "Fewer
  hurdles" reads as taste and behaves as geometry.
- **Check the blend before you tune the value.** If a later layer composites over a
  thing, changing that thing's opacity is arguing with the wrong operator.
- **`focus()` is silent on a detached node.** So is a lot else; mount first, then wire.
- **A picture is not the work.** The mold, the anvil and the room banners are all
  `width:100%` drawings, and every one of them is a candidate for pushing the controls
  off the screen the moment the column gets wide.

## 59. Four of the seven tool icons are not colour emoji, and the pour was black on black

The pour was supposed to reveal the tool in its own colours as the metal crossed it.
The user reported that nothing changed colour at all, and they were exactly right.

`.mdcut` is the glyph blacked out with `brightness(0)`. `.mdlive` was **the same
glyph again, unfiltered**, on the assumption that a tool icon is a colour emoji.

> Drawn to a canvas with `fillStyle = '#000'`, a colour emoji ignores the fill and
> keeps its own palette; a monochrome glyph obeys it. Four of the seven obeyed:
> **⛏ 🕯 ⇆ ⚙ all measured mean chroma 0.0.** The reveal was painting black over
> black. The three that *are* colour emoji measured pale grey-lilac — barely a
> change either.

So the colour could not come from the glyph. The glyph is an **alpha mask** now and
the metal is painted through it: the silhouette is still the tool's own shape, and
what fills it is a molten gradient that owes the font nothing. Three layers through
that one mask — molten, then red fading in, then steel — so the casting goes hot,
red, and cold while the maths is still being read over it.

**And the check that passed it was asking the wrong question.** It asserted the
reveal contained *nothing but a `<text>`*, which was true and was the defect. It now
requires every child of the reveal to be **masked**, which catches both faults at
once: a masked child cannot paint outside the silhouette (the old translucent sheet)
and a mask means the colour comes from a fill rather than from the font. Controls:
the bare glyph put back, an unmasked panel, a mask cut to the wrong tool, and a flat
fill instead of a gradient — all four caught.

### The instrument was wrong twice before it was right

Verifying this needed pixels, and the Browser pane was not compositing frames, so
screenshots were unavailable. Rasterising the SVG through a `data:` URL worked — but:

> **A serialised SVG carries no stylesheet.** Every frame sampled identically because
> `.mdrevrect`'s geometry, `.mdred`'s opacity and `.mdcut`'s filter all live in the
> page's CSS and none of it survives `XMLSerializer`. The reading was "nothing ever
> changes", which is precisely the bug being investigated — a false confirmation.

The fix is to walk the live tree and the clone in parallel and bake `getComputedStyle`
onto the clone before serialising. Then the frames differ: cut `r−b 34` → molten `74`
→ red `66` → steel `31`.

**The rules.**

- **Never assume a glyph carries colour.** `brightness(0)` will blacken anything; only
  a colour font has anything to reveal. One `canvas` read settles it per glyph.
- **A check that describes the implementation instead of the property passes the bug.**
  "Contains only a `<text>`" was a description of the code. "Every child is masked" is
  the property that makes the picture true.
- **When you rasterise for measurement, bake the computed styles first** — or you are
  measuring an unstyled document and calling it the page.
