import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Modalidades } from "@/components/modalidades"
import { Planos } from "@/components/planos"
import { Avaliacoes } from "@/components/avaliacoes"
import { Localizacao } from "@/components/localizacao"
import { Instagram } from "@/components/instagram"
import { CTAFinal } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Modalidades />
      <Planos />
      <Avaliacoes />
      <Localizacao />
      <Instagram />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
