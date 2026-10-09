import ResumeCard from '@/components/Dashboard/ResumeCard'
import JobStats from '@/components/Dashboard/JobStats'
import SavedJobs from '@/components/Dashboard/SavedJobs'
import StatusPanel from '@/components/Dashboard/StatusPanel'

export default function DashboardPage() {
  return (
    <div className="flex gap-6 min-h-full">
      {/* Center content */}
      <div className="flex-1 min-w-0 space-y-6">
        <ResumeCard />
        <JobStats />
        <SavedJobs />
      </div>

      {/* Right panel */}
      <aside className="hidden xl:flex flex-col gap-6 w-[300px] shrink-0">
        <StatusPanel />
      </aside>
    </div>
  )
}
