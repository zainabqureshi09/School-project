"use client"

import * as React from "react"
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  DollarSign, 
  BarChart3,
  Settings,
  CheckCircle,
  XCircle,
  FileText,
  ExternalLink,
  Search,
  Filter,
  MoreVertical
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

const adminSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/admin" },
  { label: "Tutor Approvals", icon: ShieldCheck, href: "/dashboard/admin/approvals" },
  { label: "Students", icon: Users, href: "/dashboard/admin/users" },
  { label: "Revenue", icon: DollarSign, href: "#" },
  { label: "Reports", icon: BarChart3, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

const pendingTutors = [
  { name: "Dr. Richard Feynman", subject: "Quantum Physics", applied: "2 hours ago", status: "Reviewing", image: "https://i.pravatar.cc/150?u=richard" },
  { name: "Ada Lovelace", subject: "Algorithm Design", applied: "5 hours ago", status: "Pending", image: "https://i.pravatar.cc/150?u=ada" },
  { name: "Leonardo da Vinci", subject: "Anatomy & Art", applied: "Yesterday", status: "Pending", image: "https://i.pravatar.cc/150?u=leo" },
]

export default function ApprovalsPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} roleName="Administrator">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black mb-2">Tutor Approvals</h1>
            <p className="text-muted-foreground font-medium">Verify credentials and approve new elite educators.</p>
          </div>
          <Badge className="rounded-full bg-red-500 text-white border-none py-1 px-4 font-black">
             {pendingTutors.length} PENDING
          </Badge>
        </div>

        <div className="p-8 rounded-[3rem] bg-background border shadow-sm overflow-hidden">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 px-2">
              <div className="relative w-full md:w-96">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                 <Input placeholder="Search applicants..." className="pl-10 h-11 rounded-xl bg-accent/30 border-none" />
              </div>
              <Button variant="outline" className="rounded-xl font-bold border-2">
                 Verification Policy
              </Button>
           </div>

           <Table>
              <TableHeader>
                 <TableRow className="hover:bg-transparent border-none">
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Applicant</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Subject</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Applied Date</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Status</TableHead>
                    <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Review</TableHead>
                 </TableRow>
              </TableHeader>
              <TableBody>
                 {pendingTutors.map((tutor, i) => (
                   <TableRow key={i} className="group hover:bg-accent/50 transition-all border-none">
                      <TableCell>
                         <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border-2 border-primary/5">
                               <AvatarImage src={tutor.image} />
                               <AvatarFallback>{tutor.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                               <p className="font-bold text-sm">{tutor.name}</p>
                               <p className="text-[10px] text-muted-foreground font-medium">View Documents</p>
                            </div>
                         </div>
                      </TableCell>
                      <TableCell>
                         <Badge variant="outline" className="rounded-lg text-[10px] font-bold">{tutor.subject}</Badge>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground font-medium">{tutor.applied}</TableCell>
                      <TableCell>
                         <Badge className="bg-yellow-500/10 text-yellow-600 border-none font-bold text-[10px] uppercase tracking-widest">
                            {tutor.status}
                         </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                         <div className="flex justify-end gap-2">
                            <Button size="icon" variant="ghost" className="rounded-xl hover:bg-green-50 hover:text-green-600">
                               <CheckCircle className="h-5 w-5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="rounded-xl hover:bg-red-50 hover:text-red-600">
                               <XCircle className="h-5 w-5" />
                            </Button>
                            <Button size="icon" variant="ghost" className="rounded-xl">
                               <ExternalLink className="h-5 w-5" />
                            </Button>
                         </div>
                      </TableCell>
                   </TableRow>
                 ))}
              </TableBody>
           </Table>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="p-8 rounded-[3rem] bg-accent/20 border space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                 <FileText className="h-5 w-5 text-primary" /> Approval Guidelines
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                 <li className="flex gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                       <span className="text-[10px] font-black text-primary">1</span>
                    </div>
                    Verify identity through government-issued ID.
                 </li>
                 <li className="flex gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                       <span className="text-[10px] font-black text-primary">2</span>
                    </div>
                    Check academic credentials and certifications.
                 </li>
                 <li className="flex gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                       <span className="text-[10px] font-black text-primary">3</span>
                    </div>
                    Review intro video for teaching quality and clarity.
                 </li>
              </ul>
           </div>
           
           <div className="p-8 rounded-[3rem] bg-primary text-white overflow-hidden relative shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-[-20deg] translate-x-1/2" />
              <div className="relative z-10">
                 <h4 className="text-2xl font-black mb-4">Elite Vetting Process</h4>
                 <p className="text-sm opacity-80 mb-8 font-medium leading-relaxed">
                    Remember, EduElite only accepts the top 3% of applicants. 
                    Be thorough in your review to maintain platform quality.
                 </p>
                 <Button className="bg-white text-primary hover:bg-white/90 rounded-2xl h-14 w-full font-black">
                    Review Vetting Policy
                 </Button>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
