"use client"

import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Check, MapPin, Search, Sparkles, Users } from "lucide-react"
import Link from "next/link"
import { useRole } from "./RoleContext"
import Hero from "@/components/Talent/Hero"

function TalentLanding() {
  return (
    <>
      <section className="">
        <Hero />
      </section>

    </>
  )
}

function EmployerLanding() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:pb-24 lg:pt-20">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce3d7] bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#42665a]">
            <Users size={15} aria-hidden="true" />
            For teams building what&apos;s next
          </p>
          <h1 className="max-w-[660px] text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#183c33] sm:text-6xl lg:text-[68px]">
            Meet the people who <span className="text-[#dc6848]">make it happen.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#66716a]">
            Great teams start with a thoughtful match. Find people who bring the right skills, perspective, and energy to your next chapter.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link className="inline-flex items-center gap-3 rounded-full bg-[#183c33] px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5" href="#solutions">
              Find your next hire <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <a className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#42665a] hover:text-[#183c33]" href="#talent-pool">
              Explore the talent pool <ArrowDownRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-[#69736c]">
            <BriefcaseBusiness size={19} className="text-[#dc6848]" aria-hidden="true" />
            <span><strong className="text-[#183c33]">2,400+</strong> teams found the right people</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]" id="talent-pool">
          <div className="absolute -left-4 -top-5 -z-10 h-32 w-32 rounded-full bg-[#e6f16a] sm:-left-6 sm:-top-8 sm:h-40 sm:w-40" />
          <div className="overflow-hidden rounded-[24px] border border-[#e1e5dc] bg-white shadow-[0_24px_70px_rgba(31,48,40,0.10)]">
            <div className="flex items-center justify-between bg-[#183c33] px-6 py-5 text-white sm:px-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c2d0c5]">Your hiring workspace</p>
                <h2 className="mt-1.5 text-xl font-semibold">People, not piles of CVs.</h2>
              </div>
              <span className="grid size-11 place-items-center rounded-2xl bg-white/10"><Users size={20} /></span>
            </div>
            <div className="p-5 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#273b32]">Product Designer</p>
                  <p className="mt-1 text-xs text-[#87928a]">Design · Remote · Posted 4 days ago</p>
                </div>
                <span className="rounded-full bg-[#eff4e7] px-3 py-1.5 text-xs font-semibold text-[#54735c]">Active role</span>
              </div>
              <div className="mt-6 grid grid-cols-3 divide-x divide-[#e8ece4] rounded-2xl bg-[#f6f7f2] py-4">
                <Metric value="86" label="Good matches" />
                <Metric value="24" label="Reviewed" />
                <Metric value="8" label="Shortlisted" />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#273b32]">Recommended people</h3>
                <a href="#solutions" className="text-xs font-semibold text-[#54735c]">View all</a>
              </div>
              <div className="mt-2 divide-y divide-[#edf0e9]">
                <CandidateRow initials="AL" name="Alex Lee" role="Senior Product Designer" match="98% fit" color="bg-[#f0d8c7]" />
                <CandidateRow initials="JR" name="Jordan Rivera" role="Product Designer · 6 yrs" match="94% fit" color="bg-[#d6e5d6]" />
                <CandidateRow initials="SK" name="Sam Kim" role="Design Systems Lead" match="91% fit" color="bg-[#e9e2b6]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="border-y border-[#e6e9e1] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5 py-9 sm:px-8">
          <p className="max-w-48 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-[#8b958e]">A more considered way to hire</p>
          <div className="grid flex-1 gap-6 sm:grid-cols-3">
            <Feature title="Find the right fit" text="Meet candidates based on skills, goals, and the way your team works." />
            <Feature title="Move with clarity" text="Keep every conversation and next step in one focused workspace." />
            <Feature title="Build for the long run" text="Make thoughtful hires that help your team do its best work." />
          </div>
        </div>
      </section>
      <span id="pricing" className="sr-only">Pricing options</span>
    </>
  )
}

function JobRow({ company, title, meta, color, initials }) {
  return (
    <div className="flex items-center gap-3 py-3.5">
      <span className={`grid size-10 shrink-0 place-items-center rounded-xl text-sm font-bold text-[#40564b] ${color}`}>{initials}</span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#273b32]">{title}</p>
        <p className="mt-1 truncate text-xs text-[#87928a]">{meta}</p>
      </div>
      <span className="hidden text-xs font-medium text-[#87928a] sm:block">{company}</span>
    </div>
  )
}

function CandidateRow({ initials, name, role, match, color }) {
  return (
    <div className="flex items-center gap-3 py-3.5">
      <span className={`grid size-10 shrink-0 place-items-center rounded-full text-xs font-bold text-[#40564b] ${color}`}>{initials}</span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#273b32]">{name}</p>
        <p className="mt-1 truncate text-xs text-[#87928a]">{role}</p>
      </div>
      <span className="whitespace-nowrap rounded-full bg-[#eff4e7] px-2.5 py-1.5 text-[11px] font-semibold text-[#54735c]">{match}</span>
    </div>
  )
}

function Metric({ value, label }) {
  return (
    <div className="px-2 text-center">
      <p className="text-xl font-semibold tracking-tight text-[#183c33]">{value}</p>
      <p className="mt-1 text-[10px] font-medium text-[#87928a] sm:text-xs">{label}</p>
    </div>
  )
}

function Feature({ title, text }) {
  return (
    <div>
      <span className="mb-3 grid size-8 place-items-center rounded-full bg-[#e6f16a] text-[#183c33]"><Check size={16} strokeWidth={2.5} aria-hidden="true" /></span>
      <h3 className="text-base font-semibold text-[#183c33]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#707b73]">{text}</p>
    </div>
  )
}

export default function Home() {
  const { role } = useRole()

  return <main className="flex-1 bg-[#f6f7f2]">{role === "talent" ? <TalentLanding /> : <EmployerLanding />}</main>
}