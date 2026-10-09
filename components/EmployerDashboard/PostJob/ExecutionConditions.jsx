"use client"

import { useState } from "react"
import { Users } from "lucide-react"
import { SectionCard, Chip, Field, SaveRow } from "./Shared"
import { usePostJob } from "./PostJobContext"

export default function ExecutionConditions() {
  const { data, update } = usePostJob()
  const [editing, setEditing] = useState(false)
  const [minAge, setMinAge] = useState(data.minAge)
  const [maxAge, setMaxAge] = useState(data.maxAge)
  const [ageChips, setAgeChips] = useState(data.ageChips)
  const [gender, setGender] = useState(data.gender)

  function toggleGender(g) {
    setGender(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g])
  }
  function addAge() {
    if (minAge && !ageChips.includes(minAge)) setAgeChips(prev => [...prev, minAge])
  }
  function removeAge(i) { setAgeChips(prev => prev.filter((_, idx) => idx !== i)) }
  function removeGender(i) { setGender(prev => prev.filter((_, idx) => idx !== i)) }

  function save() {
    update("minAge", minAge)
    update("maxAge", maxAge)
    update("ageChips", ageChips)
    update("gender", gender)
    setEditing(false)
  }

  return (
    <SectionCard icon={<Users size={16} />} title="Job Execution Conditions" onEdit={() => { setMinAge(data.minAge); setMaxAge(data.maxAge); setAgeChips(data.ageChips); setGender(data.gender); setEditing(true) }}>
      {!editing ? (
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {data.ageChips.map(a => <Chip key={a} label={a} />)}
          </div>
          <p className="text-xs font-semibold text-[#18191C] mb-2">Gender</p>
          <div className="flex flex-wrap gap-2">
            {data.gender.map(g => <Chip key={g} label={g} />)}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Minimum Age" value={minAge} onChange={setMinAge} placeholder="21 years old" required />
            <Field label="Maximum Age" value={maxAge} onChange={setMaxAge} placeholder="Input" />
          </div>
          <div className="flex flex-wrap gap-2">
            {ageChips.map((a, i) => <Chip key={i} label={a} onRemove={() => removeAge(i)} />)}
          </div>
          <button onClick={addAge} className="text-sm text-[#0A65CC] font-medium hover:underline">+ Add age range</button>
          <div>
            <p className="text-xs font-semibold text-[#18191C] mb-3">Gender</p>
            <div className="flex gap-6">
              {["Female", "Male", "Other"].map(g => (
                <label key={g} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={gender.includes(g)} onChange={() => toggleGender(g)} className="w-4 h-4 accent-[#0A65CC]" />
                  <span className="text-sm text-[#18191C]">{g}</span>
                </label>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {gender.map((g, i) => <Chip key={i} label={g} onRemove={() => removeGender(i)} />)}
            </div>
          </div>
          <SaveRow onSave={save} onCancel={() => setEditing(false)} />
        </div>
      )}
    </SectionCard>
  )
}
