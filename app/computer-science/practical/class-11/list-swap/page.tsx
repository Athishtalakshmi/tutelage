import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function ListSwapPage() {
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
            <span className="text-[#1f888f] font-medium">List Element Swap</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Swap Elements at Even and Odd Locations</h1>
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
                    To write a Python program that inputs a list of numbers and swaps elements at even locations with
                    elements at odd locations.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-md mt-3">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> In this program, even and odd locations refer to indices. Index 0 (even)
                      swaps with index 1 (odd), index 2 (even) swaps with index 3 (odd), and so on.
                    </p>
                  </div>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Initialize an empty list L</li>
                    <li>Input the size of the list from user</li>
                    <li>Use a loop to input elements and append them to the list</li>
                    <li>Display the original list</li>
                    <li>Use a loop with step 2 to iterate through even indices (0, 2, 4, ...)</li>
                    <li>For each even index i, swap L[i] with L[i+1] using temporary variables</li>
                    <li>Display the list after swapping</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Input a list of numbers and swap elements at even location with odd location

# Code to get list from user
L = []
N = int(input("Enter the size of the list: "))
print("Enter the elements one by one:")
for i in range(N):
    Element = int(input("-> "))
    L.append(Element)

print("The given List is:")
print(L)

# Swap the elements at even location with the elements at odd location
for i in range(0, N, 2):
    if i + 1 < N:  # Check if odd index exists
        temp1 = L[i]
        temp2 = L[i + 1]
        L[i] = temp2
        L[i + 1] = temp1

print("\\nThe List after swapping is:")
print(L)

# Alternative method using tuple unpacking
print("\\n" + "=" * 50)
print("ALTERNATIVE METHOD - Using Tuple Unpacking")
print("=" * 50)

# Reset the list for demonstration
L2 = []
N2 = int(input("\\nEnter the size of the list: "))
print("Enter the elements one by one:")
for i in range(N2):
    Element = int(input("-> "))
    L2.append(Element)

print("The given List is:")
print(L2)

# Swap using tuple unpacking (Pythonic way)
for i in range(0, N2, 2):
    if i + 1 < N2:
        L2[i], L2[i + 1] = L2[i + 1], L2[i]

print("\\nThe List after swapping is:")
print(L2)

# Method 3: Function-based approach
def swap_even_odd(lst):
    """Function to swap elements at even and odd positions"""
    n = len(lst)
    for i in range(0, n, 2):
        if i + 1 < n:
            lst[i], lst[i + 1] = lst[i + 1], lst[i]
    return lst

print("\\n" + "=" * 50)
print("FUNCTION-BASED APPROACH")
print("=" * 50)

# Demo with predefined list
demo_list = [10, 20, 30, 40, 50, 60, 70]
print(f"\\nOriginal list: {demo_list}")
swapped_list = swap_even_odd(demo_list.copy())
print(f"After swapping: {swapped_list}")

# Demo with odd number of elements
odd_list = [1, 2, 3, 4, 5]
print(f"\\nOriginal odd list: {odd_list}")
swapped_odd = swap_even_odd(odd_list.copy())
print(f"After swapping: {swapped_odd}")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter the size of the list: 6</p>
                    <p>Enter the elements one by one:</p>
                    <p>{"-> 10"}</p>
                    <p>{"-> 20"}</p>
                    <p>{"-> 30"}</p>
                    <p>{"-> 40"}</p>
                    <p>{"-> 50"}</p>
                    <p>{"-> 60"}</p>
                    <p>The given List is:</p>
                    <p>[10, 20, 30, 40, 50, 60]</p>
                    <p></p>
                    <p>The List after swapping is:</p>
                    <p>[20, 10, 40, 30, 60, 50]</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>==================================================</p>
                    <p>FUNCTION-BASED APPROACH</p>
                    <p>==================================================</p>
                    <p></p>
                    <p>Original list: [10, 20, 30, 40, 50, 60, 70]</p>
                    <p>After swapping: [20, 10, 40, 30, 60, 50, 70]</p>
                    <p></p>
                    <p>Original odd list: [1, 2, 3, 4, 5]</p>
                    <p>After swapping: [2, 1, 4, 3, 5]</p>
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
                      <p className="font-medium">What does range(0, N, 2) do in this program?</p>
                      <p className="text-gray-600">
                        range(0, N, 2) generates a sequence starting from 0, up to N-1, with a step of 2. This gives us
                        even indices: 0, 2, 4, 6, etc.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why do we check if i+1 {"< N"} before swapping?</p>
                      <p className="text-gray-600">
                        This prevents IndexError when the list has odd number of elements. The last element at even
                        index would not have a corresponding odd index to swap with.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if the list has only one element?</p>
                      <p className="text-gray-600">
                        If the list has only one element, the loop range(0, 1, 2) will execute once with i=0, but the
                        condition i+1 {"< N"} (0+1 {"< 1"}) will be false, so no swapping occurs.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the advantage of tuple unpacking over temporary variables?</p>
                      <p className="text-gray-600">
                        Tuple unpacking (a, b = b, a) is more concise, readable, and Pythonic. It eliminates the need
                        for temporary variables and reduces the chance of errors.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you modify this program to swap every 3rd element?</p>
                      <p className="text-gray-600">
                        Change the range to range(0, N, 3) and swap L[i] with L[i+2], ensuring i+2 {"< N"}
                        to avoid index errors.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the time complexity of this swapping algorithm?</p>
                      <p className="text-gray-600">
                        The time complexity is O(n) where n is the number of elements, as we iterate through the list
                        once with step 2, performing constant-time swap operations.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Can this program work with strings or other data types?</p>
                      <p className="text-gray-600">
                        Yes, the swapping logic works with any data type. You would just need to modify the input
                        section to accept strings or other types instead of integers.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you swap elements at specific user-defined positions?</p>
                      <p className="text-gray-600">
                        Take two position inputs from user, validate they are within list bounds, then swap using
                        L[pos1], L[pos2] = L[pos2], L[pos1].
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/list-search"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: List Search
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
