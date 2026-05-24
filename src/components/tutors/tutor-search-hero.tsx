"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Search, MapPin, GraduationCap, Sparkles, Zap, Users, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function TutorSearchHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full font-bold mb-6">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              TOP 1% GLOBAL TALENT
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1]">
              Find the <span className="text-primary italic">Perfect</span> Tutor <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Instantly.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
          >
            Connect with world-class mentors for 1-on-1 personalized learning. 
            Experience the future of education today.
          </motion.p>

          {/* Smart Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-30"
          >
            <div className="bg-background/80 backdrop-blur-2xl border-2 border-primary/10 rounded-[2.5rem] p-2 shadow-2xl flex flex-col md:flex-row items-center gap-2">
               <div className="flex-1 flex items-center px-4 w-full border-b md:border-b-0 md:border-r border-muted/20 py-2">
                  <Search className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
                  <Input 
                    placeholder="What do you want to learn?" 
                    className="border-none bg-transparent shadow-none focus-visible:ring-0 text-lg font-bold h-12"
                  />
               </div>
               <div className="flex-1 flex items-center px-4 w-full border-b md:border-b-0 md:border-r border-muted/20 py-2">
                  <MapPin className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
                  <Input 
                    placeholder="City or 'Online'" 
                    className="border-none bg-transparent shadow-none focus-visible:ring-0 text-lg font-bold h-12"
                  />
               </div>
               <div className="flex-1 flex items-center px-4 w-full py-2">
                  <GraduationCap className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
                  <select className="bg-transparent border-none outline-none text-lg font-bold w-full h-12">
                     <option>Select Grade</option>
                     <option>Grade 9-10</option>
                     <option>O/A Levels</option>
                     <option>University</option>
                  </select>
               </div>
               <Button size="lg" className="h-14 px-10 rounded-[1.8rem] font-black text-lg gap-2 w-full md:w-auto shadow-xl shadow-primary/20">
                  Search <Zap className="h-5 w-5 fill-current" />
               </Button>
            </div>

            {/* AI Toggle & Trending */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
               <div className="flex items-center space-x-3 bg-primary/5 px-4 py-2 rounded-2xl border border-primary/10">
                  <Label htmlFor="ai-match" className="text-sm font-black uppercase tracking-widest cursor-pointer">AI Recommendations</Label>
                  <Switch id="ai-match" />
               </div>
               
               <div className="flex flex-wrap justify-center gap-3">
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-widest mr-2 py-1.5">Trending:</span>
                  {["IELTS", "Calculus BC", "Python", "Physics", "Piano"].map(t => (
                    <button key={t} className="text-xs font-bold px-4 py-1.5 rounded-full bg-accent/50 border hover:bg-primary/10 hover:border-primary/30 transition-all">
                       {t}
                    </button>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* Live Stats */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { icon: Users, label: "Active Tutors", value: "2,500+" },
               { icon: CheckCircle, label: "Success Rate", value: "99.8%" },
               { icon: Zap, label: "Sessions", value: "150k+" },
               { icon: Star, label: "Avg Rating", value: "4.95" },
             ].map((s, i) => (
               <div key={i} className="space-y-1">
                  <p className="text-3xl font-black text-foreground">{s.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{s.label}</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}
