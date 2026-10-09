const steps = [
  {
    number: "1",
    title: "Create account",
    desc: "Start your journey today. Nulla facilisi. Donec ullamcorper sit at tempus, et cursus.",
    color: "bg-blue-50 border-blue-200",
    numColor: "bg-[#0A65CC] text-white",
  },
  {
    number: "2",
    title: "Upload CV / Resume",
    desc: "Easily upload your resume. Donec vulputat velit at tempus, et cursus. Morbi imperdiet.",
    color: "bg-orange-50 border-orange-200",
    numColor: "bg-[#FF7B01] text-white",
  },
  {
    number: "3",
    title: "Find suitable job",
    desc: "Discover jobs for you. Vi trae matteleea picturma. Donec ullamcorper. Morbi imperdiet.",
    color: "bg-blue-50 border-blue-200",
    numColor: "bg-[#0A65CC] text-white",
  },
  {
    number: "4",
    title: "Apply job",
    desc: "Apply in just a click. Sed luctus, lorem ullamcorper id pharetra dapibus, velit nisi.",
    color: "bg-purple-50 border-purple-200",
    numColor: "bg-purple-600 text-white",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#18191C] sm:text-3xl">Steps to Your Dream Job</h2>
          <p className="mt-2 text-sm text-[#767F8C]">The last job offers Upload</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative rounded-xl border p-6 ${step.color}`}
            >
              <span className={`inline-flex size-10 items-center justify-center rounded-full text-base font-bold ${step.numColor}`}>
                {step.number}
              </span>
              <h3 className="mt-4 text-base font-semibold text-[#18191C]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#767F8C]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
