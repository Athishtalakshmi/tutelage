import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function FibonacciSeriesPage() {
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
            <span className="text-[#1f888f] font-medium">Fibonacci Series</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Display Terms of Fibonacci Series</h1>
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
                    To write a Python program that displays the terms of a Fibonacci series up to n terms as specified
                    by the user.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                    <h3 className="font-bold text-blue-800 mb-2">Fibonacci Series:</h3>
                    <p className="text-blue-700">
                      A sequence where each number is the sum of the two preceding ones. The series starts with 0 and 1.
                      <br />
                      <strong>Example:</strong> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
                    </p>
                  </div>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Initialize first two terms: n1 = 0, n2 = 1</li>
                    <li>Input the number of terms from the user</li>
                    <li>Check if terms is less than or equal to 0 - display error message</li>
                    <li>If terms = 1, print only the first term (0)</li>
                    <li>If terms ≥ 2, print first two terms (0, 1)</li>
                    <li>Use a loop from 2 to terms:</li>
                    <li className="ml-4">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Calculate next_term = n1 + n2</li>
                        <li>Print next_term</li>
                        <li>Update n1 = n2 and n2 = next_term</li>
                      </ul>
                    </li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Display the terms of a Fibonacci series

n1 = 0
n2 = 1
terms = int(input("Enter the Terms of Fibonacci series you want to print: "))

if terms <= 0:
    print("Enter positive value of term.")
else:
    if terms == 1:
        print(n1, end=" ")
    else:
        print(n1, n2, end=" ")
        for i in range(2, terms):
            next_term = n1 + n2
            print(next_term, end=" ")
            n1 = n2
            n2 = next_term`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 1 (10 terms):</strong>
                    </p>
                    <p>Enter the Terms of Fibonacci series you want to print: 10</p>
                    <p>0 1 1 2 3 5 8 13 21 34</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 2 (5 terms):</strong>
                    </p>
                    <p>Enter the Terms of Fibonacci series you want to print: 5</p>
                    <p>0 1 1 2 3</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 3 (1 term):</strong>
                    </p>
                    <p>Enter the Terms of Fibonacci series you want to print: 1</p>
                    <p>0</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 4 (Invalid input):</strong>
                    </p>
                    <p>Enter the Terms of Fibonacci series you want to print: -2</p>
                    <p>Enter positive value of term.</p>
                  </div>
                </div>

                {/* CONCLUSION */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">CONCLUSION</h2>
                  <p> Thus, the given program was successfully executed and the output was verified as per the expected result.</p>
                  
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What is the Fibonacci series and where is it found in nature?</p>
                      <p className="text-gray-600">
                        The Fibonacci series is a sequence where each number is the sum of two preceding ones (0, 1, 1,
                        2, 3, 5, 8...). It appears in nature in flower petals, pinecones, shells, and spiral galaxies.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why do we initialize n1=0 and n2=1?</p>
                      <p className="text-gray-600">
                        These are the first two terms of the Fibonacci series by definition. The series starts with 0
                        and 1, and each subsequent term is calculated from these initial values.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the purpose of the end=" " parameter in print()?</p>
                      <p className="text-gray-600">
                        The end=" " parameter prevents the print function from adding a newline character, allowing all
                        numbers to be printed on the same line separated by spaces.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does the variable swapping work in this program?</p>
                      <p className="text-gray-600">
                        After calculating next_term, we update n1=n2 and n2=next_term. This shifts the values forward so
                        the next iteration can calculate the subsequent term correctly.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Can you write a recursive version of this program?</p>
                      <p className="text-gray-600">
                        Yes, using recursion: def fib(n): return n if n &lt;= 1 else fib(n-1) + fib(n-2). However, the
                        iterative approach is more efficient for large numbers.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if the user enters 0 or negative number?</p>
                      <p className="text-gray-600">
                        The program displays "Enter positive value of term." because the Fibonacci series requires at
                        least one term to be meaningful.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the mathematical relationship in Fibonacci numbers?</p>
                      <p className="text-gray-600">
                        Each term equals the sum of the two preceding terms: F(n) = F(n-1) + F(n-2), where F(0)=0 and
                        F(1)=1.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        How would you find the nth Fibonacci number without printing the series?
                      </p>
                      <p className="text-gray-600">
                        Use the same logic but don't print intermediate values. Keep updating n1 and n2 until you reach
                        the nth position, then return n2.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-between mt-8">
                  <Link
                    href="/computer-science/practical/class-11/prime-composite"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                    Previous: Prime or Composite
                  </Link>
                  <Link
                    href="/computer-science/practical/class-11/gcd-lcm"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next: GCD and LCM
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
