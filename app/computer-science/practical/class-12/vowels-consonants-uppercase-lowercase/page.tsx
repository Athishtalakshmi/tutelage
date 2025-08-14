import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function VowelsConsonantsUppercaseLowercasePage() {
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
            <span className="text-[#1f888f] font-medium">Vowels Consonants Uppercase Lowercase</span>
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
                  Read a text file and display the number of vowels/consonants/uppercase/lowercase characters
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
                    To read a text file and display the number of vowels, consonants, uppercase characters, and
                    lowercase characters in the file.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Open the text file in read mode.</li>
                    <li>Initialize counters for vowels, consonants, uppercase, and lowercase characters to 0.</li>
                    <li>Read the entire content of the file.</li>
                    <li>Iterate through each character in the file content.</li>
                    <li>
                      For each character:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Check if it's an alphabetic character</li>
                        <li>If uppercase, increment uppercase counter</li>
                        <li>If lowercase, increment lowercase counter</li>
                        <li>If vowel (a, e, i, o, u), increment vowel counter</li>
                        <li>If consonant (alphabetic but not vowel), increment consonant counter</li>
                      </ul>
                    </li>
                    <li>Display the counts of vowels, consonants, uppercase, and lowercase characters.</li>
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

# Initialize counters
vowels = 0
consonants = 0
uppercase = 0
lowercase = 0

# Read the entire content of the file
content = file.read()

# Define vowels
vowel_list = "aeiouAEIOU"

# Iterate through each character
for char in content:
    if char.isalpha():  # Check if character is alphabetic
        if char.isupper():
            uppercase += 1
        if char.islower():
            lowercase += 1
        
        if char in vowel_list:
            vowels += 1
        else:
            consonants += 1

# Display the results
print("Character Analysis of the file:")
print(f"Number of vowels: {vowels}")
print(f"Number of consonants: {consonants}")
print(f"Number of uppercase characters: {uppercase}")
print(f"Number of lowercase characters: {lowercase}")

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
                    <p>Hello World!</p>
                    <p>This is a SAMPLE file for Testing.</p>
                    <p>Python Programming is FUN.</p>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Character Analysis of the file:</p>
                    <p>Number of vowels: 15</p>
                    <p>Number of consonants: 25</p>
                    <p>Number of uppercase characters: 12</p>
                    <p>Number of lowercase characters: 28</p>
                  </div>
                </div>

                {/* RESULT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">RESULT</h2>
                  <p>
                    The program executed successfully and displayed the count of vowels, consonants, uppercase
                    characters, and lowercase characters from the text file.
                  </p>
                </div>

                {/* KEY POINTS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">KEY POINTS</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>isalpha():</strong> Checks if a character is alphabetic (a-z, A-Z)
                    </li>
                    <li>
                      <strong>isupper():</strong> Checks if a character is uppercase
                    </li>
                    <li>
                      <strong>islower():</strong> Checks if a character is lowercase
                    </li>
                    <li>
                      <strong>Vowels:</strong> a, e, i, o, u (both uppercase and lowercase)
                    </li>
                    <li>
                      <strong>Consonants:</strong> All alphabetic characters except vowels
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
    content = file.read()
    
    vowels = consonants = uppercase = lowercase = 0
    vowel_list = "aeiouAEIOU"
    
    for char in content:
        if char.isalpha():
            if char.isupper():
                uppercase += 1
            if char.islower():
                lowercase += 1
            
            if char in vowel_list:
                vowels += 1
            else:
                consonants += 1
    
    print(f"Vowels: {vowels}")
    print(f"Consonants: {consonants}")
    print(f"Uppercase: {uppercase}")
    print(f"Lowercase: {lowercase}")
# File is automatically closed`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">
                    Method 2: Using functions for better organization
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`def analyze_file(filename):
    vowels = consonants = uppercase = lowercase = 0
    vowel_list = "aeiouAEIOU"
    
    try:
        with open(filename, "r") as file:
            content = file.read()
            
            for char in content:
                if char.isalpha():
                    if char.isupper():
                        uppercase += 1
                    if char.islower():
                        lowercase += 1
                    
                    if char in vowel_list:
                        vowels += 1
                    else:
                        consonants += 1
        
        return vowels, consonants, uppercase, lowercase
    
    except FileNotFoundError:
        print("File not found!")
        return 0, 0, 0, 0

# Call the function
v, c, u, l = analyze_file("sample.txt")
print(f"Vowels: {v}, Consonants: {c}")
print(f"Uppercase: {u}, Lowercase: {l}")`}
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
                      <p className="font-medium text-yellow-800">Incorrect vowel counting</p>
                      <p className="text-yellow-700 text-sm">
                        Remember to include both uppercase and lowercase vowels in your vowel list.
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 border-l-4 border-blue-400">
                      <p className="font-medium text-blue-800">Counting non-alphabetic characters</p>
                      <p className="text-blue-700 text-sm">
                        Always check if a character is alphabetic using isalpha() before counting.
                      </p>
                    </div>
                  </div>
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What does isalpha() function do?</p>
                      <p className="text-gray-600">
                        The isalpha() function returns True if all characters in the string are alphabetic (a-z, A-Z)
                        and there is at least one character.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How do you check if a character is a vowel?</p>
                      <p className="text-gray-600">
                        You can check if a character is in the vowel list "aeiouAEIOU" using the 'in' operator.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What's the difference between isupper() and islower()?</p>
                      <p className="text-gray-600">
                        isupper() returns True if the character is uppercase, while islower() returns True if the
                        character is lowercase.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why do we use read() method?</p>
                      <p className="text-gray-600">
                        The read() method reads the entire content of the file as a single string, making it easy to
                        iterate through each character.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can you handle file not found error?</p>
                      <p className="text-gray-600">
                        You can use try-except block to catch FileNotFoundError and handle it gracefully.
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
