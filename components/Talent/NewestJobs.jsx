import { MapPin, Clock } from "lucide-react"
import Link from "next/link"

const jobs = [
  {
    id: 1,
    company: "Mitlab",
    logo: "M",
    logoColor: "bg-blue-100 text-blue-600",
    title: "President of Sales",
    type: "Full Time",
    typeColor: "bg-blue-50 text-blue-600",
    remote: "Remote",
    location: "Korea",
    salary: "25,35$ / Month",
    time: "1 hour ago",
  },
  {
    id: 2,
    company: "McDonald's",
    logo: "M",
    logoColor: "bg-yellow-100 text-yellow-600",
    title: "Web Designer",
    type: "Part Time",
    typeColor: "bg-purple-50 text-purple-600",
    remote: "Senior",
    location: "Bergen",
    salary: "25,55$ / Month",
    time: "1 hour ago",
  },
  {
    id: 3,
    company: "Nursicare",
    logo: "N",
    logoColor: "bg-red-100 text-red-600",
    title: "Nursing Assistant",
    type: "Full Time",
    typeColor: "bg-blue-50 text-blue-600",
    remote: "Part-Time",
    location: "Trondheim",
    salary: "25,55$ / Month",
    time: "1 hour ago",
  },
  {
    id: 4,
    company: "Tempest",
    logo: "T",
    logoColor: "bg-gray-100 text-gray-600",
    title: "Marketing Coordinator",
    type: "Full Time",
    typeColor: "bg-blue-50 text-blue-600",
    remote: "Part-Time",
    location: "Stavanger",
    salary: "25,15$ / Month",
    time: "1 hour ago",
  },
  {
    id: 5,
    company: "Paint Inc",
    logo: "P",
    logoColor: "bg-green-100 text-green-600",
    title: "Dog Trainer",
    type: "Part Time",
    typeColor: "bg-purple-50 text-purple-600",
    remote: "Part-Time",
    location: "Mongstad",
    salary: "25,45$ / Month",
    time: "1 hour ago",
  },
  {
    id: 6,
    company: "Paint Inc",
    logo: "P",
    logoColor: "bg-yellow-100 text-yellow-700",
    title: "Medical Assistant",
    type: "Full Time",
    typeColor: "bg-blue-50 text-blue-600",
    remote: "Part-Time",
    location: "Bergen",
    salary: "29,95$ / Month",
    time: "1 hour ago",
  },
]

export default function NewestJobs() {
  return (
    <section className="bg-[#F1F2F4] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#18191C] sm:text-3xl">Newest Jobs For You</h2>
            <p className="mt-1 text-sm text-[#767F8C]">Get the fastest application so that your name is above other</p>
          </div>
          <Link href="#" className="hidden text-sm font-semibold text-[#0A65CC] hover:underline sm:block">
            More &rsaquo;
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href="#"
              className="group rounded-xl border border-[#E4E5E8] bg-white p-5 transition-all hover:border-[#0A65CC] hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`grid size-12 shrink-0 place-items-center rounded-xl text-lg font-bold ${job.logoColor}`}>
                  {job.logo}
                </div>
                <div className="flex gap-2">
                  <span className={`rounded px-2 py-1 text-[11px] font-semibold ${job.typeColor}`}>{job.type}</span>
                  <span className="rounded bg-green-50 px-2 py-1 text-[11px] font-semibold text-green-600">{job.remote}</span>
                </div>
              </div>
              <h3 className="mt-3 text-base font-semibold text-[#18191C] group-hover:text-[#0A65CC]">{job.title}</h3>
              <p className="mt-0.5 text-xs text-[#767F8C]">{job.company}</p>
              <div className="mt-4 flex items-center justify-between border-t border-[#E4E5E8] pt-4">
                <div className="flex items-center gap-1 text-xs text-[#767F8C]">
                  <MapPin size={13} />
                  {job.location}
                </div>
                <div className="flex items-center gap-1 text-xs text-[#767F8C]">
                  <Clock size={13} />
                  {job.time}
                </div>
              </div>
              <p className="mt-2 text-sm font-bold text-[#0A65CC]">{job.salary}</p>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link href="#" className="text-sm font-semibold text-[#0A65CC]">
            View more jobs &rsaquo;
          </Link>
        </div>
      </div>
    </section>
  )
}
