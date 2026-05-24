"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Smile, Paperclip, MoreHorizontal, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const initialMessages = [
  { id: 1, user: "Alex Thompson", content: "Wait, so can we use Server Actions for GET requests too?", time: "6:12 PM", avatar: "https://i.pravatar.cc/150?u=alex" },
  { id: 2, user: "Elena Martinez", content: "Yes! But usually they are for mutations.", time: "6:13 PM", avatar: "https://i.pravatar.cc/150?u=elena" },
  { id: 3, user: "Dr. Sarah Johnson", content: "Great explanation Michael, the visual diagram really helped.", time: "6:15 PM", avatar: "https://i.pravatar.cc/150?u=sarah" },
  { id: 4, user: "System", content: "David Miller raised their hand.", time: "6:16 PM", type: "system" }
]

export function LiveChat() {
  const [messages, setMessages] = useState(initialMessages)
  const [inputValue, setInputValue] = useState("")

  const handleSend = () => {
    if (!inputValue.trim()) return
    const newMessage = {
      id: Date.now(),
      user: "You",
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: ""
    }
    setMessages([...messages, newMessage])
    setInputValue("")
  }

  return (
    <div className="flex flex-col h-full bg-background border rounded-[2rem] overflow-hidden shadow-xl">
      <div className="p-6 border-b flex items-center justify-between">
         <h3 className="font-black flex items-center gap-2">
            Live Chat <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
         </h3>
         <Button variant="ghost" size="icon" className="rounded-xl">
            <MoreHorizontal className="h-5 w-5" />
         </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
         <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex gap-3 ${msg.type === "system" ? "justify-center" : ""}`}
              >
                {msg.type === "system" ? (
                  <div className="bg-primary/5 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-primary/10">
                    {msg.content}
                  </div>
                ) : (
                  <>
                    <Avatar className="h-8 w-8 border border-primary/20 shrink-0">
                       <AvatarImage src={msg.avatar} />
                       <AvatarFallback>{msg.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                       <div className="flex items-center gap-2">
                          <span className="text-xs font-black">{msg.user}</span>
                          <span className="text-[10px] font-bold text-muted-foreground">{msg.time}</span>
                       </div>
                       <p className={`text-sm font-medium p-3 rounded-2xl border ${msg.user === "You" ? "bg-primary text-white border-primary shadow-lg" : "bg-accent/30"}`}>
                          {msg.content}
                       </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
         </AnimatePresence>
      </div>

      <div className="p-6 border-t bg-accent/20">
         <div className="relative group">
            <Input 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..." 
              className="h-14 pl-12 pr-24 rounded-2xl bg-background border-2 border-primary/10 focus-visible:border-primary/50 transition-all font-medium"
            />
            <Smile className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
               <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl text-muted-foreground">
                  <Paperclip className="h-5 w-5" />
               </Button>
               <Button size="icon" onClick={handleSend} className="h-10 w-10 rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                  <Send className="h-4 w-4" />
               </Button>
            </div>
         </div>
      </div>
    </div>
  )
}
