import StatCards from "@/components/EmployerDashboard/Dashboard/StatCards"
import JobChart from "@/components/EmployerDashboard/Dashboard/JobChart"
import RecentJobs from "@/components/EmployerDashboard/Dashboard/RecentJobs"
import SchedulePanel from "@/components/EmployerDashboard/Dashboard/SchedulePanel"

export default function EmployerDashboardPage() {
  return (
    <div className="flex gap-6 items-start">
      {/* Main content */}
      <div className="flex-1 min-w-0">
        <StatCards />
        <JobChart />
        <RecentJobs />
      </div>

      {/* Right schedule panel */}
      <aside className="hidden xl:block w-[240px] shrink-0 sticky top-6">
        <SchedulePanel />
      </aside>
    </div>
  )
}
