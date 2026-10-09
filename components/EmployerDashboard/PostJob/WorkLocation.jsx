"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { SectionCard, Chip, Field, SaveRow } from "./Shared"
import { usePostJob } from "./PostJobContext"

export default function WorkLocation() {
  const { data, update } = usePostJob()
  const [editing, setEditing] = useState(false)
  const [country, setCountry] = useState(data.country)
  const [city, setCity] = useState(data.city)
  const [chips, setChips] = useState(data.locationChips)

  function addChip() {
    const val = `${city}/${country}`
    if (val && !chips.includes(val)) setChips(prev => [...prev, val])
  }
  function removeChip(i) { setChips(prev => prev.filter((_, idx) => idx !== i)) }

  function save() {
    update("country", country)
    update("city", city)
    update("locationChips", chips)
    setEditing(false)
  }

  return (
    <SectionCard icon={<MapPin size={16} />} title="Work Location" onEdit={() => { setCountry(data.country); setCity(data.city); setChips(data.locationChips); setEditing(true) }}>
      {!editing ? (
        <div className="flex flex-wrap gap-2">
          {data.locationChips.map(c => <Chip key={c} label={c} />)}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Country" value={country} onChange={setCountry} placeholder="Iran" required />
            <Field label="City" value={city} onChange={setCity} placeholder="Tehran" required />
          </div>
          <div className="flex flex-wrap gap-2">
            {chips.map((c, i) => <Chip key={i} label={c} onRemove={() => removeChip(i)} />)}
          </div>
          <button onClick={addChip} className="text-sm text-[#0A65CC] font-medium hover:underline">+ Add location</button>
          <SaveRow onSave={save} onCancel={() => setEditing(false)} />
        </div>
      )}
    </SectionCard>
  )
}
