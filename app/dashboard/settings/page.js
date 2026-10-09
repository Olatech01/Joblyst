"use client"

import { useState } from "react"
import {
  User, ImageIcon, ShieldCheck, Bell, Trash2,
  Pencil, Eye, EyeOff, Monitor, Smartphone, X,
  HelpCircle, Lock, Hand
} from "lucide-react"

// ─── Toggle Switch ────────────────────────────────────────────────────────────
function Toggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
        checked ? "bg-[#0A65CC]" : "bg-gray-200"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  )
}

// ─── Section Card ─────────────────────────────────────────────────────────────
function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-gray-100 bg-white p-6 ${className}`}>
      {children}
    </div>
  )
}

function SectionHeader({ icon: Icon, title, onEdit }) {
  return (
    <div className="flex items-center justify-between mb-4">
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
  )
}

function OutlineBtn({ children, onClick, danger }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors ${
        danger
          ? "border-red-500 text-red-500 hover:bg-red-50"
          : "border-[#0A65CC] text-[#0A65CC] hover:bg-blue-50"
      }`}
    >
      {children}
    </button>
  )
}

function SaveRow({ onSave, onCancel }) {
  return (
    <div className="flex items-center gap-3 mt-4">
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

function FloatingInput({ label, value, onChange, type = "text", placeholder = "", required, rightEl }) {
  return (
    <div className="relative border border-gray-200 rounded-lg px-3 pt-4 pb-2 focus-within:border-[#0A65CC]">
      <label className="absolute top-1.5 left-3 text-[11px] text-[#767F8C]">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center gap-2">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-[#18191C] placeholder:text-[#A0ABB8] focus:outline-none pt-1"
        />
        {rightEl}
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AccountSettingPage() {
  // Full Name
  const [nameEdit, setNameEdit] = useState(false)
  const [firstName, setFirstName] = useState("Ana")
  const [lastName, setLastName] = useState("Amiri")
  const [nameTemp, setNameTemp] = useState({ first: "Ana", last: "Amiri" })

  // Account / Email
  const [emailEdit, setEmailEdit] = useState(false)
  const [email, setEmail] = useState("anaamiri@gmail.com")
  const [newEmail, setNewEmail] = useState("")

  // Security / Password
  const [pwEdit, setPwEdit] = useState(false)
  const [oldPw, setOldPw] = useState("••••••••••")
  const [newPw, setNewPw] = useState("")
  const [showOld, setShowOld] = useState(false)
  const [showNew, setShowNew] = useState(false)

  // Notifications
  const [notifs, setNotifs] = useState({ newJob: true, applyResult: true, messages: false })

  return (
    <div className="flex gap-6">
      {/* ── Left column ────────────────────────────────────────── */}
      <div className="flex-1 min-w-0 space-y-5">

        {/* Full Name */}
        <Card>
          <SectionHeader
            icon={User}
            title="Full name"
            onEdit={() => { setNameTemp({ first: firstName, last: lastName }); setNameEdit(true) }}
          />
          {nameEdit ? (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingInput
                  label="First Name" required
                  value={nameTemp.first}
                  onChange={e => setNameTemp(p => ({ ...p, first: e.target.value }))}
                />
                <FloatingInput
                  label="Last Name" required
                  value={nameTemp.last}
                  onChange={e => setNameTemp(p => ({ ...p, last: e.target.value }))}
                />
              </div>
              <SaveRow
                onSave={() => { setFirstName(nameTemp.first); setLastName(nameTemp.last); setNameEdit(false) }}
                onCancel={() => setNameEdit(false)}
              />
            </>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-[#767F8C]">First name</p>
                <p className="mt-1 text-sm font-medium text-[#18191C]">{firstName}</p>
              </div>
              <div>
                <p className="text-xs text-[#767F8C]">Last name</p>
                <p className="mt-1 text-sm font-medium text-[#18191C]">{lastName}</p>
              </div>
            </div>
          )}
        </Card>

        {/* Account */}
        <Card>
          <SectionHeader icon={ImageIcon} title="Account" />
          {emailEdit ? (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingInput
                  label="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <FloatingInput
                  label="New Email Address" required
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                  placeholder="+98 991 679 2356"
                />
              </div>
              <SaveRow
                onSave={() => { if (newEmail) setEmail(newEmail); setNewEmail(""); setEmailEdit(false) }}
                onCancel={() => { setNewEmail(""); setEmailEdit(false) }}
              />
            </>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#767F8C]">Email Address</p>
                <p className="mt-1 text-sm font-medium text-[#18191C]">{email}</p>
              </div>
              <OutlineBtn onClick={() => setEmailEdit(true)}>Reset Email</OutlineBtn>
            </div>
          )}
        </Card>

        {/* Security */}
        <Card>
          <SectionHeader icon={ShieldCheck} title="Security" />
          {pwEdit ? (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingInput
                  label="Old Password" required
                  type={showOld ? "text" : "password"}
                  value={oldPw === "••••••••••" ? "" : oldPw}
                  placeholder="••••••••••"
                  onChange={e => setOldPw(e.target.value)}
                  rightEl={
                    <button type="button" onClick={() => setShowOld(p => !p)} className="text-gray-400 hover:text-gray-600 shrink-0">
                      {showOld ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />
                <FloatingInput
                  label="New Password" required
                  type={showNew ? "text" : "password"}
                  value={newPw}
                  placeholder="Enter your new password"
                  onChange={e => setNewPw(e.target.value)}
                  rightEl={
                    <button type="button" onClick={() => setShowNew(p => !p)} className="text-gray-400 hover:text-gray-600 shrink-0">
                      {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />
              </div>
              <SaveRow
                onSave={() => { setOldPw("••••••••••"); setNewPw(""); setPwEdit(false) }}
                onCancel={() => { setOldPw("••••••••••"); setNewPw(""); setPwEdit(false) }}
              />
            </>
          ) : (
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#767F8C]">Password</p>
                <p className="mt-1 text-sm tracking-widest text-[#18191C]">••••••••••••</p>
              </div>
              <OutlineBtn onClick={() => setPwEdit(true)}>Reset Password</OutlineBtn>
            </div>
          )}
        </Card>

        {/* Notification */}
        <Card>
          <SectionHeader icon={Bell} title="Notification" />
          <div className="space-y-5">
            {[
              { key: "newJob", label: "New job", desc: "Notify me when an employer rejected me." },
              { key: "applyResult", label: "Application result", desc: "Notify me when an employer rejected me." },
              { key: "messages", label: "Messeges", desc: "Notify me when an employer rejected me." },
            ].map(({ key, label, desc }) => (
              <div key={key} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#18191C]">{label}</p>
                  <p className="text-xs text-[#767F8C] mt-0.5">{desc}</p>
                </div>
                <Toggle
                  checked={notifs[key]}
                  onChange={v => setNotifs(p => ({ ...p, [key]: v }))}
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Delete Account */}
        <Card>
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Trash2 size={18} className="text-[#18191C]" />
                <h2 className="text-base font-semibold text-[#18191C]">Delete Account</h2>
              </div>
              <p className="text-xs text-[#767F8C] leading-5 max-w-sm">
                We&apos;d hate to see you go, but you&apos;re welcome to delete your account anytime. Just remember,
                once you delete it, it&apos;s gone forever delete it, it&apos;s gone forever delete it, i
              </p>
            </div>
            <button className="shrink-0 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600 transition-colors">
              Delete Account
            </button>
          </div>
        </Card>
      </div>

      {/* ── Right panel ────────────────────────────────────────── */}
      <aside className="hidden xl:flex flex-col gap-5 w-[260px] shrink-0">
        {/* Devices */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5">
          <div className="flex flex-col items-center pb-4 border-b border-gray-100">
            <div className="relative">
              <Monitor size={36} className="text-[#18191C]" />
              <Smartphone size={20} className="text-[#18191C] absolute -bottom-1 -right-3" />
            </div>
            <h3 className="mt-3 text-base font-bold text-[#18191C]">Devices</h3>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <p className="text-xs font-semibold text-[#767F8C] uppercase tracking-wide mb-2">This device</p>
              <div className="flex items-center gap-2 text-sm text-[#18191C]">
                <Monitor size={15} className="text-[#767F8C]" />
                Macbook
              </div>
            </div>

            <button className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600 transition-colors">
              <Hand size={15} />
              Terminate All Other Sessions
            </button>

            <div>
              <p className="text-xs font-semibold text-[#767F8C] uppercase tracking-wide mb-2">Active Devices</p>
              <div className="flex items-start justify-between gap-2 rounded-xl border border-gray-100 p-3">
                <div className="flex items-start gap-2">
                  <Monitor size={15} className="text-[#767F8C] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#18191C]">Chrome 134</p>
                    <p className="text-[11px] text-[#767F8C]">Web 10.9.44A</p>
                    <p className="text-[11px] text-[#767F8C]">Hillsboro, United States, Tue</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 shrink-0">
                  <X size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why isn't my info shown */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5">
          <div className="flex flex-col items-center text-center mb-3">
            <div className="size-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <HelpCircle size={22} className="text-[#18191C]" />
            </div>
            <h3 className="text-sm font-bold text-[#18191C]">Why isn&apos;t my info shown here?</h3>
          </div>
          <p className="text-xs text-[#767F8C] leading-5">
            We&apos;re hiding some account details to protect your identity. We&apos;re hiding some account details
            to protect your identity. We&apos;re hiding some account details to protect your identity. We&apos;re
            hiding some
          </p>
        </div>

        {/* Which details can be edited */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5">
          <div className="flex flex-col items-center text-center mb-3">
            <div className="size-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <Lock size={22} className="text-[#18191C]" />
            </div>
            <h3 className="text-sm font-bold text-[#18191C]">Which details can be edited?</h3>
          </div>
          <p className="text-xs text-[#767F8C] leading-5">
            Details Airbnb uses to verify your identity can&apos;t be changed. Contact info and some personal details
            can be edited, but we may ask you verify your Identity the next time you book or create a listing.
          </p>
        </div>
      </aside>
    </div>
  )
}
