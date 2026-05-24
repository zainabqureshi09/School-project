"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Filter, 
  Search, 
  ChevronDown, 
  X, 
  BookOpen, 
  Users, 
  Video, 
  Star, 
  Clock, 
  BarChart, 
  Calendar as CalendarIcon,
  DollarSign
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export function ClassesFilters() {
  const [priceRange, setPriceRange] = React.useState([0, 100])
  const [activeFilters, setActiveFilters] = React.useState<string[]>(["Live Now", "Technology"])

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter))
  }

  return (
    <aside className="w-full lg:w-80 space-y-8 bg-background/50 backdrop-blur-xl p-8 rounded-[2.5rem] border shadow-xl sticky top-28 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-black flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" /> Filters
        </h3>
        <Button variant="link" className="text-xs font-bold text-primary p-0 h-auto" onClick={() => setActiveFilters([])}>
          Reset All
        </Button>
      </div>

      {/* Active Filter Chips */}
      <div className="flex flex-wrap gap-2">
        <AnimatePresence mode="popLayout">
          {activeFilters.map((filter) => (
            <motion.div
              key={filter}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              layout
            >
              <Badge variant="secondary" className="pl-3 pr-1 py-1 rounded-full bg-primary/10 text-primary border-primary/20 gap-1 font-bold">
                {filter}
                <button onClick={() => removeFilter(filter)} className="p-0.5 hover:bg-primary/20 rounded-full transition-colors">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="space-y-8">
        {/* Format Selection */}
        <div className="space-y-4">
           <Label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground block">Session Format</Label>
           <div className="grid grid-cols-2 gap-2">
             <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border bg-primary/5 border-primary/20 transition-all font-black text-xs group relative overflow-hidden">
               <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
               <Video className="h-5 w-5 text-primary" /> 
               Live
             </button>
             <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border hover:border-primary/50 transition-all font-black text-xs bg-accent/30">
               <CalendarIcon className="h-5 w-5 text-muted-foreground" /> 
               Recorded
             </button>
           </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <Label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">Budget ($/session)</Label>
            <span className="text-sm font-black text-primary">${priceRange[0]} - ${priceRange[1]}</span>
          </div>
          <Slider 
            defaultValue={[0, 100]} 
            max={200} 
            step={5} 
            onValueChange={(val) => Array.isArray(val) && setPriceRange(val as number[])}
          />
        </div>

        <Separator />

        {/* Advanced Filters Accordion */}
        <Accordion type="multiple" defaultValue={["subjects", "difficulty"]} className="w-full">
          <AccordionItem value="subjects" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-black">
              <div className="flex items-center gap-3">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-wider">Subjects</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="space-y-3">
                {["Technology", "Mathematics", "Languages", "Business", "Creative Arts", "Science"].map((subject) => (
                  <div key={subject} className="flex items-center space-x-3 group cursor-pointer">
                    <Checkbox id={subject} className="rounded-md border-2" />
                    <Label htmlFor={subject} className="text-sm font-bold cursor-pointer group-hover:text-primary transition-colors">{subject}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="difficulty" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-black">
              <div className="flex items-center gap-3">
                <BarChart className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-wider">Level</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="grid grid-cols-1 gap-2">
                {["Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
                  <button key={level} className="flex items-center justify-between p-3 text-xs font-bold border rounded-xl hover:bg-primary/5 hover:border-primary/30 transition-all">
                    {level}
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="duration" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-black">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-wider">Duration</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="space-y-3">
                {["< 45 mins", "45-90 mins", "90-120 mins", "2+ hours"].map((dur) => (
                  <div key={dur} className="flex items-center space-x-3">
                    <Checkbox id={dur} />
                    <Label htmlFor={dur} className="text-sm font-bold cursor-pointer">{dur}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ratings" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4 font-black">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm uppercase tracking-wider">Ratings</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="space-y-3">
                {[4.5, 4.0, 3.5].map((rating) => (
                  <div key={rating} className="flex items-center space-x-3">
                    <Checkbox id={`rating-${rating}`} />
                    <Label htmlFor={`rating-${rating}`} className="text-sm font-bold flex items-center gap-1 cursor-pointer">
                      {rating}+ <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
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
          Filter Results
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-5 w-5 ml-2 -rotate-90" />
          </motion.div>
        </Button>
      </div>
    </aside>
  )
}
