import { ExternalLink } from "lucide-react"

const stats = [
  {
    value: "76",
    label: "candidates to review",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="14" cy="14" r="6" stroke="#18191C" strokeWidth="2"/>
        <circle cx="26" cy="14" r="6" stroke="#18191C" strokeWidth="2"/>
        <path d="M4 34c0-6 4-10 10-10h12c6 0 10 4 10 10" stroke="#18191C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: "34",
    label: "Message received",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="8" width="32" height="22" rx="4" stroke="#18191C" strokeWidth="2"/>
        <path d="M4 14l16 9 16-9" stroke="#18191C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 30l-8 6V30" stroke="#18191C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    value: "12",
    label: "Interview",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="14" cy="14" r="6" stroke="#18191C" strokeWidth="2"/>
        <path d="M4 34c0-6 4-10 10-10h4" stroke="#18191C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="28" cy="28" r="8" stroke="#18191C" strokeWidth="2"/>
        <path d="M28 24v4l3 2" stroke="#18191C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4">
          <div className="shrink-0">{s.icon}</div>
          <div className="flex-1 min-w-0">
            <p className="text-2xl font-bold text-[#18191C]">{s.value}</p>
            <p className="text-sm text-[#767F8C]">{s.label}</p>
          </div>
          <button className="shrink-0 text-gray-300 hover:text-gray-500 transition-colors">
            <ExternalLink size={16} />
          </button>
        </div>
      ))}
    </div>
  )
}
