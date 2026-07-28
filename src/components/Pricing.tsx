import { Doodle, Scribble } from '@mlask/ui'

const FEATURES = [
  'Neobmedzené swipy',
  'Náhrady alergénov',
  'Špajza a auto-odpočet',
  'Objednávka jedným klikom',
  'Profil domácnosti',
  'Porovnanie cien',
]

/* No plans and no prices while the product is still being finished — the whole
   app is open, and the only action is signing in. */
export function Pricing() {
  return (
    <section className="shell section section--pricing" id="zadarmo">
      <header className="section__head section__head--tight">
        <span className="eyebrow">Zadarmo</span>
        <h2 className="section__title">Vyskúšaj to zadarmo.</h2>
        <p className="section__lede">
          MĽASK je zatiaľ zadarmo — celá appka, bez karty a bez záväzku.
        </p>

        <Scribble
          className="scribble--deep doodle--wide"
          style={{ right: '-118px', bottom: '10px', transform: 'rotate(7deg)' }}
        >
          zatiaľ zadarmo
        </Scribble>
        <Doodle
          shape="arrow-left"
          width={50}
          height={44}
          className="doodle--deep doodle--wide"
          style={{ right: '-40px', bottom: '48px' }}
        />
      </header>

      <div className="plans plans--single">
        <div className="plan plan--pro">
          <span className="plan__flag">Celá appka</span>
          <div>
            <h3 className="plan__name">MĽASK</h3>
            <p className="plan__sub plan__sub--on-ink">Recept → košík → kuriér.</p>
          </div>
          <p className="plan__price plan__price--lime">Zadarmo</p>
          <div className="plan__feats plan__feats--two">
            {FEATURES.map((f) => (
              <span key={f}>
                <b className="t-lime">✓</b> {f}
              </span>
            ))}
          </div>
          <a className="btn btn--lime plan__cta" href="#">
            Prihlásiť sa
          </a>
          <p className="plan__fine">Bez karty. Odhlásiš sa dvomi klikmi.</p>
        </div>
      </div>
    </section>
  )
}
