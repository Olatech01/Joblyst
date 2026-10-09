"use client"

import { useState } from "react"
import { Link2 } from "lucide-react"
import { SectionCard, EmptyState, SaveRow, Chip, AddOther } from "./Shared"
import { useResume } from "./ResumeContext"

const LINK_COLORS = ["bg-pink-500", "bg-purple-500", "bg-blue-500", "bg-green-500", "bg-orange-500"]

export default function Links() {
  const { data, update } = useResume()
  const [editing, setEditing] = useState(false)
  const [links, setLinks] = useState(data.links)
  const [input, setInput] = useState("")

  function addLink() {
    const v = input.trim()
    if (!v) return
    const color = LINK_COLORS[links.length % LINK_COLORS.length]
    setLinks(prev => [...prev, { id: Date.now(), label: v, color }])
    setInput("")
  }

  function removeLink(id) { setLinks(prev => prev.filter(l => l.id !== id)) }

  function save() { update("links", links); setEditing(false) }
  function cancel() { setLinks(data.links); setInput(""); setEditing(false) }

  return (
    <SectionCard icon={Link2} title="Links" onEdit={() => { setLinks(data.links); setEditing(true) }}>
      {editing ? (
        <>
          <div className="border border-gray-200 rounded-lg px-3 pt-2 pb-2 focus-within:border-[#0A65CC] transition-colors">
            <label className="text-[11px] text-[#767F8C] block mb-1">Social Media</label>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addLink())}
              placeholder="e.g. Dribble, Instagram…"
              className="w-full bg-transparent text-sm text-[#18191C] placeholder:text-[#A0ABB8] focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {links.map(l => <Chip key={l.id} label={l.label} color={l.color} onRemove={() => removeLink(l.id)} />)}
          </div>
          <AddOther label="Add other" onClick={addLink} />
          <SaveRow onSave={save} onCancel={cancel} />
        </>
      ) : data.links.length ? (
        <div className="flex flex-wrap gap-2">
          {data.links.map(l => <Chip key={l.id} label={l.label} color={l.color} />)}
        </div>
      ) : (
        <EmptyState label="Add links" onAdd={() => setEditing(true)} />
      )}
    </SectionCard>
  )
}
