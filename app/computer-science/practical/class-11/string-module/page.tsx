import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"
import Image from "next/image"

export default function StringModulePage() {
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
            <span className="text-[#1f888f] font-medium">String Module Operations</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">String Module Operations Menu</h1>
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
                    To write a menu-driven program to perform various operations using the string module in Python,
                    including displaying ASCII letters, digits, hexadecimal digits, octal digits, punctuation, and
                    converting strings to title case.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Import the string module</li>
                    <li>Initialize choice variable to 0</li>
                    <li>Start a while loop that continues until choice is 7</li>
                    <li>Display the menu with 7 options</li>
                    <li>Take user's choice as input</li>
                    <li>
                      Use if-elif-else statements to handle each choice:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Choice 1: Display ASCII letters using string.ascii_letters</li>
                        <li>Choice 2: Display digits using string.digits</li>
                        <li>Choice 3: Display hexadecimal digits using string.hexdigits</li>
                        <li>Choice 4: Display octal digits using string.octdigits</li>
                        <li>Choice 5: Display punctuation using string.punctuation</li>
                        <li>Choice 6: Take string input and display in title case using string.capwords()</li>
                        <li>Choice 7: Break the loop to exit</li>
                      </ul>
                    </li>
                    <li>Repeat until user chooses to exit</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Menu-driven program to perform string module operations

import string

ch = 0
while ch != 7:
    print('''
            1. Display the ascii letters
            2. Display the digits
            3. Display Hexadedigits
            4. Display Octaldigits
            5. Display Punctuation
            6. Display string in title case
            7. Exit
            ''')
    
    ch = int(input("Enter your choice:"))
    
    if ch == 1:
        print(string.ascii_letters)
    elif ch == 2:
        print(string.digits)
    elif ch == 3:
        print(string.hexdigits)
    elif ch == 4:
        print(string.octdigits)
    elif ch == 5:
        print(string.punctuation)
    elif ch == 6:
        s = input("Enter sentence:")
        print(string.capwords(s))
    elif ch == 7:
        break
    else:
        print("Invalid Choice")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="mb-4">
                    <Image
                      src="/images/string-module-output.png"
                      alt="String Module Program Output showing menu options and various string operations"
                      width={800}
                      height={600}
                      className="rounded-md border"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    The above image shows the complete execution of the program with different menu choices
                    demonstrating all string module operations.
                  </p>
                </div>

                {/* STRING MODULE CONSTANTS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">STRING MODULE CONSTANTS</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2 text-left">Constant</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono">string.ascii_letters</td>
                          <td className="border border-gray-300 px-4 py-2">
                            All ASCII letters (lowercase + uppercase)
                          </td>
                          <td className="border border-gray-300 px-4 py-2 font-mono text-xs">
                            abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono">string.digits</td>
                          <td className="border border-gray-300 px-4 py-2">All decimal digits</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono">0123456789</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono">string.hexdigits</td>
                          <td className="border border-gray-300 px-4 py-2">All hexadecimal digits</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono">0123456789abcdefABCDEF</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono">string.octdigits</td>
                          <td className="border border-gray-300 px-4 py-2">All octal digits</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono">01234567</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-mono">string.punctuation</td>
                          <td className="border border-gray-300 px-4 py-2">All punctuation characters</td>
                          <td className="border border-gray-300 px-4 py-2 font-mono">
                            {"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ALTERNATIVE METHODS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALTERNATIVE METHODS</h2>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">Method 2: Using Functions</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`import string

def display_ascii_letters():
    print("ASCII Letters:", string.ascii_letters)

def display_digits():
    print("Digits:", string.digits)

def display_hexdigits():
    print("Hexadecimal Digits:", string.hexdigits)

def display_octdigits():
    print("Octal Digits:", string.octdigits)

def display_punctuation():
    print("Punctuation:", string.punctuation)

def display_title_case():
    s = input("Enter sentence: ")
    print("Title Case:", string.capwords(s))

def main():
    functions = {
        1: display_ascii_letters,
        2: display_digits,
        3: display_hexdigits,
        4: display_octdigits,
        5: display_punctuation,
        6: display_title_case
    }
    
    while True:
        print('''
        1. Display ASCII letters
        2. Display digits
        3. Display Hexadecimal digits
        4. Display Octal digits
        5. Display Punctuation
        6. Display string in title case
        7. Exit
        ''')
        
        choice = int(input("Enter your choice: "))
        
        if choice == 7:
            break
        elif choice in functions:
            functions[choice]()
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    main()`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">
                    Method 3: Using Class-Based Approach
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`import string

class StringOperations:
    def __init__(self):
        self.menu_options = {
            1: ("Display ASCII letters", self.show_ascii_letters),
            2: ("Display digits", self.show_digits),
            3: ("Display Hexadecimal digits", self.show_hexdigits),
            4: ("Display Octal digits", self.show_octdigits),
            5: ("Display Punctuation", self.show_punctuation),
            6: ("Display string in title case", self.show_title_case),
            7: ("Exit", None)
        }
    
    def show_menu(self):
        print("\\n" + "="*40)
        print("STRING MODULE OPERATIONS MENU")
        print("="*40)
        for key, (description, _) in self.menu_options.items():
            print(f"{key}. {description}")
        print("="*40)
    
    def show_ascii_letters(self):
        print(f"ASCII Letters: {string.ascii_letters}")
    
    def show_digits(self):
        print(f"Digits: {string.digits}")
    
    def show_hexdigits(self):
        print(f"Hexadecimal Digits: {string.hexdigits}")
    
    def show_octdigits(self):
        print(f"Octal Digits: {string.octdigits}")
    
    def show_punctuation(self):
        print(f"Punctuation: {string.punctuation}")
    
    def show_title_case(self):
        sentence = input("Enter sentence: ")
        print(f"Title Case: {string.capwords(sentence)}")
    
    def run(self):
        while True:
            self.show_menu()
            try:
                choice = int(input("Enter your choice: "))
                if choice == 7:
                    print("Thank you for using String Operations!")
                    break
                elif choice in self.menu_options:
                    _, function = self.menu_options[choice]
                    if function:
                        function()
                else:
                    print("Invalid choice! Please try again.")
            except ValueError:
                print("Please enter a valid number!")

# Usage
if __name__ == "__main__":
    app = StringOperations()
    app.run()`}
                      </code>
                    </pre>
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
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <p className="font-medium">What is the purpose of the string module in Python?</p>
                      <p className="text-gray-600">
                        The string module provides various constants and functions for string operations. It contains
                        predefined constants like ascii_letters, digits, punctuation, etc., and functions like
                        capwords() for text manipulation.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        What is the difference between string.ascii_letters and string.ascii_lowercase?
                      </p>
                      <p className="text-gray-600">
                        string.ascii_letters contains both lowercase and uppercase letters (a-z and A-Z), while
                        string.ascii_lowercase contains only lowercase letters (a-z).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does string.capwords() differ from the title() method?</p>
                      <p className="text-gray-600">
                        string.capwords() capitalizes the first letter of each word and removes extra whitespace, while
                        title() capitalizes the first letter after any whitespace or punctuation but preserves the
                        original spacing.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What characters are included in string.punctuation?</p>
                      <p className="text-gray-600">
                        string.punctuation includes all ASCII punctuation characters:{" "}
                        {"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"}
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        How would you modify this program to handle invalid menu choices more gracefully?
                      </p>
                      <p className="text-gray-600">
                        Add try-except blocks to handle ValueError for non-integer inputs, provide clear error messages,
                        and use input validation to ensure choices are within the valid range (1-7).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        What is the advantage of using hexadecimal and octal digit constants?
                      </p>
                      <p className="text-gray-600">
                        These constants are useful for validating input in different number systems, converting between
                        bases, and working with low-level programming where different number representations are common.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        How can you extend this program to include custom string operations?
                      </p>
                      <p className="text-gray-600">
                        Add new menu options with corresponding elif conditions, create functions for complex operations
                        like palindrome checking, string reversal, or character frequency counting.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        What are the limitations of using a simple while loop for menu-driven programs?
                      </p>
                      <p className="text-gray-600">
                        Simple while loops don't handle exceptions well, can become complex with many options, and don't
                        provide easy extensibility. Using functions or classes provides better organization and error
                        handling.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/phone-directory"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: Phone Directory Operations
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
