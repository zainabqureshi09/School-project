"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Upload, Send, User, GraduationCap, BookOpen, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function TutorApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 p-8 rounded-[3rem] bg-primary/5 border border-primary/10"
      >
        <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-8">
          Thank you for applying to EduElite. Our team will review your profile and get back to you within 48 hours for an interview.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline">Back to Home</Button>
      </motion.div>
    )
  }

  return (
    <div id="apply" className="max-w-4xl mx-auto py-24 px-4 md:px-6">
      <div className="bg-background border rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl" />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Become an <span className="text-primary">Elite Tutor</span></h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below to start your application process.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Personal Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <User className="h-5 w-5" />
                <h3 className="text-xl font-bold">Personal Information</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Jane" required className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" required className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required className="h-12 rounded-xl" />
                </div>
              </div>
            </div>

            {/* Academic Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                <h3 className="text-xl font-bold">Education & Qualifications</h3>
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Highest Degree / Current University</Label>
                <Input id="education" placeholder="MSc Computer Science, Stanford University" required className="h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cv">Upload CV / Resume (Optional)</Label>
                <div className="border-2 border-dashed border-muted-foreground/20 rounded-2xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer bg-accent/5">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">PDF, DOCX up to 10MB</p>
                </div>
              </div>
            </div>

            {/* Teaching Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <BookOpen className="h-5 w-5" />
                <h3 className="text-xl font-bold">Teaching Experience</h3>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Describe your teaching experience</Label>
                <Textarea 
                  id="experience" 
                  placeholder="Tell us about your previous teaching or tutoring roles..." 
                  className="min-h-[120px] rounded-2xl p-4"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="subjects">Primary Subjects</Label>
                  <Input id="subjects" placeholder="Mathematics, Physics, Computer Science" required className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rate">Expected Hourly Rate ($)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="rate" type="number" placeholder="50" className="h-12 pl-10 rounded-xl" required />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-16 rounded-2xl text-xl font-bold gap-3 shadow-xl shadow-primary/20"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Submit Application
                    <Send className="h-5 w-5" />
                  </>
                )}
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                By submitting, you agree to our <span className="underline cursor-pointer">Tutor Terms & Conditions</span>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
