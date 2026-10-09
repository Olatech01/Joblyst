"use client"

import { useState } from "react"
import { Briefcase } from "lucide-react"
import { SectionCard, Chip, SaveRow } from "./Shared"
import { usePostJob } from "./PostJobContext"

const OPTIONS = ["Full-time", "Part-time", "Remote", "Internship"]

export default function EmploymentTypeSection() {
  const { data, update } = usePostJob()
  const [editing, setEditing] = useState(false)
  const [selected, setSelected] = useState(data.employmentTypes)

  function toggle(opt) {
    setSelected(prev => prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt])
  }
  function remove(i) { setSelected(prev => prev.filter((_, idx) => idx !== i)) }

  function save() {
    update("employmentTypes", selected)
    setEditing(false)
  }

  return (
    <SectionCard icon={<Briefcase size={16} />} title="Employment Type" onEdit={() => { setSelected(data.employmentTypes); setEditing(true) }}>
      {!editing ? (
        <div className="flex flex-wrap gap-2">
          {data.employmentTypes.map(t => <Chip key={t} label={t} />)}
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap gap-4 mb-4">
            {OPTIONS.map(opt => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(opt)} className="w-4 h-4 accent-[#0A65CC]" />
                <span className="text-sm text-[#18191C]">{opt}</span>
              </label>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {selected.map((t, i) => <Chip key={t} label={t} onRemove={() => remove(i)} />)}
          </div>
          <SaveRow onSave={save} onCancel={() => setEditing(false)} />
        </div>
      )}
    </SectionCard>
  )
}
