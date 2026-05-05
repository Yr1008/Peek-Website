import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Problem from '@/components/Problem'
import How from '@/components/How'
import Voices from '@/components/Voices'
import Tags from '@/components/Tags'
import Caps from '@/components/Caps'
import BlindBox from '@/components/BlindBox'
import Story from '@/components/Story'
import HumanMoment from '@/components/HumanMoment'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <How />
        <Voices />
        <Tags />
        <Caps />
        <BlindBox />
        <Story />
        <HumanMoment />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
