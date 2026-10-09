"use client"

import { useState } from "react"
import { Zap } from "lucide-react"
import { SectionCard, Chip, Field, SaveRow } from "./Shared"
import { usePostJob } from "./PostJobContext"

const COMM_SKILLS = ["Conflict Resolution Skill", "Collaboration Skill", "Time management", "Interpersonal skill", "Adaptability"]

export default function SkillsSection() {
  const { data, update } = usePostJob()
  const [editing, setEditing] = useState(false)
  const [languages, setLanguages] = useState(data.languages)
  const [software, setSoftware] = useState(data.software)
  const [commSkills, setCommSkills] = useState(data.communicationSkills)
  const [langInput, setLangInput] = useState({ lang: "", level: "" })
  const [swInput, setSwInput] = useState({ field: "", level: "" })

  function addLang() {
    if (langInput.lang && langInput.level) {
      setLanguages(prev => [...prev, { ...langInput }])
      setLangInput({ lang: "", level: "" })
    }
  }
  function removeLang(i) { setLanguages(prev => prev.filter((_, idx) => idx !== i)) }
  function addSw() {
    if (swInput.field && swInput.level) {
      setSoftware(prev => [...prev, { ...swInput }])
      setSwInput({ field: "", level: "" })
    }
  }
  function removeSw(i) { setSoftware(prev => prev.filter((_, idx) => idx !== i)) }
  function toggleComm(s) { setCommSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]) }
  function removeComm(i) { setCommSkills(prev => prev.filter((_, idx) => idx !== i)) }

  function save() {
    update("languages", languages)
    update("software", software)
    update("communicationSkills", commSkills)
    setEditing(false)
  }

  return (
    <SectionCard icon={<Zap size={16} />} title="Skills" onEdit={() => { setLanguages(data.languages); setSoftware(data.software); setCommSkills(data.communicationSkills); setEditing(true) }}>
      {!editing ? (
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {data.languages.map((l, i) => <Chip key={i} label={`${l.lang} / ${l.level}`} />)}
          </div>
          <div className="flex flex-wrap gap-2">
            {data.software.map((s, i) => <Chip key={i} label={`${s.field} / ${s.level}`} />)}
          </div>
          <div className="flex flex-wrap gap-2">
            {data.communicationSkills.map((s, i) => <Chip key={i} label={s} />)}
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          {/* Languages */}
          <div>
            <p className="text-xs font-semibold text-[#18191C] mb-3">Languages</p>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <Field label="Languages" value={langInput.lang} onChange={v => setLangInput(f => ({ ...f, lang: v }))} placeholder="English" required />
              <Field label="Proficiency Level" value={langInput.level} onChange={v => setLangInput(f => ({ ...f, level: v }))} placeholder="Advanced" required />
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {languages.map((l, i) => <Chip key={i} label={`${l.lang} / ${l.level}`} onRemove={() => removeLang(i)} />)}
            </div>
            <button onClick={addLang} className="text-sm text-[#0A65CC] font-medium hover:underline">+ Add language</button>
          </div>

          {/* Software */}
          <div>
            <p className="text-xs font-semibold text-[#18191C] mb-3">Software</p>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <Field label="Field" value={swInput.field} onChange={v => setSwInput(f => ({ ...f, field: v }))} placeholder="Graphic Software" required />
              <Field label="Proficiency Level" value={swInput.level} onChange={v => setSwInput(f => ({ ...f, level: v }))} placeholder="Junior" required />
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {software.map((s, i) => <Chip key={i} label={`${s.field} / ${s.level}`} onRemove={() => removeSw(i)} />)}
            </div>
            <button onClick={addSw} className="text-sm text-[#0A65CC] font-medium hover:underline">+ Add software</button>
          </div>

          {/* Communication */}
          <div>
            <p className="text-xs font-semibold text-[#18191C] mb-3">Comunication</p>
            <div className="space-y-2.5 mb-3">
              {COMM_SKILLS.map(s => (
                <label key={s} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={commSkills.includes(s)} onChange={() => toggleComm(s)} className="w-4 h-4 accent-[#0A65CC]" />
                  <span className="text-sm text-[#18191C]">{s}</span>
                </label>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {commSkills.map((s, i) => <Chip key={i} label={s} onRemove={() => removeComm(i)} />)}
            </div>
          </div>

          <SaveRow onSave={save} onCancel={() => setEditing(false)} />
        </div>
      )}
    </SectionCard>
  )
}
