"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Eleanor Pena",
    role: "Job Seeker",
    avatar: "https://i.pravatar.cc/48?img=47",
    quote: "Sandro taught me that fashion isn't just about clothes—it's about people, culture, and storytelling. The interview felt more like a conversation about vision and creativity than a test of experience. I left the process inspired.",
  },
  {
    name: "Leslie Alexander",
    role: "Job Seeker",
    avatar: "https://i.pravatar.cc/48?img=32",
    quote: "Interviewing at Canon was more than just a recruitment process—it was a genuine exchange. The structure was clear, the communication consistent, and above all, I felt like they were evaluating who I was as a person.",
  },
  {
    name: "Arlene McCoy",
    role: "Job Seeker",
    avatar: "https://i.pravatar.cc/48?img=25",
    quote: "From my first call with Sandro's HR team to the final interview, the process felt curated and intentional. Their thoughtful approach reflected the elegance of their brand. I left each conversation feeling more excited and inspired.",
  },
  {
    name: "Darrell Steward",
    role: "Job Seeker",
    avatar: "https://i.pravatar.cc/48?img=12",
    quote: "My application journey with Taint was one of the most thoughtful and human-centered experiences I've had in my career. The recruiters took the time to understand my motivations, asked insightful questions.",
  },
  {
    name: "Theresa Webb",
    role: "Job Seeker",
    avatar: "https://i.pravatar.cc/48?img=44",
    quote: "Canon's process reminded me that hiring isn't just about skills—it's about alignment. Each step was designed to uncover potential fit on multiple levels: culture, goals, mindset. That attention to detail made me feel seen and taken seriously as a candidate.",
  },
  {
    name: "Esther Howard",
    role: "Job Seeker",
    avatar: "https://i.pravatar.cc/48?img=39",
    quote: "What struck me most during my application process with Canon was the intentionality behind every step. Every communication was thoughtful. Every interviewer came prepared. And more than that, they wanted to understand not just what I could do.",
  },
  {
    name: "Cody Fisher",
    role: "Job Seeker",
    avatar: "https://i.pravatar.cc/48?img=60",
    quote: "The BMW interview process was incredibly thorough, but what stood out was the consistency in how every team member communicated the brand's vision. It gave me confidence that if I were to join.",
  },
  {
    name: "Savannah Nguyen",
    role: "Job Seeker",
    avatar: "https://i.pravatar.cc/48?img=48",
    quote: "At Canon, I felt like more than just a résumé. The team engaged with my ideas, asked thoughtful questions, and created a space for real dialogue. That level of respect and attention left a lasting impression—even before any offer was made.",
  },
  {
    name: "Robert Fox",
    role: "Job Seeker",
    avatar: "https://i.pravatar.cc/48?img=52",
    quote: "From the first recruiter message to the final round, Sandro's hiring process felt like an extension of their product—meticulously crafted and full of character. What I appreciated most was their curiosity.",
  },
]

export default function Testimonials({ index = 0 }) {
  const [active, setActive] = useState(index % testimonials.length)

  useEffect(() => {
    setActive(index % testimonials.length)
  }, [index])

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  const t = testimonials[active]

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 mx-4 mb-4">
      <div className="flex items-center gap-3 mb-3">
        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="text-sm font-semibold text-[#18191C]">{t.name}</p>
          <p className="text-xs text-[#767F8C]">{t.role}</p>
        </div>
      </div>
      <p className="text-sm text-[#374151] leading-relaxed">{t.quote}</p>
      <div className="flex items-center gap-1.5 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${i === active ? "bg-[#0A65CC] w-5" : "bg-gray-200 w-1.5"}`}
          />
        ))}
      </div>
    </div>
  )
}
