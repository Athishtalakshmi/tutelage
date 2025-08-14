import Link from "next/link"

export default function TOC() {
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

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Class 11 Programs</h2>
      <ul className="space-y-1">
        {class11Programs.map((program) => (
          <li key={program.id}>
            <Link
              href={`/computer-science/practical/class-11/${program.slug}`}
              className={`flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm ${
                program.slug === "list-swap" ? "bg-gray-50 text-[#b80877] font-medium" : ""
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
