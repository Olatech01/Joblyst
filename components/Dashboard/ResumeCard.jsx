import { Eye, Heart } from "lucide-react"

export default function ResumeCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        {/* Avatar + completion */}
        <div className="flex items-center gap-4 flex-1">
          <div className="relative shrink-0">
            <img
              src="https://i.pravatar.cc/150?img=47"
              alt="Kathryn Murphy"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-100"
            />
            <span className="absolute -bottom-1 -right-1 size-5 rounded-full bg-green-400 border-2 border-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#0A65CC]">
              70% of Your Resume is Complete
            </p>
            <p className="text-xs text-[#767F8C] mt-0.5">
              Almost there! Just a little more effort to make it perfect.
            </p>
            {/* Progress bar */}
            <div className="mt-3 h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 w-[70%] rounded-full bg-[#0A65CC]" />
            </div>
            <a href="#" className="mt-2 text-xs font-semibold text-[#0A65CC] hover:underline inline-block">
              Complete your resume
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 sm:gap-8 shrink-0">
          <div className="flex flex-col items-center gap-1.5">
            <div className="size-10 rounded-full border-2 border-green-200 flex items-center justify-center text-green-500">
              <Eye size={18} />
            </div>
            <p className="text-base font-bold text-[#18191C]">5 people</p>
            <p className="text-xs text-[#767F8C]">Viewed your profile</p>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="size-10 rounded-full border-2 border-red-200 flex items-center justify-center text-red-400">
              <Heart size={18} />
            </div>
            <p className="text-base font-bold text-[#18191C]">10 people</p>
            <p className="text-xs text-[#767F8C]">Liked your resume</p>
          </div>
        </div>
      </div>
    </div>
  )
}
