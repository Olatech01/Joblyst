"use client"

import { useRef } from "react"
import { Camera, Download, Eye } from "lucide-react"
import { useResume } from "./ResumeContext"

export default function ProfileHeader() {
  const { data, update } = useResume()
  const fileRef = useRef(null)

  function handlePhoto(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    update("photo", url)
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex flex-col sm:flex-row items-start gap-5">
        {/* Avatar */}
        <div className="relative shrink-0">
          {data.photo ? (
            <img src={data.photo} alt={data.name} className="size-20 rounded-xl object-cover" />
          ) : (
            <div className="size-20 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center bg-gray-50">
              <Camera size={24} className="text-gray-300" />
            </div>
          )}
          <button
            onClick={() => fileRef.current?.click()}
            className="absolute -bottom-1.5 -right-1.5 size-7 rounded-full bg-[#0A65CC] flex items-center justify-center shadow text-white hover:bg-[#085BBA] transition-colors"
          >
            <Camera size={13} />
          </button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-bold text-[#0A65CC]">{data.name}</h1>
          <p className="text-sm text-[#767F8C] mt-0.5">
            {data.jobTitle} &bull; {data.school}
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A65CC] text-white text-sm font-semibold hover:bg-[#085BBA] transition-colors">
              <Eye size={15} /> View resume
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#0A65CC] text-[#0A65CC] text-sm font-semibold hover:bg-blue-50 transition-colors">
              <Download size={15} /> Download PDF Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
