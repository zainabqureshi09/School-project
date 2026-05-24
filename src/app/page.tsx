import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Hero } from "@/components/sections/hero"
import { FeaturedSubjects } from "@/components/sections/featured-subjects"
import { HowItWorks } from "@/components/sections/how-it-works"
import { TutorShowcase } from "@/components/sections/tutor-showcase"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedSubjects />
      <HowItWorks />
      <TutorShowcase />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
