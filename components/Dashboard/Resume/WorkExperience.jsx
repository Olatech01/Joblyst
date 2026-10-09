"use client"

import { useState } from "react"
import { Briefcase, X } from "lucide-react"
import { SectionCard, EmptyState, SaveRow, Field, AddOther } from "./Shared"
import { useResume } from "./ResumeContext"

const EMPTY_ENTRY = { title: "", company: "", from: "", to: "", stillWorking: false, description: "" }
const MAX = 512

export default function WorkExperience() {
  const { data, update } = useResume()
  const [editing, setEditing] = useState(false)
  const [entries, setEntries] = useState(data.workExperience)
  const [form, setForm] = useState({ ...EMPTY_ENTRY })

  function setF(key) { return e => setForm(p => ({ ...p, [key]: e.target.value })) }

  function addEntry() {
    if (!form.title) return
    setEntries(prev => [...prev, { ...form, id: Date.now() }])
    setForm({ ...EMPTY_ENTRY })
  }

  function removeEntry(id) { setEntries(prev => prev.filter(e => e.id !== id)) }

  function save() { update("workExperience", entries); setEditing(false) }
  function cancel() { setEntries(data.workExperience); setForm({ ...EMPTY_ENTRY }); setEditing(false) }

  return (
    <SectionCard icon={Briefcase} title="Work Experience" onEdit={() => { setEntries(data.workExperience); setEditing(true) }}>
      {editing ? (
        <>
          <div className="space-y-3">
            <Field label="Job Title" value={form.title} onChange={setF("title")} placeholder="Input" />
            <Field label="Company Name" value={form.company} onChange={setF("company")} placeholder="Microsoft" />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Start Employment Period" value={form.from} onChange={setF("from")} placeholder="dddd/yy/mm" />
              <Field label="End Employment Period" value={form.to} onChange={setF("to")} placeholder="dddd/yy/mm" />
            </div>
            <label className="flex items-center gap-2 text-sm text-[#18191C] cursor-pointer">
              <input type="checkbox" checked={form.stillWorking} onChange={e => setForm(p => ({ ...p, stillWorking: e.target.checked, to: "" }))} className="accent-[#0A65CC]" />
              Still studying
            </label>
            <div className="relative border border-gray-200 rounded-lg px-3 pt-5 pb-2 focus-within:border-[#0A65CC] transition-colors">
              <label className="absolute top-1.5 left-3 text-[11px] text-[#767F8C]">Description</label>
              <textarea
                value={form.description}
                onChange={e => setForm(p => ({ ...p, description: e.target.value.slice(0, MAX) }))}
                rows={3}
                placeholder="Write your achievements"
                className="w-full bg-transparent text-sm text-[#18191C] placeholder:text-[#A0ABB8] focus:outline-none resize-none"
              />
              <span className="absolute bottom-2 right-3 text-[11px] text-[#A0ABB8]">{form.description.length}/{MAX}</span>
            </div>
          </div>

          {/* Existing entries */}
          {entries.map(e => (
            <div key={e.id} className="flex items-start justify-between mt-3 p-3 rounded-lg bg-gray-50">
              <div>
                <p className="text-sm font-semibold text-[#18191C]">{e.title}</p>
                <p className="text-xs text-[#767F8C] mt-0.5">{e.company} _ From {e.from} to {e.stillWorking ? "Present" : e.to}</p>
              </div>
              <button onClick={() => removeEntry(e.id)} className="text-gray-400 hover:text-red-400 shrink-0 mt-0.5"><X size={15} /></button>
            </div>
          ))}

          <AddOther label="Add other" onClick={addEntry} />
          <SaveRow onSave={save} onCancel={cancel} />
        </>
      ) : data.workExperience.length ? (
        <div className="space-y-3">
          {data.workExperience.map(e => (
            <div key={e.id}>
              <p className="text-sm font-semibold text-[#18191C]">{e.title}</p>
              <p className="text-xs text-[#767F8C] mt-0.5">{e.company} _ From {e.from} to {e.stillWorking ? "Present" : e.to}</p>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState label="Professional Skills" onAdd={() => setEditing(true)} />
      )}
    </SectionCard>
  )
}
