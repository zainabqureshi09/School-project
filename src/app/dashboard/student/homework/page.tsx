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
  CheckCircle,
  Clock,
  Plus,
  FileText,
  AlertCircle,
  ArrowRight
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const studentSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/student" },
  { label: "My Tutors", icon: Users, href: "/dashboard/student/tutors" },
  { label: "Bookings", icon: Calendar, href: "#" },
  { label: "Messages", icon: MessageSquare, href: "/dashboard/messages" },
  { label: "Homework", icon: BookOpen, href: "/dashboard/student/homework" },
  { label: "Payments", icon: CreditCard, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

const tasks = [
  { id: 1, title: "Calculus: Integration by Parts", tutor: "Dr. Sarah Johnson", status: "Pending", dueDate: "Tomorrow", priority: "High" },
  { id: 2, title: "React State Management Quiz", tutor: "Michael Chen", status: "Completed", dueDate: "2 days ago", priority: "Medium" },
  { id: 3, title: "Spanish Verb Conjugation", tutor: "Elena Rodriguez", status: "In Progress", dueDate: "In 3 days", priority: "Medium" },
]

export default function HomeworkPage() {
  return (
    <DashboardLayout sidebarItems={studentSidebarItems} roleName="Student">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black mb-2">Homework & Tasks</h1>
            <p className="text-muted-foreground font-medium">Keep track of your assignments and learning milestones.</p>
          </div>
          <Button className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20 flex gap-2">
             <Plus className="h-4 w-4" /> Add Personal Goal
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-8 rounded-[2.5rem] border bg-background flex items-center gap-6">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                 <BookOpen className="h-8 w-8" />
              </div>
              <div>
                 <p className="text-3xl font-black">12</p>
                 <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Active Tasks</p>
              </div>
           </div>
           <div className="p-8 rounded-[2.5rem] border bg-background flex items-center gap-6">
              <div className="h-16 w-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                 <CheckCircle className="h-8 w-8" />
              </div>
              <div>
                 <p className="text-3xl font-black">48</p>
                 <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Completed</p>
              </div>
           </div>
           <div className="p-8 rounded-[2.5rem] border bg-background flex items-center gap-6">
              <div className="h-16 w-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                 <AlertCircle className="h-8 w-8" />
              </div>
              <div>
                 <p className="text-3xl font-black">2</p>
                 <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Overdue</p>
              </div>
           </div>
        </div>

        <div className="p-8 rounded-[3rem] bg-background border shadow-sm space-y-6">
           <h3 className="text-xl font-bold mb-4">Upcoming Assignments</h3>
           <div className="space-y-4">
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-[2rem] border bg-accent/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
                >
                   <div className="flex items-center gap-4">
                      <div className={cn(
                        "h-12 w-12 rounded-xl flex items-center justify-center",
                        task.status === "Completed" ? "bg-green-500 text-white" : "bg-background border-2 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors"
                      )}>
                         {task.status === "Completed" ? <CheckCircle className="h-6 w-6" /> : <Clock className="h-6 w-6" />}
                      </div>
                      <div>
                         <h4 className="font-bold text-lg">{task.title}</h4>
                         <p className="text-xs text-muted-foreground font-medium">Assigned by <span className="text-foreground font-bold">{task.tutor}</span></p>
                      </div>
                   </div>
                   
                   <div className="flex flex-wrap items-center gap-4 md:gap-8">
                      <div className="text-left md:text-right">
                         <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Due Date</p>
                         <p className={cn("text-sm font-black", task.dueDate === "Tomorrow" ? "text-red-500" : "text-foreground")}>{task.dueDate}</p>
                      </div>
                      <Badge className={cn(
                        "rounded-lg font-bold",
                        task.priority === "High" ? "bg-red-500" : "bg-blue-500"
                      )}>
                         {task.priority}
                      </Badge>
                      <Button variant="ghost" className="rounded-xl font-bold text-primary hover:bg-primary/10 gap-2">
                         Submit <ArrowRight className="h-4 w-4" />
                      </Button>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
