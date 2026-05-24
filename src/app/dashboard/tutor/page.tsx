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
  TrendingUp,
  Clock,
  Video,
  Plus,
  Zap,
  BarChart3,
  CheckCircle
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts"
import { cn } from "@/lib/utils"

const tutorSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/tutor" },
  { label: "Students", icon: Users, href: "#" },
  { label: "Sessions", icon: Calendar, href: "#" },
  { label: "Earnings", icon: DollarSign, href: "#" },
  { label: "Reviews", icon: Star, href: "#" },
  { label: "Resources", icon: BookOpen, href: "#" },
  { label: "Analytics", icon: BarChart3, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

const earningsData = [
  { name: "Jan", amount: 2400 },
  { name: "Feb", amount: 3200 },
  { name: "Mar", amount: 2800 },
  { name: "Apr", amount: 4500 },
  { name: "May", amount: 5200 },
  { name: "Jun", amount: 4800 },
]

export default function TutorDashboardPage() {
  return (
    <DashboardLayout sidebarItems={tutorSidebarItems} roleName="Tutor">
      <div className="space-y-10">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2">Hello, Dr. Sarah Johnson! 📚</h1>
            <p className="text-muted-foreground font-medium">You have <span className="text-primary font-bold">4 sessions</span> scheduled for today.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-2">
                Manage Availability
             </Button>
             <Button className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20 flex gap-2">
                <Zap className="h-4 w-4" /> AI Lesson Planner
             </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            label="Total Earnings" 
            value="$5,240" 
            trend="+18%" 
            trendType="up" 
            icon={DollarSign} 
            description="Best month so far"
          />
          <StatCard 
            label="Active Students" 
            value="42" 
            trend="+5" 
            trendType="up" 
            icon={Users} 
          />
          <StatCard 
            label="Avg. Rating" 
            value="4.9" 
            trend="Stable" 
            trendType="neutral" 
            icon={Star} 
          />
          <StatCard 
            label="Completion Rate" 
            value="99.2%" 
            trend="+0.5%" 
            trendType="up" 
            icon={TrendingUp} 
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Earnings Chart */}
          <div className="lg:col-span-2 space-y-6">
             <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-xl font-bold">Monthly Revenue</h3>
                   <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="rounded-xl font-bold text-xs">Export PDF</Button>
                      <Badge className="bg-primary/10 text-primary border-none font-bold">Total: $22.9k</Badge>
                   </div>
                </div>
                <div className="h-[300px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={earningsData}>
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
                          cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                          contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar 
                          dataKey="amount" 
                          radius={[10, 10, 0, 0]}
                          barSize={40}
                        >
                           {earningsData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={index === 4 ? "var(--primary)" : "var(--primary-foreground)"} fillOpacity={index === 4 ? 1 : 0.2} />
                           ))}
                        </Bar>
                      </BarChart>
                   </ResponsiveContainer>
                </div>
             </div>

             {/* Student Engagement */}
             <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-xl font-bold">New Booking Requests</h3>
                   <Badge className="rounded-full bg-red-500 text-white border-none">2 Pending</Badge>
                </div>
                <div className="space-y-6">
                   {[
                     { name: "John Doe", subject: "Calculus II", time: "Starts tomorrow", image: "https://i.pravatar.cc/150?u=john" },
                     { name: "Emma Wilson", subject: "Linear Algebra", time: "Next Monday", image: "https://i.pravatar.cc/150?u=emma" },
                   ].map((request, i) => (
                     <div key={i} className="flex items-center gap-4 p-4 rounded-3xl bg-accent/30 border border-transparent hover:border-primary/20 transition-all group">
                        <Avatar className="h-12 w-12 border-2 border-background shadow-md">
                           <AvatarImage src={request.image} />
                           <AvatarFallback>{request.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 text-left overflow-hidden">
                           <h4 className="font-bold truncate">{request.name}</h4>
                           <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{request.subject}</p>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                           <Button size="icon" className="h-9 w-9 rounded-xl bg-primary text-white"><CheckCircle className="h-4 w-4" /></Button>
                           <Button size="icon" variant="ghost" className="h-9 w-9 rounded-xl text-red-500 hover:bg-red-50"><Plus className="h-4 w-4 rotate-45" /></Button>
                        </div>
                     </div>
                   ))}
                </div>
                <Button variant="link" className="w-full mt-8 font-bold text-primary">View All Bookings</Button>
             </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-8">
             {/* Performance Widget */}
             <div className="p-8 rounded-[3rem] bg-background border shadow-sm relative overflow-hidden group">
                <div className="flex items-center gap-2 text-primary mb-6">
                   <Star className="h-5 w-5 fill-current" />
                   <span className="text-xs font-black uppercase tracking-widest">Profile Impact</span>
                </div>
                <div className="space-y-6">
                   <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                         <span>Search Visibility</span>
                         <span className="text-green-500">+24%</span>
                      </div>
                      <Progress value={75} className="h-2 rounded-full" />
                   </div>
                   <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div className="text-center">
                         <p className="text-xl font-black">1.2k</p>
                         <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Views</p>
                      </div>
                      <div className="text-center">
                         <p className="text-xl font-black">18</p>
                         <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Conversions</p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Upcoming Session */}
             <div className="p-8 rounded-[3rem] bg-background border shadow-sm border-l-4 border-l-primary">
                <div className="flex justify-between items-start mb-6">
                   <div>
                      <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">Next Session</p>
                      <h4 className="text-xl font-black">Advanced Calculus</h4>
                   </div>
                   <div className="bg-primary/5 p-2 rounded-xl text-primary">
                      <Clock className="h-5 w-5" />
                   </div>
                </div>
                <div className="flex items-center gap-3 mb-6">
                   <Avatar className="h-10 w-10 border-2 border-primary/10">
                      <AvatarImage src="https://i.pravatar.cc/150?u=student" />
                      <AvatarFallback>S</AvatarFallback>
                   </Avatar>
                   <div>
                      <p className="text-sm font-bold">Zain Ahmed</p>
                      <p className="text-xs text-muted-foreground font-medium">Topic: Integration by Parts</p>
                   </div>
                </div>
                <Button className="w-full h-12 rounded-2xl font-black gap-2 shadow-xl shadow-primary/20">
                   <Video className="h-4 w-4" /> Start Lesson
                </Button>
             </div>

             {/* Live Activity Feed */}
             <div className="p-8 rounded-[3rem] bg-accent/20 border shadow-sm">
                <h3 className="font-bold mb-6">Engagement Feed</h3>
                <div className="space-y-6">
                   {[
                     { user: "Alice", action: "reviewed your math course", type: "review" },
                     { user: "Bob", action: "downloaded your notes", type: "download" },
                     { user: "Charlie", action: "asked a question", type: "message" },
                   ].map((item, i) => (
                     <div key={i} className="flex gap-3 items-start">
                        <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                        <p className="text-xs leading-relaxed">
                           <span className="font-bold">{item.user}</span> {item.action}
                        </p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
