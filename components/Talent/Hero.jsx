"use client"

import { MapPin, Search } from "lucide-react"
import Image from "next/image"

const popularSearches = ["Designer", "Developer", "Web", "IOS", "Apps", "Management"]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EEF3FB] px-5 pt-10 pb-0 sm:px-8 min-h-[420px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-0">
        {/* Left content */}
        <div className="flex-1 pb-12 lg:pb-16">
          <h1 className="text-4xl font-bold leading-tight text-[#18191C] sm:text-5xl lg:text-[52px]">
            Your Future Starts <br /> with{" "}
            <span className="text-[#0A65CC]">Joblin!</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-[#5E6670]">
            Discover jobs that match your skills and passion. Type and explore!
          </p>

          {/* Search bar */}
          <div className="mt-8 flex max-w-xl flex-col gap-3 rounded-lg bg-white p-2 shadow-md sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-2 px-3">
              <Search size={18} className="shrink-0 text-[#0A65CC]" />
              <input
                className="w-full bg-transparent py-2 text-sm text-[#18191C] placeholder:text-[#A0ABB8] focus:outline-none"
                placeholder="Job title or keyword"
                type="text"
              />
            </div>
            <div className="flex flex-1 items-center gap-2 border-t px-3 pt-2 sm:border-t-0 sm:border-l sm:pt-0">
              <MapPin size={18} className="shrink-0 text-[#0A65CC]" />
              <input
                className="w-full bg-transparent py-2 text-sm text-[#18191C] placeholder:text-[#A0ABB8] focus:outline-none"
                placeholder="Location"
                type="text"
              />
            </div>
            <button className="rounded-md bg-[#0A65CC] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#085BBA]">
              Search
            </button>
          </div>

          {/* Popular searches */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-[#18191C]">Popular:</span>
            {popularSearches.map((term) => (
              <a
                key={term}
                href="#"
                className="rounded-full border border-[#D6DDEB] bg-white px-3 py-1 text-xs text-[#5E6670] transition-colors hover:border-[#0A65CC] hover:text-[#0A65CC]"
              >
                {term}
              </a>
            ))}
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["bg-blue-400", "bg-purple-400", "bg-green-400"].map((c, i) => (
                <div key={i} className={`size-8 rounded-full border-2 border-white ${c}`} />
              ))}
            </div>
            <p className="text-sm text-[#5E6670]">
              Over <strong className="text-[#18191C]">900+ jobseeker</strong> are successfully hired
            </p>
          </div>
        </div>

        {/* Center image */}
        <div className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:max-w-[420px]">
          {/* Floating stat card - top left */}
          <div className="absolute -left-4 top-8 z-10 rounded-xl bg-white px-4 py-3 shadow-lg sm:-left-10">
            <p className="text-xs text-[#767F8C]">Assisted Candidates</p>
            <p className="mt-1 text-2xl font-bold text-[#18191C]">16</p>
            <div className="mt-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-1.5 w-5 rounded-full bg-[#0A65CC]" />
              ))}
            </div>
          </div>

          <Image
            src="/hero.svg"
            alt="Job seeker"
            width={420}
            height={480}
            className="relative z-0 w-full max-h-[480px] object-contain object-bottom"
          />

          {/* Floating stat card - top right */}
          {/* <div className="absolute -right-4 top-6 z-10 rounded-xl bg-white px-4 py-3 shadow-lg sm:-right-8">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-[#EEF3FB]" />
              <div>
                <p className="text-[10px] text-[#767F8C]">Review Pending</p>
                <p className="text-xs font-semibold text-[#18191C]">12</p>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1 text-[10px] text-[#767F8C]">
              <span>Offer</span><span>Interview</span><span>Approved</span>
              <span className="font-semibold text-[#18191C]">3</span>
              <span className="font-semibold text-[#18191C]">8</span>
              <span className="font-semibold text-[#18191C]">1</span>
            </div>
          </div> */}

          {/* Congratulations badge */}
          {/* <div className="absolute bottom-12 -right-2 z-10 flex items-center gap-2 rounded-full bg-[#FFB836] px-4 py-2 shadow-md sm:-right-6">
            <span className="text-lg">🎉</span>
            <div>
              <p className="text-xs font-bold text-white">Congratulations</p>
              <p className="text-[10px] text-white/90">You have been hired</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
