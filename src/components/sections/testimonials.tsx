"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Computer Science Student",
    content: "EduElite transformed how I learn. My tutor Michael explained complex algorithms in a way that just clicked. I went from failing to top of my class!",
    image: "https://i.pravatar.cc/150?u=alex",
    rating: 5,
  },
  {
    name: "Emma Watson",
    role: "High School Senior",
    content: "The interface is so smooth and finding a tutor was effortless. Dr. Sarah helped me master Calculus BC in just two months. Highly recommend!",
    image: "https://i.pravatar.cc/150?u=emma",
    rating: 5,
  },
  {
    name: "David Miller",
    role: "Language Learner",
    content: "I've tried many apps, but nothing beats 1-on-1 interaction. Elena is an incredible teacher who made learning Spanish fun and interactive.",
    image: "https://i.pravatar.cc/150?u=david",
    rating: 4,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-accent/10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hear from our <span className="text-primary">Community</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thousands of students have achieved their academic dreams with EduElite. 
            Here is what they have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-[2.5rem] bg-background/60 backdrop-blur-xl border border-muted-foreground/10 flex flex-col h-full"
            >
              <div className="absolute top-6 right-8 text-primary/10">
                <Quote className="h-16 w-16 rotate-180" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} 
                  />
                ))}
              </div>

              <p className="text-lg italic mb-8 relative z-10">"{testimonial.content}"</p>

              <div className="mt-auto flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
