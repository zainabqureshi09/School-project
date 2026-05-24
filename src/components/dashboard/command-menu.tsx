"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  MessageSquare,
  BookOpen,
  LayoutDashboard,
  ShieldCheck,
  Zap,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/50 border hover:bg-accent transition-all text-xs font-medium text-muted-foreground w-64"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="flex-1 text-left">Search everywhere...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Go to Dashboard</span>
            </CommandItem>
            <CommandItem>
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Browse Classes</span>
            </CommandItem>
            <CommandItem>
              <Zap className="mr-2 h-4 w-4" />
              <span>Join Live Session</span>
            </CommandItem>
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Schedule Session</span>
            </CommandItem>
            <CommandItem>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Messages</span>
              <CommandShortcut>⌘M</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile Settings</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing & Payments</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>General Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Quick Access">
            <CommandItem>
              <ShieldCheck className="mr-2 h-4 w-4" />
              <span>Tutor Approvals (Admin)</span>
            </CommandItem>
            <CommandItem>
              <Zap className="mr-2 h-4 w-4" />
              <span>AI Lesson Planner (Tutor)</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
