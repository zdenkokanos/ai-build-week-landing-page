import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { en } from './en'
import { sk } from './sk'
import type { Copy, Lang } from './types'

export type { Copy, Lang } from './types'

const DICTIONARIES: Record<Lang, Copy> = { sk, en }

export const LANGS: Lang[] = ['sk', 'en']

const STORAGE_KEY = 'mlask-lang'

/* MĽASK ships in Slovakia, so Slovak is the fallback. A browser that clearly
   is not Slovak or Czech opens in English; the switch — and `?lang=` — always
   win over both, and the choice is remembered. */
const DEFAULT_LANG: Lang = 'sk'

function isLang(value: string | null | undefined): value is Lang {
  return value === 'sk' || value === 'en'
}

/* localStorage throws rather than returns null in some privacy modes. */
function readStored(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function writeStored(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    /* not being able to remember the choice is not worth breaking the page */
  }
}

function detectLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG

  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLang(fromUrl)) return fromUrl

  const stored = readStored()
  if (isLang(stored)) return stored

  const nav = window.navigator.language?.toLowerCase() ?? ''
  return nav.startsWith('sk') || nav.startsWith('cs') ? 'sk' : 'en'
}

type LanguageValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  copy: Copy
}

const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const copy = DICTIONARIES[lang]

  /* The head is outside React's tree, so it is synced by hand. */
  useEffect(() => {
    document.documentElement.lang = copy.meta.htmlLang
    document.title = copy.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.meta.description)
  }, [copy])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    writeStored(next)

    /* Keeps a shared or reloaded URL in the language the visitor picked. */
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url)
  }, [])

  const value = useMemo<LanguageValue>(() => ({ lang, setLang, copy }), [lang, setLang, copy])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}

/** The copy for the current language — what most components need. */
export function useCopy(): Copy {
  return useLanguage().copy
}
