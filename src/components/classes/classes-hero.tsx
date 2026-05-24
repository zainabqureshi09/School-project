"use client"

import { motion } from "framer-motion"
import { Search, Sparkles, Video, Users, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function ClassesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-1.5 font-bold rounded-full">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              THE FUTURE OF LIVE LEARNING
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
          >
            Explore <span className="text-primary italic">Live</span> Classes <br />
            with <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Top Experts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
          >
            Join highly interactive group sessions, master new skills in real-time, 
            and connect with a global community of ambitious learners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-2xl relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center bg-background/80 backdrop-blur-2xl border-2 border-primary/10 rounded-[2rem] p-2 shadow-2xl">
              <div className="flex-1 flex items-center px-4">
                <Search className="h-6 w-6 text-muted-foreground mr-3" />
                <Input 
                  placeholder="Search by subject, tutor, or keyword..." 
                  className="border-none bg-transparent h-14 text-lg focus-visible:ring-0 shadow-none px-0"
                />
              </div>
              <Button size="lg" className="h-14 px-8 rounded-2xl font-black text-lg gap-2 shadow-xl shadow-primary/20">
                Search <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Smart Suggestions */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="text-sm font-bold text-muted-foreground mr-2 py-1">Trending:</span>
              {["Web Development", "SAT Prep", "Creative Writing", "Data Science", "Piano"].map((tag) => (
                <button 
                  key={tag}
                  className="text-sm font-bold px-4 py-1.5 rounded-full bg-accent/50 border hover:bg-primary/10 hover:border-primary/30 transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated Floating UI Cards (Simplified for now, will add more visual flair later) */}
        <div className="relative mt-24 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Video, label: "Live Sessions", value: "250+", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: Users, label: "Active Students", value: "15.4k", color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { icon: Calendar, label: "Daily Classes", value: "45+", color: "text-purple-500", bg: "bg-purple-500/10" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-background/40 backdrop-blur-xl border border-muted/20 p-8 rounded-[2.5rem] flex items-center gap-6 group hover:border-primary/30 transition-all hover:shadow-2xl"
              >
                <div className={`${stat.bg} ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
