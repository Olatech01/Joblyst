import Link from "next/link"
import { ChevronRight } from "lucide-react"

const messages = [
  {
    id: 1,
    company: "Pepsi",
    logo: "P",
    logoColor: "bg-blue-100 text-blue-700",
    preview: "Join our team and make an impact! We're lo...",
    time: "15 minutes ago",
    unread: 5,
    active: false,
  },
  {
    id: 2,
    company: "Golddex",
    logo: "G",
    logoColor: "bg-yellow-100 text-yellow-700",
    preview: "Exciting career opportunities await! We're hi...",
    time: "15 minutes ago",
    unread: 5,
    active: false,
  },
  {
    id: 3,
    company: "McDonald",
    logo: "M",
    logoColor: "bg-red-100 text-red-600",
    preview: "We're looking for dynamic individuals to join our...",
    time: "15 minutes ago",
    unread: null,
    active: false,
  },
  {
    id: 4,
    company: "NASA",
    logo: "N",
    logoColor: "bg-blue-600 text-white",
    preview: "Are you ready to take your career to the next lev...",
    time: "15 minutes ago",
    unread: null,
    active: true,
  },
  {
    id: 5,
    company: "Panda",
    logo: "🐼",
    logoColor: "bg-gray-100",
    preview: "We're expanding and looking for driven, pas...",
    time: "15 minutes ago",
    unread: 5,
    active: false,
  },
  {
    id: 6,
    company: "BMW",
    logo: "B",
    logoColor: "bg-gray-100 text-gray-700",
    preview: "Are you a self-starter with a passion for success...",
    time: "15 minutes ago",
    unread: null,
    active: false,
  },
]

// Donut chart via SVG stroke-dasharray
// Total: 15 jobs — Under Review: 8, Accepted: 4, Rejected: 3
const TOTAL = 15
const CIRCUMFERENCE = 2 * Math.PI * 40 // r=40
function dashArray(count) {
  const filled = (count / TOTAL) * CIRCUMFERENCE
  return `${filled} ${CIRCUMFERENCE - filled}`
}
// Offsets to position each segment (cumulative)
const segments = [
  { count: 8, color: "#0A65CC", label: "Under Review", offset: 0 },
  { count: 4, color: "#93C5FD", label: "Accepted", offset: (8 / TOTAL) * CIRCUMFERENCE },
  { count: 3, color: "#DBEAFE", label: "Rejected", offset: ((8 + 4) / TOTAL) * CIRCUMFERENCE },
]

export default function StatusPanel() {
  return (
    <div className="space-y-5">
      {/* Donut chart card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <div className="flex items-center justify-between gap-4">
          {/* SVG donut */}
          <div className="relative shrink-0">
            <svg width="100" height="100" viewBox="0 0 100 100">
              {/* Background ring */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="#F3F4F6" strokeWidth="12" />
              {segments.map((seg) => (
                <circle
                  key={seg.label}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="12"
                  strokeDasharray={dashArray(seg.count)}
                  strokeDashoffset={-seg.offset}
                  strokeLinecap="butt"
                  transform="rotate(-90 50 50)"
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-[#18191C]">15</p>
              <p className="text-[10px] text-[#767F8C]">Total job</p>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-2.5">
            {segments.map((seg) => (
              <div key={seg.label} className="flex items-center gap-2">
                <span className="size-3 rounded-full shrink-0" style={{ background: seg.color }} />
                <span className="text-xs text-[#767F8C]">{seg.label}</span>
                <span className="text-xs font-bold text-[#18191C] ml-auto pl-3">{seg.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-50">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#18191C]">Status of apply</h3>
            <span className="text-xs text-[#767F8C]">January 2025</span>
          </div>
          <p className="mt-1.5 text-xs text-[#767F8C] leading-5">
            Minim dolor in amet nulla laboris enim dolore consequatt.
          </p>
        </div>
      </div>

      {/* Messages card */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-[#18191C]">Massages</h3>
          <Link href="#" className="flex items-center gap-0.5 text-xs font-semibold text-[#0A65CC] hover:underline">
            More <ChevronRight size={13} />
          </Link>
        </div>

        <div className="space-y-1">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-colors ${
                msg.active ? "bg-[#0A65CC]" : "hover:bg-gray-50"
              }`}
            >
              <div className={`size-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${msg.logoColor}`}>
                {msg.logo}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <p className={`text-xs font-semibold truncate ${msg.active ? "text-white" : "text-[#18191C]"}`}>
                    {msg.company}
                  </p>
                  <span className={`text-[10px] shrink-0 ${msg.active ? "text-blue-200" : "text-[#767F8C]"}`}>
                    {msg.time}
                  </span>
                </div>
                <p className={`text-[11px] truncate mt-0.5 ${msg.active ? "text-blue-200" : "text-[#767F8C]"}`}>
                  {msg.preview}
                </p>
              </div>
              {msg.unread && (
                <span className="size-5 rounded-full bg-[#0A65CC] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  {msg.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
