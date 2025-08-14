import Link from "next/link"

export default function TOC() {
  const programs = [
    { id: 1, title: "Series generation using Pandas", slug: "series-generation" },
    { id: 2, title: "DataFrame creation and operations", slug: "dataframe-operations" },
    { id: 3, title: "Data import from CSV files", slug: "csv-import" },
    { id: 4, title: "Data filtering and selection", slug: "data-filtering" },
    { id: 5, title: "Data aggregation with groupby", slug: "data-aggregation" },
    { id: 6, title: "Data visualization with Pandas", slug: "data-visualization" },
    { id: 7, title: "String operations in Pandas", slug: "string-operations" },
    { id: 8, title: "Date and time operations", slug: "datetime-operations" },
    { id: 9, title: "Data export to CSV and Excel", slug: "data-export" },
    { id: 10, title: "Basic statistical analysis", slug: "statistical-analysis" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Class 11 Programs</h2>
      <ul className="space-y-1">
        {programs.map((program) => (
          <li key={program.id}>
            <Link
              href={`/informatics-practices/practical/class-11/${program.slug}`}
              className={`flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm ${
                program.slug === "csv-import" ? "bg-gray-50 text-[#b80877] font-medium" : ""
              }`}
            >
              <span className="mr-1.5 text-xs font-medium">{program.id}.</span>
              {program.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
