import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ComputerSciencePracticalPage() {
  // Sample practical programs for Class 11
  const class11Programs = [
    { id: 1, title: "Input a welcome message and display it", slug: "welcome-message" },
    { id: 2, title: "Input two numbers and display the larger/smaller number", slug: "number-comparison" },
    { id: 3, title: "Input three numbers and display the largest / smallest number", slug: "three-number-comparison" },    
    { id: 4, title: "Enter two integers and perform all arithmetic operations", slug: "arithmetic-operations" },
    { id: 5, title: "Generate patterns using nested loop", slug: "pattern-generation" },
    { id: 6, title: "Input x and n, print sum of series", slug: "series-sum" },
    { id: 7, title: "Check perfect number, Armstrong number or palindrome", slug: "number-checks" },
    { id: 8, title: "Check if number is prime or composite", slug: "prime-composite" },
    { id: 9, title: "Display Fibonacci series terms", slug: "fibonacci-series" },
    { id: 10, title: "Compute GCD and LCM of two integers", slug: "gcd-lcm" },
    { id: 11, title: "Count vowels, consonants, uppercase, lowercase in string", slug: "string-analysis" },
    { id: 12, title: "Check palindrome string and convert case", slug: "string-palindrome" },
    { id: 13, title: "Find largest/smallest number in list/tuple", slug: "list-min-max" },
    { id: 14, title: "Swap elements at even and odd locations", slug: "list-swap" },
    { id: 15, title: "Search element in list/tuple", slug: "list-search" },
    { id: 16, title: "Find smallest and largest number from list", slug: "list-extremes" },
    { id: 17, title: "Dictionary with student marks above 75", slug: "student-marks" },
    { id: 18, title: "Menu-driven student dictionary program", slug: "student-menu" },
    { id: 19, title: "Choose 4 random lucky winners from 100 customers", slug: "lucky-winners" },
    { id: 20, title: "String module operations menu", slug: "string-module" },
    { id: 21, title: "Friends phone directory dictionary operations", slug: "phone-directory" },
  
  ]

  // Sample practical programs for Class 12
  const class12Programs = [
    { id: 1, title: " Read a text file line by line and display each word separated by a #", slug: "text-file-line-by-line" },
    { id: 2, title: "Queue implementation using list", slug: "queue-implementation" },
    { id: 3, title: "File handling - Read and write text", slug: "file-handling-text" },
    { id: 4, title: "File handling - CSV operations", slug: "file-handling-csv" },
    { id: 5, title: "MySQL database connection", slug: "mysql-connection" },
    { id: 6, title: "MySQL - Create table and insert data", slug: "mysql-create-insert" },
    { id: 7, title: "MySQL - Query and display data", slug: "mysql-query" },
    { id: 8, title: "MySQL - Update and delete data", slug: "mysql-update-delete" },
    { id: 9, title: "Data visualization with Matplotlib", slug: "data-visualization" },
    { id: 10, title: "Network programming - Basic client-server", slug: "network-programming" },
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
            <Link href="/computer-science" className="hover:text-[#1f888f]">
              Computer Science
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Practical Programs</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4 flex-1">
        <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Computer Science (083) Practical Programs</h1>

        <p className="mb-8 text-gray-600">
          This section contains practical programs for CBSE Computer Science (083) curriculum for Class 11 and Class 12.
          Each program includes the aim, algorithm, source code, conclusion, and output. These programs will help you
          prepare for your practical examinations.
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
                      href={`/computer-science/practical/class-11/${program.slug}`}
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
                      href={`/computer-science/practical/class-12/${program.slug}`}
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
            <li>Make sure to understand the logic behind each program</li>
            <li>Practice writing the programs from scratch without referring to notes</li>
            <li>Pay attention to proper indentation and code formatting</li>
            <li>Include appropriate comments to explain your code</li>
            <li>Test your programs with different inputs to ensure they work correctly</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
