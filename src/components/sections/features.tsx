"use client"

import { motion } from "framer-motion"
import { Brain, Calendar, Video, Mic, PenTool, BarChart3, ShieldCheck, Zap } from "lucide-react"

const features = [
  {
    title: "AI-Powered Matching",
    description: "Our smart algorithm finds the perfect tutor based on your learning style and goals.",
    icon: Brain,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Smart Scheduling",
    description: "Easily sync with your calendar and manage sessions across all your devices.",
    icon: Calendar,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "HD Video Classes",
    description: "Crystal clear video and audio for a seamless 1-on-1 learning experience.",
    icon: Video,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Interactive Whiteboard",
    description: "Real-time collaborative tools to solve complex problems together.",
    icon: PenTool,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "Session Recordings",
    description: "Every lesson is recorded so you can review and reinforce your learning anytime.",
    icon: Mic,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    title: "Learning Analytics",
    description: "Track your progress with detailed insights and performance reports.",
    icon: BarChart3,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Secure Payments",
    description: "Your transactions are always protected with our enterprise-grade security.",
    icon: ShieldCheck,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Instant Support",
    description: "Our dedicated support team is available 24/7 to help with any questions.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
]

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful Features for <span className="text-primary">Better Learning</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide everything you need to succeed. Our platform is built with cutting-edge 
            technology to ensure the best possible education experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] border bg-background hover:bg-accent/50 transition-all group"
            >
              <div className={`${feature.bg} ${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
