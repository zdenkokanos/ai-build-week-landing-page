import { HREF, IMG, IMG_CLIP, IMG_RAIL } from './media'
import type { Copy } from './types'

/* ═══════════════════════════════════════════════════════════
   MĽASK — slovenská verzia landing page.
   ═══════════════════════════════════════════════════════════ */

export const sk: Copy = {
  meta: {
    htmlLang: 'sk',
    title: 'MĽASK — Vyber si recept, nákup dorazí sám',
    description:
      'Odswipuješ, na čo máš dnes chuť. MĽASK poskladá nákup, odpočíta čo už máš doma a zvyšok objedná z donášky. Dostupné na Slovensku.',
  },

  skipLink: 'Preskočiť na obsah',

  nav: {
    ariaLabel: 'Hlavná navigácia',
    links: [
      { href: HREF.how,      label: 'Ako to funguje' },
      { href: HREF.delivery, label: 'Objednávka' },
      { href: HREF.allergy,  label: 'Alergie' },
      { href: HREF.pantry,   label: 'Špajza' },
      { href: HREF.free,     label: 'Zadarmo' },
    ],
    cta: 'Vyskúšať zadarmo',
    openMenu: 'Otvoriť menu',
    closeMenu: 'Zavrieť menu',
    language: 'Jazyk',
  },

  hero: {
    titleLead: 'Vyber si recept.',
    titleGreen: 'Nákup dorazí',
    titleMark: 'sám domov.',
    lede: 'Odswipuješ, na čo máš dnes chuť. MĽASK poskladá nákup, odpočíta čo už máš doma a zvyšok objedná z donášky.',
    ctaPrimary: 'Vyskúšať zadarmo',
    ctaSecondary: 'Ako to funguje',
    scribble: 'začni tu',
    proof: ['Bez karty', 'Suroviny do 40 minút', 'Dostupné na Slovensku'],
  },

  deck: {
    title: 'Na čo máš chuť?',
    ariaLabel: 'Ukážka výberu receptov',
    hintIdle: 'Vľavo nie, vpravo áno.',
    hintLiked: 'Uložené do dnešného výberu.',
    hintSkipped: 'Rozumieme, dnes nie.',
    likes: (n) => `${n} jedál`,
    likesSub: 'v dnešnom výbere',
    cartLabel: 'Košík je pripravený',
    cartPrice: '8,98 €',
    cartMeta: 'Donáška · 25 min',
    pantrySaved: 'Špajza ušetrila 4,80 €',
    stampYes: 'MŇAM',
    stampNo: 'DNES NIE',
    cardCta: 'Objednať ingrediencie',
    skipAria: 'Dnes nie',
    likeAria: 'Mňam',
    dishes: [
      { name: 'Kokosové kuracie curry', time: '32 min', diet: 'bez laktózy',   cuisine: 'ázijská',   pantry: '6 z 9 surovín máš doma',  img: IMG.curry },
      { name: 'Cestoviny cacio e pepe', time: '18 min', diet: 'vegetariánske', cuisine: 'talianska', pantry: '4 z 5 surovín máš doma',  img: IMG.cacio },
      { name: 'Šošovicový guláš',       time: '45 min', diet: 'bez lepku',     cuisine: 'domáca',    pantry: '5 z 8 surovín máš doma',  img: IMG.lentil },
      { name: 'Losos s fenklom',        time: '28 min', diet: 'low carb',      cuisine: 'severská',  pantry: '3 z 7 surovín máš doma',  img: IMG.salmon },
      { name: 'Chilli sin carne',       time: '35 min', diet: 'vegán',         cuisine: 'mexická',   pantry: '6 z 8 surovín máš doma',  img: IMG.chilli },
      { name: 'Kuracie tikka masala',   time: '40 min', diet: 'bez lepku',     cuisine: 'indická',   pantry: '5 z 10 surovín máš doma', img: IMG.tikka },
    ],
  },

  how: {
    eyebrow: 'Ako to funguje',
    titleLead: 'Štyri kroky,',
    titleMark: 'dve minúty',
    lede: 'Kroky sa prepínajú samé — alebo klikni na ktorýkoľvek.',
    tablistAria: 'Kroky',
    steps: [
      { title: 'Povieš, kto si',            body: 'Onboarding za 90 sekúnd: alergie, čas, koľko vás je pri stole.' },
      { title: 'Vyberieš si recept swipom', body: 'Desať kariet, päť sekúnd. AI vyberie jedlá, na ktoré máš dnes chuť.' },
      { title: 'Košík sa naplní sám',       body: 'Odpočítame špajzu, spárujeme suroviny s produktami a porovnáme ceny.' },
      { title: 'Klikneš zaplatiť',          body: 'Kuriér je u teba do 40 minút. Do obchodu si nešiel.' },
    ],
  },

  screens: {
    onboarding: {
      kicker: 'KROK 3 / 4',
      title: 'Koľko času máš vo všedný deň?',
      options: [
        { label: 'Do 15 minút',    note: 'rýchlovky' },
        { label: '20 – 40 minút',  note: '✓' },
        { label: 'Hodina a viac',  note: 'víkend' },
      ],
      chips: ['bez lepku', 'bez orechov', '4 porcie'],
      cta: 'Pokračovať',
    },
    swipe: {
      heading: 'Na čo máš chuť?',
      dish: 'Kokosové curry',
      time: '32 min',
      diet: 'bez laktózy',
      pantry: '6 z 9 surovín doma',
      order: 'Objednať',
      stamp: 'MŇAM',
    },
    basket: {
      heading: 'Nákupný zoznam',
      sub: 'Šošovicový guláš · 4 porcie',
      rows: [
        { name: 'Červená šošovica', right: '250 g' },
        { name: 'Rajčinový pretlak', right: '70 g' },
        { name: 'Cibuľa',            right: 'máš doma', have: true },
        { name: 'Údená paprika',     right: 'máš doma', have: true },
      ],
      compareLabel: 'Porovnanie košíkov',
      cheapest: 'Najlacnejší',
      cheapestPrice: '8,98 €',
      other: 'Ďalšia možnosť',
      otherPrice: '9,60 €',
      cta: 'Zaplatiť a doručiť',
    },
    done: {
      tag: 'Kuriér je pred dverami',
      title: 'Suroviny doručené za 24 minút',
      checks: ['Nákup zapísaný do špajze', 'Postup rozdelený na kroky'],
      cta: 'Začať variť',
    },
  },

  delivery: {
    badge: 'Automatická objednávka',
    titleLead: 'Nákup vybavíme za teba.',
    titleTail: 'Ty len otvoríš dvere.',
    lede: 'Toto je celý rozdiel oproti receptovým appkám: z receptu vieme spraviť hotovú objednávku potravín.',
    list: [
      'Suroviny spárujeme s produktami v obchode',
      'Porovnáme ceny vrátane doručenia',
      'Košík vidíš a upravíš pred platbou',
    ],
    cta: 'Objednať prvý nákup',
    card: {
      title: 'Objednávka na dnes',
      tag: 'v príprave',
      steps: [
        { label: 'Recept vybraný',      meta: 'Kokosové curry' },
        { label: 'Špajza odpočítaná',   meta: '−4,80 €' },
        { label: 'Košík naplnený',      meta: '3 položky' },
        { label: 'Platba a doručenie',  meta: '' },
      ],
      deliveryNote: 'Doručenie 25 minút',
      sum: '8,98 €',
      cta: 'Zaplatiť a doručiť',
    },
  },

  allergens: {
    eyebrow: 'Alergie a intolerancie',
    titleLead: 'Recept sa neškrtá.',
    titleTail: 'Iba sa prepíše.',
    lede: 'Iné appky ti recept pri alergii schovajú. My vymeníme len tú jednu surovinu — a do košíka padne rovno tá náhrada.',
    scribble: 'skús klikať',
    cardLabel: 'Zaškrtni, čo nesmieš jesť:',
    chipsAria: 'Alergény',
    list: [
      { key: 'lepok',   label: 'bez lepku' },
      { key: 'laktoza', label: 'bez laktózy' },
      { key: 'orechy',  label: 'orechy' },
      { key: 'soja',    label: 'sója' },
    ],
    note: (swaps) => {
      if (swaps === 0) return 'Recept je v pôvodnej podobe.'
      if (swaps === 1) return 'Vymenili sme jednu surovinu, chuť aj textúra zostávajú.'
      const noun = swaps < 5 ? 'suroviny' : 'surovín'
      return `Vymenili sme ${swaps} ${noun}, chuť aj textúra zostávajú.`
    },
    miniInfo: [
      {
        title: 'Kontrola pred košíkom',
        body: 'Zloženie každého produktu porovnáme s tvojím profilom pred objednávkou.',
      },
      {
        title: 'Profil domácnosti',
        body: 'Ty bez lepku, partner bez orechov. Jedno jedlo pre všetkých.',
      },
    ],
    recipe: {
      name: 'Smotanové cestoviny s kuracím',
      meta: 'varecha.sk · 25 min · 2 porcie',
      ingredientsLabel: 'SUROVINY',
      cta: 'Objednať suroviny domov',
    },
    ingredients: [
      { name: 'Pšeničné penne',  qty: '250 g',      tag: 'lepok',   alt: 'Kukuričné penne' },
      { name: 'Smotana 33 %',    qty: '200 ml',     tag: 'laktoza', alt: 'Ovsená smotana' },
      { name: 'Parmezán',        qty: '60 g',       tag: 'laktoza', alt: 'Kvasnicové vločky' },
      { name: 'Piniové oriešky', qty: '30 g',       tag: 'orechy',  alt: 'Slnečnicové semienka' },
      { name: 'Sójová omáčka',   qty: '1 PL',       tag: 'soja',    alt: 'Kokosové aminá' },
      { name: 'Kurací prsník',   qty: '300 g',      tag: null },
      { name: 'Cesnak',          qty: '2 strúčiky', tag: null },
    ],
  },

  pantry: {
    eyebrow: 'Špajza',
    title: 'Appka vie, čo máš doma. Kupuješ len to, čo chýba.',
    lede: 'Pripomenieme aj to, čo treba minúť, kým je to dobré.',
    howList: [
      { strong: 'Nakúpiš',      rest: ' — zapíše sa samo. Alebo pridáš ručne či odfotíš nákup.' },
      { strong: 'Uvaríš',       rest: ' — použité gramáže sa odpočítajú.' },
      { strong: 'Ďalší recept', rest: ' — navrhneme taký, čo dojedá zásoby.' },
    ],
    card: {
      title: 'Moja špajza',
      updated: 'aktualizované dnes',
      stock: ['Ryža 1,2 kg', 'Kokosové mlieko 2 ks', 'Cibuľa 4 ks', 'Údená paprika 40 g'],
      more: '+14 ďalších',
      soonName: 'Kurací prsník 500 g',
      soonNote: 'minúť do 2 dní',
      missingLabel: 'CHÝBA NA DNEŠNÝ RECEPT',
      missing: [
        { name: 'Zázvor 100 g',      price: '1,29 €' },
        { name: 'Koriander zväzok',  price: '1,49 €' },
      ],
      suggestText: 'Dnes navrhneme kokosové curry — dojedá kurča aj mlieko.',
      suggestPrice: 'Dokúpiť 2 veci · 2,78 €',
      suggestCta: 'Objednať',
    },
  },

  rail: {
    burstTop: '70 000+',
    burstBottom: 'receptov',
    eyebrow: 'Reálne recepty',
    title: 'Recepty nevymýšľame. Berieme tie, ktoré niekto naozaj uvaril.',
    lede: 'AI číta overené SK a CZ kuchárske weby, recept rozloží na suroviny a gramáže a odkáže na originál. Z každého vieš rovno objednať nákup.',
    ariaLabel: 'Ukážky receptov',
    cardCta: 'Objednať ingrediencie',
    cardGhost: 'Zobraziť recept',
    ctaAll: 'Zobraziť všetky recepty',
    recipes: [
      { name: 'Kuracia bowl misa',    meta: '25 min · vysoký proteín', img: IMG_RAIL.bowl },
      { name: 'Šalát s cícerom',      meta: '15 min · vegán',          img: IMG_RAIL.chickpea },
      { name: 'Losos s fenklom',      meta: '28 min · bez lepku',      img: IMG_RAIL.salmon },
      { name: 'Kuracie tikka masala', meta: '40 min · indická',        img: IMG_RAIL.tikka },
      { name: 'Kokosové curry',       meta: '32 min · bez laktózy',    img: IMG_RAIL.curry },
      { name: 'Cestoviny s pestom',   meta: '20 min · vegetariánske',  img: IMG_RAIL.pesto },
    ],
  },

  testimonials: {
    titleLead: 'Ľudia, ktorí prestali stáť pred',
    titleMark: 'chladničkou',
    quotes: {
      zuzana: { text: '„Celiakia mi z varenia spravila logistiku. Konečne recept, ktorý nemusím prepisovať — a rovno aj nákup.“', initials: 'ZK', name: 'Zuzana K.', meta: 'Bratislava · bez lepku' },
      ivana:  { text: '„Prestala som variť to isté dokola. Swipy mi ukážu aj veci, ktoré by som nikdy nehľadala.“', initials: 'IM', name: 'Ivana M.', meta: 'Trnava · varí pre dvoch' },
      martin: { text: '„Swipujem počas cesty z práce. Kým prídem domov, potraviny sú pred dverami.“', initials: 'MH', name: 'Martin H.', meta: 'Košice · varí každý deň', ink: true },
      peter:  { text: '„Konečne appka, kde nemusím písať nákupný zoznam. Vypíše sa sama.“', initials: 'PŠ', name: 'Peter Š.', meta: 'Prešov · 2 deti' },
      rodina: { text: '„Dvaja dospelí, dve deti, štyri názory. Appka z toho vyrobí jednu večeru a jeden nákup — a nič nevyhodíme.“', initials: 'LP', name: 'Lenka a Peter', meta: 'Žilina · rodina so 4 členmi' },
      katka:  { text: '„Laktóza už nie je problém. Náhrady naozaj chutia rovnako.“', initials: 'KB', name: 'Katka B.', meta: 'Nitra · bez laktózy' },
      tomas:  { text: '„Bývam sám a nakupovanie som nesnášal. Teraz mi príde presne toľko, koľko zjem.“', initials: 'TB', name: 'Tomáš B.', meta: 'Nitra · varí pre jedného' },
    },
    clips: {
      lenka:  { img: IMG_CLIP.lenka,  caption: 'Takto mi príde nákup na celý týždeň',      initials: 'LV', handle: 'lenka.varí' },
      martin: { img: IMG_CLIP.martin, caption: 'Večera vymyslená za 5 sekúnd. Ukazujem ako.', initials: 'MH', handle: 'martin.h' },
      tomas:  { img: IMG_CLIP.tomas,  caption: 'Mesiac bez cesty do obchodu',              initials: 'TB', handle: 'tomas.b' },
      zuzana: { img: IMG_CLIP.zuzana, caption: 'Ako nakupujem podľa receptov',             initials: 'ZK', handle: 'zuzana.k' },
    },
    rating: {
      score: '4,8',
      count: '1 240 recenzií',
    },
  },

  pricing: {
    eyebrow: 'Zadarmo',
    title: 'Vyskúšaj to zadarmo.',
    lede: 'MĽASK je zatiaľ zadarmo — celá appka, bez karty a bez záväzku.',
    scribble: 'zatiaľ zadarmo',
    flag: 'Celá appka',
    planName: 'MĽASK',
    planSub: 'Recept → košík → kuriér.',
    price: 'Zadarmo',
    features: [
      'Neobmedzené swipy',
      'Náhrady alergénov',
      'Špajza a auto-odpočet',
      'Objednávka jedným klikom',
      'Profil domácnosti',
      'Porovnanie cien',
    ],
    cta: 'Prihlásiť sa',
    fine: 'Bez karty. Odhlásiš sa dvomi klikmi.',
  },

  faq: {
    title: 'Časté otázky',
    items: [
      { q: 'Odkiaľ berete recepty?',                    a: 'Z overených slovenských a českých kuchárskych webov. AI ich len číta a rozkladá na suroviny, gramáže a postup — nevymýšľa jedlá. Pri každom recepte je odkaz na originál a jeho autora.' },
      { q: 'Ako funguje automatická objednávka?',       a: 'Každú surovinu spárujeme s konkrétnym produktom v sortimente donáškovej služby, odpočítame špajzu a naplníme košík. Ty potvrdíš platbu a objednávku ti doručí kuriér až domov.' },
      { q: 'Ako viem, že náhrada pri alergii funguje?', a: 'Náhrady vyberáme podľa kuchárskej funkcie suroviny — či viaže, zahusťuje alebo dodáva tuk — a overujeme ich spätnou väzbou od ľudí, ktorí recept naozaj uvarili.' },
      { q: 'Musím používať donáškovú službu?',          a: 'Nie. Aj bez nej dostaneš hotový nákupný zoznam do obchodu. Automatický košík je pohodlie navyše, nie podmienka.' },
      { q: 'Musím špajzu vypĺňať ručne?',               a: 'Nie. Nákup cez MĽASK sa zapíše sám a suroviny sa odpočítajú, keď recept označíš ako uvarený.' },
      { q: 'Koľko to stojí?',                           a: 'Zatiaľ nič. Kým appku dokončujeme, máš ju celú zadarmo a bez karty — stačí sa prihlásiť. O cenníku dáme vedieť s dostatočným predstihom.' },
    ],
  },

  waitlist: {
    badge: 'Spustenie jeseň 2026 · Slovensko',
    titleLine1: 'Dnes večer už vieš,',
    titleLine2: 'čo varíš. A nemusíš',
    titleMark: 'nikam ísť.',
    lede: 'Prihlás sa a začni používať MĽASK — zatiaľ zadarmo.',
    cta: 'Prihlásiť sa',
    fine: ['Bez karty', 'Odhlásiš sa dvomi klikmi', '4,8 ★ od 1 240 ľudí'],
    artChipLabel: 'Košík doručíme za',
    artChipValue: '25 minút',
    artChipLime: '3 recepty · 1 nákup',
  },

  footer: {
    blurb:
      'Pre ľudí, ktorí radi varia, ale nechcú každý deň vymýšľať čo — a chodiť pre to do obchodu.',
    columns: [
      {
        title: 'Produkt',
        links: [
          { href: HREF.how,      label: 'Ako to funguje' },
          { href: HREF.delivery, label: 'Objednávka' },
          { href: HREF.allergy,  label: 'Alergie' },
          { href: HREF.free,     label: 'Zadarmo' },
        ],
      },
      {
        title: 'Firma',
        links: [
          { href: HREF.top,     label: 'O nás' },
          { href: HREF.recipes, label: 'Zdroje receptov' },
          { href: HREF.faq,     label: 'Kontakt' },
        ],
      },
      {
        title: 'Právne',
        links: [
          { href: HREF.privacy, label: 'Ochrana údajov' },
          { href: HREF.terms,   label: 'Podmienky' },
          /* Cookies are a section of the privacy policy, not a document of their own. */
          { href: HREF.privacy, label: 'Cookies' },
        ],
      },
    ],
    copyright: '© 2026 MĽASK · Bratislava',
    note: 'Recepty patria ich autorom. Vždy odkazujeme na originál.',
  },
}
