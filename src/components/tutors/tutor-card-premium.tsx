"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Star, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Play, 
  Heart, 
  MessageSquare, 
  Calendar, 
  ArrowUpRight,
  Video,
  Zap,
  Users
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export interface Tutor {
  id: number
  name: string
  headline: string
  image: string
  verified: boolean
  isOnline: boolean
  rating: number
  reviewsCount: number
  experience: number
  hourlyRate: number
  location: string
  subjects: string[]
  nextAvailable: string
  studentsTaught: number
  languages: string[]
  introVideoUrl?: string
  board: string[]
}

interface TutorCardPremiumProps {
  tutor: Tutor
  isFavorite?: boolean
  isComparing?: boolean
  onToggleFavorite?: (id: number) => void
  onToggleCompare?: (id: number) => void
  onViewProfile?: (tutor: Tutor) => void
}

export function TutorCardPremium({ 
  tutor, 
  isFavorite, 
  isComparing,
  onToggleFavorite, 
  onToggleCompare,
  onViewProfile 
}: TutorCardPremiumProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group relative bg-background rounded-[2.5rem] border border-muted/20 overflow-hidden shadow-2xl shadow-primary/5 hover:border-primary/30 transition-all flex flex-col h-full"
    >
      {/* Top Profile Section */}
      <div className="p-6 pb-0 flex gap-6">
        <div className="relative">
          <div className="relative h-24 w-24 rounded-3xl overflow-hidden border-4 border-background shadow-xl">
             <Avatar className="h-full w-full rounded-none">
                <AvatarImage src={tutor.image} className="object-cover" />
                <AvatarFallback>{tutor.name[0]}</AvatarFallback>
             </Avatar>
             {/* Intro Video Button */}
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40">
                   <Play className="h-4 w-4 fill-current ml-0.5" />
                </div>
             </div>
          </div>
          {/* Online Indicator */}
          {tutor.isOnline && (
            <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-emerald-500 border-4 border-background shadow-lg" />
          )}
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black">{tutor.name}</h3>
              {tutor.verified && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                       <ShieldCheck className="h-5 w-5 text-blue-500" />
                    </TooltipTrigger>
                    <TooltipContent className="font-bold">Verified Expert</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
            <div className="flex gap-2">
               <button 
                 onClick={() => onToggleFavorite?.(tutor.id)}
                 className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isFavorite ? 'bg-red-500/10 text-red-500' : 'bg-accent/30 text-muted-foreground hover:bg-red-500/10 hover:text-red-500'}`}
               >
                 <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
               </button>
               <button 
                 onClick={() => onToggleCompare?.(tutor.id)}
                 className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isComparing ? 'bg-primary text-white' : 'bg-accent/30 text-muted-foreground hover:bg-primary/10 hover:text-primary'}`}
               >
                 <Zap className="h-5 w-5" />
               </button>
            </div>
          </div>
          
          <p className="text-sm font-bold text-primary leading-tight">{tutor.headline}</p>
          
          <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground">
             <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-foreground">{tutor.rating}</span>
                <span>({tutor.reviewsCount} reviews)</span>
             </div>
             <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-primary" />
                <span>{tutor.experience}y Experience</span>
             </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Subjects & Details */}
      <div className="p-6 space-y-6 flex-1">
        <div className="flex flex-wrap gap-2">
           {tutor.subjects.slice(0, 3).map((subject) => (
             <Badge key={subject} variant="secondary" className="bg-primary/5 text-primary border-primary/10 font-bold px-3 py-1">
                {subject}
             </Badge>
           ))}
           {tutor.subjects.length > 3 && (
             <Badge variant="outline" className="font-bold border-dashed text-muted-foreground">
                +{tutor.subjects.length - 3} more
             </Badge>
           )}
        </div>

        <div className="grid grid-cols-2 gap-4 bg-accent/20 p-4 rounded-3xl border border-muted/10">
           <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Hourly Rate</p>
              <p className="text-2xl font-black text-foreground">${tutor.hourlyRate}</p>
           </div>
           <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Next Available</p>
              <p className="text-xs font-black text-primary flex items-center gap-1.5">
                 <Calendar className="h-3 w-3" /> {tutor.nextAvailable}
              </p>
           </div>
        </div>

        <div className="flex items-center justify-between text-xs font-bold text-muted-foreground pt-2">
           <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              {tutor.location}
           </div>
           <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              {tutor.studentsTaught} Students
           </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 flex gap-3">
         <Button 
           variant="outline" 
           className="flex-1 rounded-2xl h-12 font-bold border-2 hover:bg-accent group/btn"
           onClick={() => onViewProfile?.(tutor)}
         >
            Profile 
            <ArrowUpRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
         </Button>
         <Button className="flex-1 rounded-2xl h-12 font-black shadow-xl shadow-primary/20 gap-2">
            Book Now
            <Zap className="h-4 w-4 fill-current" />
         </Button>
      </div>

      {/* Hover Background Accent */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </motion.div>
  )
}
