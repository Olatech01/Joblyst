"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
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

// ─── Step 1: Enter email ──────────────────────────────────────────────────────

function EnterEmail({ onSend }) {
  const [email, setEmail] = useState("")

  return (
    <>
      <h1 className="text-2xl font-bold text-[#18191C] mb-2">Forgot your password?</h1>
      <p className="text-sm text-[#767F8C] mb-7 leading-relaxed">
        Enter your Joblin email below and we'll send you a link to reset it.
      </p>
      <form className="space-y-5" onSubmit={e => { e.preventDefault(); if (email) onSend(email) }}>
        <FloatInput
          label="Email Address"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder=""
          required
        />
        <button
          type="submit"
          className="w-full bg-[#0A65CC] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#085BBA] transition-colors"
        >
          Send Link
        </button>
      </form>
      <p className="text-sm text-[#767F8C] text-center mt-5">
        Remember your password?{" "}
        <Link href="/login" className="text-[#0A65CC] font-semibold hover:underline">Back to Login</Link>
      </p>
    </>
  )
}

// ─── Step 2: Email sent ───────────────────────────────────────────────────────

function EmailSent({ email, onNewPassword }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-[#18191C] mb-4">Forgot your password?</h1>
      <p className="text-sm text-[#767F8C] leading-relaxed text-center">
        We've sent an email to{" "}
        <span className="font-semibold text-[#18191C]">{email}</span>
        <br />
        Please check your inbox and follow instructions to reset your password.
      </p>
      <p className="text-sm text-[#767F8C] text-center mt-6">
        Didn't receive an email?{" "}
        <button onClick={onNewPassword} className="text-[#0A65CC] font-semibold hover:underline">
          Send again
        </button>
      </p>
    </>
  )
}

// ─── Step 3: New password ─────────────────────────────────────────────────────

function NewPassword({ email }) {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  return (
    <>
      <h1 className="text-2xl font-bold text-[#18191C] mb-2">Enter a new password</h1>
      <p className="text-sm text-[#767F8C] mb-7 leading-relaxed text-center">
        Enter the new password for the account{" "}
        <span className="font-semibold text-[#18191C]">{email}</span>
      </p>
      <form className="space-y-5" onSubmit={e => e.preventDefault()}>
        <FloatInput
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder=""
          required
        />
        <FloatInput
          label="Confirm Password"
          type="password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          placeholder=""
          required
        />
        <button
          type="submit"
          className="w-full bg-[#0A65CC] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#085BBA] transition-colors"
        >
          Save New Password
        </button>
      </form>
      <p className="text-sm text-[#767F8C] text-center mt-5">
        Not looking to change your password?{" "}
        <Link href="/login" className="text-[#0A65CC] font-semibold hover:underline">Back to Login</Link>
      </p>
    </>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")

  // testimonialIndex: 6=Cody Fisher, 7=Savannah Nguyen, 8=Robert Fox
  const testimonialIndex = step === 1 ? 6 : step === 2 ? 7 : 8

  return (
    <AuthLayout testimonialIndex={testimonialIndex}>
      {step === 1 && (
        <EnterEmail
          onSend={val => { setEmail(val); setStep(2) }}
        />
      )}
      {step === 2 && (
        <EmailSent
          email={email}
          onNewPassword={() => setStep(3)}
        />
      )}
      {step === 3 && <NewPassword email={email} />}
    </AuthLayout>
  )
}
