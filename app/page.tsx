import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Gap from '@/components/Gap'
import Inside from '@/components/Inside'
import Tagger from '@/components/Tagger'
import Voices from '@/components/Voices'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Gap />
        <Inside />
        <Tagger />
        <Voices />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
