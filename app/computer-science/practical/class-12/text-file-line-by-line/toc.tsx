import Link from "next/link"

export default function TOC() {
  const programs = [
    { id: 1, title: "Read text file line by line with # separator", slug: "text-file-line-by-line" },
    { id: 2, title: "File handling - Read and Write", slug: "file-read-write" },
    { id: 3, title: "Count words in a file", slug: "count-words-file" },
    { id: 4, title: "Search text in a file", slug: "search-text-file" },
    { id: 5, title: "Copy content from one file to another", slug: "copy-file-content" },
    { id: 6, title: "CSV file operations", slug: "csv-operations" },
    { id: 7, title: "Binary file handling", slug: "binary-file-handling" },
    { id: 8, title: "Stack implementation", slug: "stack-implementation" },
    { id: 9, title: "Queue implementation", slug: "queue-implementation" },
    { id: 10, title: "Database connectivity with MySQL", slug: "mysql-connectivity" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Class 12 Programs</h2>
      <ul className="space-y-1">
        {programs.map((program) => (
          <li key={program.id}>
            <Link
              href={`/computer-science/practical/class-12/${program.slug}`}
              className={`flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm ${
                program.slug === "text-file-line-by-line" ? "bg-gray-50 text-[#b80877] font-medium" : ""
              }`}
            >
              <span className="mr-1.5 text-xs font-medium">{program.id}.</span>
              {program.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-4 p-3 bg-[#1f888f]/10 rounded-md">
        <h3 className="font-medium text-[#1f888f] mb-2 text-sm">Quick Tips</h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Always use 'with' statement for file handling</li>
          <li>• Remember to handle file exceptions</li>
          <li>• Use appropriate file modes (r, w, a)</li>
        </ul>
      </div>
    </div>
  )
}
