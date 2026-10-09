import { Pencil, Plus, X } from "lucide-react"

// Section wrapper card with icon + title + edit button
export function SectionCard({ icon: Icon, title, onEdit, children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 p-6 ${className}`}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Icon size={18} className="text-[#18191C]" />
          <h2 className="text-base font-semibold text-[#18191C]">{title}</h2>
        </div>
        {onEdit && (
          <button onClick={onEdit} className="p-1.5 rounded-lg text-[#0A65CC] hover:bg-blue-50 transition-colors">
            <Pencil size={16} />
          </button>
        )}
      </div>
      {children}
    </div>
  )
}

// Dashed empty-state placeholder
export function EmptyState({ label, onAdd }) {
  return (
    <button
      onClick={onAdd}
      className="w-full flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-gray-300 py-6 text-center hover:border-[#0A65CC] transition-colors group"
    >
      <span className="text-sm text-gray-400 group-hover:text-[#767F8C]">Add something about yourself</span>
      <span className="flex items-center gap-1 text-sm font-semibold text-[#0A65CC]">
        <Plus size={14} /> {label}
      </span>
    </button>
  )
}

// Save / Cancel row
export function SaveRow({ onSave, onCancel }) {
  return (
    <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
      <button
        onClick={onSave}
        className="px-5 py-2 rounded-lg bg-[#0A65CC] text-white text-sm font-semibold hover:bg-[#085BBA] transition-colors"
      >
        Save
      </button>
      <button
        onClick={onCancel}
        className="px-5 py-2 rounded-lg text-sm font-semibold text-[#5E6670] hover:text-[#18191C] transition-colors"
      >
        Cancel
      </button>
    </div>
  )
}

// Input with floating label
export function Field({ label, value, onChange, type = "text", placeholder = "", required, className = "" }) {
  return (
    <div className={`relative border border-gray-200 rounded-lg px-3 pt-5 pb-2 focus-within:border-[#0A65CC] transition-colors ${className}`}>
      <label className="absolute top-1.5 left-3 text-[11px] text-[#767F8C]">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-[#18191C] placeholder:text-[#A0ABB8] focus:outline-none"
      />
    </div>
  )
}

// Chip/tag with × button
export function Chip({ label, color, onRemove }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-[#18191C]`}>
      {color && <span className={`size-2 rounded-full shrink-0 ${color}`} />}
      {label}
      {onRemove && (
        <button onClick={onRemove} className="text-gray-400 hover:text-red-400 ml-0.5">
          <X size={12} />
        </button>
      )}
    </span>
  )
}

// Add other button
export function AddOther({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 mt-3 text-sm font-semibold text-[#0A65CC] hover:text-[#085BBA] transition-colors"
    >
      <Plus size={14} /> {label}
    </button>
  )
}

// Data display row (label + value)
export function DataRow({ label, value, className = "" }) {
  return (
    <div className={className}>
      <p className="text-xs text-[#767F8C]">{label}</p>
      <p className={`mt-1 text-sm font-medium ${value ? "text-[#18191C]" : "text-[#0A65CC]"}`}>
        {value || "Add"}
      </p>
    </div>
  )
}
