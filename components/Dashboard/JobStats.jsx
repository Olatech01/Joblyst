"use client"

import { useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// Normalized 0-100 values for the SVG chart (viewBox height 100)
const viewsData = [18, 40, 48, 38, 55, 82, 95]
const appliedData = [10, 25, 35, 28, 42, 60, 75]

function polyline(data, h = 100) {
  const w = 600
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - (v / 100) * h
    return `${x},${y}`
  })
  return pts.join(" ")
}

function area(data, h = 100) {
  const w = 600
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - (v / 100) * h
    return `${x},${y}`
  })
  return `M0,${h} L${pts.join(" L")} L${w},${h} Z`
}

const tabs = ["Week", "Month", "Year"]

export default function JobStats() {
  const [activeTab, setActiveTab] = useState("Week")

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-[#18191C]">Job statistics</h2>
          <p className="text-xs text-[#767F8C] mt-0.5">Showing Jobstatistio Jul 19-25</p>
        </div>
        <div className="flex rounded-lg border border-gray-200 overflow-hidden text-sm shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-xs font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-[#0A65CC] text-white"
                  : "text-[#767F8C] hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row gap-6">
        {/* Chart */}
        <div className="flex-1 min-w-0">
          {/* Legend */}
          <div className="flex items-center gap-5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-[#0A65CC]" />
              <span className="text-xs text-[#767F8C]">Job views</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-blue-200" />
              <span className="text-xs text-[#767F8C]">Job Applied</span>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-[#767F8C] pr-2 pointer-events-none">
              {["5k", "4k", "3k", "2k", "1k"].map((l) => <span key={l}>{l}</span>)}
            </div>
            <svg
              viewBox="0 0 600 100"
              className="w-full h-36 ml-6"
              preserveAspectRatio="none"
            >
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((y) => (
                <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#F3F4F6" strokeWidth="1" />
              ))}
              {/* Applied area */}
              <path d={area(appliedData)} fill="#DBEAFE" opacity="0.5" />
              {/* Views area */}
              <path d={area(viewsData)} fill="#93C5FD" opacity="0.3" />
              {/* Applied line */}
              <polyline points={polyline(appliedData)} fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinejoin="round" />
              {/* Views line */}
              <polyline points={polyline(viewsData)} fill="none" stroke="#0A65CC" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
            {/* X-axis labels */}
            <div className="flex justify-between ml-6 mt-1 text-[10px] text-[#767F8C]">
              {days.map((d) => <span key={d}>{d}</span>)}
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="flex lg:flex-col gap-4 lg:w-44 shrink-0">
          <StatCard label="Job views" value="2,342" delta="6.4%" up />
          <StatCard label="Job views" value="654" delta="6.4%" up={false} />
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, delta, up }) {
  return (
    <div className="flex-1 lg:flex-none rounded-xl border border-gray-100 p-4">
      <p className="text-xs text-[#767F8C]">{label}</p>
      <p className="text-2xl font-bold text-[#18191C] mt-1">{value}</p>
      <div className={`flex items-center gap-1 mt-1 text-xs font-semibold ${up ? "text-green-500" : "text-red-500"}`}>
        {up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
        {delta}
        <span className="text-[#767F8C] font-normal ml-1">This week</span>
      </div>
    </div>
  )
}
