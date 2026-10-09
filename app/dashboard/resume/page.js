import { ResumeProvider } from "@/components/Dashboard/Resume/ResumeContext"
import ProfileHeader from "@/components/Dashboard/Resume/ProfileHeader"
import PersonalInfo from "@/components/Dashboard/Resume/PersonalInfo"
import AboutMe from "@/components/Dashboard/Resume/AboutMe"
import ProfessionalSkills from "@/components/Dashboard/Resume/ProfessionalSkills"
import WorkExperience from "@/components/Dashboard/Resume/WorkExperience"
import Education from "@/components/Dashboard/Resume/Education"
import Links from "@/components/Dashboard/Resume/Links"
import Languages from "@/components/Dashboard/Resume/Languages"
import JobPreferences from "@/components/Dashboard/Resume/JobPreferences"
import JobBenefits from "@/components/Dashboard/Resume/JobBenefits"
import QualityPanel from "@/components/Dashboard/Resume/QualityPanel"

export default function ResumePage() {
  return (
    <ResumeProvider>
      <div className="flex gap-6 items-start">
        {/* Left — main sections */}
        <div className="flex-1 min-w-0 space-y-5">
          <ProfileHeader />
          <PersonalInfo />
          <AboutMe />
          <ProfessionalSkills />
          <WorkExperience />
          <Education />
          <Links />
          <Languages />
          <JobPreferences />
          <JobBenefits />
        </div>

        {/* Right — quality panel */}
        <aside className="hidden lg:block w-[260px] xl:w-[280px] shrink-0 sticky top-1.5">
          <QualityPanel />
        </aside>
      </div>
    </ResumeProvider>
  )
}
