/* ============================================================================
   verify-published.js — RUN THIS ON THE LIVE URL, NOT ON YOUR MACHINE.

   WHY IT EXISTS. Every other check on this project runs against the working
   folder, which answers a question about the wrong object. VERIFICATION.md §34
   records what that costs: before the sister site's first upload, all 67 asset
   paths were verified twice — case-exact on disk and again over HTTP, both
   passes sound — and the site still went live completely broken, because
   `assets/` and `content/` had never been committed. Nothing pointed at this
   machine could have caught it.

   So: after publishing, open the GitHub Pages URL, open the browser console,
   paste this whole file in, and press Enter. It re-asserts on the PUBLISHED
   COPY the same things the local checks assert here.

   It prints a denominator for everything and it carries a control that must
   fail. A check that only ever passes is worthless (§2, §41).
   ============================================================================ */
(function () {
  'use strict';
  var out = [], fail = 0;
  function ok(label, cond, detail) {
    out.push((cond ? '  PASS  ' : '  FAIL  ') + label + (detail ? '   [' + detail + ']' : ''));
    if (!cond) fail++;
    return cond;
  }

  console.log('%c Factor Mine — published-copy verification ', 'background:#8F4712;color:#FFF7EA;font-weight:bold');
  console.log('URL under test: ' + location.href);

  /* ---- 1. is this even the right thing, served over http(s)? ---- */
  ok('served over http(s), not file://', /^https?:$/.test(location.protocol), location.protocol);
  ok('MF exists — the script parsed and ran', typeof window.MF === 'object');
  if (typeof window.MF !== 'object') {
    console.log(out.join('\n'));
    console.log('%c STOP: MF is undefined. The page did not boot — check the console above for a parse error, ' +
                'and confirm index.html is at the repository root and Pages is serving that branch.', 'color:#B3261E');
    return;
  }

  /* ---- 2. the site's own instrument, run THERE ---- */
  var v = MF.validate();
  ok('MF.validate() reports zero errors', v.errors === 0, v.errors + ' errors');
  ok('MF.validate() ran a plausible number of checks', v.checked > 1500, v.checked + ' checks');
  ok('both controls failed as required', /failed as required/.test(v.control), v.control);
  console.log('     denominators by group:', v.byGroup);
  if (v.errors) console.warn('     first errors:', v.detail);

  /* ---- 3. self-contained: a Pages deploy must fetch nothing ---- */
  var external = [];
  document.querySelectorAll('script[src], link[href], img[src], iframe[src], source[src]').forEach(function (el) {
    var u = el.getAttribute('src') || el.getAttribute('href');
    if (u && !/^data:/.test(u)) external.push(u);
  });
  ok('no external assets referenced', external.length === 0, external.join(', ') || 'none');
  ok('no storage APIs in use', !/localStorage|sessionStorage|indexedDB/.test(
      Array.prototype.map.call(document.scripts, function (s) { return s.textContent || ''; }).join('')),
     'inline script scanned');

  /* ---- 4. it actually boots into a usable place ----

     A SCREEN THAT MEASURES ITSELF CANNOT BE BUILT IN A DETACHED NODE. The mine
     lays out its scanning face against a real width, and a `div` that is not in
     the document has no layout to read: it rendered 0 characters here while the
     same screen rendered 1,217 attached, and this check called the published
     site broken for it. MF.validate() never had the bug — it builds into an
     off-screen stage that IS in the document. Do the same. */
  var stage = document.createElement('div');
  stage.style.cssText = 'position:absolute; left:-12000px; top:0; width:1100px';
  document.body.appendChild(stage);
  var probeInto = function (s) {
    var probe = document.createElement('div');
    stage.appendChild(probe);
    MF.SCREENS[s](probe);
    return probe;
  };
  /* EVERY SCREEN IN THE REGISTRY, not a list typed out here — a list goes stale
     the moment a room is added, and says PASS while never looking at it. */
  var screens = Object.keys(MF.SCREENS);
  var built = 0, thin = [];
  screens.forEach(function (s) {
    var probe;
    try { probe = probeInto(s); } catch (e) { thin.push(s + ' threw: ' + e.message); return; }
    var len = (probe.textContent || '').trim().length;
    if (len > 300) built++; else thin.push(s + ' rendered only ' + len + ' chars');
  });
  ok('every screen builds with real content', built === screens.length, built + ' of ' + screens.length +
     (thin.length ? ' — ' + thin.join('; ') : ''));

  /* ---- 5. the invariants a student would notice ---- */
  var banned = /(\d+\s*(?:%|percent))|(\b\d+\s*(?:out of|\/)\s*\d+\b)|\b(score|scored|grade|graded|accuracy|rank|ranked|leaderboard|streak)\b/i;
  var hits = [];
  /* THE TEACHER PAGE IS THE ONE SCREEN THIS RULE DOES NOT COVER: it has to say
     "grade" to explain why nothing a student sees ever does. The site names that
     exemption in MF.NOT_FOR_STUDENTS and pins it to exactly that page; honour the
     same list here rather than inventing a second one. */
  var forStudents = typeof MF.forStudents === 'function' ? MF.forStudents : function () { return true; };
  var swept = screens.filter(forStudents);
  swept.forEach(function (s) {
    var probe;
    try { probe = probeInto(s); } catch (e) { return; }
    var m = (probe.textContent || '').match(banned);
    if (m) hits.push(s + ': "' + m[0] + '"');
  });
  ok('nothing has a ceiling, a percentage or a comparison', hits.length === 0,
     hits.join('; ') || swept.length + ' student screens swept, ' + (screens.length - swept.length) + ' exempt');
  stage.remove();

  var gated = 0;
  for (var L = 1; L <= MF.LAYERS.length; L++) {
    var rng = (function (s) { return function () { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; })(777 + L);
    if (MF.digOre(L, rng)) gated++;
  }
  ok('every layer yields ore with no tools forged', gated === MF.LAYERS.length, gated + ' of ' + MF.LAYERS.length + ' layers');

  /* ---- 6. THE CONTROL. This must fail, or nothing above is measuring. ---- */
  var controlCaught = banned.test('you scored 7 out of 10');
  var controlSeam = (MF.smeltPoly(1, -5, 6).kind !== 'twin');   /* it is 'plain' */
  ok('CONTROL — the no-grades rule catches a planted violation', controlCaught);
  ok('CONTROL — a deliberately wrong seam claim is rejected', controlSeam);

  console.log(out.join('\n'));
  console.log(fail === 0
    ? '%c ALL CLEAR on the published copy. ' + v.checked + ' site checks plus ' + out.length + ' deploy checks. '
    : '%c ' + fail + ' FAILURES on the published copy — the live site is not sound. ',
    fail === 0 ? 'background:#1F5C4F;color:#fff;font-weight:bold' : 'background:#B3261E;color:#fff;font-weight:bold');

  return { url: location.href, deployChecks: out.length, deployFailures: fail, siteChecks: v.checked, siteErrors: v.errors };
})();
