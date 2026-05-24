"use client"

import * as React from "react"
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  DollarSign, 
  BarChart3,
  FileText,
  Bell,
  Settings,
  TrendingUp,
  UserCheck,
  AlertCircle,
  MoreVertical,
  Check,
  X,
  Plus
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const adminSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/admin" },
  { label: "Tutor Approvals", icon: ShieldCheck, href: "#" },
  { label: "Students", icon: Users, href: "#" },
  { label: "Revenue", icon: DollarSign, href: "#" },
  { label: "Reports", icon: BarChart3, href: "#" },
  { label: "CMS / Blog", icon: FileText, href: "#" },
  { label: "Notifications", icon: Bell, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

const growthData = [
  { name: "Week 1", users: 400 },
  { name: "Week 2", users: 600 },
  { name: "Week 3", users: 800 },
  { name: "Week 4", users: 1200 },
  { name: "Week 5", users: 1500 },
  { name: "Week 6", users: 2100 },
]

export default function AdminDashboardPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} roleName="Administrator">
      <div className="space-y-10">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2">Platform Overview 💎</h1>
            <p className="text-muted-foreground font-medium">Platform performance is <span className="text-green-500 font-bold">up 24%</span> this week.</p>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-2">
                Download Global Report
             </Button>
             <Button className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20">
                System Broadcast
             </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            label="Total Revenue" 
            value="$142,500" 
            trend="+22%" 
            trendType="up" 
            icon={DollarSign} 
          />
          <StatCard 
            label="Active Users" 
            value="12,402" 
            trend="+1,204" 
            trendType="up" 
            icon={Users} 
          />
          <StatCard 
            label="New Tutors" 
            value="156" 
            trend="+12%" 
            trendType="up" 
            icon={UserCheck} 
          />
          <StatCard 
            label="System Health" 
            value="99.9%" 
            trend="Stable" 
            trendType="neutral" 
            icon={ShieldCheck} 
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* User Growth Chart */}
          <div className="lg:col-span-2 space-y-6">
             <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                <div className="flex justify-between items-center mb-8">
                   <h3 className="text-xl font-bold">User Growth</h3>
                   <div className="flex bg-accent/50 p-1 rounded-xl border">
                      <Button variant="ghost" size="sm" className="h-8 rounded-lg bg-background shadow-sm text-primary font-bold">Users</Button>
                      <Button variant="ghost" size="sm" className="h-8 rounded-lg text-muted-foreground hover:text-foreground font-bold">Revenue</Button>
                   </div>
                </div>
                <div className="h-[300px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={growthData}>
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
                        <Line 
                          type="monotone" 
                          dataKey="users" 
                          stroke="var(--primary)" 
                          strokeWidth={4}
                          dot={{ r: 6, fill: "var(--primary)", strokeWidth: 3, stroke: "#fff" }}
                          activeDot={{ r: 8, strokeWidth: 0 }}
                        />
                      </LineChart>
                   </ResponsiveContainer>
                </div>
             </div>

             {/* Recent Tutor Approvals */}
             <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                <h3 className="text-xl font-bold mb-8">Pending Approvals</h3>
                <div className="space-y-6">
                   {[
                     { name: "Prof. Alan Turing", subject: "Logic & CS", date: "2 hours ago", image: "https://i.pravatar.cc/150?u=alan" },
                     { name: "Marie Curie", subject: "Nuclear Physics", date: "5 hours ago", image: "https://i.pravatar.cc/150?u=marie" },
                     { name: "Isaac Newton", subject: "Classical Mechanics", date: "Yesterday", image: "https://i.pravatar.cc/150?u=isaac" },
                   ].map((tutor, i) => (
                     <div key={i} className="flex items-center gap-4 group">
                        <Avatar className="h-12 w-12 border-2 border-background shadow-md">
                           <AvatarImage src={tutor.image} />
                           <AvatarFallback>{tutor.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                           <h4 className="font-bold truncate text-sm">{tutor.name}</h4>
                           <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{tutor.subject}</p>
                        </div>
                        <div className="flex gap-2">
                           <Button size="icon" className="h-8 w-8 rounded-lg bg-primary text-white"><Check className="h-4 w-4" /></Button>
                           <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg text-red-500 hover:bg-red-50"><X className="h-4 w-4" /></Button>
                        </div>
                     </div>
                   ))}
                </div>
                <Button variant="link" className="w-full mt-8 font-bold text-primary">View All Tutors</Button>
             </div>
          </div>

          {/* User Management Table */}
          <div className="p-8 rounded-[3rem] bg-background border shadow-sm overflow-hidden">
             <div className="flex justify-between items-center mb-8 px-2">
                <h3 className="text-xl font-bold">Recent User Activity</h3>
                <Button variant="outline" size="sm" className="rounded-xl border-2 font-bold">Manage All</Button>
             </div>
             <Table>
                <TableHeader>
                   <TableRow className="hover:bg-transparent border-none">
                      <TableHead className="font-bold text-[10px] uppercase tracking-widest">User</TableHead>
                      <TableHead className="font-bold text-[10px] uppercase tracking-widest">Role</TableHead>
                      <TableHead className="font-bold text-[10px] uppercase tracking-widest">Status</TableHead>
                      <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Action</TableHead>
                   </TableRow>
                </TableHeader>
                <TableBody>
                   {[
                     { name: "Zain Ahmed", email: "zain@example.com", role: "Student", status: "Active", image: "https://i.pravatar.cc/150?u=zain" },
                     { name: "Dr. Sarah Johnson", email: "sarah@example.com", role: "Tutor", status: "Verified", image: "https://i.pravatar.cc/150?u=sarah" },
                     { name: "Michael Chen", email: "michael@example.com", role: "Tutor", status: "Active", image: "https://i.pravatar.cc/150?u=michael" },
                   ].map((user, i) => (
                     <TableRow key={i} className="group hover:bg-accent/50 transition-all border-none">
                        <TableCell>
                           <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                 <AvatarImage src={user.image} />
                                 <AvatarFallback>{user.name[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                 <p className="font-bold text-xs">{user.name}</p>
                                 <p className="text-[10px] text-muted-foreground">{user.email}</p>
                              </div>
                           </div>
                        </TableCell>
                        <TableCell>
                           <Badge variant="outline" className="rounded-lg text-[10px] font-bold">{user.role}</Badge>
                        </TableCell>
                        <TableCell>
                           <div className="flex items-center gap-1.5">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                              <span className="text-[10px] font-bold">{user.status}</span>
                           </div>
                        </TableCell>
                        <TableCell className="text-right">
                           <Button variant="ghost" size="icon" className="rounded-lg group-hover:bg-background"><MoreVertical className="h-4 w-4" /></Button>
                        </TableCell>
                     </TableRow>
                   ))}
                </TableBody>
             </Table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
