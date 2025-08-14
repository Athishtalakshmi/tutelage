import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function ListsPythonPage() {
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
            <span className="text-[#1f888f] font-medium">Lists in Python</span>
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
              <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Chapter 7: Lists in Python</h1>

              <div className="prose max-w-none text-sm">
                {/* Introduction */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Introduction to Lists</h2>
                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-blue-800 mb-2">What is a List?</h3>
                    <p className="text-blue-700 mb-2">
                      List is a collection of values or an ordered sequence of values/items. The items in a list can be
                      of any type such as string, integer, float or even a list.
                    </p>
                    <ul className="text-blue-700 space-y-1">
                      <li>Elements are enclosed in Square brackets [ ]</li>
                      <li>Items are separated by commas</li>
                      <li>Lists are mutable (values can be modified)</li>
                      <li>Lists are heterogeneous (different data types allowed)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>L1 = [1, 2, 5, 4]</p>
                    <p>L1 = [1, 2.25, "python", "10+j12", [10, 20, 30], 245]</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-green-800 mb-2">CTM (Come to Mind)</h3>
                    <p className="text-green-700">
                      A list is a collection of comma-separated values (items) within square brackets. Items in a list
                      need not be of the same type.
                    </p>
                  </div>
                </section>

                {/* Creating Lists */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">1. Declaring/Creating Lists</h2>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Basic Syntax</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`List_Name = []
# Example:
L = []  
# Empty list initialization`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">2. List Types and Examples</h3>

                  <h4 className="text-md font-bold mt-3 mb-2 text-[#1f888f]">Different Types of Lists</h4>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Empty List</li>
                    <li>Long Lists</li>
                    <li>Nested Lists</li>
                  </ul>

                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`# List of integers
list = [10, 20, 30, 40]
# List with different data types
list = ["Deep", 450, 30.4, "python", -200]
# List of characters
list = ['A', 'E', 'I', 'O', 'U']
# List of strings
List = ["Delhi", "Mumbai"]
# Nested list (list containing another list)
List = [3, 4, [5, 6, 7], 8, 9, 10]
# Long list
List = [0, 1, 2, 3, 4, 5, 6, 100, 23, 45, 65, 33, 45, 6, 7, 82, 90, 100, 22, -32, 343, -20]`}
               </code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">
                    3. Creating List from Existing Sequence
                  </h3>
                  <p>What is a Sequence?</p>
                  <p>A sequence is a collection of items in a specific order.</p> 
                  <p>Examples:</p>
                  <ul>
                    <li>Strings ("hello")</li>
                    <li>Ranges (range(5))</li>
                    <li>Tuples ((1, 2, 3))</li>
                  </ul>
                  <p className="mb-3">
                    <strong>Syntax:</strong> 
                    {"<new_list_name> = list(sequence)"}
                  </p>
                    <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                      <pre>
                        <code>{`new_list = list(sequence)`}</code>
                      </pre>
                    </div>
                  <strong>Examples</strong>
                  <p>String → List</p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                      <pre>
                        <code>{`l1 = list("python")
print(l1)      # ['p', 'y', 't', 'h', 'o', 'n']
`}</code>
                      </pre>
                    </div>
                  <p>Tuple → List</p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                        <code>{`t = (10, 20, 30)
l2 = list(t)
print(l2)      # [10, 20, 30]
`}</code>
                      </pre>
                    </div>
                  <p>Range → List</p>
<div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                        <code>{`r = range(5)
l3 = list(r)
print(l3)      # [0, 1, 2, 3, 4]
`}</code>
                      </pre>
                    </div>




                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">4. Creating List through User Input</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <strong>Example 1: Taking numbers as list elements</strong>
<div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                        <code>{`user_input = input("Enter numbers separated by space: ")  
numbers = user_input.split()       # returns a list of strings
print(numbers)

`}</code>
                      </pre>
                    </div>

<p>Sample Input:</p>

<div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                        <code>{`Enter numbers separated by space: 10 20 30 40

`}</code>
                      </pre>
                    </div>
<p>Output:</p>
<div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                        <code>{`['10', '20', '30', '40']


`}</code>
                      </pre>
                    </div>






                    <pre>
                      <code>{`>>> l1 = list(input("Enter a list of elements: "))
Enter a list of elements: 10,20,30,40
>>> l1
[' ', '1', '0', ',', '2', '0', ',', '3', '0', ',', '4', '0']
                            >>> l1 = list(input("Enter a list of elements: "))
                            Enter a list of elements: hi python
                            >>> l1
                            ['h', 'i', ' ', 'p', 'y', 't', 'h', 'o', 'n']`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">5. Creating from Existing List</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [10, 20, 30, 40, 50, 60, 70]
                              >>> l2 = l1[:]  # Copy entire list
                              >>> l2
                                [10, 20, 30, 40, 50, 60, 70]
                              >>> l3 = l2[1:4]  # Copy slice
                              >>> l3
                                [20, 30, 40]
                              >>> l4 = l1  # Reference to same list
                              >>> l4
                              [10, 20, 30, 40, 50, 60, 70]`}</code>
                    </pre>
                  </div>
                </section>

                {/* Accessing List Elements */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">6. Accessing List Elements</h2>

                  <div className="bg-gray-100 p-4 rounded-md mb-4">
                    <h3 className="font-bold mb-2">Example: L1 = [10, 20, 30, 40, 50, 60]</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700">Positive Index</h4>
                        <div className="font-mono text-sm">
                          <p>Index: 0 1 2 3 4 5</p>
                          <p>Value: 10 20 30 40 50 60</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700">Negative Index</h4>
                        <div className="font-mono text-sm">
                          <p>Index: -6 -5 -4 -3 -2 -1</p>
                          <p>Value: 10 20 30 40 50 60</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [10, 20, 30, 40, 50, 60]
>>> l1[3]
40
>>> l1[-3]
40
>>> l1[0]
10
>>> l1[-1]
60

>>> l1[7]  # Index out of range
Traceback (most recent call last):
  File "<pyshell#14>", line 1, in <module>
    l1[7]
IndexError: list index out of range`}</code>
                    </pre>
                  </div>
                </section>

                {/* Traversing Lists */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Traversing a List</h2>
                  <p className="mb-4">
                    Accessing each element of a list. This can be done with the help of for loop and while loop.
                  </p>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Method 1: Direct Iteration</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`list = ['l', 'e', 'a', 'r', 'n']
for i in list:
    print(i)`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Method 2: Using range() Function</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`list = ['l', 'e', 'a', 'r', 'n']
n = len(list)
for i in range(n):
    print(list[i])
print("Total number of characters:", n)`}</code>
                    </pre>
                  </div>
                </section>

                {/* Comparing Lists */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Comparing Lists</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`L1 = [10, 20, 30, 40, 50]
L2 = [10, 20, 30, 40, 50]
L3 = [1, 2, 3]

>>> L1 == L2
True
>>> L1 == L3
False
>>> L1 > L3
True
>>> L3 > L1
False
>>> L2 < L3
False`}</code>
                    </pre>
                  </div>
                </section>

                {/* Operations on Lists */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Operations on Lists</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-3 rounded-md">
                      <h3 className="font-bold text-blue-800">List Operations</h3>
                      <ul className="text-sm text-blue-700 mt-2 space-y-1">
                        <li>1. Concatenation</li>
                        <li>2. Repetition</li>
                        <li>3. Membership Testing</li>
                        <li>4. Slicing</li>
                        <li>5. Indexing</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">1. Concatenation (+)</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = ['red', 'blue']
>>> l2 = [10, 20, 30]
>>> l3 = l1 + ['yellow']
>>> l3
['red', 'blue', 'yellow']

>>> l4 = l1 + l2
>>> l4
['red', 'blue', 10, 20, 30]

>>> l5 = ['Green', 'white'] + ['Black']
>>> l5
['Green', 'white', 'Black']

# Error examples:
>>> l1 = l2 + 40  # TypeError: can only concatenate list (not "int") to list
>>> l1 = l2 + 'python'  # TypeError: can only concatenate list (not "str") to list`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">2. Repetition/Replication (*)</h3>
                  <p className="mb-3">
                    Multiply (*) operator replicates the list for a specified number of times and creates a new list.
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> list1 = [10, 20, 30]
>>> list1 * 2
[10, 20, 30, 10, 20, 30]

>>> list1 * 3
[10, 20, 30, 10, 20, 30, 10, 20, 30]

>>> list1 * 4
[10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30]

>>> x = 'python' * 3
>>> x
'pythonpythonpython'`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">3. Membership Operators</h3>
                  <p className="mb-3">
                    Membership testing checks whether a particular element/item is a member of that sequence or not.
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> x = [10, 20, 30, 40, 50, 100]
>>> print(100 in x)
True
>>> print(100 not in x)
False
>>> print(12 not in x)
True`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">4. Indexing</h3>
                  <p className="mb-3">Index is the position value for each item present in the sequence.</p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> x = [10, 20, 30, 40, 50, 100]
>>> x[0]
10
>>> x[-1]
100
>>> x[4]
50`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">5. Slicing</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> x = [1, 2, 3, 4, 5, 6]
>>> x[0:3]
[1, 2, 3]
>>> x[0:5]
[1, 2, 3, 4, 5]
>>> x[1:5]
[2, 3, 4, 5]
>>> x[1:5:-1]
[]
>>> x[0:5:-1]
[]
>>> x[1:3:2]
[2]
>>> x[0:5:2]
[1, 3, 5]`}</code>
                    </pre>
                  </div>
                </section>

                {/* Nested Lists */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Nested Lists</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> x = [1, 2, 3, [10, 20, 30, 40], 'a', 'b']
>>> x[4]
'a'
>>> x[3]
[10, 20, 30, 40]
>>> x[3][1]
20`}</code>
                    </pre>
                  </div>
                </section>

                {/* Copying Lists */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Copying Lists</h2>
                  <div className="bg-yellow-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-yellow-800 mb-2">Different Methods to Copy Lists</h3>
                    <ul className="text-yellow-700 space-y-1">
                      <li>
                        <strong>Method 1:</strong> L1 == L2 (Comparison, not copying)
                      </li>
                      <li>
                        <strong>Method 2:</strong> L3 = L1[:] (Slice copy)
                      </li>
                      <li>
                        <strong>Method 3:</strong> L4 = list(L3) (Constructor copy)
                      </li>
                      <li>
                        <strong>Method 4:</strong> L5 = copy.copy(L4) (Using copy module)
                      </li>
                    </ul>
                  </div>
                </section>

                {/* List Built-in Functions */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">List Built-in Functions and Methods</h2>

                  <div className="bg-purple-50 p-4 rounded-md mb-6">
                    <h3 className="font-bold text-purple-800 mb-2">Complete List of Methods</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-purple-700">
                      <div>1. append()</div>
                      <div>2. extend()</div>
                      <div>3. index()</div>
                      <div>4. insert()</div>
                      <div>5. sort()</div>
                      <div>6. sorted()</div>
                      <div>7. pop()</div>
                      <div>8. remove()</div>
                      <div>9. reverse()</div>
                      <div>10. max(), min(), sum()</div>
                      <div>11. clear()</div>
                      <div>12. len()</div>
                      <div>13. count()</div>
                      <div>14. del()</div>
                    </div>
                  </div>

                  {/* 1. append() */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">1. append()</h3>
                  <p className="mb-3">Add item to the end of the list.</p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> list.append(item)
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [1, 2, 3, 4, 5]
>>> l1.append(100)
>>> l1
[1, 2, 3, 4, 5, 100]

>>> l1 = [1, 2, 3, 40, 67, 'a', "10+j23", "python", 20.34, 100]
>>> l1.append(99)
>>> l1
[1, 2, 3, 40, 67, 'a', '10+j23', 'python', 20.34, 100, 99]

>>> l1.append("list")
>>> l1
[1, 2, 3, 40, 67, 'a', '10+j23', 'python', 20.34, 100, 99, 'list']

>>> l1.append(10, 20)  # Error: takes exactly one argument
TypeError: append() takes exactly one argument (2 given)`}</code>
                    </pre>
                  </div>

                  {/* 2. extend() */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">2. extend()</h3>
                  <p className="mb-3">
                    Add one list at the end of another list. All items of a list are added at the end of an already
                    created list.
                  </p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> list1.extend(list2)
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [1, 2, 3, 4]
>>> l2 = [10, 20, 30]
>>> l1.extend(l2)
>>> l1
[1, 2, 3, 4, 10, 20, 30]
>>> l2
[10, 20, 30]`}</code>
                    </pre>
                  </div>

                  {/* 3. index() */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">3. index()</h3>
                  <p className="mb-3">
                    Return the index of the first element whose value is equal to item. A ValueError exception is raised
                    if item is not found in the list.
                  </p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> list.index(item)
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [1, 2, 3, 4, 5, 100]
>>> l1.index(5)
4
>>> l1.index(50)  # Error: not found
ValueError: 50 is not in list

>>> l1 = [1, 2, 3, 4, 5, 6, 10, 40, 50]
>>> l1[7]
40
>>> l1.index(10)
6`}</code>
                    </pre>
                  </div>

                  {/* 4. insert() */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">4. insert()</h3>
                  <p className="mb-3">
                    Inserts item into the list at the specified index. When an item is inserted, the list expands and
                    existing items shift by one position.
                  </p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> insert(index, item)
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [10, 20, 30]
>>> l1.insert(1, 2200)
>>> l1
[10, 2200, 20, 30]

>>> l1.insert(4, 100)
>>> l1
[10, 2200, 20, 30, 100]

>>> l1.insert(-1, 500)
>>> l1
[10, 2200, 20, 30, 500, 100]

>>> l1 = [1, 2, 3, 4, 5, 6]
>>> l1.insert(1, 100)
>>> l1
[1, 100, 2, 3, 4, 5, 6]

>>> l1.insert(0, 90)
>>> l1
[90, 1, 100, 2, 3, 4, 5, 6]

>>> l1.insert(len(l1), 1000)
>>> l1
[90, 1, 100, 2, 3, 4, 5, 6, 1000]`}</code>
                    </pre>
                  </div>

                  {/* 5. sort() */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">5. sort()</h3>
                  <p className="mb-3">
                    Sorts the items in the list in ascending order (from lowest to highest values).
                  </p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> list.sort()
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [10, 20, 30, 100, 250, 500, 800, 2200]
>>> l1.sort()
>>> l1
[10, 20, 30, 100, 250, 500, 800, 2200]

>>> l1.sort(reverse=True)
>>> l1
[2200, 800, 500, 250, 100, 30, 20, 10]

>>> l1.sort(reverse=False)
>>> l1
[10, 20, 30, 100, 250, 500, 800, 2200]`}</code>
                    </pre>
                  </div>

                  {/* 6. sorted() */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">6. sorted()</h3>
                  <p className="mb-3">Returns a new sorted list without modifying the original list.</p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> sorted(list)
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [10, 23, 4, 6, 2, 7, 45, 67]
>>> l1.sorted()  # Error: list has no sorted method
AttributeError: 'list' object has no attribute 'sorted'

>>> sorted(l1)  # Correct usage
[2, 4, 6, 7, 10, 23, 45, 67]`}</code>
                    </pre>
                  </div>

                  {/* 7. clear() */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">7. clear()</h3>
                  <p className="mb-3">Remove all items from the list.</p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> list.clear()
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [1, 2, 3, 4, 5]
>>> l1.clear()
>>> l1
[]`}</code>
                    </pre>
                  </div>

                  {/* 8. count() */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">8. count()</h3>
                  <p className="mb-3">
                    Returns how many times an element has occurred in a list. If element is not present, returns 0.
                  </p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> list.count(element)
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [10, 2, 1, 2, 2, 1, 1, 1, 1, 4, 3, 2, 56, 2, 2, 2]
>>> l1.count(2)
7
>>> l1.count(1)
5`}</code>
                    </pre>
                  </div>

                  {/* 9. len() */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">9. len()</h3>
                  <p className="mb-3">Returns the length of the list.</p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> len(list)
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [1, 2, 3, 4, 5]
>>> len(l1)
5`}</code>
                    </pre>
                  </div>

                  {/* 10. reverse() */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">10. reverse()</h3>
                  <p className="mb-3">Reverse the order of items in the list.</p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> list.reverse()
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [1, 45, 23, 89, 70, 2]
>>> l1.reverse()
>>> l1
[2, 70, 89, 23, 45, 1]`}</code>
                    </pre>
                  </div>

                  {/* 11. Updating List */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">11. Updating List</h3>
                  <p className="mb-3">
                    <strong>Syntax:</strong> L1[index] = {"<new_value>"}
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l2 = [10, 20, 30]
>>> l2[2] = 23
>>> l2
[10, 20, 23]

>>> l2[0] = 100
>>> l2
[100, 20, 23]`}</code>
                    </pre>
                  </div>

                  {/* Deletion Operations */}
                  <h3 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Deletion Operations</h3>

                  {/* 12. pop() */}
                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">12. pop()</h4>
                  <p className="mb-3">Remove the last item from the list.</p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> list.pop()
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 6]
>>> l1.pop()
6
>>> l1
[1, 2, 3, 4, 4, 5, 5, 5, 6, 6]

>>> l1.pop()
6
>>> l1
[1, 2, 3, 4, 4, 5, 5, 5, 6]`}</code>
                    </pre>
                  </div>

                  {/* 13. remove() */}
                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">13. remove()</h4>
                  <p className="mb-3">
                    Removes the first occurrence of item from the list. A ValueError exception is raised if item is not
                    found.
                  </p>
                  <p className="mb-3">
                    <strong>Syntax:</strong> list.remove(item)
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [10, 20, 30, 40, 50, 60, 40]
>>> l1.remove(40)
>>> l1
[10, 20, 30, 50, 60, 40]`}</code>
                    </pre>
                  </div>

                  {/* 14. del statement */}
                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">14. del Statement</h4>
                  <p className="mb-3">
                    <strong>Syntax:</strong> del list[index]
                  </p>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [1, 2, 3, 4, 4, 5, 5, 5, 6]
>>> del l1[4]
>>> l1
[1, 2, 3, 4, 5, 5, 5, 6]

>>> del l1[6]
>>> l1
[1, 2, 3, 4, 5, 5, 6]

>>> del l1[8]  # Error: index out of range
IndexError: list assignment index out of range`}</code>
                    </pre>
                  </div>

                  {/* 15. max(), min(), sum() */}
                  <h4 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">15. max(), min(), sum()</h4>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> l1 = [2, 70, 89, 23, 45, 1]
>>> max(l1)
89
>>> min(l1)
1

>>> l1 = [2, 2, 2, 1, 1, 1, 1, 4, 3, 2, 56, 2, 2, 2]
>>> sum(l1)
81

# Mean calculation
# Mean = sum of elements / total number of elements`}</code>
                    </pre>
                  </div>
                </section>

                {/* Practice Problems */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Practice Problems</h2>

                  <div className="bg-green-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-green-800 mb-2">Problem 1</h3>
                    <p className="text-green-700 mb-2">
                      Suppose L = ['abc', [6, 7, 8], 3, 'Mouse']. Consider the above list and answer the following:
                    </p>
                    <ul className="text-green-700 space-y-1">
                      <li>A) L[3:1]</li>
                      <li>B) L[::2]</li>
                      <li>C) L[1:2]</li>
                      <li>D) L[1][1]</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-blue-800 mb-2">Problem 2</h3>
                    <p className="text-blue-700 mb-2">Write the output of the following:</p>
                    <div className="bg-gray-800 text-white p-3 rounded-md overflow-x-auto">
                      <pre>
                        <code>{`L = []
L1 = []
L2 = []
for i in range(6, 10):
    L.append(i)
for i in range(10, 4, -2):
    L1.append(i)
for i in range(len(L1)):
    L2.append(L[i] + L1[i])
L2.append(len(L) - len(L1))
print(L2)`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-purple-800 mb-2">Solutions</h3>
                    <div className="text-purple-700 space-y-2">
                      <p>
                        <strong>Problem 1 Solutions:</strong>
                      </p>
                      <ul className="space-y-1 ml-4">
                        <li>A) L[3:1] = [] (empty list, invalid slice)</li>
                        <li>B) L[::2] = ['abc', 3] (every 2nd element)</li>
                        <li>C) L[1:2] = [[6, 7, 8]] (slice from index 1 to 2)</li>
                        <li>D) L[1][1] = 7 (2nd element of nested list)</li>
                      </ul>
                      <p>
                        <strong>Problem 2 Solution:</strong>
                      </p>
                      <p className="ml-4">L = [6, 7, 8, 9], L1 = [10, 8, 6], L2 = [16, 15, 14, 1]</p>
                    </div>
                  </div>
                </section>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/class-11/tuples-dictionary"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Chapter: Tuples and Dictionary
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
