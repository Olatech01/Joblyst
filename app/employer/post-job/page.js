import { PostJobProvider } from "@/components/EmployerDashboard/PostJob/PostJobContext"
import JobIntroduction from "@/components/EmployerDashboard/PostJob/JobIntroduction"
import EmploymentTypeSection from "@/components/EmployerDashboard/PostJob/EmploymentTypeSection"
import WorkLocation from "@/components/EmployerDashboard/PostJob/WorkLocation"
import SalaryBenefits from "@/components/EmployerDashboard/PostJob/SalaryBenefits"
import PreferredBenefits from "@/components/EmployerDashboard/PostJob/PreferredBenefits"
import ExecutionConditions from "@/components/EmployerDashboard/PostJob/ExecutionConditions"
import WorkExperience from "@/components/EmployerDashboard/PostJob/WorkExperience"
import CompletionRequirements from "@/components/EmployerDashboard/PostJob/CompletionRequirements"
import SkillsSection from "@/components/EmployerDashboard/PostJob/SkillsSection"
import JobDescriptionSection from "@/components/EmployerDashboard/PostJob/JobDescriptionSection"

export default function PostJobPage() {
  return (
    <PostJobProvider>
      <div className="max-w-3xl">
        <JobIntroduction />
        <EmploymentTypeSection />
        <WorkLocation />
        <SalaryBenefits />
        <PreferredBenefits />
        <ExecutionConditions />
        <WorkExperience />
        <CompletionRequirements />
        <SkillsSection />
        <JobDescriptionSection />

        <div className="mt-2 pb-8">
          <button className="w-full sm:w-auto px-10 py-3 bg-[#18191C] text-white rounded-xl text-sm font-bold hover:bg-black transition-colors">
            Post job
          </button>
        </div>
      </div>
    </PostJobProvider>
  )
}
