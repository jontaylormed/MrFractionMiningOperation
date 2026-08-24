# Mr Factor's Mining Operation — read this first

One file: `index.html`. Zero dependencies, no build step, runs from `file://`.
Open it and it works. **`MF.validate()` in the console is the first instrument.**

## What this is

Ore is any expression. **Smelting separates** (factoring). An **ingot** is an
irreducible — a prime and an irreducible polynomial are *the same object*.
The **mold combines** (distributing). **Pouring is the only correctness signal
in the build.** Tools assist; they never gate. Nothing is scored.

## The five rules that have actually cost this project time

1. **Three scene builders end identically.** `surfaceScene`, `roomScene` and
   `cartTrack` all finish `wrap.appendChild(svg); return wrap; };`. An edit
   anchored on that tail has landed in the wrong one **three times** — it cost
   two dead workshops and a forge that would not open. Anchor on something
   unique, and after any scene edit confirm every symbol you referenced is in
   scope in *that* function.

2. **Use the smallest instrument that can see the defect.** A three-line DOM
   read beats a screenshot; a screenshot beats a review cycle. Escalate only
   when the cheap one genuinely cannot see it. Pixels are for things only
   pixels show — placement, occlusion, whether a thing is visible at all.

3. **Do not spawn agents unless asked**, and never against a dirty tree. Every
   cycle so far has audited a file that moved underneath it, and the reports
   said so.

4. **Commit before and after.** Diffs and reviews both need a frozen artifact.
   Capture a broken state before repairing it.

5. **Read the denominator.** A green group proves only what it swept. `truthy`
   reported 0 errors over 642 checks while 1,970 dial states printed a
   falsehood, because it never moved the slider. Ask of any pass: *what did it
   not look at?*

## Verifying a change

```
MF.validate()      // 0 errors, every group reports its denominator
MF.playthrough(4)  // drives one lump: dig, assay, smelt, pour
```

Every check carries a control that must fail. When you add one, prove it by
reintroducing the fault it exists to catch — not just by watching it pass.

## Where things are written down

| | |
|---|---|
| `docs/MINE-SPEC.md` | what v1 is, and what is deliberately out |
| `docs/SITE-STATE.md` | what exists right now — the only place that says so |
| `docs/VERIFICATION.md` | why the rules exist; each one follows a real failure |

Do not restate those files here. Copies drift.
