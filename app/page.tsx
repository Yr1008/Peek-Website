import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Gap from '@/components/Gap'
import How from '@/components/How'
import Voices from '@/components/Voices'
import Faq from '@/components/Faq'
import Close from '@/components/Close'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Gap />
        <How />
        <Voices />
        <Faq />
        <Close />
      </main>
      <Footer />
    </>
  )
}
