import type { Lang } from './types'

/**
 * LEGAL COPY — the privacy policy and the terms of use.
 *
 * Kept out of `Copy` in `types.ts` on purpose: that shape describes the
 * landing page's sections, and these are two standalone documents that share
 * none of it. They live here for the same reason `media.ts` does — one module,
 * both languages, checked against one type.
 *
 * Slovak is the authoritative text: MĽASK ships in Slovakia and is governed by
 * Slovak law. English is a courtesy translation.
 *
 * KEEP THIS HONEST. These describe what the product actually does with a
 * visitor's data. If the app starts collecting something new — a new field, a
 * new processor, a new third-party call — say so here.
 */

export interface LegalSection {
  heading: string
  /** Paragraph runs, in order. */
  body?: string[]
  /** Rendered as a list under `body`. */
  bullets?: string[]
}

export interface LegalDoc {
  title: string
  /** Already formatted for the language. */
  updated: string
  intro: string[]
  sections: LegalSection[]
}

export type LegalDocKey = 'privacy' | 'terms'

/** The URLs. Public contract: the footer links here and so does anything external. */
export const LEGAL_PATHS: Record<LegalDocKey, string> = {
  privacy: '/ochrana-osobnych-udajov',
  terms: '/podmienky-pouzivania',
}

/** Shown as the controller contact in both documents. */
export const LEGAL_CONTACT_EMAIL = 'mlaskapp@gmail.com'

/** The page's own chrome. Here rather than in `Copy` — it belongs to these two pages only. */
export const LEGAL_CHROME: Record<Lang, { backHome: string }> = {
  sk: { backHome: 'Späť na úvod' },
  en: { backHome: 'Back to home' },
}

const privacySk: LegalDoc = {
  title: 'Zásady ochrany osobných údajov',
  updated: 'Naposledy aktualizované 30. júla 2026',
  intro: [
    'Tieto zásady vysvetľujú, aké osobné údaje aplikácia MĽASK spracúva, prečo ich spracúva, komu ich sprístupňuje a aké práva v súvislosti s nimi máte.',
    'MĽASK je aplikácia, ktorá na základe vašich chutí a obmedzení navrhne recepty a zostaví z nich nákupný zoznam. Aby to dokázala, potrebuje vedieť, čo jete, čo nejete a čo máte doma — a práve o týchto údajoch je tento dokument.',
  ],
  sections: [
    {
      heading: '1. Kto spracúva vaše údaje',
      body: [
        `Prevádzkovateľom je projekt MĽASK. Vo veciach ochrany osobných údajov nás kontaktujte na ${LEGAL_CONTACT_EMAIL} — na žiadosti odpovedáme najneskôr do jedného mesiaca.`,
      ],
    },
    {
      heading: '2. Aké údaje spracúvame',
      body: ['Spracúvame len to, čo aplikácia potrebuje na svoju funkciu:'],
      bullets: [
        'Údaje o účte: meno a e-mailová adresa. Ak si vytvoríte účet heslom, uchovávame len jeho kryptografický odtlačok (bcrypt), nikdy nie heslo samotné.',
        'Prihlásenie cez Google: ak sa prihlásite účtom Google, dostaneme od spoločnosti Google vaše meno, e-mailovú adresu, identifikátor účtu a profilovú fotografiu. Nežiadame a nedostávame prístup k vášmu Gmailu, kontaktom, kalendáru ani k iným službám Google.',
        'Stravovacie preferencie: chute, obľúbené kuchyne, diéty, kuchynské spotrebiče a suroviny, ktoré nemáte radi.',
        'Alergie a intolerancie: ak ich zadáte, ide o údaje o zdraví — osobitnú kategóriu osobných údajov. Spracúvame ich výhradne preto, aby sme vám nenavrhli recept, ktorý by vám uškodil.',
        'Obsah vašej špajze, vaše swipe voľby, vybrané recepty, obsah košíka a história objednávok.',
        'Fotografie: ak použijete skenovanie špajze alebo chladničky fotoaparátom, spracujeme odoslanú fotografiu, aby sme z nej rozpoznali potraviny.',
        'Odkazy na videá: ak použijete import receptu z TikToku, spracujeme odkaz, ktorý zadáte, a obsah videa, na ktoré ukazuje.',
        'Technické údaje: IP adresa, typ zariadenia a prehliadača a záznamy o chybách — v rozsahu bežnom pre prevádzku a bezpečnosť webovej služby.',
      ],
    },
    {
      heading: '3. Na akom právnom základe',
      bullets: [
        'Plnenie zmluvy (čl. 6 ods. 1 písm. b GDPR) — vedenie účtu a poskytovanie samotnej služby: návrh receptov, špajza, košík, objednávky.',
        'Výslovný súhlas (čl. 9 ods. 2 písm. a GDPR) — spracúvanie alergií a intolerancií ako údajov o zdraví. Súhlas dávate tým, že ich v aplikácii dobrovoľne zadáte, a môžete ho kedykoľvek odvolať ich vymazaním v profile.',
        'Oprávnený záujem (čl. 6 ods. 1 písm. f GDPR) — bezpečnosť služby, prevencia zneužitia a odstraňovanie chýb.',
      ],
    },
    {
      heading: '4. Komu údaje sprístupňujeme',
      body: [
        'Vaše údaje nepredávame a nepoužívame na reklamu. Sprístupňujeme ich len poskytovateľom, ktorí pre nás zabezpečujú chod aplikácie a spracúvajú ich na základe našich pokynov:',
      ],
      bullets: [
        'Poskytovateľ hostingu a databázy — prevádzka servera a uloženie údajov.',
        'Poskytovateľ jazykového modelu (AI) — pri návrhu receptov, vysvetleniach a skenovaní špajze mu odosielame vaše preferencie vrátane alergií a diét, obsah špajze a prípadné fotografie. Neodosielame vaše meno, e-mail ani identifikátor účtu. Údaje sa odosielajú výhradne na spracovanie konkrétnej požiadavky.',
        'Google — ak sa prihlásite účtom Google, a v rozsahu písiem načítaných zo služby Google Fonts.',
      ],
    },
    {
      heading: '5. Prenos mimo Európskej únie',
      body: [
        'Niektorí z uvedených poskytovateľov môžu údaje spracúvať mimo Európskeho hospodárskeho priestoru. V takom prípade sa prenos opiera o štandardné zmluvné doložky schválené Európskou komisiou alebo o rozhodnutie o primeranosti.',
      ],
    },
    {
      heading: '6. Ako dlho údaje uchovávame',
      bullets: [
        `Údaje účtu a preferencie: kým máte účet. Aplikácia zatiaľ nemá tlačidlo na zrušenie účtu — napíšte nám na ${LEGAL_CONTACT_EMAIL} a účet aj s údajmi vymažeme.`,
        'Špajza, košík a swipe voľby: kým ich sami neodstránite alebo kým nezrušíte účet.',
        'História objednávok: kým máte účet.',
        'Fotografie odoslané na skenovanie: spracujú sa a neukladajú sa nad rámec vyhodnotenia požiadavky.',
        'Technické záznamy: spravidla do 30 dní.',
      ],
    },
    {
      heading: '7. Vaše práva',
      body: ['Podľa GDPR máte právo:'],
      bullets: [
        'na prístup k svojim údajom a na ich kópiu,',
        'na opravu nesprávnych údajov,',
        'na vymazanie údajov („právo na zabudnutie“),',
        'na obmedzenie spracúvania,',
        'na prenosnosť údajov v strojovo čitateľnom formáte,',
        'namietať proti spracúvaniu založenému na oprávnenom záujme,',
        'kedykoľvek odvolať súhlas so spracúvaním údajov o zdraví, bez vplyvu na zákonnosť predchádzajúceho spracúvania.',
      ],
    },
    {
      heading: '8. Ako práva uplatniť a kam sa sťažovať',
      body: [
        `Väčšinu údajov si viete zobraziť a upraviť priamo v profile v aplikácii. Vo zvyšku nám napíšte na ${LEGAL_CONTACT_EMAIL}.`,
        'Ak máte za to, že spracúvame vaše údaje v rozpore s predpismi, môžete podať sťažnosť dozornému orgánu: Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07 Bratislava.',
      ],
    },
    {
      heading: '9. Bezpečnosť',
      body: [
        'Komunikácia s aplikáciou je šifrovaná (HTTPS). Heslá uchovávame ako bcrypt odtlačok. Prihlásenie je viazané na podpísaný token s obmedzenou platnosťou a každý dopyt na údaje je viazaný na prihlásený účet.',
        'Žiadne opatrenie však nie je absolútne — ak zistíte bezpečnostný problém, dajte nám prosím vedieť na uvedenej adrese.',
      ],
    },
    {
      heading: '10. Cookies a lokálne úložisko',
      body: [
        'Nepoužívame reklamné ani analytické cookies tretích strán. V prehliadači ukladáme len to, čo je potrebné na chod aplikácie: prihlasovací token, zvolený jazyk a údaje uložené pre offline režim.',
      ],
    },
    {
      heading: '11. Deti',
      body: [
        'Služba nie je určená osobám mladším ako 16 rokov. Ak zistíme, že sme spracovali údaje takejto osoby bez súhlasu zákonného zástupcu, vymažeme ich.',
      ],
    },
    {
      heading: '12. Zmeny týchto zásad',
      body: [
        'Ak sa zmení rozsah spracúvania, aktualizujeme tento dokument a zmeníme dátum uvedený v jeho záhlaví. Pri podstatných zmenách vás upozorníme v aplikácii.',
      ],
    },
  ],
}

const termsSk: LegalDoc = {
  title: 'Podmienky používania',
  updated: 'Naposledy aktualizované 30. júla 2026',
  intro: [
    'Tieto podmienky upravujú používanie aplikácie MĽASK. Používaním aplikácie s nimi vyjadrujete súhlas. Ak s nimi nesúhlasíte, aplikáciu prosím nepoužívajte.',
  ],
  sections: [
    {
      heading: '1. Čo je MĽASK',
      body: [
        'MĽASK je aplikácia, ktorá podľa vašich chutí, diét a obsahu špajze navrhne recepty a zostaví z nich nákupný zoznam. Časť návrhov pripravuje jazykový model (AI).',
        'Služba sa aktívne vyvíja. Funkcie sa môžu meniť, dopĺňať alebo zanikať a dostupnosť negarantujeme.',
      ],
    },
    {
      heading: '2. Účet',
      body: [
        'Na používanie aplikácie potrebujete účet. Zaväzujete sa uviesť pravdivé údaje a chrániť prihlasovacie údaje pred zneužitím. Za činnosť vykonanú pod vaším účtom zodpovedáte vy.',
        'Účet je určený pre vašu osobnú potrebu a nesmiete ho postúpiť inej osobe.',
      ],
    },
    {
      heading: '3. Recepty, alergie a zdravie — dôležité',
      body: [
        'Informácie o surovinách, alergénoch a vhodnosti receptu pre konkrétnu diétu sú orientačné. Pochádzajú z verejných zdrojov a z automatického spracovania jazykovým modelom, ktorý sa môže mýliť, vynechať surovinu alebo nesprávne vyhodnotiť náhradu.',
        'MĽASK nie je zdravotnícka ani výživová služba a neposkytuje lekárske poradenstvo. Ak máte alergiu, intoleranciu alebo zdravotný stav vyžadujúci diétu, vždy si pred konzumáciou overte zloženie na obale potraviny a v prípade pochybností sa poraďte s lekárom.',
        'Na filtre alergénov v aplikácii sa nespoliehajte ako na jedinú ochranu.',
      ],
    },
    {
      heading: '4. Objednávky a platby',
      body: [
        'Objednávka v aplikácii je v tejto fáze simulovaná. Aplikácia zaznamená váš zámer nakúpiť, no nespracúva platby, nevyžaduje platobné údaje a neodosiela objednávku žiadnemu obchodu ani donáškovej službe. Nič sa vám neúčtuje a nič vám nebude doručené.',
        'Ak sa v budúcnosti sprístupní skutočné objednávanie, budú preň platiť samostatné podmienky a upozorníme vás na ne vopred.',
      ],
    },
    {
      heading: '5. Ako aplikáciu používať',
      body: ['Pri používaní aplikácie sa zaväzujete:'],
      bullets: [
        'nepoužívať ju na protiprávnu činnosť,',
        'nepokúšať sa obísť zabezpečenie, pristupovať k účtom iných používateľov ani neprimerane zaťažovať službu,',
        'nesťahovať obsah automatizovane nad rámec bežného používania,',
        'nezneužívať import z externých zdrojov na obsah, ku ktorému nemáte práva.',
      ],
    },
    {
      heading: '6. Obsah tretích strán',
      body: [
        'Recepty a údaje o produktoch môžu pochádzať z externých zdrojov a patria ich autorom. Ak do aplikácie vložíte odkaz na video alebo iný obsah, zodpovedáte za to, že ste na to oprávnení.',
        'Za obsah a dostupnosť externých zdrojov nezodpovedáme.',
      ],
    },
    {
      heading: '7. Duševné vlastníctvo',
      body: [
        'Aplikácia, jej rozhranie, názov a logo patria projektu MĽASK. Používaním nezískavate k nim licenciu nad rámec bežného používania služby.',
      ],
    },
    {
      heading: '8. Bez záruky a obmedzenie zodpovednosti',
      body: [
        'Služba sa poskytuje „tak, ako je“, bez záruk akéhokoľvek druhu. Negarantujeme, že bude dostupná bez prerušenia, bez chýb ani že navrhnutý obsah bude správny alebo vhodný pre váš účel.',
        'V rozsahu, ktorý pripúšťajú právne predpisy, nezodpovedáme za nepriamu ani následnú škodu vzniknutú používaním aplikácie. Tým nie sú dotknuté práva spotrebiteľa podľa kogentných ustanovení právnych predpisov ani zodpovednosť za škodu spôsobenú úmyselne alebo hrubou nedbanlivosťou.',
      ],
    },
    {
      heading: '9. Zrušenie účtu',
      body: [
        `O zrušenie účtu môžete kedykoľvek požiadať na ${LEGAL_CONTACT_EMAIL} — v aplikácii zatiaľ nie je na to tlačidlo. Po zrušení vymažeme vaše údaje v rozsahu uvedenom v Zásadách ochrany osobných údajov.`,
        'Účet, ktorý porušuje tieto podmienky, môžeme obmedziť alebo zrušiť.',
      ],
    },
    {
      heading: '10. Zmeny podmienok',
      body: [
        'Podmienky môžeme aktualizovať. Zmenu vyznačíme dátumom v záhlaví a pri podstatnej zmene vás upozorníme v aplikácii. Ďalším používaním aplikácie po zmene s novým znením súhlasíte.',
      ],
    },
    {
      heading: '11. Rozhodné právo',
      body: [
        'Tieto podmienky sa riadia právnym poriadkom Slovenskej republiky. Na riešenie sporov sú príslušné súdy Slovenskej republiky.',
      ],
    },
    {
      heading: '12. Kontakt',
      body: [`Otázky k týmto podmienkam posielajte na ${LEGAL_CONTACT_EMAIL}.`],
    },
  ],
}

const privacyEn: LegalDoc = {
  title: 'Privacy Policy',
  updated: 'Last updated 30 July 2026',
  intro: [
    'This policy explains what personal data the MĽASK app processes, why, who it is shared with, and what rights you have over it.',
    'MĽASK suggests recipes based on your tastes and dietary limits and turns them into a shopping list. To do that it needs to know what you eat, what you cannot eat, and what you already have at home — and this document is about exactly that data.',
    'The Slovak version of this policy is the authoritative text; this translation is provided for convenience.',
  ],
  sections: [
    {
      heading: '1. Who processes your data',
      body: [
        `The controller is the MĽASK project. For anything concerning your personal data, contact us at ${LEGAL_CONTACT_EMAIL} — we answer within one month at the latest.`,
      ],
    },
    {
      heading: '2. What data we process',
      body: ['We process only what the app needs in order to work:'],
      bullets: [
        'Account data: your name and email address. If you register with a password, we store only its cryptographic hash (bcrypt), never the password itself.',
        'Google sign-in: if you sign in with Google, we receive your name, email address, account identifier and profile picture from Google. We do not request or receive access to your Gmail, contacts, calendar or any other Google service.',
        'Food preferences: tastes, favourite cuisines, diets, kitchen appliances and ingredients you dislike.',
        'Allergies and intolerances: if you enter them, this is health data — a special category of personal data. We process it for one purpose only: not to suggest a recipe that could harm you.',
        'Your pantry contents, your swipe choices, selected recipes, basket contents and order history.',
        'Photos: if you use the camera to scan your pantry or fridge, we process the photo you send in order to recognise the food in it.',
        'Video links: if you import a recipe from TikTok, we process the link you provide and the content of the video it points to.',
        'Technical data: IP address, device and browser type, and error logs — to the extent normal for running and securing a web service.',
      ],
    },
    {
      heading: '3. Our legal basis',
      bullets: [
        'Performance of a contract (Art. 6(1)(b) GDPR) — running your account and providing the service itself: recipe suggestions, pantry, basket, orders.',
        'Explicit consent (Art. 9(2)(a) GDPR) — processing allergies and intolerances as health data. You give consent by voluntarily entering them, and you can withdraw it at any time by deleting them in your profile.',
        'Legitimate interest (Art. 6(1)(f) GDPR) — securing the service, preventing abuse and fixing faults.',
      ],
    },
    {
      heading: '4. Who we share it with',
      body: [
        'We do not sell your data and we do not use it for advertising. We share it only with providers who help us run the app and who process it on our instructions:',
      ],
      bullets: [
        'Hosting and database provider — running the server and storing the data.',
        'Language model (AI) provider — when suggesting recipes, explaining them and scanning your pantry, we send it your preferences including allergies and diets, your pantry contents and any photos. We do not send your name, email or account identifier. Data is sent solely to answer that one request.',
        'Google — if you sign in with a Google account, and for the fonts loaded from Google Fonts.',
      ],
    },
    {
      heading: '5. Transfers outside the European Union',
      body: [
        'Some of the providers above may process data outside the European Economic Area. Where they do, the transfer relies on Standard Contractual Clauses approved by the European Commission or on an adequacy decision.',
      ],
    },
    {
      heading: '6. How long we keep it',
      bullets: [
        `Account data and preferences: for as long as you have an account. The app has no "close account" button yet — write to us at ${LEGAL_CONTACT_EMAIL} and we will delete the account and its data.`,
        'Pantry, basket and swipe choices: until you remove them yourself or close your account.',
        'Order history: for as long as you have an account.',
        'Photos sent for scanning: processed and not retained beyond answering the request.',
        'Technical logs: normally up to 30 days.',
      ],
    },
    {
      heading: '7. Your rights',
      body: ['Under the GDPR you have the right:'],
      bullets: [
        'to access your data and receive a copy of it,',
        'to have inaccurate data corrected,',
        'to have your data erased (the "right to be forgotten"),',
        'to restrict processing,',
        'to data portability in a machine-readable format,',
        'to object to processing based on legitimate interest,',
        'to withdraw your consent to processing health data at any time, without affecting the lawfulness of processing before withdrawal.',
      ],
    },
    {
      heading: '8. Exercising your rights, and where to complain',
      body: [
        `You can view and change most of your data directly in your profile in the app. For anything else, write to us at ${LEGAL_CONTACT_EMAIL}.`,
        'If you believe we process your data unlawfully, you can lodge a complaint with the supervisory authority: Office for Personal Data Protection of the Slovak Republic, Hraničná 12, 820 07 Bratislava, Slovakia.',
      ],
    },
    {
      heading: '9. Security',
      body: [
        'Traffic to the app is encrypted (HTTPS). Passwords are stored as bcrypt hashes. A session is bound to a signed token with a limited lifetime, and every data request is scoped to the signed-in account.',
        'No measure is absolute — if you find a security problem, please tell us at the address above.',
      ],
    },
    {
      heading: '10. Cookies and local storage',
      body: [
        'We use no third-party advertising or analytics cookies. We store in your browser only what the app needs to run: your session token, your chosen language, and data cached for offline use.',
      ],
    },
    {
      heading: '11. Children',
      body: [
        'The service is not intended for anyone under 16. If we learn we have processed such a person’s data without a guardian’s consent, we will delete it.',
      ],
    },
    {
      heading: '12. Changes to this policy',
      body: [
        'If what we process changes, we will update this document and change the date in its header. We will tell you in the app about any significant change.',
      ],
    },
  ],
}

const termsEn: LegalDoc = {
  title: 'Terms of Use',
  updated: 'Last updated 30 July 2026',
  intro: [
    'These terms govern your use of the MĽASK app. By using the app you agree to them. If you do not agree, please do not use the app.',
    'The Slovak version of these terms is the authoritative text; this translation is provided for convenience.',
  ],
  sections: [
    {
      heading: '1. What MĽASK is',
      body: [
        'MĽASK suggests recipes based on your tastes, diets and what is in your pantry, and turns them into a shopping list. Part of those suggestions is produced by a language model (AI).',
        'The service is under active development. Features may change, be added or be removed, and we do not guarantee availability.',
      ],
    },
    {
      heading: '2. Your account',
      body: [
        'You need an account to use the app. You agree to give accurate details and to keep your credentials safe. You are responsible for activity carried out under your account.',
        'The account is for your personal use and may not be transferred to anyone else.',
      ],
    },
    {
      heading: '3. Recipes, allergies and health — important',
      body: [
        'Information about ingredients, allergens and whether a recipe suits a particular diet is indicative only. It comes from public sources and from automated processing by a language model, which can be wrong, miss an ingredient, or misjudge a substitution.',
        'MĽASK is not a medical or nutritional service and does not provide medical advice. If you have an allergy, an intolerance or a condition requiring a specific diet, always check the ingredients on the product packaging before eating, and consult a doctor if in doubt.',
        'Do not rely on the app’s allergen filters as your only safeguard.',
      ],
    },
    {
      heading: '4. Orders and payments',
      body: [
        'Ordering in the app is simulated at this stage. The app records your intent to shop, but it does not process payments, does not ask for payment details, and does not send your order to any shop or delivery service. You are charged nothing and nothing will be delivered.',
        'If real ordering becomes available in future, it will be governed by separate terms and we will tell you about them in advance.',
      ],
    },
    {
      heading: '5. How you may use the app',
      body: ['When using the app, you agree not to:'],
      bullets: [
        'use it for any unlawful purpose,',
        'attempt to bypass security, access other users’ accounts, or place unreasonable load on the service,',
        'harvest content automatically beyond ordinary use,',
        'misuse the import feature for content you have no rights to.',
      ],
    },
    {
      heading: '6. Third-party content',
      body: [
        'Recipes and product data may come from external sources and belong to their authors. If you submit a link to a video or other content, you are responsible for having the right to do so.',
        'We are not responsible for the content or availability of external sources.',
      ],
    },
    {
      heading: '7. Intellectual property',
      body: [
        'The app, its interface, name and logo belong to the MĽASK project. Using the service grants you no licence to them beyond ordinary use of the service.',
      ],
    },
    {
      heading: '8. No warranty and limitation of liability',
      body: [
        'The service is provided "as is", without warranties of any kind. We do not guarantee that it will be available without interruption or free of defects, or that suggested content will be correct or fit for your purpose.',
        'To the extent permitted by law, we are not liable for indirect or consequential damage arising from use of the app. This does not affect consumer rights under mandatory provisions of law, nor liability for damage caused intentionally or by gross negligence.',
      ],
    },
    {
      heading: '9. Closing your account',
      body: [
        `You can ask us to close your account at any time at ${LEGAL_CONTACT_EMAIL} — there is no button for it in the app yet. Once closed, we delete your data to the extent described in the Privacy Policy.`,
        'We may restrict or close an account that breaches these terms.',
      ],
    },
    {
      heading: '10. Changes to these terms',
      body: [
        'We may update these terms. We will mark the change with the date in the header and tell you in the app about any significant change. Continuing to use the app after a change means you accept the new version.',
      ],
    },
    {
      heading: '11. Governing law',
      body: [
        'These terms are governed by the law of the Slovak Republic. The courts of the Slovak Republic have jurisdiction over any dispute.',
      ],
    },
    {
      heading: '12. Contact',
      body: [`Send questions about these terms to ${LEGAL_CONTACT_EMAIL}.`],
    },
  ],
}

export const LEGAL: Record<Lang, Record<LegalDocKey, LegalDoc>> = {
  sk: { privacy: privacySk, terms: termsSk },
  en: { privacy: privacyEn, terms: termsEn },
}
