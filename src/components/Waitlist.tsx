import { useRef, useState, type FormEvent } from 'react'
import { Doodle } from './Decor'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function Waitlist() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState<{ text: string; error: boolean }>({ text: '', error: false })

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const value = email.trim()

    if (!EMAIL_RE.test(value)) {
      setMsg({ text: 'Skontroluj e-mailovú adresu.', error: true })
      inputRef.current?.focus()
      return
    }

    // No backend yet — the form confirms locally and keeps the address for wiring up later.
    setMsg({ text: `Sme dohodnutí. Ozveme sa na ${value}.`, error: false })
    setEmail('')
  }

  return (
    <section className="waitlist" id="waitlist">
      <div className="waitlist__panel">
        <span className="waitlist__blob waitlist__blob--lime" aria-hidden="true" />
        <span className="waitlist__blob waitlist__blob--white" aria-hidden="true" />

        <Doodle shape="spark" width={32} height={32} className="doodle--lime deco-keep deco-wait-spark" />
        <Doodle
          shape="fork"
          width={34}
          height={30}
          className="doodle--white doodle--thin doodle--wide"
          style={{ left: '14px', bottom: '44px' }}
        />

        <div className="waitlist__grid">
          <div className="waitlist__copy">
            <span className="badge badge--glass">Spustenie jeseň 2026 · SK &amp; CZ</span>
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
            <p className="waitlist__lede">
              Zaregistruj sa a prvých 14 dní máš Pro zadarmo — bez karty.
            </p>

            <form className="signup" onSubmit={onSubmit} noValidate>
              <label className="sr-only" htmlFor="email">
                E-mail
              </label>
              <input
                className="signup__input"
                type="email"
                id="email"
                name="email"
                placeholder="tvoj@email.sk"
                autoComplete="email"
                required
                ref={inputRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="signup__btn" type="submit">
                Chcem to skúsiť
              </button>
            </form>
            <p className={`signup__msg${msg.error ? ' is-error' : ''}`} role="status" aria-live="polite">
              {msg.text}
            </p>

            <p className="waitlist__fine">
              <span>Bez karty</span>
              <span>·</span>
              <span>Zrušíš dvomi klikmi</span>
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
