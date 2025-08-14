import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function ComputerSystemPage() {
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
            <Link href="/informatics-practices" className="hover:text-[#1f888f]">
              Informatics Practices
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href="/computer-science/class-11" className="hover:text-[#1f888f]">
              Class 11
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium"> Informatics Practices</span>
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
              <h1 className="text-xl font-bold mb-4 text-[#1f888f]"> Informatics Practices</h1>

              <div className="prose max-w-none text-sm">
                <p className="mb-4">
                  Flow of control refers to the order in which the statements in a program are executed. Python provides
                  various control structures that allow you to control the flow of your program based on conditions and
                  loops.
                </p>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">1. Conditional Statements</h2>
                <p className="mb-3">
                  Conditional statements allow you to execute certain blocks of code based on whether a condition is
                  true or false.
                </p>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">1.1 if Statement</h3>
                <p className="mb-3">
                  The if statement is used to execute a block of code only if a specified condition is true.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code># Simple if statement x = 10 if x {">"} 5: print("x is greater than 5")</code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">1.2 if-else Statement</h3>
                <p className="mb-3">
                  The if-else statement allows you to execute one block of code if the condition is true and another
                  block if it is false.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # if-else statement x = 3 if x {">"} 5: print("x is greater than 5") else: print("x is not greater
                      than 5")
                    </code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">1.3 if-elif-else Statement</h3>
                <p className="mb-3">
                  The if-elif-else statement allows you to check multiple conditions and execute different blocks of
                  code accordingly.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # if-elif-else statement marks = 75 if marks {">"} 90: grade = "A" elif marks {">"} 80: grade =
                      "B" elif marks {">"} 70: grade = "C" elif marks {">"} 60: grade = "D" else: grade = "F"
                      print(f"Grade: {"{grade}"}")
                    </code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">1.4 Nested if Statements</h3>
                <p className="mb-3">
                  You can also nest if statements inside other if statements to check for multiple conditions.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # Nested if statement x = 10 y = 5 if x {">"} 5: print("x is greater than 5") if y {"<"} 10:
                      print("y is less than 10")
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">2. Looping Statements</h2>
                <p className="mb-3">
                  Loops are used to execute a block of code repeatedly as long as a condition is true or for a specified
                  number of times.
                </p>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">2.1 for Loop</h3>
                <p className="mb-3">
                  The for loop is used to iterate over a sequence (like a list, tuple, string) or other iterable
                  objects.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # for loop with a list fruits = ["apple", "banana", "cherry"] for fruit in fruits: print(fruit) #
                      for loop with range for i in range(5): print(i) # Prints 0, 1, 2, 3, 4
                    </code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">2.2 while Loop</h3>
                <p className="mb-3">
                  The while loop executes a block of code as long as a specified condition is true.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code># while loop count = 0 while count {"<"} 5: print(count) count += 1 # Increment count</code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">3. Loop Control Statements</h2>
                <p className="mb-3">Python provides statements to control the flow of loops.</p>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">3.1 break Statement</h3>
                <p className="mb-3">The break statement is used to exit a loop prematurely.</p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # break statement for i in range(10): if i == 5: break # Exit the loop when i equals 5 print(i) #
                      Prints 0, 1, 2, 3, 4
                    </code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">3.2 continue Statement</h3>
                <p className="mb-3">
                  The continue statement is used to skip the current iteration of a loop and continue with the next
                  iteration.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # continue statement for i in range(10): if i == 5: continue # Skip iteration when i equals 5
                      print(i) # Prints 0, 1, 2, 3, 4, 6, 7, 8, 9
                    </code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">3.3 pass Statement</h3>
                <p className="mb-3">
                  The pass statement is a null operation; nothing happens when it executes. It is used as a placeholder.
                </p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>
                      # pass statement for i in range(5): if i == 3: pass # Do nothing when i equals 3 print(i) # Prints
                      0, 1, 2, 3, 4
                    </code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Practice Questions</h2>
                <ol className="list-decimal pl-5 mb-4 space-y-2">
                  <li>Write a Python program to check if a number is positive, negative, or zero.</li>
                  <li>Write a Python program to find the largest among three numbers using nested if statements.</li>
                  <li>Write a Python program to print all even numbers between 1 and 20 using a for loop.</li>
                  <li>Write a Python program to calculate the factorial of a number using a while loop.</li>
                  <li>Write a Python program to print the Fibonacci sequence up to a given number using loops.</li>
                </ol>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/class-11/functions"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Chapter: Functions
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
