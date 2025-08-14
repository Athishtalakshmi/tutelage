import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function ArithmeticOperationsPage() {
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
            <span className="text-[#1f888f] font-medium">Arithmetic Operations</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Basic Arithmetic Operations Calculator</h1>
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
                    To write a Python program that performs basic arithmetic operations (addition, subtraction,
                    multiplication, division, and modulus) on two numbers entered by the user.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Take two numbers as input from the user</li>
                    <li>Perform addition and display the result</li>
                    <li>Perform subtraction and display the result</li>
                    <li>Perform multiplication and display the result</li>
                    <li>Perform division and display the result (check for division by zero)</li>
                    <li>Perform modulus operation and display the result</li>
                    <li>Perform floor division and display the result</li>
                    <li>Perform exponentiation and display the result</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Python program for basic arithmetic operations

print("Basic Arithmetic Operations Calculator")
print("=" * 45)

# Taking input from the user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print("\\n" + "=" * 45)
print("ARITHMETIC OPERATIONS RESULTS")
print("=" * 45)

# Addition
addition = num1 + num2
print(f"Addition: {num1} + {num2} = {addition}")

# Subtraction
subtraction = num1 - num2
print(f"Subtraction: {num1} - {num2} = {subtraction}")

# Multiplication
multiplication = num1 * num2
print(f"Multiplication: {num1} × {num2} = {multiplication}")

# Division (with zero division check)
if num2 != 0:
    division = num1 / num2
    print(f"Division: {num1} ÷ {num2} = {division:.2f}")
else:
    print("Division: Cannot divide by zero!")

# Modulus (remainder)
if num2 != 0:
    modulus = num1 % num2
    print(f"Modulus: {num1} % {num2} = {modulus}")
else:
    print("Modulus: Cannot find remainder when dividing by zero!")

# Floor Division
if num2 != 0:
    floor_division = num1 // num2
    print(f"Floor Division: {num1} // {num2} = {floor_division}")
else:
    print("Floor Division: Cannot divide by zero!")

# Exponentiation
exponentiation = num1 ** num2
print(f"Exponentiation: {num1} ^ {num2} = {exponentiation}")

print("=" * 45)

# Additional calculations
print("\\nADDITIONAL INFORMATION:")
print("-" * 25)
print(f"Absolute difference: |{num1} - {num2}| = {abs(num1 - num2)}")
print(f"Average: ({num1} + {num2}) / 2 = {(num1 + num2) / 2}")
print(f"Maximum: max({num1}, {num2}) = {max(num1, num2)}")
print(f"Minimum: min({num1}, {num2}) = {min(num1, num2)}")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Basic Arithmetic Operations Calculator</p>
                    <p>=============================================</p>
                    <p>Enter first number: 15</p>
                    <p>Enter second number: 4</p>
                    <p></p>
                    <p>=============================================</p>
                    <p>ARITHMETIC OPERATIONS RESULTS</p>
                    <p>=============================================</p>
                    <p>Addition: 15.0 + 4.0 = 19.0</p>
                    <p>Subtraction: 15.0 - 4.0 = 11.0</p>
                    <p>Multiplication: 15.0 × 4.0 = 60.0</p>
                    <p>Division: 15.0 ÷ 4.0 = 3.75</p>
                    <p>Modulus: 15.0 % 4.0 = 3.0</p>
                    <p>Floor Division: 15.0 // 4.0 = 3.0</p>
                    <p>Exponentiation: 15.0 ^ 4.0 = 50625.0</p>
                    <p>=============================================</p>
                    <p></p>
                    <p>ADDITIONAL INFORMATION:</p>
                    <p>-------------------------</p>
                    <p>Absolute difference: |15.0 - 4.0| = 11.0</p>
                    <p>Average: (15.0 + 4.0) / 2 = 9.5</p>
                    <p>Maximum: max(15.0, 4.0) = 15.0</p>
                    <p>Minimum: min(15.0, 4.0) = 4.0</p>
                  </div>
                </div>

                {/* CONCLUSION */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">CONCLUSION</h2>
                  <p>Thus, the given program was successfully executed and the output was verified as per the expected result.</p>                 
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What are arithmetic operators in Python?</p>
                      <p className="text-gray-600">
                        Arithmetic operators are symbols used to perform mathematical operations: +, -, *, /, %, //, and
                        **.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the difference between / and // operators?</p>
                      <p className="text-gray-600">
                        / performs true division returning a float, while // performs floor division returning the
                        quotient without the decimal part.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What does the modulus (%) operator do?</p>
                      <p className="text-gray-600">
                        The modulus operator returns the remainder after division. For example, 15 % 4 = 3.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why do we check for division by zero?</p>
                      <p className="text-gray-600">
                        Division by zero is mathematically undefined and causes a ZeroDivisionError in Python, so we
                        check to prevent program crashes.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the exponentiation operator?</p>
                      <p className="text-gray-600">
                        The ** operator performs exponentiation, raising the first number to the power of the second
                        number.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is operator precedence?</p>
                      <p className="text-gray-600">
                        Operator precedence determines the order of operations. In Python: ** &gt; *, /, //, % &gt; +,
                        -. Parentheses have highest precedence.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What does the abs() function do?</p>
                      <p className="text-gray-600">
                        The abs() function returns the absolute value of a number, which is always positive or zero.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How do you format floating-point numbers in output?</p>
                      <p className="text-gray-600">
                        You can use f-strings with format specifiers like {`{value:.2f}`} to display 2 decimal places.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/pattern-generation"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: Pattern Generation
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
