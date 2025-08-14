import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function StringPalindromePage() {
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
            <span className="text-[#1f888f] font-medium">String Palindrome</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Check Palindrome String and Convert Case</h1>
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
                    To write a Python program that determines whether a string is a palindrome or not and demonstrates
                    case conversion of characters in a string.
                  </p>

                  <div className="bg-blue-50 p-3 rounded-md mt-3">
                    <h3 className="font-medium text-blue-800 mb-2">Key Concepts:</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>
                        • <strong>Palindrome:</strong> A string that reads the same forwards and backwards
                      </li>
                      <li>
                        • <strong>String Slicing:</strong> Using [::-1] to reverse a string
                      </li>
                      <li>
                        • <strong>Case Conversion:</strong> Converting between uppercase and lowercase
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <h3 className="font-medium mb-2">For Palindrome Check:</h3>
                  <ol className="list-decimal pl-5 space-y-1 mb-4">
                    <li>Start</li>
                    <li>Input a string from the user</li>
                    <li>Create a reversed version of the string using slicing [::-1]</li>
                    <li>Compare the original string with the reversed string</li>
                    <li>If they are equal, the string is a palindrome</li>
                    <li>Otherwise, it is not a palindrome</li>
                    <li>Display the result</li>
                    <li>Stop</li>
                  </ol>

                  <h3 className="font-medium mb-2">For Case Conversion:</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Input a string from the user</li>
                    <li>Use built-in string methods for case conversion</li>
                    <li>Display original, uppercase, lowercase, and title case versions</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>

                  <h3 className="font-medium mb-2">Palindrome Check Program:</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Input a string and determine whether it is a palindrome or not
original = input("Enter a string:")
reverse = original[::-1]  # [::-1] will reverse the string
# print("Reverse String=", reverse)

if original == reverse:
    print("String is Palindrome:")
else:
    print("String is not Palindrome:")`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="font-medium mb-2">Case Conversion Program:</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Convert the case of characters in a string
text = input("Enter a string: ")

print("Original String:", text)
print("Uppercase:", text.upper())
print("Lowercase:", text.lower())
print("Title Case:", text.title())
print("Capitalize:", text.capitalize())
print("Swapcase:", text.swapcase())`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>

                  <h3 className="font-medium mb-2">Test Case 1 - Palindrome String:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter a string: madam</p>
                    <p>String is Palindrome:</p>
                  </div>

                  <h3 className="font-medium mb-2">Test Case 2 - Non-Palindrome String:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter a string: hello</p>
                    <p>String is not Palindrome:</p>
                  </div>

                  <h3 className="font-medium mb-2">Test Case 3 - Case Conversion:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter a string: Hello World</p>
                    <p>Original String: Hello World</p>
                    <p>Uppercase: HELLO WORLD</p>
                    <p>Lowercase: hello world</p>
                    <p>Title Case: Hello World</p>
                    <p>Capitalize: Hello world</p>
                    <p>Swapcase: hELLO wORLD</p>
                  </div>
                </div>

                {/* CONCLUSION */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">CONCLUSION</h2>
                  <p>
                    In this program, we learned how to check if a string is a palindrome using string slicing and how to
                    perform various case conversions. Key learning outcomes include:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 mt-2">
                    <li>Understanding string slicing with [::-1] for reversing strings</li>
                    <li>String comparison for palindrome detection</li>
                    <li>Using built-in string methods for case conversion</li>
                    <li>Difference between capitalize(), title(), and other case methods</li>
                  </ol>
                  <p className="mt-2">
                    This program demonstrates fundamental string manipulation techniques that are essential for text
                    processing applications.
                  </p>
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What is a palindrome string?</p>
                      <p className="text-gray-600">
                        A palindrome string is a string that reads the same forwards and backwards. Examples include
                        "madam", "racecar", "level", etc.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does [::-1] work in Python?</p>
                      <p className="text-gray-600">
                        [::-1] is string slicing syntax where the third parameter -1 indicates step size of -1, which
                        reverses the string by reading it backwards.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the difference between upper() and capitalize()?</p>
                      <p className="text-gray-600">
                        upper() converts all characters to uppercase, while capitalize() only converts the first
                        character to uppercase and rest to lowercase.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you check palindrome ignoring case sensitivity?</p>
                      <p className="text-gray-600">
                        Convert both original and reversed strings to the same case using lower() or upper() before
                        comparison: original.lower() == reverse.lower()
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What does swapcase() method do?</p>
                      <p className="text-gray-600">
                        swapcase() converts uppercase characters to lowercase and lowercase characters to uppercase in
                        the string.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can you check palindrome without using slicing?</p>
                      <p className="text-gray-600">
                        Use a loop to compare characters from start and end positions moving towards center, or use
                        reversed() function.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the difference between title() and capitalize()?</p>
                      <p className="text-gray-600">
                        title() capitalizes the first letter of each word, while capitalize() only capitalizes the first
                        letter of the entire string.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you handle spaces and punctuation in palindrome checking?</p>
                      <p className="text-gray-600">
                        Remove spaces and punctuation using replace() or regular expressions, then check palindrome on
                        the cleaned string.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-between mt-8">
                  <Link
                    href="/computer-science/practical/class-11/string-analysis"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                    Previous: String Analysis
                  </Link>
                  <Link
                    href="/computer-science/practical/class-11/list-min-max"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next: List Min-Max
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
