"use client"

import { motion } from "framer-motion"
import { Users, Mic, Video, Settings, Maximize2, Monitor } from "lucide-react"

export function LiveVideoArea() {
  return (
    <div className="relative h-full w-full bg-black rounded-[2rem] overflow-hidden group shadow-2xl">
      {/* Main Instructor Video (Placeholder) */}
      <img 
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover opacity-80"
        alt="Instructor Live"
      />

      {/* Screen Share Overlay (Small) */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="absolute top-6 right-6 w-72 aspect-video bg-accent border-2 border-primary/20 rounded-2xl overflow-hidden shadow-2xl z-10"
      >
         <img 
           src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
           className="w-full h-full object-cover"
           alt="Screen Share"
         />
         <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1.5 text-[8px] font-black text-white uppercase">
            <Monitor className="h-3 w-3" /> Michael&apos;s Screen
         </div>
      </motion.div>

      {/* Bottom Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
         <div className="flex justify-between items-end">
            <div className="space-y-1">
               <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-black text-white">Michael Chen</h2>
                  <div className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase animate-pulse">Live</div>
               </div>
               <p className="text-white/60 font-medium">Topic: Architecting RSC with Next.js 15</p>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-accent overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?u=${i+50}`} />
                    </div>
                  ))}
               </div>
               <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2 text-white text-xs font-bold">
                  <Users className="h-4 w-4" /> 142 Active
               </div>
            </div>
         </div>
      </div>

      {/* Control Overlay (Floating) */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
         {[
           { icon: Maximize2, label: "Fullscreen" },
           { icon: Settings, label: "Quality" },
           { icon: Video, label: "Toggle Camera" },
           { icon: Mic, label: "Mute" }
         ].map((ctrl, i) => (
           <button key={i} className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all">
              <ctrl.icon className="h-5 w-5" />
           </button>
         ))}
      </div>
    </div>
  )
}
