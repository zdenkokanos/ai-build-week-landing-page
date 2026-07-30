import { useCopy, useHead, useLanguage } from '../i18n'
import { LEGAL, LEGAL_CHROME, LEGAL_PATHS, type LegalDocKey } from '../i18n/legal'
import { LanguageSwitch } from './LanguageSwitch'

/**
 * One of the two legal documents, on its own URL.
 *
 * Deliberately not wrapped in the site's `Header`/`Footer`: their links are
 * in-page anchors (`#ako`, `#spajza`) pointing at sections that do not exist
 * here, so they would all be dead. This page gets its own slim chrome instead —
 * the logo back to the home page, the language switch, and a bar linking to
 * the other document.
 */
export function LegalPage({ doc }: { doc: LegalDocKey }) {
  const { lang } = useLanguage()
  const c = useCopy()
  const content = LEGAL[lang][doc]
  const other: LegalDocKey = doc === 'privacy' ? 'terms' : 'privacy'

  useHead(`${content.title} — MĽASK`, content.title)

  return (
    <div className="page legal">
      <header className="legal__bar">
        <div className="shell legal__bar-inner">
          <a className="logo" href="/">
            <span className="logo__mark" aria-hidden="true" />
            <span className="logo__word">mľask</span>
          </a>
          <LanguageSwitch />
        </div>
      </header>

      <main className="shell shell--narrow legal__doc" id="top">
        <h1 className="legal__title">{content.title}</h1>
        <p className="legal__updated">{content.updated}</p>

        {content.intro.map((paragraph) => (
          <p className="legal__lede" key={paragraph}>
            {paragraph}
          </p>
        ))}

        {content.sections.map((section) => (
          <section className="legal__section" key={section.heading}>
            <h2 className="legal__heading">{section.heading}</h2>

            {section.body?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.bullets && (
              <ul className="legal__list">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <nav className="legal__cross" aria-label={content.title}>
          <a href={LEGAL_PATHS[other]}>{LEGAL[lang][other].title}</a>
          <a href="/">{LEGAL_CHROME[lang].backHome}</a>
        </nav>
      </main>

      <div className="shell legal__foot">
        <span>{c.footer.copyright}</span>
      </div>
    </div>
  )
}
