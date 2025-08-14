import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function NCERTSolutionPage() {
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
            <Link href="/textbook-solution" className="hover:text-[#1f888f]">
              Textbook Solution
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">NCERT Solution</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">NCERT Solutions</h1>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-bold mb-4 text-[#1f888f]">Content Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              We are currently working on comprehensive solutions for NCERT textbooks. Please check back later for
              detailed chapter-wise solutions.
            </p>
            <div className="w-24 h-1 bg-[#1f888f] mx-auto mb-6"></div>
            <p className="text-gray-600">
              In the meantime, you can explore our other resources for Computer Science, Informatics Practices, IT, and
              AI subjects.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
