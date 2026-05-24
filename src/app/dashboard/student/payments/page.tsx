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
  DollarSign,
  Download,
  Plus,
  ShieldCheck,
  Globe
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

const studentSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/student" },
  { label: "My Tutors", icon: Users, href: "/dashboard/student/tutors" },
  { label: "Bookings", icon: Calendar, href: "/dashboard/student/bookings" },
  { label: "Messages", icon: MessageSquare, href: "/dashboard/messages" },
  { label: "Homework", icon: BookOpen, href: "/dashboard/student/homework" },
  { label: "Payments", icon: CreditCard, href: "/dashboard/student/payments" },
  { label: "Settings", icon: Settings, href: "#" },
]

const payments = [
  { id: "INV-2026-001", date: "May 22, 2026", tutor: "Dr. Sarah Johnson", amount: 65, status: "Paid", method: "Visa •••• 4242" },
  { id: "INV-2026-002", date: "May 20, 2026", tutor: "Michael Chen", amount: 120, status: "Paid", method: "Apple Pay" },
  { id: "INV-2026-003", date: "May 15, 2026", tutor: "Elena Rodriguez", amount: 45, status: "Paid", method: "Visa •••• 4242" },
]

export default function PaymentsPage() {
  return (
    <DashboardLayout sidebarItems={studentSidebarItems} roleName="Student">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black mb-2">Billing & Payments</h1>
            <p className="text-muted-foreground font-medium">Manage your subscription, payment methods, and invoices.</p>
          </div>
          <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-2 flex gap-2">
             <Download className="h-4 w-4" /> Download Statement
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-8 rounded-[3rem] bg-primary text-white col-span-1 shadow-2xl shadow-primary/20 relative overflow-hidden">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">Current Balance</p>
              <h2 className="text-5xl font-black mb-6">$12.40</h2>
              <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-2xl h-14 font-black">
                 Add Credit
              </Button>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
           </div>
           
           <div className="p-8 rounded-[3rem] bg-background border shadow-sm md:col-span-2 flex items-center justify-between">
              <div>
                 <h3 className="font-bold text-xl mb-2">Saved Payment Method</h3>
                 <div className="flex items-center gap-3">
                    <div className="bg-accent/50 p-2 rounded-lg">
                       <CreditCard className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="font-bold">Visa ending in 4242</span>
                    <Badge variant="outline" className="rounded-lg text-[10px] font-bold">DEFAULT</Badge>
                 </div>
              </div>
              <Button variant="outline" className="rounded-xl font-bold border-2">Change</Button>
           </div>
        </div>

        <div className="p-8 rounded-[3rem] bg-background border shadow-sm overflow-hidden">
           <h3 className="text-xl font-bold mb-8 px-2">Transaction History</h3>
           <Table>
              <TableHeader>
                 <TableRow className="hover:bg-transparent border-none">
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Invoice ID</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Tutor / Service</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Date</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Amount</TableHead>
                    <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Status</TableHead>
                 </TableRow>
              </TableHeader>
              <TableBody>
                 {payments.map((p) => (
                   <TableRow key={p.id} className="group hover:bg-accent/50 transition-all border-none">
                      <TableCell className="font-bold text-xs">{p.id}</TableCell>
                      <TableCell>
                         <p className="font-bold text-xs">{p.tutor}</p>
                         <p className="text-[10px] text-muted-foreground">{p.method}</p>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground font-medium">{p.date}</TableCell>
                      <TableCell className="font-black">${p.amount}</TableCell>
                      <TableCell className="text-right">
                         <div className="flex items-center justify-end gap-3">
                            <Badge className="bg-green-500/10 text-green-600 border-none font-bold rounded-lg">
                               {p.status}
                            </Badge>
                            <Button size="icon" variant="ghost" className="rounded-lg"><Download className="h-4 w-4" /></Button>
                         </div>
                      </TableCell>
                   </TableRow>
                 ))}
              </TableBody>
           </Table>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
           <div className="flex-1 p-8 rounded-[3rem] bg-accent/20 border flex items-center gap-6">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                 <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                 <h4 className="font-bold text-lg">Secure Transactions</h4>
                 <p className="text-sm text-muted-foreground font-medium">Your payments are protected by 256-bit SSL encryption.</p>
              </div>
           </div>
           <div className="flex-1 p-8 rounded-[3rem] bg-accent/20 border flex items-center gap-6">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                 <Globe className="h-6 w-6" />
              </div>
              <div>
                 <h4 className="font-bold text-lg">Multi-Currency Support</h4>
                 <p className="text-sm text-muted-foreground font-medium">We support over 50 currencies for global learning.</p>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
