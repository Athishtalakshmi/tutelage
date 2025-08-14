import Link from "next/link"
import { Book, Code, Database, BotIcon as Robot, Youtube } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-[#1f888f]/10 to-[#b80877]/10 rounded-xl p-8 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4 text-[#1f888f]">Tutelage</h1>
              <p className="text-xl mb-6">
                Comprehensive CBSE resources for Computer Science, Informatics Practices, IT, and AI
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/computer-science"
                  className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Computer Science Resources
                </Link>
                <Link
                  href="/tuition"
                  className="bg-[#b80877] hover:bg-[#b80877]/90 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Join Our Tuition Classes
                </Link>
              </div>
            </div>
          </section>

          {/* Featured Subjects */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#1f888f] text-center">Featured Subjects</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-3 bg-[#1f888f]"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#1f888f]/10 rounded-full flex items-center justify-center mb-4">
                    <Code size={24} className="text-[#1f888f]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Computer Science</h3>
                  <p className="text-gray-600 mb-4">
                    Python programming, data structures, file handling, and more for Class 11 & 12.
                  </p>
                  <Link href="/computer-science" className="text-[#1f888f] font-medium hover:underline">
                    Explore Resources →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-3 bg-[#b80877]"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#b80877]/10 rounded-full flex items-center justify-center mb-4">
                    <Database size={24} className="text-[#b80877]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Informatics Practices</h3>
                  <p className="text-gray-600 mb-4">
                    Pandas, data analysis, SQL, and database connectivity for Class 11 & 12.
                  </p>
                  <Link href="/informatics-practices" className="text-[#b80877] font-medium hover:underline">
                    Explore Resources →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-3 bg-[#1f888f]"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#1f888f]/10 rounded-full flex items-center justify-center mb-4">
                    <Book size={24} className="text-[#1f888f]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Information Technology</h3>
                  <p className="text-gray-600 mb-4">
                    Office applications, web development, and digital skills for Class 9 & 10.
                  </p>
                  <Link href="/it" className="text-[#1f888f] font-medium hover:underline">
                    Explore Resources →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-3 bg-[#b80877]"></div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#b80877]/10 rounded-full flex items-center justify-center mb-4">
                    <Robot size={24} className="text-[#b80877]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
                  <p className="text-gray-600 mb-4">
                    AI concepts, ethics, and practical applications for Class 9 & 10.
                  </p>
                  <Link href="/ai" className="text-[#b80877] font-medium hover:underline">
                    Explore Resources →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#1f888f] text-center">Latest Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#1f888f]/10 text-[#1f888f] text-xs font-medium rounded-full mb-4">
                    Computer Science
                  </span>
                  <h3 className="text-xl font-bold mb-2">Python Programming Guide</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive guide to Python programming for CBSE Class 11 students.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">May 5, 2025</span>
                    <Link
                      href="/computer-science/class-11/python-guide"
                      className="text-[#1f888f] font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#b80877]/10 text-[#b80877] text-xs font-medium rounded-full mb-4">
                    Informatics Practices
                  </span>
                  <h3 className="text-xl font-bold mb-2">Data Analysis with Pandas</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to analyze data efficiently using Pandas library in Python.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">May 3, 2025</span>
                    <Link
                      href="/informatics-practices/class-12/pandas-analysis"
                      className="text-[#b80877] font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#1f888f]/10 text-[#1f888f] text-xs font-medium rounded-full mb-4">
                    MCQs
                  </span>
                  <h3 className="text-xl font-bold mb-2">Computer Science Practice Tests</h3>
                  <p className="text-gray-600 mb-4">Test your knowledge with our comprehensive MCQ practice tests.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">May 1, 2025</span>
                    <Link href="/mcqs/computer-science" className="text-[#1f888f] font-medium hover:underline">
                      Take Test →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* YouTube Channel */}
          <section className="mb-12 bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-[#b80877]">Subscribe to Our YouTube Channel</h2>
                <p className="text-gray-600 mb-6">
                  Access free video tutorials, exam tips, and practical demonstrations for all CBSE computer subjects.
                </p>
                <Link
                  href="https://www.youtube.com/@pythontyro4579"
                  target="_blank"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors"
                >
                  <Youtube size={20} />
                  Subscribe Now
                </Link>
              </div>
              <div className="md:w-1/2 bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Youtube size={48} className="mx-auto text-red-600 mb-2" />
                  <p className="text-gray-600">YouTube Channel Preview</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tuition Registration */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-[#1f888f] to-[#b80877] rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Join Our Tuition Classes</h2>
                  <p className="mb-6">
                    Get personalized guidance from experienced teachers for CBSE Computer Science, Informatics
                    Practices, IT, and AI subjects.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Small batch sizes for personalized attention
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Regular practice tests and assignments
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Doubt clearing sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Practical exam preparation
                    </li>
                  </ul>
                  <Link
                    href="/tuition"
                    className="bg-white text-[#b80877] px-6 py-3 rounded-md inline-block font-medium hover:bg-gray-100 transition-colors"
                  >
                    Register for Demo Class
                  </Link>
                </div>
                <div className="bg-white p-8">
                  <h3 className="text-xl font-bold mb-4 text-[#1f888f]">Student Testimonials</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="italic text-gray-600 mb-2">
                        "The programming concepts were explained in a very simple and effective manner. Highly
                        recommended!"
                      </p>
                      <p className="font-medium">- Rahul S., Class 12</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="italic text-gray-600 mb-2">
                        "I was struggling with Python programming, but after joining these classes, I've gained
                        confidence and improved my scores."
                      </p>
                      <p className="font-medium">- Priya M., Class 11</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="italic text-gray-600 mb-2">
                        "The practical sessions were very helpful in understanding database connectivity concepts."
                      </p>
                      <p className="font-medium">- Amit K., Class 12</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
