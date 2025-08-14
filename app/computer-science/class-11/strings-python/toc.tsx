import Link from "next/link"

export default function StringsPythonTOC() {
  const chapters = [
    { id: 1, title: "Computer System Organization", slug: "computer-system-organization" },
    { id: 2, title: "Data Representation and Boolean Logic", slug: "data-representation-boolean-logic" },
    { id: 3, title: "Getting Started With Python", slug: "getting-started-with-python" },
    { id: 4, title: "Python Programming Fundamentals", slug: "python-fundamentals" },
    { id: 5, title: "Conditional And Looping Construct", slug: "conditional-looping-construct" },
    { id: 6, title: "Strings in Python", slug: "strings-python" },
    { id: 7, title: "Lists in Python", slug: "list-manipulation-python" },
    { id: 8, title: "Tuples and Dictionary", slug: "tuples-dictionary" },
    { id: 9, title: "Introduction to Python Modules", slug: "introduction-to-python-module" },
    { id: 10, title: "Society, Law and Ethics", slug: "society-law-ethics" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Chapters</h2>
      <ul className="space-y-1">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link
              href={`/computer-science/class-11/${chapter.slug}`}
              className={`flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm ${
                chapter.slug === "strings-python" ? "bg-gray-50 text-[#b80877] font-medium" : ""
              }`}
            >
              <span className="mr-1.5 text-xs font-medium">{chapter.id}.</span>
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
