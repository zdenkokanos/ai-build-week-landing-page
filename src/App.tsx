import { Allergens } from './components/Allergens'
import { Delivery } from './components/Delivery'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Pantry } from './components/Pantry'
import { Pricing } from './components/Pricing'
import { RecipeRail } from './components/RecipeRail'
import { Testimonials } from './components/Testimonials'
import { Waitlist } from './components/Waitlist'
import { useCopy } from './i18n'

export default function App() {
  const c = useCopy()

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
