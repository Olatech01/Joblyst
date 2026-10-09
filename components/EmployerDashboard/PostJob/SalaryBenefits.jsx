"use client"

import { useState } from "react"
import { DollarSign, HelpCircle } from "lucide-react"
import { SectionCard, Chip, Field, SaveRow } from "./Shared"
import { usePostJob } from "./PostJobContext"

export default function SalaryBenefits() {
  const { data, update } = usePostJob()
  const [editing, setEditing] = useState(false)
  const [salary, setSalary] = useState(data.minSalary)
  const [display, setDisplay] = useState(data.displaySalary)

  function save() {
    update("minSalary", salary)
    update("displaySalary", display)
    setEditing(false)
  }

  const chips = [data.minSalary, data.displaySalary ? "Displaying salary in the job post" : ""].filter(Boolean)

  return (
    <SectionCard icon={<DollarSign size={16} />} title="Salary & benefits" onEdit={() => { setSalary(data.minSalary); setDisplay(data.displaySalary); setEditing(true) }}>
      {!editing ? (
        <div className="flex flex-wrap gap-2">
          {chips.map(c => <Chip key={c} label={c} />)}
        </div>
      ) : (
        <div className="space-y-4">
          <Field label="Minimum Salary Amount" value={salary} onChange={setSalary} placeholder="Input" required />
          <p className="text-[11px] text-[#767F8C] flex items-center gap-1">
            <HelpCircle size={11} /> Amount is by Euro - Monthly
          </p>
          <button className="flex items-center gap-1 text-xs text-[#0A65CC] font-medium hover:underline">
            <HelpCircle size={12} /> What is the fair salary range for this field?
          </button>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={display} onChange={e => setDisplay(e.target.checked)} className="w-4 h-4 accent-[#0A65CC]" />
            <span className="text-sm text-[#18191C]">Displaying salary in the job post</span>
          </label>
          {display && (
            <p className="text-xs text-red-500 font-medium">
              Job postings that transparently display their fair salary receive 45% more resumes on average.
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {display && <Chip label="Displaying salary in the job post" />}
            {salary && <Chip label={salary} />}
          </div>
          <SaveRow onSave={save} onCancel={() => setEditing(false)} />
        </div>
      )}
    </SectionCard>
  )
}
