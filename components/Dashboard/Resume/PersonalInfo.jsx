"use client"

import { useState } from "react"
import { User } from "lucide-react"
import { SectionCard, SaveRow, Field, DataRow } from "./Shared"
import { useResume } from "./ResumeContext"

const maritalOptions = ["Single", "Married", "Divorced", "Widowed"]
const genderOptions = ["Male", "Female", "Other", "Prefer not to say"]

export default function PersonalInfo() {
  const { data, update } = useResume()
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(data.personal)

  function set(key) {
    return (e) => setForm(prev => ({ ...prev, [key]: e.target.value }))
  }

  function save() {
    update("personal", form)
    setEditing(false)
  }

  function cancel() {
    setForm(data.personal)
    setEditing(false)
  }

  const p = data.personal

  return (
    <SectionCard icon={User} title="Personal Information" onEdit={() => { setForm(data.personal); setEditing(true) }}>
      {editing ? (
        <>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="First Name" required value={form.firstName} onChange={set("firstName")} />
            <Field label="Last Name" required value={form.lastName} onChange={set("lastName")} />
            <Field label="Email Address" required value={form.email} onChange={set("email")} type="email" />
            <Field label="Mobile Number" value={form.mobile} onChange={set("mobile")} placeholder="Mobile: Search Appr" />
            <Field label="Year Of Birth" value={form.yearOfBirth} onChange={set("yearOfBirth")} placeholder="dddd/yy/mm" />
            <Field label="City" value={form.city} onChange={set("city")} placeholder="Enter: Search Appr" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {/* Marital Status */}
            <div>
              <p className="text-xs text-[#767F8C] mb-2">Marital Status</p>
              <div className="flex flex-wrap gap-3">
                {maritalOptions.map(opt => (
                  <label key={opt} className="flex items-center gap-1.5 text-sm text-[#18191C] cursor-pointer">
                    <input
                      type="radio" name="marital" value={opt}
                      checked={form.maritalStatus === opt}
                      onChange={set("maritalStatus")}
                      className="accent-[#0A65CC]"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
            {/* Gender */}
            <div>
              <p className="text-xs text-[#767F8C] mb-2">Gender</p>
              <div className="flex flex-wrap gap-3">
                {genderOptions.map(opt => (
                  <label key={opt} className="flex items-center gap-1.5 text-sm text-[#18191C] cursor-pointer">
                    <input
                      type="radio" name="gender" value={opt}
                      checked={form.gender === opt}
                      onChange={set("gender")}
                      className="accent-[#0A65CC]"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <SaveRow onSave={save} onCancel={cancel} />
        </>
      ) : (
        <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8">
          <DataRow label="First name" value={p.firstName} />
          <DataRow label="Last name" value={p.lastName} />
          <DataRow label="Email Address" value={p.email} />
          <DataRow label="Mobile Number" value={p.mobile} />
          <DataRow label="Marit al Status" value={p.maritalStatus} />
          <DataRow label="City" value={p.city} />
          <DataRow label="Year of Birth" value={p.yearOfBirth} />
          <DataRow label="Gender" value={p.gender} />
        </div>
      )}
    </SectionCard>
  )
}
