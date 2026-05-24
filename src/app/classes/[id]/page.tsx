"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { ClassDetailsHero } from "@/components/classes/class-details-hero"
import { ClassCurriculum } from "@/components/classes/class-curriculum"
import { ClassEnrollCard } from "@/components/classes/class-enroll-card"
import { 
  CheckCircle2, 
  MessageSquare, 
  Star, 
  Award, 
  Zap,
  ArrowRight
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const outcomes = [
  "Master React Server Components (RSC) and the App Router architecture.",
  "Implement advanced data fetching patterns with Server Actions.",
  "Optimize application performance with Streaming and Suspense.",
  "Build highly interactive and optimistic UIs with Next.js 15.",
  "Deploy scalable, production-ready applications to the Edge.",
  "Architect complex layouts and nested routing systems."
]

const reviews = [
  {
    name: "Alex Thompson",
    role: "Senior Frontend Engineer",
    rating: 5,
    date: "2 days ago",
    content: "This is hands down the best React/Next.js course I've ever taken. Michael explains complex topics like RSC and streaming with incredible clarity. The live sessions are pure gold.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Elena Martinez",
    role: "Fullstack Developer",
    rating: 5,
    date: "1 week ago",
    content: "The live interactive format makes a huge difference. Being able to ask questions and see live coding in real-time is much more effective than pre-recorded videos.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
]

export default function ClassDetailsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <ClassDetailsHero />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content Column */}
            <div className="flex-1 space-y-20">
              
              {/* Learning Outcomes */}
              <div className="bg-accent/30 p-10 md:p-12 rounded-[3rem] border border-primary/10">
                 <h2 className="text-3xl font-black mb-8">What you&apos;ll <span className="text-primary italic">Master</span></h2>
                 <div className="grid md:grid-cols-2 gap-6">
                    {outcomes.map((outcome, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <div className="bg-emerald-500/10 p-1 rounded-full shrink-0 mt-1">
                            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                         </div>
                         <p className="font-bold text-muted-foreground leading-relaxed">{outcome}</p>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Curriculum */}
              <ClassCurriculum />

              {/* Tutor Section */}
              <div className="space-y-8">
                 <h2 className="text-3xl font-black">Meet your <span className="text-primary italic">Instructor</span></h2>
                 <div className="flex flex-col md:flex-row gap-8 items-start">
                    <Avatar className="h-32 w-32 md:h-48 md:w-48 border-4 border-background shadow-2xl rounded-[2.5rem]">
                       <AvatarImage src="https://i.pravatar.cc/150?u=michael" />
                       <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-6">
                       <div>
                          <h3 className="text-3xl font-black mb-2">Michael Chen</h3>
                          <p className="text-lg font-bold text-primary">Senior Software Architect & Next.js Expert</p>
                       </div>
                       <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                          Michael has over 12 years of experience in fullstack development. He has been a core 
                          contributor to several major open-source projects and has mentored thousands of 
                          developers globally. His teaching style focuses on practical, production-ready 
                          patterns and deep architectural understanding.
                       </p>
                       <div className="flex flex-wrap gap-6">
                          <div className="flex items-center gap-2">
                             <Star className="h-5 w-5 text-yellow-400 fill-current" />
                             <span className="font-black">4.9 Instructor Rating</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <Award className="h-5 w-5 text-blue-500" />
                             <span className="font-black">15+ Courses</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <MessageSquare className="h-5 w-5 text-primary" />
                             <span className="font-black">98% Response Rate</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Reviews Section */}
              <div className="space-y-12">
                 <div className="flex justify-between items-end">
                    <h2 className="text-3xl font-black">Student <span className="text-primary italic">Reviews</span></h2>
                    <Button variant="ghost" className="font-black text-primary gap-2">
                       See All Reviews <ArrowRight className="h-4 w-4" />
                    </Button>
                 </div>
                 
                 <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review, i) => (
                      <div key={i} className="p-8 rounded-[2.5rem] bg-background border hover:border-primary/30 transition-all hover:shadow-xl">
                         <div className="flex justify-between items-start mb-6">
                            <div className="flex gap-4 items-center">
                               <Avatar className="h-12 w-12 border-2 border-primary/20">
                                  <AvatarImage src={review.avatar} />
                               </Avatar>
                               <div>
                                  <p className="font-black">{review.name}</p>
                                  <p className="text-xs font-bold text-muted-foreground">{review.role}</p>
                               </div>
                            </div>
                            <div className="flex gap-0.5">
                               {[...Array(5)].map((_, i) => (
                                 <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                               ))}
                            </div>
                         </div>
                         <p className="text-muted-foreground font-medium leading-relaxed italic">&quot;{review.content}&quot;</p>
                         <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-6">{review.date}</p>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Sidebar Enroll Card */}
            <div className="w-full lg:w-[400px]">
               <ClassEnrollCard />
            </div>

          </div>
        </div>
      </section>

      {/* Similar Classes CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
         <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <Badge className="bg-white/20 text-white border-none mb-6 px-4 py-1.5 font-black uppercase tracking-widest">LIMITED CAPACITY</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Elevate your <br /><span className="text-white/40 italic underline decoration-white/20">Career Path?</span></h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto font-medium">
               Join Michael Chen and a group of ambitious developers in the next live cohort. 
               Seats are filling up fast for the June session.
            </p>
            <Button size="lg" variant="secondary" className="h-16 px-12 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-transform gap-3">
               Reserve Your Spot <Zap className="h-6 w-6 fill-current" />
            </Button>
         </div>
      </section>

      <Footer />
    </main>
  )
}
