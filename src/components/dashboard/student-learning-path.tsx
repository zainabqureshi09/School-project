"use client"

import { Play, CheckCircle2, Clock, BookOpen, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const enrolledClasses = [
  {
    id: 1,
    title: "Mastering React Server Components",
    instructor: "Michael Chen",
    progress: 75,
    lastLesson: "Client vs Server Components",
    nextLive: "Tomorrow, 6:00 PM",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    title: "Advanced SAT Mathematics",
    instructor: "Dr. Sarah Johnson",
    progress: 45,
    lastLesson: "Complex Trigonometry",
    nextLive: "Thursday, 4:00 PM",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=500"
  }
]

export function StudentLearningPath() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end mb-8">
         <div>
            <h2 className="text-2xl font-black mb-1">Continue <span className="text-primary italic">Learning</span></h2>
            <p className="text-sm text-muted-foreground font-bold">Pick up where you left off and reach your goals.</p>
         </div>
         <Button variant="ghost" className="font-bold text-primary gap-2">
            My Learning Library <ArrowRight className="h-4 w-4" />
         </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {enrolledClasses.map((c) => (
           <div key={c.id} className="group bg-background rounded-[2.5rem] border border-muted/20 overflow-hidden shadow-2xl shadow-primary/5 hover:border-primary/30 transition-all flex flex-col relative">
              <div className="relative aspect-[21/9] overflow-hidden">
                 <img src={c.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" className="h-14 w-14 rounded-full bg-primary text-white shadow-2xl">
                       <Play className="h-6 w-6 fill-current ml-1" />
                    </Button>
                 </div>
                 <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-md text-white border-none px-3 py-1 font-bold text-[10px] uppercase tracking-wider">
                       {c.progress}% COMPLETED
                    </Badge>
                 </div>
              </div>

              <div className="p-6 space-y-4">
                 <div>
                    <h3 className="text-lg font-black line-clamp-1 group-hover:text-primary transition-colors">{c.title}</h3>
                    <p className="text-xs text-muted-foreground font-bold">with <span className="text-foreground">{c.instructor}</span></p>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                       <span>Last: {c.lastLesson}</span>
                    </div>
                    <Progress value={c.progress} className="h-1.5" />
                 </div>

                 <div className="pt-4 border-t flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary">
                       <Clock className="h-4 w-4" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Next Live: {c.nextLive}</span>
                    </div>
                    <Button variant="ghost" className="h-10 px-4 rounded-xl font-bold text-xs gap-2">
                       Course Materials <BookOpen className="h-3 w-3" />
                    </Button>
                 </div>
              </div>
           </div>
         ))}
      </div>
      
      {/* Achievements Bento (Mini) */}
      <div className="p-8 rounded-[2.5rem] bg-accent/30 border border-primary/10 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
         <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
               <div className="h-16 w-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary shadow-xl">
                  <Award className="h-8 w-8" />
               </div>
               <div>
                  <h4 className="text-xl font-black">Learning Streak: 12 Days!</h4>
                  <p className="text-sm text-muted-foreground font-bold">Keep going to unlock the &quot;Master Learner&quot; badge.</p>
               </div>
            </div>
            <div className="flex gap-2">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className={`w-3 h-10 rounded-full ${i <= 3 ? "bg-primary" : "bg-primary/20"}`} />
               ))}
            </div>
         </div>
      </div>
    </div>
  )
}
