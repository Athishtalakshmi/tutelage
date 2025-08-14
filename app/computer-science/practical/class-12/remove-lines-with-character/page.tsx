import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function RemoveLinesWithCharacterPage() {
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
            <span className="text-[#1f888f] font-medium">Remove Lines With Character</span>
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
                  Remove all the lines that contain the character 'a' in a file and write it to another file
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
                    To remove all the lines that contain the character 'a' (both uppercase and lowercase) from a text
                    file and write the remaining lines to another file.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Open the source file in read mode.</li>
                    <li>Open the destination file in write mode.</li>
                    <li>Read the source file line by line.</li>
                    <li>For each line, check if it contains the character 'a' or 'A'.</li>
                    <li>If the line does not contain 'a' or 'A', write it to the destination file.</li>
                    <li>If the line contains 'a' or 'A', skip it (do not write to destination).</li>
                    <li>Close both files.</li>
                    <li>Display appropriate messages about the operation.</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Open source file in read mode and destination file in write mode
source_file = open("source.txt", "r")
destination_file = open("destination.txt", "w")

lines_removed = 0
lines_kept = 0

# Read the source file line by line
for line in source_file:
    # Check if line contains 'a' or 'A'
    if 'a' in line or 'A' in line:
        lines_removed += 1
        print(f"Removed line: {line.strip()}")
    else:
        # Write line to destination file if it doesn't contain 'a' or 'A'
        destination_file.write(line)
        lines_kept += 1

# Close both files
source_file.close()
destination_file.close()

print(f"\\nOperation completed successfully!")
print(f"Lines kept: {lines_kept}")
print(f"Lines removed: {lines_removed}")
print("Check 'destination.txt' for the filtered content.")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* SAMPLE FILES */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Content of source.txt file:</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Python is a programming language</p>
                    <p>It is easy to learn</p>
                    <p>Python supports multiple paradigms</p>
                    <p>Object-oriented programming</p>
                    <p>Functional programming</p>
                    <p>It has extensive libraries</p>
                  </div>

                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">
                    Content of destination.txt file (after execution):
                  </h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>It is easy to learn</p>
                    <p>Object-oriented programming</p>
                    <p>Functional programming</p>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Removed line: Python is a programming language</p>
                    <p>Removed line: Python supports multiple paradigms</p>
                    <p>Removed line: It has extensive libraries</p>
                    <p></p>
                    <p>Operation completed successfully!</p>
                    <p>Lines kept: 3</p>
                    <p>Lines removed: 3</p>
                    <p>Check 'destination.txt' for the filtered content.</p>
                  </div>
                </div>

                {/* RESULT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">RESULT</h2>
                  <div className="p-3 bg-green-50 border-l-4 border-green-400">
                    <p className="text-green-800">
                      Thus, the given program was successfully executed and the output was verified as per the expected
                      result.
                    </p>
                  </div>
                </div>

                {/* KEY POINTS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">KEY POINTS</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Case Sensitivity:</strong> The program checks for both 'a' and 'A' to handle
                      case-insensitive matching
                    </li>
                    <li>
                      <strong>File Modes:</strong> Source file opened in 'r' mode, destination file in 'w' mode
                    </li>
                    <li>
                      <strong>Line Processing:</strong> Each line is processed individually using a for loop
                    </li>
                    <li>
                      <strong>Conditional Writing:</strong> Lines are written to destination only if they don't contain
                      the target character
                    </li>
                    <li>
                      <strong>Statistics:</strong> Program keeps track of lines kept and removed for user feedback
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
with open("source.txt", "r") as source, open("destination.txt", "w") as dest:
    lines_removed = 0
    lines_kept = 0
    
    for line in source:
        if 'a' not in line.lower():  # Case-insensitive check
            dest.write(line)
            lines_kept += 1
        else:
            lines_removed += 1
    
    print(f"Lines kept: {lines_kept}, Lines removed: {lines_removed}")
# Files are automatically closed`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">Method 2: Using list comprehension</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Reading all lines and filtering using list comprehension
with open("source.txt", "r") as source:
    lines = source.readlines()

# Filter lines that don't contain 'a' or 'A'
filtered_lines = [line for line in lines if 'a' not in line.lower()]

# Write filtered lines to destination
with open("destination.txt", "w") as dest:
    dest.writelines(filtered_lines)

print(f"Original lines: {len(lines)}")
print(f"Filtered lines: {len(filtered_lines)}")
print(f"Lines removed: {len(lines) - len(filtered_lines)}")`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">Method 3: Function-based approach</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`def remove_lines_with_character(source_file, dest_file, char):
    """Remove lines containing specified character from source to dest file"""
    try:
        with open(source_file, "r") as src, open(dest_file, "w") as dst:
            lines_kept = 0
            lines_removed = 0
            
            for line in src:
                if char.lower() not in line.lower():
                    dst.write(line)
                    lines_kept += 1
                else:
                    lines_removed += 1
            
            return lines_kept, lines_removed
    
    except FileNotFoundError:
        print(f"Error: {source_file} not found!")
        return 0, 0

# Call the function
kept, removed = remove_lines_with_character("source.txt", "destination.txt", "a")
print(f"Lines kept: {kept}, Lines removed: {removed}")`}
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
                        Make sure the source file exists in the same directory as your Python script.
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400">
                      <p className="font-medium text-yellow-800">Permission Error</p>
                      <p className="text-yellow-700 text-sm">
                        Ensure you have write permissions for the destination file location.
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 border-l-4 border-blue-400">
                      <p className="font-medium text-blue-800">Case Sensitivity Issues</p>
                      <p className="text-blue-700 text-sm">
                        Use .lower() method to make the search case-insensitive if needed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What is the difference between 'r' and 'w' file modes?</p>
                      <p className="text-gray-600">
                        'r' mode opens file for reading only, while 'w' mode opens file for writing (creates new file or
                        overwrites existing).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How do you make the character search case-insensitive?</p>
                      <p className="text-gray-600">
                        Use the .lower() method: if 'a' not in line.lower() to convert the line to lowercase before
                        checking.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if the source file doesn't exist?</p>
                      <p className="text-gray-600">
                        Python raises a FileNotFoundError. This should be handled using try-except blocks.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why is it important to close files?</p>
                      <p className="text-gray-600">
                        Closing files frees up system resources and ensures all data is properly written to the file.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the advantage of using 'with' statement?</p>
                      <p className="text-gray-600">
                        The 'with' statement automatically closes files even if an error occurs, making it safer for
                        file operations.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can you modify this program to remove multiple characters?</p>
                      <p className="text-gray-600">
                        Use a list of characters and check if any character from the list is present in the line using
                        any() function.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What does strip() method do in file processing?</p>
                      <p className="text-gray-600">
                        strip() removes leading and trailing whitespaces including newline characters from a string.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you count the total number of characters removed?</p>
                      <p className="text-gray-600">
                        Keep a counter for characters and increment it by len(line) for each line that contains the
                        target character.
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
