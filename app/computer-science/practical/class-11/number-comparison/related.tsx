import Link from "next/link"
import { ExternalLink, FileText, BookOpen } from "lucide-react"

export default function Related() {
  return (
    <div className="space-y-4">
      {/* Related Programs */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-[#1f888f] mb-3">Related Programs</h3>
        <div className="space-y-2 text-sm">
          <Link
            href="/computer-science/practical/class-11/welcome-message"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1f888f] py-1"
          >
            <FileText size={14} />
            Welcome Message
          </Link>
          <Link
            href="/computer-science/practical/class-11/arithmetic-operations"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1f888f] py-1"
          >
            <FileText size={14} />
            Arithmetic Operations
          </Link>
          <Link
            href="/computer-science/practical/class-11/number-checks"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1f888f] py-1"
          >
            <FileText size={14} />
            Number Checks
          </Link>
        </div>
      </div>

      {/* Study Resources */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-[#1f888f] mb-3">Study Resources</h3>
        <div className="space-y-2 text-sm">
          <Link
            href="/computer-science/class-11/flow-of-control"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1f888f] py-1"
          >
            <BookOpen size={14} />
            Flow of Control
          </Link>
          <Link
            href="/computer-science/class-11/python-fundamentals"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1f888f] py-1"
          >
            <BookOpen size={14} />
            Python Fundamentals
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold text-[#1f888f] mb-3">Quick Links</h3>
        <div className="space-y-2 text-sm">
          <Link
            href="/mcqs/computer-science/class-11"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1f888f] py-1"
          >
            <ExternalLink size={14} />
            Class 11 MCQs
          </Link>
          <Link
            href="/computer-science/class-11"
            className="flex items-center gap-2 text-gray-600 hover:text-[#1f888f] py-1"
          >
            <ExternalLink size={14} />
            Class 11 Theory
          </Link>
        </div>
      </div>
    </div>
  )
}
