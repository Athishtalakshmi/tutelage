import Link from "next/link"

export default function StackDataStructureTOC() {
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

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Chapters</h2>
      <ul className="space-y-1">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link
              href={`/computer-science/class-12/${chapter.slug}`}
              className={`flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm ${
                chapter.slug === "python-revision-tour-1" ? "bg-gray-50 text-[#b80877] font-medium" : ""
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
