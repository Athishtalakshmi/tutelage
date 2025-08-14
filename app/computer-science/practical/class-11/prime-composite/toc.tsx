import Link from "next/link"
import { FileText, Code, BookOpen } from "lucide-react"

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

export default function TOC() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
      <h2 className="text-lg font-bold mb-4 text-[#1f888f] flex items-center gap-2">
        <FileText size={20} />
        Class 11 Practical Programs
      </h2>

      <div className="space-y-1 max-h-96 overflow-y-auto">
        {class11Programs.map((program) => (
          <Link
            key={program.id}
            href={`/computer-science/practical/class-11/${program.slug}`}
            className={`block p-2 rounded text-sm transition-colors ${
              program.slug === "prime-composite" ? "bg-[#1f888f] text-white" : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <span className="font-medium">{program.id}.</span> {program.title}
          </Link>
        ))}
      </div>

      {/* Quick Navigation */}
      <div className="mt-6 pt-4 border-t">
        <h3 className="font-bold text-sm mb-3 text-[#1f888f] flex items-center gap-2">
          <Code size={16} />
          Prime Number Concepts
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Prime vs Composite</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Divisibility Testing</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>For-Else Construct</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <span>Break Statement</span>
          </div>
        </div>
      </div>

      {/* Key Concepts */}
      <div className="mt-4 pt-4 border-t">
        <h3 className="font-bold text-sm mb-3 text-[#1f888f] flex items-center gap-2">
          <BookOpen size={16} />
          Key Topics
        </h3>
        <div className="space-y-1 text-xs">
          <div className="bg-blue-50 p-2 rounded">
            <span className="font-medium text-blue-800">Number Theory</span>
          </div>
          <div className="bg-green-50 p-2 rounded">
            <span className="font-medium text-green-800">Loop Control</span>
          </div>
          <div className="bg-purple-50 p-2 rounded">
            <span className="font-medium text-purple-800">Conditional Logic</span>
          </div>
        </div>
      </div>
    </div>
  )
}
