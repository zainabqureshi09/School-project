"use client"

import { motion } from "framer-motion"
import { Search, Calendar, Laptop, Star } from "lucide-react"

const steps = [
  {
    title: "Find Your Expert",
    description: "Search through our vetted community of tutors by subject, price, or availability.",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    title: "Book a Session",
    description: "Schedule a time that works for you. No long-term commitments or subscription required.",
    icon: Calendar,
    color: "bg-purple-500",
  },
  {
    title: "Start Learning",
    description: "Join your online classroom with our integrated whiteboard and video tools.",
    icon: Laptop,
    color: "bg-emerald-500",
  },
  {
    title: "Master Anything",
    description: "Review recordings, track your progress, and reach your academic goals.",
    icon: Star,
    color: "bg-orange-500",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it <span className="text-primary">Works</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started on your learning journey in four simple steps. We&apos;ve made it easier than ever to find the help you need.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center text-white shadow-2xl transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                    <step.icon className="h-10 w-10" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
