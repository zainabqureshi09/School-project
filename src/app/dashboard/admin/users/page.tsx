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
  MoreVertical,
  Search,
  Filter,
  UserPlus
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

import { cn } from "@/lib/utils"

const adminSidebarItems = [
  { label: "Overview", icon: LayoutDashboard, href: "/dashboard/admin" },
  { label: "Tutor Approvals", icon: ShieldCheck, href: "#" },
  { label: "Students", icon: Users, href: "/dashboard/admin/users" },
  { label: "Revenue", icon: DollarSign, href: "#" },
  { label: "Reports", icon: BarChart3, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

const users = [
  { name: "Zain Ahmed", email: "zain@example.com", role: "Student", status: "Active", joined: "May 12, 2026", image: "https://i.pravatar.cc/150?u=zain" },
  { name: "Dr. Sarah Johnson", email: "sarah@example.com", role: "Tutor", status: "Verified", joined: "Jan 05, 2026", image: "https://i.pravatar.cc/150?u=sarah" },
  { name: "Michael Chen", email: "michael@example.com", role: "Tutor", status: "Active", joined: "Feb 10, 2026", image: "https://i.pravatar.cc/150?u=michael" },
  { name: "Alice Smith", email: "alice@example.com", role: "Student", status: "Suspended", joined: "Mar 15, 2026", image: "https://i.pravatar.cc/150?u=alice" },
  { name: "Bob Jones", email: "bob@example.com", role: "Student", status: "Active", joined: "Apr 20, 2026", image: "https://i.pravatar.cc/150?u=bob" },
]

export default function UsersManagementPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} roleName="Administrator">
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2">User Management</h1>
            <p className="text-muted-foreground font-medium">Manage and monitor all users on the platform.</p>
          </div>
          <Button className="rounded-2xl h-12 px-6 font-bold shadow-xl shadow-primary/20 flex gap-2">
             <UserPlus className="h-4 w-4" /> Add New User
          </Button>
        </div>

        <div className="p-8 rounded-[3rem] bg-background border shadow-sm overflow-hidden">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 px-2">
              <div className="relative w-full md:w-96">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                 <Input placeholder="Search by name or email..." className="pl-10 h-11 rounded-xl bg-accent/30 border-none" />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                 <Button variant="outline" className="rounded-xl font-bold border-2 flex-1 md:flex-none">
                    <Filter className="h-4 w-4 mr-2" /> Filters
                 </Button>
                 <Button variant="outline" className="rounded-xl font-bold border-2 flex-1 md:flex-none">
                    Export CSV
                 </Button>
              </div>
           </div>

           <Table>
              <TableHeader>
                 <TableRow className="hover:bg-transparent border-none">
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">User Details</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Role</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Status</TableHead>
                    <TableHead className="font-bold text-[10px] uppercase tracking-widest">Joined Date</TableHead>
                    <TableHead className="text-right font-bold text-[10px] uppercase tracking-widest">Action</TableHead>
                 </TableRow>
              </TableHeader>
              <TableBody>
                 {users.map((user, i) => (
                   <TableRow key={i} className="group hover:bg-accent/50 transition-all border-none">
                      <TableCell>
                         <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border-2 border-primary/5">
                               <AvatarImage src={user.image} />
                               <AvatarFallback>{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                               <p className="font-bold text-sm">{user.name}</p>
                               <p className="text-[10px] text-muted-foreground font-medium">{user.email}</p>
                            </div>
                         </div>
                      </TableCell>
                      <TableCell>
                         <Badge variant="outline" className="rounded-lg text-[10px] font-bold py-0.5">{user.role}</Badge>
                      </TableCell>
                      <TableCell>
                         <div className="flex items-center gap-2">
                            <div className={cn(
                               "h-2 w-2 rounded-full",
                               user.status === "Active" || user.status === "Verified" ? "bg-green-500" : "bg-red-500"
                            )} />
                            <span className="text-xs font-bold">{user.status}</span>
                         </div>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground font-medium">{user.joined}</TableCell>
                      <TableCell className="text-right">
                         <Button variant="ghost" size="icon" className="rounded-lg group-hover:bg-background transition-colors"><MoreVertical className="h-4 w-4" /></Button>
                      </TableCell>
                   </TableRow>
                 ))}
              </TableBody>
           </Table>
           
           <div className="mt-8 pt-8 border-t flex justify-between items-center px-2 text-xs text-muted-foreground font-bold uppercase tracking-widest">
              <span>Showing 1-5 of 12,402 users</span>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm" className="rounded-lg font-bold border-2">Previous</Button>
                 <Button variant="outline" size="sm" className="rounded-lg font-bold border-2 text-primary border-primary/20">Next</Button>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
