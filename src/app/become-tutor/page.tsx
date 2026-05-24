"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Globe, DollarSign, Award, ShieldCheck, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"
import { TutorApplicationForm } from "@/components/sections/tutor-application-form"
import { TutorFAQ } from "@/components/sections/tutor-faq"
import { TutorTestimonials } from "@/components/sections/tutor-testimonials"

const benefits = [
  {
    title: "Flexible Schedule",
    description: "Work when you want, from anywhere in the world. You have full control over your hours.",
    icon: Zap,
  },
  {
    title: "Global Reach",
    description: "Connect with students from over 150 countries and share your expertise globally.",
    icon: Globe,
  },
  {
    title: "Competitive Pay",
    description: "Set your own rates and get paid securely. Top tutors earn over $5,000 per month.",
    icon: DollarSign,
  },
  {
    title: "Growth Tools",
    description: "Access our advanced teaching tools, analytics, and professional development resources.",
    icon: CheckCircle,
  },
]

const requirements = [
  {
    title: "Expertise",
    desc: "Profound knowledge in your subject area with a relevant degree or certification.",
    icon: Award,
  },
  {
    title: "Communication",
    desc: "Excellent verbal and written communication skills to engage students effectively.",
    icon: Users,
  },
  {
    title: "Reliability",
    desc: "Commitment to your students and punctuality for all scheduled sessions.",
    icon: Clock,
  },
  {
    title: "Safety First",
    desc: "Willingness to undergo a background check to ensure a safe learning environment.",
    icon: ShieldCheck,
  },
]

export default function BecomeTutorPage() {
  const scrollToApply = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                <Award className="h-4 w-4" />
                Join the Top 1% of Educators
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                Teach the World, <span className="text-primary">Your Way</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Join the world&apos;s most elite community of tutors. Share your knowledge, 
                inspire students, and build a rewarding career on your own terms.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToApply} size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-lg font-bold bg-background">
                  View Requirements
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/150?u=${i + 20}`} 
                      className="w-12 h-12 rounded-full border-4 border-background"
                      alt="Tutor"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-bold">Joined by 2,000+ tutors</p>
                  <p className="text-sm text-muted-foreground">Across 50+ subjects</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
                  alt="Tutor teaching"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl border shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Top Earners</p>
                    <p className="text-xs text-muted-foreground">$80+/hr average</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-6 -right-6 bg-background p-6 rounded-2xl border shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/10 p-2 rounded-lg text-green-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Verified Status</p>
                    <p className="text-xs text-muted-foreground">Certified Expert</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Why Teach with <span className="text-primary">EduElite?</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide the platform, the tools, and the students. You focus on what you do best: teaching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] border bg-background hover:bg-accent/50 transition-all group hover:shadow-lg"
              >
                <div className="bg-primary/10 text-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">What we look for in our <span className="text-primary">Elite Tutors</span></h2>
               <div className="grid sm:grid-cols-2 gap-8">
                 {requirements.map((req) => (
                   <div key={req.title} className="space-y-3">
                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                       <req.icon className="h-6 w-6" />
                     </div>
                     <h4 className="font-bold text-lg">{req.title}</h4>
                     <p className="text-muted-foreground text-sm leading-relaxed">{req.desc}</p>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                 <p className="text-sm italic text-muted-foreground">
                   &quot;We value diversity and expertise from all backgrounds. Whether you&apos;re a retired professor or a brilliant university student, we want to hear from you.&quot;
                 </p>
               </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Requirements"
                className="rounded-[3rem] shadow-xl"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TutorTestimonials />

      {/* Application Steps */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Your Journey to <span className="text-primary">Success</span></h2>
               <p className="text-muted-foreground text-lg">Simple steps to start your teaching career.</p>
             </div>
             <div className="grid md:grid-cols-2 gap-12">
               {[
                 { step: 1, title: "Submit Application", desc: "Tell us about your background, education, and teaching experience." },
                 { step: 2, title: "Interview & Screening", desc: "A brief meeting with our team to verify your expertise and teaching style." },
                 { step: 3, title: "Onboarding", desc: "Get familiar with our platform tools and set up your premium profile." },
                 { step: 4, title: "Start Teaching", desc: "Go live, accept session requests, and start inspiring students." },
               ].map((item, idx) => (
                 <div key={item.step} className="flex gap-6 items-start relative">
                   <div className="bg-primary text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold shrink-0 text-xl shadow-lg shadow-primary/20">
                     {item.step}
                   </div>
                   <div>
                     <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                     <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                   </div>
                   {idx < 3 && idx % 2 === 0 && (
                     <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block text-primary/20">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </div>
                   )}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <TutorApplicationForm />

      {/* FAQ Section */}
      <TutorFAQ />

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Shape the <span className="text-black/20">Future?</span></h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Apply today and join a community of passionate educators changing lives one session at a time.
          </p>
          <Button onClick={scrollToApply} size="lg" variant="secondary" className="h-16 px-12 rounded-2xl text-xl font-bold hover:scale-105 transition-transform">
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
