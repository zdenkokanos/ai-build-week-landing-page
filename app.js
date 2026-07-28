/* ═══════════════════════════════════════════════════════════
   MĽASK — landing page behaviour
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls)  n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* Runs `fn` on an interval that only ticks while `node` is on screen. */
  function visibleInterval(node, ms, fn) {
    var id = null, done = false;
    // `stop()` is final: once the visitor takes over, coming back into view
    // must not hand control back to the autoplay.
    var start = function () { if (id === null && !done) id = setInterval(fn, ms); };
    var stop  = function () { done = true; if (id !== null) { clearInterval(id); id = null; } };
    var pause = function () { if (id !== null) { clearInterval(id); id = null; } };

    if (!('IntersectionObserver' in window)) { start(); }
    else {
      new IntersectionObserver(function (entries) {
        entries[0].isIntersecting ? start() : pause();
      }, { threshold: 0.25 }).observe(node);
    }

    document.addEventListener('visibilitychange', function () {
      document.hidden ? pause() : start();
    });

    return { start: start, stop: stop, restart: function () { pause(); start(); } };
  }

  /* ══ DATA ══════════════════════════════════════════════ */

  var BASE_DISHES = [
    { name: 'Kokosové kuracie curry', time: '32 min', diet: 'bez laktózy',   cuisine: 'ázijská',  pantry: '6 z 9 surovín máš doma',  img: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=70' },
    { name: 'Cestoviny cacio e pepe', time: '18 min', diet: 'vegetariánske', cuisine: 'talianska', pantry: '4 z 5 surovín máš doma',  img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=70' },
    { name: 'Šošovicový guláš',       time: '45 min', diet: 'bez lepku',     cuisine: 'domáca',    pantry: '5 z 8 surovín máš doma',  img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=70' },
    { name: 'Losos s fenklom',        time: '28 min', diet: 'low carb',      cuisine: 'severská',  pantry: '3 z 7 surovín máš doma',  img: 'https://images.unsplash.com/photo-1560717845-968823efbee1?w=800&q=70' },
    { name: 'Chilli sin carne',       time: '35 min', diet: 'vegán',         cuisine: 'mexická',   pantry: '6 z 8 surovín máš doma',  img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=70' },
    { name: 'Kuracie tikka masala',   time: '40 min', diet: 'bez lepku',     cuisine: 'indická',   pantry: '5 z 10 surovín máš doma', img: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=800&q=70' }
  ];

  var RECIPES = [
    { name: 'Kuracia bowl misa',    meta: '25 min · vysoký proteín', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=70' },
    { name: 'Šalát s cícerom',      meta: '15 min · vegán',          img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=70' },
    { name: 'Losos s fenklom',      meta: '28 min · bez lepku',      img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=70' },
    { name: 'Kuracie tikka masala', meta: '40 min · indická',        img: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=70' },
    { name: 'Kokosové curry',       meta: '32 min · bez laktózy',    img: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=70' },
    { name: 'Cestoviny s pestom',   meta: '20 min · vegetariánske',  img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=70' }
  ];

  var STEPS = [
    { title: 'Povieš, kto si',              body: 'Onboarding za 90 sekúnd: alergie, čas, koľko vás je pri stole.' },
    { title: 'Vyberieš si recept swipom',   body: 'Desať kariet, päť sekúnd. AI vyberie jedlá, na ktoré máš dnes chuť.' },
    { title: 'Košík sa naplní sám',         body: 'Odpočítame špajzu, spárujeme suroviny s produktami a porovnáme ceny.' },
    { title: 'Klikneš zaplatiť',            body: 'Kuriér je u teba do 40 minút. Do obchodu si nešiel.' }
  ];

  var ALLERGENS = [
    { key: 'lepok',   label: 'bez lepku' },
    { key: 'laktoza', label: 'bez laktózy' },
    { key: 'orechy',  label: 'orechy' },
    { key: 'soja',    label: 'sója' }
  ];

  var INGREDIENTS = [
    { name: 'Pšeničné penne',  qty: '250 g',      tag: 'lepok',   alt: 'Kukuričné penne' },
    { name: 'Smotana 33 %',    qty: '200 ml',     tag: 'laktoza', alt: 'Ovsená smotana' },
    { name: 'Parmezán',        qty: '60 g',       tag: 'laktoza', alt: 'Kvasnicové vločky' },
    { name: 'Piniové oriešky', qty: '30 g',       tag: 'orechy',  alt: 'Slnečnicové semienka' },
    { name: 'Sójová omáčka',   qty: '1 PL',       tag: 'soja',    alt: 'Kokosové aminá' },
    { name: 'Kurací prsník',   qty: '300 g',      tag: null },
    { name: 'Cesnak',          qty: '2 strúčiky', tag: null }
  ];

  var FAQ = [
    { q: 'Odkiaľ berete recepty?',                    a: 'Z overených slovenských a českých kuchárskych webov. AI ich len číta a rozkladá na suroviny, gramáže a postup — nevymýšľa jedlá. Pri každom recepte je odkaz na originál a jeho autora.' },
    { q: 'Ako funguje automatická objednávka?',       a: 'Každú surovinu spárujeme s konkrétnym produktom v sortimente donáškovej služby, odpočítame špajzu a naplníme košík. Ty potvrdíš platbu, objednávku doručí kuriér Woltu, Bolt Food alebo Košíka.' },
    { q: 'Ako viem, že náhrada pri alergii funguje?', a: 'Náhrady vyberáme podľa kuchárskej funkcie suroviny — či viaže, zahusťuje alebo dodáva tuk — a overujeme ich spätnou väzbou od ľudí, ktorí recept naozaj uvarili.' },
    { q: 'Musím používať donáškovú službu?',          a: 'Nie. V Základe dostaneš nákupný zoznam do obchodu. Automatický košík je pohodlie navyše, nie podmienka.' },
    { q: 'Musím špajzu vypĺňať ručne?',               a: 'Nie. Nákup cez MĽASK sa zapíše sám a suroviny sa odpočítajú, keď recept označíš ako uvarený.' },
    { q: 'Čo ak mi appka nesadne?',                   a: '14 dní máš Pro zadarmo a bez karty. Skúšobná verzia jednoducho skončí a nič sa ti nestrhne.' }
  ];

  /* ══ SWIPE DECK ════════════════════════════════════════ */

  function initDeck() {
    var deckEl = $('#deck');
    if (!deckEl) return;

    var counterEl = $('#deck-counter');
    var hintEl    = $('#deck-hint');

    var dishes = [];
    for (var r = 0; r < 3; r++) dishes = dishes.concat(BASE_DISHES);

    var state = { idx: 0, liked: 0, exiting: false, lastDir: 1, drag: 0 };
    var exitTimer = null;
    var auto;

    // build the cards once — only their transforms change afterwards
    var nodes = dishes.map(function (d) {
      var card = el('div', 'card');

      var img = el('div', 'card__img');
      img.style.backgroundImage = 'url(' + d.img + ')';

      var tags = el('div', 'card__tags');
      tags.appendChild(el('span', 'tag tag--white', d.time));
      tags.appendChild(el('span', 'tag tag--lime',  d.diet));
      tags.appendChild(el('span', 'tag tag--soft',  d.cuisine));
      img.appendChild(tags);

      var stamp = el('span', 'stamp stamp--green', 'MŇAM');
      stamp.style.opacity = '0';
      img.appendChild(stamp);

      var body = el('div', 'card__body');
      body.appendChild(el('span', 'card__name', d.name));
      body.appendChild(el('div', 'card__cta', 'Objednať ingrediencie'));
      body.appendChild(el('div', 'card__pantry', d.pantry));

      card.appendChild(img);
      card.appendChild(body);
      card.setAttribute('aria-hidden', 'true');
      deckEl.appendChild(card);

      return { card: card, stamp: stamp };
    });

    function fling() {
      return 'translate(' + (state.lastDir * 480) + 'px, 40px) rotate(' + (state.lastDir * 15) + 'deg)';
    }

    function render() {
      var liked = state.lastDir === 1;

      nodes.forEach(function (n, i) {
        var rel = i - state.idx;
        var s   = n.card.style;
        var transform = 'none', opacity = 0, z = 1, transition = 'none',
            vis = 'hidden', stampOpacity = 0;

        if (rel === -1) {
          transform = fling(); z = 12; vis = 'visible'; stampOpacity = 1;
        } else if (rel === 0 && state.exiting) {
          transform = fling(); z = 12; vis = 'visible'; stampOpacity = 1;
          transition = 'transform .56s cubic-bezier(.3,.7,.3,1), opacity .5s ease .1s';
        } else if (rel >= 0 && rel <= 2) {
          // Every queued card rests in the front card's exact spot, hidden behind it.
          // Promotion is therefore invisible — no shifting, no opacity step.
          if (rel === 0 && state.drag) {
            transform = 'translate(' + state.drag + 'px, ' + Math.abs(state.drag) * 0.06 + 'px) rotate(' + state.drag * 0.05 + 'deg)';
            stampOpacity = Math.min(Math.abs(state.drag) / 90, 1);
          }
          opacity = 1;
          z = 10 - rel; vis = 'visible';
        }

        s.transform  = transform;
        s.opacity    = opacity;
        s.zIndex     = z;
        s.transition = transition;
        s.visibility = vis;

        if (rel === 0 && state.drag) {
          var right = state.drag > 0;
          n.stamp.textContent = right ? 'MŇAM' : 'DNES NIE';
          n.stamp.className   = 'stamp ' + (right ? 'stamp--green' : 'stamp--orange');
        } else {
          n.stamp.textContent = liked ? 'MŇAM' : 'DNES NIE';
          n.stamp.className   = 'stamp ' + (liked ? 'stamp--green' : 'stamp--orange');
        }
        n.stamp.style.opacity = stampOpacity;
      });

      counterEl.textContent = state.liked + ' jedál';
    }

    function swipe(liked) {
      if (state.exiting) return;
      state.exiting = true;
      state.lastDir = liked ? 1 : -1;
      state.drag    = 0;
      hintEl.textContent = liked ? 'Uložené do dnešného výberu.' : 'Rozumieme, dnes nie.';
      render();

      exitTimer = setTimeout(function () {
        var next = state.idx + 1;
        state.idx     = next >= dishes.length - 3 ? 0 : next;
        state.liked   = liked ? state.liked + 1 : state.liked;
        state.exiting = false;
        render();
      }, reduceMotion ? 60 : 560);
    }

    /* buttons — a manual choice stops the autoplay for good, as in the design */
    $('#btn-like').addEventListener('click', function () { auto.stop(); swipe(true); });
    $('#btn-skip').addEventListener('click', function () { auto.stop(); swipe(false); });

    /* pointer drag */
    var dragging = false, startX = 0, pointerId = null;

    deckEl.addEventListener('pointerdown', function (e) {
      if (state.exiting) return;
      dragging = true; startX = e.clientX; pointerId = e.pointerId;
      deckEl.setPointerCapture(pointerId);
    });

    deckEl.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      state.drag = e.clientX - startX;
      render();
    });

    function endDrag() {
      if (!dragging) return;
      dragging = false;
      var dx = state.drag;
      state.drag = 0;
      if (Math.abs(dx) > 70) { auto.stop(); swipe(dx > 0); }
      else render();
    }

    deckEl.addEventListener('pointerup', endDrag);
    deckEl.addEventListener('pointercancel', endDrag);

    render();

    auto = visibleInterval(deckEl, 3400, function () { swipe(Math.random() > 0.4); });
    if (!reduceMotion) auto.start();

    window.addEventListener('pagehide', function () { clearTimeout(exitTimer); auto.stop(); });
  }

  /* ══ STEPS ═════════════════════════════════════════════ */

  function initSteps() {
    var list = $('#steps-list');
    if (!list) return;

    var current = 0;
    var auto;

    var buttons = STEPS.map(function (st, i) {
      var b = el('button', 'step');
      b.type = 'button';
      b.id = 'step-' + i;
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-controls', 'scr-' + i);

      b.appendChild(el('span', 'step__n', String(i + 1)));

      var main = el('span', 'step__main');
      main.appendChild(el('span', 'step__title', st.title));
      main.appendChild(el('span', 'step__body',  st.body));

      var track = el('span', 'step__track');
      track.appendChild(el('span', 'step__fill'));
      main.appendChild(track);

      b.appendChild(main);
      b.addEventListener('click', function () { select(i); auto.restart(); });

      list.appendChild(b);
      return b;
    });

    var screens = STEPS.map(function (_, i) { return $('#scr-' + i); });

    function select(i) {
      current = i;
      buttons.forEach(function (b, n) {
        var on = n === i;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
        b.tabIndex = on ? 0 : -1;
        if (on) {
          // restart the progress bar animation
          var fillOld = b.querySelector('.step__fill');
          var fillNew = fillOld.cloneNode(false);
          fillOld.parentNode.replaceChild(fillNew, fillOld);
        }
      });
      screens.forEach(function (s, n) { if (s) s.classList.toggle('is-on', n === i); });
    }

    list.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1
            : e.key === 'ArrowUp'   || e.key === 'ArrowLeft'  ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var next = (current + d + STEPS.length) % STEPS.length;
      select(next);
      buttons[next].focus();
      auto.restart();
    });

    select(0);
    auto = visibleInterval(list, 5000, function () { select((current + 1) % STEPS.length); });
    if (!reduceMotion) auto.start();
  }

  /* ══ ALLERGENS + INGREDIENT SWAPS ══════════════════════ */

  function initAllergens() {
    var wrap = $('#allergens');
    var ingWrap = $('#ingredients');
    if (!wrap || !ingWrap) return;

    var countEl = $('#swap-count');
    var noteEl  = $('#swap-note');
    var diet = { lepok: true, laktoza: false, orechy: false, soja: false };

    var chips = ALLERGENS.map(function (a) {
      var b = el('button', 'allergen');
      b.type = 'button';
      b.appendChild(el('span', 'allergen__box'));
      b.appendChild(document.createTextNode(a.label));
      b.addEventListener('click', function () { diet[a.key] = !diet[a.key]; render(); });
      wrap.appendChild(b);
      return { key: a.key, node: b, box: b.querySelector('.allergen__box') };
    });

    var rows = INGREDIENTS.map(function (ing) {
      var row = el('div', 'ing');
      row.appendChild(el('span', 'ing__name', ing.name));
      row.appendChild(el('span', 'ing__right', ing.qty));
      ingWrap.appendChild(row);
      return { data: ing, node: row, right: row.querySelector('.ing__right') };
    });

    function render() {
      chips.forEach(function (c) {
        var on = !!diet[c.key];
        c.node.classList.toggle('is-on', on);
        c.node.setAttribute('aria-pressed', on ? 'true' : 'false');
        c.box.textContent = on ? '✓' : '';
      });

      var swaps = 0;
      rows.forEach(function (r) {
        var swapped = !!(r.data.tag && diet[r.data.tag]);
        if (swapped) swaps++;
        r.node.classList.toggle('is-swapped', swapped);
        r.right.textContent = swapped ? '→ ' + r.data.alt : r.data.qty;
      });

      countEl.textContent = swaps === 0 ? '0' : swaps + '×';
      noteEl.textContent = swaps === 0
        ? 'Recept je v pôvodnej podobe.'
        : (swaps === 1 ? 'Vymenili sme jednu surovinu'
                       : 'Vymenili sme ' + swaps + ' suroviny') + ', chuť aj textúra zostávajú.';
    }

    render();
  }

  /* ══ RECIPE RAIL ═══════════════════════════════════════ */

  function initRail() {
    var rail = $('#rail');
    if (!rail) return;

    // duplicated once so the -50% keyframe loops seamlessly
    RECIPES.concat(RECIPES).forEach(function (r, i) {
      var card = el('div', 'rcard');
      if (i >= RECIPES.length) card.setAttribute('aria-hidden', 'true');

      var img = el('div', 'rcard__img');
      img.style.backgroundImage = 'url(' + r.img + ')';

      var body = el('div', 'rcard__body');
      var head = el('div');
      head.appendChild(el('div', 'rcard__name', r.name));
      head.appendChild(el('div', 'rcard__meta', r.meta));

      var actions = el('div', 'rcard__actions');
      var primary = el('a', 'rcard__primary', 'Objednať ingrediencie');
      primary.href = '#waitlist';
      var ghost = el('a', 'rcard__ghost', 'Zobraziť recept');
      ghost.href = '#waitlist';
      actions.appendChild(primary);
      actions.appendChild(ghost);

      body.appendChild(head);
      body.appendChild(actions);
      card.appendChild(img);
      card.appendChild(body);
      rail.appendChild(card);
    });
  }

  /* ══ FAQ ═══════════════════════════════════════════════ */

  function initFaq() {
    var wrap = $('#faq-list');
    if (!wrap) return;

    var open = 0;

    var items = FAQ.map(function (f, i) {
      var item = el('div', 'faq__item');

      var q = el('button', 'faq__q');
      q.type = 'button';
      q.id = 'faq-q-' + i;
      q.setAttribute('aria-controls', 'faq-a-' + i);
      q.appendChild(el('span', null, f.q));
      var sign = el('span', 'faq__sign', '+');
      q.appendChild(sign);

      var a = el('p', 'faq__a', f.a);
      a.id = 'faq-a-' + i;
      a.setAttribute('role', 'region');
      a.setAttribute('aria-labelledby', 'faq-q-' + i);

      q.addEventListener('click', function () { open = open === i ? -1 : i; render(); });

      item.appendChild(q);
      item.appendChild(a);
      wrap.appendChild(item);

      return { q: q, a: a, sign: sign };
    });

    function render() {
      items.forEach(function (it, i) {
        var on = open === i;
        it.a.hidden = !on;
        it.sign.textContent = on ? '−' : '+';
        it.q.setAttribute('aria-expanded', on ? 'true' : 'false');
      });
    }

    render();
  }

  /* ══ PRICING ═══════════════════════════════════════════ */

  function initPricing() {
    var monthly = $('#bill-monthly');
    var annual  = $('#bill-annual');
    if (!monthly || !annual) return;

    var priceEl  = $('#pro-price');
    var periodEl = $('#pro-period');
    var isAnnual = true;

    function render() {
      monthly.classList.toggle('is-on', !isAnnual);
      annual.classList.toggle('is-on', isAnnual);
      monthly.setAttribute('aria-pressed', String(!isAnnual));
      annual.setAttribute('aria-pressed', String(isAnnual));
      priceEl.textContent  = isAnnual ? '5,90 €' : '7,40 €';
      periodEl.textContent = isAnnual ? '/ mesiac, platené ročne' : '/ mesiac';
    }

    monthly.addEventListener('click', function () { isAnnual = false; render(); });
    annual.addEventListener('click',  function () { isAnnual = true;  render(); });
    render();
  }

  /* ══ MOBILE NAV ════════════════════════════════════════ */

  function initNav() {
    var burger = $('#burger');
    var nav    = $('#primary-nav');
    if (!burger || !nav) return;

    function close() {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Otvoriť menu');
    }

    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Zavrieť menu' : 'Otvoriť menu');
    });

    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ══ SIGNUP ════════════════════════════════════════════ */

  function initSignup() {
    var form = $('#signup');
    if (!form) return;

    var input = $('#email');
    var msg   = $('#signup-msg');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = input.value.trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

      msg.classList.toggle('is-error', !valid);
      if (!valid) {
        msg.textContent = 'Skontroluj e-mailovú adresu.';
        input.focus();
        return;
      }

      // No backend yet — the form confirms locally and keeps the address for wiring up later.
      msg.textContent = 'Sme dohodnutí. Ozveme sa na ' + value + '.';
      form.reset();
    });
  }

  /* ══ BOOT ══════════════════════════════════════════════ */

  function boot() {
    initNav();
    initDeck();
    initSteps();
    initAllergens();
    initRail();
    initFaq();
    initPricing();
    initSignup();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();
})();
