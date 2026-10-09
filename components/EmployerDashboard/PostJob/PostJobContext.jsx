"use client"

import { createContext, useContext, useState } from "react"

const initialData = {
  jobTitle: "User Interface Designer (UI Designer)",
  location: "European union",
  employmentTypeLabel: "Part Time",
  jobCategory: "UX Designer",
  organizationalLevel: "Specialist",
  organizationIndustry: "",
  employmentTypes: ["Full-time", "Remote"],
  country: "Iran",
  city: "Tehran",
  locationChips: ["Tehranciran"],
  minSalary: "5000$",
  displaySalary: true,
  benefits: ["Promotion Opportunity", "Insurance"],
  minAge: "21 years old",
  maxAge: "",
  ageChips: ["21 years old"],
  gender: ["Female"],
  workExperience: ["Less than 1 year"],
  experienceNote: true,
  acceptInterns: false,
  completionRequirements: ["Hiring individuals with disabilities is possible"],
  fieldOfStudy: "UI/UX",
  educationalLevel: "Information Technology,Bacholars",
  languages: [{ lang: "English", level: "Advance" }],
  software: [{ field: "Graphic Software", level: "junior" }],
  communicationSkills: ["Collaboration Skill", "Time management"],
  workingHours: "Saturday to Wendsday 12 AM to 18 PM",
  businessTrips: "One day a Month",
  jobDescription: "We dedicated to innovation and excellence. Our mission is to provide high-quality products and services that enhance everyday life. With a team of passionate experts, we continuously push the boundaries of creativity and technology. Customer satisfaction is at the heart of everything we do. We believe in sustainability, efficiency, and delivering outstanding value. Join us as we shape the future together.\"",
}

const PostJobContext = createContext(null)

export function PostJobProvider({ children }) {
  const [data, setData] = useState(initialData)
  const update = (key, val) => setData(d => ({ ...d, [key]: val }))
  return <PostJobContext.Provider value={{ data, update }}>{children}</PostJobContext.Provider>
}

export function usePostJob() {
  return useContext(PostJobContext)
}
