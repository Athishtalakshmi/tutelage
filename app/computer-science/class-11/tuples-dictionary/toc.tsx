import Link from "next/link"

export default function TuplesDictionaryTOC() {
  const chapters = [
    { id: 1, title: "Computer System Organization", slug: "computer-system-organization" },
    { id: 2, title: "Data Representation and Boolean Logic", slug: "data-representation-boolean-logic" },
    { id: 3, title: "Getting Started With Python", slug: "getting-started-with-python" },
    { id: 4, title: "Python Programming Fundamentals", slug: "python-fundamentals" },
    { id: 5, title: "Conditional And Looping Construct", slug: "conditional-looping-construct" },
    { id: 6, title: "Strings in Python", slug: "strings-python" },
    { id: 7, title: "Lists in Python", slug: "list-manipulation-python" },
    { id: 8, title: "Tuples and Dictionary", slug: "tuples-dictionary" },
    { id: 9, title: "Introduction to Python Modules", slug: "introduction-to-python-modules" },
    { id: 10, title: "Society, Law and Ethics", slug: "society-law-ethics" },
  ]

  const currentChapterContent = [
    { id: "8.1", title: "Introduction to Tuples", anchor: "#tuples-intro" },
    { id: "8.2", title: "Tuple Creation and Types", anchor: "#tuple-creation" },
    { id: "8.3", title: "Accessing and Traversing Tuples", anchor: "#tuple-access" },
    { id: "8.4", title: "Tuple Operations", anchor: "#tuple-operations" },
    { id: "8.5", title: "Dictionary Introduction", anchor: "#dictionary-intro" },
    { id: "8.6", title: "Creating Dictionaries", anchor: "#dictionary-creation" },
    { id: "8.7", title: "Dictionary Operations", anchor: "#dictionary-operations" },
    { id: "8.8", title: "Dictionary Methods", anchor: "#dictionary-methods" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Chapters</h2>
      <ul className="space-y-1 mb-4">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link
              href={`/computer-science/class-11/${chapter.slug}`}
              className={`flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm ${
                chapter.slug === "tuples-dictionary" ? "bg-gray-50 text-[#b80877] font-medium" : ""
              }`}
            >
              <span className="mr-1.5 text-xs font-medium">{chapter.id}.</span>
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="border-t pt-3">
        <h3 className="text-sm font-bold mb-2 text-[#1f888f]">Current Chapter</h3>
        <ul className="space-y-1">
          {currentChapterContent.map((section) => (
            <li key={section.id}>
              <a
                href={section.anchor}
                className="flex items-center text-gray-600 hover:text-[#b80877] hover:bg-gray-50 p-1 rounded-md transition-colors text-xs"
              >
                <span className="mr-1.5 text-xs font-medium">{section.id}</span>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
