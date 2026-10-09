import { Pencil, X } from "lucide-react"

export function SectionCard({ icon, title, onEdit, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-[#18191C]">{icon}</span>
          <h3 className="text-sm font-bold text-[#18191C]">{title}</h3>
        </div>
        {onEdit && (
          <button onClick={onEdit} className="text-[#0A65CC] hover:opacity-70 transition-opacity">
            <Pencil size={15} />
          </button>
        )}
      </div>
      {children}
    </div>
  )
}

export function Chip({ label, onRemove, color = "bg-gray-100 text-[#18191C] border-gray-200" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${color}`}>
      {label}
      {onRemove && (
        <button onClick={onRemove} className="hover:opacity-60">
          <X size={10} />
        </button>
      )}
    </span>
  )
}

export function Field({ label, value, onChange, placeholder = "", type = "text", required }) {
  return (
    <div className="relative">
      <label className="absolute -top-2 left-3 bg-white px-1 text-[11px] text-[#374151] font-medium z-10">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-[#18191C] placeholder-gray-400 focus:outline-none focus:border-[#0A65CC]"
      />
    </div>
  )
}

export function SaveRow({ onSave, onCancel }) {
  return (
    <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
      <button onClick={onSave} className="px-5 py-2 bg-[#0A65CC] text-white rounded-xl text-sm font-semibold hover:bg-[#085BBA] transition-colors">
        Save
      </button>
      <button onClick={onCancel} className="px-5 py-2 border border-gray-200 text-[#767F8C] rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
        Cancel
      </button>
    </div>
  )
}

export function DataRow({ label, value }) {
  if (!value) return null
  return (
    <div>
      <p className="text-[11px] text-[#767F8C] mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-[#18191C]">{value}</p>
    </div>
  )
}

export function ChipList({ items, onRemove }) {
  if (!items?.length) return null
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item, i) => (
        <Chip key={i} label={item} onRemove={onRemove ? () => onRemove(i) : undefined} />
      ))}
    </div>
  )
}
