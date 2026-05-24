"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const posts = [
  {
    title: "10 Tips for Mastering Advanced Calculus",
    excerpt: "Calculus doesn't have to be intimidating. Discover our top strategies for excelling in higher-level mathematics.",
    author: "Dr. Sarah Johnson",
    date: "May 15, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "The Future of AI in Personalized Learning",
    excerpt: "How artificial intelligence is transforming the way we connect students with the perfect mentors.",
    author: "Michael Chen",
    date: "May 12, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Mastering a New Language in 6 Months",
    excerpt: "Native-level fluency is closer than you think. Learn the immersive techniques used by elite polyglots.",
    author: "Elena Rodriguez",
    date: "May 08, 2026",
    category: "Languages",
    image: "https://images.unsplash.com/photo-1543165796-5426273eaec3?auto=format&fit=crop&q=80&w=1000",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 rounded-full px-4 py-1">EduElite Insights</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Learning & <span className="text-primary">Growth</span></h1>
            <p className="text-xl text-muted-foreground">
              Expert advice, study tips, and industry insights from our community of world-class tutors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-black backdrop-blur-md border-none">{post.category}</Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" /> {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="link" className="p-0 h-auto font-bold text-primary flex items-center gap-2">
                    Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
             <Button variant="outline" size="lg" className="rounded-full px-8 h-14 font-bold">Load More Articles</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
