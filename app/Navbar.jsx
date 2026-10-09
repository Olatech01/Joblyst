"use client"

import { Bell, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRole } from "./RoleContext"

const navItems = {
  talent: [
    { name: "Home", href: "/" },
    { name: "Find Job", href: "#open-roles" },
    { name: "Company", href: "#companies" },
    { name: "Create CV", href: "#career-advice" },
  ],
  employer: [
    { name: "Find Talent", href: "#talent-pool" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
  ],
}

export default function Navbar() {
  const pathname = usePathname()
  const { role, setRole } = useRole()
  const hiddenPrefixes = ["/dashboard", "/auth", "/login", "/signup", "/register", "/signin"]
  const shouldHide = hiddenPrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  )

  if (shouldHide) return null

  const isTalent = role === "talent"

  return (
    <header className={`sticky top-0 z-50 border-b ${isTalent ? "border-[#E4E5E8] bg-white" : "border-[#e0e3da] bg-white"} px-5 sm:px-8`}>
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <Link href="/" aria-label="Joblin home" className="shrink-0">
          <Image src="/logo.svg" width={120} height={32} alt="Joblin" priority />
        </Link>

        <div className="order-3 flex w-full items-center gap-6 overflow-x-auto lg:order-2 lg:w-auto">
          {navItems[role].map((item) => (
            <a
              className={`whitespace-nowrap text-sm font-medium transition-colors ${
                item.href === "/" && pathname === "/"
                  ? isTalent ? "text-[#0A65CC]" : "text-[#183c33]"
                  : "text-[#5E6670] hover:text-[#0A65CC]"
              }`}
              href={item.href}
              key={item.name}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="order-2 flex items-center gap-3 lg:order-3">
          {isTalent ? (
            <>
              <button
                aria-label="Search"
                className="grid size-9 place-items-center rounded-full border border-[#E4E5E8] text-[#5E6670] hover:border-[#0A65CC] hover:text-[#0A65CC]"
              >
                <Search size={17} />
              </button>
              <button
                aria-label="Notifications"
                className="relative grid size-9 place-items-center rounded-full border border-[#E4E5E8] text-[#5E6670] hover:border-[#0A65CC] hover:text-[#0A65CC]"
              >
                <Bell size={17} />
                <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-red-500" />
              </button>
              <button
                onClick={() => setRole("employer")}
                className="rounded-md border border-[#0A65CC] px-4 py-2 text-xs font-semibold text-[#0A65CC] transition-colors hover:bg-[#0A65CC] hover:text-white"
              >
                Employer
              </button>
              <div className="size-9 rounded-full bg-[#D6E4F7] overflow-hidden flex items-center justify-center text-xs font-semibold text-[#0A65CC]">
                KM
              </div>
            </>
          ) : (
            <>
              <div aria-label="Choose your account type" className="flex rounded-full bg-[#f1f3ed] p-1" role="group">
                {[
                  { id: "talent", label: "Talent" },
                  { id: "employer", label: "Employer" },
                ].map((option) => (
                  <button
                    aria-pressed={role === option.id}
                    className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-4 ${
                      role === option.id
                        ? "bg-[#183c33] text-white shadow-sm"
                        : "text-[#68716a] hover:text-[#183c33]"
                    }`}
                    key={option.id}
                    onClick={() => setRole(option.id)}
                    type="button"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <Link
                className="hidden items-center gap-2 rounded-full bg-[#e6f16a] px-4 py-2.5 text-sm font-semibold text-[#183c33] transition-transform hover:-translate-y-0.5 sm:flex"
                href="#solutions"
              >
                Post a job
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
