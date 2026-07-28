const COLUMNS = [
  {
    title: 'Produkt',
    links: [
      { href: '#ako', label: 'Ako to funguje' },
      { href: '#donaska', label: 'Objednávka' },
      { href: '#alergie', label: 'Alergie' },
      { href: '#zadarmo', label: 'Zadarmo' },
    ],
  },
  {
    title: 'Firma',
    links: [
      { href: '#top', label: 'O nás' },
      { href: '#recepty', label: 'Zdroje receptov' },
      { href: '#faq', label: 'Kontakt' },
    ],
  },
  {
    title: 'Právne',
    links: [
      { href: '#faq', label: 'Ochrana údajov' },
      { href: '#faq', label: 'Podmienky' },
      { href: '#faq', label: 'Cookies' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="shell site-footer">
      <div className="site-footer__grid">
        <div>
          <div className="logo">
            <span className="logo__mark logo__mark--sm" aria-hidden="true" />
            <span className="logo__word logo__word--sm">mľask</span>
          </div>
          <p className="site-footer__blurb">
            Pre ľudí, ktorí radi varia, ale nechcú každý deň vymýšľať čo — a chodiť pre to do
            obchodu.
          </p>
        </div>

        {COLUMNS.map((col) => (
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
        <span>© 2026 MĽASK s.r.o. · Bratislava</span>
        <span>Recepty patria ich autorom. Vždy odkazujeme na originál.</span>
      </div>
    </footer>
  )
}
