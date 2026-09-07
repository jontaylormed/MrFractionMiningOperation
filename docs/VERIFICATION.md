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

## 60. Nothing measured whether a panel was a picture, so it stopped being one

The instruments were made into named methods, and every group agreed they were
correct. `schema` proved no method printed more than one factor. `sheet` proved the
Lantern lit exactly one side. `quiz`, `rosetta`, `contrast`, `layout` all passed.

And the panels were unreadable. A method name, a paragraph of reasoning, and the
method narrated as a numbered list of sentences — the user's report was *"mostly text
with no diagrams and not enough number information"*, which they could see in one
glance and which **nothing in the build could see at all**.

> Every group measured whether a reading was **true**. Not one measured whether it
> was a **picture**. That is the signature of a property nobody asserted: the checks
> are green, the user is right, and the two facts do not touch.

The `visual` group asserts three things per reading, on a lump that factors: it
**draws** (an `<svg>`), it **leaves a hole** (a `.qm`), and it is **not mostly prose**
(a character budget on text outside the diagrams). Writing it immediately found four
faults in the work that had just been done to fix the complaint — two tools drawing
nothing, one leaving no `?`, and three over the prose budget.

**And one of its controls proved nothing.** The gate control set `B.step = 'assay'`
and asserted the hammer had gone. It had not: the gate was never the `step` field, it
was a conditional wrapped around `paintBreak`, and once that conditional was removed
the field was inert. The control passed while testing nothing.

> A control has to reintroduce **the mechanism**, not the symptom's name. "Set the
> field the old code read" is not the same as "put back the branch that did the
> gating", and only one of them fails when the check is broken.

**The rules.**

- **Ask what property the user can see that no group can.** "Correct" and "usable"
  are different assertions and green on one says nothing about the other.
- **A check written against markup fails the build when the markup gets better.**
  `sheet` looked for `.onesided`; the lit side became a diagram and the check fired
  on an improvement. It asks for `svg` + `.qm` now — the property, not the class.
- **When a node outlives the call that built it, do not cache it on state.** Pairing
  the two work boxes cached the wrapper on `B`, and `B` survives the repaint: the
  next paint built the hammer bar into last paint's detached node. Use the local.
- **Moving a region breaks every probe that knew where it was.** The bench moved to
  the work band and `swing` reported "the hammer bar drew no boxes to type in" —
  true of the node it was looking at, false of the page.

## 61. A check that sets the stage width but not the window measures a page nobody has

`MF.validate()` was run, reported **0 errors**, and the build was committed. The same
build, on the same machine, reported **4 errors** an hour later. Nothing had changed
but the size of the browser window.

`layout` mounted every screen in a 320px-wide `div`. `reach` mounted the bench and the
craft floor in a stage it set to 1280px and then 380px.

> **`@media` keys off the viewport, not off the box you put the content in.** So the
> 320px stage was rendering the *three-column desktop mine* squeezed into 320px, and
> reporting the third column as 150px of overflow. That layout exists on no screen at
> any size: at a real 320px viewport the media query stacks the columns and nothing
> overflows at all.

Both groups were measuring a hybrid — the stage's width with the window's media
queries — and the result moved with whatever the tester happened to have open. At a
279px pane: green. At 1280px: four failures. **The green one was the reading I
trusted, and it was worth nothing.**

Both now take their width from `document.documentElement.clientWidth`, so the stage
and the media queries agree, and both report the width they swept. `reach` also
stopped comparing against a hardcoded 800px "screen" — a guess about somebody else's
monitor — and compares against `window.innerHeight`, the screen actually in front of
the person running it.

**Once it was honest it immediately found a real one**: the forge's craft floor ran
805px from the target to the pour button, against a 700px laptop. The mold picture was
324px of that. At 310px wide it is 232 tall, and the cluster fits.

**The rules.**

- **A check with a hidden dependency on the environment is worse than no check**, because
  it produces a green you will act on. Ask of any measurement: *what else has to be
  true for this number to mean what I think it means?*
- **You cannot simulate a viewport with a `div`.** Anything media-query-sensitive is
  measured at the real viewport or not measured.
- **Budgets should come from the machine, not from a memory of one.** "One 800px
  screen" was never anybody's screen.
- **Re-run the instrument in the state you will ship from.** The failing reading and
  the passing reading were the same code minutes apart.

## 62. A sweep that chooses its own subjects at random has a denominator it never states

The `contrast` group mounts every screen and measures every run of text on it. It had
been green for weeks. Two controls on the mine's bench were below the threshold the
whole time:

| | | |
|---|---|---|
| `.mpbtn` "Stamp Mill →" | cream `#FFF7EA` on `--ore` | **3.55:1**, needs 4.5 |
| `.mpt` its line underneath | `--ink-soft` on the bench's timber | **3.85:1**, needs 4.5 |

Neither had ever been measured, because **the Stamp Mill signpost only exists when the
lump on the bench is a plain number**, and the sweep's mine pass dug its lump with a
seeded RNG and worked with whatever came up. What came up was a polynomial, every run.

The group was not wrong about anything it looked at. It simply never looked, and
nothing in its output said so — a count of 883 checks reads like coverage.

The second colour is the same failure the `.assayhint` comment three lines above it
already records in writing: *"`--ink-soft` on the bench's tan reads 3.85:1 and the
sweep failed the build over it."* The lesson was written down, and then a new label on
the same surface reintroduced it, because writing a rule down does not enforce it.

The mine is mounted twice now — `mine` and `mine-number` — and the second exists only
to put a number on the bench. It caught both faults by name the moment it ran.

**The rules.**

- **A pass that samples is a pass that can miss, and it will not tell you.** If a
  surface only exists in one state, that state has to be mounted deliberately.
- **A check count is not a coverage number.** 883 checks over the screens that
  happened to render is not 883 checks over the screens that exist.
- **A rule in a comment is not a check.** The exact contrast failure documented in the
  stylesheet was re-committed six inches below the sentence describing it.

## 63. A flex-basis is a height once the axis turns, and nothing measured empty space

`.benchore` carries `flex:1 1 240px` so the ore keeps a minimum **width** beside the
corner column. Under 560px `.benchhead` becomes `flex-direction:column` — and
flex-basis measures the **main** axis, whichever one that is. So on every phone the ore
label was a **240px-tall box holding a single 48px line**, and 192px of empty timber
sat between the number and the breaking floor.

Three groups were watching that screen and none could see it:

- `layout` measures the **right edge**, and says so in its own denominator note. A
  hollow box crosses no edge.
- `reach` measures the **distance between two controls**. This was inside one box.
- `contrast` measures **text**. The empty part has none.

The property nobody owned is *is this box mostly nothing?* — which is the axis this
project has spent four sessions buying back at the user's explicit request.

`hollow` measures it directly: the label's box against the union of its own line
boxes, at the live viewport width. Its control puts the original declaration back.

**The rules.**

- **A shorthand written for one axis is a different declaration on the other.** Any
  `flex:` value on an element whose container direction changes at a breakpoint has
  two meanings, and only one of them was intended.
- **Wasted space is a defect with no symptom.** Nothing overflows, nothing overlaps,
  nothing is unreadable — so every instrument reports clean.
- **When you widen a value, re-measure at the narrow end.** The basis went 220 → 240
  for the wide layout and got 20px worse on the phone.

## 64. What is behind a run of text is not always its ancestor

The comic burst on a swing — **THUD!** on a hit, **CLANG!** on a glance — was cream
lettering with a dark outline, sitting on a star:

| | | |
|---|---|---|
| `THUD!` `#FFF3DE` | on the gold star `#FFD27A` / `#E8A33D` / `#C96A1F` | **1.30 / 1.30 / 3.44** |
| `CLANG!` `#DCE6EE` | on the silver star `#E6EEF4` / `#A9B8C4` / `#6E7E8C` | **1.08 / 1.61 / 3.30** |

The letterforms were doing nothing. The only thing carrying either word was its own
6px outline, which is a shape around a hole rather than a word.

**The sweep looked straight at it and reported 14.9:1.** `_backdrops` walked the
**parent chain** — and the star is not an ancestor of the word, it is an
absolutely-positioned **sibling** underneath it. So the walker climbed past the thing
actually behind the text and found the dark panel the pair of them were sitting in,
and cream on a dark panel is excellent.

> **A number that high is not a pass. It is the wrong question with a wrong answer in
> the safe direction.** Every reading this group produced for text over an art layer
> was worthless, and nothing in the output distinguished them from the real ones.

Two things were wrong and both had to be fixed:

- `_backdrops` now checks for a **painted, positioned sibling whose box contains the
  text's centre** before it walks the ancestor chain. Where one exists, that is what
  is behind the text.
- The burst is **mounted deliberately**, as `mine-blow`. It exists only in the three
  seconds after a swing, this sweep never swings, and `.thud` rests at `opacity:0` —
  so it was unreachable three separate ways. `art-director`'s instrument pauses
  animations before it measures, which means **a state that only exists mid-keyframe
  is invisible to every instrument this project owns unless something mounts it on
  purpose.**

The word is dark now and the halo is light — the fill and the stroke swapped roles.
Against the star's stops: **11.98 / 7.91 / 4.52** and **14.8 / 8.81 / 4.28**.

Restoring the two original colours fails the build in **four** places at once.

**The rules.**

- **Ask what is painted under the text, not what contains it.** Position, z-index and
  overlap decide that; the DOM tree only sometimes agrees.
- **A high contrast reading deserves the same suspicion as a low one.** 14.9:1 for
  cream text was the tell, and it read like a pass for weeks.
- **Anything that exists only during an animation has to be mounted by hand.** Three
  independent mechanisms — never swung, `opacity:0` at rest, animations paused before
  measurement — each on its own enough to hide it.

## 65. A flex item with no `flex-shrink:0` is a candidate for being squeezed

The cart panel is a flex column with a **430px cap** — the constraint that lets the
seam be shown taller without the middle column growing (§the cart gives up the height).
`.cartrail` is 6px of track under the wheels, and it is a flex item of that column.
It has no `flex-shrink:0`.

So it was squeezed. Measured across a cart emptying one lump at a time:

```
6 lumps  rail 2.02px       3 lumps  rail 3.52px
5 lumps  rail 2.44px       2 lumps  rail 4.69px
4 lumps  rail 2.82px       1 lump   rail 6.00px
```

**A bar at the bottom of the cart box that appeared and disappeared on every click** —
reported by the user, and by nothing else. It is decoration, so no instrument had a
reason to look at it: `layout` watches the right edge, `hollow` watches one label,
`contrast` watches text, `reach` watches the gap between two controls. A 4px strip of
scenery breathing in and out is beneath all of them.

The list is what gives up height in that column. **The cart drawn around it is scenery
and scenery does not breathe** — the wheels and the track are pinned `flex:0 0 auto`.

`cartdraw` mounts the mine at six cart sizes and compares the chrome against the
six-lump reading. Its control restores `flex:0 1 auto` on the rail and the same
six-way comparison names it four times.

**The rules.**

- **Every child of a constrained flex container is shrinkable until you say
  otherwise.** The default is `flex-shrink:1`, and a fixed `height` does not protect
  it. Anything decorative in such a container wants `flex:0 0 auto` explicitly.
- **A cap you add in one place changes every sibling in that box.** The 430px cap was
  added to make the seam taller; the defect it caused was four elements away and
  arrived weeks later.
- **Compare a thing against itself in another state.** The rail was never *wrong* at
  any single moment — 2px is a plausible rail. It was wrong across states, and only a
  check that renders more than one state can see that.

## 66. A component that paints its own background must paint its own ink

The note under the anvil at the end of a lump — *"Every piece is native metal… that
is the end of the lump, not a failure to get further into it"* — was **`#E4D5BB` on
`#F1F8F5`. 1.34:1.** The single most pastoral sentence on the site, invisible.

`.note` and its three variants each lay down a near-white card and **none of them set
a `color`**. On the light screens where notes were first written that was harmless,
because the inherited ink was already dark. Dropped inside the breaking floor's dark
panel, the note kept its white card and inherited the panel's cream text.

**Seventeen notes are built in this file** and any of them can land on a dark surface.
The fix belongs on `.note`, not on the call site that happened to be reported.

### And the state it lives in had never been rendered

`mine-done` — the bench once every piece on the floor is native — is a whole panel
the sweep had never reached: the last blow in the hammer box, the bare anvil, the
note. **Nothing in this build had ever broken a lump all the way down.** The moment
that pass existed it found a *second* failure nobody had reported: `.piece.native .pt`
— the words **"native metal"**, the thing the entire screen is driving at — at
**3.2:1** on the gold chip, because a piece only carries that label once it is native.

The pass breaks the lump **for real**, through `MF.swing`, rather than handing
`paintBreak` a hand-built floor of native pieces. A hand-built floor is a state the
app cannot reach, and a check against one proves nothing about the app.

**It also asserts that it got there.** If the loop fails to reach the end, the pass
reports *"mine-done never reached the end of a lump, so the finished bench was not
swept"* rather than sweeping nothing and reporting clean — which is precisely how the
two failures above survived. Proven by stubbing `MF.simplestFactor` to return null.

**The rules.**

- **Inheritance is not a decision.** A component that controls its own background has
  taken responsibility for the contrast on it, and must set both halves.
- **A fix goes where the class of defect lives.** One note was reported; four variants
  and seventeen call sites had the same hole.
- **Terminal states are states.** "After the work is finished" is as real a screen as
  "before it starts", and it is the one no automated pass wanders into by accident.
- **A pass that can mount nothing must say so.** Three sweeps in a row here have
  reported clean over surfaces they never built (§62, §64, and this one). The guard
  costs one line.

## 67. Sweeping the whole mine — what it found, and what it still cannot see

Asked to sweep the mine for low-contrast text, **580 renders** were measured: 145
distinct states at each of 380, 560, 994 and 1250px. Every layer idle and with a rock
under inspection; the cart empty and full; the yard in its four states; eight shapes
of ore on the bench (monic, loaded, shared metal, twin seam, linear, native,
composite number, prime); each with the assay offered, the choices open, a *wrong*
call clicked, and a settled call; **all seven instruments held to all eight**; a
glance; every intermediate floor while a lump is broken step by step; the finished
bench; and both burst words.

**One failure, and it was a repeat.** `.wall .hint` — *"Where you are along the seam"*
— at **3.82:1**, on **layer 1 only**.

`MF.LAYER_LOOK` tints the rock wall per layer, `#6E5A40` at the top of the shaft down
to `#2E2A28` at the bottom. Light ink on that wall has to clear **Gravel**, not the
layer the sweep happens to mount — and every mount in the build was at layer 4, a
dark one. So the wall's ink had four chances to pass and none to fail.

> **`.wall .depthline` was raised to `#F2E6D0` for exactly this failure, on exactly
> this wall, and the hint sitting beside it was left at the old value.** Fixing an
> instance twice is the signal that the class is the hazard. `mine-layer1` mounts the
> lightest tint — the worst case rather than an arbitrary extra, because the wall's
> ink is light.

### And two kinds of text the sweep structurally could not see

`_measureContrast` walks elements that contain a text node and reads `color`.

- **A placeholder is a pseudo-element** with no text node of its own. The hammer
  bar's ghost `1` and `0` — the copy that tells a student what an empty box *means*,
  the §47 line — had **no colour set in this file at all**. Chrome paints `#757575`
  (4.61:1); Firefox paints 54% alpha (~3.5:1). The one build, one file, zero
  dependencies, and whether that copy was legible depended on what the student
  opened it in. Pinned at 6.53:1 with `opacity:1`, because Firefox applies its own.
- **SVG `<text>` paints with `fill` and only inherits `color`** (§59). What is behind
  it is a `<polygon>`'s `fill`, not a CSS background, so *both* halves of the reading
  have to come from SVG attributes. The mine has one such label — the expression cut
  into the rock on the anvil — at 6.02:1.

Both are measured in `contrast` now, against their real backdrops. Controls: the
placeholder handed back to a translucent default (1.88:1) and the rock label dimmed
to `#7A6A55` (1.26:1). Both named, both by number.

**READ THE DENOMINATOR.** Even at 580 renders this measured **text against its
backdrop, at rest**. It did not look at `:hover` or `:focus` colours, at disabled
controls, at the forge or the workshops, at anything mid-transition other than the
two burst frames forced visible, or at whether text is legible for any reason other
than contrast ratio — size, weight, tracking, and whether the sentence is worth
reading are all human questions and none of them has been asked.

**The rules.**

- **When a fix is an instance and the neighbour fails the same way, you fixed the
  wrong thing.** Twice on one wall is the tell.
- **A value the file does not set is a value the browser sets.** "It passes" is not
  the same as "we chose it", and the two differ across browsers.
- **A sweep's blind spots are structural, not accidental.** Ask what *kind* of text
  the instrument cannot reach — pseudo-elements, another paint property, another
  state — rather than only where it has looked.

## 68. Sweeping the forge and the workshops — one defect, and one I invented

**584 renders**: 146 states at each of 380, 560, 994 and 1250px. The Casting Shed
intro and its three workshops and the Stamp Mill — fresh, every slider at both ends
and the middle, every number box at four values, **every quiz option clicked one at a
time**, every non-navigation button pressed, and typed answers submitted right, wrong
and empty. The forge — cold with an empty yard and a stocked one; each of seven molds
empty, part-filled, **armed**, **poured sound**, **poured scrap**, its tutorial's
practice answered right and wrong, every tutorial quiz option, and the tool already on
the belt. Plus the mine again, because a variable changed under its yard rack.

### The real one: `--ingot`, and a colour that passed or failed by font-weight

Metal bars read `#16202A` on the `#6E7B87` end of their gradient: **3.80:1**. They
**pass in the mine's yard**, where the label is bold and 19px, so the threshold drops
to 3 — and **fail in the forge's mold slots**, where it is not bold. One colour, two
verdicts, decided by a property nobody was tracking.

The dark end is now `#8A97A3` (5.52:1 either way), which is also more like polished
steel. And the state where those chips are on screen in numbers — **a mold with every
slot filled and nothing poured yet** — had never been mounted: the sweep's `forge`
pass fills *one* slot and `forge-poured` pours. `forge-armed` mounts it, for all seven
tools, and catches the old colour by name.

### The one I invented, which is the more useful half

I rasterised the poured mold, stripped its `<text>`, sampled the pixels under each
label at the moment it was actually visible, and reported the casting's maths at
**2.58–3.18:1** over the hot stretches. Then I "fixed" it by adding a halo.

**There was already a halo.** `.mdnum` carries `paint-order:stroke` with a 4px
`#FFE9A8` stroke, from the stylesheet. `#3A1B06` on that gold is **13.05:1**, at every
frame. My probe stripped the text — so it measured the fill against the *casting*,
which is not what the letterforms sit on. The defect was in the instrument.

Two things nearly shipped because of it:

- **An inert edit.** I set `stroke` and `stroke-width` as SVG presentation attributes.
  **CSS wins over presentation attributes**, so the computed stroke stayed the
  stylesheet's gold and my values did nothing. A change that renders identically to no
  change is worse than none: it reads like a decision.
- **A check that graded its own input.** The halo assertion read `getAttribute`
  — the attributes I had just written. It would pass forever and say nothing about
  what a student sees. It reads `getComputedStyle` now, and its five controls
  (no stroke, zero width, stroke the same colour as the fill, a hairline width, and
  `paint-order` putting the halo *over* the glyph) each fail with their own message.

**And my first four controls were worthless too** — they patched `MF.moldArt`, which
does not exist. All four "passed", which I briefly read as the checks being broken.
A control that does not introduce the fault is indistinguishable from a check that
cannot see it, and only one of those is a problem.

**The rules.**

- **Before believing an instrument that disagrees with the build, check the
  instrument.** Mine removed the very thing it was measuring.
- **A control must be seen to bite.** If a control passes, the first hypothesis is
  that it did nothing — verify the fault is actually present before concluding the
  check is blind.
- **Never assert against the value you just wrote.** Read what the browser computed.
- **CSS beats SVG presentation attributes.** An attribute set alongside a stylesheet
  rule is decoration.
- **Text that carries its own halo cannot be measured against its backdrop** — the
  halo is the backdrop. Assert the halo instead, and say that is what you did.

## 69. A tool that cost metal and did nothing, and a check that was a coin flip

Two user reports, one session: *"the deep Pick is not useful"* and *"there are no
factors of 3 for me to get the lantern"*. Both were true, and neither was visible to
any group.

### The Deep Pick was a relabelled button

`MF.breakRock` never read `hasTool('pick')`. The **entire** effect of owning the tool
was that the swing button said *"Swing the deep pick"* instead of *"Swing the pick"*.
It cost 12 metal, cut exactly one lump — the same as bare hands — and its own copy
said *"three lumps a swing when you are cutting rock out of the wall."*

**Nothing anywhere asserted that owning a tool does anything.** Every group checked
that a tool's *reading* was true, that its panel drew, that its method was named —
and a tool with no effect passes all of that, because its panel is fine. The property
nobody owned was *does the belt change the screen*.

`nogate` now renders the surface each tool acts on with the tool on the belt and
without it, and requires the two to differ. Its control makes `hasTool('pick')` blind
and the comparison fails by name.

> **The check was wrong first, and the way it was wrong is the lesson.** Each render
> stocked its own face, so the two readings described *different rocks* and differed
> for reasons that had nothing to do with the belt. The control passed — and I read
> that as the check being broken rather than the control being useless. The lump has
> to be the same object in both renders, so the belt is the only thing that moved.

### The metal economy locked students out, measurably

Tools are bought in metal, and the two you want first are priced in plain numbers:
the pick is `12 = 2·2·3`, the lantern `30 = 2·3·5`. Over 160 digs a layer:

| | 2s | 3s | 5s | could afford the lantern |
|---|---|---|---|---|
| 1 Gravel | 115 | 67 | 17 | 7 of 8 |
| 2 Seam Rock | 158 | 88 | 25 | 7 of 8 |
| 3 Twin Beds | 48 | 26 | **0** | **0 of 8** |
| 4 Trinomial | **0** | **0** | **0** | **0 of 8** |
| 5 Loaded Vein | **0** | **0** | **0** | **0 of 8** |

Three of five layers could not pay for the lantern at **any** amount of digging, and a
monic trinomial cannot produce plain metal even in principle — its factors are both
linear. A student working the interesting rock was permanently locked out of the
instrument that tells them whether a lump still has a seam, with nothing on screen to
say why.

The deep layers are now salted with a common metal — `g(x+p)(x+q)`, `g((mx)²−n²)`,
`g·(loaded)` — which is also the move that should be taught first. `ore` asserts that
40 lumps out of **every** layer can pay for both starting tools, using `castableFrom`,
the forge's own judge. Its control empties the rack of plain metal.

### And the check that had never really run

Adding the salt broke `forge`: the Decimal Dial was *"not forgeable from 70 real
smelts"*. That looked like the change breaking the forge. It was not.

**70 smelts across five layers is 14 lumps a layer, and at fifteen other seeds it
failed ten times** — the Auger missing nine, the Drill three, the Shifter two. The
assertion had been passing on the luck of seed 31337 alone. My change tipped a coin
that had always been in the air.

At 200 smelts, twenty seeds of twenty reach all seven. The number was chosen by
measuring where the failure rate goes to zero, and three further seeds are now checked
outright, so one lucky draw can never again be the whole basis of the claim.

**The rules.**

- **Assert that a feature has an effect, not just that its output is true.** A tool
  whose panel is correct and whose behaviour is absent passes every content check.
- **When a change breaks a check, ask whether the check was ever load-bearing.**
  "Green before, red after" is not proof the change caused it — re-run the old check
  at other seeds before believing it.
- **Raising a sample until a failure disappears is not a fix.** Measure where the
  failure rate actually goes to zero, and say that is what you did.
- **A control that does not hold everything else still tells you nothing.** Two
  renders of two different rocks differ no matter what the belt says.

## 70. Pulling a branch out of a timer so it can be checked at all

The face's new cart-or-yard choice put the routing decision inside `MF.breakRock`'s
900ms landing timer. **A branch inside a timer is unreachable to anything synchronous**,
and an unreachable branch is one nothing asserts — which is exactly how the Deep Pick
went unchecked for weeks (§69).

It is `MF.placeCut(o, dest)` now: four lines, called by the timer, callable by a check.
`nogate` asserts that a native lump cut to the yard lands on the **rack**, that a seamed
one lands on the **heap**, and that neither touches the cart on the way — plus that the
face offers both buttons at all. Controls: the yard route wired straight to the cart
(caught by name, twice), and the second button relabelled (caught with the button list
printed).

**The rule.** *If a behaviour lives somewhere a check cannot reach, move the behaviour
— do not settle for asserting the thing next to it.* The refactor is smaller than the
excuse.

## 71. `draggable="true"` cancels the pointer events the drag is built on

The user reported that instruments could not be dragged onto ore in the cart. Every
probe said they could — a synthetic `pointerdown` → `pointermove` → `pointerup` from a
belt tool to a lump applied the tool and re-spelt the stone, every time.

Both were true. Each belt tool carried **`draggable="true"`** while the gesture is built
entirely on **pointer** events. On a real mouse-down-and-move the browser starts its own
HTML5 drag, which cancels the pointer stream the handlers are listening to. **Synthetic
PointerEvents never trip that**, because no native `dragstart` fires — so the probe
exercised a code path no student could reach.

> **A simulated gesture is not the gesture.** Dispatching the events a handler listens
> for skips everything the browser does *around* them: native drag, scroll, text
> selection, pointer capture, `touch-action`. The check was measuring its own input.

The attribute is gone (nothing here uses HTML5 drag-and-drop), and `nogate` now fails
the build if any control carries it, with a control that puts one back.

### And a drag with no click path is half a control

It is the only gesture on this site needing a pointer that can be held down and moved
precisely — and in the cart it was the **only** way to use a tool at all. Clicking an
instrument now picks it up (`MF.state.armedTool`), clicking a rock uses it, and both
the belt loop and every eligible rock say so. `nogate` drives that path end to end.

**The rules.**

- **Never let a synthetic event be the only proof a gesture works.** Ask what the
  browser does around the events, not just with them.
- **Every drag needs a click path**, and the check should exercise the click path —
  it is the one a keyboard and a touch screen can reach.

## §72. A control that queries the wrong node cannot fail

The `swing` group's control put the two-readers bug back — the one where `B.anim` was
consumed by one box and read as `null` by another — and then asserted:

```js
if(MF._mine.mid.querySelector('.anvilstage[data-anim]'))
  errs.push('CONTROL: the swing check cannot see an anvil that was never armed');
```

`.mid` is the face column. **The bench has never been painted into it.** So the query
returned nothing whatever the code did, the control never pushed, and it read as passing
for the entire life of the group. It was proving nothing about anything.

It reads `MF._mine.work` now, and forcing a repaint to arm the anvil fires it by name.

> **A control that has never been seen to fail has not been tested.** The rule was
> already written down. What this adds is the failure mode where the control *looks*
> tested because the group around it is green: the group is green partly *because* the
> control is inert. Re-point a check at a moved element and re-point its control with it,
> in the same edit, and prove the pair together.

## §73. Ask where the button went before you assert it is missing

Four groups broke at once when the swing bar moved into a dialog, and every one of them
reported the same shape of falsehood:

| group | what it said | what was true |
|---|---|---|
| `nogate` | "no way to swing — something is gating the hammer" | nothing gated it; the swing was one click away |
| `swing` | "the hammer bar drew no boxes to type in" | the boxes were in a panel appended to `document.body` |
| `reach` | "the bench has no `.swingbtn` to measure" | it was in a fixed dialog, where the distance is not a bench property |
| `contrast` | "mine-done never reached the end of a lump" | it did; the class marking the end had been renamed |

Each one was a **true statement about the node it was holding and a false statement about
the app.** Three of them would have gone on passing if the button had merely been deleted
rather than moved, because they were looking for a *name*, not for a *capability*.

> **A check anchored on a selector measures the selector.** When a control moves, decide
> what the check was protecting before you decide where to re-point it — and prefer
> walking the student's route to querying for the thing at the end of it. `nogate` now
> clicks the ore and looks in what opens; it would catch both a moved button and a
> deleted one.

## §74. A dialog that scrolls hides the button that answers it

`.toolsheet` is capped at `max-height:88vh` with `overflow-y:auto`. So measuring the
panel's own height can never report a problem — the cap is the answer, every time.

The hammer panel at 380px held **870px of content in a 681px box**. Everything was
present, nothing overflowed the page, no contrast failed, and `layout` and `reach` both
passed: the swing button was simply below the fold of a box that does not look like it
scrolls, on a phone.

Measured as `scrollHeight > clientHeight`, it fails immediately. The fix was to cut the
panel — a shorter title, a shorter close, one heading fewer, a smaller stone under 620px
— until it fit with room to spare, rather than to raise a threshold.

> **When a box caps itself, measure the content against the box.** Any check that reads
> the box's own dimension is reading the cap you wrote, not the thing you wanted to know.

## §75. A fixed angle cannot express a taper on a box that changes height

The cart's corner straps were skewed 2.3° to lean with the flared body. It looked right
in the state it was built in and it is not expressible that way at all.

The taper is **4% of the width at the bottom**. The lean a strap needs to follow it is
`atan(taper ÷ height)` — and the height is a scrolling list of however many lumps a
student has dug, from one to the 430px cap. The same 2.3° that matched at 200px threw
the strap **21px off the plate** at 526px.

The fix was not a better angle. It was to stop encoding a *relationship between two
dimensions* as a constant: the straps run straight, and the body's own `clip-path` —
which is stated in percentages and therefore is the relationship — trims them to the
plate.

> **Before writing a constant into a drawing, ask which of its dimensions can change.**
> A skew, a rotation, a fixed offset and a `flex-basis` all encode an answer that was
> only true at the size you were looking at. This is the same mistake as §63's
> `flex-basis` becoming a height when the axis turned, in a different property.

> **And a caveat this file should carry:** nothing in `MF.validate()` caught it. The
> `cartdraw` group measures the wheels and the rail, and says so; the straps are inside
> the box it does not look at. It was found by drawing the cart at two lump counts and
> reading the geometry back. **The denominator was doing its job — it just did not
> include this.**

## §76. A drawing that does not fill its element is invisible to every instrument

The user reported blank space at the top and bottom of the layer window. Most of it was
not in the drawing: `.seamview svg` said `height:542px` in the stylesheet while
`MF.paintFace` set the width to the viewBox's own 2900. A 2900×360 viewBox in a 2900×542
box with the default `xMidYMid meet` fits the **width** and letterboxes the rest —
**91px of nothing at each end**, on every layer, for as long as the taller seam had
existed.

Every group ran green over it, and each was right about what it measures:

- `layout` measures the **right** edge, and says so.
- `hollow` measures a box against **the text drawn in it**; this box holds a picture.
- `contrast` walks **text nodes**; the seam has none.
- `reach` measures the distance between **two controls**; this was inside one element.

A drawing that under-fills its element crosses no edge, moves no control and has no ink.
It just wastes the screen — the axis this project has spent five sessions buying back.

> **Two axes set in two places is one number too many.** The height was in the
> stylesheet, the width in JS, and nothing tied them together — so raising one and not
> the other was a single-line change that could not fail loudly. Both come off
> `MF.SEAM_ZOOM` now.

> **And the control had to change with the cause.** Setting `MF.SEAM_ZOOM` to 1 would
> *not* reproduce the fault, because both axes now derive from it and the drawing would
> simply be smaller and still filled — a control that proves the opposite of what it was
> written for (§72). The control states a height independently of the width, which is
> what the stylesheet did.

`seam` now measures painted content against the element's content box, per layer, and a
second assertion that something is drawn in the top 44 and bottom 44 units of the rock —
because **filling the element is not the same as filling the picture**, and both halves
of the user's report were true.

## §77. Replacing a surface silently drops whatever swept it

Swapping the Casting Shed's seven-method index for the working floor left `MF.validate()`
reporting **0 errors over 140 fewer checks**, and nothing said so.

The reason is that `contrast` sweeps `Object.keys(MF.SCREENS)` generically, with
`MF.state.tools` as whatever it happens to hold — which through most of a run is nothing.
The old index rendered all seven methods regardless, so the sweep measured seven lessons
by accident. The new floor renders lessons only for tools that have been cast, so the
same sweep mounted the **empty state** and measured not one character of a lesson.

Both runs were green. The only signal was the denominator moving.

> **Read the denominator on the runs that pass, not only on the ones that fail.** A green
> group over a shrinking count is a group that has stopped looking at something. This
> project's rule already says *ask of any pass: what did it not look at?* — §77 adds
> *and compare it to what it looked at yesterday.*

The fix is a `shed-taught` pass that casts every tool and **walks each lesson to its
end**, because the last step, the practice and the start-it-over control only exist once
the walkthrough is finished — three states the first paint has none of. `contrast` is at
1,883 now, above where it was before the swap.

> **And a generic sweep over a screen list is not coverage of those screens.** It covers
> them *in whatever state the previous test left behind*. Every state that is reached by
> doing something — a mold filled, a lump broken all the way down, a panel opened, a
> lesson walked — has to be mounted on purpose or it is not swept. That list is now nine
> entries long, and every one of them was added after a real gap.

## §78. A check on every item can miss a pattern across the set

The user reported that the multiple-choice questions were not random and the first option
was usually the best-fitting one. Measured before touching anything: **the supported
option was first in eight of eight** recognition questions on the site.

A student who clicks the top option and reads nothing answered every one of them. That is
the surface-cue trap this project's own teaching brief exists to prevent, sitting in the
one place whose job is to find out whether a student followed the room.

**The `quiz` group ran green over it, and every assertion in it was true.** It checked
that each option says something back, that the option marked as supported really is
supported by the engine, and that no distractor is secretly also true. All per-question,
all correct. **The fault was not in any question. It was in the set.**

> **Ask what a per-item check looks like in aggregate.** Position, ordering, length,
> difficulty and colour are all properties that are fine in every instance and a tell
> across the collection. A group that iterates and asserts item-by-item cannot see one,
> and will report clean the whole time.

`MF.spreadOptions` places the supported option at a slot computed from the question text
— stable under repaint, so the answer does not move under the student's finger — and the
others fill in around it. A plain shuffle was tried first and left the answer in the last
slot **five times out of eight**: unbiased per question, and still a slot worth guessing.

The check counts the spread over every recognition question at once and fails if any slot
holds the answer more than half the time. Threshold at a half, not a third, because eight
questions over three slots is a small sample and exact uniformity is not something a hash
owes anybody — what it rules out is *a slot worth guessing*. Control: render in the
authored order and it reports `slot 1 in 8 of 8`.

## §79. "Does the control answer?" is not "is the control still where you aimed?"

The user reported that clicking a lump in the layer window forcibly moved the screen and
felt jerky. Measured before touching anything: scanning **1400px** along the seam and
clicking a lump that was plainly on screen snapped the seam back to **0** and threw the
clicked lump **1400px sideways, out from under the cursor.**

Three things were happening on every click, none of them needed:

- `MF.paintMine()` tore down and rebuilt the whole middle column — **691 SVG nodes**, the
  24 lumps, the wall texture and the pick — to change which rock was ringed;
- the rebuild then **re-centred** the seam on the selected lump, whether or not it was
  already visible;
- and the page was nudged vertically to bring the panel into view.

**Every group ran green over it, and each was right about what it measures.** `knock`
asks whether a click *answers* — it did, throughout. `layout` measures the right edge.
`reach` measures the distance between two controls. `contrast` measures ink. Nothing
measured **whether the thing you aimed at was still where you aimed after you hit it.**

> **A control has a second obligation beyond responding: not moving.** Checks that ask
> "did something happen" are blind to "too much happened". If a click repaints a
> container, ask what inside that container the user's hand or eye was already tracking —
> scroll offsets, hover targets, focus, caret position, the element under the pointer.

The fix was to stop the repaint rather than to soften it. A selection changes three
things — a `data-sel` attribute, a transform on a node that already eases, and the panel
underneath — so `MF.selectRock` changes those three and touches nothing else. The seam is
never rebuilt, so its scroll offset cannot move, so the lump cannot jump. **Movement that
is the point is kept**: a selection changed by anything other than a click on a visible
rock still eases the seam over, because there the student needs to be taken somewhere.

`knock` now drives a real click on a visible rock and requires all three deltas — seam
scroll, the rock's position on screen, the page's scroll — to be zero, and separately
that the click still rings the rock and names it. Control: reintroduce the re-centring
and it reports the jump.

## §80. A probe that leaves state behind writes the next group's failures

The new `knock` sweep arms an instrument to test that clicking the belt does not rebuild
the seam. It left `MF.state.armedTool` set — and the `swing` group further down clicks
the ore on the anvil expecting the hammer panel to open.

It does not, because **a click with an instrument in hand puts the instrument on the
rock** — one click, one act, which is the mine's own rule. So `swing` reported:

> `swing: a swing that leaves work to do — clicking the ore on the anvil opened no hammer to type into`

A true statement about a state that **the check above had created**, in a group that had
nothing wrong with it, pointing at code that was fine.

> **Save and restore everything a probe touches, including the fields it sets as a side
> effect of driving the UI.** The obvious ones — `cart`, `selected`, `anvil` — were
> already saved. `armedTool` was not, because arming was a *gesture* the probe performed
> rather than a value it assigned, and gestures leave state too.

The same run also had the control fail for the opposite reason: it reused whatever the
restore left behind, which was a cart with nothing in it and a belt with no instruments,
so there was no button to click and it reported *"cannot see a cart click that repaints
the whole mine"* — **failing for having nothing to measure rather than for the thing it
exists to catch.** Controls build their own state now.

> **Two failure modes, one root:** a check that depends on ambient state is a check whose
> result belongs to whatever ran before it.

## §81. Clamp both ends, because the thing you are anchoring to may be off screen

The pop-out is placed beside the lump it is about, so its left offset is computed from
the lump's right edge. That was clamped with a `min` — keep it inside the right-hand edge
of the wall — and not with a `max`.

A lump that has been scrolled off the **left** of the seam has a negative right edge. The
panel went off the left of the wall, and `knock` caught it as *"the pop-out is not inside
the layer window"* on the very first run.

> **An element positioned relative to another element inherits that element's freedom to
> be anywhere.** The seam scrolls, so its lumps can be at any offset including negative
> ones; anything anchored to them needs clamping at both ends, on both axes. One-sided
> clamps are the default mistake because the case you are picturing while you write it is
> the one where the anchor is comfortably on screen.

The same run showed why the placement rule had to be measured rather than reasoned about.
Choosing over-or-under by comparing the rock's **centre** to the wall's **midpoint** is
correct only if the panel is a sliver; at 255px of a 563px window it left 17 of 54 lumps
partly covered. Comparing the actual overlap each way, and preferring **beside** the rock
where there is room, took that to 1 of 56.

## §82. A gradient fill is invisible to the contrast sweep, and so is anything at opacity 0

Two denominator holes, found while adding gradients to the anvil (§36) and the ladle (§35)
and worth writing down before either becomes a defect.

**`_backdrops` skips `url(...)` fills.** It reads SVG shape fills to find what is painted
under a piece of text (§22), and a gradient is not a colour it can resolve:

```js
if(!f || f === 'none' || f.indexOf('url(') === 0) return;
```

So text over a gradient-filled shape falls through to whatever is behind it — and gets a
ratio that is arithmetic about the wrong surface. Nothing on the site does this today: the
ore's label on the anvil is measured against `MF.oreRock`'s own **flat** polygon at 4.98:1,
not against the anvil. But the site now has thirteen gradients where it had none.

**And the pour's numbers are not measured at all.** `MF._measureContrast(moldScene)` returns
**zero** elements. `.mdnum` rests at `opacity:0` and is raised by an animation on a delay, so
at the instant the sweep runs it is invisible — and the sweep skips anything at zero opacity,
correctly, because you cannot measure what is not painted.

The consequence is that the halo those numbers rely on is documented and hand-measured
("13.05:1 at every frame of the pour") and **verified by nothing**. The `mine-blow` pass
already solved this shape of problem for the THUD burst by forcing its opacity before
measuring; the mold numbers need the same treatment.

> **Neither of these is a bug today. Both are checks that would not fire if one appeared.**
> Recorded here, unfixed, so the next person to put text over a gradient — or to trust the
> pour's contrast numbers — finds out from this file rather than from a student.

## §83. Both holes in §82, closed — and one of them was measuring the wrong thing

**A gradient is a backdrop, and it is several of them.** `_backdrops` returned early on any
`url(...)` fill, so text over a gradient fell through to whatever was behind the drawing.
`_gradStops` resolves the referenced gradient to its stop colours and hands back *all* of
them; callers already take the worst ratio across whatever they are given, so a colour that
clears the light end and fails the dark end now fails. Proven on a constructed case: mid-tone
ink over a `#FFF6D8 → #7A2410` gradient reports **2.39:1**, where before it climbed out to the
white behind the SVG and reported a pass.

**And the pour's numbers are measured.** A `mold-pour` pass builds three castings, forces
every `.mdnum` visible with `!important` — an inline value alone loses to a running
animation — and lets the sweep read them. `contrast` 2,089 → 2,115.

### The part that was not just a hole

Measured for the first time, the mold's numbers came back at **1.09:1** — and that was the
*measurement* being wrong, not the ink. `.mdnum` is dark ink on a 4px cream stroke drawn
under the fill (`paint-order:stroke`), and its own comment explains why: no flat colour can
clear a surface that runs molten → dull red → steel, so the halo is the surface.

**The sweep did not know what a halo was.** It compared the letterform to the pixels *behind
the glyph*, which is the right question only when nothing is drawn between them.

> `_haloOf` now returns the halo colour when text carries a stroke wide enough to surround
> its strokes — `paint-order:stroke` with an SVG stroke, or `-webkit-text-stroke` — and that
> colour **replaces** the backdrop. The floor is 2px: a hairline tints an edge without
> carrying the letter, and treating one as a backdrop would let a real failure hide behind it.

Two lessons, and the second is the sharper one:

> **A sweep that has never measured something has never been wrong about it either.** Closing
> a denominator hole is not just adding coverage — it is the first time the instrument is
> pointed at the thing, and the first reading may say more about the instrument than about
> the code. Both were true here: 1.09:1 was arithmetic about real pixels and a false claim
> about what a student reads.

> **And an existing check may already cover what the new one appears to catch.** Stripping the
> halo fired 83 errors — from a `mold` assertion that already required a halo to *exist*. What
> was missing was never its existence; it was whether it is *enough*. Read what fires before
> claiming the new check is what caught it.

## §84. An exemption that describes the defect is a licence for it

`mold` has always asserted that the products shown on a pour add up to the casting. It read:

```js
/* three plain metals are shown as themselves, and multiply rather than add */
var allPlain = ings.every(function(g){ return g.m===0; });
if(!allPlain && (mSq !== t.cast.a || mX !== t.cast.b || mK !== t.cast.c))
```

Every word of that comment is a **true description of what the code did**. None of it is a
reason the code should do it. `MF.pourChain` joins the terms row with plus signs, so listing
the metals as the products printed `3 + 9` over a casting of `27` — and the exemption existed
precisely so the check would not say so. The Pick and the Lantern both pour plain metal, so
this was live in the Forge, under a green group, for as long as the group has existed.

> **Ask of any `if(!x && ...)` in a check: is `x` a case that is genuinely out of scope, or a
> case that fails?** Removing this one fired on the Pick and the Lantern immediately.

And the second hole, which is §5 again in a new place:

> `mold` walks `MF.toolOrder()`. Every order is a quadratic. **The Molds room's own
> arithmetic — a depth over two plain parts, on nine settings each — had never been through
> any of it.** 486 checks now pour the room's three modes across both sliders.

## §85. The pictograph exemption was skipping on the wrong predicate

The contrast sweep skipped elements with no word characters in them, reasoning that a colour
emoji carries its own colour table and `color` draws none of it. True — and the case it was
actually written for is named in its own comment: **the mold's cavity**, which is not a label
at all. It is a hole cut in sand, drawn by forcing every channel of the ink to zero.

Cut that cavity to an **expression** rather than a tool icon and it suddenly has word
characters in it. The emoji test stops firing, and three copies of a *shape* start reporting
1.08:1 as if they were text somebody was meant to read. **Nothing about them had changed.**

> The predicate is now the honest question — *can `color` reach a pixel of this?* — and it
> says no for anything inside `<defs>`, `<mask>`, `<clipPath>` or `<symbol>` (never painted;
> a mask is an alpha channel), and for anything drawn through `filter: brightness(0)` (every
> channel multiplied by zero). The pictograph rule stays as the third case.

**And an exemption is not a pass.** Skipping a thing and replacing the reading are two
different acts, and doing only the first is how a surface goes dark. A `cavity` group measures
the cut *as it actually renders* — the black it really is, against the sand gradient it is
really cut into, both read off a live mold rather than typed into the check. 5.05:1 against
the darkest stop.

> It also fails loudly if `.mdcut` ever stops being forced black, because the skip above would
> then be hiding real text. **A skip whose reason has expired should say so**, not sit there
> being quietly wrong. Control: remove the filter — the sweep picks `.mdcut` and
> `.mdcutshadow` straight back up, and `.mdmaskglyph` correctly stays out, which is the two
> rules proving they are independent.

## §86. A green group proves only what it was pointed at

The `visual` group asks exactly the right questions — does this reading **draw**, does it
leave a **?**, is it **not mostly prose** — and it had been green for weeks while the Casting
Shed's Tools module carried one diagram in seven lessons and up to 2,082 characters of prose.

Nothing was broken. `visual` sweeps `MF.TOOL_READ`, the mine's *reading of a lump*. A lesson
renders `MF.SCHEMA[key].steps`, the *method*. **Two surfaces, one of them measured.**

> This is §5 again, and it keeps arriving in a new disguise: `truthy` never moved the slider,
> `mold` never poured plain metal, `contrast` never mounted the Stamp Mill signpost, and now
> `visual` never looked at the room where the methods are taught. Ask of any green group not
> just *what did it not look at* but **what else has the same shape and a different name**.

The `taught` group asks the same three questions where the lesson actually is. Note what it
had to do differently:

> **A hole is a `.qm` or an SVG `?`.** `MF.areaModel` marks an unknown side with SVG text
> rather than a span, so counting only spans would have called the Shifter's box — the one
> diagram that was already there — a lesson with nothing left open. A check copied across
> surfaces has to be re-derived, not re-used.

> **Prose is measured through the real screen, walked to the end**, because the bench, the
> practice and the closer only exist at particular points of the walk. And **folded copy is
> not a wall**: text inside a closed `<details>` is excluded, which is what makes folding an
> honest answer to "fewer walls of text" rather than a way to hide from the check.

## §87. A fixed pixel size is a control that expires

Two in one session, from opposite directions.

**A control that stopped being a fault.** `reach` proves itself by building a bench cluster
taller than one screen — with a spacer of `height:900px`. That is a screen and a half on a
phone and *less than one* on a tall desktop window, so at 1000px high the control built a
cluster that fitted, saw no error, and reported that the check could not see something it had
never been shown. It is `rcBudget + 200` now.

> **A control has to be a fault at every size the check runs at**, or it is only a control at
> the sizes somebody happened to test in.

**A constant that stopped being right.** `.mdnum` carried a 4px halo, chosen against type that
was always 13px or 21px. The moment the pour began sizing its type to the longest term it
carries, the `×` was 3px of halo on 26px of letter — and `contrast` caught it, because that
assertion was written as a *ratio* (`0.15em`) rather than a number. Both halos are in `em`
now.

> The lesson is not "use em". It is that **the check survived the change because it was
> expressed as a relationship, and the CSS did not because it was expressed as a number.**
> Where a value only makes sense relative to another value, say so in the code, or the next
> person to move the other value has silently broken it.

## §88. The one function whose text the sweep cannot see is the one that went black on black

`MF.areaModel` names its tiles `sq`, `x` and `k`. A caller asked for `x2`. Neither the tint map
nor the ink map has that key, so the corner was painted `fill="undefined"` — black — and
labelled in the same nothing. **A solid black rectangle with black text in it**, where the x²
of every two-bracket pour should have been, shipping under a green `contrast` group for as
long as that pour has existed.

§59 is the whole explanation. Those labels are SVG `<text>` painted with `fill`, and
`_measureContrast` reads `color`. Of everything drawn on this site, the one function whose
text that sweep **structurally cannot see** is the one that failed at 1:1.

> **Two fixes, because either alone is half a fix.** An unknown kind now falls back to a real
> tile, so a typo can never again be invisible; and `modeltile` measures what is actually
> painted — every tile's resolved `fill` against its resolved ink, read off a *mounted* svg
> because `var(--tile-sq)` means nothing until it is in the document. The fallback stops the
> typo being black; the check stops it being silent.

And the same day, from the other direction:

> **`cavity` had to ask about EXTENT, not colour.** The molten rects ran `150..362` and the
> reveal's clip `120..390`, both chosen against a square tool icon. `x² + 13x + 42` runs
> `124..388`, so the middle of the casting cooled to steel while both ends stayed the black of
> the cut. Every group in the file asks whether a thing is the right *colour*; not one asked
> whether the paint *reaches*. Six places each had their own idea of where the cavity was, and
> a tool icon was small enough that none of them ever disagreed visibly.

## §89. A guide is the feature that most wants to become a gate

Every default for an onboarding tour breaks a rule this project already has: a modal you must
dismiss, a tour you cannot skip, a progress bar across the rooms, a badge with a count on it.
None of them would have been caught by any existing group, because no existing group knew
there was a guide.

So the `guide` group checks the refusals, not the feature:

> no scrim and nothing disabled behind him (`nogate`); `pointer-events:none` on the dock so it
> can never swallow a click meant for the room (the `overlay` fault class); the `nogrades`
> regex pointed at his own copy and aria-labels; a brevity budget on every beat, because §41
> was about walls of text and a guide is the easiest place to build a new one by accident.

**And he lives outside `#screen`, which took him out of the contrast sweep.** That sweep mounts
each screen into a probe; the dock is deliberately not in the screen, so every word he says was
unmeasured the moment it was written. Closed in the same commit that added him — his copy is
built per room and swept with it — because a surface that ships unmeasured is how §82 and §86
both started.

> The general form, now seen enough times to state plainly: **anything mounted outside the
> element the sweep walks is invisible to it, and "outside the screen" is usually a deliberate
> architectural choice made for a good reason.** The reason that makes it correct is also the
> reason it goes dark.

## §90. Two faults on one line, and fixing the visible one hides the other

> *"There must be no bottom-corner Mr Factor on the loading screen."* — user, 2026-09-06

He was standing on the splash. The obvious fix is a z-index, and it would have been half a
fix that made the other half permanent.

`MF.boot` builds the home screen **behind** the load screen, so it is ready the instant you
press Enter. That means `MF.go('home')` runs before the student has entered — so the dock
unhid itself over a splash it outranked, **and** `home` came out of boot already marked seen.
Hide the dock and the second fault survives, silently: press Enter, land on the surface, and
the lamp is already out because he has "already" greeted you.

> **A visible symptom and an invisible one can share a cause.** The question to ask of any
> "it should not be showing there" is not only *how do I stop it showing* but **what else did
> the thing that showed it already do?**

Both are asserted: nothing paints while the splash is up, the dock ranks below it, and the
room under it is still unseen when the splash comes off. The controls are the two halves —
restore the z-index and it reports standing on the splash; make `MF.loading()` lie and it
reports all three, including the greeting spent on a room nobody was looking at.

## §91. Deleting the last one is usually the point

The Casting Shed's front page went from three doors at its foot, to one, to none.

The middle step had a reason that sounded good: the Stamp Mill and the surface were pure
navigation and the masthead already carried them, but the Forge was *a next step* — you learn
the pour here and you perform it there. So it stayed.

It is still a room. The bar at the top still goes there. **Keeping one because it is a nicer
one is how the row grows back**, and the rule the user actually stated — the top bar is the
navigation — had no exception in it.

> When a clear-out leaves exactly one survivor and the survivor needs a paragraph to justify
> it, that paragraph is the tell.

## §92. A dead branch with a good comment on it

`MF.fitSeam` has always carried a block that scrolls the face when the lump being looked at is
off screen. It has a comment explaining why it eases rather than jumps, and why the scroll
position belongs to the student. **It has never run once.**

```js
var target = F.target;      // nothing in the file ever assigned F.target
if(target){ … }
```

Measured at 1376×900 when the user reported the distance: **19 of 24 lumps were off the side of
the window while their own reading was on screen.** Median travel from stone to panel: 1,306px.
Worst: 3,197.

> **The placement maths was never wrong.** With the rock actually in view the panel sits 14px
> from it — that logic had been tuned twice and both times it was working correctly on a rock
> that wasn't there. Two correct-looking pieces of code, one of them describing something the
> other had let scroll away.

Three lessons, and the third is the one that cost the time:

> **A field that is only ever read is a bug.** `F.target` is read in one place and written in
> none. That is greppable, it is mechanical, and no group on this site looks for it.

> **No group asked whether the thing being described was on screen with its description.**
> `reach` measured spans between controls; `layout` measured right edges; `overlay` measured
> what eats clicks. The relationship between a *reading* and its *subject* was nobody's.

> **A smooth scroll measured synchronously reports the position it is easing away from.** This
> fix looked unfixed twice — once before it and once after — because the probe read
> `getBoundingClientRect` mid-animation. Force `scroll-behavior:auto` for the whole sweep, or
> measure a journey that has not happened yet. Same family as §56's arrival wipe.

## §93. Pinned to the edge is not the same as near the thing

The reading's fallback, when it cannot stand beside a lump, was `top:14px` or `bottom:14px` —
the wall's edges, wherever the stone happened to be. On a 979px window, where the panel rarely
fits beside anything, that put the reading **329px** from a stone in the middle of the wall.

The choice it was making — *cover less of the lump* — was the right question. The positions it
was choosing between were both wrong: two fixed bands, neither of them near.

> The candidates are now **above the lump** and **below the lump**, with the wall's edges kept
> only for when neither fits. Same ordering rule, better options: 329px → 20px, and at that
> width the worst case and the median are now the same number.

## §94. A check written in terms of the thing it checks can never fail

Four times in this build. The pattern is always the same and always invisible
in review, because the code reads exactly like a correct check:

| what it asserted | what it consulted to decide whether to assert it |
|---|---|
| `CLANK_SPEAK` is three clanks | a count expressed in `CLANK_SPEAK` |
| the voice script matches what he says | `MF.GUIDE`, which the script is generated from |
| the panel does not warn when every file is present | `layerState`, the function under test |
| a tool must not invite a swing at native metal | `MF.isNative`, the call the fix turns on |

**The tell is never the assertion. It is the guard.** All four had a correct
assertion sitting behind a condition that moved with the defect.

Two of the four passed a naive control and looked proved. The one that caught
them was **patching the shared function to lie** rather than corrupting one
call site: a lying `isNative` made the group skip the exact seven lumps it
existed to test, and the group stayed green.

**The fix is a literal.** `BENCH` now carries `done:true`/`done:false` written
out by hand for all 21 lumps, and a separate check holds `MF.isNative` to that
list. A literal cannot move with the code. When the two disagree, that is a
finding and it is reported — instead of silently changing which branch every
check below it takes.

> Where a literal is genuinely impossible, the guard must come from a
> *different* source than the assertion. Never the same function twice.

## §95. Read the whole error list, not the first twenty

`MF.validate()` returned `detail: errs.slice(0, 20)`, and a control was read as
**not firing** when it had fired six times — the `ore` and `break` groups run
earlier, so 486 cascading errors from the patched function pushed every
`reading:` line off the end of the visible list.

Twenty is right for a console glance and wrong for a control. A control that
introduces a fault in a *shared* function does not produce one error; it
produces hundreds, and the one you are looking for is not near the front.

`validate()` now also returns `all` — the complete array. **Filter `all`,
report from `detail`.**

The failure mode is the worst kind: it says the check you just wrote does not
work, so the honest response is to weaken or delete it. §5's "read the
denominator" has a partner — *read the whole numerator too.*

## §96. A check that is green three times and red the fourth is worse than one that always fails

The duck probe set a bed's volume to zero, called `apply()`, and read the bus. It passed at
380, 560 and 1250 px and **failed at 994** — the same code, the same page, four widths.

The cause is Web Audio, not layout. `apply()` uses `setTargetAtTime`, an exponential approach
with no end time, and **`cancelScheduledValues` does not stop a `setTargetAtTime` that started
before the cancel time.** So the residual ramp kept pulling the value back up, and whether the
probe caught it depended entirely on how long the preceding groups had taken.

Two wrong versions preceded the right one, both reading the live bus:

1. set the volume, call `apply()`, read the gain — reports the value it is easing **away**
   from. Same trap that ate a scroll measurement earlier in this project (§ smooth transitions).
2. cancel and pin the gain first — still loses to the in-flight `setTargetAtTime`.

**The fix was to measure a node with no history:** a fresh `GainNode` swapped in for the bus
for the length of the probe. No automation, nothing to fight, identical at every width.

> A flaky check trains you to re-run until it passes, which is the exact opposite of what a
> check is for. When one appears, **do not raise the tolerance** — find what is moving.
> Something in the system is genuinely non-deterministic and you have just been shown where.

## §97. Proving the instrument works is not proving anything is holding it

The user: *"There are no sounds... Something is very broken that you think is working."*
They were right, and the `sound` group was 132 checks of green.

**`MF.breakRock` — the "Swing the pick" button, a 400 ms pick-arm animation and a nine-shard
burst, the loudest gesture in the mine — fired no cue at all.** The faint noise a student did
hear was `tick`, which belongs to merely *selecting* a lump one step earlier. So the pick read
as "barely there" and the whole effects layer read as broken.

Every check was about the **sound layer**: a cue can be fired, can fall back to synth, can be
muted, is levelled against its neighbours, ducks the beds. All true. **None asked whether the
button a student presses fires one.**

My own testing had the identical blind spot. I called `MF.swing(B)` directly and reported the
hammer verified — but `MF.swing` is not what a student clicks, and I never once clicked
"Swing the pick" because I did not know it existed. **A gesture you have never heard of cannot
appear in a list you write from memory**, which is why the list now lives in the file:

```js
var GESTURES = [
  ['cutting a lump out of the wall', 'breakRock', 'pick'],
  ...
];
```

Plus the reverse — every cue in `CUES` must be claimed by some gesture — so a sound wired to
nothing is a failure rather than 7 KB nobody notices.

> **It is a source check** (`fn.toString().indexOf("play('pick')")`), and that limit is
> written in the comment beside it. It proves the call is *in* the function, not that it runs
> on every path. A behavioural version would have to drive `breakRock`, which sets a
> `breaking` flag and runs on timers — §80 territory. **The weaker check that exists beats the
> stronger one that does not.**

The general rule: when a subsystem is verified end to end and a user still reports it missing,
**stop testing the subsystem.** Test the path from the thing they actually touched.

## §98. A sound is not "on" a moment unless it is scheduled to the same clock

The hammer cue fired the instant `MF.swing` decided the outcome. `.hammerswing` runs
`hammerarc` over **3000 ms** with the strike keyframe at **58%** — so the sound arrived
**1740 ms before the hammer touched the ore**, while it was still winding up.

Nothing was broken. `play('thud')` was called, the buffer decoded, the bus measured 0.63. The
cue and the picture were simply describing different moments, and the user's reading of that
was *"we need to closer match the timing"* — which is the polite version of "the sound is not
about anything".

**The fix is `playAt(name, delay)`** — Web Audio schedules a source on the audio clock, which
is far steadier than `setTimeout` — and a gesture that lays three cues on three keyframes:

| | | |
|---|---|---|
| 46% · 1380 ms | the downswing begins | `swish` |
| 58% · 1740 ms | **the strike** | `thud` / `clang` |
| + 100 ms | the rock giving way | `chip` (a hit only) |

**The check reads the timings out of the stylesheet at run time** — `3000 × 0.58` parsed from
the `@keyframes` block — rather than comparing `MF.HAMMER` to itself (§94). Retime the
animation without retiming the sound and it says so.

Two things this makes checkable that were not before:

- **the order** — a swing, then the strike, then the debris; and
- **the meaning** — `chip` follows a hit and never a glance, because loose rock coming away is
  what "the seam ran" *sounds* like. A glance with debris on it would say the opposite of what
  the rock did.

> And when motion is reduced, every animation collapses to `.001s`, so the delay collapses too.
> A 1.7 second wait with no picture is worse than either alone. `MF.reducedMotion()` answers
> the OS query **and** the panel override — code that consulted only the media query would
> keep the delay for a student who had turned animation off in the panel.
