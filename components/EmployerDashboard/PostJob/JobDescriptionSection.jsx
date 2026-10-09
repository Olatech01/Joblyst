"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import { SectionCard, Chip, Field, SaveRow } from "./Shared"
import { usePostJob } from "./PostJobContext"

export default function JobDescriptionSection() {
  const { data, update } = usePostJob()
  const [editing, setEditing] = useState(false)
  const [hours, setHours] = useState(data.workingHours)
  const [trips, setTrips] = useState(data.businessTrips)
  const [desc, setDesc] = useState(data.jobDescription)
  const [hoursChips, setHoursChips] = useState([data.workingHours])
  const [tripsChips, setTripsChips] = useState([data.businessTrips])

  function addHoursChip() {
    if (hours && !hoursChips.includes(hours)) setHoursChips(prev => [...prev, hours])
  }
  function addTripsChip() {
    if (trips && !tripsChips.includes(trips)) setTripsChips(prev => [...prev, trips])
  }

  function save() {
    update("workingHours", hours)
    update("businessTrips", trips)
    update("jobDescription", desc)
    setEditing(false)
  }

  return (
    <SectionCard icon={<FileText size={16} />} title="Job Description" onEdit={() => { setHours(data.workingHours); setTrips(data.businessTrips); setDesc(data.jobDescription); setEditing(true) }}>
      {!editing ? (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Chip label={data.workingHours} />
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip label={data.businessTrips} />
          </div>
          <p className="text-xs text-[#767F8C] leading-relaxed mt-3">{data.jobDescription}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <Field label="Working Hours & Days" value={hours} onChange={setHours} placeholder="Saturday to Wendsday 12 AM to 18 PM" required />
            <div className="flex flex-wrap gap-2 mt-2">
              {hoursChips.map((c, i) => (
                <Chip key={i} label={c} onRemove={() => setHoursChips(prev => prev.filter((_, idx) => idx !== i))} />
              ))}
            </div>
          </div>
          <div>
            <Field label="Required Business Trips" value={trips} onChange={setTrips} placeholder="One day a Month" required />
            <div className="flex flex-wrap gap-2 mt-2">
              {tripsChips.map((c, i) => (
                <Chip key={i} label={c} onRemove={() => setTripsChips(prev => prev.filter((_, idx) => idx !== i))} />
              ))}
            </div>
          </div>
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-[11px] text-[#374151] font-medium z-10">
              Job Description & Required Skills<span className="text-red-500 ml-0.5">*</span>
            </label>
            <textarea
              value={desc}
              onChange={e => setDesc(e.target.value)}
              maxLength={2048}
              rows={5}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-[#18191C] placeholder-gray-400 focus:outline-none focus:border-[#0A65CC] resize-none"
            />
            <p className="text-[11px] text-[#A0ABB8] text-right mt-1">{desc.length}/2048</p>
          </div>
          <SaveRow onSave={save} onCancel={() => setEditing(false)} />
        </div>
      )}
    </SectionCard>
  )
}
