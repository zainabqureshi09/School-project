"use client"

import * as React from "react"
import { 
  LayoutDashboard, 
  Users, 
  Calendar as CalendarIcon, 
  MessageSquare, 
  BookOpen, 
  CreditCard, 
  Settings,
  MoreVertical,
  Video,
  Plus,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const studentSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/student" },
  { label: "My Tutors", icon: Users, href: "/dashboard/student/tutors" },
  { label: "Bookings", icon: CalendarIcon, href: "/dashboard/student/bookings" },
  { label: "Messages", icon: MessageSquare, href: "/dashboard/messages" },
  { label: "Homework", icon: BookOpen, href: "/dashboard/student/homework" },
  { label: "Payments", icon: CreditCard, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

const bookings = [
  { id: 1, tutor: "Dr. Sarah Johnson", subject: "Advanced Calculus", date: "Today, May 22", time: "4:00 PM - 5:00 PM", status: "Upcoming", image: "https://i.pravatar.cc/150?u=sarah" },
  { id: 2, tutor: "Michael Chen", subject: "React Hooks & State", date: "Tomorrow, May 23", time: "7:00 PM - 8:30 PM", status: "Confirmed", image: "https://i.pravatar.cc/150?u=michael" },
  { id: 3, tutor: "Elena Rodriguez", subject: "Spanish Conversation", date: "Mon, May 25", time: "10:00 AM - 11:00 AM", status: "Pending", image: "https://i.pravatar.cc/150?u=elena" },
]

export default function BookingsPage() {
  return (
    <DashboardLayout sidebarItems={studentSidebarItems} roleName="Student">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black mb-2">My Bookings</h1>
            <p className="text-muted-foreground font-medium">Manage your upcoming and past tutoring sessions.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-2">
                Export to Calendar
             </Button>
             <Button className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20 flex gap-2">
                <Plus className="h-4 w-4" /> New Booking
             </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
           <div className="lg:col-span-2 space-y-6">
              <div className="flex bg-accent/30 p-1.5 rounded-2xl w-fit mb-8 border">
                 {["Upcoming", "Past", "Cancelled"].map((tab, i) => (
                   <button key={tab} className={cn(
                     "px-6 py-2.5 rounded-xl font-bold text-sm transition-all",
                     i === 0 ? "bg-background shadow-md text-primary" : "text-muted-foreground hover:text-foreground"
                   )}>
                      {tab}
                   </button>
                 ))}
              </div>

              <div className="space-y-4">
                 {bookings.map((booking) => (
                   <motion.div
                     key={booking.id}
                     whileHover={{ y: -5 }}
                     className="p-8 rounded-[2.5rem] bg-background border shadow-sm flex flex-col md:flex-row items-center gap-8 group"
                   >
                      <Avatar className="h-16 w-16 border-2 border-primary/10">
                         <AvatarImage src={booking.image} />
                         <AvatarFallback>T</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-center md:text-left">
                         <h4 className="font-bold text-xl mb-1">{booking.subject}</h4>
                         <p className="text-sm text-muted-foreground font-medium">with <span className="text-foreground font-bold">{booking.tutor}</span></p>
                      </div>
                      <div className="text-center md:text-right">
                         <p className="font-bold text-lg">{booking.date}</p>
                         <p className="text-xs text-primary font-bold uppercase tracking-widest">{booking.time}</p>
                      </div>
                      <div className="flex items-center gap-4">
                         <Badge variant={booking.status === "Upcoming" ? "default" : "secondary"} className="rounded-lg font-bold">
                            {booking.status}
                         </Badge>
                         <Button size="icon" className={cn(
                            "h-12 w-12 rounded-xl shadow-lg transition-transform group-hover:scale-110",
                            booking.status === "Upcoming" ? "bg-primary shadow-primary/20" : "bg-accent text-muted-foreground"
                         )}>
                            <Video className="h-5 w-5" />
                         </Button>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>

           <div className="space-y-8">
              <div className="p-8 rounded-[3rem] bg-accent/20 border shadow-sm">
                 <h3 className="font-bold mb-6">Need to reschedule?</h3>
                 <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-medium">
                    You can reschedule or cancel a session up to 12 hours before it starts without any fees.
                 </p>
                 <Button variant="outline" className="w-full rounded-2xl h-12 font-bold border-2">View Policy</Button>
              </div>

              <div className="p-8 rounded-[3rem] bg-primary text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                 <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] translate-x-1/2" />
                 <div className="relative z-10">
                    <Clock className="h-10 w-10 mb-6 opacity-50" />
                    <h4 className="text-2xl font-black mb-2">Instant Help</h4>
                    <p className="text-sm opacity-80 mb-8 font-medium">Have a technical issue joining your class? Our support is live.</p>
                    <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-2xl h-14 font-black">
                       Support Chat
                    </Button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
