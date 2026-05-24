"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { motion } from "framer-motion"
import { Check, Zap, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Pay as You Go",
    price: "Custom",
    description: "Perfect for students who need occasional help with specific assignments.",
    features: [
      "No monthly subscription",
      "Pay only for hours used",
      "All subjects included",
      "Whiteboard tools included",
      "HD video recordings",
    ],
    cta: "Start Learning",
    popular: false,
  },
  {
    name: "Elite Plus",
    price: "$199",
    period: "/mo",
    description: "Our most popular plan for serious students looking for consistent growth.",
    features: [
      "4 hours included monthly",
      "Priority tutor matching",
      "Personal learning plan",
      "Homework support chat",
      "Parent progress dashboard",
      "10% discount on extra hours",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Success Master",
    price: "$449",
    period: "/mo",
    description: "Comprehensive support for high-stakes exams and university prep.",
    features: [
      "10 hours included monthly",
      "Vetted top-tier tutors only",
      "Full exam prep materials",
      "Dedicated success manager",
      "University application review",
      "20% discount on extra hours",
    ],
    cta: "Go Master",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      
      <section className="py-24 bg-accent/30 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent <span className="text-primary">Pricing</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your learning goals. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-[2.5rem] border bg-background flex flex-col h-full ${
                  plan.popular ? "ring-2 ring-primary shadow-2xl scale-105 z-10" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Zap className="h-3 w-3 fill-current" /> Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm min-h-[40px]">{plan.description}</p>
                </div>

                <div className="mb-8">
                   <div className="flex items-baseline gap-1">
                     <span className="text-5xl font-bold">{plan.price}</span>
                     {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                   </div>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm">
                      <div className="bg-primary/10 p-0.5 rounded-full mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button className={`w-full h-14 rounded-xl text-lg font-bold ${plan.popular ? "" : "variant-outline"}`} variant={plan.popular ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 rounded-[3rem] bg-accent/20 border flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">Enterprise & School Solutions</h3>
                <p className="text-muted-foreground text-lg">
                  Looking to provide elite tutoring for your entire institution or organization? 
                  We offer custom bulk pricing and advanced administration tools.
                </p>
             </div>
             <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold whitespace-nowrap">Contact Sales</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
