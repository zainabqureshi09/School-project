"use client"

import { motion } from "framer-motion"
import { Star, CheckCircle, Video, Heart, ShieldCheck, Clock, GraduationCap, MapPin, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TutorCardProps {
  tutor: {
    id: number
    name: string
    role: string
    education: string
    rating: number
    reviews: number
    price: number
    image: string
    subjects: string[]
    bio: string
    isVerified?: boolean
    location?: string
  }
  isComparing?: boolean
  onCompareToggle?: (id: number) => void
}

export function PremiumTutorCard({ tutor, isComparing, onCompareToggle }: TutorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      className="group bg-background/60 backdrop-blur-xl rounded-[3rem] border-2 border-transparent hover:border-primary/30 shadow-2xl shadow-primary/5 transition-all relative overflow-hidden flex flex-col h-full"
    >
      {/* Video Preview Overlay (Simulated) */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-[2.8rem]">
        <img 
          src={`https://images.unsplash.com/photo-1544717297-fa327c598015?auto=format&fit=crop&q=80&w=800&u=${tutor.id}`} 
          alt={tutor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <button 
          onClick={() => onCompareToggle?.(tutor.id)}
          className={cn(
            "absolute top-4 left-4 backdrop-blur-md py-1.5 px-3 rounded-full flex gap-1.5 items-center transition-all border-2 z-10",
            isComparing 
              ? "bg-primary text-white border-primary" 
              : "bg-white/10 text-white border-white/20 hover:bg-white/20"
          )}
        >
          {isComparing ? <CheckCircle className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
          <span className="font-bold text-[10px] tracking-wider uppercase">
            {isComparing ? "Comparing" : "Compare"}
          </span>
        </button>

        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
           <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-2.5 rounded-full transition-colors text-white">
             <Heart className="h-5 w-5" />
           </button>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div className="flex items-center gap-3">
            <Avatar className="h-14 w-14 border-2 border-white/50 shadow-2xl">
              <AvatarImage src={tutor.image} />
              <AvatarFallback>{tutor.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-white font-bold text-xl">{tutor.name}</h3>
              <div className="flex items-center gap-1.5 text-yellow-400 text-sm font-bold">
                <Star className="h-4 w-4 fill-current" />
                {tutor.rating} <span className="text-white/60 font-medium">({tutor.reviews})</span>
              </div>
            </div>
          </div>
          <button className="bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white hover:bg-primary transition-colors group/play">
            <Video className="h-5 w-5 transition-transform group-hover/play:scale-110" />
          </button>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-primary font-bold text-sm uppercase tracking-widest mb-1">{tutor.role}</p>
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
              <GraduationCap className="h-3.5 w-3.5" />
              {tutor.education}
            </div>
          </div>
          <div className="text-right">
             <div className="flex items-baseline gap-1">
               <span className="text-3xl font-black">${tutor.price}</span>
               <span className="text-muted-foreground text-xs font-bold uppercase">/hr</span>
             </div>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-6">
          {tutor.bio}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tutor.subjects.map((s) => (
            <Badge key={s} variant="secondary" className="rounded-xl bg-accent/50 text-[10px] px-3 py-1 font-bold">
              {s}
            </Badge>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-4">
          <Link href={`/tutor/${tutor.id}`} className="w-full">
            <Button variant="outline" className="w-full h-14 rounded-2xl font-bold border-2">View Profile</Button>
          </Link>
          <Button className="w-full h-14 rounded-2xl font-bold shadow-xl shadow-primary/20">Book Now</Button>
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors" />
    </motion.div>
  )
}
