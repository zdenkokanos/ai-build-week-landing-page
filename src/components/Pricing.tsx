import { useState } from 'react'
import { Doodle, Scribble } from './Decor'

const PRO_FEATURES = [
  'Neobmedzené swipy',
  'Náhrady alergénov',
  'Špajza a auto-odpočet',
  'Objednávka jedným klikom',
  'Profil domácnosti',
  'Porovnanie cien',
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section className="shell section section--pricing" id="cennik">
      <header className="section__head section__head--tight">
        <h2 className="section__title">Lacnejšie ako jedna objednaná pizza.</h2>
        <div className="switch" role="group" aria-label="Perióda platby">
          <button
            type="button"
            className={`switch__btn${annual ? '' : ' is-on'}`}
            aria-pressed={!annual}
            onClick={() => setAnnual(false)}
          >
            Mesačne
          </button>
          <button
            type="button"
            className={`switch__btn${annual ? ' is-on' : ''}`}
            aria-pressed={annual}
            onClick={() => setAnnual(true)}
          >
            Ročne · −20 %
          </button>
          <Scribble
            className="scribble--deep doodle--wide"
            style={{ right: '-142px', bottom: '4px', transform: 'rotate(7deg)' }}
          >
            ušetríš 20 %
          </Scribble>
          <Doodle
            shape="arrow-left"
            width={50}
            height={44}
            className="doodle--deep doodle--wide"
            style={{ right: '-52px', bottom: '44px' }}
          />
        </div>
      </header>

      <div className="plans">
        <div className="plan">
          <div>
            <h3 className="plan__name">Základ</h3>
            <p className="plan__sub">Na vyskúšanie.</p>
          </div>
          <p className="plan__price">0 €</p>
          <div className="plan__feats">
            <span>
              <b className="t-green">✓</b> 3 swipy denne
            </span>
            <span>
              <b className="t-green">✓</b> Základné alergény
            </span>
            <span>
              <b className="t-green">✓</b> Nákupný zoznam
            </span>
            <span className="off">
              <b>—</b> Bez špajze a objednávky
            </span>
          </div>
          <a className="btn btn--sand plan__cta" href="#waitlist">
            Začať zadarmo
          </a>
        </div>

        <div className="plan plan--pro">
          <span className="plan__flag">Najčastejšia voľba</span>
          <div>
            <h3 className="plan__name">MĽASK Pro</h3>
            <p className="plan__sub plan__sub--on-ink">Recept → košík → kuriér.</p>
          </div>
          <p className="plan__price plan__price--lime">
            <span>{annual ? '5,90 €' : '7,40 €'}</span>
            <span className="plan__period">{annual ? '/ mesiac, platené ročne' : '/ mesiac'}</span>
          </p>
          <div className="plan__feats plan__feats--two">
            {PRO_FEATURES.map((f) => (
              <span key={f}>
                <b className="t-lime">✓</b> {f}
              </span>
            ))}
          </div>
          <a className="btn btn--lime plan__cta" href="#waitlist">
            14 dní zadarmo
          </a>
          <p className="plan__fine">Bez karty. Zrušíš dvomi klikmi.</p>
        </div>
      </div>
    </section>
  )
}
