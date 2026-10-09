"use client"

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"

const AUTH_PATHS = ["/login", "/register", "/verify", "/forgot-password", "/employer"]

export default function NavbarWrapper() {
  const pathname = usePathname()
  if (AUTH_PATHS.some(p => pathname.startsWith(p))) return null
  return <Navbar />
}
