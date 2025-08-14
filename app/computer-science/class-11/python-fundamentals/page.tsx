import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TOC from "./toc"
import Related from "./related"
import SimplePdfButton from "@/components/simple-pdf-button"

export default function PythonFundamentalsPage() {
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
            <Link href="/computer-science/class-11" className="hover:text-[#1f888f]">
              Class 11
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Python Fundamentals</span>
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
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-xl font-bold text-[#1f888f]">Python Fundamentals</h1>
                <SimplePdfButton title="Python Fundamentals Notes" price={49} pdfUrl="/pdfs/python-fundamentals.pdf" />
              </div>

              <div className="prose max-w-none text-sm">
                <p className="mb-4">
                  Python is a high-level, interpreted programming language known for its simplicity and readability.
                  This chapter covers the fundamental concepts of Python programming that form the foundation for more
                  advanced topics.
                </p>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">1. Introduction to Python</h2>
                <p className="mb-3">
                  Python was created by Guido van Rossum and first released in 1991. It is an interpreted, high-level,
                  general-purpose programming language that emphasizes code readability with its notable use of
                  significant whitespace.
                </p>
                <p className="mb-3">Key features of Python include:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Simple and easy to learn syntax</li>
                  <li>Interpreted language (no need for compilation)</li>
                  <li>Dynamically typed (no need to declare variable types)</li>
                  <li>Object-oriented programming support</li>
                  <li>Extensive standard library</li>
                  <li>Cross-platform compatibility</li>
                </ul>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">2. Python Installation and Setup</h2>
                <p className="mb-3">
                  To start programming in Python, you need to install Python on your computer. The latest version can be
                  downloaded from the official Python website (python.org). After installation, you can use IDLE
                  (Integrated Development and Learning Environment) that comes with Python, or other IDEs like PyCharm,
                  VS Code, or Jupyter Notebook.
                </p>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">3. Basic Syntax and First Program</h2>
                <p className="mb-3">Let's start with a simple "Hello, World!" program:</p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code># This is a comment print("Hello, World!")</code>
                  </pre>
                </div>
                <p className="mb-3">When you run this program, it will display:</p>
                <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">Hello, World!</div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">4. Variables and Data Types</h2>
                <p className="mb-3">
                  In Python, you don't need to declare variables before using them. Variables are created when you
                  assign a value to them.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # Integer age = 25 # Float height = 5.9 # String name = "John Doe" # Boolean is_student = True #
                      Printing variables print("Name:", name) print("Age:", age) print("Height:", height) print("Is
                      student:", is_student)
                    </code>
                  </pre>
                </div>
                <p className="mb-3">Python has the following basic data types:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <strong>Numeric Types:</strong> int, float, complex
                  </li>
                  <li>
                    <strong>Text Type:</strong> str
                  </li>
                  <li>
                    <strong>Boolean Type:</strong> bool
                  </li>
                  <li>
                    <strong>Sequence Types:</strong> list, tuple, range
                  </li>
                  <li>
                    <strong>Mapping Type:</strong> dict
                  </li>
                  <li>
                    <strong>Set Types:</strong> set, frozenset
                  </li>
                  <li>
                    <strong>None Type:</strong> NoneType
                  </li>
                </ul>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">5. Operators</h2>
                <p className="mb-3">
                  Python supports various operators for performing operations on variables and values:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <strong>Arithmetic Operators:</strong> +, -, *, /, %, **, //
                  </li>
                  <li>
                    <strong>Assignment Operators:</strong> =, +=, -=, *=, /=, %=, **=, //=
                  </li>
                  <li>
                    <strong>Comparison Operators:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;=
                  </li>
                  <li>
                    <strong>Logical Operators:</strong> and, or, not
                  </li>
                  <li>
                    <strong>Identity Operators:</strong> is, is not
                  </li>
                  <li>
                    <strong>Membership Operators:</strong> in, not in
                  </li>
                </ul>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # Arithmetic operators a = 10 b = 3 print("a + b =", a + b) # Addition print("a - b =", a - b) #
                      Subtraction print("a * b =", a * b) # Multiplication print("a / b =", a / b) # Division print("a %
                      b =", a % b) # Modulus print("a ** b =", a ** b) # Exponentiation print("a // b =", a // b) #
                      Floor division
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">6. Input and Output</h2>
                <p className="mb-3">Python provides built-in functions for input and output operations:</p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # Taking input from the user name = input("Enter your name: ") # Converting input to integer age =
                      int(input("Enter your age: ")) # Output print("Hello,", name) print("You are", age, "years old") #
                      Formatted output using f-strings (Python 3.6+) print(f"Hello, {"{name}"}. You are {"{age}"} years
                      old.")
                    </code>
                  </pre>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <h3 className="font-bold text-yellow-800 mb-1">Important Note</h3>
                  <p className="text-yellow-800 text-sm">
                    Always remember to convert the input to the appropriate data type when needed. The input() function
                    returns a string by default, so you need to convert it to int, float, etc., if you want to perform
                    numerical operations.
                  </p>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">7. Type Conversion</h2>
                <p className="mb-3">Python provides built-in functions for converting from one data type to another:</p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # Type conversion x = 10 # Integer y = 3.14 # Float z = "20" # String # Convert integer to float
                      float_x = float(x) print(float_x) # Output: 10.0 # Convert float to integer int_y = int(y)
                      print(int_y) # Output: 3 (truncates decimal part) # Convert string to integer int_z = int(z)
                      print(int_z) # Output: 20 # Convert to string str_x = str(x) print(str_x) # Output: "10"
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">8. Comments in Python</h2>
                <p className="mb-3">
                  Comments are used to explain the code and make it more readable. Python supports single-line and
                  multi-line comments:
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # This is a single-line comment """ This is a multi-line comment or docstring that can span
                      multiple lines """ print("Hello, World!") # This is an inline comment
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Practice Questions</h2>
                <ol className="list-decimal pl-5 mb-4 space-y-2">
                  <li>
                    Write a Python program to calculate the area of a rectangle. Take length and width as input from the
                    user.
                  </li>
                  <li>
                    Write a Python program to convert temperature from Celsius to Fahrenheit. The formula is: F = (C *
                    9/5) + 32
                  </li>
                  <li>
                    Write a Python program to swap the values of two variables without using a temporary variable.
                  </li>
                  <li>
                    Write a Python program to calculate the simple interest. The formula is: SI = (P * R * T) / 100,
                    where P is the principal amount, R is the rate of interest, and T is the time period.
                  </li>
                  <li>Write a Python program to find the average of three numbers entered by the user.</li>
                </ol>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/class-11/flow-of-control"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Chapter: Flow of Control
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
