"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
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
  Search,
  ArrowRight
} from "lucide-react"
import { Input } from "@/components/ui/input"

const subjectCategories = [
  {
    title: "Mathematics",
    icon: Calculator,
    subjects: ["Algebra", "Calculus", "Geometry", "Statistics", "Trigonometry", "Logic"],
    color: "text-blue-500",
  },
  {
    title: "Science",
    icon: Beaker,
    subjects: ["Physics", "Chemistry", "Biology", "Astronomy", "Environmental Science", "Earth Science"],
    color: "text-purple-500",
  },
  {
    title: "Technology",
    icon: Code2,
    subjects: ["Computer Science", "Web Development", "Python", "Java", "Data Science", "Cybersecurity"],
    color: "text-emerald-500",
  },
  {
    title: "Languages",
    icon: Languages,
    subjects: ["English", "Spanish", "French", "German", "Chinese", "Japanese", "ESL"],
    color: "text-orange-500",
  },
  {
    title: "Business",
    icon: Briefcase,
    subjects: ["Economics", "Accounting", "Marketing", "Finance", "Management", "Entrepreneurship"],
    color: "text-pink-500",
  },
  {
    title: "Humanities",
    icon: Palette,
    subjects: ["History", "Philosophy", "Literature", "Art History", "Political Science", "Sociology"],
    color: "text-indigo-500",
  },
]

export default function SubjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore <span className="text-primary">Subjects</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            From basic algebra to advanced quantum physics, find an expert for any topic.
          </p>
          <div className="max-w-xl mx-auto relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
             <Input placeholder="Search subjects..." className="h-14 pl-12 rounded-2xl bg-background shadow-lg" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {subjectCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-accent ${category.color}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.subjects.map((s) => (
                    <li key={s}>
                      <button className="flex items-center justify-between w-full p-4 rounded-xl border bg-background hover:border-primary/50 hover:bg-accent/30 transition-all group">
                         <span className="font-medium">{s}</span>
                         <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
