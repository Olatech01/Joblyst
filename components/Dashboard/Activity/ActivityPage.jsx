"use client"

import { useState } from "react"
import { ChevronDown, MapPin, Share2, Bookmark, X, Eye, ChevronRight } from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const applyJobs = [
  { id: 1, company: "Dell", logo: "D", logoBg: "bg-gray-900", logoText: "text-white", job: "Software Engineer", status: "Interviewed" },
  { id: 2, company: "Septwolves", logo: "S", logoBg: "bg-amber-800", logoText: "text-white", job: "Frontend Developer", status: "Applied" },
  { id: 3, company: "Pepsi", logo: "P", logoBg: "bg-red-500", logoText: "text-white", job: "Backend Developer", status: "Rejected" },
  { id: 4, company: "Beats by Dre", logo: "b", logoBg: "bg-red-600", logoText: "text-white", job: "Full Stack Developer", status: "Interviewed" },
  { id: 5, company: "BMW", logo: "BMW", logoBg: "bg-blue-900", logoText: "text-white text-[9px]", job: "AI Researcher", status: "Checked" },
]

const offeredJobs = [
  { id: 1, company: "McDonald's", logo: "M", logoBg: "bg-red-500", tags: ["Full-Time", "Remote"], location: "Canada", salary: "190 $ / Month", time: "1 hour ago" },
  { id: 2, company: "P&G", logo: "P&G", logoBg: "bg-blue-600", logoText: "text-[9px]", tags: ["Internship", "Hybrid"], location: "USA", salary: "234 $ / Month", time: "1 hour ago" },
  { id: 3, company: "Huawei", logo: "H", logoBg: "bg-red-500", tags: ["Part-Time", "Insite"], location: "China", salary: "295 $ / Month", time: "1 hour ago" },
  { id: 4, company: "WWF", logo: "W", logoBg: "bg-gray-900", tags: ["Full-Time", "Remote"], location: "France", salary: "350 $ / Month", time: "1 hour ago" },
  { id: 5, company: "NASA", logo: "N", logoBg: "bg-blue-700", tags: ["Internship", "Insite"], location: "Canada", salary: "450 $ / Month", time: "1 hour ago" },
]

const savedJobs = [
  { id: 1, company: "Google", logo: "G", logoBg: "bg-blue-500", tags: ["Full-Time", "Remote"], location: "USA", salary: "500 $ / Month", time: "2 hours ago" },
  { id: 2, company: "Apple", logo: "A", logoBg: "bg-gray-900", tags: ["Full-Time", "Hybrid"], location: "USA", salary: "600 $ / Month", time: "3 hours ago" },
  { id: 3, company: "Meta", logo: "M", logoBg: "bg-blue-600", tags: ["Full-Time", "Remote"], location: "USA", salary: "550 $ / Month", time: "5 hours ago" },
]

const followedCompanies = [
  { id: 1, name: "Tesla", logo: "T", logoBg: "bg-red-600", industry: "Automotive", openJobs: 12, location: "USA" },
  { id: 2, name: "SpaceX", logo: "S", logoBg: "bg-gray-900", industry: "Aerospace", openJobs: 7, location: "USA" },
  { id: 3, name: "Amazon", logo: "A", logoBg: "bg-amber-500", industry: "E-Commerce", openJobs: 34, location: "Global" },
  { id: 4, name: "Microsoft", logo: "M", logoBg: "bg-blue-500", industry: "Technology", openJobs: 21, location: "USA" },
]

// ─── Status badge config ──────────────────────────────────────────────────────

const statusConfig = {
  Interviewed: { text: "text-teal-600", border: "border-teal-400", bg: "bg-teal-50" },
  Applied: { text: "text-gray-600", border: "border-gray-300", bg: "bg-gray-50" },
  Rejected: { text: "text-red-600", border: "border-red-400", bg: "bg-red-50" },
  Checked: { text: "text-amber-600", border: "border-amber-400", bg: "bg-amber-50" },
  Accepted: { text: "text-green-600", border: "border-green-400", bg: "bg-green-50" },
}

// ─── Tag badge config ─────────────────────────────────────────────────────────

function tagClass(tag) {
  if (tag === "Full-Time") return "bg-blue-50 text-blue-700 border border-blue-200"
  if (tag === "Remote") return "bg-green-50 text-green-700 border border-green-200"
  if (tag === "Part-Time") return "bg-purple-50 text-purple-700 border border-purple-200"
  if (tag === "Internship") return "bg-orange-50 text-orange-700 border border-orange-200"
  if (tag === "Hybrid") return "bg-teal-50 text-teal-700 border border-teal-200"
  if (tag === "Insite") return "bg-gray-100 text-gray-600 border border-gray-200"
  return "bg-gray-100 text-gray-600 border border-gray-200"
}

// ─── Company logo ─────────────────────────────────────────────────────────────

function CompanyLogo({ logo, logoBg, logoText = "text-white", size = "w-12 h-12" }) {
  return (
    <div className={`${size} ${logoBg} rounded-xl flex items-center justify-center shrink-0 font-bold text-sm ${logoText}`}>
      {logo}
    </div>
  )
}

// ─── Apply Status Tab ─────────────────────────────────────────────────────────

function ApplyStatusTab() {
  const filters = ["All", "Applied", "Checked", "Rejected", "Accepted", "Interviewed"]
  const [active, setActive] = useState("All")
  const [expanded, setExpanded] = useState(null)

  const filtered = active === "All" ? applyJobs : applyJobs.filter(j => j.status === active)

  return (
    <div>
      {/* Filter chips row */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                active === f
                  ? "bg-[#0A65CC] text-white border-[#0A65CC]"
                  : "bg-white text-[#767F8C] border-gray-200 hover:border-[#0A65CC] hover:text-[#0A65CC]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative">
          <select className="appearance-none pl-3 pr-8 py-1.5 rounded-lg border border-gray-200 text-sm text-[#18191C] bg-white focus:outline-none focus:border-[#0A65CC] cursor-pointer">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
          <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Job rows */}
      <div className="space-y-3">
        {filtered.map(job => {
          const s = statusConfig[job.status] || statusConfig.Applied
          const isOpen = expanded === job.id
          return (
            <div key={job.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div
                className="flex items-center gap-4 px-5 py-4 cursor-pointer"
                onClick={() => setExpanded(isOpen ? null : job.id)}
              >
                <CompanyLogo logo={job.logo} logoBg={job.logoBg} logoText={job.logoText} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#767F8C] mb-0.5">{job.company}</p>
                  <h3 className="text-sm font-semibold text-[#18191C]">{job.job}</h3>
                  <span className={`inline-block mt-1.5 px-3 py-0.5 rounded-md border text-xs font-medium ${s.text} ${s.border} ${s.bg}`}>
                    {job.status}
                  </span>
                </div>
                <ChevronDown size={18} className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </div>
              {isOpen && (
                <div className="px-5 pb-5 border-t border-gray-50">
                  <div className="pt-4 grid grid-cols-2 gap-4 text-sm text-[#767F8C]">
                    <div><span className="font-medium text-[#18191C]">Status:</span> {job.status}</div>
                    <div><span className="font-medium text-[#18191C]">Company:</span> {job.company}</div>
                    <div><span className="font-medium text-[#18191C]">Position:</span> {job.job}</div>
                    <div><span className="font-medium text-[#18191C]">Applied:</span> 2 days ago</div>
                  </div>
                  <button className="mt-4 px-4 py-1.5 rounded-lg border border-[#0A65CC] text-[#0A65CC] text-sm font-medium hover:bg-blue-50 transition-colors">
                    View Details
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Offered Job Settings Panel ───────────────────────────────────────────────

function OfferedJobSettings({ onClose }) {
  const [editing, setEditing] = useState(false)
  const [cityAll, setCityAll] = useState(true)
  const [cityMine, setCityMine] = useState(false)
  const [jobTitle, setJobTitle] = useState("UI/UX Designer")
  const [chips, setChips] = useState(["UI/UX"])
  const [jobTypes, setJobTypes] = useState({ "Full Time": true, "Part-Time": false, Internship: false })
  const [jobMode, setJobMode] = useState("Remote")
  const [emailToggle, setEmailToggle] = useState(true)

  function removeChip(c) { setChips(prev => prev.filter(x => x !== c)) }
  function toggleType(t) { setJobTypes(prev => ({ ...prev, [t]: !prev[t] })) }

  if (!editing) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-[#18191C]">Offered jobs setting</h3>
          <button onClick={() => setEditing(true)} className="text-[#0A65CC] hover:opacity-70 transition-opacity">
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
            </svg>
          </button>
        </div>
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-xs text-[#767F8C] mb-1">Favorite cities</p>
            <p className="text-[#18191C] font-medium">All cities</p>
          </div>
          <div>
            <p className="text-xs text-[#767F8C] mb-1">Job title</p>
            <p className="text-[#18191C] font-medium">UI/UX Designer</p>
          </div>
          <div>
            <p className="text-xs text-[#767F8C] mb-1">Job Type</p>
            <div className="flex gap-2 flex-wrap mt-1">
              {Object.entries(jobTypes).filter(([,v]) => v).map(([k]) => (
                <span key={k} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-[#0A65CC] border border-blue-200">{k}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs text-[#767F8C] mb-1">Tend to remote job</p>
            <p className="text-[#18191C] font-medium">Just remote jobs</p>
          </div>
          <div className="flex items-center justify-between pt-1">
            <p className="text-xs text-[#767F8C]">Do you want to recieve email</p>
            <button
              onClick={() => setEmailToggle(v => !v)}
              className={`w-10 h-6 rounded-full transition-colors relative ${emailToggle ? "bg-[#0A65CC]" : "bg-gray-200"}`}
            >
              <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${emailToggle ? "left-5" : "left-1"}`} />
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 w-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-bold text-[#18191C]">Offered jobs setting</h3>
        <button onClick={() => setEditing(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
          <X size={16} />
        </button>
      </div>

      {/* Favorite Cities */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-[#18191C] mb-2">Favorite Cities</p>
        <label className="flex items-center gap-2 cursor-pointer mb-2">
          <input type="checkbox" checked={cityAll} onChange={e => setCityAll(e.target.checked)}
            className="w-4 h-4 accent-[#0A65CC]" />
          <span className="text-sm text-[#18191C]">All city</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={cityMine} onChange={e => setCityMine(e.target.checked)}
            className="w-4 h-4 accent-[#0A65CC]" />
          <span className="text-sm text-[#18191C]">My city</span>
        </label>
      </div>

      {/* Filled (job title with chips) */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-[#18191C] mb-2">Filled</p>
        <div className="relative border border-gray-200 rounded-xl px-3 py-2">
          <label className="absolute -top-2 left-3 bg-white px-1 text-[11px] text-[#767F8C]">Filled</label>
          <div className="flex items-center gap-2">
            <input
              value={jobTitle}
              onChange={e => setJobTitle(e.target.value)}
              className="flex-1 text-sm text-[#18191C] outline-none"
            />
            <Eye size={14} className="text-gray-400" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {chips.map(c => (
            <span key={c} className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 text-xs text-[#18191C]">
              {c}
              <button onClick={() => removeChip(c)} className="text-gray-400 hover:text-red-400">
                <X size={10} />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Job Type */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-[#18191C] mb-2">Job Type</p>
        {Object.keys(jobTypes).map(t => (
          <label key={t} className="flex items-center gap-2 cursor-pointer mb-2">
            <input type="checkbox" checked={jobTypes[t]} onChange={() => toggleType(t)}
              className="w-4 h-4 accent-[#0A65CC]" />
            <span className="text-sm text-[#18191C]">{t}</span>
          </label>
        ))}
      </div>

      {/* Job Mode */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-[#18191C] mb-2">Job Mode</p>
        {["Remote", "Hybrid", "Insite"].map(m => (
          <label key={m} className="flex items-center gap-2 cursor-pointer mb-2">
            <input type="radio" name="jobMode" checked={jobMode === m} onChange={() => setJobMode(m)}
              className="w-4 h-4 accent-[#0A65CC]" />
            <span className="text-sm text-[#18191C]">{m}</span>
          </label>
        ))}
      </div>

      <button
        onClick={() => setEditing(false)}
        className="w-full bg-[#0A65CC] text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-[#085BBA] transition-colors"
      >
        Save
      </button>
    </div>
  )
}

// ─── Offered Job Tab ──────────────────────────────────────────────────────────

function OfferedJobTab() {
  return (
    <div className="flex gap-6 items-start">
      {/* Job list */}
      <div className="flex-1 min-w-0 space-y-3">
        {offeredJobs.map(job => (
          <div key={job.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
            <div className="flex items-start gap-4">
              <CompanyLogo logo={job.logo} logoBg={job.logoBg} logoText={job.logoText} />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#767F8C] mb-0.5">{job.company}</p>
                <h3 className="text-sm font-semibold text-[#18191C] mb-2">{job.job || job.company}</h3>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {job.tags.map(t => (
                    <span key={t} className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${tagClass(t)}`}>{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-[#767F8C]">
                  <MapPin size={12} />
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"><Share2 size={15} /></button>
                <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"><Bookmark size={15} /></button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
              <span className="text-sm font-bold text-[#0A65CC]">{job.salary}</span>
              <span className="text-xs text-[#A0ABB8]">{job.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Settings panel */}
      <aside className="w-[220px] shrink-0 sticky top-4">
        <OfferedJobSettings />
      </aside>
    </div>
  )
}

// ─── Saved Job Tab ────────────────────────────────────────────────────────────

function SavedJobTab() {
  return (
    <div className="space-y-3">
      {savedJobs.map(job => (
        <div key={job.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4">
          <div className="flex items-start gap-4">
            <CompanyLogo logo={job.logo} logoBg={job.logoBg} />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#767F8C] mb-0.5">{job.company}</p>
              <h3 className="text-sm font-semibold text-[#18191C] mb-2">{job.job || job.company}</h3>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {job.tags.map(t => (
                  <span key={t} className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${tagClass(t)}`}>{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-[#767F8C]">
                <MapPin size={12} />
                <span>{job.location}</span>
              </div>
            </div>
            <button className="p-1.5 rounded-lg hover:bg-gray-100 text-[#0A65CC] transition-colors">
              <Bookmark size={15} fill="currentColor" />
            </button>
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
            <span className="text-sm font-bold text-[#0A65CC]">{job.salary}</span>
            <span className="text-xs text-[#A0ABB8]">{job.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Followed Company Tab ─────────────────────────────────────────────────────

function FollowedCompanyTab() {
  const [following, setFollowing] = useState(followedCompanies.map(c => c.id))
  const toggle = (id) => setFollowing(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  return (
    <div className="space-y-3">
      {followedCompanies.map(co => (
        <div key={co.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4">
          <CompanyLogo logo={co.logo} logoBg={co.logoBg} />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-[#18191C]">{co.name}</h3>
            <p className="text-xs text-[#767F8C]">{co.industry}</p>
            <div className="flex items-center gap-3 mt-1 text-xs text-[#767F8C]">
              <span className="flex items-center gap-1"><MapPin size={11} />{co.location}</span>
              <span className="text-[#0A65CC] font-medium">{co.openJobs} open jobs</span>
            </div>
          </div>
          <button
            onClick={() => toggle(co.id)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
              following.includes(co.id)
                ? "bg-blue-50 text-[#0A65CC] border-blue-200 hover:bg-red-50 hover:text-red-500 hover:border-red-200"
                : "bg-[#0A65CC] text-white border-[#0A65CC] hover:bg-[#085BBA]"
            }`}
          >
            {following.includes(co.id) ? "Following" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  )
}

// ─── Main ActivityPage ────────────────────────────────────────────────────────

const TABS = ["Apply status", "Offered job", "Saved job", "Followed company"]

export default function ActivityPage() {
  const [tab, setTab] = useState("Apply status")

  return (
    <div>
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200 mb-6 gap-1">
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              tab === t
                ? "border-[#0A65CC] text-[#0A65CC]"
                : "border-transparent text-[#767F8C] hover:text-[#18191C]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "Apply status" && <ApplyStatusTab />}
      {tab === "Offered job" && <OfferedJobTab />}
      {tab === "Saved job" && <SavedJobTab />}
      {tab === "Followed company" && <FollowedCompanyTab />}
    </div>
  )
}
