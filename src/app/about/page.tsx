"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { motion } from "framer-motion"
import { Users, Target, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Mission is to <br /><span className="text-white/80 italic underline decoration-white/30">Democratize Elite Education</span>
          </motion.h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            EduElite was founded on the belief that every student deserves access to world-class 
            mentorship, regardless of their location. We&apos;re building the future of personalized learning.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Built by Educators, for the Next Generation</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We started in a small university library with a simple goal: to connect students 
                with the best minds in their fields. Today, EduElite is a global platform 
                supporting thousands of learners across 100+ subjects.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our rigorous vetting process ensures that only the top 3% of applicants become 
                EduElite tutors. We value not just academic excellence, but the ability to 
                inspire and empower.
              </p>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-[3rem] shadow-2xl"
                alt="Our team"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Student-First", desc: "Every feature we build starts with the student experience.", icon: Users },
              { title: "Quality Always", desc: "We never compromise on the quality of our tutors or technology.", icon: Shield },
              { title: "Results Driven", desc: "Our success is measured by the academic growth of our students.", icon: Target },
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-3xl border bg-accent/20">
                <v.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
