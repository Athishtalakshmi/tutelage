import Link from "next/link"
import { BookOpen, Code, FileText, Download, ExternalLink, Lightbulb, Users, HelpCircle, Youtube } from "lucide-react"

export default function Related() {
  return (
    <div className="space-y-6">
      {/* Related Programs */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-[#1f888f] mb-3 flex items-center gap-2">
          <Code size={18} />
          Related Programs
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/computer-science/practical/class-11/series-sum"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-[#1f888f] rounded-full"></span>
              Series Sum Calculation
            </Link>
          </li>
          <li>
            <Link
              href="/computer-science/practical/class-11/fibonacci-series"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-[#1f888f] rounded-full"></span>
              Fibonacci Series
            </Link>
          </li>
          <li>
            <Link
              href="/computer-science/practical/class-11/prime-composite"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-[#1f888f] rounded-full"></span>
              Prime Number Check
            </Link>
          </li>
          <li>
            <Link
              href="/computer-science/practical/class-11/number-checks"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-[#1f888f] rounded-full"></span>
              Number Properties
            </Link>
          </li>
        </ul>
      </div>

      {/* Theory Topics */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-[#1f888f] mb-3 flex items-center gap-2">
          <BookOpen size={18} />
          Theory Topics
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/computer-science/class-11/flow-of-control"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-[#b80877] rounded-full"></span>
              Flow of Control
            </Link>
          </li>
          <li>
            <Link
              href="/computer-science/class-11/python-fundamentals"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-[#b80877] rounded-full"></span>
              Python Fundamentals
            </Link>
          </li>
          <li>
            <Link
              href="/computer-science/class-11/strings-python"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-[#b80877] rounded-full"></span>
              Strings in Python
            </Link>
          </li>
        </ul>
      </div>

      {/* MCQs Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-[#1f888f] mb-3 flex items-center gap-2">
          <FileText size={18} />
          MCQs & Practice
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/mcqs/computer-science/class-11"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Class 11 CS MCQs
            </Link>
          </li>
          <li>
            <Link
              href="/mcqs/computer-science/class-11/loops"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Loops MCQs
            </Link>
          </li>
          <li>
            <Link
              href="/mcqs/computer-science/class-11/patterns"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Pattern MCQs
            </Link>
          </li>
        </ul>
      </div>

      {/* YouTube Video */}
      <div className="bg-red-50 rounded-lg shadow-md p-4 border border-red-200">
        <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
          <Youtube size={18} />
          Video Tutorial
        </h3>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-700 hover:text-red-900 flex items-center gap-2 text-sm"
        >
          <Youtube size={16} />
          Pattern Generation in Python - Complete Tutorial
        </a>
        <p className="text-xs text-red-600 mt-1">Learn nested loops and pattern creation</p>
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
        <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
          <Lightbulb size={18} />
          Quick Tips
        </h3>
        <ul className="space-y-2 text-sm text-blue-700">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Use nested loops: outer for rows, inner for columns</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>chr(65) = 'A', chr(66) = 'B' for alphabet patterns</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Use end='' to print in same line, print() for new line</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>range(5,0,-1) creates decreasing sequence</span>
          </li>
        </ul>
      </div>

      {/* Help Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
        <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
          <HelpCircle size={18} />
          Need Help?
        </h3>
        <ul className="space-y-2 text-sm text-purple-700">
          <li>
            <Link href="/tuition" className="flex items-center gap-2 hover:text-purple-900">
              <Users size={14} />
              Get Online Tuition
            </Link>
          </li>
          <li>
            <Link href="/contact" className="flex items-center gap-2 hover:text-purple-900">
              <HelpCircle size={14} />
              Ask Questions
            </Link>
          </li>
        </ul>
      </div>

      {/* Download Section */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
        <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
          <Download size={18} />
          Downloads
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <button className="text-green-700 hover:text-green-900 flex items-center gap-2">
              <FileText size={14} />
              Download PDF Notes
            </button>
          </li>
          <li>
            <button className="text-green-700 hover:text-green-900 flex items-center gap-2">
              <Code size={14} />
              Download Source Code
            </button>
          </li>
        </ul>
      </div>

      {/* External Resources */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-[#1f888f] mb-3 flex items-center gap-2">
          <ExternalLink size={18} />
          External Resources
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="https://docs.python.org/3/tutorial/controlflow.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <ExternalLink size={14} />
              Python Control Flow
            </a>
          </li>
          <li>
            <a
              href="https://docs.python.org/3/library/functions.html#chr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1f888f] flex items-center gap-2"
            >
              <ExternalLink size={14} />
              Python chr() Function
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
