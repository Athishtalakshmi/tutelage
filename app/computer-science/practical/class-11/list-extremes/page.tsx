import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function ListExtremesPage() {
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
            <span className="text-[#1f888f] font-medium">List Extremes</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Find Smallest and Largest Number from List</h1>
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
                    To write a Python program that inputs a list of numbers and finds the smallest and largest number
                    from the list using different methods.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-md mt-3">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> This program demonstrates multiple approaches: built-in functions (max/min)
                      and sorting method for finding extremes in a list.
                    </p>
                  </div>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Initialize an empty list</li>
                    <li>Input the number of elements from user</li>
                    <li>Use a loop to input numbers and append them to the list</li>
                    <li>Method 1: Use built-in max() and min() functions</li>
                    <li>Method 2: Sort the list and access first and last elements</li>
                    <li>Display the maximum and minimum elements</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Input a list of numbers and find the smallest and largest number

# Method 1: Using built-in functions
lst = []
num = int(input("How many numbers: "))
for n in range(num):
    numbers = int(input("Enter Number: "))
    lst.append(numbers)

print("The entered list is:", lst)
print("Maximum element in the list is:", max(lst))
print("Minimum element in the list is:", min(lst))

# Method 2: Using sorting
print("\\nBy Method 2 (Sorting):")
lst.sort()
print("Maximum element in the list is:", lst[num - 1])
print("Minimum element in the list is:", lst[0])

print("\\n" + "=" * 50)
print("METHOD 3: Manual Search (Without Built-in Functions)")
print("=" * 50)

# Method 3: Manual search without built-in functions
lst3 = []
num3 = int(input("\\nHow many numbers: "))
for n in range(num3):
    numbers = int(input("Enter Number: "))
    lst3.append(numbers)

print("The entered list is:", lst3)

# Find maximum manually
maximum = lst3[0]
for i in range(1, len(lst3)):
    if lst3[i] > maximum:
        maximum = lst3[i]

# Find minimum manually
minimum = lst3[0]
for i in range(1, len(lst3)):
    if lst3[i] < minimum:
        minimum = lst3[i]

print("Maximum element (manual search):", maximum)
print("Minimum element (manual search):", minimum)

print("\\n" + "=" * 50)
print("METHOD 4: Using Tuple and Multiple Data Types")
print("=" * 50)

# Method 4: Working with mixed data (numbers only)
mixed_numbers = [45, 12, 78, 23, 67, 89, 34, 56]
print("Predefined list:", mixed_numbers)

# Find second largest and second smallest
sorted_list = sorted(mixed_numbers)
print("Sorted list:", sorted_list)
print("Largest:", sorted_list[-1])
print("Second largest:", sorted_list[-2])
print("Smallest:", sorted_list[0])
print("Second smallest:", sorted_list[1])

# Remove duplicates and find extremes
unique_numbers = list(set(mixed_numbers))
print("\\nUnique numbers:", unique_numbers)
print("Max from unique:", max(unique_numbers))
print("Min from unique:", min(unique_numbers))

print("\\n" + "=" * 50)
print("METHOD 5: Function-based Approach")
print("=" * 50)

def find_extremes(data_list):
    """Function to find min and max from a list"""
    if not data_list:
        return None, None
    
    minimum = maximum = data_list[0]
    
    for num in data_list[1:]:
        if num > maximum:
            maximum = num
        if num < minimum:
            minimum = num
    
    return minimum, maximum

def find_nth_largest(data_list, n):
    """Function to find nth largest element"""
    if len(data_list) < n:
        return None
    sorted_unique = sorted(set(data_list), reverse=True)
    return sorted_unique[n-1] if len(sorted_unique) >= n else None

# Demo with function
demo_list = [64, 25, 12, 22, 11, 90, 88, 76, 50, 42]
print(f"\\nDemo list: {demo_list}")

min_val, max_val = find_extremes(demo_list)
print(f"Minimum: {min_val}")
print(f"Maximum: {max_val}")

# Find nth largest
print(f"2nd largest: {find_nth_largest(demo_list, 2)}")
print(f"3rd largest: {find_nth_largest(demo_list, 3)}")

print("\\n" + "=" * 50)
print("PERFORMANCE COMPARISON")
print("=" * 50)

import time

# Large list for performance testing
large_list = list(range(10000, 0, -1))  # Descending order
print(f"\\nTesting with {len(large_list)} elements...")

# Time built-in functions
start_time = time.time()
max_builtin = max(large_list)
min_builtin = min(large_list)
builtin_time = time.time() - start_time

# Time manual search
start_time = time.time()
manual_min, manual_max = find_extremes(large_list)
manual_time = time.time() - start_time

# Time sorting method
start_time = time.time()
sorted_list = sorted(large_list)
sort_max = sorted_list[-1]
sort_min = sorted_list[0]
sort_time = time.time() - start_time

print(f"Built-in functions time: {builtin_time:.6f} seconds")
print(f"Manual search time: {manual_time:.6f} seconds")
print(f"Sorting method time: {sort_time:.6f} seconds")
print(f"\\nAll methods give same result: {max_builtin == manual_max == sort_max}")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>How many numbers: 5</p>
                    <p>Enter Number: 45</p>
                    <p>Enter Number: 12</p>
                    <p>Enter Number: 78</p>
                    <p>Enter Number: 23</p>
                    <p>Enter Number: 67</p>
                    <p>The entered list is: [45, 12, 78, 23, 67]</p>
                    <p>Maximum element in the list is: 78</p>
                    <p>Minimum element in the list is: 12</p>
                    <p></p>
                    <p>By Method 2 (Sorting):</p>
                    <p>Maximum element in the list is: 78</p>
                    <p>Minimum element in the list is: 12</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>==================================================</p>
                    <p>METHOD 4: Using Tuple and Multiple Data Types</p>
                    <p>==================================================</p>
                    <p>Predefined list: [45, 12, 78, 23, 67, 89, 34, 56]</p>
                    <p>Sorted list: [12, 23, 34, 45, 56, 67, 78, 89]</p>
                    <p>Largest: 89</p>
                    <p>Second largest: 78</p>
                    <p>Smallest: 12</p>
                    <p>Second smallest: 23</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>==================================================</p>
                    <p>METHOD 5: Function-based Approach</p>
                    <p>==================================================</p>
                    <p></p>
                    <p>Demo list: [64, 25, 12, 22, 11, 90, 88, 76, 50, 42]</p>
                    <p>Minimum: 11</p>
                    <p>Maximum: 90</p>
                    <p>2nd largest: 88</p>
                    <p>3rd largest: 76</p>
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
                      <p className="font-medium">What is the time complexity of max() and min() functions?</p>
                      <p className="text-gray-600">
                        Both max() and min() have O(n) time complexity as they need to examine each element once to find
                        the extreme values.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Which method is most efficient for finding both max and min?</p>
                      <p className="text-gray-600">
                        Using built-in max() and min() functions is most efficient. Manual search in single loop is also
                        good. Sorting is least efficient with O(n log n) complexity.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if the list is empty?</p>
                      <p className="text-gray-600">
                        max() and min() functions raise ValueError on empty lists. Always check if list is empty before
                        calling these functions.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How do you find the second largest element?</p>
                      <p className="text-gray-600">
                        Sort the list and access second last element, or use set() to remove duplicates first, then sort
                        and access appropriate index.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the difference between sort() and sorted()?</p>
                      <p className="text-gray-600">
                        sort() modifies the original list in-place and returns None. sorted() returns a new sorted list
                        without modifying the original.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can you find extremes without using built-in functions?</p>
                      <p className="text-gray-600">
                        Initialize max and min with first element, then iterate through remaining elements comparing and
                        updating max/min values as needed.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Can these methods work with floating-point numbers?</p>
                      <p className="text-gray-600">
                        Yes, all methods work with float numbers. Just change int(input()) to float(input()) for decimal
                        number inputs.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How do you handle duplicate values when finding nth largest?</p>
                      <p className="text-gray-600">
                        Use set() to remove duplicates first, then sort. This ensures you get truly distinct nth largest
                        value, not just nth position in sorted list.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/student-marks"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: Student Marks Dictionary
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
