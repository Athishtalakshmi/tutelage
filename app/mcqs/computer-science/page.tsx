import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ComputerScienceMCQsPage() {
  const classes = [
    {
      id: 1,
      title: "Class 11",
      slug: "class-11",
      topics: [
        { id: 1, title: "Computer Overview", slug: "computer-overview" },
        { id: 2, title: "Python Fundamentals", slug: "python-fundamentals" },
        { id: 3, title: "Flow of Control", slug: "flow-of-control" },
        { id: 4, title: "Functions", slug: "functions" },
        { id: 5, title: "Lists and Tuples", slug: "lists-and-tuples" },
      ],
    },
    {
      id: 2,
      title: "Class 12",
      slug: "class-12",
      topics: [
        { id: 1, title: "Python Revision", slug: "python-revision" },
        { id: 2, title: "Functions", slug: "functions" },
        { id: 3, title: "File Handling", slug: "file-handling" },
        { id: 4, title: "SQL", slug: "sql" },
        { id: 5, title: "Database Connectivity", slug: "database-connectivity" },
      ],
    },
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
            <ChevronRight size={14} className="mx-1" />
            <Link href="/mcqs" className="hover:text-[#1f888f]">
              MCQs
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Computer Science</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Computer Science MCQs</h1>

          <p className="mb-6 text-gray-600">
            Practice with our comprehensive collection of Computer Science MCQs for CBSE Class 11 and Class 12. These
            questions are designed to help you prepare for exams and test your understanding of key programming
            concepts.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {classes.map((cls) => (
              <div key={cls.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-[#1f888f] to-[#b80877] py-3 px-4">
                  <h2 className="text-white font-bold">{cls.title}</h2>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {cls.topics.map((topic) => (
                      <li key={topic.id}>
                        <Link
                          href={`/mcqs/computer-science/${cls.slug}/${topic.slug}`}
                          className="flex items-center justify-between text-gray-700 hover:text-[#b80877] p-2 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <span>{topic.title} MCQs</span>
                          <ChevronRight size={16} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      href={`/mcqs/computer-science/${cls.slug}`}
                      className="flex items-center justify-center text-[#1f888f] font-medium hover:text-[#b80877] p-2 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      View All {cls.title} MCQs
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-[#1f888f]">MCQ Practice Tips</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#1f888f]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-bold text-[#1f888f]">1</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Regular Practice</h3>
                  <p className="text-gray-600 text-sm">
                    Set aside dedicated time each day to practice MCQs. Consistent practice helps reinforce concepts and
                    improves retention.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#b80877]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-bold text-[#b80877]">2</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Understand the Explanation</h3>
                  <p className="text-gray-600 text-sm">
                    Don't just memorize answers. Take time to understand the explanation for each question, especially
                    for the ones you got wrong.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#1f888f]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-bold text-[#1f888f]">3</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Track Your Progress</h3>
                  <p className="text-gray-600 text-sm">
                    Keep track of your scores and identify areas where you need improvement. Focus more on those topics.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Link
                href="/mcqs/computer-science/class-11"
                className="bg-[#b80877] hover:bg-[#b80877]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
              >
                Start Practicing
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
