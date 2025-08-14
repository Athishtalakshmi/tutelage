import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function StudentMenuPage() {
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
            <span className="text-[#1f888f] font-medium">Student Menu System</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Menu-Driven Student Record Management System</h1>
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
                    To create a dictionary named student and write a menu-driven program to perform various operations:
                    Show record, Add new student, Delete a student, Search record, Update record, Sort record, and Exit.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Input number of students and create initial dictionary</li>
                    <li>Initialize choice variable c = 0</li>
                    <li>While c ≠ 7, repeat the following:</li>
                    <li className="ml-4">a. Display menu options (1-7)</li>
                    <li className="ml-4">b. Input user choice</li>
                    <li className="ml-4">c. Execute corresponding operation:</li>
                    <li className="ml-8">• Choice 1: Display all records</li>
                    <li className="ml-8">• Choice 2: Add new student</li>
                    <li className="ml-8">• Choice 3: Delete student by name</li>
                    <li className="ml-8">• Choice 4: Search for student</li>
                    <li className="ml-8">• Choice 5: Update student record</li>
                    <li className="ml-8">• Choice 6: Sort and display records</li>
                    <li className="ml-8">• Choice 7: Exit program</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Menu-driven Student Record Management System
n = int(input("How many students:"))
std = {}

# Initial data entry
for i in range(n):
    print("Enter details of student:", i+1)
    name = input("Enter name of student:")
    pn = int(input("Enter Percentage:"))
    std[name] = pn

c = 0
while c != 7:
    print('''
            1. Show record
            2. Add new student
            3. Delete a student
            4. Search record
            5. Update record
            6. Sort record
            7. Exit
            ''')
    
    c = int(input("Enter your choice:"))
    
    if c == 1:
        for i in std:
            print(i, ":", std[i])
    
    elif c == 2:
        print("Enter details of new student:")
        name = input("Enter name:")
        pn = int(input("Enter Percentage:"))
        std[name] = pn
    
    elif c == 3:
        nm = input("Enter name to be deleted:")
        f = std.pop(nm, -1)
        if f != -1:
            print(f, " is deleted successfully.")
        else:
            print(nm, " not found.")
    
    elif c == 4:
        name = input("Enter Customer Name:")
        if name in std:
            print(name, " found in the record.")
        else:
            print(name, " not found in the record.")
    
    elif c == 5:
        name = input("Enter Customer Name:")
        pn = int(input("Enter percentage to modify:"))
        std[name] = pn
    
    elif c == 6:
        l = sorted(std)
        for i in l:
            print(i, ":", std[i])
    
    elif c == 7:
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
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>How many students: 2</p>
                    <p>Enter details of student: 1</p>
                    <p>Enter name of student: Alice</p>
                    <p>Enter Percentage: 85</p>
                    <p>Enter details of student: 2</p>
                    <p>Enter name of student: Bob</p>
                    <p>Enter Percentage: 78</p>
                    <br />
                    <p> 1. Show record</p>
                    <p> 2. Add new student</p>
                    <p> 3. Delete a student</p>
                    <p> 4. Search record</p>
                    <p> 5. Update record</p>
                    <p> 6. Sort record</p>
                    <p> 7. Exit</p>
                    <br />
                    <p>Enter your choice: 1</p>
                    <p>Alice : 85</p>
                    <p>Bob : 78</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter your choice: 2</p>
                    <p>Enter details of new student:</p>
                    <p>Enter name: Charlie</p>
                    <p>Enter Percentage: 92</p>
                    <br />
                    <p>Enter your choice: 6</p>
                    <p>Alice : 85</p>
                    <p>Bob : 78</p>
                    <p>Charlie : 92</p>
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
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">
                        Why do we use a while loop instead of a for loop for the menu system?
                      </p>
                      <p className="text-gray-600">
                        A while loop allows the program to continue running until the user chooses to exit (option 7). A
                        for loop would require knowing the exact number of iterations in advance, which is not suitable
                        for menu-driven programs.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        What is the purpose of using std.pop(nm, -1) in the delete operation?
                      </p>
                      <p className="text-gray-600">
                        The pop() method with a default value (-1) safely removes and returns the value if the key
                        exists, or returns the default value if the key doesn't exist, preventing KeyError exceptions.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does the sort operation work in this program?</p>
                      <p className="text-gray-600">
                        The sorted(std) function returns a sorted list of dictionary keys (student names) in
                        alphabetical order. We then iterate through this sorted list to display records in alphabetical
                        order.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if we try to update a student who doesn't exist?</p>
                      <p className="text-gray-600">
                        The program will create a new entry with that name and percentage, as dictionary assignment
                        (std[name] = pn) creates a new key-value pair if the key doesn't exist.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can we improve the search functionality?</p>
                      <p className="text-gray-600">
                        We could implement case-insensitive search using name.lower(), partial name matching, or search
                        by percentage ranges. We could also display the student's percentage when found.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What are the limitations of this current implementation?</p>
                      <p className="text-gray-600">
                        Limitations include: no data persistence after program ends, no input validation for percentages
                        (0-100 range), no handling of duplicate names, and no option to sort by percentage.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you add input validation for percentage values?</p>
                      <p className="text-gray-600">
                        We could add a while loop to check if 0 ≤ percentage ≤ 100, and use try-except blocks to handle
                        non-numeric input, prompting the user to re-enter valid values.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can we modify the program to save data to a file?</p>
                      <p className="text-gray-600">
                        We could use the json module to save the dictionary to a JSON file when exiting and load it when
                        starting the program, providing data persistence across program runs.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/lucky-winners"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: Lucky Winners Selection
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
