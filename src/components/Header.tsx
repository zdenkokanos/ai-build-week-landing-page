import { useEffect, useState } from 'react'
import { useCopy } from '../i18n'
import { HREF } from '../i18n/media'
import { LanguageSwitch } from './LanguageSwitch'

export function Header() {
  const c = useCopy()
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
            aria-label={c.nav.ariaLabel}
            onClick={(e) => {
              if ((e.target as HTMLElement).tagName === 'A') setOpen(false)
            }}
          >
            {c.nav.links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a className="btn btn--green navbar__nav-cta" href={HREF.app}>
              {c.nav.cta}
            </a>
          </nav>

          {/* One group at the right edge, so the switch sits against whichever
              of the two is showing — the CTA on desktop, the burger on mobile. */}
          <div className="navbar__end">
            <LanguageSwitch />

            <a className="btn btn--green navbar__cta" href={HREF.app}>
              {c.nav.cta}
            </a>

            <button
              className="navbar__burger"
              type="button"
              id="burger"
              aria-label={open ? c.nav.closeMenu : c.nav.openMenu}
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
      </div>
    </header>
  )
}
