"use client"

import * as React from "react"
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MessageSquare, 
  BookOpen, 
  CreditCard, 
  Settings,
  Star,
  MoreVertical,
  Video,
  Plus
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const studentSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/student" },
  { label: "My Tutors", icon: Users, href: "/dashboard/student/tutors" },
  { label: "Bookings", icon: Calendar, href: "#" },
  { label: "Messages", icon: MessageSquare, href: "/dashboard/messages" },
  { label: "Homework", icon: BookOpen, href: "#" },
  { label: "Payments", icon: CreditCard, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

const myTutors = [
  { id: 1, name: "Dr. Sarah Johnson", subject: "Advanced Calculus", rating: 4.9, sessions: 12, status: "Active", image: "https://i.pravatar.cc/150?u=sarah" },
  { id: 2, name: "Michael Chen", subject: "Full Stack Development", rating: 5.0, sessions: 8, status: "Active", image: "https://i.pravatar.cc/150?u=michael" },
  { id: 3, name: "Elena Rodriguez", subject: "Spanish Mastery", rating: 4.8, sessions: 4, status: "Inactive", image: "https://i.pravatar.cc/150?u=elena" },
]

export default function MyTutorsPage() {
  return (
    <DashboardLayout sidebarItems={studentSidebarItems} roleName="Student">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black mb-2">My Tutors</h1>
            <p className="text-muted-foreground font-medium">Manage your relationships with your elite educators.</p>
          </div>
          <Button className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20 flex gap-2">
             <Plus className="h-4 w-4" /> Find New Tutor
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myTutors.map((tutor) => (
            <motion.div
              key={tutor.id}
              whileHover={{ y: -5 }}
              className="p-6 rounded-[2.5rem] bg-background border shadow-sm group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <Avatar className="h-20 w-20 border-4 border-primary/10">
                  <AvatarImage src={tutor.image} />
                  <AvatarFallback>{tutor.name[0]}</AvatarFallback>
                </Avatar>
                <Badge variant={tutor.status === "Active" ? "default" : "secondary"} className="rounded-full font-bold">
                  {tutor.status}
                </Badge>
              </div>

              <div className="space-y-4">
                <div>
                   <h3 className="text-xl font-bold">{tutor.name}</h3>
                   <p className="text-sm text-primary font-bold">{tutor.subject}</p>
                </div>
                
                <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                   <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" /> {tutor.rating}
                   </div>
                   <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {tutor.sessions} Sessions
                   </div>
                </div>

                <div className="pt-6 border-t grid grid-cols-2 gap-3">
                   <Button variant="outline" className="rounded-xl font-bold">Message</Button>
                   <Button className="rounded-xl font-bold">Book Slot</Button>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical className="h-4 w-4" /></Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
