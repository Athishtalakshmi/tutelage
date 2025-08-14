import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function TextFileLineByLinePage() {
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
            <Link href="/computer-science/practical/class-12" className="hover:text-[#1f888f]">
              Class 12
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Text File Line By Line</span>
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
                  Read a text file line by line and display each word separated by a #
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
                  <p>To read a text file line by line and display each word separated by a # symbol.</p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Open the text file in read mode.</li>
                    <li>Read the file line by line using a loop.</li>
                    <li>For each line, remove leading/trailing whitespaces using strip().</li>
                    <li>Split the line into words using split().</li>
                    <li>Join the words using # as the separator using join().</li>
                    <li>Print the joined words.</li>
                    <li>Close the file.</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Open the file in read mode
file = open("sample.txt", "r")

# Read the file line by line
for line in file:
    line = line.strip()  # Remove leading/trailing whitespace or newline
    words = line.split()  # Split line into words
    output = '#'.join(words)  # Join words using #
    print(output)  # Display the formatted line

# Close the file
file.close()`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* SAMPLE FILE CONTENT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Content of sample.txt file:</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>CBSE Computer Science Class 12</p>
                    <p>File handling is an important topic</p>
                    <p>Python makes file processing easy</p>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>CBSE#Computer#Science#Class#12</p>
                    <p>File#handling#is#an#important#topic</p>
                    <p>Python#makes#file#processing#easy</p>
                  </div>
                </div>

                {/* RESULT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">RESULT</h2>
                  <p>
                    The program executed successfully and displayed each word from the text file separated by a #
                    symbol, as required.
                  </p>
                </div>

                {/* KEY POINTS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">KEY POINTS</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>strip():</strong> Removes leading and trailing whitespaces including newline characters
                    </li>
                    <li>
                      <strong>split():</strong> Splits a string into a list of words based on whitespace
                    </li>
                    <li>
                      <strong>join():</strong> Joins elements of a list into a string using a specified separator
                    </li>
                    <li>
                      <strong>File handling:</strong> Always close the file after reading to free up system resources
                    </li>
                  </ul>
                </div>

                {/* PROGRAM VARIATIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM VARIATIONS</h2>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">
                    Method 1: Using 'with' statement (Recommended)
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Using 'with' statement for better file handling
with open("sample.txt", "r") as file:
    for line in file:
        line = line.strip()
        words = line.split()
        output = '#'.join(words)
        print(output)
# File is automatically closed`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">
                    Method 2: Reading all lines at once
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Reading all lines at once
with open("sample.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        line = line.strip()
        words = line.split()
        output = '#'.join(words)
        print(output)`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* COMMON ERRORS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">COMMON ERRORS & SOLUTIONS</h2>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 border-l-4 border-red-400">
                      <p className="font-medium text-red-800">FileNotFoundError</p>
                      <p className="text-red-700 text-sm">
                        Make sure the file "sample.txt" exists in the same directory as your Python script.
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400">
                      <p className="font-medium text-yellow-800">Not closing the file</p>
                      <p className="text-yellow-700 text-sm">
                        Always close the file using file.close() or use 'with' statement for automatic closure.
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 border-l-4 border-blue-400">
                      <p className="font-medium text-blue-800">Empty lines in output</p>
                      <p className="text-blue-700 text-sm">
                        Use strip() to remove whitespaces and check if line is not empty before processing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What is the purpose of strip() function?</p>
                      <p className="text-gray-600">
                        The strip() function removes leading and trailing whitespaces, including newline characters from
                        a string.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What does split() function do?</p>
                      <p className="text-gray-600">
                        The split() function splits a string into a list of words based on whitespace characters
                        (spaces, tabs, newlines).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does join() function work?</p>
                      <p className="text-gray-600">
                        The join() function joins elements of a list into a single string using a specified separator.
                        Here, '#'.join(words) joins words with # symbol.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why should we close the file?</p>
                      <p className="text-gray-600">
                        Closing the file frees up system resources and ensures that all data is properly written to the
                        file.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the advantage of using 'with' statement?</p>
                      <p className="text-gray-600">
                        The 'with' statement automatically closes the file even if an error occurs, making it a safer
                        way to handle files.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-12"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Back to Class 12 Programs
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
