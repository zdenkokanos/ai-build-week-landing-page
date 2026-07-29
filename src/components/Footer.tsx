import { useCopy } from '../i18n'

export function Footer() {
  const c = useCopy().footer

  return (
    <footer className="shell site-footer">
      <div className="site-footer__grid">
        <div>
          <div className="logo">
            <span className="logo__mark logo__mark--sm" aria-hidden="true" />
            <span className="logo__word logo__word--sm">mľask</span>
          </div>
          <p className="site-footer__blurb">{c.blurb}</p>
        </div>

        {c.columns.map((col) => (
          <nav className="site-footer__col" aria-label={col.title} key={col.title}>
            <span className="site-footer__title">{col.title}</span>
            {col.links.map((l) => (
              <a href={l.href} key={l.label}>
                {l.label}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="site-footer__bar">
        <span>{c.copyright}</span>
        <span>{c.note}</span>
      </div>
    </footer>
  )
}
