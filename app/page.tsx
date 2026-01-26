import HeroVideo from '@/components/HeroVideo'
import ProblemSection from '@/components/ProblemSection'
import ComparisonSection from '@/components/ComparisonSection'
import SocialBuzzSection from '@/components/SocialBuzzSection'
import ImpactSection from '@/components/ImpactSection'
import FeaturesSection from '@/components/FeaturesSection'
import SocialProof from '@/components/SocialProof'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="pb-20 md:pb-0 overflow-x-hidden">
      {/* Hero - Video background */}
      <HeroVideo />
      
      {/* Problem/Solution comparison */}
      <ProblemSection />
      
      {/* Comparison chart - Peek vs competitors */}
      <ComparisonSection />
      
      {/* Impact - Money saved by day/week/month/year */}
      <ImpactSection />
      
      {/* Features - How we help */}
      <FeaturesSection />
      
      {/* Social Proof - You're not alone */}
      <SocialProof />
      
      {/* Social Buzz - Going viral */}
      <SocialBuzzSection />
      
      {/* Final CTA - Join the family */}
      <FinalCTA />
    </main>
  )
}
