import { Code, Layers, TestTube, Palette, Users, Pencil, FolderKanban, Monitor } from "lucide-react"
import Link from "next/link"

const categories = [
  { icon: Code, label: "Wordpress Developer", count: "72+", color: "text-blue-600 bg-blue-50" },
  { icon: Monitor, label: "Software Developer", count: "121+", color: "text-purple-600 bg-purple-50" },
  { icon: TestTube, label: "Software Tester", count: "154+", color: "text-green-600 bg-green-50" },
  { icon: Palette, label: "Graphic Designer", count: "58+", color: "text-orange-500 bg-orange-50" },
  { icon: Users, label: "Team Leader", count: "25+", color: "text-red-500 bg-red-50" },
  { icon: Pencil, label: "UX Designer", count: "96+", color: "text-indigo-600 bg-indigo-50" },
  { icon: FolderKanban, label: "Project Manager", count: "79+", color: "text-teal-600 bg-teal-50" },
  { icon: Layers, label: "UI Designer", count: "54+", color: "text-pink-600 bg-pink-50" },
]

export default function PopularCategory() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#18191C] sm:text-3xl">Popular Category</h2>
          <p className="mt-2 text-sm text-[#767F8C]">The last job offers Upload</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map(({ icon: Icon, label, count, color }) => (
            <Link
              key={label}
              href="#"
              className="group flex items-center gap-4 rounded-lg border border-[#E4E5E8] bg-white p-5 transition-all hover:border-[#0A65CC] hover:shadow-md"
            >
              <div className={`grid size-12 shrink-0 place-items-center rounded-lg ${color}`}>
                <Icon size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#18191C] group-hover:text-[#0A65CC]">{label}</p>
                <p className="mt-0.5 text-xs text-[#767F8C]">{count} Job available</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
