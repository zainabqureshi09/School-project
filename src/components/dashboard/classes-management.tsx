"use client"

import { Plus, Users, Calendar, Video, Edit, MoreHorizontal, BarChart3, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const myClasses = [
  {
    id: 1,
    title: "Mastering React Server Components",
    enrolled: 142,
    capacity: 200,
    sessions: "10/12",
    nextSession: "Tomorrow, 6:00 PM",
    rating: 5.0,
    status: "Active"
  },
  {
    id: 2,
    title: "Intro to TypeScript for Beginners",
    enrolled: 85,
    capacity: 100,
    sessions: "4/8",
    nextSession: "Thursday, 4:00 PM",
    rating: 4.8,
    status: "Active"
  }
]

export function ClassesManagement() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
         <div>
            <h2 className="text-2xl font-black mb-1">My <span className="text-primary">Live Classes</span></h2>
            <p className="text-sm text-muted-foreground font-medium">Manage your cohorts, students, and session recordings.</p>
         </div>
         <Button className="rounded-2xl h-12 px-6 font-black shadow-xl shadow-primary/20 gap-2">
            <Plus className="h-4 w-4" /> Create New Class
         </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {myClasses.map((c) => (
           <div key={c.id} className="p-8 rounded-[2.5rem] bg-background border hover:border-primary/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-primary/10 text-primary border-none px-3 py-1 font-bold rounded-lg">{c.status}</Badge>
                    <DropdownMenu>
                       <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
                             <MoreHorizontal className="h-4 w-4" />
                          </Button>
                       </DropdownMenuTrigger>
                       <DropdownMenuContent align="end" className="rounded-xl p-2 w-48">
                          <DropdownMenuItem className="rounded-lg font-bold gap-2">
                             <Edit className="h-4 w-4" /> Edit Class
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-lg font-bold gap-2">
                             <BarChart3 className="h-4 w-4" /> View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem className="rounded-lg font-bold gap-2 text-red-500">
                             <CheckCircle className="h-4 w-4" /> Archive Class
                          </DropdownMenuItem>
                       </DropdownMenuContent>
                    </DropdownMenu>
                 </div>

                 <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors">{c.title}</h3>

                 <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                          <Users className="h-3 w-3 text-primary" /> Enrollment
                       </p>
                       <p className="text-lg font-black">{c.enrolled} / {c.capacity}</p>
                       <Progress value={(c.enrolled / c.capacity) * 100} className="h-1.5" />
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                          <Calendar className="h-3 w-3 text-primary" /> Sessions
                       </p>
                       <p className="text-lg font-black">{c.sessions}</p>
                       <p className="text-[10px] font-bold text-muted-foreground">Next: {c.nextSession}</p>
                    </div>
                 </div>

                 <div className="flex gap-3 pt-6 border-t">
                    <Button variant="outline" className="flex-1 rounded-xl h-11 font-bold gap-2">
                       Resources
                    </Button>
                    <Button className="flex-1 rounded-xl h-11 font-black gap-2 shadow-lg shadow-primary/10">
                       <Video className="h-4 w-4" /> Start Live
                    </Button>
                 </div>
              </div>
           </div>
         ))}
      </div>
    </div>
  )
}
