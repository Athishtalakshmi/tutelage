import Link from "next/link"
import { ChevronRight, Book, Code, Database, BotIcon as Robot } from "lucide-react"

export default function ITPage() {
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
            <span className="text-[#1f888f] font-medium">Information Technology (402)</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4 flex-1">
        <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Information Technology (402)</h1>

        <p className="mb-8 text-gray-600 max-w-4xl">
          Welcome to the Information Technology (402) resources section. Here you'll find comprehensive study materials,
          notes, practical programs, and practice questions for CBSE Class 9 and Class 10 IT curriculum. Our resources
          are designed to help you understand the concepts clearly and prepare effectively for your examinations.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Class 9 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#1f888f] to-[#1f888f]/80 py-4 px-6">
              <h2 className="text-xl text-white font-bold">Class 9 - IT (402)</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                The Class 9 IT curriculum introduces students to the basics of information technology, computer
                applications, and digital literacy. It covers fundamental concepts that form the foundation for more
                advanced topics in Class 10.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-bold text-[#1f888f] mb-2">Theory Topics</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Computer Basics</li>
                    <li>• Office Tools</li>
                    <li>• Communication Skills</li>
                    <li>• Digital Documentation</li>
                    <li>• Electronic Spreadsheets</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-bold text-[#1f888f] mb-2">Practical Skills</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• MS Word/LibreOffice Writer</li>
                    <li>• MS Excel/LibreOffice Calc</li>
                    <li>• Email and Internet</li>
                    <li>• Digital Presentations</li>
                    <li>• Basic HTML</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="/it/class-9"
                  className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  Explore Class 9 Resources
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Class 10 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#b80877] to-[#b80877]/80 py-4 px-6">
              <h2 className="text-xl text-white font-bold">Class 10 - IT (402)</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                The Class 10 IT curriculum builds upon the concepts learned in Class 9 and introduces more advanced
                topics like web applications, database management, and programming basics. It prepares students for
                higher studies in computer science and IT.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-bold text-[#b80877] mb-2">Theory Topics</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Digital Society</li>
                    <li>• Web Applications</li>
                    <li>• Database Management</li>
                    <li>• Programming Basics</li>
                    <li>• IT Applications</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-bold text-[#b80877] mb-2">Practical Skills</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Advanced Spreadsheets</li>
                    <li>• HTML and CSS</li>
                    <li>• Database Creation</li>
                    <li>• Simple SQL Queries</li>
                    <li>• Basic Programming</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="/it/class-10"
                  className="bg-[#b80877] hover:bg-[#b80877]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  Explore Class 10 Resources
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <h2 className="text-xl font-bold mb-6 text-[#1f888f]">Our IT Resources Include</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-[#1f888f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Book className="text-[#1f888f]" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Comprehensive Notes</h3>
            <p className="text-gray-600 text-sm">
              Detailed chapter-wise notes covering all topics in the CBSE IT curriculum.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-[#b80877]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-[#b80877]" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Practical Programs</h3>
            <p className="text-gray-600 text-sm">
              Step-by-step practical programs with explanations for hands-on learning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-[#1f888f]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="text-[#1f888f]" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">MCQs & Practice Questions</h3>
            <p className="text-gray-600 text-sm">
              Extensive collection of MCQs and practice questions for exam preparation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-[#b80877]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Robot className="text-[#b80877]" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Video Tutorials</h3>
            <p className="text-gray-600 text-sm">Video explanations of complex topics for better understanding.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#1f888f] to-[#b80877] rounded-lg shadow-md p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Excel in IT?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join our tuition classes for personalized guidance from experienced teachers. Get help with theory concepts,
            practical programs, and exam preparation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tuition"
              className="bg-white text-[#b80877] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Join Tuition Classes
            </Link>
            <Link
              href="/mcqs/it"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Practice MCQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
