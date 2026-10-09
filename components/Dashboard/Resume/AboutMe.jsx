"use client"

import { useState } from "react"
import { UserCircle } from "lucide-react"
import { SectionCard, EmptyState, SaveRow } from "./Shared"
import { useResume } from "./ResumeContext"

const MAX = 512

export default function AboutMe() {
  const { data, update } = useResume()
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(data.aboutMe)

  function save() { update("aboutMe", text); setEditing(false) }
  function cancel() { setText(data.aboutMe); setEditing(false) }

  return (
    <SectionCard icon={UserCircle} title="About me" onEdit={() => { setText(data.aboutMe); setEditing(true) }}>
      {editing ? (
        <>
          <div className="relative border border-gray-200 rounded-lg focus-within:border-[#0A65CC] transition-colors">
            <label className="block px-3 pt-2 text-[11px] text-[#767F8C]">Describe Yourself</label>
            <textarea
              value={text}
              onChange={e => setText(e.target.value.slice(0, MAX))}
              rows={5}
              placeholder="Write about yourself..."
              className="w-full px-3 pb-2 bg-transparent text-sm text-[#18191C] placeholder:text-[#A0ABB8] focus:outline-none resize-none"
            />
            <span className="absolute bottom-2 right-3 text-[11px] text-[#A0ABB8]">{text.length}/{MAX}</span>
          </div>
          <SaveRow onSave={save} onCancel={cancel} />
        </>
      ) : data.aboutMe ? (
        <p className="text-sm text-[#5E6670] leading-7">{data.aboutMe}</p>
      ) : (
        <EmptyState label="About me" onAdd={() => setEditing(true)} />
      )}
    </SectionCard>
  )
}
