import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function MCQsPage() {
  const subjects = [
    {
      id: 1,
      title: "Computer Science (083)",
      slug: "computer-science",
      classes: [
        { id: 1, title: "Class 11", slug: "class-11" },
        { id: 2, title: "Class 12", slug: "class-12" },
      ],
    },
    {
      id: 2,
      title: "Informatics Practices (065)",
      slug: "informatics-practices",
      classes: [
        { id: 1, title: "Class 11", slug: "class-11" },
        { id: 2, title: "Class 12", slug: "class-12" },
      ],
    },
    {
      id: 3,
      title: "Information Technology (402)",
      slug: "it",
      classes: [
        { id: 1, title: "Class 9", slug: "class-9" },
        { id: 2, title: "Class 10", slug: "class-10" },
      ],
    },
    {
      id: 4,
      title: "Artificial Intelligence (417)",
      slug: "ai",
      classes: [
        { id: 1, title: "Class 9", slug: "class-9" },
        { id: 2, title: "Class 10", slug: "class-10" },
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
            <span className="text-[#1f888f] font-medium">MCQs</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Multiple Choice Questions</h1>

          <p className="mb-6 text-gray-600">
            Practice with our comprehensive collection of Multiple Choice Questions (MCQs) for all CBSE computer
            subjects. These questions are designed to help you prepare for exams and test your understanding of key
            concepts.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {subjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-[#1f888f] to-[#b80877] py-3 px-4">
                  <h2 className="text-white font-bold">{subject.title}</h2>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {subject.classes.map((cls) => (
                      <li key={cls.id}>
                        <Link
                          href={`/mcqs/${subject.slug}/${cls.slug}`}
                          className="flex items-center justify-between text-gray-700 hover:text-[#b80877] p-2 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <span>{cls.title} MCQs</span>
                          <ChevronRight size={16} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <h3 className="font-bold text-yellow-800 mb-2">How to Use MCQs Effectively</h3>
            <ul className="list-disc pl-5 text-yellow-800 space-y-1">
              <li>Attempt all questions without looking at the answers first</li>
              <li>Review your answers and understand why certain options are correct or incorrect</li>
              <li>Revisit questions you answered incorrectly after studying the related concepts</li>
              <li>Use the MCQs as a diagnostic tool to identify areas that need more focus</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-[#1f888f]">Sample MCQ</h2>

            <div className="mb-6 p-4 border rounded-md">
              <p className="font-medium mb-3">Which of the following is not a valid data type in Python?</p>
              <form className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="opt1" name="question" className="mr-2" />
                  <label htmlFor="opt1">int</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="opt2" name="question" className="mr-2" />
                  <label htmlFor="opt2">float</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="opt3" name="question" className="mr-2" />
                  <label htmlFor="opt3">char</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="opt4" name="question" className="mr-2" />
                  <label htmlFor="opt4">bool</label>
                </div>
                <button
                  type="button"
                  className="mt-4 bg-[#1f888f] text-white px-4 py-2 rounded-md hover:bg-[#1f888f]/90 transition-colors"
                >
                  Check Answer
                </button>
              </form>
            </div>

            <div className="flex justify-center">
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
