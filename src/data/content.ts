/* ═══════════════════════════════════════════════════════════
   MĽASK — content of the landing page
   Copy lives here so components stay markup-only.
   ═══════════════════════════════════════════════════════════ */

export type Dish = {
  name: string
  time: string
  diet: string
  cuisine: string
  pantry: string
  img: string
}

export const BASE_DISHES: Dish[] = [
  { name: 'Kokosové kuracie curry', time: '32 min', diet: 'bez laktózy',   cuisine: 'ázijská',   pantry: '6 z 9 surovín máš doma',  img: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=70' },
  { name: 'Cestoviny cacio e pepe', time: '18 min', diet: 'vegetariánske', cuisine: 'talianska', pantry: '4 z 5 surovín máš doma',  img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=70' },
  { name: 'Šošovicový guláš',       time: '45 min', diet: 'bez lepku',     cuisine: 'domáca',    pantry: '5 z 8 surovín máš doma',  img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=70' },
  { name: 'Losos s fenklom',        time: '28 min', diet: 'low carb',      cuisine: 'severská',  pantry: '3 z 7 surovín máš doma',  img: 'https://images.unsplash.com/photo-1560717845-968823efbee1?w=800&q=70' },
  { name: 'Chilli sin carne',       time: '35 min', diet: 'vegán',         cuisine: 'mexická',   pantry: '6 z 8 surovín máš doma',  img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=70' },
  { name: 'Kuracie tikka masala',   time: '40 min', diet: 'bez lepku',     cuisine: 'indická',   pantry: '5 z 10 surovín máš doma', img: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=800&q=70' },
]

export type Recipe = { name: string; meta: string; img: string }

export const RECIPES: Recipe[] = [
  { name: 'Kuracia bowl misa',    meta: '25 min · vysoký proteín', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=70' },
  { name: 'Šalát s cícerom',      meta: '15 min · vegán',          img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=70' },
  { name: 'Losos s fenklom',      meta: '28 min · bez lepku',      img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=70' },
  { name: 'Kuracie tikka masala', meta: '40 min · indická',        img: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=70' },
  { name: 'Kokosové curry',       meta: '32 min · bez laktózy',    img: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=70' },
  { name: 'Cestoviny s pestom',   meta: '20 min · vegetariánske',  img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=70' },
]

export type Step = { title: string; body: string }

export const STEPS: Step[] = [
  { title: 'Povieš, kto si',            body: 'Onboarding za 90 sekúnd: alergie, čas, koľko vás je pri stole.' },
  { title: 'Vyberieš si recept swipom', body: 'Desať kariet, päť sekúnd. AI vyberie jedlá, na ktoré máš dnes chuť.' },
  { title: 'Košík sa naplní sám',       body: 'Odpočítame špajzu, spárujeme suroviny s produktami a porovnáme ceny.' },
  { title: 'Klikneš zaplatiť',          body: 'Kuriér je u teba do 40 minút. Do obchodu si nešiel.' },
]

export type AllergenKey = 'lepok' | 'laktoza' | 'orechy' | 'soja'

export const ALLERGENS: { key: AllergenKey; label: string }[] = [
  { key: 'lepok',   label: 'bez lepku' },
  { key: 'laktoza', label: 'bez laktózy' },
  { key: 'orechy',  label: 'orechy' },
  { key: 'soja',    label: 'sója' },
]

export type Ingredient = {
  name: string
  qty: string
  tag: AllergenKey | null
  alt?: string
}

export const INGREDIENTS: Ingredient[] = [
  { name: 'Pšeničné penne',  qty: '250 g',      tag: 'lepok',   alt: 'Kukuričné penne' },
  { name: 'Smotana 33 %',    qty: '200 ml',     tag: 'laktoza', alt: 'Ovsená smotana' },
  { name: 'Parmezán',        qty: '60 g',       tag: 'laktoza', alt: 'Kvasnicové vločky' },
  { name: 'Piniové oriešky', qty: '30 g',       tag: 'orechy',  alt: 'Slnečnicové semienka' },
  { name: 'Sójová omáčka',   qty: '1 PL',       tag: 'soja',    alt: 'Kokosové aminá' },
  { name: 'Kurací prsník',   qty: '300 g',      tag: null },
  { name: 'Cesnak',          qty: '2 strúčiky', tag: null },
]

export type FaqItem = { q: string; a: string }

export const FAQ: FaqItem[] = [
  { q: 'Odkiaľ berete recepty?',                    a: 'Z overených slovenských a českých kuchárskych webov. AI ich len číta a rozkladá na suroviny, gramáže a postup — nevymýšľa jedlá. Pri každom recepte je odkaz na originál a jeho autora.' },
  { q: 'Ako funguje automatická objednávka?',       a: 'Každú surovinu spárujeme s konkrétnym produktom v sortimente donáškovej služby, odpočítame špajzu a naplníme košík. Ty potvrdíš platbu, objednávku doručí kuriér Woltu, Bolt Food alebo Košíka.' },
  { q: 'Ako viem, že náhrada pri alergii funguje?', a: 'Náhrady vyberáme podľa kuchárskej funkcie suroviny — či viaže, zahusťuje alebo dodáva tuk — a overujeme ich spätnou väzbou od ľudí, ktorí recept naozaj uvarili.' },
  { q: 'Musím používať donáškovú službu?',          a: 'Nie. V Základe dostaneš nákupný zoznam do obchodu. Automatický košík je pohodlie navyše, nie podmienka.' },
  { q: 'Musím špajzu vypĺňať ručne?',               a: 'Nie. Nákup cez MĽASK sa zapíše sám a suroviny sa odpočítajú, keď recept označíš ako uvarený.' },
  { q: 'Čo ak mi appka nesadne?',                   a: '14 dní máš Pro zadarmo a bez karty. Skúšobná verzia jednoducho skončí a nič sa ti nestrhne.' },
]

export type Quote = {
  text: string
  initials: string
  name: string
  meta: string
  ink?: boolean
}

export type Clip = { img: string; caption: string; initials: string; handle: string }

export const QUOTES: Record<string, Quote> = {
  zuzana: { text: '„Celiakia mi z varenia spravila logistiku. Konečne recept, ktorý nemusím prepisovať — a rovno aj nákup.“', initials: 'ZK', name: 'Zuzana K.', meta: 'Bratislava · bez lepku' },
  ivana:  { text: '„Prestala som variť to isté dokola. Swipy mi ukážu aj veci, ktoré by som nikdy nehľadala.“', initials: 'IM', name: 'Ivana M.', meta: 'Trnava · varí pre dvoch' },
  martin: { text: '„Swipujem počas cesty z práce. Kým prídem domov, potraviny sú pred dverami.“', initials: 'MH', name: 'Martin H.', meta: 'Košice · varí každý deň', ink: true },
  peter:  { text: '„Konečne appka, kde nemusím písať nákupný zoznam. Vypíše sa sama.“', initials: 'PŠ', name: 'Peter Š.', meta: 'Prešov · 2 deti' },
  rodina: { text: '„Dvaja dospelí, dve deti, štyri názory. Appka z toho vyrobí jednu večeru a jeden nákup — a nič nevyhodíme.“', initials: 'LP', name: 'Lenka a Peter', meta: 'Žilina · rodina so 4 členmi' },
  katka:  { text: '„Laktóza už nie je problém. Náhrady naozaj chutia rovnako.“', initials: 'KB', name: 'Katka B.', meta: 'Nitra · bez laktózy' },
  tomas:  { text: '„Bývam sám a nakupovanie som nesnášal. Teraz mi príde presne toľko, koľko zjem.“', initials: 'TB', name: 'Tomáš B.', meta: 'Nitra · varí pre jedného' },
}

export const CLIPS: Record<string, Clip> = {
  lenka:  { img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&q=70', caption: 'Takto mi príde nákup na celý týždeň', initials: 'LV', handle: 'lenka.varí' },
  martin: { img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=700&q=70', caption: 'Večera vymyslená za 5 sekúnd. Ukazujem ako.', initials: 'MH', handle: 'martin.h' },
  tomas:  { img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=700&q=70', caption: 'Mesiac bez cesty do obchodu', initials: 'TB', handle: 'tomas.b' },
  zuzana: { img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=700&q=70', caption: 'Ako nakupujem podľa receptov', initials: 'ZK', handle: 'zuzana.k' },
}
