"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, ShieldCheck, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DashboardSwitcher() {
  return (
    <main className="min-h-screen bg-accent/5 flex flex-col items-center justify-center p-8">
      <Navbar />
      
      <div className="max-w-4xl w-full text-center space-y-12 mt-20">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
         >
            <h1 className="text-5xl font-black mb-6">Select Dashboard <span className="text-primary text-3xl">Portal</span></h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
               Welcome to the EduElite dashboard system. Please select your portal view to continue.
            </p>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
               { title: "Student", desc: "Track progress, attend sessions, and manage homework.", icon: GraduationCap, href: "/dashboard/student", color: "bg-blue-500" },
               { title: "Tutor", desc: "Manage students, earnings, and availability.", icon: Users, href: "/dashboard/tutor", color: "bg-emerald-500" },
               { title: "Admin", desc: "Platform analytics, approvals, and system controls.", icon: ShieldCheck, href: "/dashboard/admin", color: "bg-purple-500" },
            ].map((portal, i) => (
              <motion.div
                key={portal.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                 <Link href={portal.href} className="group">
                    <div className="p-8 rounded-[3rem] bg-background border-2 border-transparent group-hover:border-primary/50 group-hover:shadow-2xl transition-all h-full text-center space-y-6 relative overflow-hidden">
                       <div className={`${portal.color} text-white w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform`}>
                          <portal.icon className="h-10 w-10" />
                       </div>
                       <div>
                          <h3 className="text-2xl font-black">{portal.title}</h3>
                          <p className="text-sm text-muted-foreground font-medium mt-2">{portal.desc}</p>
                       </div>
                       <Button variant="ghost" className="font-bold text-primary gap-2">
                          Enter Portal <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                       </Button>
                       <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                    </div>
                 </Link>
              </motion.div>
            ))}
         </div>

         <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
            Production-Ready Dashboards • High Fidelity UI • SaaS Aesthetic
         </p>
      </div>

      <div className="mt-auto pt-20">
         <Footer />
      </div>
    </main>
  )
}
