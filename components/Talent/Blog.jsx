import Link from "next/link"

const posts = [
  {
    id: 1,
    categories: ["Job Market", "Career"],
    title: "When Should You Change Your Job?",
    excerpt:
      "A professional resume increases your chances of getting hired. Learn about formatting, highlighting the right format, highlighting skills, and writing concepts. Following these principles makes it more effective.",
    image: null,
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    categories: ["Freelancing", "Skills"],
    title: "Standing Out in Job Market",
    excerpt:
      "In a competitive job market, showcasing unique skills, tailoring your resume, and building a strong online presence can set you apart. This article explores strategies to highlight your strengths and increase an.",
    image: null,
    bgColor: "bg-orange-100",
  },
  {
    id: 3,
    categories: ["Career", "Interview"],
    title: "Skills Employers Seek",
    excerpt:
      "Employers value a combination of technical expertise and soft skills. This article highlights key skills like communication, problem-solving, and adaptability that make candidates more attractive to employers in any i.",
    image: null,
    bgColor: "bg-green-100",
  },
]

const categoryColors = {
  "Job Market": "bg-blue-50 text-blue-600",
  Career: "bg-purple-50 text-purple-600",
  Freelancing: "bg-orange-50 text-orange-600",
  Skills: "bg-yellow-50 text-yellow-600",
  Interview: "bg-green-50 text-green-600",
}

export default function Blog() {
  return (
    <section className="bg-[#F1F2F4] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#18191C] sm:text-3xl">Our Blog: Your Path to Career Success</h2>
            <p className="mt-1 text-sm text-[#767F8C]">Stay updated with the latest trends in hiring and career success</p>
          </div>
          <Link href="#" className="hidden text-sm font-semibold text-[#0A65CC] hover:underline sm:block">
            More &rsaquo;
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} href="#" className="group overflow-hidden rounded-xl border border-[#E4E5E8] bg-white transition-shadow hover:shadow-md">
              <div className={`h-44 ${post.bgColor} flex items-center justify-center`}>
                <div className="size-16 rounded-full bg-white/40" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((cat) => (
                    <span key={cat} className={`rounded px-2 py-0.5 text-[11px] font-semibold ${categoryColors[cat] ?? "bg-gray-100 text-gray-600"}`}>
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-base font-semibold text-[#18191C] group-hover:text-[#0A65CC]">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#767F8C] line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
