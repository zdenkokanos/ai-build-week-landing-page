import { Doodle } from './Decor'

const HAVE = [
  { name: 'Ryža basmati', qty: '1,2 kg' },
  { name: 'Kokos. mlieko', qty: '2 ks' },
  { name: 'Cibuľa', qty: '4 ks' },
  { name: 'Údená paprika', qty: '40 g' },
]

const MISSING = [
  { name: 'Zázvor 100 g', price: '1,29 €' },
  { name: 'Koriander zväzok', price: '1,49 €' },
]

export function Pantry() {
  return (
    <section className="band band--sand" id="spajza">
      <span className="emoji-float deco-keep deco-spajza-veg" style={{ animationDelay: '.4s' }} aria-hidden="true">
        🥕
      </span>
      <span className="emoji-float deco-keep deco-spajza-garlic" aria-hidden="true">
        🧄
      </span>
      <Doodle
        shape="squiggle"
        width={120}
        height={16}
        className="doodle--deep doodle--thin doodle--wide"
        style={{ right: '150px', top: '64px' }}
      />

      <div className="shell pantry">
        <div>
          <span className="eyebrow">Špajza</span>
          <h2 className="section__title section__title--left">
            Appka vie, čo máš doma. Kupuješ len to, čo chýba.
          </h2>
          <p className="section__lede section__lede--left">
            Špajzu nemusíš vypĺňať ručne. Nákup sa do nej zapíše sám, suroviny sa odpočítajú po
            uvarení a čerstvé veci ti pripomenieme, kým sú dobré.
          </p>

          <ol className="how-list">
            <li>
              <span className="how-list__n">1</span>
              <span>
                <strong>Nakúpiš</strong> — položky sa zapíšu do špajze automaticky. Pridáš aj ručne
                alebo odfotíš nákup a appka si z fotky vytiahne, čo treba.
              </span>
            </li>
            <li>
              <span className="how-list__n">2</span>
              <span>
                <strong>Uvaríš</strong> — použité gramáže sa odpočítajú.
              </span>
            </li>
            <li>
              <span className="how-list__n">3</span>
              <span>
                <strong>Ďalší recept</strong> — navrhneme taký, čo dojedá tvoje zásoby.
              </span>
            </li>
          </ol>

          <div className="stats">
            <div>
              <p className="stats__n">−31 %</p>
              <p className="stats__l">nižší účet za nákup</p>
            </div>
            <div>
              <p className="stats__n">0</p>
              <p className="stats__l">surovín hnijúcich v šuflíku</p>
            </div>
          </div>
        </div>

        <div className="pantry-card">
          <div className="pantry-card__head">
            <span className="pantry-card__title">Moja špajza</span>
            <span className="muted bold small">aktualizované dnes</span>
          </div>

          <p className="grp grp--green">
            <span className="grp__dot" />
            MÁŠ DOMA · 18
          </p>
          <div className="pantry-grid">
            {HAVE.map((p) => (
              <div className="prow prow--have" key={p.name}>
                <span>{p.name}</span>
                <span>{p.qty}</span>
              </div>
            ))}
          </div>

          <p className="grp grp--orange">
            <span className="grp__dot" />
            MINÚŤ DO 2 DNÍ
          </p>
          <div className="prow prow--soon">
            <span>Kurací prsník 500 g</span>
            <span>použiť dnes</span>
          </div>

          <p className="grp grp--grey">
            <span className="grp__dot" />
            CHÝBA NA DNEŠNÝ RECEPT · 2
          </p>
          <div className="pantry-stack">
            {MISSING.map((p) => (
              <div className="prow prow--miss" key={p.name}>
                <span>{p.name}</span>
                <span>{p.price}</span>
              </div>
            ))}
          </div>

          <div className="suggest">
            <p className="suggest__text">
              Dnes navrhneme kokosové curry — dojedá kurča aj mlieko zo špajze.
            </p>
            <div className="suggest__row">
              <span className="suggest__price">Dokúpiť 2 veci · 2,78 €</span>
              <span className="badge badge--lime">Objednať</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
