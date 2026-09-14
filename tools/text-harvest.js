/* tools/text-harvest.js — every string the site puts in front of a student.

   WHY IT EXISTS. Moving ~1,700 English strings into language tables is only
   safe if the English a student sees afterwards is exactly what they saw
   before. This loads a copy of the page into a hidden frame, hooks every way
   text reaches the DOM before the site's own script runs, pins Math.random so
   both copies dig the same ore, enters the operation, drives MF.validate()
   and MF.playthrough(1..9), and returns the set of strings that appeared.

   USE, on http://localhost:8777/index.html (never shipped; tools/ only):

     await (await fetch('tools/text-harvest.js')).text().then(eval)
     await MFHarvest.saveBaseline()   // BEFORE editing: stores today's index.html
     await MFHarvest.compare()        // AFTER editing: old vs new, string by string
     await MFHarvest.english()        // a stand-in language on: what is still English

   READ THE DENOMINATOR. It sees text set through textContent, innerHTML,
   innerText, nodeValue, insertAdjacentHTML, createTextNode, the title
   property and the aria-label / title / placeholder / alt attributes, on
   every state validate and the playthroughs reach, plus the static markup
   and MF.voiceLines(). It does not see text on a path neither of those
   drives, and it does not see pixels. */
window.MFHarvest = (function(){

  function prelude(){
    /* THE ORE IS SEEDED FROM THE CLOCK, NOT FROM Math.random. `MF.state.rng` is
       makeRng(Date.now() ^ ...), and it is the first Date.now() the script
       makes. Pin that one call and leave the clock real afterwards, so the
       day cycle and every timer still run. Pinning Math.random alone left two
       harvests of the same file 420 expressions apart. */
    /* SILENT. A harvest drives every hammer, pour and stamp in the site, twice,
       and the user heard all of it. Every audio context is born suspended and
       cannot resume, and no media element makes a sound. Text is untouched:
       the old and new copies are silenced identically. */
    ['AudioContext','webkitAudioContext'].forEach(function(n){
      var AC = window[n];
      if(!AC) return;
      window[n] = function(){ var c = new AC(); try { c.suspend(); } catch(e){} c.resume = function(){ return Promise.resolve(); }; return c; };
      window[n].prototype = AC.prototype;
    });
    var mplay = HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play = function(){ this.muted = true; this.volume = 0; return mplay.call(this); };
    if(window.speechSynthesis) window.speechSynthesis.speak = function(){};
    var realNow = Date.now, firstNow = true;
    Date.now = function(){ if(firstNow){ firstNow = false; return 1700000000000; } return realNow.call(Date); };
    var s = 42;
    Math.random = function(){
      s = s + 0x6D2B79F5 | 0;
      var t = Math.imul(s ^ s >>> 15, 1 | s);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
    var seen = Object.create(null), out = [];
    var H = window.__harvest = { out: out, on: true, add: function(v){
      if(v == null) return;
      v = String(v);
      if(!/[A-Za-zÀ-￿]{2}/.test(v)) return;
      if(!seen[v]){ seen[v] = 1; out.push(v); }
    }};
    function hookSetter(proto, prop, tag){
      var d = Object.getOwnPropertyDescriptor(proto, prop);
      if(!d || !d.set) return;
      Object.defineProperty(proto, prop, { configurable: true, enumerable: d.enumerable, get: d.get,
        set: function(v){ if(H.on) H.add(tag ? tag + '=' + v : v); d.set.call(this, v); } });
    }
    hookSetter(Node.prototype, 'textContent');
    hookSetter(Node.prototype, 'nodeValue');
    hookSetter(Element.prototype, 'innerHTML');
    hookSetter(HTMLElement.prototype, 'innerText');
    hookSetter(HTMLElement.prototype, 'title', 'title');
    var ctn = Document.prototype.createTextNode;
    Document.prototype.createTextNode = function(v){ if(H.on) H.add(v); return ctn.call(this, v); };
    var iah = Element.prototype.insertAdjacentHTML;
    Element.prototype.insertAdjacentHTML = function(p, v){ if(H.on) H.add(v); return iah.call(this, p, v); };
    var sa = Element.prototype.setAttribute;
    var ATTR = /^(aria-label|aria-description|title|placeholder|alt)$/;
    Element.prototype.setAttribute = function(k, v){
      if(H.on && ATTR.test(k)) H.add(k + '=' + v);
      return sa.call(this, k, v);
    };
  }

  function walk(root, add){
    var tw = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    for(var n = tw.currentNode; n; n = tw.nextNode()){
      if(n.nodeType === 3){
        if(n.parentNode && /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)) continue;
        add(n.nodeValue);
      } else {
        ['aria-label','aria-description','title','placeholder','alt'].forEach(function(k){
          if(n.hasAttribute && n.hasAttribute(k)) add(k + '=' + n.getAttribute(k));
        });
      }
    }
  }

  function wait(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }

  async function harvest(html, opts){
    opts = opts || {};
    var f = document.createElement('iframe');
    f.style.cssText = 'position:fixed; left:-20000px; top:0; border:0; width:' +
      (opts.width || 1250) + 'px; height:' + (opts.height || 900) + 'px';
    f.srcdoc = html.replace(/<head>/i, '<head><script>(' + prelude.toString() + ')();<\/script>');
    var loaded = new Promise(function(r){ f.onload = r; });
    document.body.appendChild(f);
    await loaded;
    try {
      var w = f.contentWindow, d = w.document;
      if(opts.pseudo){
        /* A STAND-IN LANGUAGE. Every English string comes back wrapped in ⟦ ⟧, so
           anything a student sees with English outside the brackets was never
           routed through MF.t. A {placeholder} is filled inside the brackets, and
           whatever fills it carries brackets of its own. NOT 'zz': the lang
           group's control builds and deletes a 'zz', and took this with it. */
        var en = w.MF.STR.en, ps = {};
        Object.keys(en).forEach(function(k){ ps[k] = '⟦' + en[k] + '⟧'; });
        w.MF.LANG.xps = {nm:'pseudo', dir:'ltr', speech:'en', stop:'. '};
        w.MF.STR.xps = ps;
        w.MF.state.access.lang = 'xps';
        w.MF.applyAccess();
      }
      var btn = d.getElementById('enter-btn');
      for(var i = 0; i < 60 && btn && w.getComputedStyle(btn).display === 'none'; i++) await wait(250);
      if(btn) btn.click();
      await wait(1500);
      var H = w.__harvest, MF = w.MF;
      var v = MF.validate();
      for(var L = 1; L <= 9; L++){
        try { MF.playthrough(L); } catch(e){ H.add('PLAYTHROUGH ' + L + ' THREW: ' + e.message); }
      }
      (MF.voiceLines ? MF.voiceLines() : []).forEach(function(l){ H.add(l && l.text); });
      walk(d.documentElement, H.add);
      H.on = false;
      return { errors: v.errors, detail: v.detail, checked: v.checked, strings: H.out.slice().sort() };
    } finally {
      f.remove();
    }
  }

  function db(){
    return new Promise(function(res, rej){
      var r = indexedDB.open('mf-harvest', 1);
      r.onupgradeneeded = function(){ r.result.createObjectStore('kv'); };
      r.onsuccess = function(){ res(r.result); };
      r.onerror = function(){ rej(r.error); };
    });
  }
  async function put(k, v){
    var d = await db();
    return new Promise(function(res, rej){
      var t = d.transaction('kv', 'readwrite'); t.objectStore('kv').put(v, k);
      t.oncomplete = function(){ res(true); }; t.onerror = function(){ rej(t.error); };
    });
  }
  async function get(k){
    var d = await db();
    return new Promise(function(res, rej){
      var r = d.transaction('kv').objectStore('kv').get(k);
      r.onsuccess = function(){ res(r.result); }; r.onerror = function(){ rej(r.error); };
    });
  }
  async function current(){
    return (await fetch('index.html', { cache: 'no-store' })).text();
  }

  function diff(a, b){
    var A = new Set(a.strings), B = new Set(b.strings);
    return { onlyOld: a.strings.filter(function(s){ return !B.has(s); }),
             onlyNew: b.strings.filter(function(s){ return !A.has(s); }) };
  }

  /* What is left of a string once every bracketed stretch, tag, entity and
     attribute prefix is taken out. Brackets nest when a template is filled with
     other strings, so they are stripped from the inside out. A string whose
     markup became several text nodes arrives in pieces, so once every pair is
     gone what is left is unmatched: all of it before the last ⟧ and after the
     first ⟦ was inside a bracket. */
  function outside(s){
    var t = String(s).replace(/^(aria-label|aria-description|title|placeholder|alt)=/, ''), prev;
    do { prev = t; t = t.replace(/⟦[^⟦⟧]*⟧/g, ' '); } while(t !== prev);
    t = t.replace(/^[\s\S]*⟧/, ' ').replace(/⟦[\s\S]*$/, ' ');
    return t.replace(/<[^>]*>/g, ' ').replace(/&[#\w]+;/g, ' ');
  }

  return {
    harvest: harvest,
    diff: diff,
    outside: outside,
    /* English still on screen with the stand-in language on: the strings with a
       run of three or more letters outside every bracket. Not a proof of
       absence - read the denominator in the header. */
    english: async function(opts){
      opts = Object.assign({}, opts || {}, {pseudo: true});
      var h = await harvest(await current(), opts);
      /* A text node wholly inside a <b> or <span> of a translated string has no
         bracket of its own; it is not a leftover if a bracketed string holds it. */
      var wrapped = h.strings.filter(function(s){ return s.indexOf('⟦') >= 0; });
      var held = function(s){
        var core = s.replace(/^(aria-label|aria-description|title|placeholder|alt)=/, '').trim();
        return core.length > 0 && wrapped.some(function(x){ return x !== s && x.indexOf(core) >= 0; });
      };
      var left = h.strings.filter(function(s){ return /[A-Za-z]{3,}/.test(outside(s)) && !held(s); });
      return { strings: h.strings.length, english: left.length, errors: h.errors,
               sample: left.slice(0, opts.limit || 80) };
    },
    saveBaseline: async function(){ var t = await current(); await put('baseline', t); return t.length; },
    baseline: function(){ return get('baseline'); },
    compare: async function(opts){
      var old = await get('baseline');
      if(!old) throw new Error('no baseline saved - run MFHarvest.saveBaseline() before editing');
      var a = await harvest(old, opts), b = await harvest(await current(), opts);
      var d = diff(a, b);
      return { old: a.strings.length, now: b.strings.length,
               oldErrors: a.errors, nowErrors: b.errors, nowDetail: b.detail,
               identical: d.onlyOld.length === 0 && d.onlyNew.length === 0,
               onlyOld: d.onlyOld.slice(0, 40), onlyNew: d.onlyNew.slice(0, 40),
               nOnlyOld: d.onlyOld.length, nOnlyNew: d.onlyNew.length };
    }
  };
})();
