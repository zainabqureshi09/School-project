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
  ArrowUpRight,
  Download,
  Filter
} from "lucide-react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { StatCard } from "@/components/dashboard/stat-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  { label: "Students", icon: Users, href: "#" },
  { label: "Sessions", icon: Calendar, href: "#" },
  { label: "Earnings", icon: DollarSign, href: "/dashboard/tutor/earnings" },
  { label: "Reviews", icon: Star, href: "#" },
  { label: "Resources", icon: BookOpen, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

const transactions = [
  { id: "TX-9021", student: "Zain Ahmed", date: "May 22, 2026", amount: 65, status: "Paid" },
  { id: "TX-9020", student: "Alice Smith", date: "May 20, 2026", amount: 130, status: "Paid" },
  { id: "TX-9019", student: "Bob Jones", date: "May 18, 2026", amount: 65, status: "Processing" },
  { id: "TX-9018", student: "Charlie Brown", date: "May 15, 2026", amount: 195, status: "Paid" },
]

export default function EarningsPage() {
  return (
    <DashboardLayout sidebarItems={tutorSidebarItems} roleName="Tutor">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black mb-2">Earnings</h1>
            <p className="text-muted-foreground font-medium">Detailed breakdown of your revenue and payouts.</p>
          </div>
          <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-2 flex gap-2">
             <Download className="h-4 w-4" /> Download Statement
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-8 rounded-[3rem] bg-primary text-white col-span-1 md:col-span-1 shadow-2xl shadow-primary/20 relative overflow-hidden">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">Available for Payout</p>
              <h2 className="text-5xl font-black mb-6">$3,840.50</h2>
              <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-2xl h-14 font-black">
                 Request Payout
              </Button>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2">
              <StatCard label="This Month" value="$5,240" trend="+18%" trendType="up" icon={TrendingUp} />
              <StatCard label="Avg. per Session" value="$72.5" trend="+5%" trendType="up" icon={DollarSign} />
           </div>
        </div>

        <div className="p-8 rounded-[3rem] bg-background border shadow-sm overflow-hidden">
           <div className="flex justify-between items-center mb-8 px-2">
              <h3 className="text-xl font-bold">Recent Transactions</h3>
              <Button variant="ghost" className="rounded-xl font-bold text-primary flex gap-2">
                 <Filter className="h-4 w-4" /> Filter
              </Button>
           </div>
           <Table>
              <TableHeader>
                 <TableRow className="hover:bg-transparent border-none">
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Transaction ID</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Student</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Date</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Amount</TableHead>
                    <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Status</TableHead>
                 </TableRow>
              </TableHeader>
              <TableBody>
                 {transactions.map((tx) => (
                   <TableRow key={tx.id} className="group hover:bg-accent/50 transition-all border-none">
                      <TableCell className="font-bold text-xs">{tx.id}</TableCell>
                      <TableCell className="font-medium text-xs">{tx.student}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{tx.date}</TableCell>
                      <TableCell className="font-black">${tx.amount}</TableCell>
                      <TableCell className="text-right">
                         <Badge variant={tx.status === "Paid" ? "default" : "secondary"} className="rounded-lg font-bold">
                            {tx.status}
                         </Badge>
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
