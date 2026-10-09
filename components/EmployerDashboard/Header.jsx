"use client"

import { Search, Bell, Menu, Plus } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const pageTitles = {
  "/employer": "Activity",
  "/employer/profile": "Employer Profile",
  "/employer/post-job": "Post a Job",
  "/employer/notifications": "Notification",
  "/employer/messages": "Messages",
  "/employer/settings": "Account Setting",
  "/employer/hiring": "Manage Hiring",
}

export default function EmployerHeader({ onMenuClick }) {
  const pathname = usePathname()
  const title = pageTitles[pathname] ?? "Activity"

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 gap-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <button onClick={onMenuClick} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600">
            <Menu size={22} />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-[#18191C]">{title}</h1>
            <p className="text-sm text-gray-500 hidden sm:block">
              Updating your information will offer you the most relevent content
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative hidden md:block">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-48 lg:w-56 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Link
            href="/employer/post-job"
            className="hidden sm:flex items-center gap-1.5 bg-[#0A65CC] text-white rounded-xl px-4 py-2 text-sm font-semibold hover:bg-[#085BBA] transition-colors"
          >
            <Plus size={16} />
            Post a Job
          </Link>
          <button className="relative p-2 rounded-xl hover:bg-gray-100 text-gray-600">
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
              30
            </span>
          </button>
          {/* Company avatar (BMW logo colors) */}
          <div className="flex items-center gap-3 pl-2 sm:pl-3 border-l border-gray-200">
            <div className="w-9 h-9 rounded-full bg-[#1C69D4] flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
              <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
                <circle cx="18" cy="18" r="18" fill="#1C69D4"/>
                <circle cx="18" cy="18" r="14" fill="none" stroke="white" strokeWidth="1.5"/>
                <path d="M18 4 L18 32" stroke="white" strokeWidth="1.5"/>
                <path d="M4 18 L32 18" stroke="white" strokeWidth="1.5"/>
                <path d="M18 4 A14 14 0 0 0 4 18 L18 18 Z" fill="white"/>
                <path d="M18 18 A14 14 0 0 0 32 32 L32 18 Z" fill="white" transform="rotate(180 18 18)"/>
                <circle cx="18" cy="18" r="3" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
