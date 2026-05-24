"use client"

import * as React from "react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Star, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Share2, 
  Heart, 
  Play,
  Calendar as CalendarIcon,
  Award,
  Video,
  ExternalLink,
  Target
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"

const tutor = {
  id: 1,
  name: "Dr. Sarah Johnson",
  role: "Mathematics Specialist",
  education: "PhD in Mathematics, Stanford University",
  rating: 4.9,
  reviews: 124,
  price: 65,
  image: "https://i.pravatar.cc/150?u=sarah",
  banner: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=1500",
  subjects: ["Calculus", "Linear Algebra", "Statistics", "Geometry", "Trigonometry"],
  bio: "I am a dedicated mathematics educator with over a decade of experience in teaching at both high school and university levels. My approach is centered on building a strong conceptual foundation, enabling students to tackle complex problems with confidence.",
  videoUrl: "#",
  skills: ["Problem Solving", "Exam Prep", "Curriculum Design", "SAT/ACT Math"],
  experience: [
    { title: "Senior Mathematics Tutor", institution: "EduElite", period: "2021 - Present", desc: "Leading the math department and mentoring junior tutors while managing a 50+ student roster." },
    { title: "Assistant Professor", institution: "State University", period: "2015 - 2021", desc: "Taught undergraduate calculus and linear algebra courses." },
    { title: "Graduate Research Assistant", institution: "Stanford University", period: "2010 - 2015", desc: "Conducted research in applied mathematics and assisted in teaching labs." },
  ],
  certifications: [
    { title: "Certified Professional Educator", issuer: "NBPTS", year: "2022" },
    { title: "Advanced Tutoring Certification", issuer: "College Reading & Learning Association", year: "2019" },
  ]
}

const timeSlots = [
  "09:00 AM", "10:30 AM", "11:00 AM", "01:00 PM", "03:30 PM", "04:00 PM", "05:00 PM"
]

export default function TutorProfilePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null)
  const [isBookingOpen, setIsBookingOpen] = React.useState(false)

  const handleBooking = () => {
    if (!selectedSlot) return
    setIsBookingOpen(true)
  }

  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      
      {/* Premium Banner Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
         <img src={tutor.banner} className="w-full h-full object-cover" alt="Banner" />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
         
         <div className="absolute bottom-0 left-0 w-full">
            <div className="container mx-auto px-4 md:px-6 pb-12">
               <div className="flex flex-col md:flex-row gap-8 items-end">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative group"
                  >
                    <Avatar className="h-32 w-32 md:h-44 md:w-44 border-8 border-background shadow-2xl">
                      <AvatarImage src={tutor.image} />
                      <AvatarFallback>{tutor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-4 right-4 bg-green-500 h-6 w-6 rounded-full border-4 border-background" />
                  </motion.div>
                  
                  <div className="flex-1 pb-2">
                     <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h1 className="text-4xl md:text-5xl font-black">{tutor.name}</h1>
                        <Badge className="bg-primary/20 text-primary border-none py-1 px-3">
                           <ShieldCheck className="h-4 w-4 mr-1.5" /> Verified
                        </Badge>
                     </div>
                     <p className="text-xl text-primary font-bold mb-4">{tutor.role}</p>
                     <div className="flex flex-wrap gap-6 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                           <MapPin className="h-4 w-4 text-primary" /> Palo Alto, CA
                        </div>
                        <div className="flex items-center gap-2">
                           <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> 
                           <span className="text-foreground">{tutor.rating}</span> ({tutor.reviews} Reviews)
                        </div>
                        <div className="flex items-center gap-2">
                           <Clock className="h-4 w-4 text-primary" /> 2,400+ Sessions
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-4 pb-2">
                     <Button variant="outline" className="rounded-2xl h-14 w-14 border-2">
                        <Share2 className="h-5 w-5" />
                     </Button>
                     <Button variant="outline" className="rounded-2xl h-14 w-14 border-2">
                        <Heart className="h-5 w-5" />
                     </Button>
                     <Button className="rounded-2xl h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20">
                        Chat with Sarah
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Intro Video Card */}
            <section className="relative aspect-video rounded-[3rem] overflow-hidden group cursor-pointer border-4 border-background shadow-2xl">
               <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Intro Video" />
               <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                  <div className="h-24 w-24 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                     <Play className="h-10 w-10 text-white fill-white ml-1" />
                  </div>
               </div>
               <div className="absolute bottom-8 left-8">
                  <p className="text-white text-xl font-bold">Watch Sarah&apos;s Intro</p>
                  <p className="text-white/70 text-sm">See her teaching style in action (1:45)</p>
               </div>
            </section>

            <Tabs defaultValue="about" className="w-full">
              <TabsList className="bg-accent/50 p-1.5 rounded-[1.5rem] border w-full justify-start h-auto gap-1">
                <TabsTrigger value="about" className="rounded-xl px-8 py-4 data-[state=active]:bg-primary data-[state=active]:text-white font-bold">About Me</TabsTrigger>
                <TabsTrigger value="experience" className="rounded-xl px-8 py-4 data-[state=active]:bg-primary data-[state=active]:text-white font-bold">Experience</TabsTrigger>
                <TabsTrigger value="curriculum" className="rounded-xl px-8 py-4 data-[state=active]:bg-primary data-[state=active]:text-white font-bold">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-xl px-8 py-4 data-[state=active]:bg-primary data-[state=active]:text-white font-bold">Reviews</TabsTrigger>
              </TabsList>
              
              <div className="mt-12 space-y-12">
                <TabsContent value="about" className="space-y-12 m-0">
                  <section>
                    <h3 className="text-3xl font-bold mb-6">Biography</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {tutor.bio}
                      <br /><br />
                      My lessons are highly interactive. I don&apos;t just lecture; I engage students with real-world problems and visualization tools. My goal is for you to not only pass your exams but to truly understand and appreciate the beauty of mathematics.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                       <Target className="h-6 w-6 text-primary" /> Key Skills & Focus
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {tutor.skills.map((skill) => (
                         <div key={skill} className="p-4 rounded-2xl bg-accent/30 border font-bold text-sm text-center">
                            {skill}
                         </div>
                       ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold mb-6">Subjects I Teach</h3>
                    <div className="flex flex-wrap gap-3">
                      {tutor.subjects.map((subject) => (
                        <div key={subject} className="px-6 py-3 rounded-2xl bg-primary/5 border-2 border-primary/10 text-primary font-bold">
                          {subject}
                        </div>
                      ))}
                    </div>
                  </section>
                </TabsContent>

                <TabsContent value="experience" className="m-0">
                  <div className="space-y-12">
                    {tutor.experience.map((exp, i) => (
                      <div key={i} className="relative pl-10 before:absolute before:left-0 before:top-2 before:bottom-[-2.5rem] before:w-1 before:bg-accent last:before:hidden">
                        <div className="absolute left-[-12px] top-1 h-7 w-7 rounded-full bg-primary border-4 border-background z-10" />
                        <div className="mb-2">
                           <span className="text-primary font-bold text-sm uppercase tracking-widest">{exp.period}</span>
                           <h4 className="text-2xl font-bold">{exp.title}</h4>
                           <p className="text-muted-foreground font-semibold">{exp.institution}</p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{exp.desc}</p>
                      </div>
                    ))}
                    
                    <div className="pt-8">
                       <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                          <Award className="h-6 w-6 text-primary" /> Certifications
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {tutor.certifications.map((cert) => (
                            <div key={cert.title} className="p-6 rounded-[2rem] border bg-accent/20">
                               <p className="text-primary font-bold text-sm mb-1">{cert.year}</p>
                               <h4 className="font-bold mb-1">{cert.title}</h4>
                               <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="m-0">
                   <div className="space-y-8">
                      <div className="p-8 rounded-[2.5rem] bg-accent/20 border flex flex-col md:flex-row items-center gap-12 mb-12">
                         <div className="text-center">
                            <p className="text-6xl font-black mb-2">{tutor.rating}</p>
                            <div className="flex gap-1 justify-center mb-2">
                               {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />)}
                            </div>
                            <p className="text-sm text-muted-foreground font-bold uppercase">124 Reviews</p>
                         </div>
                         <div className="flex-1 w-full space-y-3">
                            {[5, 4, 3, 2, 1].map((star) => (
                               <div key={star} className="flex items-center gap-4 text-sm font-bold">
                                  <span className="w-4">{star}</span>
                                  <div className="flex-1 h-2 bg-accent rounded-full overflow-hidden">
                                     <div className="h-full bg-yellow-500" style={{ width: star === 5 ? "92%" : star === 4 ? "6%" : "1%" }} />
                                  </div>
                                  <span className="text-muted-foreground">{star === 5 ? "92%" : star === 4 ? "6%" : "1%"}</span>
                               </div>
                            ))}
                         </div>
                      </div>

                      {[1, 2, 3].map((i) => (
                        <div key={i} className="p-8 rounded-[2.5rem] border space-y-4">
                           <div className="flex justify-between items-start">
                              <div className="flex items-center gap-3">
                                 <Avatar className="h-12 w-12">
                                    <AvatarImage src={`https://i.pravatar.cc/150?u=student${i}`} />
                                    <AvatarFallback>S</AvatarFallback>
                                 </Avatar>
                                 <div>
                                    <h4 className="font-bold">Student Name</h4>
                                    <p className="text-xs text-muted-foreground">March {10 + i}, 2026</p>
                                 </div>
                              </div>
                              <div className="flex gap-0.5">
                                 {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-yellow-500 text-yellow-500" />)}
                              </div>
                           </div>
                           <p className="text-muted-foreground">
                              &quot;Dr. Sarah is an amazing tutor! She helped me understand complex calculus concepts that I had been struggling with for weeks. Her teaching style is very patient and clear.&quot;
                           </p>
                        </div>
                      ))}
                   </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Right Column: Booking */}
          <div className="space-y-8">
            <motion.section 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-background p-8 rounded-[3rem] border-2 shadow-2xl shadow-primary/5 sticky top-28"
            >
               <div className="flex justify-between items-end mb-8">
                 <div>
                   <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Standard Rate</p>
                   <span className="text-5xl font-black">${tutor.price}</span>
                   <span className="text-muted-foreground font-bold">/hr</span>
                 </div>
                 <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 rounded-full font-bold">
                    10% Off 5+ Hrs
                 </Badge>
               </div>

               <div className="space-y-6 mb-8">
                 <div>
                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">Select Date</Label>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-[2rem] border bg-accent/20 p-4"
                    />
                 </div>

                 <div>
                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">Available Slots</Label>
                    <div className="grid grid-cols-2 gap-2">
                       {timeSlots.map((slot) => (
                         <button
                           key={slot}
                           onClick={() => setSelectedSlot(slot)}
                           className={cn(
                             "p-3 rounded-xl text-xs font-bold border transition-all",
                             selectedSlot === slot ? "bg-primary text-white border-primary shadow-lg" : "bg-accent/30 hover:border-primary/50"
                           )}
                         >
                            {slot}
                         </button>
                       ))}
                    </div>
                 </div>
               </div>

               <div className="space-y-4">
                  <Button 
                    onClick={handleBooking}
                    disabled={!selectedSlot}
                    className="w-full h-16 rounded-2xl text-xl font-bold shadow-xl shadow-primary/20"
                  >
                    Book {selectedSlot ? `for ${selectedSlot}` : 'Session'}
                  </Button>
                  <Button variant="outline" className="w-full h-16 rounded-2xl text-xl font-bold border-2">
                    Message Sarah
                  </Button>
               </div>

               <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogContent className="sm:max-w-[500px] rounded-[3rem] p-8">
                     <DialogHeader className="text-center">
                        <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                           <CalendarIcon className="h-10 w-10 text-primary" />
                        </div>
                        <DialogTitle className="text-3xl font-black">Confirm Booking</DialogTitle>
                        <DialogDescription className="text-lg">
                           You&apos;re booking a 1-hour session with <span className="text-foreground font-bold">{tutor.name}</span>
                        </DialogDescription>
                     </DialogHeader>
                     
                     <div className="bg-accent/30 p-6 rounded-3xl space-y-4 my-6">
                        <div className="flex justify-between items-center">
                           <span className="text-muted-foreground font-bold">Date</span>
                           <span className="font-bold">{date?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="text-muted-foreground font-bold">Time</span>
                           <span className="font-bold">{selectedSlot}</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="text-muted-foreground font-bold">Price</span>
                           <span className="font-bold">${tutor.price}</span>
                        </div>
                        <Separator className="bg-foreground/10" />
                        <div className="flex justify-between items-center text-xl">
                           <span className="font-black">Total</span>
                           <span className="font-black text-primary">${tutor.price}</span>
                        </div>
                     </div>

                     <div className="space-y-3">
                        <Button className="w-full h-14 rounded-2xl text-lg font-bold">Confirm & Pay</Button>
                        <Button variant="ghost" onClick={() => setIsBookingOpen(false)} className="w-full h-14 rounded-2xl font-bold">Cancel</Button>
                     </div>

                     <p className="text-[10px] text-center text-muted-foreground mt-4">
                        By confirming, you agree to EduElite&apos;s <span className="underline">Cancellation Policy</span> and <span className="underline">Terms of Service</span>.
                     </p>
                  </DialogContent>
               </Dialog>

               <div className="mt-8 pt-8 border-t space-y-4">
                  <div className="flex items-center gap-3 text-sm font-bold">
                     <Video className="h-5 w-5 text-primary" />
                     Lessons held via EduElite HD Video
                  </div>
                  <div className="flex items-center gap-3 text-sm font-bold">
                     <ExternalLink className="h-5 w-5 text-primary" />
                     100% Satisfaction Guarantee
                  </div>
               </div>
            </motion.section>

            {/* Quick Stats Card */}
            <div className="p-8 rounded-[2.5rem] bg-primary text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] translate-x-1/2" />
               <div className="relative z-10">
                  <h4 className="font-bold mb-4 opacity-80">Sarah&apos;s Performance</h4>
                  <div className="space-y-6">
                     <div>
                        <div className="flex justify-between text-sm font-bold mb-2">
                           <span>Response Time</span>
                           <span>98%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/20 rounded-full">
                           <div className="h-full bg-white w-[98%] rounded-full" />
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between text-sm font-bold mb-2">
                           <span>Student Retention</span>
                           <span>85%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/20 rounded-full">
                           <div className="h-full bg-white w-[85%] rounded-full" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
