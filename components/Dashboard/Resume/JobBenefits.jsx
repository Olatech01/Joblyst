"use client"

import { useState } from "react"
import { Award } from "lucide-react"
import { SectionCard, EmptyState, SaveRow, Chip } from "./Shared"
import { useResume } from "./ResumeContext"

const ALL_BENEFITS = [
  "Promotion Opportunity", "Transportation Service",
  "Flexible Working Hour", "Insurance",
  "Health Coverage", "Remote Option", "Stock Options",
]

export default function JobBenefits() {
  const { data, update } = useResume()
  const [editing, setEditing] = useState(false)
  const [selected, setSelected] = useState(data.jobBenefits)

  function toggle(b) {
    setSelected(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b])
  }

  function save() { update("jobBenefits", selected); setEditing(false) }
  function cancel() { setSelected(data.jobBenefits); setEditing(false) }

  return (
    <SectionCard icon={Award} title="Preferred Job Benefits" onEdit={() => { setSelected(data.jobBenefits); setEditing(true) }}>
      {editing ? (
        <>
          <div className="space-y-2.5">
            {ALL_BENEFITS.map(b => (
              <label key={b} className="flex items-center gap-2 text-sm text-[#18191C] cursor-pointer">
                <input type="checkbox" checked={selected.includes(b)} onChange={() => toggle(b)} className="accent-[#0A65CC]" />
                {b}
              </label>
            ))}
          </div>
          {selected.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selected.map(b => <Chip key={b} label={b} />)}
            </div>
          )}
          <SaveRow onSave={save} onCancel={cancel} />
        </>
      ) : data.jobBenefits.length ? (
        <div className="flex flex-wrap gap-2">
          {data.jobBenefits.map(b => <Chip key={b} label={b} />)}
        </div>
      ) : (
        <EmptyState label="Job benefits" onAdd={() => setEditing(true)} />
      )}
    </SectionCard>
  )
}
