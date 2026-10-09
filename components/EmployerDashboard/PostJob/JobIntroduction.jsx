"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
import { SectionCard, Field, SaveRow, DataRow } from "./Shared"
import { usePostJob } from "./PostJobContext"

export default function JobIntroduction() {
  const { data, update } = usePostJob()
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    jobTitle: data.jobTitle,
    jobCategory: data.jobCategory,
    organizationIndustry: data.organizationIndustry,
    organizationalLevel: data.organizationalLevel,
    location: data.location,
  })
  const set = k => v => setForm(f => ({ ...f, [k]: v }))

  function save() {
    Object.entries(form).forEach(([k, v]) => update(k, v))
    setEditing(false)
  }

  return (
    <SectionCard icon={<FileText size={16} />} title="Job Introduction" onEdit={() => { setForm({ jobTitle: data.jobTitle, jobCategory: data.jobCategory, organizationIndustry: data.organizationIndustry, organizationalLevel: data.organizationalLevel, location: data.location }); setEditing(true) }}>
      {!editing ? (
        <div className="grid grid-cols-2 gap-4">
          <DataRow label="Job Title" value={data.jobTitle} />
          <DataRow label="Location" value={data.location} />
          <DataRow label="Employment Type" value={data.employmentTypeLabel} />
          <DataRow label="Job Category" value={data.jobCategory} />
          <DataRow label="Organization Level" value={data.organizationalLevel} />
        </div>
      ) : (
        <div className="space-y-4">
          <Field label="Job title" value={form.jobTitle} onChange={set("jobTitle")} placeholder="User Interface Designer (UI Designer)" required />
          <Field label="Job category" value={form.jobCategory} onChange={set("jobCategory")} placeholder="Please type your job category" required />
          <Field label="Organization Industry" value={form.organizationIndustry} onChange={set("organizationIndustry")} placeholder="Please type your organisation industry" required />
          <Field label="Organizational level" value={form.organizationalLevel} onChange={set("organizationalLevel")} placeholder="Please type your Organizational level" required />
          <SaveRow onSave={save} onCancel={() => setEditing(false)} />
        </div>
      )}
    </SectionCard>
  )
}
