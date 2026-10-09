"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Eye, EyeOff, Upload } from "lucide-react"
import AuthLayout from "@/components/Auth/AuthLayout"

function FloatInput({ label, type = "text", value, onChange, placeholder, required }) {
  const [show, setShow] = useState(false)
  const isPassword = type === "password"
  const inputType = isPassword ? (show ? "text" : "password") : type

  return (
    <div className="relative">
      <label className="absolute -top-2 left-3 bg-[#F9FAFB] px-1 text-[11px] text-[#374151] font-medium z-10">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm text-[#18191C] placeholder-gray-400 focus:outline-none focus:border-[#0A65CC] bg-transparent pr-10"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(v => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {show ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
      )}
    </div>
  )
}

// ─── Step 1: Account info ─────────────────────────────────────────────────────

function Step1({ onNext }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", confirm: "" })
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <>
      <h1 className="text-2xl font-bold text-[#18191C] mb-2">Give us your information</h1>
      <p className="text-sm text-[#767F8C] mb-7 leading-relaxed">
        Please enter your personal details to set up your account and personalize your experience
      </p>
      <form className="space-y-5" onSubmit={e => { e.preventDefault(); onNext() }}>
        <FloatInput label="First Name" value={form.firstName} onChange={set("firstName")} placeholder="Enter your First Name" required />
        <FloatInput label="Last Name" value={form.lastName} onChange={set("lastName")} placeholder="Enter your First Name" required />
        <FloatInput label="Email" type="email" value={form.email} onChange={set("email")} placeholder="Enter your Email Address" required />
        <FloatInput label="Password" type="password" value={form.password} onChange={set("password")} placeholder="Enter your Password" required />
        <FloatInput label="Confirm Password" type="password" value={form.confirm} onChange={set("confirm")} placeholder="Confirmed your Password" required />
        <button type="submit" className="w-full bg-[#0A65CC] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#085BBA] transition-colors mt-1">
          Sign up
        </button>
      </form>
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-[#767F8C] uppercase tracking-wide">OR</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
      <button className="w-full flex items-center justify-center gap-2.5 border border-gray-300 rounded-xl py-2.5 text-sm font-medium text-[#18191C] hover:bg-gray-50 transition-colors">
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Sign up with Google
      </button>
      <p className="text-sm text-[#767F8C] text-center mt-5">
        Do you already have an account?{" "}
        <Link href="/login" className="text-[#0A65CC] font-semibold hover:underline">Login</Link>
      </p>
    </>
  )
}

// ─── Step 2: Location ─────────────────────────────────────────────────────────

function Step2({ onNext, onSkip }) {
  const [location, setLocation] = useState("")
  const [telework, setTelework] = useState(true)
  const [postal, setPostal] = useState("")

  return (
    <>
      <h1 className="text-2xl font-bold text-[#18191C] mb-2">What is your location?</h1>
      <p className="text-sm text-[#767F8C] mb-7">We use this to match you nearby offers.</p>
      <form className="space-y-5" onSubmit={e => { e.preventDefault(); onNext() }}>
        <FloatInput label="Location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter your location" />
        <label className="flex items-center gap-2 cursor-pointer -mt-2">
          <input
            type="checkbox"
            checked={telework}
            onChange={e => setTelework(e.target.checked)}
            className="w-4 h-4 accent-[#0A65CC]"
          />
          <span className="text-sm text-[#374151]">I am interested in Teleworking</span>
        </label>
        <FloatInput label="Postal code" value={postal} onChange={e => setPostal(e.target.value)} placeholder="Enter your Postal code" />
        <button type="submit" className="w-full bg-[#0A65CC] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#085BBA] transition-colors">
          Continue
        </button>
      </form>
      <button onClick={onSkip} className="w-full text-sm text-[#767F8C] hover:text-[#18191C] mt-3 py-1 transition-colors">
        Skip
      </button>
    </>
  )
}

// ─── Step 3: Salary ───────────────────────────────────────────────────────────

function Step3({ onNext, onSkip }) {
  const [salary, setSalary] = useState("")
  const [period, setPeriod] = useState("")

  return (
    <>
      <h1 className="text-2xl font-bold text-[#18191C] mb-2 leading-tight">How much is the minimum salary You want?</h1>
      <p className="text-sm text-[#767F8C] mb-7 leading-relaxed">
        We use this to match you nearby offers that approximately pay this amount or more
      </p>
      <form className="space-y-5" onSubmit={e => { e.preventDefault(); onNext() }}>
        <div>
          <FloatInput label="Minimum Salary Amount" value={salary} onChange={e => setSalary(e.target.value)} placeholder="Enter Minimum Salary Amount" />
          <p className="text-[11px] text-[#767F8C] mt-1.5 flex items-center gap-1">
            <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 text-gray-400 shrink-0"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M8 5v1m0 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Amount is by Euro
          </p>
        </div>
        <FloatInput label="Payment Period" value={period} onChange={e => setPeriod(e.target.value)} placeholder="Enter Payment Period" />
        <button type="submit" className="w-full bg-[#0A65CC] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#085BBA] transition-colors">
          Continue
        </button>
      </form>
      <button onClick={onSkip} className="w-full text-sm text-[#767F8C] hover:text-[#18191C] mt-3 py-1 transition-colors">
        Skip
      </button>
    </>
  )
}

// ─── Step 4: Upload Resume ────────────────────────────────────────────────────

function Step4({ onFinish, onSkip }) {
  const [uploaded, setUploaded] = useState(null)
  const fileRef = useRef(null)

  function handleFile(e) {
    const f = e.target.files?.[0]
    if (f) setUploaded(f.name)
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-[#18191C] mb-2">Upload your resume</h1>
      <p className="text-sm text-[#767F8C] mb-7 leading-relaxed">
        Upload your resume to find the best job opportunities based on your experience.
      </p>
      <div className="mb-5">
        <p className="text-sm font-semibold text-[#18191C] text-center mb-1">Upload your resume</p>
        <p className="text-xs text-[#767F8C] text-center mb-4">You can attach a separate resume file here.</p>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full border-2 border-dashed border-gray-300 rounded-xl py-8 flex flex-col items-center gap-2 hover:border-[#0A65CC] transition-colors group"
        >
          <Upload size={28} className="text-[#0A65CC]" />
          <p className="text-xs text-[#767F8C]">Drag & Drop or Choose file</p>
          <p className="text-[11px] text-gray-400">To upload PDF MAX 10 MB.</p>
        </button>
        <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
        {uploaded && <p className="text-xs text-green-600 mt-2 text-center">✓ {uploaded}</p>}
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="mt-3 w-full border border-[#0A65CC] text-[#0A65CC] rounded-xl py-2.5 text-sm font-semibold hover:bg-blue-50 transition-colors"
        >
          Upload resume
        </button>
      </div>
      <button
        onClick={onFinish}
        className="w-full bg-[#0A65CC] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#085BBA] transition-colors"
      >
        Finish Up
      </button>
      <button onClick={onSkip} className="w-full text-sm text-[#767F8C] hover:text-[#18191C] mt-3 py-1 transition-colors">
        Skip
      </button>
    </>
  )
}

// ─── Register page (multi-step) ───────────────────────────────────────────────

export default function RegisterPage() {
  const [step, setStep] = useState(1)

  return (
    <AuthLayout step={step} totalSteps={4} testimonialIndex={step - 1}>
      {step === 1 && <Step1 onNext={() => setStep(2)} />}
      {step === 2 && <Step2 onNext={() => setStep(3)} onSkip={() => setStep(3)} />}
      {step === 3 && <Step3 onNext={() => setStep(4)} onSkip={() => setStep(4)} />}
      {step === 4 && (
        <Step4
          onFinish={() => { window.location.href = "/verify" }}
          onSkip={() => { window.location.href = "/verify" }}
        />
      )}
    </AuthLayout>
  )
}
