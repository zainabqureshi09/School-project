"use client"

import { motion } from "framer-motion"
import { Star, Clock, GraduationCap, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const tutors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Mathematics Specialist",
    education: "PhD in Mathematics, Stanford",
    rating: 4.9,
    reviews: 124,
    price: 65,
    image: "https://i.pravatar.cc/150?u=sarah",
    subjects: ["Calculus", "Linear Algebra", "Statistics"],
    availability: "Available Today",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full Stack Developer",
    education: "M.S. Computer Science, MIT",
    rating: 5.0,
    reviews: 89,
    price: 80,
    image: "https://i.pravatar.cc/150?u=michael",
    subjects: ["Python", "React", "Data Structures"],
    availability: "Next: Tomorrow",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Language Expert",
    education: "B.A. Linguistics, Oxford",
    rating: 4.8,
    reviews: 210,
    price: 45,
    image: "https://i.pravatar.cc/150?u=elena",
    subjects: ["Spanish", "French", "ESL"],
    availability: "Available Today",
  },
]

export function TutorShowcase() {
  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Tutors</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Learn from the best. Our tutors are vetted experts from world-renowned institutions.
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-8">Find more tutors</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background rounded-[2.5rem] overflow-hidden border hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <Avatar className="h-20 w-20 border-4 border-background shadow-xl">
                      <AvatarImage src={tutor.image} />
                      <AvatarFallback>{tutor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-background">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-yellow-500 font-bold justify-end mb-1">
                      <Star className="h-4 w-4 fill-current" />
                      {tutor.rating}
                    </div>
                    <p className="text-xs text-muted-foreground">{tutor.reviews} Reviews</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{tutor.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{tutor.role}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <GraduationCap className="h-4 w-4" />
                    {tutor.education}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {tutor.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary" className="rounded-full bg-accent/50 text-xs font-medium px-3 py-1">
                      {subject}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t">
                  <div>
                    <span className="text-2xl font-bold">${tutor.price}</span>
                    <span className="text-muted-foreground text-sm">/hr</span>
                  </div>
                  <Button className="rounded-xl px-6 font-semibold">Book Session</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
