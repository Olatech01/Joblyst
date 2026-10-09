import Link from "next/link"
import { ChevronRight } from "lucide-react"

const savedJobs = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Upply",
    type: "Full Time",
    location: "New York",
    deadline: "3 day to apply",
    logo: "U",
    logoColor: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Marketing Coordinator",
    company: "Lazada",
    type: "Part Time",
    location: "New York",
    deadline: "2 day to apply",
    logo: "L",
    logoColor: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    title: "Dog Trainer",
    company: "BMW",
    type: "Full Time",
    location: "New York",
    deadline: "3 day to apply",
    logo: "B",
    logoColor: "bg-gray-100 text-gray-700",
  },
]

export default function SavedJobs() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-bold text-[#18191C]">Save job</h2>
        <Link
          href="#"
          className="flex items-center gap-1 text-xs font-semibold text-[#0A65CC] hover:underline"
        >
          View all <ChevronRight size={14} />
        </Link>
      </div>

      <div className="space-y-4">
        {savedJobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0"
          >
            <div className={`size-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${job.logoColor}`}>
              {job.logo}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#18191C] truncate">{job.title}</p>
              <p className="text-xs text-[#767F8C] mt-0.5">
                {job.company} &bull; {job.type} &bull; {job.location}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-orange-300 px-3 py-1 text-xs font-semibold text-orange-500 whitespace-nowrap">
              {job.deadline}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
