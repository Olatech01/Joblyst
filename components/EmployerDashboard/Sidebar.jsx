"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard, User, PlusSquare, Bell,
  MessageSquare, Settings, Users, LogOut, HelpCircle, ChevronLeft
} from "lucide-react"

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/employer" },
  { name: "Employer profile", icon: User, href: "/employer/profile" },
  { name: "Post Job", icon: PlusSquare, href: "/employer/post-job" },
  { name: "Notification", icon: Bell, href: "/employer/notifications", badge: 6 },
  { name: "Message", icon: MessageSquare, href: "/employer/messages", badge: 24 },
  { name: "Account Setting", icon: Settings, href: "/employer/settings" },
  { name: "Manage hiring", icon: Users, href: "/employer/hiring" },
]

export default function EmployerSidebar({ isOpen, onClose, collapsed, onToggleCollapse }) {
  const pathname = usePathname()

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          ${collapsed ? "w-[72px]" : "w-64"} bg-white border-r border-gray-100
          flex flex-col transition-all duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className={`flex items-center justify-between px-4 py-5 ${collapsed ? "px-3" : "px-5"}`}>
          {!collapsed && (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#18191C] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-base">U</span>
              </div>
              <div>
                <h1 className="font-bold text-[#18191C] text-base leading-tight">Joblin</h1>
                <p className="text-xs text-gray-400">Dashboard</p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="w-9 h-9 rounded-xl bg-[#18191C] flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-base">U</span>
            </div>
          )}
          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex w-6 h-6 rounded-full border border-gray-200 items-center justify-center text-gray-400 hover:text-gray-700 hover:border-gray-400 transition-colors shrink-0"
          >
            <ChevronLeft size={12} className={`transition-transform ${collapsed ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-2 space-y-0.5">
          {!collapsed && (
            <p className="px-3 text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Main</p>
          )}
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = pathname === item.href || (item.href !== "/employer" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                title={collapsed ? item.name : undefined}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
                  ${active ? "bg-blue-50 text-[#0A65CC]" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
                  ${collapsed ? "justify-center" : ""}
                `}
              >
                <Icon size={18} className="shrink-0" />
                {!collapsed && (
                  <>
                    <span className="flex-1">{item.name}</span>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Bottom */}
        <div className={`px-3 py-4 border-t border-gray-100 space-y-0.5 ${collapsed ? "items-center flex flex-col" : ""}`}>
          <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors ${collapsed ? "justify-center" : ""}`}>
            <LogOut size={18} className="shrink-0" />
            {!collapsed && "Log out"}
          </a>
          <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors ${collapsed ? "justify-center" : ""}`}>
            <HelpCircle size={18} className="shrink-0" />
            {!collapsed && "Help"}
          </a>
        </div>
      </aside>
    </>
  )
}
