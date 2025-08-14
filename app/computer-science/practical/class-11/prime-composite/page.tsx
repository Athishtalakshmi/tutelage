import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function PrimeCompositePage() {
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
            <span className="text-[#1f888f] font-medium">Prime or Composite Number</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Check if Number is Prime or Composite</h1>
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
                    To write a Python program that checks whether a given number is a prime number or a composite
                    number.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                    <h3 className="font-bold text-blue-800 mb-2">Definitions:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-blue-700">
                      <li>
                        <strong>Prime Number:</strong> A natural number greater than 1 that has no positive divisors
                        other than 1 and itself.
                      </li>
                      <li>
                        <strong>Composite Number:</strong> A positive integer that has at least one positive divisor
                        other than 1 and itself.
                      </li>
                      <li>
                        <strong>Special Cases:</strong> 0 and 1 are neither prime nor composite numbers.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Input a number from the user</li>
                    <li>Check if the number is 0 or 1 - if yes, print "neither prime nor composite"</li>
                    <li>If the number is greater than 1:</li>
                    <li className="ml-4">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Use a loop from 2 to n-1</li>
                        <li>Check if the number is divisible by any number in this range</li>
                        <li>If divisible, it's composite; otherwise, it's prime</li>
                      </ul>
                    </li>
                    <li>If the number is negative, ask for a positive integer</li>
                    <li>Display the result</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Python program to check if a number is prime or composite

n = int(input("Enter any number: "))

if (n == 0 or n == 1):
    print("Number is neither Prime nor Composite")
elif (n > 1):
    for i in range(2, n):
        if (n % i == 0):
            print("Number is not Prime but Composite")
            break
    else:
        print("Number is Prime number but not Composite")
else:
    print("Please enter positive integer number")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 1 (Prime Number):</strong>
                    </p>
                    <p>Enter any number: 7</p>
                    <p>Number is Prime number but not Composite</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 2 (Composite Number):</strong>
                    </p>
                    <p>Enter any number: 12</p>
                    <p>Number is not Prime but Composite</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 3 (Special Case):</strong>
                    </p>
                    <p>Enter any number: 1</p>
                    <p>Number is neither Prime nor Composite</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 4 (Negative Number):</strong>
                    </p>
                    <p>Enter any number: -5</p>
                    <p>Please enter positive integer number</p>
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
                      <p className="font-medium">What is the difference between prime and composite numbers?</p>
                      <p className="text-gray-600">
                        Prime numbers have exactly two factors (1 and itself), while composite numbers have more than
                        two factors. For example, 7 is prime (factors: 1, 7) and 12 is composite (factors: 1, 2, 3, 4,
                        6, 12).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why are 0 and 1 neither prime nor composite?</p>
                      <p className="text-gray-600">
                        By definition, prime numbers must be greater than 1 and have exactly two distinct factors. 0 has
                        infinite factors, and 1 has only one factor (itself), so neither fits the definition.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the purpose of the break statement in this program?</p>
                      <p className="text-gray-600">
                        The break statement exits the loop immediately when a divisor is found, making the program more
                        efficient by avoiding unnecessary iterations.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does the for-else construct work in Python?</p>
                      <p className="text-gray-600">
                        The else block executes only if the for loop completes normally (without encountering a break).
                        If break is executed, the else block is skipped.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Can you optimize this algorithm for better performance?</p>
                      <p className="text-gray-600">
                        Yes, we can check divisors only up to √n instead of n-1, and check for even numbers separately
                        to reduce iterations by half.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if we input a very large prime number?</p>
                      <p className="text-gray-600">
                        The program will take longer to execute as it checks all numbers from 2 to n-1. For large
                        numbers, more efficient algorithms like Miller-Rabin test are preferred.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Is 2 a prime number? Why is it special?</p>
                      <p className="text-gray-600">
                        Yes, 2 is prime and it's the only even prime number. All other even numbers are divisible by 2,
                        making them composite.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        How would you modify this program to find all prime numbers up to n?
                      </p>
                      <p className="text-gray-600">
                        We would use nested loops or implement the Sieve of Eratosthenes algorithm to efficiently find
                        all primes up to a given number.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-between mt-8">
                  <Link
                    href="/computer-science/practical/class-11/number-checks"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                    Previous: Number Checks
                  </Link>
                  <Link
                    href="/computer-science/practical/class-11/fibonacci-series"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next: Fibonacci Series
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
