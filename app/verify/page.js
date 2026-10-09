"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import AuthLayout from "@/components/Auth/AuthLayout"

function OtpInput({ onComplete }) {
  const [otp, setOtp] = useState(["", "", "", ""])
  const refs = [useRef(), useRef(), useRef(), useRef()]

  function handleChange(i, val) {
    const v = val.replace(/\D/, "").slice(-1)
    const next = [...otp]
    next[i] = v
    setOtp(next)
    if (v && i < 3) refs[i + 1].current?.focus()
    if (next.every(c => c)) onComplete(next.join(""))
  }

  function handleKeyDown(i, e) {
    if (e.key === "Backspace" && !otp[i] && i > 0) refs[i - 1].current?.focus()
  }

  return (
    <div className="flex gap-3 justify-center my-6">
      {otp.map((val, i) => (
        <input
          key={i}
          ref={refs[i]}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={val}
          onChange={e => handleChange(i, e.target.value)}
          onKeyDown={e => handleKeyDown(i, e)}
          className="w-14 h-14 rounded-xl border-2 border-gray-200 text-center text-lg font-bold text-[#18191C] focus:outline-none focus:border-[#0A65CC] transition-colors"
        />
      ))}
    </div>
  )
}

function Countdown() {
  const [seconds, setSeconds] = useState(299)

  useEffect(() => {
    const t = setInterval(() => setSeconds(s => s > 0 ? s - 1 : 0), 1000)
    return () => clearInterval(t)
  }, [])

  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return (
    <span className="text-[#0A65CC] font-semibold">
      {m}:{String(s).padStart(2, "0")}
    </span>
  )
}

export default function VerifyPage() {
  const [complete, setComplete] = useState(false)

  return (
    <AuthLayout testimonialIndex={4}>
      <p className="text-sm text-[#767F8C] text-center -mt-4 mb-6">
        Are you Employer?{" "}
        <Link href="/" className="text-[#0A65CC] font-semibold hover:underline">Click Here</Link>
      </p>

      <h1 className="text-2xl font-bold text-[#18191C] mb-3">Verify Your Email Address</h1>
      <p className="text-sm text-[#767F8C] leading-relaxed mb-2">
        We've sent a verification code to your email. Please enter the code in the box below to verify your account.
      </p>

      <OtpInput onComplete={() => setComplete(true)} />

      <p className="text-sm text-[#767F8C] text-center mb-6">
        Your code will expire in <Countdown />
      </p>

      <button
        disabled={!complete}
        className={`w-full rounded-xl py-3 text-sm font-semibold transition-colors ${
          complete
            ? "bg-[#0A65CC] text-white hover:bg-[#085BBA]"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        Verify
      </button>

      <p className="text-sm text-[#767F8C] text-center mt-5">
        Didn't receive the code?{" "}
        <button className="text-[#0A65CC] font-semibold hover:underline">Resend</button>
      </p>
    </AuthLayout>
  )
}
