"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { motion } from "framer-motion"
import { FileText, Download, Video, Laptop, Book, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const resources = [
  { title: "Calculus Formula Sheet", type: "PDF", size: "1.2 MB", icon: FileText },
  { title: "React Best Practices 2026", type: "Guide", size: "4.5 MB", icon: Book },
  { title: "Spanish Verb Conjugation", type: "Cheat Sheet", size: "800 KB", icon: FileText },
  { title: "Physics Lab Simulation", type: "App", size: "12 MB", icon: Laptop },
  { title: "SAT Preparation Course", type: "Video Series", size: "2.4 GB", icon: Video },
  { title: "Academic Writing Guide", type: "E-Book", size: "3.2 MB", icon: Book },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary to-purple-900" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Learning <span className="text-white/70">Library</span></h1>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Free high-quality resources, study guides, and tools to help you master any subject.
            </p>
            <div className="relative max-w-xl">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
               <Input placeholder="Search resources..." className="h-14 pl-12 rounded-2xl bg-white text-black border-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
            {["All", "Study Guides", "Practice Exams", "Cheat Sheets", "Videos", "Tools"].map((tab) => (
              <Button key={tab} variant={tab === "All" ? "default" : "outline"} className="rounded-full px-6 whitespace-nowrap">
                {tab}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-3xl border bg-background hover:border-primary/50 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">{resource.title}</h3>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">
                      {resource.type} • {resource.size}
                    </p>
                  </div>
                </div>
                <Button size="icon" variant="ghost" className="rounded-xl">
                  <Download className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
