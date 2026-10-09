import { Briefcase, FileText, Users, CheckCircle } from "lucide-react"

const stats = [
  { icon: Users, value: "300+", label: "Profile Boost", color: "text-blue-500 bg-blue-50" },
  { icon: FileText, value: "999+", label: "Easy Applications", color: "text-orange-500 bg-orange-50" },
  { icon: Briefcase, value: "400+", label: "Interviews", color: "text-purple-500 bg-purple-50" },
  { icon: CheckCircle, value: "600+", label: "Successful Hires", color: "text-green-500 bg-green-50" },
]

export default function Achievements() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#18191C] sm:text-3xl">Our Achievements in Hiring</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#767F8C]">
              Whether you&apos;re an employer looking for top talent or a job seeker searching for the perfect opportunity,
              our platform finds successful accounts. We are next to achieve your career goals.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="flex items-center gap-4 rounded-xl border border-[#E4E5E8] p-5">
                <div className={`grid size-12 shrink-0 place-items-center rounded-xl ${color}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#18191C]">{value}</p>
                  <p className="mt-0.5 text-sm text-[#767F8C]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
