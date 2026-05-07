import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import How from '@/components/How'
import Features from '@/components/Features'
import Comparison from '@/components/Comparison'
import Voices from '@/components/Voices'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Problem />
        <How />
        <Features />
        <Comparison />
        <Voices />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
