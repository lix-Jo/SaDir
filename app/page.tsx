import { HeroSection } from "@/components/hero-section"
import { MapShowcaseSection } from "@/components/map-showcase-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { VisualsSection } from "@/components/visuals-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MapShowcaseSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <VisualsSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
