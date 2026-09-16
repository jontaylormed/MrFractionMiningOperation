# Recording Mr Factor

### What to record, in what format, and what it costs to host

**Generated from the code, not written beside it.** The line list below comes out of
`MF.voiceLines()`, which reads `MF.GUIDE` and the clank ladder. Re-print it with:

```js
copy(MF.voiceLines().map(l => `${l.id}\t${l.dyn ? 'VARIES' : 'fixed'}\t${l.text}`).join('\n'))
```

A script typed by hand beside the code is a second copy of the words, and this project has
been caught twice by a second copy going quietly stale.

---

## 1. The format

**Record to WAV. Ship AAC.**

| | |
|---|---|
| **Record** | 48 kHz, mono, 24-bit WAV. Never record to a lossy format — you only get to encode once. |
| **Ship** | **AAC in `.m4a`**, mono, **48 kbps**, at 44.1 or 48 kHz |
| **Why not MP3** | Same size, audibly worse on speech, and it cannot start instantly (encoder delay). |
| **Why not Opus** | It is *smaller* — about 30% — and it is the better codec. But `.m4a` plays everywhere including old iPads, and a school tablet on an old iOS is exactly the machine you cannot debug remotely. Take the extra 300 KB. |

If you know every device is current, use **Opus in `.webm` at 32 kbps mono** and set
`MF.VOICE_EXT = 'webm'`. It is the better answer on merit; it is the worse answer on risk.

**One file per line, named by its id.** `room-mine-2.m4a`, `clank-shed-1.m4a`. The code
fetches `MF.VOICE_BASE + '/' + id + '.' + MF.VOICE_EXT` the first time that line is spoken
and keeps it after — so nothing is downloaded until it is needed, and a line nobody reaches
is never fetched at all.

## 2. What it costs

Speech at 48 kbps mono is **6 KB per second** — 360 KB a minute.

| | |
|---|---|
| Lines to record | **22** (2 more vary — see §4) |
| Words | 508 |
| Spoken length | **≈ 3 min 15 s** at an unhurried 2.6 words/second |
| **Total, AAC 48 kbps** | **≈ 1.2 MB** |
| Same at Opus 32 kbps | ≈ 780 KB |
| Largest single file | `room-shed-methods-2`, ~10 s, ≈ 60 KB |

**GitHub Pages will not notice this.** The published-site limit is **1 GB** and the soft
bandwidth allowance is **100 GB/month**; a megabyte of voice is roughly a thousandth of the
site limit. For scale, `index.html` is already about 1 MB on its own — **the entire voice
track costs about what the page already costs.**

You would have to record about **45 minutes** of dialogue before the audio outweighed the
page, and about **fourteen hours** of it to trouble the 1 GB limit.

> Do not commit the WAV masters to the same repo. A 3-minute 48 kHz mono WAV is ~17 MB, and
> the masters for 22 takes with retakes will run to hundreds. Keep them elsewhere and commit
> only the encoded `.m4a`.

## 3. Recording notes

- **Mono.** Stereo doubles the size and Mr Factor is one man with a lamp on his hat.
- **Normalise to about −16 LUFS.** The synthesised effects sit at a fixed level; if the
  voice is recorded hotter or quieter than that, every student will be reaching for the
  volume. −16 LUFS is the podcast convention and lands about right against the hammer.
- **High-pass at 80 Hz.** Removes rumble and desk thumps and costs nothing you want.
- **Trim to ~100 ms of head and tail.** The bubble appears the moment the line starts, so
  a half-second of room tone at the front reads as lag.
- **One take per line, not one long take split up.** The ids have to match exactly, and
  splitting a long recording by ear is where mismatches come from.
- **Leave the numbers out of your mouth.** See below.

## 4. Two lines that cannot be recorded

`clank-hint` and `clank-give` carry **the lump's own numbers** — *"the pair has to multiply
to −18 and add to 7"*, *"3x − 1 runs through it"*. Those are different on every rock in the
mine, so there is no take that would be right twice.

They are marked `VARIES` in the list and left to the text, which is legible on screen where
the numbers matter most anyway. If you want a voice on that rung, record a **lead-in** only —
something like *"Right. Let me put the X on it."* — and let the numbers stay written.

## 5. Turning the voice on

It is off until you point it at a folder. Two lines, near the top of the script block:

```js
MF.VOICE_BASE = 'voice';     // a folder beside index.html
MF.VOICE_EXT  = 'm4a';
```

**Everything degrades to silence.** A missing file, a failed decode, no Web Audio at all —
each one is caught, remembered so it is not requested twice, and ignored. The bubble is
written either way. **The words were always what carried the meaning; the voice is on top of
them, never instead of them**, which is also why the site still opens from `file://` with no
folder beside it and behaves exactly as it does today.

## 6. A caution about renumbering

Ids are `room-<screen>-<n>`, numbered by position. **Inserting a line in the middle of a room
renumbers every line after it**, and your recordings would then be one behind.

- Adding a beat at the **end** of a room is free.
- Inserting one in the **middle** means re-recording that room, or renaming the files.

The alternative — ids derived from the words — breaks the moment you reword a line, which
happens far more often. Positional ids are the lesser of the two, but this is the trap.

## 7. English only, and what another language would need

**Nothing has been recorded yet.** When it is, it will be **English**, because the voice is
the author's own, and English is the language they are fluent in. The site ships in fifteen; the
voice does not, and that is a deliberate limit rather than an oversight.

**This is not a wall.** `MF.voiceLines()` reads whatever language is set, so the script for
another language is the same generator with the picker moved first:

```js
MF.state.access.lang = 'es'; MF.applyAccess();
copy(MF.voiceLines().map(l => `${l.id}\t${l.dyn ? 'VARIES' : 'fixed'}\t${l.text}`).join('\n'))
```

The ids do not change with the language — `room-mine-2` is the second beat of the mine in
every one of them — so a second recording is a second folder of identically named files.
**What is not built is the switch between them:** `MF.VOICE_BASE` is one folder, so pointing
it at `voice/es` would be a one-line change per language and no code knows to do it
automatically. Worth knowing before anyone records in a second language, not after.

Until then the other fourteen languages read on screen and are spoken by the browser's own
voice through **Read aloud**, which already sets `u.lang` from the language's `speech` code.

## 8. Proving this page is not stale

This file is a second copy of words that live in the code, and the project has been caught
twice by a second copy going quietly stale. The table below is checkable in a few seconds,
so check it rather than trusting it — paste this in the console with the site open:

```js
(async () => {
  const md = await (await fetch('docs/VOICE.md')).text(), rows = {};
  md.split('\n').forEach(ln => { const m = ln.match(/^\|\s*\*?`([a-z0-9-]+)`\*?\s*\|\s*([^|]+?)\s*\|\s*(.+?)\s*\|\s*$/);
    if (m) rows[m[1]] = m[3].replace(/\s+/g, ' ').trim(); });
  const live = MF.voiceLines(), flat = s => String(s).replace(/\s+/g, ' ').trim();
  console.log({
    missingFromDoc: live.filter(l => !rows[l.id]).map(l => l.id),
    textDiffers: live.filter(l => !l.dyn && rows[l.id] && rows[l.id] !== flat(l.text)).map(l => l.id),
    notInSite: Object.keys(rows).filter(id => !live.some(l => l.id === id))
  });
})()
```

**All three lists empty is the pass.** Last run **2026-09-15**: 28 rows, 28 lines, all three
empty — checked after the fifteen-language work, which rewrote a great deal of English around
these lines without touching any of them.

---

## The lines

**26 fixed · 2 varying · ≈ 3 min 50 s · ≈ 1.4 MB as 48 kbps mono AAC**

| file | where | line |
|---|---|---|
| `room-home-1` | The surface | Everything here is a building you can walk into, and the bar at the top goes to all of them. |
| `room-home-2` | The surface | Start in the mine if you want to break something, the Stamp Mill if you would rather start on plain numbers, or the Casting Shed if you would rather read first. None of them is required and none of them locks. |
| `room-home-3` | The surface | The yard in the corner is where your metal ends up. It is the one thing out there you do not walk into — the working yard is a band inside the mine. |
| `room-mine-1` | The mine | Pick a lump out of the wall and it goes in your cart. Dig as deep as you like — nothing has to be worked before you go further. |
| `room-mine-2` | The mine | Put one on the bench and name a factor, then swing. Either the seam runs or the pick glances off, and the rock tells you which. |
| `room-mine-3` | The mine | What is left goes back under the hammer. Keep going until nothing will come apart — that is native metal, and it is finished. |
| `room-mine-4` | The mine | Nothing here is timed. A swing that misses costs you the swing. |
| `room-forge-1` | The forge | This is where you multiply instead of breaking, and the only place you do it to order. Metal goes into a mold and one object comes out. |
| `room-forge-2` | The forge | Take an order off a board and I will open the mold. You spend metal out of the yard to fill it. |
| `room-forge-3` | The forge | If the casting is sound you keep what you made. The seven on The Order Board are instruments — each reads a lump for you, and none gates anything. The four deep castings are objects, and read nothing. |
| `room-workshop-mold-1` | The Casting Shed | Three short workshops. The Words is the vocabulary, The Molds is what a pour actually does, and The Tools is how each instrument works. |
| `room-workshop-mold-2` | The Casting Shed | None of them is required. Come back here when a word in the mine stops making sense. |
| `room-shed-mold-1` | The Molds | Move the sliders and watch the pour. Whatever you put in decides what comes out — you never choose the shape. |
| `room-shed-mold-2` | The Molds | The working underneath is the same multiplication written a line at a time — every part of one metal meeting every part of the other. |
| `room-shed-words-1` | The Words | Every mining name here is a real mathematical thing with a real name. The table has both columns. |
| `room-shed-words-2` | The Words | Then put them together yourself in the matching activity. A pair that does not go together tells you what each word means and lets go. |
| `room-shed-methods-1` | The Tools | One lesson per instrument you have cast, so this room fills up as you forge. Each lesson walks its method a slide at a time, and every slide has the picture on it. |
| `room-shed-methods-2` | The Tools | Under each walkthrough is a bench with three lumps on it. Take the instrument off the hook and hold it to one — that is the part that is not reading. |
| `room-workshop-ore-1` | The Stamp Mill | Plain numbers, and the factors of everything up to a hundred. |
| `room-workshop-ore-2` | The Stamp Mill | Put a lump on the bench and pull the lever. The press finds what divides it — and what will not come apart is a prime, which is the same object as native metal. |
| `clank-shed-1` | The breaking floor | A few clanks in a row usually means the method rather than the arithmetic. |
| `clank-shed-2` | The breaking floor | You have not been in the Casting Shed yet. Start at The Molds — it writes a pour out a line at a time, and breaking is that run backwards. |
| `says-mold-after-pour` | The Molds | Remember this shape. In the mine you will run it backwards — you will have the casting and be hunting for the metals that made it. |
| `says-mill-done` | The Stamp Mill | That row is the whole of it. Two miners who cut in a different order still end up with those same ingots — which is why a number has one set of metals in it. |
| `says-mill-going` | The Stamp Mill | Keep stamping until every piece is an ingot. That is all this is, and it is exactly what you will do to a trinomial down the mine. |
| `says-forge-cold` | The forge | Whatever you drop in gets used up — so if you spend your only (x + 3), you will be going back down for another. |
| *`clank-hint`* | **VARIES** | *Carries the lump's numbers. Do not record.* |
| *`clank-give`* | **VARIES** | *Names a factor of the lump. Do not record.* |

> **The em-dashes are breaths, not words.** Read them as a pause. They are in the written
> line because that is how it reads on screen; do not say "dash".

---

# Supplied sound effects

The **six** cues are **synthesised by default and file-backed when you supply files.** Drop them
in and they take over; leave them out and the oscillators carry on. That is not belt and
braces — it is the only way both things stay true at once: the page has to open from
`file://` and make a noise, *and* a real recorded hammer beats a sine wave.

## Where they go

A folder beside `index.html`, then two lines in the script block:

```js
MF.SFX_BASE     = 'sfx';           // the folder
MF.SFX_EXT      = 'm4a';           // or 'webm', 'mp3', 'wav'
MF.AMBIENCE_SRC = 'sfx/bed.m4a';   // the room tone — loops, own slider
MF.MUSIC_SRC    = 'sfx/music.m4a'; // the track — loops, own slider
```

## The six filenames

Named exactly for the cue they replace — the code fetches `<SFX_BASE>/<cue>.<ext>`.

| file | fires when | wants to be |
|---|---|---|
| `thud.m4a` | a seam runs — the good outcome | **short, round, no ring.** It should land and stop. A long tail makes success feel like an alarm. ~250 ms |
| `clang.m4a` | the pick glances off | **metal on stone, with a tail.** It must be tellable from `thud` with your back to the screen. ~400 ms |
| `pour.m4a` | the forge pours | the only one with a body — **1.5–2.5 s**, a swell rather than a hit |
| `stamp.m4a` | the mill press drops | **heavier than the thud**, with a machine's snap on the front. ~350 ms |
| `tick.m4a` | a lump is picked out | **the smallest thing in the set.** Under 200 ms. A tick, not a note &mdash; and the one cue that does **not** duck the beds, because it fires on every lump in the wall. |
| `hoist.m4a` | the cage moves between layers | **the only cue with travel in it** &mdash; a start, a middle and a stop. 3&ndash;4 s. |

## Specs

| | |
|---|---|
| Format | **AAC `.m4a`**, same reasoning as the voice — or `.webm`/Opus if every device is current |
| Channels | **Mono** |
| Bitrate | **96 kbps** — higher than the voice, because effects have transients and are short |
| Trim | **No leading silence.** The cue fires the instant the hammer lands; 80 ms of head reads as lag. |
| Level | Peak **between −4 and −2 dBFS**, and keep the three impacts within a few dB of each other by RMS. One slider sets all of them, so a 4 dB spread means some are audible and some are not — the `sound` group fails the build over 5 dB. |
| Ceiling | **Never above −1 dBFS after encoding.** AAC reconstructs above the PCM peak: a pass aimed at −1.5 came back at −0.98. The group decodes the buffer and measures it rather than trusting the encoder. |
| Size | ~12 KB per second. The five short cues ≈ **25 KB**; the hoist adds ≈ 50 KB. Negligible. |

**The beds duck under a cue rather than the cue being made louder.** `MF.audio.DUCK` pulls
both beds down ~10 dB for the length of an impact. That is why a 0.4 s hammer can be heard
over a track — no amount of levelling gets a short transient past two continuous beds, and
trying only takes you to the point of clipping. If you add a cue that fires *often*, leave it
out of `DUCK`: a bed that dips constantly is a bed that pumps.

## The two beds

They are separate, on separate buses, with separate sliders, because a room tone and a song
are not the same request.

| | |
|---|---|
| `AMBIENCE_SRC` | the room tone. **Falls back to oscillators** — a mine with no room tone is the thing the fallback exists to prevent. |
| `MUSIC_SRC` | the track. **Falls back to nothing.** You cannot synthesise a song, and a drone arriving where a student turned on "Music" reads as a fault rather than as music. |

Both **loop**, so both must be seamless — a bed that visibly restarts is a bed the student
notices, and the entire point of it is not to be noticed. 60–120 s at 96 kbps mono is ≈ 1 MB.

## One caution about downloaded sound

**The sound currently shipped in `sfx/` is © Epidemic Sound**, used under the author's
subscription. `sfx/SOURCES.md` carries the full note, and the short version is: a subscription
covers *use in content*, and GitHub Pages serves every file in that folder as a standalone
public URL, which is a different thing. Confirm it before publishing.

If you swap in library sound of your own, **check the licence before the site is published.**
Freesound and similar carry a mix of CC0 (no obligation), CC-BY (**requires visible
attribution**) and non-commercial terms. A CC-BY sound needs a credit somewhere on the site,
and a school site is still a publication. Worth five minutes now rather than a takedown later
— and if any of them need crediting on the page itself rather than in the README, say so and
I will put a credits line in the Reading & Access panel, which is where a student would look.

## What happens if a file is wrong

Every failure falls back to the synthesised cue, and each is asserted:

- folder not set → synth
- file missing (404) → synth, and it is not requested again
- format the browser will not decode → synth
- still downloading when the hammer lands → synth for that swing, file from the next

**Adding sound files can never take sound away.**
