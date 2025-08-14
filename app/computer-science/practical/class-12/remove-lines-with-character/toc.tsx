import Link from "next/link"

export default function TOC() {
  const programs = [
    { id: 1, title: "Read text file line by line with # separator", slug: "text-file-line-by-line" },
    {
      id: 2,
      title: "Count vowels, consonants, uppercase, lowercase in file",
      slug: "vowels-consonants-uppercase-lowercase",
    },
    { id: 3, title: "Remove lines containing character 'a'", slug: "remove-lines-with-character" },
    { id: 4, title: "Binary file with name and roll number search", slug: "binary-file-search" },
    { id: 5, title: "Binary file update marks by roll number", slug: "binary-file-update" },
    { id: 6, title: "Random number generator (Dice Simulator)", slug: "dice-simulator" },
    { id: 7, title: "Stack implementation using list", slug: "stack-implementation" },
    { id: 8, title: "CSV file with user-id and password", slug: "csv-user-password" },
    { id: 9, title: "Student database with SQL operations", slug: "student-database-sql" },
    { id: 10, title: "Python-MySQL integration", slug: "python-mysql-integration" },
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
                program.slug === "remove-lines-with-character" ? "bg-gray-50 text-[#b80877] font-medium" : ""
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
          <li>• Handle file exceptions properly</li>
          <li>• Consider case sensitivity in string operations</li>
        </ul>
      </div>
    </div>
  )
}
