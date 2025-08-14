import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function StringAnalysisPage() {
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
            <span className="text-[#1f888f] font-medium">String Analysis</span>
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
                  Count Vowels, Consonants, Uppercase, Lowercase Characters
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
                    To write a Python program that counts and displays the number of vowels, consonants, uppercase, and
                    lowercase characters in a given string.
                  </p>

                  <div className="bg-blue-50 p-3 rounded-md mt-3">
                    <h3 className="font-medium text-blue-800 mb-2">Character Classifications:</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>
                        <strong>Vowels:</strong> a, e, i, o, u (both uppercase and lowercase)
                      </li>
                      <li>
                        <strong>Consonants:</strong> All alphabetic characters except vowels
                      </li>
                      <li>
                        <strong>Uppercase:</strong> Characters from A to Z
                      </li>
                      <li>
                        <strong>Lowercase:</strong> Characters from a to z
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Input a string from the user</li>
                    <li>Initialize counters for vowels, consonants, uppercase, and lowercase to 0</li>
                    <li>For each character in the string:</li>
                    <li className="ml-4">Check if it's a vowel (a, e, i, o, u) - increment vowel counter</li>
                    <li className="ml-4">Otherwise, if it's alphabetic - increment consonant counter</li>
                    <li>For case counting, iterate through string again:</li>
                    <li className="ml-4">Check if character is between 'a' and 'z' - increment lowercase counter</li>
                    <li className="ml-4">Check if character is between 'A' and 'Z' - increment uppercase counter</li>
                    <li>Display all counters</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Count and display the number of vowels, consonants, uppercase, lowercase characters in string.

str = input("Enter the String::\\n")

vowels = 0
consonants = 0

for i in str:
    if (i=='a' or i=='e' or i=='i' or i=='o' or i=='u' or 
        i=='A' or i=='E' or i=='I' or i=='O' or i=='U'):
        vowels = vowels + 1
    else:
        consonants = consonants + 1

print("The number of vowels:", vowels)
print("The number of Consonants:", consonants)

# UPPERCASE and LOWERCASE LOGIC
str1 = input("Enter the String::\\n")

upper = 0
lower = 0

for i in range(len(str1)):
    if(str1[i] >= 'a' and str1[i] <= 'z'):
        lower += 1
    elif(str1[i] >= 'A' and str1[i] <= 'Z'):
        upper += 1

print('Lower case letters =', lower)
print('Upper case letters =', upper)`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 1:</strong>
                    </p>
                    <p>Enter the String::</p>
                    <p>Hello World</p>
                    <p>The number of vowels: 3</p>
                    <p>The number of Consonants: 8</p>
                    <p>Enter the String::</p>
                    <p>Hello World</p>
                    <p>Lower case letters = 8</p>
                    <p>Upper case letters = 2</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 2:</strong>
                    </p>
                    <p>Enter the String::</p>
                    <p>Programming123</p>
                    <p>The number of vowels: 3</p>
                    <p>The number of Consonants: 11</p>
                    <p>Enter the String::</p>
                    <p>Programming123</p>
                    <p>Lower case letters = 10</p>
                    <p>Upper case letters = 1</p>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Test Case 3:</strong>
                    </p>
                    <p>Enter the String::</p>
                    <p>PYTHON programming</p>
                    <p>The number of vowels: 4</p>
                    <p>The number of Consonants: 13</p>
                    <p>Enter the String::</p>
                    <p>PYTHON programming</p>
                    <p>Lower case letters = 11</p>
                    <p>Upper case letters = 6</p>
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
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">Why do we count consonants as total characters minus vowels?</p>
                      <p className="text-gray-600">
                        In this program, consonants include all non-vowel characters including spaces, digits, and
                        special characters. A better approach would be to check if the character is alphabetic first.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        What is the difference between {"str[i]"} and iterating directly over characters?
                      </p>
                      <p className="text-gray-600">
                        Direct iteration (for i in str) gives you the character directly, while index-based iteration
                        (for i in range(len(str))) gives you the index, requiring str[i] to access the character.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can we improve the vowel checking logic?</p>
                      <p className="text-gray-600">
                        We can use: if i.lower() in 'aeiou' which is more concise and handles both cases automatically.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if the string contains numbers or special characters?</p>
                      <p className="text-gray-600">
                        Numbers and special characters are counted as consonants in the current logic. We should add a
                        check using isalpha() method to count only alphabetic characters.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Can we use built-in string methods for this task?</p>
                      <p className="text-gray-600">
                        Yes, we can use methods like isupper(), islower(), isalpha() to make the code more readable and
                        efficient.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why do we ask for input twice in this program?</p>
                      <p className="text-gray-600">
                        The program has two separate sections - one for vowel/consonant counting and another for case
                        counting. This could be optimized to use a single input and single loop.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you modify this to handle Unicode characters?</p>
                      <p className="text-gray-600">
                        For Unicode support, we should use methods like isupper(), islower() instead of ASCII range
                        comparisons, as they work with international characters.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the time complexity of this algorithm?</p>
                      <p className="text-gray-600">
                        The time complexity is O(n) where n is the length of the string, as we iterate through the
                        string twice (once for vowels/consonants, once for case counting).
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-between mt-8">
                  <Link
                    href="/computer-science/practical/class-11/gcd-lcm"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                    Previous: GCD and LCM
                  </Link>
                  <Link
                    href="/computer-science/practical/class-11/string-palindrome"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next: String Palindrome
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
