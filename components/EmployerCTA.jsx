import Link from "next/link"

export default function EmployerCTA() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-[#EEF3FB] px-8 py-12 sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-[#18191C] sm:text-3xl">Are you employer?</h2>
              <p className="mt-4 text-sm leading-7 text-[#767F8C]">
                You can find various solutions just by accessing our platform. Because we are committed to maintaining the
                quality of user service.
              </p>
              <Link
                href="#"
                className="mt-6 inline-block rounded-md bg-[#0A65CC] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#085BBA]"
              >
                Post a job
              </Link>
            </div>

            {/* Decorative person illustration placeholder */}
            <div className="hidden lg:block">
              <div className="size-52 rounded-full bg-[#D6E4F7] flex items-center justify-center">
                <div className="size-36 rounded-full bg-[#0A65CC]/20 flex items-center justify-center">
                  <svg viewBox="0 0 80 100" className="h-28 w-28 fill-[#0A65CC]/40" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="40" cy="28" rx="20" ry="22" />
                    <ellipse cx="40" cy="85" rx="35" ry="28" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-10 -top-10 size-64 rounded-full bg-[#0A65CC]/5" />
          <div className="pointer-events-none absolute -bottom-16 right-20 size-40 rounded-full bg-[#0A65CC]/5" />
        </div>
      </div>
    </section>
  )
}
