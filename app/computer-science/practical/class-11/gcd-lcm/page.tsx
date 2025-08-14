import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function GCDLCMPage() {
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
            <span className="text-[#1f888f] font-medium">GCD and LCM</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Compute GCD and LCM of Two Integers</h1>
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
                    To write a Python program that computes the Greatest Common Divisor (GCD) and Least Common Multiple
                    (LCM) of two integers.
                  </p>

                  <div className="bg-blue-50 p-3 rounded-md mt-3">
                    <h3 className="font-medium text-blue-800 mb-2">Definitions:</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>
                        <strong>GCD:</strong> The largest positive integer that divides both numbers without remainder
                      </li>
                      <li>
                        <strong>LCM:</strong> The smallest positive integer that is divisible by both numbers
                      </li>
                      <li>
                        <strong>Formula:</strong> LCM(a,b) = (a × b) / GCD(a,b)
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Input two integers num1 and num2</li>
                    <li>Initialize gcd = 1</li>
                    <li>Check if num1 is divisible by num2</li>
                    <li>If yes, then gcd = num2</li>
                    <li>Otherwise, iterate from num2//2 down to 2</li>
                    <li>Find the largest number that divides both num1 and num2</li>
                    <li>Calculate LCM using formula: LCM = (num1 × num2) / GCD</li>
                    <li>Display the GCD and LCM</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Compute the greatest common divisor and least common multiple of two integers.

num1 = int(input("Enter First Number:"))
num2 = int(input("Enter Second Number:"))

gcd = 1

if num1 % num2 == 0:
    gcd = num2
else:
    for k in range(num2//2, 1, -1):
        if num1 % k == 0 and num2 % k == 0:
            gcd = k
            break

lcm = (num1 * num2) / gcd

print("GCD is:", gcd)
print("LCM is:", lcm)`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 1:</strong>
                    </p>
                    <p>Enter First Number: 48</p>
                    <p>Enter Second Number: 18</p>
                    <p>GCD is: 6</p>
                    <p>LCM is: 144.0</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 2:</strong>
                    </p>
                    <p>Enter First Number: 15</p>
                    <p>Enter Second Number: 25</p>
                    <p>GCD is: 5</p>
                    <p>LCM is: 75.0</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 3:</strong>
                    </p>
                    <p>Enter First Number: 7</p>
                    <p>Enter Second Number: 13</p>
                    <p>GCD is: 1</p>
                    <p>LCM is: 91.0</p>
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
                      <p className="font-medium">What is the difference between GCD and LCM?</p>
                      <p className="text-gray-600">
                        GCD is the largest number that divides both numbers, while LCM is the smallest number that both
                        numbers can divide. They are inversely related through the formula: GCD × LCM = num1 × num2.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why do we start the loop from num2//2?</p>
                      <p className="text-gray-600">
                        The largest possible common divisor (other than the number itself) cannot be greater than half
                        of the smaller number. This optimization reduces the number of iterations.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if we input two prime numbers?</p>
                      <p className="text-gray-600">
                        If both numbers are prime and different, their GCD will be 1 (they are coprime) and their LCM
                        will be their product.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Can you explain the Euclidean algorithm for GCD?</p>
                      <p className="text-gray-600">
                        The Euclidean algorithm uses repeated division: GCD(a,b) = GCD(b, a%b) until the remainder
                        becomes 0. It's more efficient than our current approach.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the time complexity of this algorithm?</p>
                      <p className="text-gray-600">
                        The time complexity is O(min(num1, num2)) in the worst case, as we might iterate through half of
                        the smaller number.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why is LCM calculated as (num1 * num2) / gcd?</p>
                      <p className="text-gray-600">
                        This formula comes from the mathematical relationship that for any two numbers, their product
                        equals the product of their GCD and LCM.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What would happen if one of the inputs is 0?</p>
                      <p className="text-gray-600">
                        If one number is 0, the GCD would be the other number (by convention), but LCM would be
                        undefined or 0. The program should include input validation.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can we modify this program to handle negative numbers?</p>
                      <p className="text-gray-600">
                        We can use the absolute values of the inputs since GCD and LCM are typically defined for
                        positive integers: abs(num1) and abs(num2).
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-between mt-8">
                  <Link
                    href="/computer-science/practical/class-11/fibonacci-series"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                    Previous: Fibonacci Series
                  </Link>
                  <Link
                    href="/computer-science/practical/class-11/string-analysis"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next: String Analysis
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
