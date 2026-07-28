import { Doodle } from '@mlask/ui'

/* Only what needs attention gets a row; the stock itself is chips, so the card
   reads at a glance instead of like a spreadsheet. */
const STOCK = ['Ryža 1,2 kg', 'Kokosové mlieko 2 ks', 'Cibuľa 4 ks', 'Údená paprika 40 g']

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
            Pripomenieme aj to, čo treba minúť, kým je to dobré.
          </p>

          <ol className="how-list">
            <li>
              <span className="how-list__n">1</span>
              <span>
                <strong>Nakúpiš</strong> — zapíše sa samo. Alebo pridáš ručne či odfotíš nákup.
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
                <strong>Ďalší recept</strong> — navrhneme taký, čo dojedá zásoby.
              </span>
            </li>
          </ol>
        </div>

        <div className="pantry-card">
          <div className="pantry-card__head">
            <span className="pantry-card__title">Moja špajza</span>
            <span className="muted bold small">aktualizované dnes</span>
          </div>

          <div className="pantry-chips">
            {STOCK.map((item) => (
              <span className="pchip" key={item}>
                {item}
              </span>
            ))}
            <span className="pchip pchip--more">+14 ďalších</span>
          </div>

          <div className="prow prow--soon">
            <span>Kurací prsník 500 g</span>
            <span>minúť do 2 dní</span>
          </div>

          <p className="grp grp--grey">
            <span className="grp__dot" />
            CHÝBA NA DNEŠNÝ RECEPT
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
            <p className="suggest__text">Dnes navrhneme kokosové curry — dojedá kurča aj mlieko.</p>
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
