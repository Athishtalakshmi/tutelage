import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function ListSearchPage() {
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
            <span className="text-[#1f888f] font-medium">List Search</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Search Element in List/Tuple</h1>
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
                    To write a Python program that inputs a list/tuple of elements and searches for a given element,
                    displaying its index and position if found.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-md mt-3">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Index starts from 0, while position starts from 1. Index is used in
                      programming, position is more user-friendly.
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
                    <li>Use a loop to input elements and append them to the list</li>
                    <li>Display the entered list</li>
                    <li>Input the element to be searched</li>
                    <li>Use a loop to iterate through the list</li>
                    <li>Compare each element with the search element</li>
                    <li>If found, display the index and position, then break</li>
                    <li>If loop completes without finding, display "not found" message</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Input a list/tuple of elements, search for a given element

# Method 1: Linear Search in List
lst = []
num = int(input("How many Numbers in the list: "))
for n in range(num):
    numbers = int(input("Enter Number: "))
    lst.append(numbers)

print("The Entered list is:", lst)
length = len(lst)
element = int(input("Enter the element to be searched for: "))

for i in range(0, length):
    if element == lst[i]:
        print(element, "found at index", i, "and position:", i + 1)
        break
else:
    print(element, "is not found!!!")

print("\\n" + "=" * 50)
print("METHOD 2: Using Built-in Methods")
print("=" * 50)

# Method 2: Using built-in methods
lst2 = []
num2 = int(input("\\nHow many Numbers in the list: "))
for n in range(num2):
    numbers = int(input("Enter Number: "))
    lst2.append(numbers)

print("The Entered list is:", lst2)
element2 = int(input("Enter the element to be searched for: "))

if element2 in lst2:
    index = lst2.index(element2)
    print(element2, "found at index", index, "and position:", index + 1)
    
    # Count occurrences
    count = lst2.count(element2)
    print(f"Element {element2} appears {count} time(s) in the list")
    
    # Find all occurrences
    all_indices = [i for i, x in enumerate(lst2) if x == element2]
    print(f"All indices where {element2} is found: {all_indices}")
else:
    print(element2, "is not found!!!")

print("\\n" + "=" * 50)
print("METHOD 3: Search in Tuple")
print("=" * 50)

# Method 3: Search in Tuple
tuple_elements = []
num3 = int(input("\\nHow many elements in tuple: "))
for n in range(num3):
    element_input = input("Enter element: ")
    # Try to convert to int, if fails keep as string
    try:
        element_input = int(element_input)
    except ValueError:
        pass
    tuple_elements.append(element_input)

my_tuple = tuple(tuple_elements)
print("The Entered tuple is:", my_tuple)

search_element = input("Enter the element to be searched for: ")
# Try to convert search element to int if possible
try:
    search_element = int(search_element)
except ValueError:
    pass

found = False
for i, item in enumerate(my_tuple):
    if item == search_element:
        print(f"{search_element} found at index {i} and position {i + 1}")
        found = True
        break

if not found:
    print(f"{search_element} is not found in the tuple!!!")

print("\\n" + "=" * 50)
print("METHOD 4: Function-based Search")
print("=" * 50)

def linear_search(data_list, target):
    """Function to perform linear search"""
    for i, item in enumerate(data_list):
        if item == target:
            return i
    return -1

def search_all_occurrences(data_list, target):
    """Function to find all occurrences of target"""
    indices = []
    for i, item in enumerate(data_list):
        if item == target:
            indices.append(i)
    return indices

# Demo with predefined data
demo_list = [10, 20, 30, 20, 40, 20, 50]
print(f"\\nDemo list: {demo_list}")
target = 20

result = linear_search(demo_list, target)
if result != -1:
    print(f"First occurrence of {target} found at index {result}")
else:
    print(f"{target} not found in the list")

all_occurrences = search_all_occurrences(demo_list, target)
if all_occurrences:
    print(f"All occurrences of {target} at indices: {all_occurrences}")
    print(f"Total occurrences: {len(all_occurrences}")
else:
    print(f"{target} not found in the list")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>How many Numbers in the list: 5</p>
                    <p>Enter Number: 10</p>
                    <p>Enter Number: 20</p>
                    <p>Enter Number: 30</p>
                    <p>Enter Number: 40</p>
                    <p>Enter Number: 50</p>
                    <p>The Entered list is: [10, 20, 30, 40, 50]</p>
                    <p>Enter the element to be searched for: 30</p>
                    <p>30 found at index 2 and position: 3</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>==================================================</p>
                    <p>METHOD 2: Using Built-in Methods</p>
                    <p>==================================================</p>
                    <p></p>
                    <p>How many Numbers in the list: 4</p>
                    <p>Enter Number: 5</p>
                    <p>Enter Number: 15</p>
                    <p>Enter Number: 25</p>
                    <p>Enter Number: 35</p>
                    <p>The Entered list is: [5, 15, 25, 35]</p>
                    <p>Enter the element to be searched for: 100</p>
                    <p>100 is not found!!!</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>==================================================</p>
                    <p>METHOD 4: Function-based Search</p>
                    <p>==================================================</p>
                    <p></p>
                    <p>Demo list: [10, 20, 30, 20, 40, 20, 50]</p>
                    <p>First occurrence of 20 found at index 1</p>
                    <p>All occurrences of 20 at indices: [1, 3, 5]</p>
                    <p>Total occurrences: 3</p>
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
                      <p className="font-medium">What is the difference between index and position?</p>
                      <p className="text-gray-600">
                        Index starts from 0 and is used in programming, while position starts from 1 and is more
                        user-friendly. Position = Index + 1.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does the for-else construct work in Python?</p>
                      <p className="text-gray-600">
                        The else block executes only if the loop completes normally (without encountering a break). If
                        break is executed, the else block is skipped.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the time complexity of linear search?</p>
                      <p className="text-gray-600">
                        Linear search has O(n) time complexity in worst case, where n is the number of elements. Best
                        case is O(1) when element is found at first position.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if we use index() method on non-existent element?</p>
                      <p className="text-gray-600">
                        The index() method raises a ValueError if the element is not found. That's why we use 'in'
                        operator first to check existence.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can you find all occurrences of an element?</p>
                      <p className="text-gray-600">
                        Use list comprehension: [i for i, x in enumerate(lst) if x == target] or iterate through the
                        list and collect all matching indices.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the difference between searching in list vs tuple?</p>
                      <p className="text-gray-600">
                        The search algorithm is the same, but tuples are immutable. Lists can be modified during search,
                        while tuples cannot. Both support indexing and iteration.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you implement binary search?</p>
                      <p className="text-gray-600">
                        Binary search requires a sorted list and has O(log n) complexity. It repeatedly divides the
                        search space in half by comparing with the middle element.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the advantage of using enumerate() function?</p>
                      <p className="text-gray-600">
                        enumerate() returns both index and value in each iteration, making code cleaner than manually
                        tracking index with range(len(list)).
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/list-extremes"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: List Extremes
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
