"use client"

import { useState } from "react"
import { Tag } from "lucide-react"
import { SectionCard, EmptyState, SaveRow, Chip, AddOther } from "./Shared"
import { useResume } from "./ResumeContext"

export default function ProfessionalSkills() {
  const { data, update } = useResume()
  const [editing, setEditing] = useState(false)
  const [skills, setSkills] = useState(data.skills)
  const [input, setInput] = useState("")

  function addSkill() {
    const v = input.trim()
    if (v && !skills.includes(v)) setSkills(prev => [...prev, v])
    setInput("")
  }

  function removeSkill(s) { setSkills(prev => prev.filter(x => x !== s)) }

  function save() { update("skills", skills); setEditing(false) }
  function cancel() { setSkills(data.skills); setInput(""); setEditing(false) }

  return (
    <SectionCard icon={Tag} title="Professional Skills" onEdit={() => { setSkills(data.skills); setEditing(true) }}>
      {editing ? (
        <>
          <div className="border border-gray-200 rounded-lg px-3 pt-2 pb-2 focus-within:border-[#0A65CC] transition-colors">
            <label className="text-[11px] text-[#767F8C] block mb-1">Your Skills</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {skills.map(s => <Chip key={s} label={s} onRemove={() => removeSkill(s)} />)}
            </div>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addSkill())}
              placeholder="Add a skill…"
              className="w-full bg-transparent text-sm text-[#18191C] placeholder:text-[#A0ABB8] focus:outline-none"
            />
          </div>
          <AddOther label="Add other" onClick={addSkill} />
          <SaveRow onSave={save} onCancel={cancel} />
        </>
      ) : data.skills.length ? (
        <div className="flex flex-wrap gap-2">
          {data.skills.map(s => <Chip key={s} label={s} />)}
        </div>
      ) : (
        <EmptyState label="Professional Skills" onAdd={() => setEditing(true)} />
      )}
    </SectionCard>
  )
}
