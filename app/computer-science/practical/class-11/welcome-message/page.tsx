import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function WelcomeMessagePage() {
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
            <span className="text-[#1f888f] font-medium">Welcome Message</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Display Welcome Message</h1>
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
                    To write a Python program that displays a welcome message to the user with proper formatting and decorative elements.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Take the user's name as input</li>
                    <li>Display a decorative border using asterisks</li>
                    <li>Display the welcome message with the user's name</li>
                    <li>Add additional formatting for better presentation</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
    <pre>
      <code>
        {`# Python program to display welcome message
print("Welcome to Python Programming!")`}
      </code>
    </pre>
  </div>
</div>


                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Welcome to Python Programming!</p>
                  </div>
                </div>

                {/* CONCLUSION */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">CONCLUSION</h2>
                    <p className="mt-2">
                    Thus, the given program was successfully executed and the output was verified as per the expected result.
                  </p>
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What is the purpose of the print() function in Python?</p>
                      <p className="text-gray-600">
                        The print() function is used to display output on the screen. It can print strings, numbers,
                        variables, and expressions.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How do you take input from the user in Python?</p>
                      <p className="text-gray-600">
                        We use the input() function to take input from the user. It always returns a string, so we need
                        to convert it to other data types if required.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is string formatting and why is it useful?</p>
                      <p className="text-gray-600">
                        String formatting allows us to insert variables into strings. F-strings (f"text {"{name}"}")
                        provide a clean and readable way to format strings.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What does the * operator do with strings?</p>
                      <p className="text-gray-600">
                        The * operator with strings performs string multiplication, repeating the string a specified
                        number of times. For example, "*" * 5 produces "*****".
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the purpose of escape sequences like \\n?</p>
                      <p className="text-gray-600">
                        Escape sequences represent special characters. \\n represents a newline character, \\t
                        represents a tab, and \\\\ represents a backslash.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does the center() method work?</p>
                      <p className="text-gray-600">
                        The center() method centers a string within a specified width by adding spaces on both sides.
                        For example, "Hello".center(10) produces " Hello ".
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the difference between single and double quotes in Python?</p>
                      <p className="text-gray-600">
                        Both single ('') and double ("") quotes can be used to create strings in Python. They are
                        functionally equivalent, but you can use one inside the other.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can you calculate the length of a string?</p>
                      <p className="text-gray-600">
                        You can use the len() function to calculate the length of a string. For example, len("Hello")
                        returns 5.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/number-comparison"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: Number Comparison
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
