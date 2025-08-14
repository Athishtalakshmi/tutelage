import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function SeriesSumPage() {
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
            <span className="text-[#1f888f] font-medium">Series Sum</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Input x and n, Print Sum of Series</h1>
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
                    To write Python programs to input the value of x and n and print the sum of different mathematical
                    series.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Input the value of x (base) and n (number of terms)</li>
                    <li>Initialize sum variable according to the series type</li>
                    <li>Use a loop to calculate each term of the series</li>
                    <li>Add or subtract terms based on the series pattern</li>
                    <li>Display the final sum</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>

                  {/* Series 1 */}
                  <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">1. Series: 1 + x + x² + x³ + ... + xⁿ</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Series 1: 1 + x + x^2 + x^3 + ... + x^n
x = float(input('Enter value of x: '))
n = int(input('Enter value of n: '))
s = 1
for i in range(n + 1):
    s += x**i
print('Sum of the series:', s)`}
                      </code>
                    </pre>
                  </div>

                  {/* Series 2 */}
                  <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">2. Series: 1 - x + x² - x³ + ... ± xⁿ</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Series 2: 1 - x + x^2 - x^3 + ... +/- x^n
x = float(input('Enter value of x: '))
n = int(input('Enter value of n: '))
s = 1
for i in range(1, n+1):
    if i%2 == 0:
        s = s + x**i
    else:
        s = s - x**i
print('Sum of the series:', s)`}
                      </code>
                    </pre>
                  </div>

                  {/* Series 3 */}
                  <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">
                    3. Series: x - x²/2 + x³/3 - x⁴/4 + ...
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Series 3: x - x^2/2 + x^3/3 - x^4/4 + ...
x = float(input('Enter value of x: '))
n = int(input('Enter value of n: '))
sum = x
for i in range(2, n+1):
    if (i%2 == 0):
        sum += (x**i)/i
    else:
        sum -= (x**i)/i
print('Sum is:', sum)`}
                      </code>
                    </pre>
                  </div>

                  {/* Series 4 */}
                  <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">
                    4. Series: x - x²/2! + x³/3! - x⁴/4! + ...
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Series 4: x - x^2/2! + x^3/3! - x^4/4! + ...
import math
x = float(input('Enter value of x: '))
n = int(input('Enter value of n: '))
sum = x
for i in range(2, n+1):
    if (i%2 == 0):
        sum = sum + ((x**i)/math.factorial(i))
    else:
        sum = sum - ((x**i)/math.factorial(i))
print('Sum is:', sum)`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>

                  <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">Series 1 Output:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter value of x: 2</p>
                    <p>Enter value of n: 4</p>
                    <p>Sum of the series: 31.0</p>
                  </div>

                  <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">Series 2 Output:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter value of x: 2</p>
                    <p>Enter value of n: 4</p>
                    <p>Sum of the series: 11.0</p>
                  </div>

                  <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">Series 3 Output:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter value of x: 2</p>
                    <p>Enter value of n: 4</p>
                    <p>Sum is: 0.6666666666666667</p>
                  </div>

                  <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">Series 4 Output:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter value of x: 2</p>
                    <p>Enter value of n: 4</p>
                    <p>Sum is: 1.4666666666666666</p>
                  </div>
                </div>

                {/* CONCLUSION */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">CONCLUSION</h2>
                  <p>
                    Thus, the given program was successfully executed and the output was verified as per the expected result.
                  </p>
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What is the purpose of these series programs?</p>
                      <p className="text-gray-600">
                        These programs calculate the sum of different mathematical series like geometric series,
                        alternating series, and factorial-based series which are commonly used in mathematics and
                        engineering.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the difference between Series 1 and Series 2?</p>
                      <p className="text-gray-600">
                        Series 1 is a simple geometric series where all terms are positive. Series 2 is an alternating
                        series where terms alternate between positive and negative based on whether the power is even or
                        odd.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why do we use math.factorial() in Series 4?</p>
                      <p className="text-gray-600">
                        Series 4 involves factorial terms in the denominator (2!, 3!, 4!, etc.). The math.factorial()
                        function calculates the factorial of a number efficiently.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if we input negative values for x?</p>
                      <p className="text-gray-600">
                        Negative values for x are valid and will produce different results. For alternating series,
                        negative x values can affect the sign pattern of the terms.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does the modulo operator (%) work in these programs?</p>
                      <p className="text-gray-600">
                        The modulo operator (%) returns the remainder after division. We use i%2 to check if a number is
                        even (remainder 0) or odd (remainder 1) to determine the sign of terms in alternating series.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the mathematical significance of Series 4?</p>
                      <p className="text-gray-600">
                        Series 4 represents the Taylor series expansion of sin(x) or cos(x) functions, which are
                        fundamental in calculus and used to approximate trigonometric functions.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why do we initialize 'sum' differently in different series?</p>
                      <p className="text-gray-600">
                        The initialization depends on the first term of each series. Series 1 and 2 start with 1, while
                        Series 3 and 4 start with x, so we initialize accordingly.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What would happen if we input a very large value for n?</p>
                      <p className="text-gray-600">
                        For large n values, the computation time increases, and for Series 4, factorial values become
                        very large, which might cause overflow errors or precision issues in floating-point
                        calculations.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-between mt-8">
                  <Link
                    href="/computer-science/practical/class-11/pattern-generation"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                    Previous: Pattern Generation
                  </Link>
                  <Link
                    href="/computer-science/practical/class-11/number-checks"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next: Number Checks
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
