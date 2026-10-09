import { ChevronRight, MoreVertical, Users, DollarSign } from "lucide-react"
import Link from "next/link"

const jobs = [
  { id: 1, title: "UI/UX Designer", type: "Full Time", days: "27 days remaining", status: "Active", applications: 798, salary: "11$ - 22$" },
  { id: 2, title: "UI/UX Designer", type: "Full Time", days: "27 days remaining", status: "Active", applications: 798, salary: "11$ - 22$" },
  { id: 3, title: "UI/UX Designer", type: "Full Time", days: "27 days remaining", status: "Active", applications: 798, salary: "11$ - 22$" },
]

export default function RecentJobs() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#18191C]">Recently Posted Jobs</h2>
        <Link href="/employer/hiring" className="flex items-center gap-1 text-sm text-[#767F8C] hover:text-[#0A65CC] transition-colors">
          View All <ChevronRight size={14} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left pb-3 text-xs font-semibold text-[#767F8C] pr-4">Jobs</th>
              <th className="text-left pb-3 text-xs font-semibold text-[#767F8C] pr-4">Status</th>
              <th className="text-left pb-3 text-xs font-semibold text-[#767F8C] pr-4">Aplications</th>
              <th className="text-left pb-3 text-xs font-semibold text-[#767F8C] pr-4">Salary</th>
              <th className="text-left pb-3 text-xs font-semibold text-[#767F8C]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {jobs.map(job => (
              <tr key={job.id} className="group hover:bg-gray-50/50 transition-colors">
                <td className="py-4 pr-4">
                  <p className="font-semibold text-[#18191C]">{job.title}</p>
                  <p className="text-xs text-[#767F8C] mt-0.5">{job.type} • {job.days}</p>
                </td>
                <td className="py-4 pr-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-green-300 bg-green-50 text-green-700 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    {job.status}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="flex items-center gap-1.5 text-[#767F8C]">
                    <Users size={13} />
                    {job.applications} Aplications
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className="flex items-center gap-1.5 text-[#767F8C]">
                    <DollarSign size={13} />
                    {job.salary}
                  </span>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <Link
                      href="/employer/hiring"
                      className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-[#18191C] hover:border-[#0A65CC] hover:text-[#0A65CC] transition-colors whitespace-nowrap"
                    >
                      View Applications
                    </Link>
                    <button className="p-1 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                      <MoreVertical size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
