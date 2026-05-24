"use client"

import * as React from "react"
import { 
  LayoutDashboard, 
  Users, 
  Calendar as CalendarIcon, 
  MessageSquare, 
  DollarSign, 
  Star,
  BookOpen,
  Settings,
  Plus,
  Clock,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const tutorSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/tutor" },
  { label: "Students", icon: Users, href: "#" },
  { label: "Sessions", icon: CalendarIcon, href: "#" },
  { label: "Earnings", icon: DollarSign, href: "/dashboard/tutor/earnings" },
  { label: "Availability", icon: Clock, href: "/dashboard/tutor/availability" },
  { label: "Settings", icon: Settings, href: "#" },
]

const schedule = [
  { id: 1, day: "Monday", slots: ["09:00 AM", "10:30 AM", "01:00 PM", "04:00 PM"] },
  { id: 2, day: "Tuesday", slots: ["11:00 AM", "02:30 PM", "05:00 PM"] },
  { id: 3, day: "Wednesday", slots: ["09:00 AM", "01:00 PM", "04:00 PM"] },
]

export default function AvailabilityPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <DashboardLayout sidebarItems={tutorSidebarItems} roleName="Tutor">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black mb-2">Availability</h1>
            <p className="text-muted-foreground font-medium">Manage your teaching schedule and time slots.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-2">
                Sync Calendar
             </Button>
             <Button className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20 flex gap-2">
                <Plus className="h-4 w-4" /> Add One-time Slot
             </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
           {/* Calendar View */}
           <div className="lg:col-span-2 space-y-6">
              <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                 <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold">Schedule Planner</h3>
                    <div className="flex gap-2">
                       <Button variant="ghost" size="icon" className="rounded-xl"><ChevronLeft className="h-5 w-5" /></Button>
                       <Button variant="ghost" size="icon" className="rounded-xl"><ChevronRight className="h-5 w-5" /></Button>
                    </div>
                 </div>
                 <Calendar
                   mode="single"
                   selected={date}
                   onSelect={setDate}
                   className="rounded-[2.5rem] border bg-accent/20 p-8 w-full"
                 />
              </div>

              <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                 <h3 className="text-xl font-bold mb-8">Weekly Template</h3>
                 <div className="space-y-6">
                    {schedule.map((item) => (
                      <div key={item.id} className="pb-6 border-b last:border-none last:pb-0">
                         <div className="flex justify-between items-center mb-4">
                            <span className="font-bold">{item.day}</span>
                            <Button variant="ghost" size="sm" className="text-primary font-bold">Edit</Button>
                         </div>
                         <div className="flex flex-wrap gap-2">
                            {item.slots.map((slot) => (
                              <Badge key={slot} variant="secondary" className="px-4 py-2 rounded-xl bg-primary/5 text-primary border-none font-bold">
                                 {slot}
                              </Badge>
                            ))}
                            <button className="h-9 px-4 rounded-xl border-2 border-dashed border-muted-foreground/20 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all flex items-center gap-2 text-xs font-bold">
                               <Plus className="h-3 w-3" /> Add Slot
                            </button>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* Sidebar Stats / Info */}
           <div className="space-y-8">
              <div className="p-8 rounded-[3rem] bg-primary text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] translate-x-1/2" />
                 <div className="relative z-10">
                    <Clock className="h-10 w-10 mb-6 opacity-50" />
                    <h4 className="text-2xl font-black mb-2">Teaching Hours</h4>
                    <p className="text-sm opacity-80 mb-6 font-medium">You are currently set to teach 18 hours per week.</p>
                    <div className="space-y-4">
                       <div className="flex justify-between text-sm font-bold">
                          <span>Weekly Cap</span>
                          <span>25h</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/20 rounded-full">
                          <div className="h-full bg-white w-[72%] rounded-full" />
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                 <h3 className="font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Booking Rules
                 </h3>
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-bold">Instant Booking</span>
                       <div className="h-6 w-10 bg-primary rounded-full relative">
                          <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full shadow-sm" />
                       </div>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-bold">Minimum Notice</span>
                       <span className="text-xs font-black text-primary uppercase">24 Hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-bold">Cancellation Window</span>
                       <span className="text-xs font-black text-primary uppercase">12 Hours</span>
                    </div>
                 </div>
                 <Button variant="outline" className="w-full mt-8 rounded-xl font-bold border-2">Manage All Rules</Button>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
