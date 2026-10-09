"use client"

import { createContext, useContext, useState } from "react"

const initialData = {
  photo: "https://i.pravatar.cc/150?img=47",
  name: "Kathryn Murphy",
  jobTitle: "Product Designer",
  school: "THarward, Psychology",
  personal: {
    firstName: "Ana", lastName: "Amiri",
    email: "anaamiri@gmail.com", mobile: "+1 (555) 123-4567",
    maritalStatus: "Single", city: "Tehran",
    yearOfBirth: "2005", gender: "",
  },
  aboutMe: "Designed logos, branding materials, and marketing assets for startups. Created user-friendly UI/UX designs for websites and mobile applications. Developed social media graphics, advertisements, and promotional materials.",
  skills: ["UX/UI", "Product manager", "Web Developer"],
  workExperience: [
    { id: 1, title: "Product manager", company: "Google", from: "1998", to: "2009", stillWorking: false, description: "" },
  ],
  education: [
    { id: 1, degree: "Bachelor's degree of Psychology", school: "Shahid Beheshti University", city: "Tehran", startYear: "2022", endYear: "2024", stillStudying: false, description: "" },
    { id: 2, degree: "Master's degree of Psychology", school: "Shahid Beheshti University", city: "Tehran", startYear: "2024", endYear: "", stillStudying: true, description: "" },
  ],
  links: [
    { id: 1, label: "Dribble", color: "bg-pink-500" },
    { id: 2, label: "Instagram", color: "bg-purple-500" },
  ],
  languages: [
    { id: 1, name: "Arabic", level: "Beginner" },
    { id: 2, name: "French", level: "Beginner" },
  ],
  jobPreferences: {
    categories: ["Developer/300$", "Developer/300$"],
    contracts: ["Full-time"],
    seniority: ["Entry-level"],
  },
  jobBenefits: ["Promotion Opportunity", "Insurance"],
  uploadedResume: { name: "fateme-ghaemi-resume.pdf", size: "200 KB" },
}

export function computeQuality(d) {
  let score = 0
  if (d.photo) score += 10
  const p = d.personal
  if (p.firstName && p.lastName) score += 10
  if (p.email) score += 5
  if (p.mobile) score += 5
  if (p.maritalStatus) score += 3
  if (p.city) score += 3
  if (p.yearOfBirth) score += 3
  if (p.gender) score += 6
  if (d.aboutMe) score += 15
  if (d.skills.length) score += 10
  if (d.workExperience.length) score += 10
  if (d.education.length) score += 10
  if (d.links.length) score += 5
  if (d.languages.length) score += 5
  return Math.min(score, 100)
}

const ResumeContext = createContext(null)

export function ResumeProvider({ children }) {
  const [data, setData] = useState(initialData)
  const update = (key, value) => setData(prev => ({ ...prev, [key]: value }))
  return (
    <ResumeContext.Provider value={{ data, setData, update }}>
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  return useContext(ResumeContext)
}
