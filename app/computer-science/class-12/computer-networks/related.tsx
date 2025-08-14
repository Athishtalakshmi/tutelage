import Link from "next/link"
import { FileText, Download, Video, BookOpen } from "lucide-react"

export default function Related() {
  return (
    <div className="space-y-4">
      {/* Related Topics */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold mb-4 text-[#1f888f]">Related Topics</h3>
        <div className="space-y-3">
          <Link
            href="/computer-science/class-12/data-file-handling"
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <FileText size={16} className="text-[#1f888f]" />
            <span className="text-sm">Data File Handling</span>
          </Link>
          <Link
            href="/computer-science/class-12/relational-database-and-mysql"
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <FileText size={16} className="text-[#1f888f]" />
            <span className="text-sm">Database Management</span>
          </Link>
          <Link
            href="/computer-science/class-12/interface-python-with-mysql"
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <FileText size={16} className="text-[#1f888f]" />
            <span className="text-sm">Python MySQL Interface</span>
          </Link>
        </div>
      </div>

      {/* Study Resources */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold mb-4 text-[#1f888f]">Study Resources</h3>
        <div className="space-y-3">
          <Link
            href="/mcqs/computer-science/class-12"
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <BookOpen size={16} className="text-[#1f888f]" />
            <span className="text-sm">Practice MCQs</span>
          </Link>
          <Link
            href="/computer-science/practical/class-12"
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <Video size={16} className="text-[#1f888f]" />
            <span className="text-sm">Practical Programs</span>
          </Link>
          <Link
            href="/textbook-solution/ncert"
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <Download size={16} className="text-[#1f888f]" />
            <span className="text-sm">NCERT Solutions</span>
          </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-bold mb-4 text-[#1f888f]">Quick Access</h3>
        <div className="space-y-3">
          <Link
            href="/computer-science/class-11"
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <FileText size={16} className="text-[#1f888f]" />
            <span className="text-sm">Class 11 CS</span>
          </Link>
          <Link
            href="/informatics-practices/class-12"
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <FileText size={16} className="text-[#1f888f]" />
            <span className="text-sm">Class 12 IP</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
