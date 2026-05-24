"use client"

import * as React from "react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { TutorSearchHero } from "@/components/tutors/tutor-search-hero"
import { TutorFilters } from "@/components/tutors/tutor-filters"
import { TutorCardPremium, Tutor } from "@/components/tutors/tutor-card-premium"
import { TutorProfileModal } from "@/components/tutors/tutor-profile-modal"
import { motion, AnimatePresence } from "framer-motion"
import { 
  LayoutGrid, 
  List, 
  SlidersHorizontal, 
  Sparkles, 
  X, 
  ArrowLeftRight, 
  Star, 
  ArrowUpRight,
  Zap,
  Info,
  ChevronDown,
  ShieldCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const tutorsData: Tutor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    headline: "Mathematics PhD with 12+ Years Experience",
    image: "https://i.pravatar.cc/150?u=sarah",
    verified: true,
    isOnline: true,
    rating: 4.9,
    reviewsCount: 124,
    experience: 12,
    hourlyRate: 65,
    location: "Online / Lahore",
    subjects: ["Calculus", "Linear Algebra", "SAT Math"],
    nextAvailable: "Today, 6:00 PM",
    studentsTaught: 1250,
    languages: ["English", "Urdu"],
    board: ["O/A Levels", "IB", "SAT"]
  },
  {
    id: 2,
    name: "Michael Chen",
    headline: "Senior Full Stack Engineer & Computer Science Mentor",
    image: "https://i.pravatar.cc/150?u=michael",
    verified: true,
    isOnline: false,
    rating: 5.0,
    reviewsCount: 89,
    experience: 8,
    hourlyRate: 85,
    location: "Online / Dubai",
    subjects: ["Python", "React", "Data Structures"],
    nextAvailable: "Tomorrow, 4:00 PM",
    studentsTaught: 450,
    languages: ["English", "Mandarin"],
    board: ["University", "Professional"]
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    headline: "Linguistics Expert & Polyglot (5+ Languages)",
    image: "https://i.pravatar.cc/150?u=elena",
    verified: true,
    isOnline: true,
    rating: 4.8,
    reviewsCount: 210,
    experience: 15,
    hourlyRate: 45,
    location: "Online",
    subjects: ["Spanish", "French", "IELTS"],
    nextAvailable: "Available Now",
    studentsTaught: 3200,
    languages: ["Spanish", "French", "English"],
    board: ["IB", "AP", "IELTS"]
  },
  {
    id: 4,
    name: "James Wilson",
    headline: "Quantum Physics Researcher & AP Physics Tutor",
    image: "https://i.pravatar.cc/150?u=james",
    verified: false,
    isOnline: true,
    rating: 4.7,
    reviewsCount: 56,
    experience: 5,
    hourlyRate: 75,
    location: "Online / Islamabad",
    subjects: ["Physics", "Mechanics", "Astrophysics"],
    nextAvailable: "Wed, 10:00 AM",
    studentsTaught: 180,
    languages: ["English"],
    board: ["A Levels", "AP", "Matric"]
  },
  {
    id: 5,
    name: "Ayesha Malik",
    headline: "Chemistry Specialist (O/A Level Gold Medalist)",
    image: "https://i.pravatar.cc/150?u=ayesha",
    verified: true,
    isOnline: false,
    rating: 4.95,
    reviewsCount: 142,
    experience: 7,
    hourlyRate: 50,
    location: "Karachi / Online",
    subjects: ["Chemistry", "Organic Chem", "Biology"],
    nextAvailable: "Today, 8:00 PM",
    studentsTaught: 950,
    languages: ["Urdu", "English"],
    board: ["O/A Levels", "AKU-EB"]
  },
  {
    id: 6,
    name: "David Miller",
    headline: "Economics & Business Strategy Mentor",
    image: "https://i.pravatar.cc/150?u=david",
    verified: true,
    isOnline: true,
    rating: 4.85,
    reviewsCount: 94,
    experience: 10,
    hourlyRate: 70,
    location: "Online",
    subjects: ["Economics", "Accounting", "Business"],
    nextAvailable: "Tomorrow, 11:00 AM",
    studentsTaught: 620,
    languages: ["English", "German"],
    board: ["IB", "A Levels", "University"]
  }
]

import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function FindTutorsPage() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid")
  const [comparingIds, setComparingIds] = React.useState<number[]>([])
  const [isCompareModalOpen, setIsCompareModalOpen] = React.useState(false)
  const [selectedTutor, setSelectedTutor] = React.useState<Tutor | null>(null)
  const [isProfileModalOpen, setIsProfileModalOpen] = React.useState(false)
  const [favorites, setFavorites] = React.useState<number[]>([])

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const toggleCompare = (id: number) => {
    setComparingIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : prev.length < 3 ? [...prev, id] : prev
    )
  }

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const openProfile = (tutor: Tutor) => {
    setSelectedTutor(tutor)
    setIsProfileModalOpen(true)
  }

  const comparingTutors = tutorsData.filter(t => comparingIds.includes(t.id))

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <TutorSearchHero />

      {/* Main Content */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Filters */}
            <div className="hidden lg:block">
               <TutorFilters />
            </div>

            {/* Directory Listing */}
            <div className="flex-1 space-y-10">
              
              {/* Controls Bar */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-accent/20 p-6 rounded-[2.5rem] border border-primary/5 shadow-sm sticky top-24 z-30 backdrop-blur-xl">
                <div>
                   <h2 className="text-2xl font-black flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Showing <span className="text-primary">{tutorsData.length}</span> Elite Tutors
                   </h2>
                   <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">Verified & Vetted Specialists</p>
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-auto">
                   <div className="flex bg-background rounded-2xl p-1 border shadow-inner">
                      <button 
                        onClick={() => setViewMode("grid")}
                        className={`h-10 w-10 flex items-center justify-center rounded-xl transition-all ${viewMode === "grid" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:bg-accent"}`}
                      >
                         <LayoutGrid className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => setViewMode("list")}
                        className={`h-10 w-10 flex items-center justify-center rounded-xl transition-all ${viewMode === "list" ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:bg-accent"}`}
                      >
                         <List className="h-4 w-4" />
                      </button>
                   </div>

                   <DropdownMenu>
                      <DropdownMenuTrigger>
                         <Button variant="outline" className="h-12 rounded-2xl font-bold gap-2 flex-1 md:flex-none border-2">
                            Sort by: <span className="text-primary">Recommended</span>
                            <ChevronDown className="h-4 w-4" />
                         </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-2xl border-none">
                         <DropdownMenuItem className="rounded-xl font-bold py-3">Top Rated</DropdownMenuItem>
                         <DropdownMenuItem className="rounded-xl font-bold py-3">Most Experienced</DropdownMenuItem>
                         <DropdownMenuItem className="rounded-xl font-bold py-3">Price: Low to High</DropdownMenuItem>
                         <DropdownMenuItem className="rounded-xl font-bold py-3">Price: High to Low</DropdownMenuItem>
                      </DropdownMenuContent>
                   </DropdownMenu>

                   <Sheet>
                      <SheetTrigger>
                         <Button variant="outline" className="lg:hidden rounded-2xl h-12 border-2 px-6">
                            <SlidersHorizontal className="h-4 w-4 mr-2" /> Filters
                         </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="w-full sm:w-[400px] p-0 border-none">
                         <div className="h-full overflow-y-auto p-6 pt-12">
                            <TutorFilters />
                         </div>
                      </SheetContent>
                   </Sheet>
                </div>
              </div>

              {/* Tutors Grid */}
              <div className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 xl:grid-cols-2" : "grid-cols-1"}`}>
                <AnimatePresence mode="popLayout">
                  {isLoading ? (
                    [1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="space-y-4">
                        <Skeleton className="h-80 w-full rounded-[3rem]" />
                      </div>
                    ))
                  ) : (
                    tutorsData.map((tutor) => (
                      <TutorCardPremium 
                        key={tutor.id} 
                        tutor={tutor} 
                        isFavorite={favorites.includes(tutor.id)}
                        isComparing={comparingIds.includes(tutor.id)}
                        onToggleFavorite={toggleFavorite}
                        onToggleCompare={toggleCompare}
                        onViewProfile={openProfile}
                      />
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Load More */}
              <div className="pt-12 flex flex-col items-center gap-6">
                 <Button variant="outline" className="h-16 px-12 rounded-[1.8rem] text-lg font-black border-2 hover:bg-primary hover:text-white transition-all shadow-xl shadow-primary/5">
                    Explore More Tutors
                 </Button>
                 <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Showing 6 of 124 tutors
                 </p>
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
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4"
          >
            <div className="bg-background/80 backdrop-blur-2xl border-2 border-primary/20 rounded-[3rem] p-4 shadow-2xl flex items-center justify-between gap-6 overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/5 -z-10" />
              
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {comparingTutors.map((t) => (
                    <motion.div key={t.id} layoutId={`compare-${t.id}`}>
                      <Avatar className="border-4 border-background w-14 h-14 shadow-2xl rounded-2xl overflow-hidden">
                        <AvatarImage src={t.image} className="object-cover" />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                      </Avatar>
                    </motion.div>
                  ))}
                </div>
                <div>
                   <p className="text-lg font-black">{comparingIds.length} Tutors Selected</p>
                   <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Compare metrics side-by-side</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  onClick={() => setIsCompareModalOpen(true)}
                  className="rounded-2xl h-14 px-8 font-black shadow-xl shadow-primary/20 gap-2"
                >
                  Compare Now <ArrowLeftRight className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setComparingIds([])}
                  className="rounded-2xl h-14 w-14 hover:bg-red-500/10 hover:text-red-500"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Modal */}
      <Dialog open={isCompareModalOpen} onOpenChange={setIsCompareModalOpen}>
        <DialogContent className="max-w-5xl rounded-[3rem] p-12 overflow-hidden border-none shadow-2xl">
          <DialogHeader className="mb-12">
             <div className="flex items-center gap-3 text-primary mb-3">
                <div className="p-2 rounded-xl bg-primary/10">
                   <ArrowLeftRight className="h-6 w-6" />
                </div>
                <span className="text-sm font-black uppercase tracking-widest">Comparison Engine</span>
             </div>
             <DialogTitle className="text-5xl font-black tracking-tight">Find Your Best Match</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-4 gap-8">
             <div className="space-y-16 pt-48">
                <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] h-20 flex items-center border-b border-muted/20">Main Subjects</div>
                <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] h-20 flex items-center border-b border-muted/20">Investment</div>
                <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] h-20 flex items-center border-b border-muted/20">Market Rating</div>
                <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em] h-20 flex items-center border-b border-muted/20">Proven Impact</div>
             </div>
             
             {comparingTutors.map((t) => (
               <div key={t.id} className="text-center space-y-16 group">
                  <div className="flex flex-col items-center gap-6">
                     <div className="relative">
                        <Avatar className="h-28 w-28 border-4 border-primary/10 shadow-2xl rounded-[2rem] overflow-hidden">
                           <AvatarImage src={t.image} className="object-cover" />
                        </Avatar>
                        {t.verified && <ShieldCheck className="absolute -bottom-2 -right-2 h-8 w-8 text-blue-500 bg-white rounded-full p-1 shadow-lg" />}
                     </div>
                     <div>
                        <h4 className="font-black text-xl">{t.name}</h4>
                        <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">{t.languages[0]} Expert</p>
                     </div>
                     <Button className="rounded-xl w-full h-12 font-black shadow-lg shadow-primary/10">Book Slot</Button>
                  </div>
                  
                  <div className="h-20 flex flex-col items-center justify-center gap-2 border-b border-muted/10">
                     <p className="font-black text-sm">{t.subjects[0]}</p>
                     <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{t.subjects[1]}</p>
                  </div>

                  <div className="h-20 flex flex-col items-center justify-center gap-1 border-b border-muted/10">
                     <span className="text-3xl font-black text-primary">${t.hourlyRate}</span>
                     <p className="text-[10px] font-bold text-muted-foreground uppercase">Per Session</p>
                  </div>

                  <div className="h-20 flex flex-col items-center justify-center gap-2 border-b border-muted/10">
                     <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => <Star key={i} className={`h-4 w-4 ${i <= Math.floor(t.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} />)}
                     </div>
                     <p className="text-[10px] font-black uppercase tracking-widest">{t.reviewsCount} Trusted Reviews</p>
                  </div>

                  <div className="h-20 flex flex-col items-center justify-center gap-2 border-b border-muted/10">
                     <span className="text-xl font-black">{t.studentsTaught}+</span>
                     <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Students Mentored</p>
                  </div>
               </div>
             ))}
          </div>
          
          <div className="mt-12 p-6 rounded-3xl bg-accent/30 border border-dashed border-primary/20 text-center">
             <p className="text-sm font-bold text-muted-foreground flex items-center justify-center gap-2">
                <Info className="h-4 w-4 text-primary" />
                Comparison is based on real-time platform analytics and student feedback.
             </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Profile Modal */}
      <TutorProfileModal 
        tutor={selectedTutor} 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />

      <Footer />
    </main>
  )
}
