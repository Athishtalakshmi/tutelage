import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function InformaticsPracticesPracticalPage() {
  // Sample practical programs for Class 11
  const class11Programs = [
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

  // Sample practical programs for Class 12
  const class12Programs = [
    { id: 1, title: "MySQL database connection", slug: "mysql-connection" },
    { id: 2, title: "MySQL table creation and data insertion", slug: "mysql-create-insert" },
    { id: 3, title: "MySQL data retrieval and filtering", slug: "mysql-retrieval" },
    { id: 4, title: "MySQL data update and deletion", slug: "mysql-update-delete" },
    { id: 5, title: "MySQL joins and relationships", slug: "mysql-joins" },
    { id: 6, title: "MySQL integration with Pandas", slug: "mysql-pandas" },
    { id: 7, title: "Data visualization with Matplotlib", slug: "matplotlib-visualization" },
    { id: 8, title: "Data visualization with Seaborn", slug: "seaborn-visualization" },
    { id: 9, title: "Interactive dashboards with Plotly", slug: "plotly-dashboards" },
    { id: 10, title: "Data analysis project", slug: "data-analysis-project" },
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
            <Link href="/informatics-practices" className="hover:text-[#1f888f]">
              Informatics Practices
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Practical Programs</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4 flex-1">
        <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Informatics Practices (065) Practical Programs</h1>

        <p className="mb-8 text-gray-600">
          This section contains practical programs for CBSE Informatics Practices (065) curriculum for Class 11 and
          Class 12. Each program includes the aim, algorithm, source code, conclusion, and output. These programs will
          help you prepare for your practical examinations.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Class 11 Programs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#1f888f] to-[#1f888f]/80 py-3 px-4">
              <h2 className="text-white font-bold">Class 11 Practical Programs</h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {class11Programs.map((program) => (
                  <li key={program.id}>
                    <Link
                      href={`/informatics-practices/practical/class-11/${program.slug}`}
                      className="flex items-center justify-between text-gray-700 hover:text-[#b80877] p-2 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <span>{program.title}</span>
                      <ChevronRight size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Class 12 Programs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-[#b80877] to-[#b80877]/80 py-3 px-4">
              <h2 className="text-white font-bold">Class 12 Practical Programs</h2>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {class12Programs.map((program) => (
                  <li key={program.id}>
                    <Link
                      href={`/informatics-practices/practical/class-12/${program.slug}`}
                      className="flex items-center justify-between text-gray-700 hover:text-[#1f888f] p-2 hover:bg-gray-50 rounded-md transition-colors"
                    >
                      <span>{program.title}</span>
                      <ChevronRight size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
          <h3 className="font-bold text-yellow-800 mb-2">Important Note for Practical Examination</h3>
          <ul className="list-disc pl-5 text-yellow-800 space-y-1">
            <li>Make sure to understand the concepts of Pandas and data manipulation</li>
            <li>Practice working with real datasets to gain hands-on experience</li>
            <li>Learn to interpret the results of your data analysis</li>
            <li>Include appropriate comments to explain your code</li>
            <li>Test your programs with different datasets to ensure they work correctly</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
