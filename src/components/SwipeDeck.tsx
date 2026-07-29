import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { useCopy } from '../i18n'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useVisibleInterval } from '../hooks/useVisibleInterval'

const EXIT_MS = 560
const EXIT_MS_REDUCED = 60
const DRAG_THRESHOLD = 70

type State = {
  idx: number
  liked: number
  exiting: boolean
  lastDir: 1 | -1
  drag: number
}

/* The hint is kept as a state, not a string, so it follows a language switch
   instead of freezing in whichever language it was written in. */
type Hint = 'idle' | 'liked' | 'skipped'

const INITIAL: State = { idx: 0, liked: 0, exiting: false, lastDir: 1, drag: 0 }

export function SwipeDeck() {
  const c = useCopy().deck

  const deckRef = useRef<HTMLDivElement>(null)
  const exitTimer = useRef<number | null>(null)
  const drag = useRef({ active: false, startX: 0, pointerId: -1 })

  const reduceMotion = usePrefersReducedMotion()
  const [state, setState] = useState<State>(INITIAL)
  const [hint, setHint] = useState<Hint>('idle')

  /* The deck is built from three passes over the dish list, so the queue never
     runs dry while the visitor keeps swiping. */
  const dishes = useMemo(() => [...c.dishes, ...c.dishes, ...c.dishes], [c.dishes])

  const auto = useVisibleInterval(
    deckRef,
    3400,
    () => swipe(Math.random() > 0.4),
    { enabled: !reduceMotion },
  )

  useEffect(
    () => () => {
      if (exitTimer.current !== null) window.clearTimeout(exitTimer.current)
    },
    [],
  )

  function swipe(liked: boolean) {
    if (state.exiting) return

    setState((s) => ({ ...s, exiting: true, lastDir: liked ? 1 : -1, drag: 0 }))
    setHint(liked ? 'liked' : 'skipped')

    exitTimer.current = window.setTimeout(
      () => {
        setState((s) => {
          const next = s.idx + 1
          return {
            ...s,
            idx: next >= dishes.length - 3 ? 0 : next,
            liked: liked ? s.liked + 1 : s.liked,
            exiting: false,
          }
        })
      },
      reduceMotion ? EXIT_MS_REDUCED : EXIT_MS,
    )
  }

  /* A manual choice stops the autoplay for good, as in the design. */
  function pick(liked: boolean) {
    auto.stop()
    swipe(liked)
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (state.exiting) return
    drag.current = { active: true, startX: e.clientX, pointerId: e.pointerId }
    deckRef.current?.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (!drag.current.active) return
    setState((s) => ({ ...s, drag: e.clientX - drag.current.startX }))
  }

  function onPointerEnd() {
    if (!drag.current.active) return
    drag.current.active = false
    const dx = state.drag
    setState((s) => ({ ...s, drag: 0 }))
    if (Math.abs(dx) > DRAG_THRESHOLD) pick(dx > 0)
  }

  const fling = `translate(${state.lastDir * 480}px, 40px) rotate(${state.lastDir * 15}deg)`
  const likedDir = state.lastDir === 1
  const hintText = hint === 'idle' ? c.hintIdle : hint === 'liked' ? c.hintLiked : c.hintSkipped

  return (
    <>
      <div className="float-card float-card--likes">
        <span className="float-card__icon" aria-hidden="true">
          ♥
        </span>
        <span className="float-card__text">
          <strong id="deck-counter">{c.likes(state.liked)}</strong>
          <span className="muted">{c.likesSub}</span>
        </span>
      </div>

      <div className="float-card float-card--cart">
        <span className="float-card__label">{c.cartLabel}</span>
        <span className="float-card__price">{c.cartPrice}</span>
        <span className="float-card__meta">{c.cartMeta}</span>
      </div>

      <div className="float-card float-card--pantry">{c.pantrySaved}</div>

      <div className="phone phone--hero">
        <div className="phone__screen">
          <span className="phone__notch" aria-hidden="true" />

          <div className="statusbar">
            <span>9:41</span>
            <span className="statusbar__icons">▮▮▮ ▰</span>
          </div>

          <div className="deck__head">
            <span className="deck__title">{c.title}</span>
            <span className="deck__avatar" aria-hidden="true" />
          </div>

          <div
            className="deck"
            id="deck"
            ref={deckRef}
            role="group"
            aria-label={c.ariaLabel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerEnd}
            onPointerCancel={onPointerEnd}
          >
            {/* Static stack edges. The queued cards sit exactly under the front
                card, so nothing behind it ever moves when one is swiped away. */}
            <span className="deck__edge deck__edge--2" aria-hidden="true" />
            <span className="deck__edge deck__edge--1" aria-hidden="true" />

            {dishes.map((d, i) => {
              const rel = i - state.idx
              const style: CSSProperties = {
                transform: 'none',
                opacity: 0,
                zIndex: 1,
                transition: 'none',
                visibility: 'hidden',
              }
              let stampOpacity = 0

              if (rel === -1) {
                Object.assign(style, { transform: fling, zIndex: 12, visibility: 'visible' })
                stampOpacity = 1
              } else if (rel === 0 && state.exiting) {
                Object.assign(style, {
                  transform: fling,
                  zIndex: 12,
                  visibility: 'visible',
                  transition: 'transform .56s cubic-bezier(.3,.7,.3,1), opacity .5s ease .1s',
                })
                stampOpacity = 1
              } else if (rel >= 0 && rel <= 2) {
                if (rel === 0 && state.drag) {
                  style.transform = `translate(${state.drag}px, ${Math.abs(state.drag) * 0.06}px) rotate(${state.drag * 0.05}deg)`
                  stampOpacity = Math.min(Math.abs(state.drag) / 90, 1)
                }
                style.opacity = 1
                style.zIndex = 10 - rel
                style.visibility = 'visible'
              }

              const dragRight = rel === 0 && state.drag > 0
              const positive = rel === 0 && state.drag ? dragRight : likedDir

              // The queued cards rest in the front card's exact spot, so their
              // shadows would stack into one dark ring — and separate into a
              // second shadow the moment the front card is dragged off it. Only
              // the card actually at the front, plus the one being flung away,
              // casts one.
              const frontMoving = state.exiting || state.drag !== 0
              if (!(rel <= 0 || (frontMoving && rel === 1))) style.boxShadow = 'none'

              return (
                <div className="card" key={i} style={style} aria-hidden="true">
                  <div className="card__img" style={{ backgroundImage: `url(${d.img})` }}>
                    <div className="card__tags">
                      <span className="tag tag--white">{d.time}</span>
                      <span className="tag tag--lime">{d.diet}</span>
                      <span className="tag tag--soft">{d.cuisine}</span>
                    </div>
                    <span
                      className={`stamp ${positive ? 'stamp--green' : 'stamp--orange'}`}
                      style={{ opacity: stampOpacity }}
                    >
                      {positive ? c.stampYes : c.stampNo}
                    </span>
                  </div>
                  <div className="card__body">
                    <span className="card__name">{d.name}</span>
                    <div className="card__cta">{c.cardCta}</div>
                    <div className="card__pantry">{d.pantry}</div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="deck__controls">
            <button
              className="swipe-btn swipe-btn--skip"
              type="button"
              aria-label={c.skipAria}
              onClick={() => pick(false)}
            >
              ✕
            </button>
            <button
              className="swipe-btn swipe-btn--like"
              type="button"
              aria-label={c.likeAria}
              onClick={() => pick(true)}
            >
              ♥
            </button>
          </div>

          <p className="deck__hint">{hintText}</p>
        </div>
      </div>
    </>
  )
}
