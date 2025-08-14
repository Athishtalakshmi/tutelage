import Link from "next/link"
import { ChevronRight, Download } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function DiceSimulatorPage() {
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
            <Link href="/computer-science/practical/class-12" className="hover:text-[#1f888f]">
              Class 12
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Dice Simulator</span>
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
                  Write a random number generator that generates random numbers between 1 and 6 (simulates a dice)
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
                    To write a Python program that generates random numbers between 1 and 6 to simulate a dice roll.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Import the random module.</li>
                    <li>Create a function to simulate dice roll using random.randint(1, 6).</li>
                    <li>Display the menu options to the user.</li>
                    <li>Get user choice for single roll, multiple rolls, or exit.</li>
                    <li>For single roll, generate and display one random number.</li>
                    <li>For multiple rolls, ask for number of rolls and generate that many numbers.</li>
                    <li>Display the results with appropriate formatting.</li>
                    <li>Continue until user chooses to exit.</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`import random

def roll_dice():
    """Function to simulate a single dice roll"""
    return random.randint(1, 6)

def display_dice(number):
    """Function to display dice in a visual format"""
    dice_faces = {
        1: ["┌─────────┐",
            "│         │",
            "│    ●    │",
            "│         │",
            "└─────────┘"],
        2: ["┌─────────┐",
            "│  ●      │",
            "│         │",
            "│      ●  │",
            "└─────────┘"],
        3: ["┌─────────┐",
            "│  ●      │",
            "│    ●    │",
            "│      ●  │",
            "└─────────┘"],
        4: ["┌─────────┐",
            "│  ●   ●  │",
            "│         │",
            "│  ●   ●  │",
            "└─────────┘"],
        5: ["┌─────────┐",
            "│  ●   ●  │",
            "│    ●    │",
            "│  ●   ●  │",
            "└─────────┘"],
        6: ["┌─────────┐",
            "│  ●   ●  │",
            "│  ●   ●  │",
            "│  ●   ●  │",
            "└─────────┘"]
    }
    
    for line in dice_faces[number]:
        print(line)

# Main program
print("🎲 DICE SIMULATOR 🎲")
print("=" * 30)

while True:
    print("\\n1. Roll dice once")
    print("2. Roll dice multiple times")
    print("3. Roll two dice")
    print("4. Exit")
    
    choice = input("\\nEnter your choice (1-4): ")
    
    if choice == '1':
        result = roll_dice()
        print(f"\\n🎲 You rolled: {result}")
        display_dice(result)
        
    elif choice == '2':
        try:
            num_rolls = int(input("How many times do you want to roll the dice? "))
            if num_rolls <= 0:
                print("Please enter a positive number!")
                continue
                
            print(f"\\n🎲 Rolling dice {num_rolls} times:")
            results = []
            for i in range(num_rolls):
                roll = roll_dice()
                results.append(roll)
                print(f"Roll {i+1}: {roll}")
            
            print(f"\\nSummary:")
            print(f"Total rolls: {len(results)}")
            print(f"Results: {results}")
            print(f"Sum: {sum(results)}")
            print(f"Average: {sum(results)/len(results):.2f}")
            
        except ValueError:
            print("Please enter a valid number!")
            
    elif choice == '3':
        dice1 = roll_dice()
        dice2 = roll_dice()
        total = dice1 + dice2
        
        print(f"\\n🎲 First dice: {dice1}")
        display_dice(dice1)
        print(f"\\n🎲 Second dice: {dice2}")
        display_dice(dice2)
        print(f"\\n🎯 Total: {total}")
        
    elif choice == '4':
        print("\\n👋 Thanks for playing! Goodbye!")
        break
        
    else:
        print("❌ Invalid choice! Please enter 1, 2, 3, or 4.")

print("\\nProgram ended.")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>🎲 DICE SIMULATOR 🎲</p>
                    <p>==============================</p>
                    <p></p>
                    <p>1. Roll dice once</p>
                    <p>2. Roll dice multiple times</p>
                    <p>3. Roll two dice</p>
                    <p>4. Exit</p>
                    <p></p>
                    <p>Enter your choice (1-4): 1</p>
                    <p></p>
                    <p>🎲 You rolled: 4</p>
                    <p>┌─────────┐</p>
                    <p>│ ● ● │</p>
                    <p>│ │</p>
                    <p>│ ● ● │</p>
                    <p>└─────────┘</p>
                    <p></p>
                    <p>Enter your choice (1-4): 2</p>
                    <p>How many times do you want to roll the dice? 5</p>
                    <p></p>
                    <p>🎲 Rolling dice 5 times:</p>
                    <p>Roll 1: 3</p>
                    <p>Roll 2: 6</p>
                    <p>Roll 3: 1</p>
                    <p>Roll 4: 5</p>
                    <p>Roll 5: 2</p>
                    <p></p>
                    <p>Summary:</p>
                    <p>Total rolls: 5</p>
                    <p>Results: [3, 6, 1, 5, 2]</p>
                    <p>Sum: 17</p>
                    <p>Average: 3.40</p>
                  </div>
                </div>

                {/* RESULT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">RESULT</h2>
                  <div className="p-3 bg-green-50 border-l-4 border-green-400">
                    <p className="text-green-800">
                      Thus, the given program was successfully executed and the output was verified as per the expected
                      result.
                    </p>
                  </div>
                </div>

                {/* KEY POINTS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">KEY POINTS</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>random.randint(1, 6):</strong> Generates random integers between 1 and 6 (inclusive)
                    </li>
                    <li>
                      <strong>Visual Representation:</strong> ASCII art used to display dice faces
                    </li>
                    <li>
                      <strong>Menu-driven:</strong> User can choose different rolling options
                    </li>
                    <li>
                      <strong>Statistics:</strong> Program calculates sum and average for multiple rolls
                    </li>
                    <li>
                      <strong>Error Handling:</strong> Validates user input for number of rolls
                    </li>
                  </ul>
                </div>

                {/* PROGRAM VARIATIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM VARIATIONS</h2>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">Method 1: Simple Dice Simulator</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`import random

# Simple dice simulator
def simple_dice():
    return random.randint(1, 6)

# Roll dice 10 times
print("Rolling dice 10 times:")
for i in range(10):
    result = simple_dice()
    print(f"Roll {i+1}: {result}")

# Single roll
print(f"\\nSingle roll: {simple_dice()}")`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">Method 2: Using random.choice()</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`import random

# Using random.choice with list of dice values
dice_values = [1, 2, 3, 4, 5, 6]

def roll_with_choice():
    return random.choice(dice_values)

# Roll dice
for i in range(5):
    print(f"Roll {i+1}: {roll_with_choice()}")`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">
                    Method 3: Class-based Dice Simulator
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`import random

class Dice:
    def __init__(self):
        self.history = []
    
    def roll(self):
        result = random.randint(1, 6)
        self.history.append(result)
        return result
    
    def get_statistics(self):
        if not self.history:
            return "No rolls yet!"
        
        return {
            'total_rolls': len(self.history),
            'sum': sum(self.history),
            'average': sum(self.history) / len(self.history),
            'max': max(self.history),
            'min': min(self.history)
        }

# Usage
my_dice = Dice()
for i in range(10):
    result = my_dice.roll()
    print(f"Roll {i+1}: {result}")

print("\\nStatistics:", my_dice.get_statistics())`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* COMMON ERRORS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">COMMON ERRORS & SOLUTIONS</h2>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 border-l-4 border-red-400">
                      <p className="font-medium text-red-800">ModuleNotFoundError</p>
                      <p className="text-red-700 text-sm">
                        Make sure to import the random module at the beginning of your program.
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400">
                      <p className="font-medium text-yellow-800">ValueError in input</p>
                      <p className="text-yellow-700 text-sm">
                        Use try-except blocks to handle invalid input when asking for number of rolls.
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 border-l-4 border-blue-400">
                      <p className="font-medium text-blue-800">Wrong range in randint()</p>
                      <p className="text-blue-700 text-sm">
                        Remember that randint(1, 6) includes both 1 and 6 in the possible results.
                      </p>
                    </div>
                  </div>
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What is the difference between randint() and choice()?</p>
                      <p className="text-gray-600">
                        randint(a, b) generates random integers between a and b (inclusive), while choice(seq) selects a
                        random element from a sequence.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How do you ensure truly random results?</p>
                      <p className="text-gray-600">
                        Python's random module uses a pseudorandom number generator. For cryptographic purposes, use the
                        secrets module instead.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What does random.seed() do?</p>
                      <p className="text-gray-600">
                        random.seed() initializes the random number generator with a specific value, making the sequence
                        reproducible.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you simulate rolling two dice simultaneously?</p>
                      <p className="text-gray-600">
                        Call randint(1, 6) twice and store the results in separate variables, then add them for the
                        total.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the probability of getting each number on a fair dice?</p>
                      <p className="text-gray-600">
                        Each number (1-6) has an equal probability of 1/6 or approximately 16.67% on a fair six-sided
                        dice.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can you test if the dice simulator is fair?</p>
                      <p className="text-gray-600">
                        Roll the dice many times (e.g., 10000) and check if each number appears approximately 1/6 of the
                        time.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What other random functions are available in Python?</p>
                      <p className="text-gray-600">
                        random.uniform(), random.random(), random.shuffle(), random.sample(), etc. for different random
                        operations.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you modify this for a 20-sided dice?</p>
                      <p className="text-gray-600">
                        Change randint(1, 6) to randint(1, 20) and update the display function accordingly.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-12"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Back to Class 12 Programs
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
