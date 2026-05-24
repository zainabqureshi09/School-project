"use client"

import * as React from "react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { SmartSearch } from "@/components/sections/smart-search"
import { FilterSidebar } from "@/components/sections/filter-sidebar"
import { PremiumTutorCard } from "@/components/sections/premium-tutor-card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { motion, AnimatePresence } from "framer-motion"
import { SlidersHorizontal, LayoutGrid, List, Sparkles, X, ArrowRight, ArrowLeftRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const tutors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Mathematics Specialist",
    education: "PhD, Stanford",
    rating: 4.9,
    reviews: 124,
    price: 65,
    image: "https://i.pravatar.cc/150?u=sarah",
    subjects: ["Calculus", "Linear Algebra", "Statistics"],
    bio: "Passionate educator with over 10 years of experience in higher education. I specialize in making complex mathematical concepts easy to understand.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full Stack Developer",
    education: "M.S. CS, MIT",
    rating: 5.0,
    reviews: 89,
    price: 80,
    image: "https://i.pravatar.cc/150?u=michael",
    subjects: ["Python", "React", "Data Structures"],
    bio: "Ex-Google engineer teaching the next generation of developers. My focus is on practical, industry-standard coding practices.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Language Expert",
    education: "B.A. Linguistics, Oxford",
    rating: 4.8,
    reviews: 210,
    price: 45,
    image: "https://i.pravatar.cc/150?u=elena",
    subjects: ["Spanish", "French", "ESL"],
    bio: "Native speaker with a passion for languages. I use immersive techniques to help you speak with confidence from day one.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Physics Professor",
    education: "PhD, Caltech",
    rating: 4.7,
    reviews: 56,
    price: 75,
    image: "https://i.pravatar.cc/150?u=james",
    subjects: ["Quantum Mechanics", "Astrophysics"],
    bio: "Research scientist turned tutor. I help students navigate the fascinating world of physics through real-world examples.",
  },
]

export default function FindTutorsPage() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [comparingIds, setComparingIds] = React.useState<number[]>([])
  const [isCompareModalOpen, setIsCompareModalOpen] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const toggleCompare = (id: number) => {
    setComparingIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : prev.length < 3 ? [...prev, id] : prev
    )
  }

  const comparingTutors = tutors.filter(t => comparingIds.includes(t.id))

  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="h-4 w-4" /> Discover Elite Mentors
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Master Any Skill with <br />
              <span className="text-primary">World-Class Tutors</span>
            </h1>
            <SmartSearch />
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="hidden lg:block">
               <FilterSidebar />
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 bg-background/50 backdrop-blur-md p-4 rounded-[2rem] border shadow-sm sticky top-24 z-30">
                <div>
                  <p className="text-sm font-bold">Showing <span className="text-primary">124</span> Expert Tutors</p>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                   <select className="h-11 px-4 rounded-xl border bg-background text-sm font-bold outline-none flex-1 sm:flex-none">
                     <option>Recommended</option>
                     <option>Top Rated</option>
                     <option>Price: Low to High</option>
                   </select>
                   <Button variant="outline" className="lg:hidden rounded-xl h-11 border-2">
                     <SlidersHorizontal className="h-4 w-4 mr-2" /> Filters
                   </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {isLoading ? (
                    [1, 2, 3, 4].map((i) => (
                      <div key={i} className="space-y-4">
                        <Skeleton className="aspect-[16/10] w-full rounded-[3rem]" />
                      </div>
                    ))
                  ) : (
                    tutors.map((tutor) => (
                      <PremiumTutorCard 
                        key={tutor.id} 
                        tutor={tutor} 
                        isComparing={comparingIds.includes(tutor.id)}
                        onCompareToggle={toggleCompare}
                      />
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Comparison Bar */}
      <AnimatePresence>
        {comparingIds.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
          >
            <div className="bg-background/80 backdrop-blur-2xl border-2 border-primary/20 rounded-[2.5rem] p-4 shadow-2xl flex items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {comparingTutors.map((t) => (
                    <Avatar key={t.id} className="border-4 border-background w-12 h-12 shadow-xl">
                      <AvatarImage src={t.image} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div>
                   <p className="text-sm font-black">{comparingIds.length} Tutors Selected</p>
                   <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Add up to 3 to compare</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => setIsCompareModalOpen(true)}
                  className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20"
                >
                  Compare Now
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setComparingIds([])}
                  className="rounded-2xl h-12 w-12 hover:bg-red-500/10 hover:text-red-500"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <Dialog open={isCompareModalOpen} onOpenChange={setIsCompareModalOpen}>
        <DialogContent className="max-w-5xl rounded-[3rem] p-10 overflow-hidden">
          <DialogHeader className="mb-8">
             <div className="flex items-center gap-3 text-primary mb-2">
                <ArrowLeftRight className="h-6 w-6" />
                <span className="text-sm font-black uppercase tracking-widest">Tutor Comparison</span>
             </div>
             <DialogTitle className="text-4xl font-black">Find Your Best Match</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-4 gap-8">
             <div className="space-y-12 pt-40">
                <div className="text-sm font-bold uppercase text-muted-foreground tracking-widest h-20 flex items-center">Subject Focus</div>
                <div className="text-sm font-bold uppercase text-muted-foreground tracking-widest h-20 flex items-center">Hourly Rate</div>
                <div className="text-sm font-bold uppercase text-muted-foreground tracking-widest h-20 flex items-center">Rating</div>
                <div className="text-sm font-bold uppercase text-muted-foreground tracking-widest h-20 flex items-center">Experience</div>
             </div>
             
             {comparingTutors.map((t) => (
               <div key={t.id} className="text-center space-y-12">
                  <div className="flex flex-col items-center gap-4">
                     <Avatar className="h-24 w-24 border-4 border-primary/10 shadow-2xl">
                        <AvatarImage src={t.image} />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                     </Avatar>
                     <div>
                        <h4 className="font-bold text-lg">{t.name}</h4>
                        <p className="text-xs text-primary font-bold">{t.role}</p>
                     </div>
                     <Button size="sm" className="rounded-xl w-full">Book Now</Button>
                  </div>
                  
                  <div className="h-20 flex flex-col items-center justify-center gap-1">
                     <p className="font-bold text-sm">{t.subjects[0]}</p>
                     <p className="text-[10px] text-muted-foreground">Main Focus</p>
                  </div>

                  <div className="h-20 flex items-center justify-center">
                     <span className="text-3xl font-black">${t.price}</span>
                  </div>

                  <div className="h-20 flex flex-col items-center justify-center gap-1">
                     <div className="flex gap-0.5"><Star className="h-4 w-4 fill-yellow-500 text-yellow-500" /> <span className="font-bold">{t.rating}</span></div>
                     <p className="text-[10px] text-muted-foreground">{t.reviews} Reviews</p>
                  </div>

                  <div className="h-20 flex items-center justify-center">
                     <span className="font-bold">{t.education}</span>
                  </div>
               </div>
             ))}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  )
}
