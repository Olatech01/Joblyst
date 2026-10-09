"use client"

import { Search, Bell, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'

const pageTitles = {
  '/dashboard': 'Dashboard',
  '/dashboard/resume': 'My Resume',
  '/dashboard/resume/': 'My Resume',
  '/dashboard/notifications': 'Notification',
  '/dashboard/messages': 'Messages',
  '/dashboard/settings': 'Account Setting',
  '/dashboard/activity': 'Activity',
}

const Header = ({ onMenuClick }) => {
  const pathname = usePathname()
  const title = pageTitles[pathname] ?? 'Dashboard'

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 gap-4">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            <Menu size={22} />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
            <p className="text-sm text-gray-500 hidden sm:block">
              Updating your information will offer you the most relevent content
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative hidden md:block">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-48 lg:w-64 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="relative p-2 rounded-xl hover:bg-gray-100 text-gray-600">
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
              30
            </span>
          </button>
          <div className="flex items-center gap-3 pl-2 sm:pl-3 border-l border-gray-200">
            <img
              src="https://i.pravatar.cc/150?img=47"
              alt="Kathryn Murphy"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900 leading-tight">Kathryn Murphy</p>
              <p className="text-xs text-gray-500">kathrynmurphy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
