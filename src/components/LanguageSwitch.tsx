import { LANGS, useLanguage } from '../i18n'

/* Two-state pill in the navbar. It stays in the bar at every width — the
   burger swallows the nav links, but the language has to remain reachable. */
export function LanguageSwitch() {
  const { lang, setLang, copy } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label={copy.nav.language}>
      {LANGS.map((l) => (
        <button
          key={l}
          className={`lang-switch__opt${l === lang ? ' is-on' : ''}`}
          type="button"
          lang={l}
          aria-pressed={l === lang}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
