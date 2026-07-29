import type { ReactNode } from 'react'
import { useCopy } from '../i18n'
import { IMG_SCENE } from '../i18n/media'

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
  const c = useCopy().screens

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
          <p className="scr__kicker">{c.onboarding.kicker}</p>
          <h3 className="scr__title">{c.onboarding.title}</h3>
          <div className="opt-list">
            {c.onboarding.options.map((o, i) => {
              /* The middle option is the one already chosen — its note is the tick. */
              const on = i === 1
              return (
                <div className={`opt${on ? ' opt--on' : ''}`} key={o.label}>
                  <span>{o.label}</span>
                  <span className={on ? undefined : 'muted'}>{o.note}</span>
                </div>
              )
            })}
          </div>
          <div className="chips">
            {c.onboarding.chips.map((chip, i) => (
              <span className={`chip${i === 0 ? ' chip--orange' : ''}`} key={chip}>
                {chip}
              </span>
            ))}
          </div>
          <div className="scr__cta scr__cta--ink">{c.onboarding.cta}</div>
        </div>
      </Screen>

      <Screen index={1} current={current}>
        <div className="scr__pad">
          <p className="scr__heading">{c.swipe.heading}</p>
          <div className="mini-deck">
            <span className="mini-deck__ghost" aria-hidden="true" />
            <div className="mini-card">
              <div
                className="mini-card__img"
                style={{ backgroundImage: `url(${IMG_SCENE.curry})` }}
              >
                <div className="mini-card__tags">
                  <span className="tag tag--white">{c.swipe.time}</span>
                  <span className="tag tag--lime">{c.swipe.diet}</span>
                </div>
              </div>
              <div className="mini-card__body">
                <span className="mini-card__name">{c.swipe.dish}</span>
                <div className="mini-card__row">
                  <span className="muted small">{c.swipe.pantry}</span>
                  <span className="tag tag--mint">{c.swipe.order}</span>
                </div>
              </div>
              <span className="stamp stamp--green">{c.swipe.stamp}</span>
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
          <p className="scr__heading">{c.basket.heading}</p>
          <p className="scr__sub">{c.basket.sub}</p>
          <div className="rows">
            {c.basket.rows.map((r) => (
              <div className={`row${r.have ? ' row--have' : ''}`} key={r.name}>
                <span className={r.have ? 'strike' : undefined}>{r.name}</span>
                <span className={r.have ? undefined : 'muted'}>{r.right}</span>
              </div>
            ))}
          </div>
          <div className="basket">
            <p className="basket__label">{c.basket.compareLabel}</p>
            <div className="basket__row">
              <span className="basket__store">{c.basket.cheapest}</span>
              <span className="basket__price">{c.basket.cheapestPrice}</span>
            </div>
            <div className="basket__row basket__row--dim">
              <span className="basket__store">{c.basket.other}</span>
              <span className="basket__price basket__price--sm">{c.basket.otherPrice}</span>
            </div>
          </div>
          <div className="scr__cta scr__cta--green">{c.basket.cta}</div>
        </div>
      </Screen>

      <Screen index={3} current={current}>
        <div className="scr__done">
          <div className="scr__hero" style={{ backgroundImage: `url(${IMG_SCENE.lentil})` }} />
          <div className="scr__done-body">
            <span className="tag tag--mint tag--lg">{c.done.tag}</span>
            <p className="scr__done-title">{c.done.title}</p>
            <div className="checks">
              {c.done.checks.map((check) => (
                <span key={check}>
                  <i className="dot-check" aria-hidden="true">
                    ✓
                  </i>{' '}
                  {check}
                </span>
              ))}
            </div>
            <div className="scr__cta scr__cta--ink scr__cta--push">{c.done.cta}</div>
          </div>
        </div>
      </Screen>
    </>
  )
}
