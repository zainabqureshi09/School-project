"use client"

import * as React from "react"
import { Sidebar } from "./sidebar"
import { DashboardHeader } from "./header"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"

interface SidebarItem {
  label: string
  icon: React.ElementType
  href: string
}

interface DashboardLayoutProps {
  children: React.ReactNode
  sidebarItems: SidebarItem[]
  roleName: string
}

export function DashboardLayout({ children, sidebarItems, roleName }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-accent/5 overflow-hidden">
      <Sidebar items={sidebarItems} roleName={roleName} />
      
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <DashboardHeader />
        
        <ScrollArea className="flex-1">
          <AnimatePresence mode="wait">
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3, ease: "easeOut" }}
               className="p-8 pb-24"
             >
                <div className="max-w-[1600px] mx-auto">
                   {children}
                </div>
             </motion.div>
          </AnimatePresence>
        </ScrollArea>
        
        {/* Background Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </main>
    </div>
  )
}
