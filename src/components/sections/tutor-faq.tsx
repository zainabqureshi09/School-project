"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What are the requirements to become a tutor?",
    answer: "We look for tutors with strong academic backgrounds, teaching experience, and a passion for education. Generally, a university degree or significant professional experience in your subject area is required.",
  },
  {
    question: "How much can I earn as a tutor?",
    answer: "You set your own hourly rates! Top tutors on EduElite earn over $100/hr, with many making a full-time living. We take a small service fee to maintain the platform and bring you students.",
  },
  {
    question: "How do I get paid?",
    answer: "Payments are processed securely through our platform. Once a session is completed, funds are added to your balance and can be withdrawn directly to your bank account or via PayPal.",
  },
  {
    question: "Is there a minimum time commitment?",
    answer: "No, you have full control over your schedule. You can teach as much or as little as you like. However, consistent availability often leads to more student bookings.",
  },
  {
    question: "What subjects can I teach?",
    answer: "We support over 100 subjects ranging from K-12 academics and university-level courses to professional skills, languages, and music.",
  },
]

export function TutorFAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about teaching on EduElite.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
