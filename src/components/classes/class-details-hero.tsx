"use client"

import { motion } from "framer-motion"
import { Play, Star, Users, Globe, Clock, Calendar, ShieldCheck, Share2, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ClassDetailsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1.5 font-black text-xs uppercase tracking-wider rounded-full">
                TECHNOLOGY
              </Badge>
              <Badge className="bg-red-500 text-white border-none px-4 py-1.5 font-black text-xs uppercase tracking-wider rounded-full animate-pulse flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                LIVE CLASS
              </Badge>
              <Badge className="bg-accent/50 text-muted-foreground border-none px-4 py-1.5 font-black text-xs uppercase tracking-wider rounded-full">
                ADVANCED
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              Mastering <span className="text-primary italic">React Server Components</span> & Next.js 15
            </h1>

            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl font-medium">
              Dive deep into the future of web development. Learn how to architect, optimize, and deploy 
              high-performance applications with the latest Next.js features.
            </p>

            <div className="flex flex-wrap gap-8 mb-10">
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                     <Star className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                     <p className="text-lg font-black leading-none">4.9/5.0</p>
                     <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">2.4k Ratings</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                     <Users className="h-6 w-6" />
                  </div>
                  <div>
                     <p className="text-lg font-black leading-none">12,450</p>
                     <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Students</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                     <Globe className="h-6 w-6" />
                  </div>
                  <div>
                     <p className="text-lg font-black leading-none">English</p>
                     <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Subtitles Available</p>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-3xl bg-accent/30 border border-primary/10 w-fit">
               <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarImage src="https://i.pravatar.cc/150?u=michael" />
                  <AvatarFallback>MC</AvatarFallback>
               </Avatar>
               <div>
                  <div className="flex items-center gap-2">
                     <p className="text-lg font-black">Michael Chen</p>
                     <ShieldCheck className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="text-sm font-bold text-muted-foreground">Senior Software Architect @ Vercel</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background group aspect-video">
               <img 
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover"
                  alt="Class Preview"
               />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all cursor-pointer">
                  <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                     <Play className="h-10 w-10 fill-current ml-1" />
                  </div>
               </div>
               <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white">
                  <p className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
                     <Clock className="h-4 w-4" /> Watch Preview (2:45)
                  </p>
               </div>
            </div>
            
            {/* Action Buttons */}
            <div className="absolute -bottom-6 right-12 flex gap-3 z-20">
               <Button size="lg" className="h-14 w-14 rounded-2xl bg-white text-primary border-none shadow-xl hover:bg-primary hover:text-white">
                  <Heart className="h-6 w-6" />
               </Button>
               <Button size="lg" className="h-14 w-14 rounded-2xl bg-white text-primary border-none shadow-xl hover:bg-primary hover:text-white">
                  <Share2 className="h-6 w-6" />
               </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
