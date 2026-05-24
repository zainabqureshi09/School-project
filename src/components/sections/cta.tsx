"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-[3rem] p-12 md:p-24 text-center overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-black/5 skew-x-[20deg] -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold mb-8 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Limited time: Get 20% off your first session
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to reach your academic potential?
            </h2>
            
            <p className="text-primary-foreground/80 text-xl mb-12 max-w-xl mx-auto">
              Join thousands of students who are already learning with world-class tutors on EduElite.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" variant="secondary" className="h-16 px-10 rounded-2xl text-lg font-bold shadow-2xl">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-lg font-bold border-white/30 text-white hover:bg-white/10">
                Become a Tutor
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Vetted experts only
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Money-back guarantee
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
