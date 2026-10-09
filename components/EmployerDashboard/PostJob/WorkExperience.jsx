"use client"

import { useState } from "react"
import { Building2 } from "lucide-react"
import { SectionCard, Chip, SaveRow } from "./Shared"
import { usePostJob } from "./PostJobContext"

const EXP_OPTIONS = ["No experience", "Less than 1 year", "1-3 year", "+3 year"]

export default function WorkExperience() {
  const { data, update } = usePostJob()
  const [editing, setEditing] = useState(false)
  const [selected, setSelected] = useState(data.workExperience)
  const [note, setNote] = useState(data.experienceNote)
  const [acceptInterns, setAcceptInterns] = useState(data.acceptInterns)

  function toggle(opt) {
    setSelected(prev => prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt])
  }
  function remove(i) { setSelected(prev => prev.filter((_, idx) => idx !== i)) }

  function save() {
    update("workExperience", selected)
    update("experienceNote", note)
    update("acceptInterns", acceptInterns)
    setEditing(false)
  }

  const noteLabel = "Experience in sales, shopping centers, or stores is preferred"

  return (
    <SectionCard icon={<Building2 size={16} />} title="Work experience" onEdit={() => { setSelected(data.workExperience); setNote(data.experienceNote); setAcceptInterns(data.acceptInterns); setEditing(true) }}>
      {!editing ? (
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {data.workExperience.map(e => <Chip key={e} label={e} />)}
          </div>
          {data.experienceNote && (
            <div className="flex flex-wrap gap-2 mt-2">
              <Chip label={noteLabel} />
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="flex flex-wrap gap-4 mb-4">
            {EXP_OPTIONS.map(opt => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(opt)} className="w-4 h-4 accent-[#0A65CC]" />
                <span className="text-sm text-[#18191C]">{opt}</span>
              </label>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {selected.map((e, i) => <Chip key={i} label={e} onRemove={() => remove(i)} />)}
          </div>
          <div className="space-y-2.5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={note} onChange={e => setNote(e.target.checked)} className="w-4 h-4 accent-[#0A65CC]" />
              <span className="text-sm text-[#18191C]">{noteLabel}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={acceptInterns} onChange={e => setAcceptInterns(e.target.checked)} className="w-4 h-4 accent-[#0A65CC]" />
              <span className="text-sm text-[#18191C]">Accepting interns and beginners</span>
            </label>
          </div>
          {note && (
            <div className="flex flex-wrap gap-2 mt-3">
              <Chip label={noteLabel} />
            </div>
          )}
          <SaveRow onSave={save} onCancel={() => setEditing(false)} />
        </div>
      )}
    </SectionCard>
  )
}
