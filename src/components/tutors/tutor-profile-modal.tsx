"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  X, 
  Star, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Play, 
  Heart, 
  Calendar, 
  Zap, 
  Users, 
  GraduationCap, 
  Award,
  BookOpen,
  Globe,
  CheckCircle2
} from "lucide-react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tutor } from "./tutor-card-premium"

interface TutorProfileModalProps {
  tutor: Tutor | null
  isOpen: boolean
  onClose: () => void
}

export function TutorProfileModal({ tutor, isOpen, onClose }: TutorProfileModalProps) {
  if (!tutor) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[3rem] border-none shadow-2xl">
        <div className="relative h-full max-h-[90vh] overflow-y-auto no-scrollbar bg-background">
          {/* Hero Header */}
          <div className="relative h-64 bg-primary/5 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
             <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-10">
                <Badge className="bg-white/20 backdrop-blur-md text-primary border-primary/20 px-4 py-1.5 font-black uppercase text-[10px] tracking-widest">
                   Tutor Profile
                </Badge>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-foreground hover:bg-white transition-all"
                >
                   <X className="h-5 w-5" />
                </button>
             </div>
             {/* Decorative Circles */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          <div className="px-8 md:px-12 -mt-20 relative z-20 pb-12">
             <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative">
                   <Avatar className="h-40 w-40 border-8 border-background shadow-2xl rounded-[2.5rem]">
                      <AvatarImage src={tutor.image} className="object-cover" />
                      <AvatarFallback>{tutor.name[0]}</AvatarFallback>
                   </Avatar>
                   {tutor.isOnline && (
                     <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-emerald-500 border-4 border-background shadow-lg" />
                   )}
                </div>
                
                <div className="flex-1 space-y-4 pt-20 md:pt-4">
                   <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-4xl font-black">{tutor.name}</h2>
                      {tutor.verified && <ShieldCheck className="h-6 w-6 text-blue-500" />}
                      <Badge variant="outline" className="rounded-full border-primary/20 text-primary font-bold">
                         Elite Level
                      </Badge>
                   </div>
                   <p className="text-xl font-bold text-primary">{tutor.headline}</p>
                   <div className="flex flex-wrap gap-6 text-sm font-bold text-muted-foreground">
                      <div className="flex items-center gap-2">
                         <Star className="h-5 w-5 text-yellow-400 fill-current" />
                         <span className="text-foreground">{tutor.rating}</span>
                         <span>({tutor.reviewsCount} Reviews)</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <MapPin className="h-5 w-5 text-primary" />
                         <span>{tutor.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <Globe className="h-5 w-5 text-primary" />
                         <span>{tutor.languages.join(", ")}</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="grid lg:grid-cols-3 gap-12 mt-12">
                {/* Left Column: Details */}
                <div className="lg:col-span-2 space-y-12">
                   {/* Intro Video */}
                   <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-accent group cursor-pointer shadow-xl">
                      <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                            <Play className="h-8 w-8 fill-current ml-1" />
                         </div>
                      </div>
                      <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs font-black uppercase tracking-widest">
                         Watch Intro Video
                      </div>
                   </div>

                   {/* Stats Bento */}
                   <div className="grid grid-cols-3 gap-4">
                      {[
                        { icon: Users, label: "Students", value: tutor.studentsTaught },
                        { icon: Clock, label: "Exp. Years", value: tutor.experience },
                        { icon: Award, label: "Success Rate", value: "98%" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-accent/30 p-6 rounded-[2rem] border border-muted/10 flex flex-col items-center text-center gap-2">
                           <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                              <stat.icon className="h-6 w-6" />
                           </div>
                           <p className="text-2xl font-black">{stat.value}</p>
                           <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                   </div>

                   {/* About */}
                   <div className="space-y-6">
                      <h3 className="text-2xl font-black flex items-center gap-3">
                         <BookOpen className="h-6 w-6 text-primary" /> About Me
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                         I am a dedicated professional with extensive experience in my field. My teaching methodology 
                         is student-centric, focusing on practical application and deep conceptual understanding. 
                         I believe that every student has a unique learning style, and I tailor my sessions 
                         to match those individual needs.
                      </p>
                   </div>

                   {/* Subjects & Board */}
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <h4 className="text-lg font-black uppercase tracking-widest text-muted-foreground">Expert Subjects</h4>
                         <div className="flex flex-wrap gap-2">
                            {tutor.subjects.map(s => <Badge key={s} className="bg-primary/10 text-primary border-primary/10 px-3 py-1 font-bold">{s}</Badge>)}
                         </div>
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-lg font-black uppercase tracking-widest text-muted-foreground">Curriculum Systems</h4>
                         <div className="flex flex-wrap gap-2">
                            {tutor.board.map(b => <Badge key={b} variant="outline" className="border-primary/20 text-foreground font-bold px-3 py-1">{b}</Badge>)}
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right Column: Booking Widget */}
                <div className="space-y-8">
                   <div className="sticky top-0 bg-background border-2 border-primary/10 rounded-[2.5rem] p-8 shadow-2xl space-y-6">
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Hourly Rate</p>
                            <p className="text-4xl font-black text-primary">${tutor.hourlyRate}</p>
                         </div>
                         <div className="text-right">
                            <Badge className="bg-emerald-500 text-white border-none font-black px-2 py-0.5 mb-1.5 uppercase text-[10px]">
                               INSTANT BOOK
                            </Badge>
                         </div>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                         <p className="text-sm font-black uppercase tracking-widest">Next Available Slot</p>
                         <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                            <div className="flex items-center gap-3 text-primary mb-2">
                               <Calendar className="h-5 w-5" />
                               <span className="font-black">{tutor.nextAvailable}</span>
                            </div>
                            <p className="text-[10px] text-muted-foreground font-bold">Times displayed in your local timezone.</p>
                         </div>
                      </div>

                      <div className="space-y-3">
                         <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 gap-2">
                            Book a Session <Zap className="h-5 w-5 fill-current" />
                         </Button>
                         <Button size="lg" variant="outline" className="w-full h-16 rounded-2xl text-lg font-black">
                            Message Tutor
                         </Button>
                      </div>

                      <div className="space-y-4 pt-4">
                         {[
                           "30-minute free trial available",
                           "Response time: < 1 hour",
                           "Background check cleared"
                         ].map((text, i) => (
                           <div key={i} className="flex items-center gap-3 text-xs font-bold text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                              {text}
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Trust Indicator */}
                   <div className="p-6 bg-accent/20 rounded-[2rem] border border-dashed border-primary/20">
                      <p className="text-xs font-bold text-center text-muted-foreground italic">
                        &quot;Zain had a session with Sarah yesterday and rated it 5 stars.&quot;
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
