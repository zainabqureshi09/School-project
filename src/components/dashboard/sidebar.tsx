"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  User, 
  MessageSquare, 
  Calendar, 
  Settings, 
  LogOut, 
  GraduationCap,
  Users,
  DollarSign,
  Star,
  BookOpen,
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarItem {
  label: string
  icon: any
  href: string
}

interface SidebarProps {
  items: SidebarItem[]
  roleName: string
}

export function Sidebar({ items, roleName }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const pathname = usePathname()

  // Ensure links work by mapping them to their correct roles if necessary
  const processedItems = items.map(item => {
    if (item.label === "Overview") return { ...item, href: `/dashboard/${roleName.toLowerCase()}` }
    if (item.label === "Messages") return { ...item, href: "/dashboard/messages" }
    return item
  })

  return (
    <aside 
      className={cn(
        "bg-background border-r flex flex-col transition-all duration-300 relative z-50",
        isCollapsed ? "w-20" : "w-72"
      )}
    >
      <div className="p-6 h-full flex flex-col">
        <Link href="/" className="flex items-center gap-2 mb-10 overflow-hidden shrink-0">
          <div className="bg-primary p-1.5 rounded-xl shrink-0">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-black tracking-tighter"
            >
              EduElite
            </motion.span>
          )}
        </Link>
        
        <nav className="space-y-1 flex-1 overflow-y-auto no-scrollbar">
          {processedItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <button
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all relative group",
                  pathname === item.href || (item.href !== "#" && pathname.startsWith(item.href))
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </button>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 space-y-4 shrink-0">
          {!isCollapsed && (
            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{roleName} View</p>
              <p className="text-xs text-muted-foreground font-medium">Production Environment</p>
            </div>
          )}
          
          <Button variant="ghost" className="w-full flex justify-start gap-3 px-4 py-3 text-red-500 font-bold hover:bg-red-50 hover:text-red-600 rounded-xl overflow-hidden">
            <LogOut className="h-5 w-5 shrink-0" />
            {!isCollapsed && <span>Log Out</span>}
          </Button>
        </div>
      </div>

      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-1/2 -right-3 h-6 w-6 bg-background border rounded-full flex items-center justify-center shadow-sm z-50 hover:bg-accent"
      >
        {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
      </button>
    </aside>
  )
}
