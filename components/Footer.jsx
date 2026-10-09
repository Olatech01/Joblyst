import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

const services = ["Find job", "Create resume", "Search company", "Pricing Plan"]
const links = ["Blog", "Help center", "Contact us", "Privacy Policy", "About us"]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E4E5E8]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Joblin home">
              <Image src="/logo.svg" width={120} height={32} alt="Joblin" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#767F8C]">
              Joblin is a smart job search and recruitment platform that connects job seekers with employers. With fast
              search, top format, highlighting skills, and intelligent matching, Joblin makes hiring and job hunting easy
              and efficient.
            </p>
            <div className="mt-5 flex gap-3">
              {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-9 place-items-center rounded-full border border-[#E4E5E8] text-[#767F8C] transition-colors hover:border-[#0A65CC] hover:text-[#0A65CC]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Our services */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-[#18191C]">Our services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link href="#" className="text-sm text-[#767F8C] hover:text-[#0A65CC]">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-[#18191C]">Links</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-sm text-[#767F8C] hover:text-[#0A65CC]">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-[#18191C]">Contact Us</h4>
            <div className="space-y-3 text-sm text-[#767F8C]">
              <p>📍 1000 Manila St, Dallas, TX 75231</p>
              <p>📞 (706)479-058-5080</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E4E5E8] px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-[#767F8C]">Joblin Copyright © 2024</p>
          <div className="flex items-center gap-2 text-xs text-[#767F8C]">
            <span>VISA</span>
            <span>MasterCard</span>
            <span>PayPal</span>
            <span>Stripe</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
