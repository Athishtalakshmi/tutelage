import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function NumberComparisonPage() {
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
            <Link href="/computer-science/practical" className="hover:text-[#1f888f]">
              Practical Programs
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href="/computer-science/practical/class-11" className="hover:text-[#1f888f]">
              Class 11
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Number Comparison</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Sidebar - TOC */}
          <div className="md:col-span-1">
            <TOC />
          </div>

          {/* Middle Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-xl font-bold text-[#1f888f]">Find the Largest Among Two Numbers</h1>
                <button className="flex items-center gap-1 bg-[#b80877] hover:bg-[#b80877]/90 text-white px-3 py-1.5 rounded-md text-sm">
                  <Download size={16} />
                  Download PDF (₹29)
                </button>
              </div>

              <div className="prose max-w-none text-sm">
                {/* AIM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">AIM</h2>
                  <p>
                    To write a Python program that finds the largest among two numbers entered by the user using
                    conditional statements.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Take two numbers as input from the user</li>
                    <li>Compare the first number with the second</li>
                    <li>If the first number is greater than the second, it is the largest</li>
                    <li>Print first number is greater</li>
                    <li>Display the largest number</li>
                    <li>Else display the second number</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Python program to find the largest and smallest among two numbers

# Input two numbers
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

# Finding largest and smallest
if num1 > num2:
    print("Largest number is:", num1)
    print("Smallest number is:",num2)
elif num2 > num1:
    print("Largest number is: ",num2)
    print("Smallest number is:",num1)
else:
    print("Both numbers are equal.")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Sample Output 1</p>
                    <p>========================================</p>
                    <p>Enter first number: 25</p>
                    <p>Enter second number: 40</p>
                    <p>Largest number is: 40</p>
                    <p>Smallest number is: 25</p>
                    <br />
                    <p>Sample Output 2</p>
                    <p>========================================</p>
                    <p>Enter first number: 50</p>
                    <p>Enter second number: 50</p>
                    <p>Both numbers are equal.</p>
                  </div>
                </div>

                {/* CONCLUSION */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">CONCLUSION</h2>
                  <p>
                    Thus, the given program was successfully executed and the output was verified as per the expected
                    result.
                  </p>
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What are conditional statements in Python?</p>
                      <p className="text-gray-600">
                        Conditional statements are used to execute different blocks of code based on certain conditions.
                        Python uses if, elif, and else statements.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the difference between = and == operators?</p>
                      <p className="text-gray-600">
                        = is the assignment operator used to assign values to variables, while == is the equality
                        operator used to compare two values.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What are logical operators in Python?</p>
                      <p className="text-gray-600">
                        Logical operators are 'and', 'or', and 'not'. They are used to combine conditional statements
                        and return True or False.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What would happen if we input non-numeric values?</p>
                      <p className="text-gray-600">
                        If non-numeric values are entered, the program will raise a ValueError because the int()
                        function cannot convert strings to numbers.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does the max() function work?</p>
                      <p className="text-gray-600">
                        The max() function returns the largest item from an iterable or the largest of two or more
                        arguments. It can handle any number of arguments.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the advantage of using nested if statements?</p>
                      <p className="text-gray-600">
                        Nested if statements provide more control over the decision-making process and can handle
                        complex conditions, though they may be less readable.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can you modify this program to find the smallest number?</p>
                      <p className="text-gray-600">
                        Change the comparison operators from &gt;= to &lt;= or use the min() function instead of max().
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the purpose of the int() function?</p>
                      <p className="text-gray-600">
                        The int() function converts a string or float to an integer number, allowing whole number values
                        to be processed.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/arithmetic-operations"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: Arithmetic Operations
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Related Resources */}
          <div className="md:col-span-1">
            <Related />
          </div>
        </div>
      </div>
    </div>
  )
}
