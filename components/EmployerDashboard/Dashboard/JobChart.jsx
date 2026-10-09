"use client"

import { useState } from "react"
import { Folder, Eye, Users } from "lucide-react"

const W = 560, H = 180, PAD = { t: 10, r: 10, b: 30, l: 35 }
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const weekData = {
  views:   [1200, 2100, 2800, 3200, 3800, 4400, 5000],
  applied: [900,  1600, 2200, 2600, 3000, 3800, 4500],
  opened:  [700,  1200, 1800, 2400, 3200, 4000, 4800],
}

function toSVG(vals, maxVal) {
  const w = W - PAD.l - PAD.r
  const h = H - PAD.t - PAD.b
  return vals.map((v, i) => {
    const x = PAD.l + (i / (vals.length - 1)) * w
    const y = PAD.t + h - (v / maxVal) * h
    return `${x},${y}`
  }).join(" ")
}

export default function JobChart() {
  const [period, setPeriod] = useState("Week")
  const data = weekData
  const maxVal = 6000

  const viewsPts  = toSVG(data.views, maxVal)
  const appliedPts = toSVG(data.applied, maxVal)
  const openedPts  = toSVG(data.opened, maxVal)

  const w = W - PAD.l - PAD.r
  const h = H - PAD.t - PAD.b

  function areaPath(pts) {
    const pairs = pts.split(" ").map(p => p.split(",").map(Number))
    const last = pairs[pairs.length - 1]
    const first = pairs[0]
    return `M ${pts} L ${last[0]},${PAD.t + h} L ${first[0]},${PAD.t + h} Z`
  }

  const gridLines = [1000, 2000, 3000, 4000, 5000]

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
      <div className="flex items-start justify-between mb-1 flex-wrap gap-2">
        <div>
          <h2 className="text-base font-bold text-[#18191C]">Job statiatios</h2>
          <p className="text-xs text-[#767F8C]">Showing Jobstatistio Jul 19-25</p>
        </div>
        <div className="flex rounded-xl border border-gray-200 overflow-hidden">
          {["Week", "Month", "Year"].map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-1.5 text-sm font-medium transition-colors ${period === p ? "bg-[#18191C] text-white" : "text-[#767F8C] hover:bg-gray-50"}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-start mt-4">
        {/* Chart */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 mb-3">
            <span className="flex items-center gap-1.5 text-xs text-[#767F8C]"><span className="w-3 h-0.5 bg-[#0A65CC] inline-block rounded" />Job views</span>
            <span className="flex items-center gap-1.5 text-xs text-[#767F8C]"><span className="w-3 h-0.5 bg-blue-300 inline-block rounded" />Job Applied</span>
            <span className="flex items-center gap-1.5 text-xs text-[#767F8C]"><span className="w-3 h-0.5 bg-amber-400 inline-block rounded" />Job Opened</span>
          </div>
          <svg viewBox={`0 0 ${W} ${H + 10}`} className="w-full" preserveAspectRatio="xMidYMid meet">
            {/* Grid lines */}
            {gridLines.map(v => {
              const y = PAD.t + h - (v / maxVal) * h
              return (
                <g key={v}>
                  <line x1={PAD.l} y1={y} x2={W - PAD.r} y2={y} stroke="#F3F4F6" strokeWidth="1" />
                  <text x={PAD.l - 4} y={y + 4} fontSize="9" fill="#A0ABB8" textAnchor="end">{v >= 1000 ? `${v/1000}k` : v}</text>
                </g>
              )
            })}

            {/* Area fills */}
            <path d={areaPath(viewsPts)} fill="#0A65CC" fillOpacity="0.06" />
            <path d={areaPath(appliedPts)} fill="#93C5FD" fillOpacity="0.08" />
            <path d={areaPath(openedPts)} fill="#FCD34D" fillOpacity="0.08" />

            {/* Lines */}
            <polyline points={viewsPts} fill="none" stroke="#0A65CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={appliedPts} fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={openedPts} fill="none" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* X-axis labels */}
            {days.map((d, i) => {
              const x = PAD.l + (i / (days.length - 1)) * w
              return <text key={d} x={x} y={H + 8} fontSize="9" fill="#A0ABB8" textAnchor="middle">{d}</text>
            })}
          </svg>
        </div>

        {/* Right stats */}
        <div className="shrink-0 space-y-4 min-w-[120px]">
          {[
            { icon: <Folder size={16} />, label: "Job opened", value: 34, delta: "+8.4", up: true },
            { icon: <Eye size={16} />, label: "Job views", value: 34, delta: "+8.4", up: true },
            { icon: <Users size={16} />, label: "Job applied", value: 34, delta: "-8.4", up: false },
          ].map(s => (
            <div key={s.label} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-2 text-[#767F8C] mb-1">
                {s.icon}
                <span className="text-xs">{s.label}</span>
              </div>
              <p className="text-xl font-bold text-[#18191C]">{s.value}</p>
              <p className="text-xs font-medium mt-0.5">
                <span className="text-[#767F8C]">This week </span>
                <span className={s.up ? "text-green-500" : "text-red-500"}>{s.delta}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
