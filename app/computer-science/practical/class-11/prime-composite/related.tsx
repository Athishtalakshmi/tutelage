import Link from "next/link"
import { BookOpen, FileText, Download, ExternalLink, Lightbulb, HelpCircle } from "lucide-react"

export default function Related() {
  return (
    <div className="space-y-6">
      {/* Related Programs */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-[#1f888f] mb-3 flex items-center gap-2">
          <FileText size={18} />
          Related Programs
        </h3>
        <div className="space-y-2 text-sm">
          <Link
            href="/computer-science/practical/class-11/number-checks"
            className="block p-2 bg-blue-50 rounded hover:bg-blue-100 transition-colors"
          >
            <span className="font-medium text-blue-800">Number Properties</span>
            <p className="text-blue-600 text-xs">Perfect, Armstrong, Palindrome</p>
          </Link>
          <Link
            href="/computer-science/practical/class-11/fibonacci-series"
            className="block p-2 bg-green-50 rounded hover:bg-green-100 transition-colors"
          >
            <span className="font-medium text-green-800">Fibonacci Series</span>
            <p className="text-green-600 text-xs">Number sequence generation</p>
          </Link>
          <Link
            href="/computer-science/practical/class-11/gcd-lcm"
            className="block p-2 bg-purple-50 rounded hover:bg-purple-100 transition-colors"
          >
            <span className="font-medium text-purple-800">GCD & LCM</span>
            <p className="text-purple-600 text-xs">Mathematical operations</p>
          </Link>
          <Link
            href="/computer-science/practical/class-11/series-sum"
            className="block p-2 bg-orange-50 rounded hover:bg-orange-100 transition-colors"
          >
            <span className="font-medium text-orange-800">Series Sum</span>
            <p className="text-orange-600 text-xs">Mathematical series</p>
          </Link>
        </div>
      </div>

      {/* Theory Topics */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-[#1f888f] mb-3 flex items-center gap-2">
          <BookOpen size={18} />
          Theory Topics
        </h3>
        <div className="space-y-2 text-sm">
          <Link
            href="/computer-science/class-11/flow-of-control"
            className="block p-2 hover:bg-gray-50 rounded transition-colors"
          >
            <span className="font-medium">Flow of Control</span>
            <p className="text-gray-600 text-xs">Loops and conditions</p>
          </Link>
          <Link
            href="/computer-science/class-11/python-fundamentals"
            className="block p-2 hover:bg-gray-50 rounded transition-colors"
          >
            <span className="font-medium">Python Fundamentals</span>
            <p className="text-gray-600 text-xs">Basic programming concepts</p>
          </Link>
        </div>
      </div>

      {/* Study Resources */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-[#1f888f] mb-3 flex items-center gap-2">
          <Download size={18} />
          Study Resources
        </h3>
        <div className="space-y-2 text-sm">
          <Link
            href="/mcqs/computer-science/class-11"
            className="block p-2 bg-yellow-50 rounded hover:bg-yellow-100 transition-colors"
          >
            <span className="font-medium text-yellow-800">MCQs - Class 11</span>
            <p className="text-yellow-600 text-xs">Practice questions</p>
          </Link>
          <Link
            href="/textbook-solution/ncert"
            className="block p-2 bg-red-50 rounded hover:bg-red-100 transition-colors"
          >
            <span className="font-medium text-red-800">NCERT Solutions</span>
            <p className="text-red-600 text-xs">Textbook answers</p>
          </Link>
          <Link
            href="/textbook-solution/sumita-arora"
            className="block p-2 bg-indigo-50 rounded hover:bg-indigo-100 transition-colors"
          >
            <span className="font-medium text-indigo-800">Sumita Arora Solutions</span>
            <p className="text-indigo-600 text-xs">Reference book solutions</p>
          </Link>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-[#1f888f] mb-3 flex items-center gap-2">
          <Lightbulb size={18} />
          Quick Tips
        </h3>
        <div className="space-y-3 text-sm">
          <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
            <p className="font-medium text-blue-800">Prime Numbers</p>
            <p className="text-blue-600 text-xs">Only divisible by 1 and itself</p>
          </div>
          <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
            <p className="font-medium text-green-800">Optimization</p>
            <p className="text-green-600 text-xs">Check divisors up to √n only</p>
          </div>
          <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
            <p className="font-medium text-purple-800">For-Else</p>
            <p className="text-purple-600 text-xs">Else runs if no break occurs</p>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-[#1f888f] mb-3 flex items-center gap-2">
          <HelpCircle size={18} />
          Need Help?
        </h3>
        <div className="space-y-2 text-sm">
          <Link href="/contact" className="block p-2 hover:bg-gray-50 rounded transition-colors">
            <span className="font-medium">Contact Us</span>
            <p className="text-gray-600 text-xs">Get personalized help</p>
          </Link>
          <Link href="/tuition" className="block p-2 hover:bg-gray-50 rounded transition-colors">
            <span className="font-medium">Online Tuition</span>
            <p className="text-gray-600 text-xs">1-on-1 programming help</p>
          </Link>
        </div>
      </div>

      {/* External Resources */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-bold text-[#1f888f] mb-3 flex items-center gap-2">
          <ExternalLink size={18} />
          External Resources
        </h3>
        <div className="space-y-2 text-sm">
          <a
            href="https://docs.python.org/3/tutorial/controlflow.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 hover:bg-gray-50 rounded transition-colors"
          >
            <span className="font-medium">Python Control Flow</span>
            <p className="text-gray-600 text-xs">Official documentation</p>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Prime_number"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 hover:bg-gray-50 rounded transition-colors"
          >
            <span className="font-medium">Prime Numbers</span>
            <p className="text-gray-600 text-xs">Mathematical background</p>
          </a>
        </div>
      </div>
    </div>
  )
}
