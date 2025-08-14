import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function NumberChecksPage() {
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
            <span className="text-[#1f888f] font-medium">Number Checks</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">
                  Check Perfect Number, Armstrong Number or Palindrome
                </h1>
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
                    To write Python programs that determine whether a number is a perfect number, an Armstrong number,
                    or a palindrome.
                  </p>
                  <div className="mt-3 p-3 bg-blue-50 rounded-md">
                    <h3 className="font-medium text-blue-800 mb-2">Definitions:</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>
                        <strong>Perfect Number:</strong> A positive integer equal to the sum of its proper divisors
                        (excluding itself). Example: 6 = 1 + 2 + 3
                      </li>
                      <li>
                        <strong>Armstrong Number:</strong> A number equal to the sum of its digits raised to the power
                        of number of digits. Example: 371 = 3³ + 7³ + 1³
                      </li>
                      <li>
                        <strong>Palindrome:</strong> A number that reads the same forwards and backwards. Example: 121,
                        1331
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>

                  <h3 className="font-medium text-gray-800 mb-2">Perfect Number Algorithm:</h3>
                  <ol className="list-decimal pl-5 space-y-1 mb-4">
                    <li>Start</li>
                    <li>Input a number n</li>
                    <li>Initialize sum = 0</li>
                    <li>For i from 1 to n-1:</li>
                    <li className="ml-4">If n % i == 0, then sum = sum + i</li>
                    <li>If sum == n, then it's a perfect number</li>
                    <li>Else, it's not a perfect number</li>
                    <li>Stop</li>
                  </ol>

                  <h3 className="font-medium text-gray-800 mb-2">Armstrong Number Algorithm:</h3>
                  <ol className="list-decimal pl-5 space-y-1 mb-4">
                    <li>Start</li>
                    <li>Input a number n</li>
                    <li>Count the number of digits</li>
                    <li>Initialize sum = 0</li>
                    <li>For each digit in the number:</li>
                    <li className="ml-4">Extract the digit and raise it to the power of number of digits</li>
                    <li className="ml-4">Add to sum</li>
                    <li>If sum equals original number, it's Armstrong</li>
                    <li>Stop</li>
                  </ol>

                  <h3 className="font-medium text-gray-800 mb-2">Palindrome Algorithm:</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Input a number n</li>
                    <li>Initialize reverse = 0</li>
                    <li>Store original number in temp</li>
                    <li>While n != 0:</li>
                    <li className="ml-4">Extract last digit</li>
                    <li className="ml-4">reverse = reverse * 10 + last_digit</li>
                    <li className="ml-4">n = n // 10</li>
                    <li>If temp == reverse, it's palindrome</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAMS</h2>

                  <h3 className="font-medium text-gray-800 mb-2">Program 1: Perfect Number Check</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Determine whether a number is a perfect number
n = int(input("Enter any number: "))
sum = 0
i = 1

for i in range(1, n):
    if(n % i == 0):
        sum = sum + i

if (n == sum):
    print("The number is a Perfect number!")
else:
    print("The number is not a Perfect number!")`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="font-medium text-gray-800 mb-2">Program 2: Armstrong Number Check</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Finding Armstrong Number
n1 = int(input("Enter any number: "))
temp = num = n1
no_of_digits = 0

# Count number of digits
while(num != 0):
    no_of_digits += 1
    num = int(num / 10)

print("No of digits is:", no_of_digits)

# Sum of the digits power raise to no of digits
sum = 0
while(n1 != 0):
    last_digit = n1 % 10
    sum += (last_digit ** no_of_digits)
    n1 = int(n1 / 10)

# Checking Armstrong Number
if(sum == temp):
    print("Number is Armstrong number")
else:
    print("Number is Not Armstrong number")`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="font-medium text-gray-800 mb-2">Program 3: Palindrome Check</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Finding Palindrome or Not
n = int(input("Enter the Number: "))
rev = 0
temp = n

while(n != 0):
    last_digit = n % 10
    rev = rev * 10 + last_digit
    n = n // 10

if(temp == rev):
    print("It is Palindrome Number")
else:
    print("It is not a Palindrome Number")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>

                  <h3 className="font-medium text-gray-800 mb-2">Perfect Number Output:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter any number: 6</p>
                    <p>The number is a Perfect number!</p>
                    <br />
                    <p>Enter any number: 10</p>
                    <p>The number is not a Perfect number!</p>
                  </div>

                  <h3 className="font-medium text-gray-800 mb-2">Armstrong Number Output:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter any number: 371</p>
                    <p>No of digits is: 3</p>
                    <p>Number is Armstrong number</p>
                    <br />
                    <p>Enter any number: 123</p>
                    <p>No of digits is: 3</p>
                    <p>Number is Not Armstrong number</p>
                  </div>

                  <h3 className="font-medium text-gray-800 mb-2">Palindrome Output:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter the Number: 121</p>
                    <p>It is Palindrome Number</p>
                    <br />
                    <p>Enter the Number: 123</p>
                    <p>It is not a Palindrome Number</p>
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
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <p className="font-medium">What is a perfect number? Give examples.</p>
                      <p className="text-gray-600">
                        A perfect number is a positive integer that is equal to the sum of its proper positive divisors
                        (excluding itself). Examples: 6 (1+2+3=6), 28 (1+2+4+7+14=28), 496, 8128.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How do you calculate if 371 is an Armstrong number?</p>
                      <p className="text-gray-600">
                        371 has 3 digits. Calculate: 3³ + 7³ + 1³ = 27 + 343 + 1 = 371. Since the sum equals the
                        original number, 371 is an Armstrong number.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the difference between // and / operators in Python?</p>
                      <p className="text-gray-600">
                        // is floor division (returns integer quotient), while / is true division (returns float). For
                        digit extraction, we use // to get integer results.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why do we use modulo operator (%) in these programs?</p>
                      <p className="text-gray-600">
                        The modulo operator is used to: find divisors (n%i==0), extract last digit (n%10), and check
                        divisibility conditions.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you modify the palindrome program to work with strings?</p>
                      <p className="text-gray-600">
                        For strings, we can use string slicing: if string == string[::-1] or compare characters from
                        both ends using loops.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if we input 0 or negative numbers?</p>
                      <p className="text-gray-600">
                        Perfect numbers are defined for positive integers only. For 0 or negative numbers, we should add
                        input validation to handle these cases appropriately.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Can a single-digit number be an Armstrong number?</p>
                      <p className="text-gray-600">
                        Yes, all single-digit numbers (1-9) are Armstrong numbers because each digit raised to the power
                        1 equals itself.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can we optimize the perfect number checking algorithm?</p>
                      <p className="text-gray-600">
                        We can optimize by checking divisors only up to √n, and for each divisor i found, also add n/i
                        to the sum (if i ≠ n/i and n/i ≠ n).
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-between mt-8">
                  <Link
                    href="/computer-science/practical/class-11/series-sum"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                    Previous: Series Sum
                  </Link>
                  <Link
                    href="/computer-science/practical/class-11/prime-composite"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next: Prime/Composite Check
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
