"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, Clock, TrendingUp, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const suggestions = [
  { text: "Advanced Calculus", type: "subject" },
  { text: "Python for Data Science", type: "skill" },
  { text: "IELTS Preparation", type: "exam" },
  { text: "React & Next.js", type: "skill" },
]

const recentSearches = [
  "Linear Algebra",
  "Organic Chemistry",
  "English Conversation",
]

export function SmartSearch({ onSearch }: { onSearch?: (val: string) => void }) {
  const [query, setQuery] = React.useState("")
  const [isFocused, setIsFocused] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = () => {
    onSearch?.(query)
    setIsFocused(false)
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto z-40">
      <div 
        className={cn(
          "flex items-center gap-2 p-2 rounded-[2rem] bg-background border-2 transition-all duration-300 shadow-2xl shadow-primary/5",
          isFocused ? "border-primary ring-4 ring-primary/10 scale-[1.02]" : "border-muted"
        )}
      >
        <div className="flex-1 flex items-center gap-3 pl-4">
          <Search className={cn("h-6 w-6 transition-colors", isFocused ? "text-primary" : "text-muted-foreground")} />
          <Input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by subject, skill, or tutor name..." 
            className="border-none focus-visible:ring-0 text-lg h-12 bg-transparent p-0 placeholder:text-muted-foreground/60"
          />
          {query && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full h-8 w-8"
              onClick={() => {
                setQuery("")
                onSearch?.("")
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button 
          onClick={handleSearch}
          size="lg" className="h-14 px-10 rounded-[1.5rem] text-lg font-bold shadow-xl shadow-primary/20"
        >
          Find Tutors
        </Button>
      </div>

      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full mt-4 left-0 w-full bg-background/80 backdrop-blur-2xl rounded-[2.5rem] border shadow-2xl overflow-hidden p-6"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                  <TrendingUp className="h-3 w-3" /> Suggestions
                </div>
                <div className="space-y-1">
                  {suggestions.map((item) => (
                    <button
                      key={item.text}
                      onClick={() => {
                        setQuery(item.text)
                        onSearch?.(item.text)
                        setIsFocused(false)
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-accent transition-colors group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <span className="font-semibold">{item.text}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-muted-foreground">{item.type}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                  <Clock className="h-3 w-3" /> Recent Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setQuery(item)
                        onSearch?.(item)
                        setIsFocused(false)
                      }}
                      className="px-4 py-2 rounded-full border bg-accent/50 hover:bg-accent transition-all text-sm font-medium"
                    >
                      {item}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 p-6 rounded-3xl bg-primary/5 border border-primary/10">
                  <p className="text-sm font-bold mb-1 text-primary">Need help deciding?</p>
                  <p className="text-xs text-muted-foreground mb-4">Try our AI-powered tutor matching tool for a personalized recommendation.</p>
                  <Button variant="link" className="p-0 h-auto text-xs font-bold text-primary">Start AI Matcher →</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
