"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Filter, 
  X, 
  ChevronDown, 
  Globe, 
  Clock, 
  Star, 
  MapPin, 
  BookOpen, 
  Award,
  DollarSign,
  Users,
  Search,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function TutorFilters() {
  const [priceRange, setPriceRange] = React.useState([20, 150])

  return (
    <aside className="w-full lg:w-80 space-y-8 bg-background/50 backdrop-blur-xl p-8 rounded-[2.5rem] border shadow-xl sticky top-28 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-black flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" /> Filters
        </h3>
        <Button variant="link" className="text-xs font-bold text-primary p-0 h-auto">Reset All</Button>
      </div>

      <div className="space-y-8">
        {/* Learning Mode */}
        <div className="space-y-4">
           <Label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground block">Learning Mode</Label>
           <div className="grid grid-cols-2 gap-2">
             <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border bg-primary/5 border-primary/20 transition-all font-black text-xs group relative overflow-hidden">
               <Globe className="h-5 w-5 text-primary" /> 
               Online
             </button>
             <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border hover:border-primary/50 transition-all font-black text-xs bg-accent/30">
               <MapPin className="h-5 w-5 text-muted-foreground" /> 
               Home
             </button>
           </div>
        </div>

        <Separator />

        {/* Budget */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <Label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Budget ($/hr)</Label>
            <span className="text-sm font-black text-primary">${priceRange[0]} - ${priceRange[1]}</span>
          </div>
          <Slider 
            defaultValue={[20, 150]} 
            max={300} 
            step={5} 
            onValueChange={(val) => Array.isArray(val) && setPriceRange(val as number[])}
          />
        </div>

        <Separator />

        {/* Advanced Filters */}
        <Accordion type="multiple" defaultValue={["subjects", "availability"]} className="w-full">
          <AccordionItem value="subjects" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-black">
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-wider">Subjects</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="space-y-3">
                {["Mathematics", "Physics", "Chemistry", "English", "Computer Science", "Economics"].map((sub) => (
                  <div key={sub} className="flex items-center space-x-3 group cursor-pointer">
                    <Checkbox id={sub} className="rounded-md border-2" />
                    <Label htmlFor={sub} className="text-sm font-bold cursor-pointer group-hover:text-primary transition-colors">{sub}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="availability" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-black">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-wider">Availability</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="grid grid-cols-2 gap-2">
                {["Available Now", "Today", "This Week", "Weekends"].map((time) => (
                  <button key={time} className="p-3 text-xs font-bold border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all text-left flex items-center justify-between">
                    {time}
                    {time === "Available Now" && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="curriculum" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-black">
              <div className="flex items-center gap-3">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-wider">Curriculum</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="space-y-3">
                {["O/A Levels", "Matric/FSc", "IB Diploma", "SAT/ACT", "AP Courses"].map((c) => (
                  <div key={c} className="flex items-center space-x-3">
                    <Checkbox id={c} />
                    <Label htmlFor={c} className="text-sm font-bold cursor-pointer">{c}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rating" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-black">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-wider">Rating</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="space-y-3">
                {[4.5, 4.0, 3.5].map((r) => (
                  <div key={r} className="flex items-center space-x-3">
                    <Checkbox id={`r-${r}`} />
                    <Label htmlFor={`r-${r}`} className="text-sm font-bold flex items-center gap-1 cursor-pointer">
                      {r}+ <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="pt-4">
        <Button className="w-full h-16 rounded-[1.5rem] text-lg font-black shadow-2xl shadow-primary/20 group">
          Apply Filters
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-5 w-5 ml-2 -rotate-90" />
          </motion.div>
        </Button>
      </div>

      <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
         <div className="flex items-center gap-2 text-primary mb-2">
            <Zap className="h-4 w-4 fill-current" />
            <span className="text-xs font-black uppercase tracking-widest">AI Match</span>
         </div>
         <p className="text-[10px] font-bold text-muted-foreground leading-relaxed">
            Let our AI recommend the perfect tutor for your specific needs.
         </p>
         <Button variant="link" className="text-[10px] font-black p-0 h-auto mt-2 text-primary uppercase tracking-widest">
            Try AI Matching →
         </Button>
      </div>
    </aside>
  )
}
