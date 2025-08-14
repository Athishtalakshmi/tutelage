import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function LuckyWinnersPage() {
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
            <span className="text-[#1f888f] font-medium">Lucky Winners</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Choose 4 Random Lucky Winners from 100 Customers</h1>
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
                    To write a Python program that randomly selects 4 customers as lucky winners from a pool of 100
                    customers using the random module.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Import the random module</li>
                    <li>Generate first random number between 1 and 100 for customer 1</li>
                    <li>Generate second random number between 1 and 100 for customer 2</li>
                    <li>Generate third random number between 1 and 100 for customer 3</li>
                    <li>Generate fourth random number between 1 and 100 for customer 4</li>
                    <li>Display all four lucky winner customer numbers</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Method 1: Basic approach (may have duplicates)
import random

c1 = random.randint(1, 100)
c2 = random.randint(1, 100)
c3 = random.randint(1, 100)
c4 = random.randint(1, 100)

print("Lucky winners are:", c1, c2, c3, c4)

# Method 2: Using random.sample() to avoid duplicates
import random

customers = list(range(1, 101))  # Create list of customers 1-100
lucky_winners = random.sample(customers, 4)

print("Lucky winners are:", lucky_winners)

# Method 3: Using set to ensure unique winners
import random

winners = set()
while len(winners) < 4:
    winner = random.randint(1, 100)
    winners.add(winner)

print("Lucky winners are:", list(winners))`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Method 1 Output:</strong>
                    </p>
                    <p>Lucky winners are: 23 67 45 89</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Method 2 Output:</strong>
                    </p>
                    <p>Lucky winners are: [12, 78, 34, 91]</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>
                      <strong>Method 3 Output:</strong>
                    </p>
                    <p>Lucky winners are: [56, 23, 87, 14]</p>
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
                      <p className="font-medium">What is the purpose of the random module in Python?</p>
                      <p className="text-gray-600">
                        The random module provides functions to generate random numbers, make random selections, and
                        shuffle sequences. It's useful for simulations, games, testing, and statistical sampling.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        What is the difference between random.randint() and random.sample()?
                      </p>
                      <p className="text-gray-600">
                        random.randint(a, b) generates a single random integer between a and b (inclusive), while
                        random.sample(population, k) selects k unique elements from a population without replacement.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Why might the basic method produce duplicate winners?</p>
                      <p className="text-gray-600">
                        Since each random.randint() call is independent, there's a possibility that the same number
                        could be generated multiple times, resulting in duplicate customer numbers.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does random.sample() ensure unique winners?</p>
                      <p className="text-gray-600">
                        random.sample() uses sampling without replacement, meaning once a number is selected, it cannot
                        be selected again in the same operation, guaranteeing unique results.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What would happen if we try to sample more elements than available?</p>
                      <p className="text-gray-600">
                        If we try random.sample(range(1, 101), 150), Python would raise a ValueError because we cannot
                        sample 150 unique elements from a population of only 100.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can we make the random selection reproducible?</p>
                      <p className="text-gray-600">
                        We can use random.seed() with a specific value before generating random numbers. This ensures
                        the same sequence of random numbers is generated each time the program runs.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the advantage of using a set in Method 3?</p>
                      <p className="text-gray-600">
                        Sets automatically handle duplicates - if the same number is generated twice, it's only stored
                        once. The while loop continues until we have exactly 4 unique winners.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">
                        How would you modify this program to select winners from a list of customer names?
                      </p>
                      <p className="text-gray-600">
                        We could create a list of customer names and use random.sample(customer_names, 4) to directly
                        select 4 random names from the list.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/string-module"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: String Module Operations
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
