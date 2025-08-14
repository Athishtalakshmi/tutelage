import type React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SubjectLayoutProps {
  subject: string
  subjectPath: string
  className: string
  title: string
  chapters: {
    id: number
    title: string
    slug: string
  }[]
  relatedResources: {
    id: number
    title: string
    type: string
    url: string
  }[]
  children: React.ReactNode
}

export default function SubjectLayout({
  subject,
  subjectPath,
  className,
  title,
  chapters,
  relatedResources,
  children,
}: SubjectLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#1f888f]">
              Home
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href={`/${subjectPath}`} className="hover:text-[#1f888f]">
              {subject}
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">{className}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Sidebar - TOC */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Chapters</h2>
              <ul className="space-y-1">
                {chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <Link
                      href={`/${subjectPath}/${className.toLowerCase()}/${chapter.slug}`}
                      className="flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm"
                    >
                      <span className="mr-1.5 text-xs font-medium">{chapter.id}.</span>
                      {chapter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-5">
              <h1 className="text-xl font-bold mb-4 text-[#1f888f]">{title}</h1>
              <div className="prose max-w-none text-sm">{children}</div>
            </div>
          </div>

          {/* Right Sidebar - Related Resources */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Related Resources</h2>
              <ul className="space-y-2">
                {relatedResources.map((resource) => (
                  <li key={resource.id}>
                    <Link
                      href={resource.url}
                      className="flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm"
                      target={resource.type === "video" ? "_blank" : undefined}
                    >
                      {resource.type === "video" && (
                        <svg className="w-4 h-4 mr-1.5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                      )}
                      {resource.type === "pdf" && (
                        <svg
                          className="w-4 h-4 mr-1.5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          ></path>
                        </svg>
                      )}
                      {resource.type === "link" && (
                        <svg
                          className="w-4 h-4 mr-1.5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      )}
                      <span>{resource.title}</span>
                      {resource.type === "pdf" && (
                        <svg
                          className="w-3 h-3 ml-auto text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          ></path>
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 p-3 bg-[#b80877]/10 rounded-md">
                <h3 className="font-medium text-[#b80877] mb-2 text-sm">Need Help?</h3>
                <p className="text-xs text-gray-600 mb-2">
                  Join our tuition classes for personalized guidance and doubt clearing.
                </p>
                <Link href="/tuition" className="text-xs text-[#b80877] font-medium hover:underline">
                  Register for Classes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
