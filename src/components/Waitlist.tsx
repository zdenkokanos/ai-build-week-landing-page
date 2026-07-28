import { Doodle } from '@mlask/ui'

export function Waitlist() {
  return (
    <section className="waitlist" id="waitlist">
      <div className="waitlist__panel">
        <span className="waitlist__blob waitlist__blob--lime" aria-hidden="true" />
        <span className="waitlist__blob waitlist__blob--white" aria-hidden="true" />

        <Doodle
          shape="fork"
          width={34}
          height={30}
          className="doodle--white doodle--thin doodle--wide"
          style={{ left: '14px', bottom: '44px' }}
        />

        <div className="waitlist__grid">
          <div className="waitlist__copy">
            <span className="badge badge--glass">Spustenie jeseň 2026 · Slovensko</span>
            <h2 className="waitlist__title">
              Dnes večer už vieš,
              <br />
              čo varíš. A nemusíš
              <br />
              <span className="mark">
                <span className="mark__bg" aria-hidden="true" />
                <span className="mark__t">nikam ísť.</span>
              </span>
            </h2>
            <p className="waitlist__lede">Prihlás sa a začni používať MĽASK — zatiaľ zadarmo.</p>

            <a className="btn btn--lime btn--lg waitlist__cta" href="#">
              Prihlásiť sa
            </a>

            <p className="waitlist__fine">
              <span>Bez karty</span>
              <span>·</span>
              <span>Odhlásiš sa dvomi klikmi</span>
              <span>·</span>
              <span>4,8 ★ od 1 240 ľudí</span>
            </p>
          </div>

          <div className="waitlist__art" aria-hidden="true">
            <span
              className="art-card art-card--1"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=70)',
              }}
            />
            <span
              className="art-card art-card--2"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=70)',
              }}
            />
            <span
              className="art-card art-card--3"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=70)',
              }}
            />
            <span className="art-chip art-chip--white">
              <span className="muted small">Košík doručíme za</span>
              <strong>25 minút</strong>
            </span>
            <span className="art-chip art-chip--lime">3 recepty · 1 nákup</span>
          </div>
        </div>
      </div>
    </section>
  )
}
