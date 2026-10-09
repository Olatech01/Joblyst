"use client"

import { useState } from "react"
import { Briefcase } from "lucide-react"
import { SectionCard, EmptyState, SaveRow, Field, Chip, AddOther } from "./Shared"
import { useResume } from "./ResumeContext"

const CONTRACTS = ["Full-time", "Part-time", "Remote", "Internship"]
const SENIORITY = ["Entry-Level", "Specialist", "Manager", "Senior Manager"]

export default function JobPreferences() {
  const { data, update } = useResume()
  const [editing, setEditing] = useState(false)
  const [prefs, setPrefs] = useState(data.jobPreferences)
  const [category, setCategory] = useState("")
  const [salary, setSalary] = useState("")

  function toggleContract(val) {
    setPrefs(p => ({
      ...p,
      contracts: p.contracts.includes(val) ? p.contracts.filter(c => c !== val) : [...p.contracts, val]
    }))
  }

  function toggleSeniority(val) {
    setPrefs(p => ({
      ...p,
      seniority: p.seniority.includes(val) ? p.seniority.filter(s => s !== val) : [...p.seniority, val]
    }))
  }

  function addCategory() {
    const v = category.trim() || (salary ? `${category.trim()}/${salary.trim()}` : "")
    if (!v) return
    setPrefs(p => ({ ...p, categories: [...p.categories, v] }))
    setCategory(""); setSalary("")
  }

  function removeCategory(i) { setPrefs(p => ({ ...p, categories: p.categories.filter((_, idx) => idx !== i) })) }

  function save() { update("jobPreferences", prefs); setEditing(false) }
  function cancel() { setPrefs(data.jobPreferences); setCategory(""); setSalary(""); setEditing(false) }

  const hasData = data.jobPreferences.categories.length || data.jobPreferences.contracts.length || data.jobPreferences.seniority.length

  return (
    <SectionCard icon={Briefcase} title="Job Preferences" onEdit={() => { setPrefs(data.jobPreferences); setEditing(true) }}>
      {editing ? (
        <>
          <div className="space-y-3">
            <Field label="Job Category" value={category} onChange={e => setCategory(e.target.value)} />
            <Field label="Minimum Salary Amount" value={salary} onChange={e => setSalary(e.target.value)} placeholder="Amount e.g. $400 / Month" />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-[#767F8C] mb-2">Acceptable Contract</p>
                <div className="space-y-2">
                  {CONTRACTS.map(c => (
                    <label key={c} className="flex items-center gap-2 text-sm text-[#18191C] cursor-pointer">
                      <input type="checkbox" checked={prefs.contracts.includes(c)} onChange={() => toggleContract(c)} className="accent-[#0A65CC]" />
                      {c}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-[#767F8C] mb-2">Seniority Level</p>
                <div className="space-y-2">
                  {SENIORITY.map(s => (
                    <label key={s} className="flex items-center gap-2 text-sm text-[#18191C] cursor-pointer">
                      <input type="checkbox" checked={prefs.seniority.includes(s)} onChange={() => toggleSeniority(s)} className="accent-[#0A65CC]" />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {prefs.categories.map((c, i) => <Chip key={i} label={c} onRemove={() => removeCategory(i)} />)}
              {prefs.contracts.map(c => <Chip key={c} label={c} />)}
              {prefs.seniority.map(s => <Chip key={s} label={s} />)}
            </div>
          </div>

          <AddOther label="Add other" onClick={addCategory} />
          <SaveRow onSave={save} onCancel={cancel} />
        </>
      ) : hasData ? (
        <div className="flex flex-wrap gap-2">
          {data.jobPreferences.categories.map((c, i) => <Chip key={i} label={c} />)}
          {data.jobPreferences.contracts.map(c => <Chip key={c} label={c} />)}
          {data.jobPreferences.seniority.map(s => <Chip key={s} label={s} />)}
        </div>
      ) : (
        <EmptyState label="Job preferences" onAdd={() => setEditing(true)} />
      )}
    </SectionCard>
  )
}
