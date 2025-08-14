import Link from "next/link"
import { ChevronRight, FileText, Download, Youtube } from "lucide-react"

export default function ComputerScienceClass12Page() {
  // Sample chapter data
  const chapters = [
    { id: 1, title: "Python Revision Tour 1", slug: "python-revision-tour-1" },
    { id: 2, title: "Python Revision Tour 2", slug: "python-revision-tour-2" },
    { id: 3, title: "Working With Functions", slug: "working-with-functions" },
    { id: 4, title: "Data File Handling", slug: "data-file-handling" },
    { id: 5, title: "Satck-Data Structure", slug: "stack-data-structure" },
    { id: 6, title: "Relational Database and MySQL", slug: "relational-database-and-mysql" },
    { id: 7, title: "Interface Python With MYSQL", slug: "interface-python-with-mysql" },
    { id: 8, title: "Computer Networks", slug: "computer-networks" },
    { id: 9, title: "Using Python Libraries", slug: "using-python-libraries" },
  ]

  // Sample related resources
  const relatedResources = [
    { id: 1, title: "Python Basics Tutorial", type: "video", url: "https://youtube.com/@pythontyro4579" },
    { id: 2, title: "Python Cheatsheet", type: "pdf", url: "/resources/python-cheatsheet.pdf" },
    { id: 3, title: "Lists and Tuples Tutorial", type: "video", url: "https://youtube.com/@pythontyro4579" },
    { id: 4, title: "File Handling Examples", type: "pdf", url: "/resources/file-handling-examples.pdf" },
    { id: 5, title: "Practice MCQs", type: "link", url: "/mcqs/computer-science/class-11" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#1f888f]">
              Home
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <Link href="/computer-science" className="hover:text-[#1f888f]">
              Computer Science
            </Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-[#1f888f] font-medium">Class 12</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Sidebar - TOC */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <h2 className="text-lg font-bold mb-4 text-[#1f888f] border-b pb-2">Chapters</h2>
              <ul className="space-y-2">
                {chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <Link
                      href={`/computer-science/class-12/${chapter.slug}`}
                      className="flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-2 rounded-md transition-colors"
                    >
                      <span className="mr-2 text-sm font-medium">{chapter.id}.</span>
                      {chapter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Computer Science - Class 12</h1>

              <div className="prose max-w-none">
                <p className="mb-4">
                  Welcome to the Computer Science (083) resources for CBSE Class 12. This section provides comprehensive
                  study materials, notes, programs, and practice questions aligned with the latest CBSE curriculum.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4 text-[#1f888f]">Course Overview</h2>
                <p className="mb-4">
                  The CBSE Class 12 Computer Science curriculum introduces students to the fundamental concepts of
                  computer science and programming using Python. The course covers Python programming basics, data
                  structures, file handling, and computer networks,Mysql.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4 text-[#1f888f]">Key Topics</h2>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Introduction to Computer Systems and Computing</li>
                  <li>Python Programming Language Fundamentals</li>
                  <li>Flow of Control (Conditional and Iterative Statements)</li>
                  <li>Functions and Modules</li>
                  <li>Data Structures (Lists, Tuples, Dictionaries, Sets)</li>
                  <li>String Manipulation</li>
                  <li>File Handling in Python</li>
                  <li>Computer Networks and Internet</li>
                </ul>

                <h2 className="text-xl font-bold mt-8 mb-4 text-[#1f888f]">How to Use These Resources</h2>
                <p className="mb-4">
                  Each chapter includes comprehensive notes, example programs, practice questions, and downloadable
                  resources. Click on any chapter in the sidebar to access its content. You can also find related video
                  tutorials and additional resources in the right sidebar.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <h3 className="font-bold text-yellow-800">Important Note</h3>
                  <p className="text-yellow-800">
                    Make sure to practice all the example programs and complete the exercises to gain proficiency in
                    Python programming. Regular practice is key to mastering programming concepts.
                  </p>
                </div>

                <h2 className="text-xl font-bold mt-8 mb-4 text-[#1f888f]">Sample Program</h2>
                <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto">
                  <pre>
                    <code>
                      # A simple Python program to demonstrate list operations numbers = [10, 20, 30, 40, 50] #
                      Accessing elements print("First element:", numbers[0]) print("Last element:", numbers[-1]) #
                      Slicing print("First three elements:", numbers[:3]) # Adding elements numbers.append(60)
                      print("After append:", numbers) # Inserting elements numbers.insert(2, 25) print("After insert:",
                      numbers) # Removing elements numbers.remove(25) print("After remove:", numbers) # Sorting
                      numbers.sort(reverse=True) print("After sorting in descending order:", numbers)
                    </code>
                  </pre>
                </div>

                <h2 className="text-xl font-bold mt-8 mb-4 text-[#1f888f]">Practical Exam Preparation</h2>
                <p className="mb-4">
                  The practical examination for Class 11 Computer Science tests your programming skills and
                  understanding of Python concepts. We provide comprehensive practical exam preparation resources,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Sample practical questions with solutions</li>
                  <li>Step-by-step guides for common programming tasks</li>
                  <li>Tips for efficient coding and debugging</li>
                  <li>Mock practical exams to practice under timed conditions</li>
                </ul>

                <div className="flex justify-center my-8">
                  <Link
                    href="/computer-science/class-11/python-fundamentals"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Start Learning Python
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Related Resources */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <h2 className="text-lg font-bold mb-4 text-[#1f888f] border-b pb-2">Related Resources</h2>
              <ul className="space-y-3">
                {relatedResources.map((resource) => (
                  <li key={resource.id}>
                    <Link
                      href={resource.url}
                      className="flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-2 rounded-md transition-colors"
                      target={resource.type === "video" ? "_blank" : undefined}
                    >
                      {resource.type === "video" && <Youtube size={16} className="mr-2 text-red-600" />}
                      {resource.type === "pdf" && <FileText size={16} className="mr-2 text-blue-600" />}
                      {resource.type === "link" && <ChevronRight size={16} className="mr-2 text-green-600" />}
                      <span>{resource.title}</span>
                      {resource.type === "pdf" && <Download size={16} className="ml-auto text-gray-400" />}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-3 bg-[#b80877]/10 rounded-md">
                <h3 className="font-medium text-[#b80877] mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Join our tuition classes for personalized guidance and doubt clearing.
                </p>
                <Link href="/tuition" className="text-sm text-[#b80877] font-medium hover:underline">
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
