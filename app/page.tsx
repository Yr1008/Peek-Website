import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Permission from '@/components/Permission'
import Tagger from '@/components/Tagger'
import Bento from '@/components/Bento'
import Inside from '@/components/Inside'
import Voices from '@/components/Voices'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Permission />
        <Tagger />
        <Bento />
        <Inside />
        <Voices />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
