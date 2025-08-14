import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function LargestNumberPage() {
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
            <span className="text-[#1f888f] font-medium">Largest Number</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Find the Largest Among Three Numbers</h1>
                <button className="flex items-center gap-1 bg-[#b80877] hover:bg-[#b80877]/90 text-white px-3 py-1.5 rounded-md text-sm">
                  <Download size={16} />
                  Download PDF (₹29)
                </button>
              </div>

              <div className="prose max-w-none text-sm">
                {/* AIM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">AIM</h2>
                  <p>To write a Python program that finds the largest among three numbers entered by the user.</p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Take three numbers as input from the user</li>
                    <li>Compare the first number with the second and third numbers</li>
                    <li>If the first number is greater than both the second and third numbers, it is the largest</li>
                    <li>Otherwise, compare the second number with the third number</li>
                    <li>If the second number is greater than the third number, it is the largest</li>
                    <li>Otherwise, the third number is the largest</li>
                    <li>Display the largest number</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Python program to find the largest among three numbers

#Write Any One Method
# Taking input from the user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))

# Method 1: Using if-elif-else statements
if num1 >= num2 and num1 >= num3:
    largest = num1
elif num2 >= num1 and num2 >= num3:
    largest = num2
else:
    largest = num3

print("The largest number is:", largest)

# Method 2: Using built-in max() function
# largest = max(num1, num2, num3)
# print("The largest number using max() function is:", largest)`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter first number: 25</p>
                    <p>Enter second number: 45</p>
                    <p>Enter third number: 15</p>
                    <p>The largest number is: 45.0</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter first number: 89</p>
                    <p>Enter second number: 32</p>
                    <p>Enter third number: 67</p>
                    <p>The largest number is: 89.0</p>
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
                      <p className="font-medium">What is the purpose of this program?</p>
                      <p className="text-gray-600">
                        The purpose of this program is to find the largest among three numbers entered by the user.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What would happen if we input non-numeric values?</p>
                      <p className="text-gray-600">
                        If non-numeric values are entered, the program will raise a ValueError because the float()
                        function cannot convert strings like "abc" to floating-point numbers.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can we modify this program to find the smallest number?</p>
                      <p className="text-gray-600">
                        We can modify the program by changing the comparison operators from &gt;= to &lt;= or by using
                        the min() function instead of max().
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the advantage of using the max() function?</p>
                      <p className="text-gray-600">
                        The max() function provides a more concise and readable solution. It can also handle more than
                        three numbers easily.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        How would you modify this program to find the largest among four numbers?
                      </p>
                      <p className="text-gray-600">
                        We would need to add another input for the fourth number and either extend the if-elif-else
                        statements or simply add the fourth number to the max() function.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/prime-number"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: Check if a number is prime
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
