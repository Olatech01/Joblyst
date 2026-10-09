"use client"

import { useState } from "react"
import { GraduationCap, X } from "lucide-react"
import { SectionCard, EmptyState, SaveRow, Field, AddOther } from "./Shared"
import { useResume } from "./ResumeContext"

const DEGREES = ["Associate", "Bachelor's", "Masters", "PHD and Higher"]
const EMPTY_ENTRY = { field: "", school: "", degree: "", startYear: "", endYear: "", stillStudying: false, description: "" }
const MAX = 512

export default function Education() {
  const { data, update } = useResume()
  const [editing, setEditing] = useState(false)
  const [entries, setEntries] = useState(data.education)
  const [form, setForm] = useState({ ...EMPTY_ENTRY })

  function setF(key) { return e => setForm(p => ({ ...p, [key]: e.target.value })) }

  function addEntry() {
    if (!form.field && !form.school) return
    const label = `${form.degree ? form.degree + " degree of " : ""}${form.field}`
    setEntries(prev => [...prev, { ...form, id: Date.now(), degree: label }])
    setForm({ ...EMPTY_ENTRY })
  }

  function removeEntry(id) { setEntries(prev => prev.filter(e => e.id !== id)) }

  function save() { update("education", entries); setEditing(false) }
  function cancel() { setEntries(data.education); setForm({ ...EMPTY_ENTRY }); setEditing(false) }

  return (
    <SectionCard icon={GraduationCap} title="Education" onEdit={() => { setEntries(data.education); setEditing(true) }}>
      {editing ? (
        <>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Field Of Study" value={form.field} onChange={setF("field")} placeholder="Input" />
              <Field label="University Name" value={form.school} onChange={setF("school")} placeholder="Input" />
            </div>

            <div>
              <p className="text-xs text-[#767F8C] mb-2">Degree Level</p>
              <div className="flex flex-wrap gap-4">
                {DEGREES.map(d => (
                  <label key={d} className="flex items-center gap-1.5 text-sm text-[#18191C] cursor-pointer">
                    <input type="radio" name="degree" value={d} checked={form.degree === d} onChange={setF("degree")} className="accent-[#0A65CC]" />
                    {d}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Start Date Of Study" value={form.startYear} onChange={setF("startYear")} placeholder="dddd/yy/mm" />
              <Field label="End Date Of Study" value={form.endYear} onChange={setF("endYear")} placeholder="dddd/yy/mm" />
            </div>

            <label className="flex items-center gap-2 text-sm text-[#18191C] cursor-pointer">
              <input type="checkbox" checked={form.stillStudying} onChange={e => setForm(p => ({ ...p, stillStudying: e.target.checked, endYear: "" }))} className="accent-[#0A65CC]" />
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

          {entries.map(e => (
            <div key={e.id} className="flex items-start justify-between mt-3 p-3 rounded-lg bg-gray-50">
              <div>
                <p className="text-sm font-semibold text-[#18191C]">{e.degree}</p>
                <p className="text-xs text-[#767F8C] mt-0.5">
                  {e.school}{e.city ? `, ${e.city}` : ""} |{e.startYear}-{e.stillStudying ? "Present" : e.endYear}
                </p>
              </div>
              <button onClick={() => removeEntry(e.id)} className="text-gray-400 hover:text-red-400 shrink-0"><X size={15} /></button>
            </div>
          ))}

          <AddOther label="Add other" onClick={addEntry} />
          <SaveRow onSave={save} onCancel={cancel} />
        </>
      ) : data.education.length ? (
        <div className="space-y-4">
          {data.education.map(e => (
            <div key={e.id}>
              <p className="text-sm font-semibold text-[#18191C]">{e.degree}</p>
              <p className="text-xs text-[#767F8C] mt-0.5">
                {e.school}{e.city ? `, ${e.city}` : ""} |{e.startYear}-{e.stillStudying ? "Present" : e.endYear}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState label="Education" onAdd={() => setEditing(true)} />
      )}
    </SectionCard>
  )
}
