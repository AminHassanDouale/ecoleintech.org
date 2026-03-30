import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import NiveauxSection from '@/components/NiveauxSection'
import ActualitesSection from '@/components/ActualitesSection'
import GalerieSection from '@/components/GalerieSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <NiveauxSection />
      <ActualitesSection />
      <GalerieSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
