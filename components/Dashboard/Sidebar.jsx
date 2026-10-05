"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard,
    FileText,
    Bell,
    MessageSquare,
    Settings,
    Activity,
    LogOut,
    HelpCircle,
    X
} from 'lucide-react'

const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'My Resume', icon: FileText, href: '/dashboard/resume' },
    { name: 'Notification', icon: Bell, href: '/dashboard/notifications', badge: 6 },
    { name: 'Message', icon: MessageSquare, href: '/dashboard/messages', badge: 6 },
    { name: 'Account Setting', icon: Settings, href: '/dashboard/settings' },
    { name: 'Activity', icon: Activity, href: '/dashboard/activity' },
]

const Sidebar = ({ isOpen, onClose }) => {
    const pathname = usePathname()

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-white border-r border-gray-100
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                {/* Logo */}
                <div className="flex items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">U</span>
                        </div>
                        <div>
                            <h1 className="font-bold text-gray-900 text-lg leading-tight">Joblin</h1>
                            <p className="text-xs text-gray-400">Dashboard</p>
                        </div>
                    </div>

                    {/* Close button (mobile only) */}
                    <button
                        onClick={onClose}
                        className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 py-4 space-y-1">
                    <p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                        Main
                    </p>

                    {menuItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                aria-current={pathname === item.href ? 'page' : undefined}
                                onClick={onClose}
                                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                  transition-colors
                  ${pathname === item.href || pathname.startsWith(`${item.href}/`)
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }
                `}
                            >
                                <Icon size={18} />
                                <span className="flex-1">{item.name}</span>
                                {item.badge && (
                                    <span className="bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                                        {item.badge}
                                    </span>
                                )}
                            </Link>
                        )
                    })}
                </nav>

                {/* Bottom actions */}
                <div className="px-3 py-4 border-t border-gray-100 space-y-1">
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
                    >
                        <LogOut size={18} />
                        Log out
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        <HelpCircle size={18} />
                        Help
                    </a>
                </div>
            </aside>
        </>
    )
}

export default Sidebar