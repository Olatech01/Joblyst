"use client"

import { useState } from "react"
import { Gift } from "lucide-react"
import { SectionCard, Chip, SaveRow } from "./Shared"
import { usePostJob } from "./PostJobContext"

const OPTIONS = ["Promotion Opportunity", "Transportation Service", "Flexible Working Hour", "Insurance", "Health Coverage", "Remote Option", "Stock Options"]

export default function PreferredBenefits() {
  const { data, update } = usePostJob()
  const [editing, setEditing] = useState(false)
  const [selected, setSelected] = useState(data.benefits)

  function toggle(opt) {
    setSelected(prev => prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt])
  }
  function remove(i) { setSelected(prev => prev.filter((_, idx) => idx !== i)) }

  function save() {
    update("benefits", selected)
    setEditing(false)
  }

  return (
    <SectionCard icon={<Gift size={16} />} title="Preferred Job Benefits" onEdit={() => { setSelected(data.benefits); setEditing(true) }}>
      {!editing ? (
        <div className="flex flex-wrap gap-2">
          {data.benefits.map(b => <Chip key={b} label={b} />)}
        </div>
      ) : (
        <div>
          <div className="space-y-2.5 mb-4">
            {OPTIONS.map(opt => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(opt)} className="w-4 h-4 accent-[#0A65CC]" />
                <span className="text-sm text-[#18191C]">{opt}</span>
              </label>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {selected.map((b, i) => <Chip key={b} label={b} onRemove={() => remove(i)} />)}
          </div>
          <SaveRow onSave={save} onCancel={() => setEditing(false)} />
        </div>
      )}
    </SectionCard>
  )
}
