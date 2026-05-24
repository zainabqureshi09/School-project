"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We&apos;re here to help. Our team is available 24/7 to support your learning journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-muted-foreground">support@eduelite.com</p>
                    <p className="text-muted-foreground">partnerships@eduelite.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri from 9am to 6pm EST</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">Visit Our Office</h4>
                    <p className="text-muted-foreground">123 Elite Plaza, 5th Floor</p>
                    <p className="text-muted-foreground">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-primary rounded-3xl text-white">
                <MessageSquare className="h-10 w-10 mb-4 opacity-50" />
                <h3 className="text-xl font-bold mb-2">Live Chat Support</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Need immediate assistance? Our live chat agents are online and ready to help.
                </p>
                <Button variant="secondary" className="w-full h-12 rounded-xl font-bold">Start Live Chat</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-background p-8 md:p-12 rounded-[3rem] border shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="How can we help?" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Write your message here..." className="min-h-[150px] rounded-xl" />
                </div>
                <Button className="w-full h-14 rounded-xl text-lg font-bold flex items-center gap-2">
                   <Send className="h-5 w-5" /> Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
