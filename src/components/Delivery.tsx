import { Doodle } from './Decor'

export function Delivery() {
  return (
    <section className="band band--green" id="donaska">
      <span className="band__blob" aria-hidden="true" />

      <Doodle
        shape="spark"
        width={34}
        height={34}
        className="doodle--lime doodle--wide"
        style={{ left: '66px', top: '74px' }}
      />
      <Doodle
        shape="wave"
        width={132}
        height={20}
        className="doodle--white doodle--thin doodle--wide"
        style={{ right: '56px', bottom: '64px' }}
      />
      <Doodle
        shape="fork"
        width={34}
        height={30}
        className="doodle--lime doodle--wide"
        style={{ left: '40px', bottom: '132px' }}
      />

      <div className="shell band__grid">
        <div className="band__copy">
          <span className="badge badge--lime">Automatická objednávka</span>
          <h2 className="band__title">
            Nákup vybavíme za teba.
            <br />
            Ty len otvoríš dvere.
          </h2>
          <p className="band__lede">
            Toto je celý rozdiel oproti receptovým appkám: z receptu vieme spraviť hotovú objednávku
            potravín.
          </p>
          <ul className="band__list">
            <li>
              <span className="tick tick--lime" aria-hidden="true">
                ✓
              </span>{' '}
              Suroviny spárujeme s produktami v obchode
            </li>
            <li>
              <span className="tick tick--lime" aria-hidden="true">
                ✓
              </span>{' '}
              Porovnáme ceny vrátane doručenia
            </li>
            <li>
              <span className="tick tick--lime" aria-hidden="true">
                ✓
              </span>{' '}
              Košík vidíš a upravíš pred platbou
            </li>
          </ul>
          <a className="btn btn--lime" href="#waitlist">
            Objednať prvý nákup
          </a>
        </div>

        <div className="band__side">
          <div className="order-card">
            <div className="order-card__head">
              <span className="order-card__title">Objednávka na dnes</span>
              <span className="tag tag--mint">v príprave</span>
            </div>
            <div className="order-card__steps">
              <div className="ostep">
                <span className="ostep__dot ostep__dot--done">✓</span>
                <span className="ostep__label">Recept vybraný</span>
                <span className="ostep__meta">Kokosové curry</span>
              </div>
              <div className="ostep">
                <span className="ostep__dot ostep__dot--done">✓</span>
                <span className="ostep__label">Špajza odpočítaná</span>
                <span className="ostep__meta">−4,80 €</span>
              </div>
              <div className="ostep">
                <span className="ostep__dot ostep__dot--done">✓</span>
                <span className="ostep__label">Košík naplnený</span>
                <span className="ostep__meta">3 položky</span>
              </div>
              <div className="ostep ostep--todo">
                <span className="ostep__dot">4</span>
                <span className="ostep__label">Platba a doručenie</span>
              </div>
            </div>
            <div className="order-card__total">
              <span className="t-green bold small">Doručenie 25 minút</span>
              <span className="order-card__sum">8,98 €</span>
            </div>
            <div className="scr__cta scr__cta--green">Zaplatiť a doručiť</div>
          </div>

          <div className="couriers">
            <span className="couriers__label">Doručí ti</span>
            <span className="couriers__logos">
              <span className="couriers__logo couriers__logo--wolt">
                <img src="/assets/wolt.png" alt="Wolt" loading="lazy" />
              </span>
              <span className="couriers__logo">
                <img src="/assets/bolt.png" alt="Bolt Food" loading="lazy" />
              </span>
              <span className="couriers__logo couriers__logo--kosik">
                <img src="/assets/kosik.png" alt="Košík" loading="lazy" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
