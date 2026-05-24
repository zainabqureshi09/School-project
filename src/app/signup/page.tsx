"use client"

import Link from "next/link"
import { GraduationCap, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignupPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        
        <Link href="/" className="flex items-center gap-2 z-10">
          <GraduationCap className="h-8 w-8" />
          <span className="text-2xl font-bold">EduElite</span>
        </Link>
        
        <div className="z-10">
          <h2 className="text-4xl font-bold mb-6">Start your journey today.</h2>
          <p className="text-primary-foreground/80 text-lg max-w-md">
            Join the most exclusive community of learners and educators. Premium results start here.
          </p>
        </div>
        
        <div className="z-10 text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} EduElite Inc.
        </div>
      </div>
      
      <div className="flex items-center justify-center p-8 md:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex justify-center mb-8">
             <Link href="/" className="flex items-center gap-2">
              <GraduationCap className="h-10 w-10 text-primary" />
              <span className="text-3xl font-bold">EduElite</span>
            </Link>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2">Create an account</h1>
            <p className="text-muted-foreground">Join EduElite and unlock your potential.</p>
          </div>
          
          <div className="space-y-4">
            <Button variant="outline" className="w-full h-12 rounded-xl flex items-center gap-3 font-bold">
              <Globe className="h-5 w-5" />
              Sign up with Google
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or sign up with email</span>
            </div>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
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
              <Input type="email" placeholder="name@example.com" className="h-12 rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input type="password" placeholder="••••••••" className="h-12 rounded-xl" />
            </div>
            <Button className="w-full h-12 rounded-xl font-bold text-lg">Create Account</Button>
          </form>
          
          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <Link href="/login" className="text-primary font-bold">Log in</Link>
          </p>
          
          <p className="text-center text-[10px] text-muted-foreground">
            By clicking &quot;Create Account&quot;, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}
