import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function ListMinMaxPage() {
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
            <span className="text-[#1f888f] font-medium">List Min-Max</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Find Largest/Smallest Number in List/Tuple</h1>
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
                    To write a Python program that finds the largest and smallest numbers in a list/tuple, including
                    second largest and second smallest elements.
                  </p>

                  <div className="bg-blue-50 p-3 rounded-md mt-3">
                    <h3 className="font-medium text-blue-800 mb-2">Key Concepts:</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>
                        • <strong>List Sorting:</strong> Using sort() method to arrange elements
                      </li>
                      <li>
                        • <strong>List Indexing:</strong> Accessing elements by position
                      </li>
                      <li>
                        • <strong>Built-in Functions:</strong> Using max() and min() functions
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <h3 className="font-medium mb-2">Method 1 - Using Sorting:</h3>
                  <ol className="list-decimal pl-5 space-y-1 mb-4">
                    <li>Start</li>
                    <li>Initialize a list with numbers</li>
                    <li>Find the length of the list</li>
                    <li>Sort the list in ascending order using sort()</li>
                    <li>Access first element for smallest (index 0)</li>
                    <li>Access last element for largest (index length-1)</li>
                    <li>Access second element for second smallest (index 1)</li>
                    <li>Access second last element for second largest (index length-2)</li>
                    <li>Display all results</li>
                    <li>Stop</li>
                  </ol>

                  <h3 className="font-medium mb-2">Method 2 - Using Built-in Functions:</h3>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Use max() function to find largest element</li>
                    <li>Use min() function to find smallest element</li>
                    <li>Remove max element and find max again for second largest</li>
                    <li>Remove min element and find min again for second smallest</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>

                  <h3 className="font-medium mb-2">Method 1 - Using Sorting:</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Find the largest/smallest number in a list/tuple
lst = [12, 34, 43, 67, 33, 3, 10]
length = len(lst)
lst.sort()

print("Largest element is:", lst[length-1])
print("Smallest element is:", lst[0])
print("Second Largest element is:", lst[length-2])
print("Second smallest element is:", lst[1])`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="font-medium mb-2">Method 2 - Using Built-in Functions:</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Alternative method using max() and min() functions
lst = [12, 34, 43, 67, 33, 3, 10]
print("Original List:", lst)

# Find largest and smallest
largest = max(lst)
smallest = min(lst)

print("Largest element is:", largest)
print("Smallest element is:", smallest)

# Find second largest and second smallest
lst_copy = lst.copy()
lst_copy.remove(largest)
second_largest = max(lst_copy)

lst_copy2 = lst.copy()
lst_copy2.remove(smallest)
second_smallest = min(lst_copy2)

print("Second Largest element is:", second_largest)
print("Second smallest element is:", second_smallest)`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="font-medium mb-2">Method 3 - Working with Tuples:</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Working with tuples
tup = (12, 34, 43, 67, 33, 3, 10)
print("Original Tuple:", tup)

# Convert tuple to list for sorting
lst = list(tup)
lst.sort()

print("Largest element is:", lst[-1])
print("Smallest element is:", lst[0])
print("Second Largest element is:", lst[-2])
print("Second smallest element is:", lst[1])`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>

                  <h3 className="font-medium mb-2">Method 1 Output:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Largest element is: 67</p>
                    <p>Smallest element is: 3</p>
                    <p>Second Largest element is: 43</p>
                    <p>Second smallest element is: 10</p>
                  </div>

                  <h3 className="font-medium mb-2">Method 2 Output:</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Original List: [12, 34, 43, 67, 33, 3, 10]</p>
                    <p>Largest element is: 67</p>
                    <p>Smallest element is: 3</p>
                    <p>Second Largest element is: 43</p>
                    <p>Second smallest element is: 10</p>
                  </div>

                  <h3 className="font-medium mb-2">Method 3 Output (Tuple):</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Original Tuple: (12, 34, 43, 67, 33, 3, 10)</p>
                    <p>Largest element is: 67</p>
                    <p>Smallest element is: 3</p>
                    <p>Second Largest element is: 43</p>
                    <p>Second smallest element is: 10</p>
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
                      <p className="font-medium">What is the difference between sort() and sorted() in Python?</p>
                      <p className="text-gray-600">
                        sort() modifies the original list in-place and returns None, while sorted() returns a new sorted
                        list without modifying the original.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How do negative indices work in Python lists?</p>
                      <p className="text-gray-600">
                        Negative indices count from the end of the list. -1 refers to the last element, -2 to the second
                        last, and so on.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if the list has duplicate maximum values?</p>
                      <p className="text-gray-600">
                        max() returns one instance of the maximum value. For second largest, you need to remove all
                        instances of the maximum value.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Can you use these methods on tuples directly?</p>
                      <p className="text-gray-600">
                        max() and min() work directly on tuples, but sort() doesn't. You need to convert tuple to list
                        first for sorting.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the time complexity of the sorting approach?</p>
                      <p className="text-gray-600">
                        The sorting approach has O(n log n) time complexity, while the max/min approach has O(n) time
                        complexity.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you handle an empty list?</p>
                      <p className="text-gray-600">
                        Check if the list is empty using len(lst) == 0 or if not lst before applying max/min functions
                        to avoid ValueError.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What if the list has only one element?</p>
                      <p className="text-gray-600">
                        For a single element list, largest and smallest are the same. Second largest and smallest would
                        cause IndexError.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can you find the third largest element?</p>
                      <p className="text-gray-600">
                        After sorting, use lst[-3] for third largest, or remove the two largest elements and find max of
                        remaining elements.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-between mt-8">
                  <Link
                    href="/computer-science/practical/class-11/string-palindrome"
                    className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    <ChevronRight size={18} className="rotate-180" />
                    Previous: String Palindrome
                  </Link>
                  <Link
                    href="/computer-science/practical/class-11/list-swap"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next: List Swap
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
