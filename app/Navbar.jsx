"use client"

import { ArrowUpRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRole } from "./RoleContext"

const navItems = {
  talent: [
    { name: "Find jobs", href: "#open-roles" },
    { name: "Companies", href: "#companies" },
    { name: "Career advice", href: "#career-advice" },
  ],
  employer: [
    { name: "Find talent", href: "#talent-pool" },
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

  return (
    <header className="px-5 pt-5 sm:px-8">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-4 rounded-2xl border border-[#e0e3da] bg-white px-5 py-4 shadow-[0_8px_30px_rgba(31,48,40,0.04)] sm:px-7">
        <Link href="/" aria-label="Joblyst home" className="shrink-0">
          <Image src="/logo.svg" width={138} height={36} alt="Joblyst" priority />
        </Link>

        <div className="order-3 flex w-full items-center gap-6 overflow-x-auto lg:order-2 lg:w-auto">
          {navItems[role].map((item) => (
            <a
              className="whitespace-nowrap text-sm font-medium text-[#68716a] transition-colors hover:text-[#183c33]"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="order-2 flex items-center gap-3 lg:order-3">
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
            href={role === "talent" ? "#open-roles" : "#solutions"}
          >
            {role === "talent" ? "Sign in" : "Post a job"}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <Link
            aria-label="Search"
            className="grid size-10 place-items-center rounded-full border border-[#e0e3da] text-[#183c33] hover:bg-[#f7f8f4]"
            href={role === "talent" ? "#open-roles" : "#talent-pool"}
          >
            <Search size={18} aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  )
}