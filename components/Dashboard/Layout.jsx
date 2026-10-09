"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* Main content area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Header onMenuClick={() => setSidebarOpen(true)} />

                {/* Page content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#F5F6FA]">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout