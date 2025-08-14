import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TOC from "./toc"
import Related from "./related"
import SimplePdfButton from "@/components/simple-pdf-button"

export default function StackDataStructurePage() {
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
            <Link href="/computer-science/class-12" className="hover:text-[#1f888f]">
              Class 12
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Stack Data Structure</span>
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
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-xl font-bold text-[#1f888f]">Stack - Data Structure in Python</h1>
                <SimplePdfButton
                  title="Stack Data Structure Notes"
                  price={59}
                  pdfUrl="/pdfs/stack-data-structure.pdf"
                />
              </div>

              <div className="prose max-w-none text-sm">
                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Why Are Data Structures Important?</h2>
                <p className="mb-4">
                  Data structures help us decide how data should be arranged in memory so that a program can work with
                  it efficiently.
                </p>
                <p>Here's what you need to know:</p>
                <ul className="list-decimal pl-5 mb-4 space-y-1">
                  <li>
                    Data structures are the foundation of computer science. They help you write programs that are fast,
                    efficient, and organized—no matter which programming language you're using.
                  </li>
                  <li>
                    A data structure is a way to group and organize data (sometimes of different types) so that it can
                    be handled as one single unit.
                  </li>
                  <li>
                    Every data structure has a set of well-defined operations (like insert, delete, search), a
                    particular behavior, and some unique properties.
                  </li>
                </ul>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Data Type VS Data Structure</h2>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">What is a Data Type?</h3>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>A data type defines what kind of data a variable can hold.</li>
                  <li>It tells the computer what type of value is stored and how much memory is needed.</li>
                  <li>Think of data types as basic building blocks.</li>
                  <li>They help define the type and nature of a single piece of data.</li>
                </ul>

                <p className="mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <code>int</code> - stores whole numbers like 10, -5
                  </li>
                  <li>
                    <code>float</code> - stores decimal numbers like 3.14
                  </li>
                  <li>
                    <code>str</code> - stores text like "Hello"
                  </li>
                  <li>
                    <code>bool</code> - stores either True or False
                  </li>
                </ul>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">What is a Data Structure?</h3>
                <p className="mb-3">
                  A data structure is a way of organizing and storing a group of data so it can be used efficiently.
                  It's like a container that holds multiple values, often of the same or different data types.
                </p>

                <p className="mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <code>List</code> - stores a collection of values like [1, 2, 3]
                  </li>
                  <li>
                    <code>Tuple</code> - stores fixed values like (10, 20)
                  </li>
                  <li>
                    <code>Dictionary</code> - stores key-value pairs like {"name': 'John"}
                  </li>
                  <li>
                    <code>Stack, Queue, Tree</code> - special ways to organize data for faster operations
                  </li>
                </ul>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">What is a Stack?</h2>
                <p className="mb-4">
                  A stack is a data structure that follows the <strong>LIFO (Last In First Out)</strong> order. Think of
                  a scenario where at a dinner party there is a stack of plates - plates are always added or removed
                  from the top of the pile.
                </p>

                <div className="flex justify-center mb-6">
                  <img
                    src="/images/stack-plates.png"
                    alt="Stack of plates demonstrating LIFO principle"
                    className="rounded-lg shadow-md max-w-xs"
                  />
                </div>

                <p className="mb-4">Just like the stack of plates, in a stack data structure:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    Elements are added to the top (called <strong>PUSH</strong> operation)
                  </li>
                  <li>
                    Elements are removed from the top (called <strong>POP</strong> operation)
                  </li>
                  <li>You can only access the topmost element</li>
                  <li>The last element added is the first one to be removed</li>
                </ul>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Stack Operations Visualization</h2>
                <p className="mb-4">The following diagram shows how push and pop operations work in a stack:</p>

                <div className="flex justify-center mb-6">
                  <img
                    src="/images/stack-operations.png"
                    alt="Stack operations showing push and pop with numbered steps"
                    className="rounded-lg shadow-md max-w-full"
                  />
                </div>

                <p className="mb-4">In the diagram above:</p>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <strong>Steps 1-6:</strong> PUSH operations - Elements 1, 2, 3, 4, 5, 6 are added to the stack
                  </li>
                  <li>
                    <strong>Steps 7-10:</strong> POP operations - Elements 6, 5, 4, 3 are removed from the stack
                  </li>
                  <li>Notice how the last element pushed (6) is the first one to be popped</li>
                </ul>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Applications of Stack</h2>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>
                    <strong>Undo/Redo operations:</strong> Managing undo and redo functionality in text editors and
                    applications
                  </li>
                  <li>
                    <strong>Backtracking:</strong> Solving puzzles, mazes, and pathfinding algorithms
                  </li>
                  <li>
                    <strong>Function call management (recursion):</strong> Managing function calls and returns in
                    programming
                  </li>
                  <li>
                    <strong>Expression evaluation:</strong> Evaluating Postfix and Prefix expressions
                  </li>
                  <li>
                    <strong>Browser History:</strong> Managing back button functionality
                  </li>
                  <li>
                    <strong>Parentheses Matching:</strong> Checking balanced parentheses in expressions
                  </li>
                </ul>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Stack Operations in Python</h2>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">1. Stack Initialization</h3>
                <p className="mb-3">Create an empty stack using a list:</p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>{`stack = []  # An empty stack`}</code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">2. push() – Add an element to the stack</h3>
                <p className="mb-3">Use append() function to add an item on top:</p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>{`stack.append(10)
stack.append(20)
print(stack)  # Output: [10, 20]`}</code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">
                  3. pop() – Remove the top element from the stack
                </h3>
                <p className="mb-3">Removes and returns the last element:</p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>{`top = stack.pop()
print(top)    # Output: 20
print(stack)  # Output: [10]`}</code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">
                  4. peek() – View the top element without removing it
                </h3>
                <p className="mb-3">Use negative indexing to access the top element:</p>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>{`top = stack[-1]
print("Top element:", top)  # Output: Top element: 10`}</code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">
                  5. isEmpty() – Check if the stack is empty
                </h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>{`if not stack:
    print("Stack is empty")
else:
    print("Stack is not empty")`}</code>
                  </pre>
                </div>

                <h3 className="text-md font-bold mt-4 mb-2 text-[#1f888f]">
                  6. isFull() – (Only for fixed size stacks)
                </h3>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>{`MAX_SIZE = 5
if len(stack) == MAX_SIZE:
    print("Stack is full")`}</code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Complete Stack Implementation Example</h2>
                <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                  <pre>
                    <code>{`# Stack Implementation in Python
class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """Add an element to the top of the stack"""
        self.items.append(item)
        print(f"Pushed {item} to stack")
    
    def pop(self):
        """Remove and return the top element"""
        if self.is_empty():
            return "Stack is empty"
        return self.items.pop()
    
    def peek(self):
        """Return the top element without removing it"""
        if self.is_empty():
            return "Stack is empty"
        return self.items[-1]
    
    def is_empty(self):
        """Check if the stack is empty"""
        return len(self.items) == 0
    
    def size(self):
        """Return the size of the stack"""
        return len(self.items)
    
    def display(self):
        """Display all elements in the stack"""
        if self.is_empty():
            print("Stack is empty")
        else:
            print("Stack elements:", self.items)

# Example usage
stack = Stack()

# Push operations
stack.push(10)
stack.push(20)
stack.push(30)
stack.display()  # Output: Stack elements: [10, 20, 30]

# Peek operation
print("Top element:", stack.peek())  # Output: Top element: 30

# Pop operations
print("Popped:", stack.pop())  # Output: Popped: 30
print("Popped:", stack.pop())  # Output: Popped: 20
stack.display()  # Output: Stack elements: [10]

# Check if empty
print("Is empty:", stack.is_empty())  # Output: Is empty: False
print("Stack size:", stack.size())    # Output: Stack size: 1`}</code>
                  </pre>
                </div>

                <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">Practice Questions</h2>
                <ol className="list-decimal pl-5 mb-4 space-y-2">
                  <li>Write a Python program to implement a stack and perform push, pop, and display operations.</li>
                  <li>Write a program to check if parentheses are balanced in an expression using stack.</li>
                  <li>Write a program to reverse a string using stack.</li>
                  <li>Implement a stack that supports finding the minimum element in O(1) time.</li>
                  <li>Write a program to convert infix expression to postfix using stack.</li>
                  <li>Create a program that uses stack to implement undo functionality.</li>
                  <li>Write a program to evaluate a postfix expression using stack.</li>
                </ol>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                  <h3 className="font-bold text-yellow-800 mb-1">Important Note</h3>
                  <p className="text-yellow-800 text-sm">
                    Stack follows LIFO principle strictly. Always remember that the last element added is the first one
                    to be removed. This property makes stack very useful for many algorithms and applications like
                    recursion, expression evaluation, and backtracking.
                  </p>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/class-12/queue-data-structure"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Chapter: DBMS MYSQL
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
