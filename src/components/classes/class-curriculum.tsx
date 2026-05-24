"use client"

import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { PlayCircle, FileText, Lock, CheckCircle2, Clock } from "lucide-react"

const modules = [
  {
    title: "Module 1: Foundations of Server Components",
    lessons: [
      { title: "Introduction to RSC Architecture", duration: "15:00", isLocked: false, isCompleted: true },
      { title: "Client vs Server Components", duration: "25:00", isLocked: false, isCompleted: false },
      { title: "The Next.js 15 App Router Deep Dive", duration: "45:00", isLocked: true, isCompleted: false },
    ]
  },
  {
    title: "Module 2: Advanced Data Fetching",
    lessons: [
      { title: "Server Actions & Mutations", duration: "35:00", isLocked: true, isCompleted: false },
      { title: "Optimistic UI with useOptimistic", duration: "20:00", isLocked: true, isCompleted: false },
      { title: "Streaming and Suspense Boundaries", duration: "30:00", isLocked: true, isCompleted: false },
    ]
  },
  {
    title: "Module 3: Production Patterns",
    lessons: [
      { title: "Error Handling & Global Modals", duration: "40:00", isLocked: true, isCompleted: false },
      { title: "Advanced Caching Strategies", duration: "50:00", isLocked: true, isCompleted: false },
      { title: "Deploying to Vercel & Edge Runtime", duration: "30:00", isLocked: true, isCompleted: false },
    ]
  }
]

export function ClassCurriculum() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end mb-8">
         <div>
            <h2 className="text-3xl font-black mb-2">Class <span className="text-primary italic">Curriculum</span></h2>
            <p className="text-muted-foreground font-bold">9 Modules • 45 Lessons • 12h 30m total duration</p>
         </div>
      </div>

      <Accordion multiple defaultValue={["item-0"]} className="w-full space-y-4">
        {modules.map((module, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-[2rem] px-6 overflow-hidden bg-background">
            <AccordionTrigger className="hover:no-underline py-6">
              <div className="flex items-center gap-4 text-left">
                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black">
                    {idx + 1}
                 </div>
                 <div>
                    <h3 className="text-xl font-black">{module.title}</h3>
                    <p className="text-sm text-muted-foreground font-bold">{module.lessons.length} Lessons • 1h 45m</p>
                 </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="space-y-2 mt-4">
                {module.lessons.map((lesson, lIdx) => (
                  <div 
                    key={lIdx} 
                    className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${lesson.isLocked ? 'opacity-60 bg-accent/20' : 'hover:bg-primary/5 hover:border-primary/30 bg-background'}`}
                  >
                    <div className="flex items-center gap-4">
                       {lesson.isCompleted ? (
                         <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                       ) : lesson.isLocked ? (
                         <Lock className="h-5 w-5 text-muted-foreground" />
                       ) : (
                         <PlayCircle className="h-5 w-5 text-primary" />
                       )}
                       <div>
                          <p className="font-bold text-sm">{lesson.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                             <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {lesson.duration}
                             </span>
                             <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1">
                                <FileText className="h-3 w-3" /> Quiz
                             </span>
                          </div>
                       </div>
                    </div>
                    {!lesson.isLocked && (
                      <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">
                        Watch Now
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
