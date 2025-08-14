import Link from "next/link"

export default function ComputerSystemTOC() {
  const chapters = [
    { id: 1, title: "Computer System", slug: "computer-system" },
    { id: 2, title: "Python Fundamentals", slug: "python-fundamentals" },
    { id: 3, title: "Flow of Control", slug: "flow-of-control" },
    { id: 4, title: "Functions", slug: "functions" },
    { id: 5, title: "Lists and Tuples", slug: "lists-and-tuples" },
    { id: 6, title: "Dictionaries and Sets", slug: "dictionaries-and-sets" },
    { id: 7, title: "String Manipulation", slug: "string-manipulation" },
    { id: 8, title: "File Handling", slug: "file-handling" },
    { id: 9, title: "Data Visualization", slug: "data-visualization" },
    { id: 10, title: "Computer Networks", slug: "computer-networks" },
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
                chapter.slug === "flow-of-control" ? "bg-gray-50 text-[#b80877] font-medium" : ""
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
