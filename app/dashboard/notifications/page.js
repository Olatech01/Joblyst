"use client"

import { useState } from "react"
import { Bell, MoreHorizontal, Star, Mail } from "lucide-react"

const notifications = [
  {
    id: 1,
    text: "Prime Works Ltd has started following your profile. Visit their page to see their latest job postings and company updates just now.",
    tag: "Message",
    tagColor: "border-red-400 text-red-500",
    time: "22:14 AM",
    starred: false,
    hasActions: true,
    category: "Messages",
    bg: "",
  },
  {
    id: 2,
    text: "Your resume has been successfully submitted for Tech Nova Inc.check out your dashboard for real time status updates...",
    tag: "Apply Result",
    tagColor: "border-green-500 text-green-600",
    time: "22:14 AM",
    starred: false,
    hasActions: false,
    category: "Apply Result",
    bg: "",
  },
  {
    id: 3,
    text: "Your profile is almost complete! Add a few more details to increase your visibility to employers and get personalized job suggestions.",
    tag: "Message",
    tagColor: "border-red-400 text-red-500",
    time: "22:14 AM",
    starred: false,
    hasActions: false,
    category: "Messages",
    bg: "bg-gray-50",
  },
  {
    id: 4,
    text: "Your resume has been successfully submitted for the 'Product Design' position at Global Crop Solution. We'll keep you updated on the next steps.",
    tag: "Apply Result",
    tagColor: "border-green-500 text-green-600",
    time: "22:14 AM",
    starred: true,
    hasActions: true,
    category: "Apply Result",
    bg: "",
  },
  {
    id: 5,
    text: "Google's service, offered free of charge, instantly translates words, phrases, and web pages between English and over 100 other languages.",
    tag: "Messeges",
    tagColor: "border-red-400 text-red-500",
    time: "22:14 AM",
    starred: false,
    hasActions: false,
    category: "Messages",
    bg: "",
  },
  {
    id: 6,
    text: "Exciting opportunity! A 'Digital Marketing Specialist' role has just been posted at Bright Solutions Group. Check your dashboard for more information and apply now.",
    tag: "New job",
    tagColor: "border-blue-500 text-blue-600",
    time: "22:14 AM",
    starred: false,
    hasActions: true,
    category: "New job",
    bg: "",
  },
]

const tabs = ["All", "New job", "Messages", "Apply Result"]

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("All")
  const [checked, setChecked] = useState({})
  const [allChecked, setAllChecked] = useState(false)
  const [starred, setStarred] = useState(
    Object.fromEntries(notifications.map((n) => [n.id, n.starred]))
  )

  const filtered =
    activeTab === "All"
      ? notifications
      : notifications.filter((n) => n.category === activeTab)

  function toggleAll() {
    const next = !allChecked
    setAllChecked(next)
    setChecked(Object.fromEntries(filtered.map((n) => [n.id, next])))
  }

  function toggleOne(id) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function toggleStar(id) {
    setStarred((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Bell size={20} className="text-[#18191C]" />
          <p className="text-sm text-[#18191C]">
            You have{" "}
            <span className="font-semibold text-[#0A65CC]">3 notifications</span> today.
          </p>
        </div>
        <button className="p-1 rounded-lg hover:bg-gray-100 text-gray-400">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
        {/* Select-all checkbox */}
        <input
          type="checkbox"
          checked={allChecked}
          onChange={toggleAll}
          className="size-4 rounded border-gray-300 accent-[#0A65CC] mr-2 cursor-pointer"
        />
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
              activeTab === tab
                ? "bg-[#0A65CC] text-white border-[#0A65CC]"
                : "bg-white text-[#5E6670] border-gray-200 hover:border-[#0A65CC] hover:text-[#0A65CC]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Notification rows */}
      <div className="divide-y divide-gray-100">
        {filtered.map((n) => (
          <div
            key={n.id}
            className={`flex items-start gap-4 px-6 py-4 ${n.bg} hover:bg-blue-50/30 transition-colors`}
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={!!checked[n.id]}
              onChange={() => toggleOne(n.id)}
              className="mt-1 size-4 rounded border-gray-300 accent-[#0A65CC] shrink-0 cursor-pointer"
            />

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#18191C] leading-6">{n.text}</p>
              <span className={`mt-2 inline-block border rounded px-2.5 py-0.5 text-[11px] font-semibold ${n.tagColor}`}>
                {n.tag}
              </span>
            </div>

            {/* Right side: actions + time */}
            <div className="flex flex-col items-end gap-2 shrink-0">
              {n.hasActions && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleStar(n.id)}
                    className={`transition-colors ${starred[n.id] ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"}`}
                  >
                    <Star size={16} fill={starred[n.id] ? "currentColor" : "none"} />
                  </button>
                  <button className="text-gray-300 hover:text-[#0A65CC] transition-colors">
                    <Mail size={16} />
                  </button>
                </div>
              )}
              <span className="text-xs text-[#767F8C]">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
