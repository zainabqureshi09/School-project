"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ArrowDownRight, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  label: string
  value: string
  trend: string
  trendType: "up" | "down" | "neutral"
  icon: LucideIcon
  description?: string
  className?: string
}

export function StatCard({ label, value, trend, trendType, icon: Icon, description, className }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "p-6 rounded-[2rem] bg-background border shadow-sm relative overflow-hidden group",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="bg-primary/5 p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div className={cn(
          "flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
          trendType === "up" ? "bg-green-500/10 text-green-600" : 
          trendType === "down" ? "bg-red-500/10 text-red-600" : 
          "bg-accent text-muted-foreground"
        )}>
          {trendType === "up" && <ArrowUpRight className="h-3 w-3" />}
          {trendType === "down" && <ArrowDownRight className="h-3 w-3" />}
          {trend}
        </div>
      </div>
      
      <div>
        <p className="text-3xl font-black mb-1">{value}</p>
        <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">{label}</p>
        {description && <p className="text-[10px] text-muted-foreground mt-2">{description}</p>}
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
    </motion.div>
  )
}
