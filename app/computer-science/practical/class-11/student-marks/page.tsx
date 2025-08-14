import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function StudentMarksPage() {
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
            <span className="text-[#1f888f] font-medium">Student Marks Dictionary</span>
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
                  Student Marks Dictionary - Display Students Above 75
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
                    To create a dictionary with roll number, name and marks of n students in a class and display the
                    names of students who have scored marks above 75.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Input the number of students (n)</li>
                    <li>Initialize an empty dictionary (result)</li>
                    <li>For each student from 1 to n:</li>
                    <li className="ml-4">a. Input roll number</li>
                    <li className="ml-4">b. Input student name</li>
                    <li className="ml-4">c. Input marks</li>
                    <li className="ml-4">d. Store [name, marks] as value with roll number as key</li>
                    <li>Display the complete dictionary</li>
                    <li>Iterate through each student in the dictionary</li>
                    <li>Check if marks (second element of value list) {">"} 75</li>
                    <li>If condition is true, display the student name</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Method 1: Original approach
n = int(input("Enter Number of students:"))
result = {}

for i in range(n):
    print("Enter Details of Student No:")
    rno = int(input("Enter Roll NO:"))
    name = input("Enter Name:")
    marks = float(input("Enter Marks:"))
    result[rno] = [name, marks]

print(result)

# Display names of students who have got marks more than 75
for student in result:
    if result[student][1] > 75:
        print(result[student][0])

# Method 2: Using dictionary comprehension for filtering
print("\\nStudents with marks > 75 (using comprehension):")
high_scorers = {rno: data[0] for rno, data in result.items() if data[1] > 75}
for name in high_scorers.values():
    print(name)

# Method 3: Using items() method
print("\\nStudents with marks > 75 (using items()):")
for rno, (name, marks) in result.items():
    if marks > 75:
        print(f"{name} (Roll No: {rno}) - {marks} marks")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter Number of students: 4</p>
                    <p>Enter Details of Student No:</p>
                    <p>Enter Roll NO: 101</p>
                    <p>Enter Name: Alice</p>
                    <p>Enter Marks: 85.5</p>
                    <p>Enter Details of Student No:</p>
                    <p>Enter Roll NO: 102</p>
                    <p>Enter Name: Bob</p>
                    <p>Enter Marks: 72.0</p>
                    <p>Enter Details of Student No:</p>
                    <p>Enter Roll NO: 103</p>
                    <p>Enter Name: Charlie</p>
                    <p>Enter Marks: 91.2</p>
                    <p>Enter Details of Student No:</p>
                    <p>Enter Roll NO: 104</p>
                    <p>Enter Name: Diana</p>
                    <p>Enter Marks: 68.7</p>
                    <p>{`{101: ['Alice', 85.5], 102: ['Bob', 72.0], 103: ['Charlie', 91.2], 104: ['Diana', 68.7]}`}</p>
                    <p>Alice</p>
                    <p>Charlie</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Method 3 Output:</strong>
                    </p>
                    <p>Students with marks > 75 (using items()):</p>
                    <p>Alice (Roll No: 101) - 85.5 marks</p>
                    <p>Charlie (Roll No: 103) - 91.2 marks</p>
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
                        Why do we use a dictionary instead of a list for storing student data?
                      </p>
                      <p className="text-gray-600">
                        Dictionaries provide key-based access, making it easier to retrieve student information using
                        roll numbers. They also allow for more meaningful data organization and faster lookups.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        What happens if we try to add a student with a duplicate roll number?
                      </p>
                      <p className="text-gray-600">
                        The dictionary will overwrite the existing entry with the new data, as dictionary keys must be
                        unique. The previous student's data will be lost.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can we modify the program to handle duplicate roll numbers?</p>
                      <p className="text-gray-600">
                        We can check if the roll number already exists using "if rno in result:" before adding new data,
                        and prompt the user to enter a different roll number or confirm overwriting.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the advantage of using result[student][1] to access marks?</p>
                      <p className="text-gray-600">
                        This notation directly accesses the marks (second element, index 1) from the list stored as the
                        dictionary value, providing efficient access to specific data fields.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you sort students by their marks in descending order?</p>
                      <p className="text-gray-600">
                        We can use: sorted(result.items(), key=lambda x: x[1][1], reverse=True) to sort by marks in
                        descending order, where x[1][1] accesses the marks from each dictionary entry.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        What is the difference between using dictionary comprehension and a for loop for filtering?
                      </p>
                      <p className="text-gray-600">
                        Dictionary comprehension is more concise and often faster, creating a new dictionary in one
                        line. For loops are more readable for complex operations and allow for additional processing
                        during iteration.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can we calculate the average marks of all students?</p>
                      <p className="text-gray-600">
                        We can use: sum(data[1] for data in result.values()) / len(result) to calculate the average
                        marks by summing all marks and dividing by the number of students.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What would happen if we use a string as marks instead of a float?</p>
                      <p className="text-gray-600">
                        The comparison result[student][1] {">"} 75 would fail with a TypeError because we cannot compare
                        strings with numbers. We should always validate and convert input data to appropriate types.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/student-menu"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: Student Menu System
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
