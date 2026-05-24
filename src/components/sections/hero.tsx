"use client"

import { motion } from "framer-motion"
import { Search, Star, Users, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        
        {/* Animated Mesh Grid (Simulated) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Elite Mentorship Platform
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/60 leading-[0.95]">
              Reach Your <br />
              <span className="text-primary italic underline decoration-primary/20">Elite Potential</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed font-medium">
              Connect with vetted world-class tutors from Ivy League universities and Fortune 500 companies. Personalized 1-on-1 sessions built for excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
               <Button size="lg" className="h-16 px-10 rounded-2xl text-xl font-black shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all gap-2">
                Find Tutors <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl text-xl font-black border-2 hover:bg-accent transition-all">
                Become a Tutor
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="border-4 border-background w-12 h-12">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${i + 10}`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="w-12 h-12 rounded-full bg-accent border-4 border-background flex items-center justify-center text-xs font-bold">
                  +2k
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="font-bold ml-1 text-lg">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">Average tutor rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image/Illustration with Glassmorphism Cards */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
               <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Student learning"
                className="w-full h-full object-cover rounded-3xl"
               />
               
               {/* Floating Cards */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 -left-10 bg-background/80 backdrop-blur-xl p-4 rounded-2xl border shadow-2xl hidden md:block"
               >
                 <div className="flex items-center gap-3">
                   <div className="bg-green-500/10 p-2 rounded-lg">
                     <CheckCircle className="h-6 w-6 text-green-500" />
                   </div>
                   <div>
                     <p className="text-sm font-bold">Session Confirmed</p>
                     <p className="text-xs text-muted-foreground">Math with Dr. Sarah</p>
                   </div>
                 </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 20, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-20 -right-10 bg-background/80 backdrop-blur-xl p-5 rounded-2xl border shadow-2xl hidden md:block"
               >
                 <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                       <Users className="h-5 w-5 text-primary" />
                       <span className="text-sm font-bold">120+ Active Tutors</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: "85%" }}
                         transition={{ duration: 2, delay: 1 }}
                         className="h-full bg-primary" 
                       />
                    </div>
                 </div>
               </motion.div>
            </div>

            {/* Background geometric shapes */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-foreground/10 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-dashed border-foreground/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
