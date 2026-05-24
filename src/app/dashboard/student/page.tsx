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
  GraduationCap,
  Play,
  CheckCircle,
  Clock,
  TrendingUp,
  Brain,
  Plus,
  Video
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { cn } from "@/lib/utils"

const studentSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/student" },
  { label: "My Tutors", icon: Users, href: "#" },
  { label: "Bookings", icon: Calendar, href: "#" },
  { label: "Messages", icon: MessageSquare, href: "/dashboard/messages" },
  { label: "Homework", icon: BookOpen, href: "#" },
  { label: "Payments", icon: CreditCard, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

const learningData = [
  { name: "Mon", hours: 2 },
  { name: "Tue", hours: 4 },
  { name: "Wed", hours: 3 },
  { name: "Thu", hours: 5 },
  { name: "Fri", hours: 2 },
  { name: "Sat", hours: 6 },
  { name: "Sun", hours: 4 },
]

export default function StudentDashboardPage() {
  return (
    <DashboardLayout sidebarItems={studentSidebarItems} roleName="Student">
      <div className="space-y-10">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2">Welcome back, Zain Ahmed! 👋</h1>
            <p className="text-muted-foreground font-medium">You've completed <span className="text-primary font-bold">85%</span> of your weekly learning goal.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-2">
                View Schedule
             </Button>
             <Button className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20 flex gap-2">
                <Plus className="h-4 w-4" /> Book New Session
             </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            label="Hours Learned" 
            value="32.5h" 
            trend="+12%" 
            trendType="up" 
            icon={Clock} 
            description="4.5h more than last week"
          />
          <StatCard 
            label="Active Courses" 
            value="4" 
            trend="Stable" 
            trendType="neutral" 
            icon={BookOpen} 
          />
          <StatCard 
            label="Attendance Rate" 
            value="98%" 
            trend="+2%" 
            trendType="up" 
            icon={CheckCircle} 
          />
          <StatCard 
            label="Upcoming Sessions" 
            value="3" 
            trend="-1" 
            trendType="down" 
            icon={Calendar} 
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Learning Progress Chart */}
          <div className="lg:col-span-2 space-y-6">
             <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-xl font-bold">Learning Activity</h3>
                   <select className="bg-accent/50 border-none rounded-xl px-3 py-1.5 text-xs font-bold outline-none">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                   </select>
                </div>
                <div className="h-[300px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={learningData}>
                        <defs>
                          <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 10, fontWeight: 700, fill: "#888" }} 
                          dy={10}
                        />
                        <YAxis 
                           axisLine={false} 
                           tickLine={false} 
                           tick={{ fontSize: 10, fontWeight: 700, fill: "#888" }} 
                        />
                        <Tooltip 
                          contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="hours" 
                          stroke="var(--primary)" 
                          strokeWidth={4}
                          fillOpacity={1} 
                          fill="url(#colorHours)" 
                        />
                      </AreaChart>
                   </ResponsiveContainer>
                </div>
             </div>

             {/* Recent Activity */}
             <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                <h3 className="text-xl font-bold mb-8">Recent Activity</h3>
                <div className="space-y-6">
                   {[
                     { title: "Completed Calculus Session", time: "2 hours ago", icon: GraduationCap, color: "text-blue-500", bg: "bg-blue-500/10" },
                     { title: "Uploaded Homework: Physics Lab", time: "5 hours ago", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-500/10" },
                     { title: "New Message from Dr. Sarah", time: "Yesterday", icon: MessageSquare, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className={cn("p-3 rounded-2xl transition-transform group-hover:scale-110", item.bg, item.color)}>
                           <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                           <p className="font-bold text-sm">{item.title}</p>
                           <p className="text-xs text-muted-foreground font-medium">{item.time}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                           <TrendingUp className="h-4 w-4" />
                        </Button>
                     </div>
                   ))}
                </div>
                <Button variant="link" className="w-full mt-8 font-bold text-primary">View All Activity</Button>
             </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-8">
             {/* Upcoming Class Card */}
             <div className="p-8 rounded-[3rem] bg-primary text-white overflow-hidden relative shadow-2xl shadow-primary/20">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] translate-x-1/2" />
                <div className="relative z-10">
                   <Badge className="bg-white/20 text-white border-none mb-4 font-bold">Starts in 45 mins</Badge>
                   <h4 className="text-2xl font-black mb-2">Advanced Calculus</h4>
                   <div className="flex items-center gap-3 mb-6 opacity-80">
                      <Avatar className="h-8 w-8 border-2 border-white/50">
                         <AvatarImage src="https://i.pravatar.cc/150?u=sarah" />
                         <AvatarFallback>S</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-bold">Dr. Sarah Johnson</span>
                   </div>
                   <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-2xl h-14 font-black text-lg gap-2 shadow-xl">
                      <Video className="h-5 w-5" /> Join Classroom
                   </Button>
                </div>
             </div>

             {/* AI Recommendations */}
             <div className="p-8 rounded-[3rem] bg-background border shadow-sm overflow-hidden relative">
                <div className="flex items-center gap-2 text-primary mb-6">
                   <Brain className="h-5 w-5" />
                   <span className="text-xs font-black uppercase tracking-widest">AI Recommendation</span>
                </div>
                <h4 className="font-bold mb-4">Focus on Integrals</h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                   Based on your last session, we recommend practicing <span className="text-foreground font-bold">Integration by Parts</span>. 
                   We've added 3 new resources to your library.
                </p>
                <div className="space-y-3">
                   <div className="flex items-center gap-3 p-3 rounded-2xl bg-accent/30 border border-transparent hover:border-primary/20 transition-all cursor-pointer">
                      <div className="bg-primary/10 p-2 rounded-lg text-primary"><Play className="h-4 w-4" /></div>
                      <span className="text-xs font-bold">Concept Video: U-Substitution</span>
                   </div>
                   <div className="flex items-center gap-3 p-3 rounded-2xl bg-accent/30 border border-transparent hover:border-primary/20 transition-all cursor-pointer">
                      <div className="bg-primary/10 p-2 rounded-lg text-primary"><BookOpen className="h-4 w-4" /></div>
                      <span className="text-xs font-bold">Practice Quiz: Integrals</span>
                   </div>
                </div>
             </div>

             {/* Homework Progress */}
             <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                <h3 className="font-bold mb-6">Task Completion</h3>
                <div className="space-y-6">
                   <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                         <span>Weekly Tasks</span>
                         <span>12/15</span>
                      </div>
                      <Progress value={80} className="h-2 rounded-full" />
                   </div>
                   <div className="pt-4 border-t">
                      <div className="flex justify-between items-center mb-4">
                         <span className="text-sm font-bold">Next Deadline</span>
                         <Badge variant="outline" className="text-red-500 border-red-200 bg-red-50">Tomorrow</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium">Physics Lab Report: Thermodynamics</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
