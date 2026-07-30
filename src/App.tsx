import { Allergens } from './components/Allergens'
import { Delivery } from './components/Delivery'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { LegalPage } from './components/LegalPage'
import { Pantry } from './components/Pantry'
import { Pricing } from './components/Pricing'
import { RecipeRail } from './components/RecipeRail'
import { Testimonials } from './components/Testimonials'
import { Waitlist } from './components/Waitlist'
import { useCopy, useHead } from './i18n'
import { LEGAL_PATHS, type LegalDocKey } from './i18n/legal'

/**
 * Which page the URL asks for.
 *
 * Read once at render rather than kept in state: every link between these
 * pages is a plain `<a href>`, so moving between them is a full navigation and
 * the module is re-evaluated anyway. That also means Back works for free, and
 * the site stays free of a router it would otherwise use for two documents.
 *
 * Netlify serves `index.html` for these paths (see `netlify.toml`); Vite's dev
 * server does the same by default.
 */
function currentDoc(): LegalDocKey | null {
  const path = window.location.pathname.replace(/\/+$/, '')
  const match = (Object.keys(LEGAL_PATHS) as LegalDocKey[]).find(
    (key) => LEGAL_PATHS[key] === path,
  )
  return match ?? null
}

function Landing() {
  const c = useCopy()

  useHead(c.meta.title, c.meta.description)

  return (
    <>
      <a className="skip-link" href="#top">
        {c.skipLink}
      </a>

      <div className="page">
        <Header />
        <Hero />
        <HowItWorks />
        <Delivery />
        <Allergens />
        <Pantry />
        <RecipeRail />
        <Testimonials />
        <Pricing />
        <Faq />
        <Waitlist />
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  const doc = currentDoc()

  return doc ? <LegalPage doc={doc} /> : <Landing />
}
