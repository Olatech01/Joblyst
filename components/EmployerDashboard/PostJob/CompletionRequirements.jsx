"use client"

import { useState } from "react"
import { ClipboardList } from "lucide-react"
import { SectionCard, Chip, Field, SaveRow } from "./Shared"
import { usePostJob } from "./PostJobContext"

export default function CompletionRequirements() {
  const { data, update } = usePostJob()
  const [editing, setEditing] = useState(false)
  const [bgCheck, setBgCheck] = useState(false)
  const [disability, setDisability] = useState(true)
  const [reqs, setReqs] = useState(data.completionRequirements)
  const [fieldOfStudy, setFieldOfStudy] = useState(data.fieldOfStudy)
  const [educLevel, setEducLevel] = useState(data.educationalLevel)
  const [studyChips, setStudyChips] = useState([data.fieldOfStudy + " × " + data.educationalLevel])

  function addStudy() {
    if (fieldOfStudy && educLevel) {
      const chip = `${fieldOfStudy} × ${educLevel}`
      if (!studyChips.includes(chip)) setStudyChips(prev => [...prev, chip])
    }
  }
  function removeStudy(i) { setStudyChips(prev => prev.filter((_, idx) => idx !== i)) }
  function removeReq(i) { setReqs(prev => prev.filter((_, idx) => idx !== i)) }

  const disabilityLabel = "Hiring individuals with disabilities is possible"

  function save() {
    const r = [...(disability ? [disabilityLabel] : [])]
    update("completionRequirements", r)
    update("fieldOfStudy", fieldOfStudy)
    update("educationalLevel", educLevel)
    setEditing(false)
  }

  return (
    <SectionCard icon={<ClipboardList size={16} />} title="Completion Requirements" onEdit={() => { setDisability(data.completionRequirements.includes(disabilityLabel)); setFieldOfStudy(data.fieldOfStudy); setEducLevel(data.educationalLevel); setEditing(true) }}>
      {!editing ? (
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {data.completionRequirements.map(r => <Chip key={r} label={r} />)}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <Chip label={data.fieldOfStudy} />
            <Chip label={data.educationalLevel} />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2.5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={bgCheck} onChange={e => setBgCheck(e.target.checked)} className="w-4 h-4 accent-[#0A65CC]" />
              <span className="text-sm text-[#18191C]">Conducting background checks is required</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={disability} onChange={e => setDisability(e.target.checked)} className="w-4 h-4 accent-[#0A65CC]" />
              <span className="text-sm text-[#18191C]">{disabilityLabel}</span>
            </label>
          </div>
          {disability && (
            <div className="flex flex-wrap gap-2">
              <Chip label={disabilityLabel} />
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <Field label="Field of Study" value={fieldOfStudy} onChange={setFieldOfStudy} placeholder="UI/UX" required />
            <Field label="Educational Level" value={educLevel} onChange={setEducLevel} placeholder="Information Technology,Bacholars" required />
          </div>
          <div className="flex flex-wrap gap-2">
            {studyChips.map((c, i) => <Chip key={i} label={c} onRemove={() => removeStudy(i)} />)}
          </div>
          <button onClick={addStudy} className="text-sm text-[#0A65CC] font-medium hover:underline">+ Add field</button>
          <SaveRow onSave={save} onCancel={() => setEditing(false)} />
        </div>
      )}
    </SectionCard>
  )
}
