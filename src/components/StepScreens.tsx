import type { ReactNode } from 'react'

/* The four in-app screens paired with the step list. Only the selected one is
   displayed — `.scr.is-on` also carries the fade-in. */
function Screen({ index, current, children }: { index: number; current: number; children: ReactNode }) {
  return (
    <div
      className={`scr${index === current ? ' is-on' : ''}`}
      id={`scr-${index}`}
      role="tabpanel"
      aria-labelledby={`step-${index}`}
    >
      {children}
    </div>
  )
}

export function StepScreens({ current }: { current: number }) {
  return (
    <>
      <Screen index={0} current={current}>
        <div className="scr__pad">
          <div className="progress4">
            <i className="on" />
            <i className="on" />
            <i className="on" />
            <i />
          </div>
          <p className="scr__kicker">KROK 3 / 4</p>
          <h3 className="scr__title">Koľko času máš vo všedný deň?</h3>
          <div className="opt-list">
            <div className="opt">
              <span>Do 15 minút</span>
              <span className="muted">rýchlovky</span>
            </div>
            <div className="opt opt--on">
              <span>20 – 40 minút</span>
              <span>✓</span>
            </div>
            <div className="opt">
              <span>Hodina a viac</span>
              <span className="muted">víkend</span>
            </div>
          </div>
          <div className="chips">
            <span className="chip chip--orange">bez lepku</span>
            <span className="chip">bez orechov</span>
            <span className="chip">4 porcie</span>
          </div>
          <div className="scr__cta scr__cta--ink">Pokračovať</div>
        </div>
      </Screen>

      <Screen index={1} current={current}>
        <div className="scr__pad">
          <p className="scr__heading">Na čo máš chuť?</p>
          <div className="mini-deck">
            <span className="mini-deck__ghost" aria-hidden="true" />
            <div className="mini-card">
              <div
                className="mini-card__img"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=700&q=70)',
                }}
              >
                <div className="mini-card__tags">
                  <span className="tag tag--white">32 min</span>
                  <span className="tag tag--lime">bez laktózy</span>
                </div>
              </div>
              <div className="mini-card__body">
                <span className="mini-card__name">Kokosové curry</span>
                <div className="mini-card__row">
                  <span className="muted small">6 z 9 surovín doma</span>
                  <span className="tag tag--mint">Objednať</span>
                </div>
              </div>
              <span className="stamp stamp--green">MŇAM</span>
            </div>
          </div>
          <div className="deck__controls deck__controls--static">
            <span className="swipe-btn swipe-btn--ghost">✕</span>
            <span className="swipe-btn swipe-btn--like">♥</span>
          </div>
        </div>
      </Screen>

      <Screen index={2} current={current}>
        <div className="scr__pad">
          <p className="scr__heading">Nákupný zoznam</p>
          <p className="scr__sub">Šošovicový guláš · 4 porcie</p>
          <div className="rows">
            <div className="row">
              <span>Červená šošovica</span>
              <span className="muted">250 g</span>
            </div>
            <div className="row">
              <span>Rajčinový pretlak</span>
              <span className="muted">70 g</span>
            </div>
            <div className="row row--have">
              <span className="strike">Cibuľa</span>
              <span>máš doma</span>
            </div>
            <div className="row row--have">
              <span className="strike">Údená paprika</span>
              <span>máš doma</span>
            </div>
          </div>
          <div className="basket">
            <p className="basket__label">Porovnanie košíkov</p>
            <div className="basket__row">
              <span className="basket__store">Najlacnejší</span>
              <span className="basket__price">8,98 €</span>
            </div>
            <div className="basket__row basket__row--dim">
              <span className="basket__store">Ďalšia možnosť</span>
              <span className="basket__price basket__price--sm">9,60 €</span>
            </div>
          </div>
          <div className="scr__cta scr__cta--green">Zaplatiť a doručiť</div>
        </div>
      </Screen>

      <Screen index={3} current={current}>
        <div className="scr__done">
          <div
            className="scr__hero"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=700&q=70)',
            }}
          />
          <div className="scr__done-body">
            <span className="tag tag--mint tag--lg">Kuriér je pred dverami</span>
            <p className="scr__done-title">Suroviny doručené za 24 minút</p>
            <div className="checks">
              <span>
                <i className="dot-check" aria-hidden="true">
                  ✓
                </i>{' '}
                Nákup zapísaný do špajze
              </span>
              <span>
                <i className="dot-check" aria-hidden="true">
                  ✓
                </i>{' '}
                Postup rozdelený na kroky
              </span>
            </div>
            <div className="scr__cta scr__cta--ink scr__cta--push">Začať variť</div>
          </div>
        </div>
      </Screen>
    </>
  )
}
