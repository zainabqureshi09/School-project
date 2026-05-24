"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Mathematics Tutor",
    content: "Teaching on EduElite has allowed me to reach students I never would have met otherwise. The platform is intuitive, and the students are highly motivated.",
    image: "https://i.pravatar.cc/150?u=sarah",
    earnings: "$6,500/mo average",
  },
  {
    name: "Michael Chen",
    role: "Computer Science Expert",
    content: "The flexibility is unbeatable. I can balance my PhD studies while earning a significant income. The technical tools provided make online teaching seamless.",
    image: "https://i.pravatar.cc/150?u=michael",
    earnings: "$120/hr rate",
  },
  {
    name: "Elena Rodriguez",
    role: "Spanish & ESL Teacher",
    content: "I love the global community here. One hour I'm teaching a student in Japan, the next in Brazil. It's a truly rewarding experience both personally and financially.",
    image: "https://i.pravatar.cc/150?u=elena",
    earnings: "400+ sessions completed",
  },
]

export function TutorTestimonials() {
  return (
    <section className="py-24 bg-accent/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Success Stories from our <span className="text-primary">Tutors</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of professionals who have found their passion and financial freedom through EduElite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-[2.5rem] bg-background border flex flex-col h-full hover:shadow-xl transition-all"
            >
              <div className="absolute top-6 right-8 text-primary/10">
                <Quote className="h-12 w-12 rotate-180" />
              </div>
              
              <p className="text-lg mb-8 relative z-10">"{testimonial.content}"</p>

              <div className="mt-auto flex items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-primary font-medium mb-1">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground bg-primary/5 px-2 py-1 rounded-full inline-block">
                    {testimonial.earnings}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
