import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lightbulb, Code, BookOpen, Calculator, Target, CheckCircle } from "lucide-react"
import ContentLayout from "@/components/content-layout"
import TableOfContents from "./toc"
import RelatedTopics from "./related"
import PDFDownloadSection from "@/components/pdf-download-section"

export default function WorkingWithFunctionsPage() {
  return (
    <ContentLayout
      title="Working with Functions"
      description="Master Python functions with comprehensive examples, practical programs, and detailed explanations for CBSE Class 12 Computer Science."
      subject="Computer Science"
      className="class-12"
      grade="12"
      tableOfContents={<TableOfContents />}
      relatedTopics={<RelatedTopics />}
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Code className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Working with Functions</h1>
        </div>
        <p className="text-xl opacity-90 mb-4">
          Learn to create, use, and optimize Python functions for efficient programming
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-white/20 text-white">
            Class 12
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white">
            Computer Science
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white">
            Python Programming
          </Badge>
        </div>
      </div>

      {/* PDF Download Section */}
      <PDFDownloadSection
        title="Working with Functions - Complete Notes"
        description="Download comprehensive PDF notes covering all aspects of Python functions including syntax, parameters, return values, scope, and practical examples."
        pdfUrl="/api/generate-pdf/working-with-functions"
        fileName="working-with-functions-notes.pdf"
      />

      {/* Learning Objectives */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-blue-600" />
            <span>Learning Objectives</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Understand function definition and calling</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Master parameter passing techniques</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Learn about return values and scope</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Implement recursive functions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Use built-in and user-defined functions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Apply functions in real-world problems</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Introduction */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Introduction to Functions</CardTitle>
          <CardDescription>Understanding the fundamentals of Python functions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            A function is a block of organized, reusable code that performs a specific task. Functions provide better
            modularity for your application and a high degree of code reusing. Python gives you many built-in functions
            like print(), len(), etc. but you can also create your own functions.
          </p>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertDescription>
              Functions help in breaking down complex problems into smaller, manageable pieces, making code more
              readable and maintainable.
            </AlertDescription>
          </Alert>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Benefits of Using Functions:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Code reusability and modularity</li>
              <li>Easier debugging and testing</li>
              <li>Better organization of code</li>
              <li>Reduced code duplication</li>
              <li>Improved readability</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Function Definition and Syntax */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Function Definition and Syntax</CardTitle>
          <CardDescription>Learn how to define and structure functions in Python</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Basic Syntax:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def function_name(parameters):
    """Optional docstring"""
    # Function body
    statement(s)
    return value  # Optional`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Simple Function Example:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def greet():
    """This function greets someone"""
    print("Hello, World!")

# Calling the function
greet()

# Output: Hello, World!`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Function with Parameters:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def greet_person(name):
    """This function greets a person with their name"""
    print(f"Hello, {name}!")

# Calling the function with an argument
greet_person("Alice")
greet_person("Bob")

# Output:
# Hello, Alice!
# Hello, Bob!`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Parameters and Arguments */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Parameters and Arguments</CardTitle>
          <CardDescription>Understanding different types of parameters and argument passing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">1. Required Parameters:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def add_numbers(a, b):
    """Function with required parameters"""
    return a + b

result = add_numbers(5, 3)
print(result)  # Output: 8`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">2. Default Parameters:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def greet_with_title(name, title="Mr."):
    """Function with default parameter"""
    return f"Hello, {title} {name}!"

print(greet_with_title("Smith"))        # Output: Hello, Mr. Smith!
print(greet_with_title("Johnson", "Dr."))  # Output: Hello, Dr. Johnson!`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">3. Keyword Arguments:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def create_profile(name, age, city="Unknown"):
    """Function demonstrating keyword arguments"""
    return f"Name: {name}, Age: {age}, City: {city}"

# Using keyword arguments
profile1 = create_profile(name="Alice", age=25, city="New York")
profile2 = create_profile(age=30, name="Bob")  # Order doesn't matter

print(profile1)  # Output: Name: Alice, Age: 25, City: New York
print(profile2)  # Output: Name: Bob, Age: 30, City: Unknown`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">4. Variable-length Arguments (*args):</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def sum_all(*numbers):
    """Function that accepts variable number of arguments"""
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # Output: 6
print(sum_all(1, 2, 3, 4, 5))  # Output: 15`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">5. Keyword Variable-length Arguments (**kwargs):</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def create_student(**details):
    """Function that accepts variable keyword arguments"""
    print("Student Details:")
    for key, value in details.items():
        print(f"{key}: {value}")

create_student(name="Alice", age=20, grade="A", subject="Computer Science")

# Output:
# Student Details:
# name: Alice
# age: 20
# grade: A
# subject: Computer Science`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Return Statement */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Return Statement</CardTitle>
          <CardDescription>Understanding how functions return values</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Functions Returning Single Value:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def calculate_area(length, width):
    """Calculate area of rectangle"""
    area = length * width
    return area

result = calculate_area(5, 3)
print(f"Area: {result}")  # Output: Area: 15`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Functions Returning Multiple Values:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def calculate_circle(radius):
    """Calculate area and circumference of circle"""
    import math
    area = math.pi * radius ** 2
    circumference = 2 * math.pi * radius
    return area, circumference

area, circumference = calculate_circle(5)
print(f"Area: {area:.2f}")
print(f"Circumference: {circumference:.2f}")

# Output:
# Area: 78.54
# Circumference: 31.42`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Functions Without Return Statement:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def print_info(name, age):
    """Function that doesn't return anything"""
    print(f"Name: {name}")
    print(f"Age: {age}")

result = print_info("Alice", 25)
print(f"Return value: {result}")  # Output: Return value: None`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Variable Scope */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Variable Scope</CardTitle>
          <CardDescription>Understanding local and global variables in functions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Local Variables:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def my_function():
    x = 10  # Local variable
    print(f"Inside function: x = {x}")

my_function()
# print(x)  # This would cause an error - x is not accessible outside

# Output: Inside function: x = 10`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Global Variables:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`x = 20  # Global variable

def my_function():
    print(f"Inside function: x = {x}")

def modify_global():
    global x
    x = 30
    print(f"Modified global x = {x}")

my_function()      # Output: Inside function: x = 20
modify_global()    # Output: Modified global x = 30
print(f"Outside function: x = {x}")  # Output: Outside function: x = 30`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Local vs Global Example:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`x = "global"

def test_scope():
    x = "local"  # This creates a new local variable
    print(f"Inside function: {x}")

test_scope()
print(f"Outside function: {x}")

# Output:
# Inside function: local
# Outside function: global`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recursion */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recursive Functions</CardTitle>
          <CardDescription>Understanding recursion and recursive function implementation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Recursion is a programming technique where a function calls itself to solve a problem. Every recursive
              function must have a base case to prevent infinite recursion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Factorial using Recursion:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def factorial(n):
    """Calculate factorial using recursion"""
    # Base case
    if n == 0 or n == 1:
        return 1
    # Recursive case
    else:
        return n * factorial(n - 1)

print(factorial(5))  # Output: 120
print(factorial(0))  # Output: 1

# Trace for factorial(4):
# factorial(4) = 4 * factorial(3)
# factorial(3) = 3 * factorial(2)
# factorial(2) = 2 * factorial(1)
# factorial(1) = 1
# Result: 4 * 3 * 2 * 1 = 24`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Fibonacci Series using Recursion:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def fibonacci(n):
    """Generate nth Fibonacci number using recursion"""
    # Base cases
    if n <= 1:
        return n
    # Recursive case
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Print first 10 Fibonacci numbers
for i in range(10):
    print(fibonacci(i), end=" ")

# Output: 0 1 1 2 3 5 8 13 21 34`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Sum of Digits using Recursion:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def sum_of_digits(n):
    """Calculate sum of digits using recursion"""
    # Base case
    if n == 0:
        return 0
    # Recursive case
    else:
        return (n % 10) + sum_of_digits(n // 10)

print(sum_of_digits(12345))  # Output: 15 (1+2+3+4+5)
print(sum_of_digits(999))    # Output: 27 (9+9+9)`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Built-in Functions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Built-in Functions</CardTitle>
          <CardDescription>Commonly used built-in functions in Python</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Mathematical Functions:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`# Mathematical built-in functions
numbers = [1, 2, 3, 4, 5]

print(f"Sum: {sum(numbers)}")        # Output: Sum: 15
print(f"Max: {max(numbers)}")        # Output: Max: 5
print(f"Min: {min(numbers)}")        # Output: Min: 1
print(f"Length: {len(numbers)}")     # Output: Length: 5
print(f"Absolute: {abs(-10)}")       # Output: Absolute: 10
print(f"Power: {pow(2, 3)}")         # Output: Power: 8
print(f"Round: {round(3.14159, 2)}") # Output: Round: 3.14`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Type Conversion Functions:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`# Type conversion functions
print(int("123"))      # Output: 123
print(float("3.14"))   # Output: 3.14
print(str(456))        # Output: "456"
print(bool(1))         # Output: True
print(bool(0))         # Output: False
print(list("hello"))   # Output: ['h', 'e', 'l', 'l', 'o']
print(tuple([1,2,3]))  # Output: (1, 2, 3)`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Input/Output Functions:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`# Input/Output functions
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Reading numbers
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))

print(f"Age: {age}, Height: {height}")`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Examples */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Practical Examples</CardTitle>
          <CardDescription>Real-world applications of functions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">Example 1: Grade Calculator</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def calculate_grade(marks):
    """Calculate grade based on marks"""
    if marks >= 90:
        return 'A+'
    elif marks >= 80:
        return 'A'
    elif marks >= 70:
        return 'B'
    elif marks >= 60:
        return 'C'
    elif marks >= 50:
        return 'D'
    else:
        return 'F'

def get_average(subjects):
    """Calculate average of subject marks"""
    return sum(subjects.values()) / len(subjects)

# Student marks
student_marks = {
    'Math': 85,
    'Science': 92,
    'English': 78,
    'History': 88
}

average = get_average(student_marks)
grade = calculate_grade(average)

print(f"Average marks: {average:.2f}")
print(f"Grade: {grade}")

# Output:
# Average marks: 85.75
# Grade: A`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Example 2: Temperature Converter</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius"""
    return (fahrenheit - 32) * 5/9

def kelvin_to_celsius(kelvin):
    """Convert Kelvin to Celsius"""
    return kelvin - 273.15

def celsius_to_kelvin(celsius):
    """Convert Celsius to Kelvin"""
    return celsius + 273.15

# Temperature conversions
temp_c = 25
temp_f = celsius_to_fahrenheit(temp_c)
temp_k = celsius_to_kelvin(temp_c)

print(f"{temp_c}°C = {temp_f}°F = {temp_k}K")

# Output: 25°C = 77.0°F = 298.15K`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Example 3: Simple Calculator</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y != 0:
        return x / y
    else:
        return "Error: Division by zero!"

def calculator():
    """Simple calculator function"""
    print("Simple Calculator")
    print("Operations: +, -, *, /")
    
    num1 = float(input("Enter first number: "))
    operation = input("Enter operation (+, -, *, /): ")
    num2 = float(input("Enter second number: "))
    
    if operation == '+':
        result = add(num1, num2)
    elif operation == '-':
        result = subtract(num1, num2)
    elif operation == '*':
        result = multiply(num1, num2)
    elif operation == '/':
        result = divide(num1, num2)
    else:
        result = "Invalid operation!"
    
    print(f"Result: {result}")

# Uncomment to run the calculator
# calculator()`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lambda Functions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Lambda Functions</CardTitle>
          <CardDescription>Understanding anonymous functions in Python</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Lambda functions are small anonymous functions that can have any number of arguments but can only have one
              expression. They are useful for short, simple functions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Basic Lambda Function:</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`# Lambda function syntax: lambda arguments: expression

# Simple lambda function
square = lambda x: x ** 2
print(square(5))  # Output: 25

# Lambda function with multiple arguments
add = lambda x, y: x + y
print(add(3, 4))  # Output: 7

# Using lambda with built-in functions
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25]`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Lambda with filter() and map():</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter even numbers
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(f"Even numbers: {even_numbers}")  # Output: [2, 4, 6, 8, 10]

# Map to get squares
squares = list(map(lambda x: x**2, numbers))
print(f"Squares: {squares}")  # Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Filter and map combined
even_squares = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, numbers)))
print(f"Even squares: {even_squares}")  # Output: [4, 16, 36, 64, 100]`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practice Problems */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calculator className="h-5 w-5 text-green-600" />
            <span>Practice Problems</span>
          </CardTitle>
          <CardDescription>Solve these problems to test your understanding</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Basic Level:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>1. Write a function to check if a number is prime</li>
                <li>2. Create a function to reverse a string</li>
                <li>3. Write a function to find the largest of three numbers</li>
                <li>4. Create a function to calculate simple interest</li>
                <li>5. Write a function to count vowels in a string</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Advanced Level:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>1. Write a recursive function for binary search</li>
                <li>2. Create a function to generate Pascal's triangle</li>
                <li>3. Write a function to solve Tower of Hanoi</li>
                <li>4. Create a function for matrix multiplication</li>
                <li>5. Write a function to implement quicksort algorithm</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Points Summary */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-purple-600" />
            <span>Key Points to Remember</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-sm">Functions promote code reusability and modularity</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-sm">Parameters can be required, default, or variable-length</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-sm">Functions can return single or multiple values</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-sm">Local variables are accessible only within the function</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-sm">Global variables can be accessed throughout the program</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-sm">Recursion requires a base case to prevent infinite loops</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-sm">Lambda functions are useful for short, simple operations</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-sm">Built-in functions provide ready-to-use functionality</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  )
}
