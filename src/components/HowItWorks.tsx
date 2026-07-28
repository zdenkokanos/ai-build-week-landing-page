import { useRef, useState, type KeyboardEvent } from 'react'
import { STEPS } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useVisibleInterval } from '../hooks/useVisibleInterval'
import { Doodle } from './Decor'
import { StepScreens } from './StepScreens'

export function HowItWorks() {
  const listRef = useRef<HTMLDivElement>(null)
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const reduceMotion = usePrefersReducedMotion()

  const [current, setCurrent] = useState(0)

  const auto = useVisibleInterval(
    listRef,
    5000,
    () => setCurrent((c) => (c + 1) % STEPS.length),
    { enabled: !reduceMotion },
  )

  function select(i: number) {
    setCurrent(i)
    auto.restart()
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const d =
      e.key === 'ArrowDown' || e.key === 'ArrowRight'
        ? 1
        : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
          ? -1
          : 0
    if (!d) return
    e.preventDefault()
    const next = (current + d + STEPS.length) % STEPS.length
    select(next)
    buttons.current[next]?.focus()
  }

  return (
    <section className="shell section" id="ako">
      <header className="section__head">
        <span className="eyebrow">Ako to funguje</span>
        <h2 className="section__title">
          Štyri kroky,{' '}
          <span className="mark mark--tight">
            <span className="mark__bg" aria-hidden="true" />
            <span className="mark__t">dve minúty</span>
          </span>
        </h2>
        <p className="section__lede">Kroky sa prepínajú samé — alebo klikni na ktorýkoľvek.</p>

        <Doodle
          shape="arrow-left"
          width={58}
          height={50}
          className="doodle--deep doodle--wide"
          style={{ left: '-96px', top: '26px' }}
        />
        <Doodle
          shape="spark"
          width={30}
          height={30}
          className="doodle--lime deco-keep deco-ako-spark"
        />
      </header>

      <div className="steps">
        <div
          className={`steps__list${auto.running || reduceMotion ? '' : ' is-idle'}`}
          ref={listRef}
          role="tablist"
          aria-label="Kroky"
          onKeyDown={onKeyDown}
        >
          {STEPS.map((st, i) => {
            const on = i === current
            return (
              <button
                key={st.title}
                ref={(n) => {
                  buttons.current[i] = n
                }}
                className={`step${on ? ' is-on' : ''}`}
                type="button"
                id={`step-${i}`}
                role="tab"
                aria-controls={`scr-${i}`}
                aria-selected={on}
                tabIndex={on ? 0 : -1}
                onClick={() => select(i)}
              >
                <span className="step__n">{i + 1}</span>
                <span className="step__main">
                  <span className="step__title">{st.title}</span>
                  <span className="step__body">{st.body}</span>
                  <span className="step__track">
                    {/* The bar is a CSS animation, so remounting the node is what rewinds it. */}
                    <span className="step__fill" key={`${current}-${auto.runId}`} />
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="steps__phone">
          <div className="phone phone--steps">
            <div className="phone__screen phone__screen--sand">
              <span className="phone__notch" aria-hidden="true" />
              <StepScreens current={current} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
