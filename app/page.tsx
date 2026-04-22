import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Comparison from '@/components/Comparison'
import SocialProof from '@/components/SocialProof'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Comparison />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
