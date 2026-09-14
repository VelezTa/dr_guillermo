import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AreasBand } from './components/AreasBand'
import { Specialties } from './components/Specialties'
import { Training } from './components/Training'
import { Reviews } from './components/Reviews'
import { Office } from './components/Office'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <AreasBand />
        <Specialties />
        <Training />
        <Reviews />
        <Office />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
