"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Zap, Globe, Clock, Calendar, CheckCircle, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function ClassEnrollCard() {
  return (
    <div className="sticky top-28 space-y-6">
      <div className="bg-background border shadow-2xl rounded-[2.5rem] p-8 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-end gap-3">
             <span className="text-4xl font-black text-primary">$49</span>
             <span className="text-xl text-muted-foreground line-through font-bold mb-1">$120</span>
             <Badge className="bg-emerald-500 text-white border-none font-black px-2 py-0.5 mb-1.5 uppercase text-[10px]">
                60% OFF
             </Badge>
          </div>
          
          <div className="space-y-3">
             <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-black shadow-xl shadow-primary/20">
                Enroll in Class
             </Button>
             <Button size="lg" variant="outline" className="w-full h-16 rounded-2xl text-lg font-black">
                Join Free Preview
             </Button>
          </div>

          <p className="text-center text-xs font-bold text-muted-foreground">
             30-Day Money-Back Guarantee
          </p>

          <Separator />

          <div className="space-y-4">
             <p className="text-sm font-black uppercase tracking-widest text-foreground">This Class Includes:</p>
             <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: Video, text: "12 Hours of Live Sessions" },
                  { icon: Globe, text: "Full Lifetime Access" },
                  { icon: Clock, text: "Access on Mobile and TV" },
                  { icon: CheckCircle, text: "Certificate of Completion" },
                  { icon: Calendar, text: "Live Q&A Sessions" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                     <item.icon className="h-4 w-4 text-primary" />
                     {item.text}
                  </div>
                ))}
             </div>
          </div>

          <Separator />

          <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
             <div className="flex items-center gap-3 text-primary mb-2">
                <Zap className="h-5 w-5 fill-current" />
                <span className="text-sm font-black uppercase tracking-widest">Next Live Session</span>
             </div>
             <p className="font-black">May 25, 2026 @ 6:00 PM EST</p>
             <p className="text-xs text-muted-foreground font-bold mt-1">Join Michael Chen for a live deep dive.</p>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-6 p-4 rounded-[2rem] bg-accent/30 border">
         <div className="flex flex-col items-center gap-1">
            <ShieldCheck className="h-6 w-6 text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest">Secure</span>
         </div>
         <div className="flex flex-col items-center gap-1">
            <Globe className="h-6 w-6 text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-widest">Global</span>
         </div>
         <div className="flex flex-col items-center gap-1">
            <CheckCircle className="h-6 w-6 text-purple-500" />
            <span className="text-[10px] font-black uppercase tracking-widest">Vetted</span>
         </div>
      </div>
    </div>
  )
}
