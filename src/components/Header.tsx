import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#ako', label: 'Ako to funguje' },
  { href: '#donaska', label: 'Objednávka' },
  { href: '#alergie', label: 'Alergie' },
  { href: '#spajza', label: 'Špajza' },
  { href: '#zadarmo', label: 'Zadarmo' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="shell">
        <div className="navbar">
          <a className="logo" href="#top">
            <span className="logo__mark" aria-hidden="true" />
            <span className="logo__word">mľask</span>
          </a>

          <nav
            className={`navbar__nav${open ? ' is-open' : ''}`}
            id="primary-nav"
            aria-label="Hlavná navigácia"
            onClick={(e) => {
              if ((e.target as HTMLElement).tagName === 'A') setOpen(false)
            }}
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a className="btn btn--green navbar__nav-cta" href="#waitlist">
              Vyskúšať zadarmo
            </a>
          </nav>

          <a className="btn btn--green navbar__cta" href="#waitlist">
            Vyskúšať zadarmo
          </a>

          <button
            className="navbar__burger"
            type="button"
            id="burger"
            aria-label={open ? 'Zavrieť menu' : 'Otvoriť menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
