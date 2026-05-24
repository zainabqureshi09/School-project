"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { ClassesHero } from "@/components/classes/classes-hero"
import { ClassesFilters } from "@/components/classes/classes-filters"
import { ClassCardPremium } from "@/components/classes/class-card-premium"
import { motion } from "framer-motion"
import { LayoutGrid, List, SlidersHorizontal, Sparkles, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const classes = [
  {
    id: 1,
    title: "Mastering React Server Components & Next.js 15",
    instructor: "Michael Chen",
    instructorImage: "https://i.pravatar.cc/150?u=michael",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
    date: "May 25, 2026",
    time: "6:00 PM EST",
    duration: "90 min",
    students: 142,
    price: 49,
    rating: 5.0,
    category: "Technology",
    isLive: true,
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Advanced SAT Mathematics: Strategies for a 1600",
    instructor: "Dr. Sarah Johnson",
    instructorImage: "https://i.pravatar.cc/150?u=sarah",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000",
    date: "May 26, 2026",
    time: "4:00 PM EST",
    duration: "120 min",
    students: 89,
    price: 35,
    rating: 4.9,
    category: "Education",
    isLive: false,
    difficulty: "Expert",
  },
  {
    id: 3,
    title: "Business Spanish: Communication for Professionals",
    instructor: "Elena Rodriguez",
    instructorImage: "https://i.pravatar.cc/150?u=elena",
    image: "https://images.unsplash.com/photo-1543165796-5426273eaec3?auto=format&fit=crop&q=80&w=1000",
    date: "May 27, 2026",
    time: "7:00 PM EST",
    duration: "60 min",
    students: 45,
    price: 29,
    rating: 4.8,
    category: "Languages",
    isLive: true,
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "Data Science Fundamentals with Python",
    instructor: "David Miller",
    instructorImage: "https://i.pravatar.cc/150?u=david",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    date: "May 28, 2026",
    time: "5:00 PM EST",
    duration: "95 min",
    students: 112,
    price: 45,
    rating: 4.9,
    category: "Technology",
    isLive: false,
    difficulty: "Beginner",
  },
  {
    id: 5,
    title: "Creative Writing: Building Immersive Worlds",
    instructor: "Aria Thorne",
    instructorImage: "https://i.pravatar.cc/150?u=aria",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000",
    date: "May 29, 2026",
    time: "6:30 PM EST",
    duration: "75 min",
    students: 64,
    price: 19,
    rating: 4.7,
    category: "Creative Arts",
    isLive: true,
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "Quantum Physics for Beginners",
    instructor: "Prof. Alan Turing",
    instructorImage: "https://i.pravatar.cc/150?u=alan",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
    date: "May 30, 2026",
    time: "2:00 PM EST",
    duration: "110 min",
    students: 130,
    price: 55,
    rating: 5.0,
    category: "Science",
    isLive: false,
    difficulty: "Advanced",
  }
]

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <ClassesHero />

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Filters */}
            <div className="hidden lg:block">
              <ClassesFilters />
            </div>

            {/* Content Column */}
            <div className="flex-1 space-y-8">
              
              {/* Header & View Controls */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-accent/30 p-6 rounded-[2rem] border">
                <div>
                   <h2 className="text-2xl font-black flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Showing <span className="text-primary">{classes.length}</span> Premium Classes
                   </h2>
                   <p className="text-sm text-muted-foreground font-bold">Based on your current filters and interests.</p>
                </div>
                
                <div className="flex items-center gap-3">
                   <div className="flex bg-background rounded-xl p-1 border">
                      <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-lg bg-primary/10 text-primary">
                         <LayoutGrid className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-9 w-9 p-0 rounded-lg text-muted-foreground">
                         <List className="h-4 w-4" />
                      </Button>
                   </div>
                   
                   <DropdownMenu>
                      <DropdownMenuTrigger>
                         <Button variant="outline" className="h-11 rounded-xl font-bold gap-2">
                            Sort by: <span className="text-primary">Newest First</span>
                            <SlidersHorizontal className="h-4 w-4" />
                         </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
                         <DropdownMenuItem className="rounded-lg font-bold">Price: Low to High</DropdownMenuItem>
                         <DropdownMenuItem className="rounded-lg font-bold">Price: High to Low</DropdownMenuItem>
                         <DropdownMenuItem className="rounded-lg font-bold">Popularity</DropdownMenuItem>
                         <DropdownMenuItem className="rounded-lg font-bold">Rating</DropdownMenuItem>
                      </DropdownMenuContent>
                   </DropdownMenu>
                   
                   <Button variant="outline" className="lg:hidden h-11 rounded-xl font-bold">
                      Filters
                   </Button>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {classes.map((c) => (
                  <ClassCardPremium key={c.id} {...c} />
                ))}
              </div>

              {/* Pagination / Load More */}
              <div className="pt-12 flex justify-center">
                 <Button variant="outline" size="lg" className="h-16 px-12 rounded-[1.5rem] text-lg font-black border-2 hover:bg-primary hover:text-white transition-all">
                    Load More Classes
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended for You Bento Section */}
      <section className="py-24 bg-accent/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Recommended for <span className="text-primary italic">You</span></h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                Our AI-driven engine suggests these classes based on your learning history and interests.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-auto md:h-[600px]">
              <div className="md:col-span-2 lg:col-span-3 bg-background rounded-[3rem] border-2 border-primary/10 p-10 flex flex-col justify-between group hover:border-primary/40 transition-all cursor-pointer overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors" />
                 <div>
                    <Badge className="bg-primary/10 text-primary mb-6">MOST RELEVANT</Badge>
                    <h3 className="text-4xl font-black mb-6 leading-tight">Advanced AI Engineering with <span className="text-primary">Large Language Models</span></h3>
                    <p className="text-muted-foreground text-lg font-medium leading-relaxed">Master the latest techniques in LLM orchestration, prompt engineering, and fine-tuning.</p>
                 </div>
                 <div className="flex items-center justify-between mt-8 relative z-10">
                    <div className="flex items-center gap-3">
                       <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarImage src="https://i.pravatar.cc/150?u=tech" />
                          <AvatarFallback>AI</AvatarFallback>
                       </Avatar>
                       <div>
                          <p className="font-black">Dr. Julian Voss</p>
                          <p className="text-xs font-bold text-muted-foreground uppercase">AI Researcher @ OpenAI</p>
                       </div>
                    </div>
                    <Button size="icon" className="h-14 w-14 rounded-2xl group-hover:scale-110 transition-transform">
                       <ArrowUpRight className="h-6 w-6" />
                    </Button>
                 </div>
              </div>
              
              <div className="md:col-span-2 lg:col-span-3 bg-primary rounded-[3rem] p-10 text-white flex flex-col justify-between group cursor-pointer relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                 <div>
                    <Badge className="bg-white/20 text-white border-none mb-6">FAST TRACK</Badge>
                    <h3 className="text-4xl font-black mb-6 leading-tight text-white">The Complete <span className="text-white/60">Digital Marketing</span> Bootcamp</h3>
                    <p className="text-primary-foreground/80 text-lg font-medium leading-relaxed">Go from zero to pro in digital marketing strategies, SEO, and paid advertising.</p>
                 </div>
                 <div className="mt-8 flex items-center justify-between">
                    <div className="flex -space-x-4">
                       {[1,2,3].map(i => (
                         <Avatar key={i} className="h-12 w-12 border-4 border-primary">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${i+30}`} />
                         </Avatar>
                       ))}
                       <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center font-black text-sm border-4 border-primary">
                          +12
                       </div>
                    </div>
                    <Button variant="secondary" className="h-14 px-8 rounded-2xl font-black text-lg">
                       Enroll $29
                    </Button>
                 </div>
              </div>

              <div className="md:col-span-2 lg:col-span-2 bg-background rounded-[3rem] border-2 border-muted/20 p-8 flex flex-col justify-between hover:border-primary/30 transition-all cursor-pointer">
                 <div className="bg-purple-500/10 text-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <LayoutGrid className="h-6 w-6" />
                 </div>
                 <h4 className="text-2xl font-black mb-2">Modern UX/UI Design</h4>
                 <p className="text-muted-foreground text-sm font-bold mb-6">Build pixel-perfect interfaces that delight users.</p>
                 <div className="flex items-center gap-2 text-primary font-black">
                    $19 <ArrowUpRight className="h-4 w-4" />
                 </div>
              </div>

              <div className="md:col-span-2 lg:col-span-2 bg-background rounded-[3rem] border-2 border-muted/20 p-8 flex flex-col justify-between hover:border-primary/30 transition-all cursor-pointer">
                 <div className="bg-emerald-500/10 text-emerald-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="h-6 w-6" />
                 </div>
                 <h4 className="text-2xl font-black mb-2">Public Speaking Mastery</h4>
                 <p className="text-muted-foreground text-sm font-bold mb-6">Command the stage and speak with confidence.</p>
                 <div className="flex items-center gap-2 text-primary font-black">
                    $25 <ArrowUpRight className="h-4 w-4" />
                 </div>
              </div>

              <div className="md:col-span-4 lg:col-span-2 bg-accent/30 rounded-[3rem] border-2 border-dashed border-primary/20 p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-primary/5 transition-all">
                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <List className="h-8 w-8" />
                 </div>
                 <h4 className="text-2xl font-black mb-2">See Your Roadmap</h4>
                 <p className="text-muted-foreground text-sm font-bold">Personalized learning paths designed just for you.</p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
