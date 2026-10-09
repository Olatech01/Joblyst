"use client"

import { useRef, useState } from "react"
import { Upload, Trash2, Copy, RefreshCw } from "lucide-react"
import { useResume, computeQuality } from "./ResumeContext"

// SVG donut quality ring
function QualityRing({ pct }) {
  const r = 52, cx = 60, cy = 60
  const circ = 2 * Math.PI * r
  const filled = (pct / 100) * circ

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#F3F4F6" strokeWidth="12" />
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="#0A65CC"
        strokeWidth="12"
        strokeDasharray={`${filled} ${circ - filled}`}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      <text x="60" y="65" textAnchor="middle" className="text-lg font-bold fill-[#18191C]" style={{ fontSize: 20, fontWeight: 700, fill: "#18191C" }}>
        {pct}%
      </text>
    </svg>
  )
}

// Fake QR code SVG
function QRCode() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
      {/* Corners */}
      {[[2,2],[54,2],[2,54]].map(([x,y],i) => (
        <g key={i}>
          <rect x={x} y={y} width={24} height={24} fill="none" stroke="#18191C" strokeWidth="3"/>
          <rect x={x+6} y={y+6} width={12} height={12} fill="#18191C"/>
        </g>
      ))}
      {/* Bottom-right corner */}
      <rect x="54" y="54" width="24" height="24" fill="none" stroke="#18191C" strokeWidth="3"/>
      <rect x="60" y="60" width="12" height="12" fill="#18191C"/>
      {/* Inner dots pattern */}
      {[30,34,38,42,46,30,42,30,34,46,38,46].map((x,i) => (
        <rect key={i} x={x} y={10+(i%6)*6} width={3} height={3} fill="#18191C"/>
      ))}
    </svg>
  )
}

export default function QualityPanel() {
  const { data, update } = useResume()
  const quality = computeQuality(data)
  const fileRef = useRef(null)
  const [uploading, setUploading] = useState(false)
  const [copied, setCopied] = useState(false)

  const suggestions = [
    { label: "Complete your job title", done: !!data.jobTitle },
    { label: "Complete personal information", done: !!data.personal.gender },
    { label: "Add your work experience", done: data.workExperience.length > 0 },
  ]

  function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setTimeout(() => {
      update("uploadedResume", { name: file.name, size: `${Math.round(file.size / 1024)} KB` })
      setUploading(false)
    }, 1000)
  }

  function copyLink() {
    navigator.clipboard.writeText("Joblin.com/u/LF-8752322").catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Quality score */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <h3 className="text-sm font-bold text-[#18191C] mb-4">Your Resume Quality</h3>
        <div className="flex justify-center">
          <QualityRing pct={quality} />
        </div>
        <p className="text-xs text-[#767F8C] text-center mt-3">
          Your resume is only {quality}% complete! Let's improve it
        </p>
        <div className="mt-3 space-y-2">
          {suggestions.filter(s => !s.done).map(s => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="rounded px-1.5 py-0.5 text-[10px] font-bold bg-blue-50 text-[#0A65CC]">+5%</span>
              <span className="text-xs text-[#767F8C]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Resume upload */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        {data.uploadedResume ? (
          <>
            <div className="text-center mb-3">
              <h3 className="text-sm font-bold text-[#0A65CC]">Uploaded resume</h3>
              <p className="text-xs text-[#767F8C] mt-0.5">Your file was successfully uploaded</p>
            </div>
            <div className="relative rounded-xl border border-dashed border-blue-200 bg-blue-50/40 p-4 flex flex-col items-center gap-2">
              <button
                onClick={() => update("uploadedResume", null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-400 transition-colors"
              >
                <Trash2 size={14} />
              </button>
              <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Upload size={18} className="text-[#0A65CC]" />
              </div>
              <p className="text-xs font-semibold text-[#18191C]">{data.uploadedResume.name}</p>
              <p className="text-[11px] text-[#767F8C]">{data.uploadedResume.size}</p>
            </div>
            <button
              onClick={() => fileRef.current?.click()}
              className="mt-3 w-full rounded-lg border border-[#0A65CC] py-2 text-sm font-semibold text-[#0A65CC] hover:bg-blue-50 transition-colors"
            >
              Replace File
            </button>
          </>
        ) : (
          <>
            <div className="text-center mb-3">
              <h3 className="text-sm font-bold text-[#18191C]">Upload your resume</h3>
              <p className="text-xs text-[#767F8C] mt-0.5">You can attach a separate resume file here.</p>
            </div>
            <button
              onClick={() => fileRef.current?.click()}
              className="w-full rounded-xl border-2 border-dashed border-gray-200 py-8 flex flex-col items-center gap-2 hover:border-[#0A65CC] transition-colors group"
            >
              <Upload size={24} className="text-gray-300 group-hover:text-[#0A65CC] transition-colors" />
              <p className="text-xs text-[#767F8C]">Drag & Drop or Choose file</p>
              <p className="text-[11px] text-[#A0ABB8]">To upload PDF MAX 10 MB.</p>
            </button>
            <button
              onClick={() => fileRef.current?.click()}
              className="mt-3 w-full rounded-lg bg-[#0A65CC] py-2 text-sm font-semibold text-white hover:bg-[#085BBA] transition-colors"
            >
              {uploading ? <RefreshCw size={16} className="animate-spin mx-auto" /> : "Upload resume"}
            </button>
          </>
        )}
        <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
      </div>

      {/* Resume link */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <h3 className="text-sm font-bold text-[#18191C] text-center">Your Resume Link</h3>
        <p className="text-xs text-[#767F8C] text-center mt-0.5">Share your resume using this unique link.</p>
        <div className="mt-4 flex justify-center">
          <QRCode />
        </div>
        <p className="text-sm font-semibold text-[#0A65CC] text-center mt-3">Joblin.com/u/LF-8752322</p>
        <button
          onClick={copyLink}
          className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-sm font-semibold text-[#18191C] hover:border-[#0A65CC] hover:text-[#0A65CC] transition-colors"
        >
          <Copy size={14} />
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>

      {/* Save */}
      <button className="w-full rounded-xl bg-[#0A65CC] py-3 text-sm font-bold text-white hover:bg-[#085BBA] transition-colors shadow-md">
        Save
      </button>
    </div>
  )
}
