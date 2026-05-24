"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  Star, 
  Clock, 
  Calendar, 
  ArrowUpRight, 
  Heart, 
  Play,
  ShieldCheck,
  Zap
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

interface ClassCardProps {
  id: number
  title: string
  instructor: string
  instructorImage: string
  image: string
  date: string
  time: string
  duration: string
  students: number
  price: number
  rating: number
  category: string
  isLive?: boolean
  difficulty: string
}

export function ClassCardPremium({ 
  title, 
  instructor, 
  instructorImage,
  image, 
  date, 
  time, 
  duration, 
  students, 
  price, 
  rating, 
  category,
  isLive = false,
  difficulty
}: ClassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-background rounded-[2.5rem] border border-muted/20 overflow-hidden shadow-2xl shadow-primary/5 hover:border-primary/30 transition-all flex flex-col h-full relative"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Floating Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 px-3 py-1 font-black text-[10px] uppercase tracking-wider">
            {category}
          </Badge>
          {isLive && (
            <Badge className="bg-red-500 text-white border-none px-3 py-1 font-black text-[10px] uppercase tracking-wider animate-pulse flex items-center gap-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Live Now
            </Badge>
          )}
        </div>

        <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all z-10">
          <Heart className="h-5 w-5" />
        </button>

        {/* Play Preview Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
           <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform">
              <Play className="h-6 w-6 fill-current ml-1" />
           </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white">
           <div className="flex items-center gap-2 font-black text-xs">
              <Users className="h-4 w-4 text-primary" /> {students} Enrolled
           </div>
           <div className="flex items-center gap-1.5 text-yellow-400 font-black text-xs bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
              <Star className="h-3.5 w-3.5 fill-current" /> {rating}
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
           <Avatar className="h-8 w-8 border border-primary/20">
              <AvatarImage src={instructorImage} />
              <AvatarFallback>{instructor[0]}</AvatarFallback>
           </Avatar>
           <span className="text-sm font-bold text-muted-foreground">with <span className="text-foreground">{instructor}</span></span>
           {instructor === "Michael Chen" && <ShieldCheck className="h-4 w-4 text-blue-500" />}
        </div>

        <h3 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {title}
        </h3>

        <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t">
           <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
              <Calendar className="h-3.5 w-3.5 text-primary" /> {date}
           </div>
           <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
              <Clock className="h-3.5 w-3.5 text-primary" /> {time} ({duration})
           </div>
        </div>

        <div className="mt-6 space-y-3">
           <div className="flex justify-between items-end">
              <div className="flex flex-col">
                 <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Price</span>
                 <span className="text-3xl font-black text-primary">${price}</span>
              </div>
              <Button className="rounded-2xl font-black shadow-xl shadow-primary/10 px-6 h-12 gap-2">
                 Enroll Now <ArrowUpRight className="h-4 w-4" />
              </Button>
           </div>
           <div className="space-y-1.5">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                 <span className="text-muted-foreground">Class Capacity</span>
                 <span className="text-primary">{Math.round((students / 150) * 100)}% Full</span>
              </div>
              <Progress value={(students / 150) * 100} className="h-1.5" />
           </div>
        </div>
      </div>
    </motion.div>
  )
}
