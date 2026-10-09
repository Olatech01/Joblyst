"use client"

import { useState } from "react"
import { Calendar, RefreshCw, Clock } from "lucide-react"

const calDays = [
  { day: "Tue", date: 9 },
  { day: "Sun", date: 10 },
  { day: "Mon", date: 11, active: true },
  { day: "Tue", date: 12 },
]

const interviews = [
  { name: "Kathryn Murphy", time: "10:30 AM – 11:30 AM", role: "UI/UX Designer", color: "bg-green-400" },
  { name: "Kathryn Murphy", time: "10:30 AM – 11:30 AM", role: "UI/UX Designer", color: "bg-blue-400" },
  { name: "Kathryn Murphy", time: "10:30 AM – 11:30 AM", role: "UI/UX Designer", color: "bg-amber-400" },
]

function SubscriptionDonut() {
  const r = 30, cx = 38, cy = 38, circ = 2 * Math.PI * r
  const used = (1 / 5) * circ

  return (
    <svg width="76" height="76" viewBox="0 0 76 76">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F3F4F6" strokeWidth="8" />
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="#18191C"
        strokeWidth="8"
        strokeDasharray={`${used} ${circ - used}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text x={cx} y={cy - 3} textAnchor="middle" fontSize="11" fontWeight="700" fill="#18191C">1 post</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="9" fill="#767F8C">Left</text>
    </svg>
  )
}

export default function SchedulePanel() {
  const [activeDate, setActiveDate] = useState(11)

  return (
    <div className="flex flex-col gap-4">
      {/* Schedule card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-[#18191C]">Schedule</h3>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Calendar size={16} />
          </button>
        </div>

        {/* Mini date strip */}
        <div className="flex gap-2 mb-5">
          {calDays.map(d => (
            <button
              key={d.date}
              onClick={() => setActiveDate(d.date)}
              className={`flex-1 flex flex-col items-center py-2 rounded-xl text-xs transition-colors ${
                activeDate === d.date
                  ? "bg-[#18191C] text-white"
                  : "hover:bg-gray-50 text-[#767F8C]"
              }`}
            >
              <span className="text-[10px] mb-1 font-medium">{d.day}</span>
              <span className="text-base font-bold">{d.date}</span>
            </button>
          ))}
        </div>

        {/* Today's interviews */}
        <p className="text-xs font-semibold text-[#18191C] mb-3">Today's Interview</p>
        <div className="space-y-3">
          {interviews.map((iv, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-1.5 rounded-full shrink-0 mt-1 ${iv.color}`} style={{ height: 48 }} />
              <div>
                <p className="text-xs font-semibold text-[#18191C]">Interview with {iv.name}</p>
                <p className="text-[11px] text-[#767F8C]">{iv.time}</p>
                <p className="text-[11px] text-[#767F8C]">{iv.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <p className="text-[11px] text-[#767F8C] mb-1">Joined on 7 Jan 2025</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base font-bold text-[#18191C]">Free</p>
            <p className="text-xs text-[#767F8C]">Monthly</p>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-[#767F8C]">
              <RefreshCw size={11} />
              <span>Automatic renewal</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1 text-xs text-[#767F8C]">
              <Clock size={11} />
              <span>22 Days left</span>
            </div>
          </div>
          <SubscriptionDonut />
        </div>
        <button className="mt-4 w-full border border-gray-200 rounded-xl py-2 text-sm font-semibold text-[#18191C] hover:border-[#0A65CC] hover:text-[#0A65CC] transition-colors">
          Manage Subscription
        </button>
      </div>
    </div>
  )
}
