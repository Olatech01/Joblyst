"use client"

import { useState } from "react"
import EmployerSidebar from "./Sidebar"
import EmployerHeader from "./Header"

export default function EmployerLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-[#F5F6FA] overflow-hidden">
      <EmployerSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(v => !v)}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <EmployerHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
