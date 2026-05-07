import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Gap from '@/components/Gap'
import How from '@/components/How'
import Inside from '@/components/Inside'
import Comparison from '@/components/Comparison'
import Voices from '@/components/Voices'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import IOSToast from '@/components/IOSToast'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <span id="hero-sentinel" aria-hidden="true" />
        <Problem />
        <Gap />
        <How />
        <Inside />
        <Comparison />
        <Voices />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <IOSToast />
    </>
  )
}
