"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { SectionCard, EmptyState, SaveRow, Chip, Field, AddOther } from "./Shared"
import { useResume } from "./ResumeContext"

export default function Languages() {
  const { data, update } = useResume()
  const [editing, setEditing] = useState(false)
  const [langs, setLangs] = useState(data.languages)
  const [name, setName] = useState("")
  const [level, setLevel] = useState("Beginner")

  function addLang() {
    if (!name.trim()) return
    setLangs(prev => [...prev, { id: Date.now(), name: name.trim(), level }])
    setName(""); setLevel("Beginner")
  }

  function removeLang(id) { setLangs(prev => prev.filter(l => l.id !== id)) }

  function save() { update("languages", langs); setEditing(false) }
  function cancel() { setLangs(data.languages); setName(""); setEditing(false) }

  return (
    <SectionCard icon={Globe} title="Languages" onEdit={() => { setLangs(data.languages); setEditing(true) }}>
      {editing ? (
        <>
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Language Name" value={name} onChange={e => setName(e.target.value)} placeholder="English" />
            <Field label="Proficiency Level" value={level} onChange={e => setLevel(e.target.value)} placeholder="Beginner" />
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {langs.map(l => <Chip key={l.id} label={`${l.name}/${l.level}`} onRemove={() => removeLang(l.id)} />)}
          </div>
          <AddOther label="Add other" onClick={addLang} />
          <SaveRow onSave={save} onCancel={cancel} />
        </>
      ) : data.languages.length ? (
        <div className="flex flex-wrap gap-2">
          {data.languages.map(l => <Chip key={l.id} label={`${l.name}/${l.level}`} />)}
        </div>
      ) : (
        <EmptyState label="Languages" onAdd={() => setEditing(true)} />
      )}
    </SectionCard>
  )
}
