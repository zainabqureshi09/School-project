"use client"

import { LiveVideoArea } from "@/components/classes/live-video-area"
import { LiveChat } from "@/components/classes/live-chat"
import { LiveControls } from "@/components/classes/live-controls"
import { motion } from "framer-motion"
import { LayoutGrid, Users, FileText, Info, GraduationCap, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LiveClassPage() {
  return (
    <main className="h-screen bg-neutral-950 text-white overflow-hidden flex flex-col p-4 md:p-6">
      
      {/* Top Navigation */}
      <header className="flex justify-between items-center mb-6">
         <div className="flex items-center gap-6">
            <Link href="/classes">
               <Button variant="ghost" className="rounded-xl gap-2 text-white/60 hover:text-white hover:bg-white/10">
                  <ChevronLeft className="h-5 w-5" /> Back to Dashboard
               </Button>
            </Link>
            <div className="h-8 w-[2px] bg-white/10 hidden md:block" />
            <div className="hidden md:block">
               <h1 className="text-xl font-black flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  React Server Components: The Deep Dive
               </h1>
               <p className="text-xs font-bold text-white/40 uppercase tracking-widest mt-1">Cohort #04 • Session 02 of 12</p>
            </div>
         </div>

         <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
               <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
               <span className="text-xs font-black uppercase tracking-widest text-emerald-500">Connected</span>
            </div>
            <Button variant="ghost" size="icon" className="rounded-xl bg-white/5 border border-white/10">
               <Info className="h-5 w-5" />
            </Button>
         </div>
      </header>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
         
         {/* Left: Video Area */}
         <section className="col-span-12 lg:col-span-8 xl:col-span-9 flex flex-col gap-6 h-full min-h-0">
            <div className="flex-1 relative min-h-0">
               <LiveVideoArea />
            </div>
            
            <div className="flex justify-center pb-2">
               <LiveControls />
            </div>
         </section>

         {/* Right: Sidebar (Chat/Participants) */}
         <aside className="hidden lg:flex col-span-4 xl:col-span-3 flex-col gap-6 h-full min-h-0">
            <div className="flex bg-white/5 border border-white/10 p-1 rounded-2xl">
               <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-black text-sm">
                  <MessageSquare className="h-4 w-4" /> Chat
               </button>
               <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-white/5 text-white/60 font-black text-sm">
                  <Users className="h-4 w-4" /> (142)
               </button>
               <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-white/5 text-white/60 font-black text-sm">
                  <FileText className="h-4 w-4" /> Notes
               </button>
            </div>
            
            <div className="flex-1 min-h-0">
               <LiveChat />
            </div>
         </aside>
      </div>

    </main>
  )
}

import { MessageSquare } from "lucide-react"
