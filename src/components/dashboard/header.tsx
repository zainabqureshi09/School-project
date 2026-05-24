"use client"

import * as React from "react"
import { Bell, User, Settings, HelpCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CommandMenu } from "./command-menu"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="h-20 border-b bg-background/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-8">
        <CommandMenu />
        <div className="hidden xl:flex items-center gap-4">
           <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 px-3 py-1 rounded-full font-bold flex gap-1.5 items-center">
              <Sparkles className="h-3 w-3" /> AI Assistant Active
           </Badge>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2.5 rounded-xl hover:bg-accent transition-colors group">
          <Bell className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
        </button>
        
        <button className="p-2.5 rounded-xl hover:bg-accent transition-colors text-muted-foreground hover:text-foreground">
           <HelpCircle className="h-5 w-5" />
        </button>

        <div className="h-8 w-px bg-border mx-2" />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="flex items-center gap-3 p-1 pl-3 rounded-2xl hover:bg-accent transition-all border border-transparent hover:border-border group outline-none">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black leading-tight">Zain Ahmed</p>
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest leading-tight">Elite Member</p>
              </div>
              <Avatar className="h-10 w-10 border-2 border-primary/10 transition-transform group-hover:scale-105">
                <AvatarImage src="https://i.pravatar.cc/150?u=zain" />
                <AvatarFallback>ZA</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 shadow-2xl">
            <DropdownMenuLabel className="px-3 py-2">
               <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">My Account</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-xl px-3 py-2.5 font-bold focus:bg-primary focus:text-white cursor-pointer gap-2">
               <User className="h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-xl px-3 py-2.5 font-bold focus:bg-primary focus:text-white cursor-pointer gap-2">
               <Settings className="h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-xl px-3 py-2.5 font-bold text-red-500 focus:bg-red-50 focus:text-red-600 cursor-pointer">
               Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
