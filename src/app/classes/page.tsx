"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Video, Users, Calendar, Clock, Star, Play, Search, ArrowRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

const classes = [
  {
    id: 1,
    title: "Mastering React Server Components",
    instructor: "Michael Chen",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
    date: "May 25, 2026",
    time: "6:00 PM EST",
    duration: "90 min",
    students: 45,
    price: 25,
    rating: 5.0,
    category: "Technology",
  },
  {
    id: 2,
    title: "SAT Math: Advanced Strategy",
    instructor: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000",
    date: "May 26, 2026",
    time: "4:00 PM EST",
    duration: "120 min",
    students: 120,
    price: 15,
    rating: 4.9,
    category: "Education",
  },
  {
    id: 3,
    title: "Spanish for Business Professionals",
    instructor: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1543165796-5426273eaec3?auto=format&fit=crop&q=80&w=1000",
    date: "May 27, 2026",
    time: "7:00 PM EST",
    duration: "60 min",
    students: 22,
    price: 20,
    rating: 4.8,
    category: "Languages",
  }
]

export default function ClassesPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-white/20 text-white border-none mb-6 px-4 py-1.5 font-bold">LIVE INTERACTIVE CLASSES</Badge>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            >
              Learn Together in <br />
              <span className="text-white/70 italic underline decoration-white/30">Elite Group Sessions</span>
            </motion.h1>
            <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
              Join live, highly interactive classes led by world-class instructors. 
              Real-time collaboration, peer learning, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <div className="relative flex-1 max-w-md text-black">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Search live classes..." className="h-14 pl-12 rounded-2xl bg-white border-none" />
               </div>
               <Button size="lg" variant="secondary" className="h-14 px-10 rounded-2xl font-black text-lg">
                  Explore All
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-3xl md:text-5xl font-black mb-4">Upcoming <span className="text-primary">Live Classes</span></h2>
                <p className="text-muted-foreground text-lg">Book your spot in our most popular upcoming sessions.</p>
             </div>
             <Button variant="ghost" className="font-bold text-primary gap-2 hidden md:flex">
                View Schedule <ArrowRight className="h-4 w-4" />
             </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-background rounded-[3rem] border border-muted/20 overflow-hidden shadow-2xl shadow-primary/5 hover:border-primary/30 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                   <img src={c.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={c.title} />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                   <div className="absolute top-6 left-6">
                      <Badge className="bg-white/20 backdrop-blur-md text-white border-none px-3 py-1 font-bold">
                         {c.category}
                      </Badge>
                   </div>
                   <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-white">
                      <div className="flex items-center gap-2 font-bold text-sm">
                         <Users className="h-4 w-4 text-primary" /> {c.students} Joined
                      </div>
                      <div className="flex items-center gap-1.5 text-yellow-400 font-bold text-sm">
                         <Star className="h-4 w-4 fill-current" /> {c.rating}
                      </div>
                   </div>
                </div>

                <div className="p-8 space-y-6">
                   <div>
                      <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest mb-2">
                         <Calendar className="h-3.5 w-3.5" /> {c.date} • {c.time}
                      </div>
                      <h3 className="text-2xl font-black group-hover:text-primary transition-colors line-clamp-1">{c.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 font-medium">with <span className="text-foreground font-bold">{c.instructor}</span></p>
                   </div>

                   <div className="flex items-center justify-between pt-6 border-t">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm font-bold">
                         <Clock className="h-4 w-4" /> {c.duration}
                      </div>
                      <div className="flex items-center gap-3">
                         <span className="text-2xl font-black text-primary">${c.price}</span>
                         <Button className="rounded-xl font-black shadow-lg shadow-primary/10 px-6">Book Spot</Button>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto px-4 md:px-6">
            <div className="bg-accent/30 p-12 md:p-24 rounded-[4rem] text-center border-2 border-primary/10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
               <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  Hosting an Event? <br />
                  <span className="text-primary underline decoration-primary/20">Become an Instructor</span>
               </h2>
               <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                  Share your expertise with a global audience. Our platform provides the best-in-class tools 
                  for high-fidelity video classes and student engagement.
               </p>
               <div className="flex justify-center gap-6">
                  <Button size="lg" className="h-16 px-12 rounded-2xl text-xl font-black shadow-2xl shadow-primary/20">
                     Apply to Teach
                  </Button>
                  <Button size="lg" variant="outline" className="h-16 px-12 rounded-2xl text-xl font-black border-2 hidden sm:flex">
                     Learn More
                  </Button>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  )
}
