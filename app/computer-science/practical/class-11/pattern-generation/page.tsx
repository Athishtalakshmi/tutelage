import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Home, FileText, Code, Play, CheckCircle, HelpCircle } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export const metadata: Metadata = {
  title: "Generate Patterns Using Nested Loop - Class 11 Computer Science Practical",
  description:
    "Learn to create star patterns, reverse number patterns, and alphabet patterns using nested loops in Python. Complete practical program with code, output, and VIVA questions.",
}

export default function PatternGenerationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-3 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/computer-science" className="text-gray-500 hover:text-gray-700">
              Computer Science
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/computer-science/practical" className="text-gray-500 hover:text-gray-700">
              Practical
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/computer-science/practical/class-11" className="text-gray-500 hover:text-gray-700">
              Class 11
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Pattern Generation</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* TOC Sidebar */}
          <div className="lg:col-span-1">
            <TOC />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#1f888f] rounded-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Generate Patterns Using Nested Loop</h1>
                  <p className="text-gray-600">Class 11 Computer Science Practical Program</p>
                </div>
              </div>

              {/* AIM */}
              <section id="aim" className="mb-8">
                <h2 className="text-xl font-bold text-[#1f888f] mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  AIM
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <p className="text-gray-800">
                    To write Python programs to generate different patterns using nested loops including:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>• Star Pattern (1 to 5 stars)</li>
                    <li>• Reverse Number Pattern (12345 to 1)</li>
                    <li>• Alphabet Pattern (A to ABCDE)</li>
                  </ul>
                </div>
              </section>

              {/* ALGORITHM */}
              <section id="algorithm" className="mb-8">
                <h2 className="text-xl font-bold text-[#1f888f] mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  ALGORITHM
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">General Algorithm for Pattern Generation:</h3>
                  <ol className="space-y-2 text-gray-700">
                    <li>
                      <strong>Step 1:</strong> Display menu for pattern selection
                    </li>
                    <li>
                      <strong>Step 2:</strong> Accept user choice
                    </li>
                    <li>
                      <strong>Step 3:</strong> Based on choice, execute respective pattern logic:
                    </li>
                    <li className="ml-4">
                      <strong>For Star Pattern:</strong>
                      <ul className="mt-1 space-y-1 text-sm">
                        <li>- Use outer loop from 1 to 5</li>
                        <li>- Use inner loop from 1 to current row number</li>
                        <li>- Print star followed by space</li>
                      </ul>
                    </li>
                    <li className="ml-4">
                      <strong>For Reverse Number Pattern:</strong>
                      <ul className="mt-1 space-y-1 text-sm">
                        <li>- Use outer loop from 5 to 1 (decreasing)</li>
                        <li>- Use inner loop from 1 to current row number</li>
                        <li>- Print numbers without space</li>
                      </ul>
                    </li>
                    <li className="ml-4">
                      <strong>For Alphabet Pattern:</strong>
                      <ul className="mt-1 space-y-1 text-sm">
                        <li>- Use outer loop from 1 to 5</li>
                        <li>- Use inner loop from 1 to current row number</li>
                        <li>- Convert numbers to alphabets using chr(64+j)</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Step 4:</strong> Print newline after each row
                    </li>
                    <li>
                      <strong>Step 5:</strong> End program
                    </li>
                  </ol>
                </div>
              </section>

              {/* PROGRAM */}
              <section id="program" className="mb-8">
                <h2 className="text-xl font-bold text-[#1f888f] mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  PROGRAM
                </h2>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    {`# Pattern Generation Program using Nested Loops
# Class 11 Computer Science Practical

def star_pattern():
    """Generate star pattern from 1 to 5 stars"""
    print("\\nStar Pattern:")
    print("-" * 15)
    for i in range(1, 6):
        for j in range(1, i + 1):
            print("*", end=" ")
        print()  # New line after each row

def reverse_number_pattern():
    """Generate reverse number pattern from 12345 to 1"""
    print("\\nReverse Number Pattern:")
    print("-" * 25)
    for i in range(5, 0, -1):
        for j in range(1, i + 1):
            print(j, end="")
        print()  # New line after each row

def alphabet_pattern():
    """Generate alphabet pattern from A to ABCDE"""
    print("\\nAlphabet Pattern:")
    print("-" * 18)
    for i in range(1, 6):
        for j in range(1, i + 1):
            print(chr(64 + j), end="")
        print()  # New line after each row

def main():
    """Main function to display menu and handle user choice"""
    while True:
        print("\\n" + "="*40)
        print("     PATTERN GENERATION PROGRAM")
        print("="*40)
        print("1. Star Pattern")
        print("2. Reverse Number Pattern")
        print("3. Alphabet Pattern")
        print("4. Exit")
        print("-"*40)
        
        try:
            choice = int(input("Enter your choice (1-4): "))
            
            if choice == 1:
                star_pattern()
            elif choice == 2:
                reverse_number_pattern()
            elif choice == 3:
                alphabet_pattern()
            elif choice == 4:
                print("\\nThank you for using Pattern Generation Program!")
                break
            else:
                print("\\nInvalid choice! Please enter 1-4.")
                
        except ValueError:
            print("\\nInvalid input! Please enter a number.")
        
        input("\\nPress Enter to continue...")

# Run the program
if __name__ == "__main__":
    main()`}
                  </pre>
                </div>
              </section>

              {/* OUTPUT */}
              <section id="output" className="mb-8">
                <h2 className="text-xl font-bold text-[#1f888f] mb-4 flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  OUTPUT
                </h2>

                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Pattern 1: Star Pattern</h3>
                    <pre className="text-sm font-mono text-gray-700">
                      {`Star Pattern:
---------------
* 
* * 
* * * 
* * * * 
* * * * *`}
                    </pre>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Pattern 2: Reverse Number Pattern</h3>
                    <pre className="text-sm font-mono text-gray-700">
                      {`Reverse Number Pattern:
-------------------------
12345
1234
123
12
1`}
                    </pre>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Pattern 3: Alphabet Pattern</h3>
                    <pre className="text-sm font-mono text-gray-700">
                      {`Alphabet Pattern:
------------------
A
AB
ABC
ABCD
ABCDE`}
                    </pre>
                  </div>
                </div>
              </section>

              {/* CONCLUSION */}
              <section id="conclusion" className="mb-8">
                <h2 className="text-xl font-bold text-[#1f888f] mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  CONCLUSION
                </h2>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-gray-800">
                     Thus, the given program was successfully executed and the output was verified as per the expected result.
                  </p>
                </div>
              </section>

              {/* VIVA QUESTIONS */}
              <section id="viva" className="mb-8">
                <h2 className="text-xl font-bold text-[#1f888f] mb-4 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  VIVA QUESTIONS
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is a nested loop and why is it used in pattern generation?",
                      a: "A nested loop is a loop inside another loop. It's used in pattern generation because we need to control both rows (outer loop) and columns (inner loop) to create 2D patterns.",
                    },
                    {
                      q: "How does the chr() function work in alphabet pattern generation?",
                      a: "chr() function converts ASCII values to characters. chr(65) gives 'A', chr(66) gives 'B', etc. We use chr(64 + j) where j starts from 1 to get alphabets A, B, C...",
                    },
                    {
                      q: "What is the difference between print() and print(end='') in pattern programs?",
                      a: "print() adds a newline character after printing, while print(end='') doesn't add newline. We use end='' to print elements in the same line and print() to move to next line.",
                    },
                    {
                      q: "How do you create a reverse number pattern like 12345, 1234, 123?",
                      a: "Use outer loop with range(5, 0, -1) to go from 5 to 1, and inner loop with range(1, i+1) where i is the current outer loop value.",
                    },
                    {
                      q: "What is the ASCII value of 'A' and how is it used in alphabet patterns?",
                      a: "ASCII value of 'A' is 65. We use chr(64 + j) or chr(65 + j - 1) to convert numbers to alphabets starting from A.",
                    },
                    {
                      q: "How can you modify the star pattern to create a right-aligned triangle?",
                      a: "Add spaces before stars using another inner loop: for k in range(5-i): print(' ', end='') before printing stars.",
                    },
                    {
                      q: "What happens if you use range(1, 6) vs range(5, 0, -1) in outer loop?",
                      a: "range(1, 6) creates increasing pattern (1,2,3,4,5 rows), while range(5, 0, -1) creates decreasing pattern (5,4,3,2,1 rows).",
                    },
                    {
                      q: "How do you create a pattern with both numbers and alphabets in the same row?",
                      a: "Use two inner loops or combine both in one loop: print(j, chr(64+j), end=' ') to print both number and corresponding alphabet.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        Q{index + 1}. {item.q}
                      </h3>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t">
                <Link
                  href="/computer-science/practical/class-11/arithmetic-operations"
                  className="flex items-center gap-2 text-[#1f888f] hover:text-[#b80877] transition-colors"
                >
                  <ChevronRight className="h-4 w-4 rotate-180" />
                  Previous: Arithmetic Operations
                </Link>
                <Link
                  href="/computer-science/practical/class-11/series-sum"
                  className="flex items-center gap-2 text-[#1f888f] hover:text-[#b80877] transition-colors"
                >
                  Next: Series Sum
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Sidebar */}
          <div className="lg:col-span-1">
            <Related />
          </div>
        </div>
      </div>
    </div>
  )
}
