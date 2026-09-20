# Mr Factor's Mining Operation — read this first

One file: `index.html`. Zero dependencies, no build step, runs from `file://`.
Open it and it works. **`MF.validate()` in the console is the first instrument.**

## What this is

Ore is any expression. **The mine breaks, the forge smelts** — and that split
is load-bearing:

- **In the mine you BREAK.** Name one factor, swing, and either the seam runs
  or the pick glances off. What is left goes back under the pick. That is
  **factoring**, and it is repeated until nothing left will come apart.
- What will not come apart is **native metal** — a prime and an irreducible
  polynomial are *the same object*. That is the whole thesis.
- **In the forge you POUR.** Metal into a mold, one formed object out. That is
  **distributing**, it happens in exactly one place, and it makes tools.

**Two correctness signals, one per place, both physical: the seam runs or it
does not; the casting is sound or it is scrap.** Neither is a mark. Tools
assist; they never gate. Nothing is scored.

## Pushing is the user's decision, always

**Never `git push` without the user asking for it in that turn.** Not in auto mode,
not because the tree is clean, not because a change is finished, not because a
previous push was approved — approval is per-push and does not carry forward.

Committing locally is ordinary work and needs no permission (see rule 4 below).
Publishing is different: the site is public, the repository is public, and a push
deploys to GitHub Pages within a minute. If you believe a push is warranted, say
so and stop.

The same goes for anything else that leaves this machine: creating a remote,
changing repository settings, enabling Pages, opening a PR.

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
MF.playthrough(4)  // drives one lump: dig, assay, swing until nothing breaks
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
