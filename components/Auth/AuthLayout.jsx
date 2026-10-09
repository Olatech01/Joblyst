import Testimonials from "./Testimonials"

function JoblinLogo() {
  return (
    <div className="flex items-center gap-0.5 mb-8">
      <span className="relative inline-block">
        <span className="text-3xl font-black text-[#18191C] leading-none">J</span>
        <span className="absolute -top-1 left-2 w-2 h-2 bg-[#0A65CC] rounded-full" />
      </span>
      <span className="text-3xl font-black text-[#18191C] leading-none">oblin</span>
    </div>
  )
}

export { JoblinLogo }

export default function AuthLayout({ children, step, totalSteps = 4, testimonialIndex = 0 }) {
  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="w-full lg:w-[45%] xl:w-[42%] bg-[#F9FAFB] flex flex-col">
        {/* Progress bar */}
        {step != null && (
          <div className="flex gap-1.5 px-8 pt-6">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${i < step ? "bg-[#0A65CC]" : "bg-gray-200"}`}
              />
            ))}
          </div>
        )}

        {/* Form content */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 xl:px-16 py-10">
          <JoblinLogo />
          {children}
        </div>
      </div>

      {/* Right panel – image */}
      <div className="hidden lg:flex lg:w-[55%] xl:w-[58%] relative flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-600">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop"
            alt="Professional woman"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative mt-auto z-10">
          <Testimonials index={testimonialIndex} />
        </div>
      </div>
    </div>
  )
}
