import { useState } from 'react'
import { FAQ } from '../data/content'

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="shell shell--narrow section-faq" id="faq">
      <h2 className="section__title section__title--center section__title--sm">Časté otázky</h2>
      <div className="faq">
        {FAQ.map((f, i) => {
          const on = open === i
          return (
            <div className="faq__item" key={f.q}>
              <button
                className="faq__q"
                type="button"
                id={`faq-q-${i}`}
                aria-controls={`faq-a-${i}`}
                aria-expanded={on}
                onClick={() => setOpen(on ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="faq__sign">{on ? '−' : '+'}</span>
              </button>
              <p
                className="faq__a"
                id={`faq-a-${i}`}
                role="region"
                aria-labelledby={`faq-q-${i}`}
                hidden={!on}
              >
                {f.a}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
