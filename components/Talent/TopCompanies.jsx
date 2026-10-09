import { Users } from "lucide-react"
import Link from "next/link"

const companies = [
  {
    id: 1,
    name: "Sandro",
    logo: "S",
    logoColor: "bg-yellow-100 text-yellow-700",
    desc: "Sandro is a French fashion brand known for its contemporary collections, offering men…",
    jobs: 56,
    reviews: "103.6M Reviews",
    salaries: "88.1K Salaries",
    tags: ["Global", "Hiring"],
  },
  {
    id: 2,
    name: "TAINT",
    logo: "T",
    logoColor: "bg-red-100 text-red-700",
    desc: "TAINT is a hypothetical company specializing in innovative consumer electronics and lifestyle…",
    jobs: 24,
    reviews: "23.6MM Reviews",
    salaries: "88.1K Salaries",
    tags: ["Global", "Hiring"],
  },
  {
    id: 3,
    name: "Canon",
    logo: "C",
    logoColor: "bg-red-100 text-red-800",
    desc: "Canon is a global leader in imaging and optical products, including cameras, camcorders, and peri…",
    jobs: 56,
    reviews: "143.6MM Reviews",
    salaries: "88.1K Salaries",
    tags: ["Global", "Hiring"],
  },
]

export default function TopCompanies() {
  return (
    <section className="bg-[#F1F2F4] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#18191C] sm:text-3xl">Top companies</h2>
            <p className="mt-1 text-sm text-[#767F8C]">The last job offers Upload</p>
          </div>
          <Link href="#" className="hidden text-sm font-semibold text-[#0A65CC] hover:underline sm:block">
            More &rsaquo;
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <div key={company.id} className="rounded-xl border border-[#E4E5E8] bg-white p-6">
              <div className="flex items-start justify-between">
                <div className={`grid size-14 place-items-center rounded-xl text-xl font-bold ${company.logoColor}`}>
                  {company.logo}
                </div>
                <div className="flex gap-2">
                  {company.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded px-2.5 py-1 text-xs font-semibold ${
                        tag === "Hiring" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#18191C]">{company.name}</h3>
              <p className="mt-1 text-sm leading-5 text-[#767F8C] line-clamp-2">{company.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm text-[#767F8C]">
                <Users size={14} className="text-[#0A65CC]" />
                <span>{company.jobs} Jobs</span>
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-[#E4E5E8] pt-4 text-xs text-[#767F8C]">
                <span>{company.reviews}</span>
                <span>·</span>
                <span>{company.salaries}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
