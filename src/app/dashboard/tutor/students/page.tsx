"use client"

import * as React from "react"
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MessageSquare, 
  DollarSign, 
  Star,
  BookOpen,
  Settings,
  MoreVertical,
  Search,
  Filter,
  UserPlus,
  Mail,
  Clock
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const tutorSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/tutor" },
  { label: "Students", icon: Users, href: "/dashboard/tutor/students" },
  { label: "Sessions", icon: Calendar, href: "#" },
  { label: "Earnings", icon: DollarSign, href: "/dashboard/tutor/earnings" },
  { label: "Availability", icon: Clock, href: "/dashboard/tutor/availability" },
  { label: "Settings", icon: Settings, href: "#" },
]

const students = [
  { name: "Zain Ahmed", subject: "Advanced Calculus", status: "Active", sessions: 24, lastSession: "2 hours ago", image: "https://i.pravatar.cc/150?u=zain" },
  { name: "Alice Smith", subject: "Linear Algebra", status: "Active", sessions: 12, lastSession: "Yesterday", image: "https://i.pravatar.cc/150?u=alice" },
  { name: "Bob Jones", subject: "Calculus II", status: "Paused", sessions: 8, lastSession: "2 weeks ago", image: "https://i.pravatar.cc/150?u=bob" },
  { name: "Charlie Brown", subject: "SAT Prep", status: "Active", sessions: 4, lastSession: "3 days ago", image: "https://i.pravatar.cc/150?u=charlie" },
]

export default function StudentsPage() {
  return (
    <DashboardLayout sidebarItems={tutorSidebarItems} roleName="Tutor">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black mb-2">My Students</h1>
            <p className="text-muted-foreground font-medium">Manage your active roster and track student progress.</p>
          </div>
          <Button className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20 flex gap-2">
             <UserPlus className="h-4 w-4" /> Add Student
          </Button>
        </div>

        <div className="p-8 rounded-[3rem] bg-background border shadow-sm overflow-hidden">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 px-2">
              <div className="relative w-full md:w-96">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                 <Input placeholder="Search students..." className="pl-10 h-11 rounded-xl bg-accent/30 border-none" />
              </div>
              <div className="flex gap-2">
                 <Button variant="outline" className="rounded-xl font-bold border-2">
                    <Filter className="h-4 w-4 mr-2" /> Filters
                 </Button>
              </div>
           </div>

           <Table>
              <TableHeader>
                 <TableRow className="hover:bg-transparent border-none">
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Student</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Subject</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Total Sessions</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Last Active</TableHead>
                    <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Action</TableHead>
                 </TableRow>
              </TableHeader>
              <TableBody>
                 {students.map((s, i) => (
                   <TableRow key={i} className="group hover:bg-accent/50 transition-all border-none">
                      <TableCell>
                         <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border-2 border-primary/5">
                               <AvatarImage src={s.image} />
                               <AvatarFallback>{s.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                               <p className="font-bold text-sm">{s.name}</p>
                               <Badge variant={s.status === "Active" ? "default" : "secondary"} className="rounded-lg text-[10px] font-bold py-0.5 mt-1">
                                  {s.status}
                               </Badge>
                            </div>
                         </div>
                      </TableCell>
                      <TableCell>
                         <span className="font-bold text-xs">{s.subject}</span>
                      </TableCell>
                      <TableCell className="text-xs font-black">{s.sessions}</TableCell>
                      <TableCell className="text-xs text-muted-foreground font-medium">{s.lastSession}</TableCell>
                      <TableCell className="text-right">
                         <div className="flex justify-end gap-2">
                            <Button size="icon" variant="ghost" className="rounded-xl"><MessageSquare className="h-4 w-4" /></Button>
                            <Button size="icon" variant="ghost" className="rounded-xl"><Mail className="h-4 w-4" /></Button>
                            <Button size="icon" variant="ghost" className="rounded-xl"><MoreVertical className="h-4 w-4" /></Button>
                         </div>
                      </TableCell>
                   </TableRow>
                 ))}
              </TableBody>
           </Table>
        </div>
      </div>
    </DashboardLayout>
  )
}
