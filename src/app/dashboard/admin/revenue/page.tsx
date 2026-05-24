"use client"

import * as React from "react"
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  DollarSign, 
  BarChart3,
  Settings,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  CreditCard,
  PieChart as PieChartIcon
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts"

const adminSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/admin" },
  { label: "Tutor Approvals", icon: ShieldCheck, href: "/dashboard/admin/approvals" },
  { label: "Students", icon: Users, href: "/dashboard/admin/users" },
  { label: "Revenue", icon: DollarSign, href: "/dashboard/admin/revenue" },
  { label: "Reports", icon: BarChart3, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

const revenueData = [
  { name: "Jan", revenue: 45000, profit: 12000 },
  { name: "Feb", revenue: 52000, profit: 15000 },
  { name: "Mar", revenue: 48000, profit: 13000 },
  { name: "Apr", revenue: 61000, profit: 18000 },
  { name: "May", revenue: 75000, profit: 22000 },
  { name: "Jun", revenue: 82000, profit: 25000 },
]

const categoryData = [
  { name: "Mathematics", value: 400, color: "#6366f1" },
  { name: "Languages", value: 300, color: "#10b981" },
  { name: "Technology", value: 200, color: "#f59e0b" },
  { name: "Science", value: 100, color: "#ec4899" },
]

export default function RevenuePage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} roleName="Administrator">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black mb-2">Revenue Analytics</h1>
            <p className="text-muted-foreground font-medium">Platform-wide financial performance and conversion metrics.</p>
          </div>
          <Button className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20 flex gap-2">
             <Download className="h-4 w-4" /> Export Financial Report
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Gross Revenue" value="$452,400" trend="+24%" trendType="up" icon={DollarSign} />
          <StatCard label="Net Profit" value="$112,850" trend="+18%" trendType="up" icon={TrendingUp} />
          <StatCard label="Avg. Order Value" value="$68.20" trend="+2%" trendType="up" icon={CreditCard} />
          <StatCard label="Churn Rate" value="1.2%" trend="-0.5%" trendType="down" icon={TrendingUp} />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
           <div className="lg:col-span-2 space-y-6">
              <div className="p-8 rounded-[3rem] bg-background border shadow-sm">
                 <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold">Revenue vs Profit</h3>
                    <select className="bg-accent/50 border-none rounded-xl px-3 py-1.5 text-xs font-bold outline-none">
                       <option>Last 6 Months</option>
                       <option>Last 12 Months</option>
                    </select>
                 </div>
                 <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={revenueData}>
                         <defs>
                           <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                           </linearGradient>
                           <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                             <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                           </linearGradient>
                         </defs>
                         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                         <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700 }} dy={10} />
                         <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700 }} />
                         <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }} />
                         <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                         <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorProfit)" />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </div>
           </div>

           <div className="space-y-6">
              <div className="p-8 rounded-[3rem] bg-background border shadow-sm flex flex-col h-full">
                 <h3 className="text-xl font-bold mb-8">Revenue by Category</h3>
                 <div className="h-[250px] w-full flex-1">
                    <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                         <Pie
                           data={categoryData}
                           innerRadius={60}
                           outerRadius={80}
                           paddingAngle={5}
                           dataKey="value"
                         >
                           {categoryData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.color} />
                           ))}
                         </Pie>
                         <Tooltip />
                       </PieChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="space-y-4 mt-6">
                    {categoryData.map((item) => (
                      <div key={item.name} className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-xs font-bold">{item.name}</span>
                         </div>
                         <span className="text-xs font-black">{Math.round(item.value / 10)}%</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-8 rounded-[3rem] bg-accent/20 border shadow-sm">
                 <div className="flex items-center gap-3 text-primary mb-6">
                    <PieChartIcon className="h-6 w-6" />
                    <span className="text-xs font-black uppercase tracking-widest">Growth Forecast</span>
                 </div>
                 <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-6">
                    Based on current trends, we expect a <span className="text-foreground font-bold">12.5% increase</span> in revenue for Q3.
                 </p>
                 <Button variant="link" className="p-0 h-auto font-bold text-primary">View Detailed Forecast →</Button>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
