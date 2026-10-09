"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Star, MoreVertical, Send, Smile, Mic, Paperclip, Phone, Video, FileText, Play } from "lucide-react"
import { conversations } from "./data"

function Avatar({ name, initials, color, size = "md", online }) {
  const sizes = { sm: "w-8 h-8 text-xs", md: "w-10 h-10 text-sm", lg: "w-12 h-12 text-base" }
  return (
    <div className="relative shrink-0">
      <div className={`${sizes[size]} ${color} rounded-full flex items-center justify-center text-white font-semibold`}>
        {initials}
      </div>
      {online !== undefined && (
        <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${online ? "bg-green-500" : "bg-gray-300"}`} />
      )}
    </div>
  )
}

function FileCard({ fileName, fileSize, sent }) {
  return (
    <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 max-w-[240px] ${sent ? "bg-[#0A65CC] text-white" : "bg-white border border-gray-100 shadow-sm"}`}>
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${sent ? "bg-white/20" : "bg-blue-50"}`}>
        <FileText size={18} className={sent ? "text-white" : "text-[#0A65CC]"} />
      </div>
      <div className="min-w-0">
        <p className={`text-xs font-semibold truncate ${sent ? "text-white" : "text-[#18191C]"}`}>{fileName}</p>
        <p className={`text-[11px] ${sent ? "text-blue-200" : "text-[#767F8C]"}`}>{fileSize}</p>
      </div>
    </div>
  )
}

function ImageMessage() {
  return (
    <div className="rounded-2xl overflow-hidden w-[200px] h-[140px] bg-amber-100 flex items-center justify-center">
      <div className="text-center opacity-60">
        <div className="w-12 h-12 mx-auto bg-amber-300 rounded-xl flex items-center justify-center mb-1">
          <span className="text-xl">📓</span>
        </div>
        <p className="text-[10px] text-amber-700">notebook.jpg</p>
      </div>
    </div>
  )
}

function AudioMessage({ sent }) {
  const bars = [3, 6, 10, 8, 14, 10, 6, 12, 9, 5, 11, 8, 6, 13, 7, 4, 9, 11, 7, 5]
  return (
    <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${sent ? "bg-[#0A65CC]" : "bg-white border border-gray-100 shadow-sm"} max-w-[220px]`}>
      <button className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${sent ? "bg-white/20" : "bg-blue-50"}`}>
        <Play size={12} className={sent ? "text-white" : "text-[#0A65CC]"} />
      </button>
      <div className="flex items-center gap-0.5 flex-1">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: h }}
            className={`w-1 rounded-full ${sent ? "bg-white/60" : "bg-[#0A65CC]/50"}`}
          />
        ))}
      </div>
      <span className={`text-[11px] ${sent ? "text-blue-200" : "text-[#767F8C]"}`}>0:18</span>
    </div>
  )
}

function Message({ msg }) {
  const isSent = msg.from === "me"

  return (
    <div className={`flex gap-2 ${isSent ? "justify-end" : "justify-start"}`}>
      <div className={`flex flex-col ${isSent ? "items-end" : "items-start"} gap-1`}>
        {msg.type === "text" && (
          <div className={`rounded-2xl px-4 py-3 max-w-[340px] text-sm leading-relaxed ${isSent ? "bg-[#0A65CC] text-white rounded-tr-sm" : "bg-white border border-gray-100 shadow-sm text-[#18191C] rounded-tl-sm"}`}>
            {msg.text}
          </div>
        )}
        {msg.type === "file" && <FileCard fileName={msg.fileName} fileSize={msg.fileSize} sent={isSent} />}
        {msg.type === "image" && <ImageMessage />}
        {msg.type === "emoji" && (
          <div className="text-3xl">{msg.emoji}</div>
        )}
        {msg.type === "audio" && <AudioMessage sent={isSent} />}
        <span className="text-[11px] text-[#A0ABB8] px-1">{msg.time}</span>
      </div>
    </div>
  )
}

function ChatWindow({ conversation }) {
  const [message, setMessage] = useState("")
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [conversation.id])

  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Avatar name={conversation.name} initials={conversation.initials} color={conversation.color} size="md" online={conversation.online} />
          <div>
            <h3 className="text-sm font-semibold text-[#18191C]">{conversation.name}</h3>
            <p className="text-xs text-[#767F8C]">{conversation.lastSeen}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-gray-100 text-[#767F8C] transition-colors">
            <Phone size={18} />
          </button>
          <button className="p-2 rounded-xl hover:bg-gray-100 text-[#767F8C] transition-colors">
            <Video size={18} />
          </button>
          <button className="p-2 rounded-xl hover:bg-gray-100 text-[#767F8C] transition-colors">
            <Star size={18} />
          </button>
          <button className="p-2 rounded-xl hover:bg-gray-100 text-[#767F8C] transition-colors">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 bg-[#F5F6FA]">
        {conversation.messages.map((msg) => (
          <Message key={msg.id} msg={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="px-4 py-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-3 bg-[#F5F6FA] rounded-2xl px-4 py-2">
          <button className="text-[#767F8C] hover:text-[#0A65CC] transition-colors">
            <Paperclip size={18} />
          </button>
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Write a message..."
            className="flex-1 bg-transparent text-sm text-[#18191C] placeholder-[#A0ABB8] outline-none"
            onKeyDown={e => e.key === "Enter" && setMessage("")}
          />
          <button className="text-[#767F8C] hover:text-[#0A65CC] transition-colors">
            <Smile size={18} />
          </button>
          <button className="text-[#767F8C] hover:text-[#0A65CC] transition-colors">
            <Mic size={18} />
          </button>
          <button
            onClick={() => setMessage("")}
            className="w-9 h-9 rounded-xl bg-[#0A65CC] flex items-center justify-center text-white hover:bg-[#085BBA] transition-colors"
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#F5F6FA] gap-4">
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#0A65CC]" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-[#18191C]">Select a chat to start messaging</p>
        <p className="text-xs text-[#767F8C] mt-1">Choose from your conversations on the left</p>
      </div>
    </div>
  )
}

export default function MessagesPage() {
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState("")

  const filtered = conversations.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  const active = selected ? conversations.find(c => c.id === selected) : null

  return (
    <div className="flex h-[calc(100vh-73px)] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Left: conversation list */}
      <div className="w-[300px] xl:w-[320px] shrink-0 flex flex-col border-r border-gray-100">
        {/* Search */}
        <div className="px-4 py-4 border-b border-gray-100">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0ABB8]" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search messages..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F5F6FA] text-sm text-[#18191C] placeholder-[#A0ABB8] outline-none border border-transparent focus:border-[#0A65CC]"
            />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {filtered.map(conv => (
            <button
              key={conv.id}
              onClick={() => setSelected(conv.id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-gray-50 ${selected === conv.id ? "bg-blue-50 border-r-2 border-[#0A65CC]" : ""}`}
            >
              <Avatar name={conv.name} initials={conv.initials} color={conv.color} size="md" online={conv.online} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className={`text-sm font-semibold truncate ${selected === conv.id ? "text-[#0A65CC]" : "text-[#18191C]"}`}>
                    {conv.name}
                  </span>
                  <span className="text-[11px] text-[#A0ABB8] shrink-0 ml-2">{conv.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#767F8C] truncate flex-1">{conv.preview}</p>
                  {conv.unread > 0 && (
                    <span className="ml-2 shrink-0 bg-[#0A65CC] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right: chat or empty */}
      <div className="flex-1 flex flex-col min-w-0">
        {active ? <ChatWindow conversation={active} /> : <EmptyState />}
      </div>
    </div>
  )
}
