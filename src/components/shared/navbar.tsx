"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Search, GraduationCap, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { name: "Find Tutors", href: "/find-tutors" },
  { name: "Become Tutor", href: "/become-tutor" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
]

const subjects = [
  { name: "Mathematics", href: "/subjects/math" },
  { name: "Science", href: "/subjects/science" },
  { name: "Languages", href: "/subjects/languages" },
  { name: "Computer Science", href: "/subjects/cs" },
  { name: "Business", href: "/subjects/business" },
  { name: "Arts & Humanities", href: "/subjects/arts" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 border-b backdrop-blur-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-1.5 rounded-xl transition-transform group-hover:scale-110">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">EduElite</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-sm font-medium"
                  >
                    Subjects <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 p-2">
                  {subjects.map((subject) => (
                    <DropdownMenuItem key={subject.name}>
                      <Link href={subject.href} className="w-full">
                        {subject.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="rounded-full px-5 shadow-lg shadow-primary/20">
                  Join for Free
                </Button>
              </Link>
            </div>
            <ThemeToggle />

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/80 backdrop-blur-2xl border-l-primary/10">
                <div className="flex flex-col h-full gap-6 py-8">
                  <Link href="/" className="flex items-center gap-2 group px-2">
                    <div className="bg-primary p-1.5 rounded-xl">
                       <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter">EduElite</span>
                  </Link>
                  
                  <div className="flex-1 overflow-y-auto no-scrollbar px-2 space-y-8">
                    <div className="flex flex-col gap-4 mt-8">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                        Navigation
                      </p>
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="text-xl font-bold hover:text-primary transition-colors flex items-center justify-between group/link"
                        >
                          {link.name}
                          <ArrowRight className="h-5 w-5 opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" />
                        </Link>
                      ))}
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                        Subjects
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {subjects.slice(0, 6).map((subject) => (
                          <Link
                            key={subject.name}
                            href={subject.href}
                            className="text-xs font-bold p-3 rounded-xl bg-accent/50 hover:bg-primary hover:text-white transition-all text-center border border-transparent hover:border-primary/20"
                          >
                            {subject.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-6 border-t border-primary/10 px-2">
                    <Link href="/signup" className="w-full">
                      <Button className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-primary/20">Get Started</Button>
                    </Link>
                    <Link href="/login" className="w-full">
                      <Button variant="outline" className="w-full h-14 text-lg font-black rounded-2xl border-2">
                        Log in
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
