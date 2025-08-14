import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function StringsPythonPage() {
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
            <span className="text-[#1f888f] font-medium">Strings in Python</span>
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
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Chapter 6: Strings in Python</h1>

              <div className="prose max-w-none text-sm">
                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Introduction to Strings</h2>
                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-blue-800 mb-2">Immutable</h3>
                    <p className="text-blue-700">
                      A string object always represents the same string. Once created, strings cannot be modified.
                    </p>
                  </div>
                  <p className="mb-4">
                    Strings are sequences of UNICODE characters that may include letters, numbers, special characters,
                    white-space, or backslashes. Strings are enclosed with single quotes (' '), double quotes (" "), or
                    triple quotes (''' ''').
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>"Hello Python"</p>
                    <p>'Hello Python'</p>
                    <p>''' Hi Hello Python1234'''</p>
                  </div>
                </section>

                {/* Creating Strings */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Creating Strings</h2>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Basic String Creation</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`A = "Good Morning"
X = "Write article on \\"AI\\" briefly"
print(X)  # Output: Write article on "AI" briefly`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Empty String</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = ""
str = ' '
print(str)  # Output: ' '`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Multiline String</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`A = ''' This is a 
Multiline String 
Example'''
print(A)  # Output: This is a Multiline String Example`}</code>
                    </pre>
                  </div>
                </section>

                {/* String Indexing */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">String Indexing and Traversing</h2>
                  <p className="mb-4">
                    Accessing all elements of a string one after another using subscript or index values.
                  </p>

                  <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <h3 className="font-bold mb-2">Example: str = "HELLO PYTHON"</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700">Positive Index (Forward)</h4>
                        <div className="font-mono text-sm">
                          <p>H E L L O P Y T H O N</p>
                          <p>0 1 2 3 4 5 6 7 8 9 10 11</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700">Negative Index (Backward)</h4>
                        <div className="font-mono text-sm">
                          <p>H E L L O P Y T H O N</p>
                          <p>-12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Hello Python"
print(str[4])   # Output: o
print(str[-1])  # Output: n`}</code>
                    </pre>
                  </div>
                </section>

                {/* String Operators */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Special String Operators</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <h3 className="font-bold text-blue-800">String Operators</h3>
                      <ul className="text-sm text-blue-700 mt-2 space-y-1">
                        <li>1. Slicing → String[range]</li>
                        <li>2. Concatenation → String1 + String2</li>
                        <li>3. Repetition → String1 * x</li>
                        <li>4. Membership → in, not in</li>
                        <li>5. Reverse → String[::-1]</li>
                        <li>
                          6. Comparison → {"<"}, {">"}, {"<="}, {">="}
                          {"=="}, !=
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">1. Slicing [start:stop:step]</h3>
                  <p className="mb-3 text-gray-600">Note: stop = stop - 1</p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`s = "HELLO PYTHON"
print(s[1:5])    # Output: ELLO
print(s[0:8])    # Output: HELLO PY
print(s[1:9:-1]) # Output: (empty string)`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">2. Concatenation (+)</h3>
                  <p className="mb-3">Joining two strings together.</p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "GOOD"
str1 = "Morning"
print(str + str1)           # Output: GOODMorning
print("Python" + "Program") # Output: PythonProgram
print("Python" + " " + "Program") # Output: Python Program
print("Python" + "10")      # Output: Python10

# Error example:
# print("Python" + 10)  # TypeError: can only concatenate str (not "int") to str`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">3. Repetition (*)</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Hi !!! "
print(str * 3)        # Output: Hi !!! Hi !!! Hi !!! 
print("Hello" * 2)    # Output: HelloHello
print(3 * "Hi")       # Output: HiHiHi
print(3 * 2 * "Hi")   # Output: HiHiHiHiHiHi
print('AI!' * 2 * 2)  # Output: AI!AI!AI!AI!

# Error example:
# print('Hi' * 'Hello')  # TypeError: can't multiply sequence by non-int`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">4. Membership (in, not in)</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "HELLO PYTHON"
print('LLO' in str)      # Output: True
print('aa' in str)       # Output: False
print('zz' in str)       # Output: False
print('abc' not in str)  # Output: True
print('py' not in str)   # Output: True
print('Py' not in str)   # Output: True`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">5. Reverse</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "HELLO PYTHON"
print(str[::-1])  # Output: NOHTYP OLLEH`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">6. Comparison</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`print('apple' > 'a')      # Output: True
print('apple' > 'A')      # Output: True
print('Apple' > 'a')      # Output: False
print('Apple' >= 'z')     # Output: False
print('Apple' == 'apple') # Output: False
print('apple' == 'apple') # Output: True
print('apple' != 'apple') # Output: False

a = 'python'
b = 'apple'
print(a > b)              # Output: True`}</code>
                    </pre>
                  </div>
                </section>

                {/* String Methods */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">String Methods and Built-in Functions</h2>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">1. len() - Length of String</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`a = "PYTHON"
print(len(a))  # Output: 6`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">
                    2. capitalize() - First Letter Uppercase
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`a = "python"
print(a.capitalize())  # Output: Python

a = "python programming language"
print(a.capitalize())  # Output: Python programming language`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">3. split() - Split String into List</h3>
                  <p className="mb-3">
                    <strong>Syntax:</strong> str.split([separator[, maxsplit]])
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`x = "Red$blue$green"
print(x.split("$"))  # Output: ['Red', 'blue', 'green']

g = "red:blue:orange:pink"
print(g.split(':', 2))  # Output: ['red', 'blue', 'orange:pink']
print(g.split(':', 1))  # Output: ['red', 'blue:orange:pink']
print(g.split(':', 0))  # Output: ['red:blue:orange:pink']`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">4. replace() - Replace Substring</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`x = "This is a String Example"
print(x.replace("is", "was"))  # Output: Thwas was a String Example`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">5. find() - Find Substring Index</h3>
                  <p className="mb-3">Returns -1 if substring not found.</p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Green Revolution"
print(str.find("green"))    # Output: -1
print(str.find("Green"))    # Output: 0
print(str.find("een"))      # Output: 2
print(str.find("n", 3, 20)) # Output: 4
print(str.find("n", 5, 20)) # Output: 15`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">
                    6. index() - Find Index (Raises Exception)
                  </h3>
                  <p className="mb-3">Similar to find() but raises ValueError if substring not found.</p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Hello ITS all about STRINGS!!!"
print(str.index('Hello'))  # Output: 0
print(str.index('ll'))     # Output: 2
print(str.index("all"))    # Output: 10

# Error example:
# print(str.index('abc'))  # ValueError: substring not found`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">
                    7. isalpha() - Check for Alphabets Only
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Good"
print(str.isalpha())     # Output: True

str = "123good"
print(str.isalpha())     # Output: False`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">8. isalnum() - Check for Alphanumeric</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Good"
print(str.isalnum())        # Output: True

str = "123Good"
print(str.isalnum())        # Output: True

str = "Good Morning"
print(str.isalnum())        # Output: False (space is not alphanumeric)`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">9. isdigit() - Check for Digits Only</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "12345"
print(str.isdigit())     # Output: True

str = "123Good"
print(str.isdigit())     # Output: False`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">10. title() - Title Case</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "hello ITS all about STRINGS"
print(str.title())  # Output: Hello Its All About Strings`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">
                    11. count() - Count Substring Occurrences
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Hello Hi Python Hello World Hi Welcome"
print(str.count("Hello", 12, 40))  # Output: 1
print(str.count("Hi", 2, 40))      # Output: 2`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">12. lower() - Convert to Lowercase</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Learning Python"
print(str.lower())  # Output: learning python

str = "PYthON"
print(str.lower())  # Output: python`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">13. islower() - Check if Lowercase</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Learning Python"
print(str.islower())  # Output: False

str = "python"
print(str.islower())  # Output: True`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">14. upper() - Convert to Uppercase</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Learning Python"
print(str.upper())  # Output: LEARNING PYTHON

str = "python"
print(str.upper())  # Output: PYTHON`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">15. isupper() - Check if Uppercase</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "PYTHON"
print(str.isupper())  # Output: True

str = "PYTHOn"
print(str.isupper())  # Output: False`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">16. lstrip() - Remove Left Spaces</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "    Green REvolution"
print(str.lstrip())  # Output: Green REvolution

str = "Green REvolution"
print(str.lstrip("Gr"))  # Output: een REvolution`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">17. rstrip() - Remove Right Spaces</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Green Revolution    "
print(str.rstrip())  # Output: Green Revolution

str = "Green Revolution"
print(str.rstrip("tion"))  # Output: Green Revolu`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">18. strip() - Remove Both Side Spaces</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "   Hello ITS all about STRINGS     "
print(str.strip())  # Output: Hello ITS all about STRINGS`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">
                    19. isspace() - Check for Whitespace Only
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "   "
print(str.isspace())  # Output: True

str = "Hello ITS all about STRINGS"
print(str.isspace())  # Output: False`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">20. istitle() - Check if Title Case</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "All Learn Python"
print(str.istitle())  # Output: True

str = "All Learn python"
print(str.istitle())  # Output: False`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">
                    21. join() - Join Sequence with Separator
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "12345"
s = '-'
print(s.join(str))  # Output: 1-2-3-4-5

s = '*'
print(s.join(str))  # Output: 1*2*3*4*5

s = '****'
print(s.join(str))  # Output: 1****2****3****4****5`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">22. swapcase() - Swap Case</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "Welcome"
print(str.swapcase())  # Output: wELCOME

str = "PYTHon"
print(str.swapcase())  # Output: pythON

str = "PYTHON"
print(str.swapcase())  # Output: python`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">23. partition() - Split into 3 Parts</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`str = "xyz@gmail.com"
print(str.partition("@"))  # Output: ('xyz', '@', 'gmail.com')
print(str.partition("."))  # Output: ('xyz@gmail', '.', 'com')
print(str.partition("g"))  # Output: ('xyz@', 'g', 'mail.com')`}</code>
                    </pre>
                  </div>
                </section>

                {/* Other Functions */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Other Important Functions</h2>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">1. ord() - ASCII/Unicode Value</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`ch = 'A'
print(ord(ch))  # Output: 65

ch = 'a'
print(ord(ch))  # Output: 97`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">
                    2. chr() - Character from ASCII/Unicode
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`print(chr(97))  # Output: a
print(chr(65))  # Output: A`}</code>
                    </pre>
                  </div>
                </section>

                {/* Jump Statements */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Jump Statements</h2>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">1. Break Statement</h3>
                  <p className="mb-3">
                    The break statement terminates the current loop. If break statement is inside a nested loop, break
                    will terminate the innermost loop.
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`for val in "String":
    if val == 'i':
        break
    print(val)
print("end")

# Output:
# S
# t
# r
# end`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">2. Continue Statement</h3>
                  <p className="mb-3">
                    When a continue statement is encountered, the control jumps to the beginning of the loop for next
                    iteration.
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`for val in "String":
    if val == 'i':
        continue
    print(val)
print("end")

# Output:
# S
# t
# r
# n
# g
# end`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">3. Pass Statement</h3>
                  <p className="mb-3">
                    It is used when a statement is required syntactically but you do not want any command or code to
                    execute. The pass statement is a null operation; nothing happens when it executes.
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`S = ['p', 'y', 't', 'h', 'o', 'n']
for v in S:
    pass  # Nothing happens, just a placeholder

# Syntax: pass`}</code>
                    </pre>
                  </div>
                </section>

                {/* Local and Global Declaration */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Local and Global Declaration</h2>
                  <div className="bg-yellow-50 p-4 rounded-md mb-4">
                    <p className="text-yellow-800">
                      <strong>Note:</strong> This topic will be covered in detail in the Functions chapter. Local
                      variables are accessible within the function where they are declared, while global variables can
                      be accessed throughout the program.
                    </p>
                  </div>
                </section>

                {/* Mutable and Immutable */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Mutable and Immutable Objects</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-md">
                      <h3 className="font-bold text-green-800 mb-2">Mutable</h3>
                      <p className="text-green-700 mb-3">Objects CAN be changed after creation</p>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• List</li>
                        <li>• Dictionary</li>
                        <li>• Set</li>
                        <li>• User defined classes</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-md">
                      <h3 className="font-bold text-red-800 mb-2">Immutable</h3>
                      <p className="text-red-700 mb-3">Objects CAN'T be changed after creation</p>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Tuple</li>
                        <li>• String</li>
                        <li>• Numbers (int, float)</li>
                        <li>• Boolean</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-blue-800 mb-2">Important Note</h3>
                    <p className="text-blue-700">
                      Strings are immutable in Python. When you perform operations like concatenation or replacement, a
                      new string object is created rather than modifying the existing one.
                    </p>
                  </div>
                </section>

                {/* Practice Examples */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Practice Examples</h2>

                  <div className="bg-yellow-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-yellow-800 mb-2">Example 1: String Slicing</h3>
                    <div className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                      <pre>
                        <code>{`X = "AmaZing"
# Index:  0123456
# Index: -7-6-5-4-3-2-1

print(X[3:], "and", X[:2])      # Output: Zing and Am
print(X[-7:], "and", X[-4:-2])  # Output: AmaZing and Zi
print(X[2:7], "and", X[-4:-1])  # Output: aZing and Zin`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-green-800 mb-2">Example 2: String Operations</h3>
                    <div className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                      <pre>
                        <code>{`x = "1bzz"
print(x[0:3] + 'c')  # Output: 1bzc

# Finding substring
text = "green vegetables"
print(text.find('g', 2))  # Output: 8 (finds 'g' starting from index 2)`}</code>
                      </pre>
                    </div>
                  </div>
                </section>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/class-11/lists-python"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Chapter: Lists in Python
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
