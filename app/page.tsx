import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Transformer from '@/components/Transformer'
import Problem from '@/components/Problem'
import Gap from '@/components/Gap'
import How from '@/components/How'
import Inside from '@/components/Inside'
import Comparison from '@/components/Comparison'
import Swipe from '@/components/Swipe'
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
        <Transformer />
        <Problem />
        <Gap />
        <How />
        <Inside />
        <Comparison />
        <Swipe />
        <Voices />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <IOSToast />
    </>
  )
}
