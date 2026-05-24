"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  BookOpen, 
  MessageSquare, 
  Calendar, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Send,
  MoreVertical,
  Paperclip,
  Smile,
  GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { cn } from "@/lib/utils"

const chats = [
  { id: 1, name: "Dr. Sarah Johnson", lastMsg: "See you at 4:00 PM!", time: "10:24 AM", unread: 2, image: "https://i.pravatar.cc/150?u=sarah" },
  { id: 2, name: "Michael Chen", lastMsg: "That code looks much better now.", time: "Yesterday", unread: 0, image: "https://i.pravatar.cc/150?u=michael" },
  { id: 3, name: "Elena Rodriguez", lastMsg: "¡Perfecto! Practice the verbs.", time: "Tuesday", unread: 0, image: "https://i.pravatar.cc/150?u=elena" },
]

const messages = [
  { id: 1, text: "Hi Sarah, I'm having trouble with the last integration problem.", sender: "me", time: "10:15 AM" },
  { id: 2, text: "No problem! Which one is it? The trigonometric one?", sender: "them", time: "10:18 AM" },
  { id: 3, text: "Yes, exactly. I can't seem to find the right substitution.", sender: "me", time: "10:20 AM" },
  { id: 4, text: "Don't worry, we'll go over it step-by-step in our session today. See you at 4:00 PM!", sender: "them", time: "10:24 AM" },
]

export default function MessagesPage() {
  const [activeChat, setActiveChat] = React.useState(1)

  return (
    <div className="flex h-screen bg-accent/10 overflow-hidden">
      {/* Sidebar - Reusing basic layout */}
      <aside className="w-20 lg:w-72 bg-background border-r flex flex-col">
        <div className="p-4 lg:p-8">
          <Link href="/" className="flex items-center gap-2 mb-10">
            <div className="bg-primary p-1.5 rounded-xl">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight hidden lg:block">EduElite</span>
          </Link>
          
          <nav className="space-y-1">
            {[
              { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
              { label: "My Sessions", icon: Calendar, href: "#" },
              { label: "Messages", icon: MessageSquare, href: "/dashboard/messages", active: true },
              { label: "Settings", icon: Settings, href: "#" },
            ].map((item) => (
              <Link key={item.label} href={item.href}>
                <button
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all justify-center lg:justify-start",
                    item.active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="hidden lg:block">{item.label}</span>
                </button>
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto p-4 lg:p-8">
          <Button variant="ghost" className="w-full flex justify-center lg:justify-start gap-3 px-4 py-3 text-red-500 font-bold hover:bg-red-50 hover:text-red-600">
            <LogOut className="h-5 w-5" />
            <span className="hidden lg:block">Log Out</span>
          </Button>
        </div>
      </aside>

      {/* Messaging Area */}
      <main className="flex-1 flex overflow-hidden">
        {/* Chat List */}
        <div className="w-full lg:w-96 border-r bg-background flex flex-col">
           <div className="p-6 border-b">
              <h2 className="text-2xl font-black mb-4">Messages</h2>
              <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                 <Input placeholder="Search chats..." className="pl-10 h-11 rounded-xl bg-accent/30 border-none" />
              </div>
           </div>
           
           <ScrollArea className="flex-1">
              <div className="p-4 space-y-1">
                 {chats.map((chat) => (
                   <button
                     key={chat.id}
                     onClick={() => setActiveChat(chat.id)}
                     className={cn(
                       "w-full p-4 rounded-[1.5rem] flex gap-4 items-center transition-all",
                       activeChat === chat.id ? "bg-primary/10 border-primary/20" : "hover:bg-accent/50"
                     )}
                   >
                     <div className="relative">
                        <Avatar className="h-12 w-12 border-2 border-background shadow-md">
                           <AvatarImage src={chat.image} />
                           <AvatarFallback>{chat.name[0]}</AvatarFallback>
                        </Avatar>
                        {chat.unread > 0 && (
                          <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-background">
                             {chat.unread}
                          </span>
                        )}
                     </div>
                     <div className="flex-1 text-left overflow-hidden">
                        <div className="flex justify-between items-center mb-1">
                           <h4 className="font-bold truncate">{chat.name}</h4>
                           <span className="text-[10px] text-muted-foreground font-bold uppercase">{chat.time}</span>
                        </div>
                        <p className={cn("text-xs truncate", chat.unread > 0 ? "font-bold text-foreground" : "text-muted-foreground")}>
                           {chat.lastMsg}
                        </p>
                     </div>
                   </button>
                 ))}
              </div>
           </ScrollArea>
        </div>

        {/* Chat Window */}
        <div className="hidden lg:flex flex-1 flex-col bg-background">
           {/* Chat Header */}
           <header className="h-20 border-b flex items-center justify-between px-8 bg-background/50 backdrop-blur-md">
              <div className="flex items-center gap-4">
                 <Avatar className="h-10 w-10 border-2 border-primary/20">
                    <AvatarImage src={chats.find(c => c.id === activeChat)?.image} />
                    <AvatarFallback>T</AvatarFallback>
                 </Avatar>
                 <div>
                    <h3 className="font-bold">{chats.find(c => c.id === activeChat)?.name}</h3>
                    <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest flex items-center gap-1">
                       <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" /> Online
                    </p>
                 </div>
              </div>
              <div className="flex gap-2">
                 <Button variant="ghost" size="icon" className="rounded-xl"><Search className="h-5 w-5 text-muted-foreground" /></Button>
                 <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical className="h-5 w-5 text-muted-foreground" /></Button>
              </div>
           </header>

           {/* Messages Scroll Area */}
           <ScrollArea className="flex-1 p-8">
              <div className="max-w-4xl mx-auto space-y-6">
                 {messages.map((msg) => (
                   <div key={msg.id} className={cn("flex", msg.sender === "me" ? "justify-end" : "justify-start")}>
                      <div className={cn(
                        "max-w-[70%] p-5 rounded-[2rem] text-sm leading-relaxed",
                        msg.sender === "me" 
                          ? "bg-primary text-white rounded-tr-none shadow-xl shadow-primary/10" 
                          : "bg-accent/50 border rounded-tl-none"
                      )}>
                         <p>{msg.text}</p>
                         <p className={cn("text-[10px] mt-2 font-bold uppercase", msg.sender === "me" ? "text-white/60 text-right" : "text-muted-foreground")}>
                            {msg.time}
                         </p>
                      </div>
                   </div>
                 ))}
              </div>
           </ScrollArea>

           {/* Input Area */}
           <div className="p-6 bg-background">
              <div className="max-w-4xl mx-auto">
                 <div className="relative flex items-center gap-4 bg-accent/30 p-2 pl-4 rounded-[2rem] border focus-within:border-primary/50 transition-all">
                    <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
                       <Paperclip className="h-5 w-5" />
                    </Button>
                    <input 
                       type="text" 
                       placeholder="Type your message..." 
                       className="flex-1 bg-transparent border-none focus:outline-none text-sm font-medium"
                    />
                    <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground">
                       <Smile className="h-5 w-5" />
                    </Button>
                    <Button className="h-12 w-12 rounded-full shadow-lg shadow-primary/20">
                       <Send className="h-5 w-5" />
                    </Button>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}
