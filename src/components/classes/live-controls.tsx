"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Monitor, 
  Hand, 
  MessageSquare, 
  Users, 
  PhoneOff, 
  Settings,
  MoreVertical,
  BarChart2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function LiveControls() {
  const [isMicOn, setIsMicOn] = useState(true)
  const [isCamOn, setIsCamOn] = useState(true)

  return (
    <TooltipProvider>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 p-3 bg-background/80 backdrop-blur-2xl border border-primary/10 rounded-[2rem] shadow-2xl"
      >
        <div className="flex items-center gap-1 px-2 border-r pr-4">
           <Tooltip>
              <TooltipTrigger asChild>
                 <Button 
                   onClick={() => setIsMicOn(!isMicOn)}
                   variant="ghost" 
                   className={`h-12 w-12 rounded-xl transition-all ${!isMicOn ? "bg-red-500/10 text-red-500 hover:bg-red-500/20" : "hover:bg-accent"}`}
                 >
                    {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                 </Button>
              </TooltipTrigger>
              <TooltipContent className="rounded-xl font-bold">Mute (Ctrl+D)</TooltipContent>
           </Tooltip>

           <Tooltip>
              <TooltipTrigger asChild>
                 <Button 
                   onClick={() => setIsCamOn(!isCamOn)}
                   variant="ghost" 
                   className={`h-12 w-12 rounded-xl transition-all ${!isCamOn ? "bg-red-500/10 text-red-500 hover:bg-red-500/20" : "hover:bg-accent"}`}
                 >
                    {isCamOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
                 </Button>
              </TooltipTrigger>
              <TooltipContent className="rounded-xl font-bold">Camera (Ctrl+E)</TooltipContent>
           </Tooltip>
        </div>

        <div className="flex items-center gap-1 px-4 border-r pr-6">
           <Tooltip>
              <TooltipTrigger asChild>
                 <Button variant="ghost" className="h-12 w-12 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                    <Monitor className="h-5 w-5" />
                 </Button>
              </TooltipTrigger>
              <TooltipContent className="rounded-xl font-bold">Share Screen</TooltipContent>
           </Tooltip>

           <Tooltip>
              <TooltipTrigger asChild>
                 <Button variant="ghost" className="h-12 w-12 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                    <Hand className="h-5 w-5" />
                 </Button>
              </TooltipTrigger>
              <TooltipContent className="rounded-xl font-bold">Raise Hand</TooltipContent>
           </Tooltip>

           <Tooltip>
              <TooltipTrigger asChild>
                 <Button variant="ghost" className="h-12 w-12 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                    <BarChart2 className="h-5 w-5" />
                 </Button>
              </TooltipTrigger>
              <TooltipContent className="rounded-xl font-bold">Polls & Quizzes</TooltipContent>
           </Tooltip>
        </div>

        <div className="flex items-center gap-1 px-4">
           <Tooltip>
              <TooltipTrigger asChild>
                 <Button variant="ghost" className="h-12 w-12 rounded-xl hover:bg-primary/10 hover:text-primary transition-all">
                    <Settings className="h-5 w-5" />
                 </Button>
              </TooltipTrigger>
              <TooltipContent className="rounded-xl font-bold">Settings</TooltipContent>
           </Tooltip>

           <Button variant="destructive" className="h-12 px-6 rounded-xl font-black gap-2 shadow-xl shadow-red-500/20">
              <PhoneOff className="h-4 w-4" /> Leave
           </Button>
        </div>
      </motion.div>
    </TooltipProvider>
  )
}
