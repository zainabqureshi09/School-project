"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Filter, 
  MapPin, 
  Globe, 
  Home, 
  Monitor, 
  User, 
  GraduationCap, 
  Star, 
  Clock, 
  Briefcase,
  ChevronDown
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FilterSidebar() {
  const [priceRange, setPriceRange] = React.useState([20, 150])

  return (
    <aside className="w-full lg:w-80 space-y-8 bg-background/50 backdrop-blur-xl p-8 rounded-[2.5rem] border shadow-xl sticky top-28 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" /> Filters
        </h3>
        <Button variant="link" className="text-xs font-bold text-primary p-0 h-auto">Reset All</Button>
      </div>

      <div className="space-y-8">
        {/* Subject & Location */}
        <div className="space-y-4">
           <div>
             <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-3 block">Location Type</Label>
             <div className="grid grid-cols-2 gap-2">
               <button className="flex items-center justify-center gap-2 p-3 rounded-xl border bg-accent/30 hover:border-primary/50 transition-all font-bold text-xs">
                 <Monitor className="h-4 w-4" /> Online
               </button>
               <button className="flex items-center justify-center gap-2 p-3 rounded-xl border bg-accent/30 hover:border-primary/50 transition-all font-bold text-xs">
                 <Home className="h-4 w-4" /> Home
               </button>
             </div>
           </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Price Range ($/hr)</Label>
            <span className="text-sm font-bold text-primary">${priceRange[0]} - ${priceRange[1]}</span>
          </div>
          <Slider 
            defaultValue={[20, 150]} 
            max={300} 
            step={5} 
            onValueChange={(val) => Array.isArray(val) && setPriceRange(val as number[])}
            className="mb-4"
          />
        </div>

        <Separator />

        {/* Advanced Filters Accordion */}
        <Accordion multiple className="w-full">
          <AccordionItem value="education" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold">Education Level</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="space-y-3">
                {["PhD Graduate", "Master's Degree", "Bachelor's Degree", "Certified Teacher"].map((level) => (
                  <div key={level} className="flex items-center space-x-2">
                    <Checkbox id={level} />
                    <Label htmlFor={level} className="text-sm cursor-pointer">{level}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="experience" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold">Experience</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
              <div className="space-y-3">
                {["10+ Years", "5-10 Years", "2-5 Years", "New Tutor"].map((exp) => (
                  <div key={exp} className="flex items-center space-x-2">
                    <Checkbox id={exp} />
                    <Label htmlFor={exp} className="text-sm cursor-pointer">{exp}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="availability" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold">Availability</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4">
               <div className="grid grid-cols-2 gap-2">
                 {["Morning", "Afternoon", "Evening", "Weekend"].map((time) => (
                   <button key={time} className="p-2 text-xs font-bold border rounded-lg hover:bg-accent/50">{time}</button>
                 ))}
               </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="more" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold">Languages & Gender</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-4 space-y-6">
               <div className="space-y-3">
                 <Label className="text-[10px] uppercase font-bold text-muted-foreground">Languages</Label>
                 {["English", "Spanish", "French", "Chinese"].map((lang) => (
                    <div key={lang} className="flex items-center space-x-2">
                      <Checkbox id={lang} />
                      <Label htmlFor={lang} className="text-sm cursor-pointer">{lang}</Label>
                    </div>
                 ))}
               </div>
               <div className="space-y-3">
                 <Label className="text-[10px] uppercase font-bold text-muted-foreground">Gender</Label>
                 <div className="flex gap-2">
                   {["Male", "Female", "Any"].map((g) => (
                     <button key={g} className="flex-1 p-2 text-xs font-bold border rounded-lg hover:bg-accent/50">{g}</button>
                   ))}
                 </div>
               </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl shadow-primary/10 mt-8">
        Apply Filters
      </Button>
    </aside>
  )
}
