"use client"

import { motion } from "framer-motion"
import { 
  Calculator, 
  Beaker, 
  Languages, 
  Code2, 
  Briefcase, 
  Palette, 
  Music, 
  History,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const subjects = [
  {
    name: "Mathematics",
    icon: Calculator,
    color: "bg-blue-500",
    description: "Calculus, Algebra, Statistics & more",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Science",
    icon: Beaker,
    color: "bg-purple-500",
    description: "Physics, Chemistry, Biology",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Computer Science",
    icon: Code2,
    color: "bg-emerald-500",
    description: "Python, Java, Web Dev",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    name: "Languages",
    icon: Languages,
    color: "bg-orange-500",
    description: "English, Spanish, French",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Business",
    icon: Briefcase,
    color: "bg-pink-500",
    description: "Economics, Marketing, Finance",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    name: "Arts & Humanities",
    icon: Palette,
    color: "bg-indigo-500",
    description: "History, Literature, Philosophy",
    className: "md:col-span-1 md:row-span-1",
  },
]

export function FeaturedSubjects() {
  return (
    <section className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Explore Our <span className="text-primary">Top Subjects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find the perfect tutor for your learning needs across hundreds of specialized subjects.
            </p>
          </div>
          <button className="group flex items-center gap-2 font-semibold text-primary">
            View all subjects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {subjects.map((subject, index) => (
            <motion.div
              key={subject.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative overflow-hidden rounded-3xl p-8 border bg-background hover:border-primary/50 transition-all cursor-pointer",
                subject.className
              )}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={cn("p-3 rounded-2xl inline-block mb-4 text-white", subject.color)}>
                    <subject.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{subject.name}</h3>
                  <p className="text-muted-foreground">{subject.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              
              {/* Background Glow */}
              <div className={cn(
                "absolute -right-4 -bottom-4 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity",
                subject.color
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
