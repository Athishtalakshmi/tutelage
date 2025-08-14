import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Create HTML content for the PDF
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Working with Functions - Class 12 Computer Science</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 20px;
                color: #333;
            }
            .cover-page {
                text-align: center;
                padding: 100px 0;
                page-break-after: always;
            }
            .logo {
                width: 80px;
                height: 60px;
                background: #1f888f;
                margin: 0 auto 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
            }
            .title {
                font-size: 28px;
                color: #1f888f;
                margin-bottom: 20px;
                font-weight: bold;
            }
            .subtitle {
                font-size: 18px;
                margin-bottom: 10px;
            }
            .cbse-label {
                color: #b80877;
                font-size: 14px;
                margin-top: 30px;
            }
            .footer {
                position: fixed;
                bottom: 20px;
                left: 0;
                right: 0;
                text-align: center;
                font-size: 10px;
                color: #666;
            }
            .header {
                position: fixed;
                top: 10px;
                left: 20px;
                right: 20px;
                font-size: 10px;
                color: #666;
                border-bottom: 1px solid #eee;
                padding-bottom: 5px;
            }
            .page-number {
                position: fixed;
                bottom: 10px;
                right: 20px;
                font-size: 10px;
                color: #666;
            }
            .content {
                margin-top: 40px;
            }
            h1 {
                color: #1f888f;
                font-size: 24px;
                border-bottom: 2px solid #1f888f;
                padding-bottom: 10px;
            }
            h2 {
                color: #1f888f;
                font-size: 18px;
                margin-top: 30px;
                margin-bottom: 15px;
            }
            h3 {
                color: #1f888f;
                font-size: 16px;
                margin-top: 25px;
                margin-bottom: 10px;
            }
            .code-block {
                background: #f8f9fa;
                border: 1px solid #e9ecef;
                border-radius: 4px;
                padding: 15px;
                font-family: 'Courier New', monospace;
                font-size: 12px;
                margin: 15px 0;
                overflow-x: auto;
            }
            .highlight-box {
                background: #fff3cd;
                border-left: 4px solid #ffc107;
                padding: 15px;
                margin: 20px 0;
            }
            .highlight-box h4 {
                color: #856404;
                margin-top: 0;
                font-size: 14px;
            }
            .highlight-box p {
                color: #856404;
                font-size: 12px;
                margin-bottom: 0;
            }
            ul, ol {
                padding-left: 20px;
            }
            li {
                margin-bottom: 5px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 15px 0;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f8f9fa;
                font-weight: bold;
            }
            .toc {
                page-break-after: always;
            }
            .toc-item {
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
                padding: 5px 0;
                border-bottom: 1px dotted #ccc;
            }
        </style>
    </head>
    <body>
        <!-- Cover Page -->
        <div class="cover-page">
            <div class="logo">LOGO</div>
            <div class="title">Working with Functions</div>
            <div class="subtitle">Computer Science</div>
            <div class="subtitle">Class 12</div>
            <div class="cbse-label">According to CBSE 2024-25 Syllabus</div>
        </div>

        <!-- Table of Contents -->
        <div class="toc">
            <h1>Table of Contents</h1>
            <div class="toc-item"><span>1. Understanding Functions</span><span>3</span></div>
            <div class="toc-item"><span>2. Create a Function</span><span>4</span></div>
            <div class="toc-item"><span>3. Calling/Invoking/Using a Function</span><span>4</span></div>
            <div class="toc-item"><span>4. Arguments</span><span>5</span></div>
            <div class="toc-item"><span>5. Python Function Types</span><span>6</span></div>
            <div class="toc-item"><span>5.1. Built-in Functions</span><span>7</span></div>
            <div class="toc-item"><span>5.2. Functions defined in modules</span><span>8</span></div>
            <div class="toc-item"><span>5.3. User Defined Functions</span><span>9</span></div>
            <div class="toc-item"><span>6. Flow Of Execution In a Function Call</span><span>10</span></div>
            <div class="toc-item"><span>7. Arguments and Functions in Python</span><span>11</span></div>
            <div class="toc-item"><span>7.1. Positional Arguments</span><span>12</span></div>
            <div class="toc-item"><span>7.2. Default Arguments</span><span>13</span></div>
            <div class="toc-item"><span>7.3. Keyword Arguments</span><span>14</span></div>
            <div class="toc-item"><span>8. Returning values for functions</span><span>15</span></div>
            <div class="toc-item"><span>9. Scope of Variables in Python</span><span>17</span></div>
            <div class="toc-item"><span>10. Practice Questions</span><span>19</span></div>
        </div>

        <!-- Main Content -->
        <div class="content">
            <h1>Working with Functions</h1>
            
            <p>A function is essentially a mini-program that works with data and usually gives back a value.</p>
            
            <h2>1. Understanding Functions</h2>
            <p>Mathematical example:</p>
            <p>f(x) = 2x²</p>
            <p>For x=1 it will give result as 2 × 1² = 2</p>
            <p>f(1) = 2</p>

            <h3>Functionality:</h3>
            <ul>
                <li>It can take arguments (the values you provide), if necessary.</li>
                <li>It can carry out specific tasks (a set of instructions).</li>
                <li>It can return a result.</li>
            </ul>

            <h2>2. Create a Function</h2>
            <p>We use the def keyword in Python to define a function.</p>
            <div class="code-block">
def greet():
    print("Hello! Welcome to Class 11 Computer Science.")
            </div>
            <p>This is a function named greet().</p>

            <h2>3. Calling/Invoking/Using a Function</h2>
            <p><strong>Syntax:</strong></p>
            <div class="code-block">
Function_Name(Value_to_be_passed_to_arguments)
            </div>

            <h2>4. Arguments</h2>
            <p><strong>1. Passing literal as arguments in function call</strong></p>
            <div class="code-block">
Celsius_to_fahr(10)  # Literal
            </div>

            <p><strong>2. Passing variable as arguments in function call</strong></p>
            <div class="code-block">
Celsius_to_fahr(num)  # num is a variable
            </div>

            <p><strong>3. Taking input and passing the input as arguments</strong></p>
            <div class="code-block">
A = input("Enter a number")
Celsius_to_fahr(A)
            </div>

            <p><strong>4. Using function call inside another statements</strong></p>
            <div class="code-block">
print(Celsius_to_fahr(10))
            </div>

            <p><strong>5. Using function call inside expression</strong></p>
            <div class="code-block">
Double = 2 * Celsius_to_fahr(6)
            </div>

            <h2>5. Python Function Types</h2>
            <p>When it comes to Python, there are three main types of functions you should know about:</p>
            <ol>
                <li>Built-in functions: that come with Python right out of the box</li>
                <li>Functions defined in modules: that are defined in various modules</li>
                <li>User-defined functions: that you create yourself</li>
            </ol>

            <h2>5.1. Built-in Functions</h2>
            <p>Built-in functions in Python are ready-made tools that you can use anytime without creating them yourself. They come pre-installed with Python.</p>
            <p><strong>Examples:</strong></p>
            <ul>
                <li>len() helps you find out the length of something</li>
                <li>type() tells you what type of data you are working with</li>
                <li>input() allows you to get input from the user</li>
                <li>int() converts something into a number</li>
            </ul>

            <div class="highlight-box">
                <h4>Just a quick heads-up:</h4>
                <p>You do not need to install anything or write any special code to use these functions—they are ready to go as soon as you launch Python.</p>
            </div>

            <h2>5.2. Functions defined in modules</h2>
            <p>Some functions in Python are not available by default—they are stored inside special modules (think of them like toolboxes). To use these special tools (functions), you first need to import the module they belong to.</p>
            
            <p><strong>Example:</strong></p>
            <p>If you want to use the sin() function (used in trigonometry), it is inside the math module.</p>
            <div class="code-block">
import math
print(math.sin(45))
            </div>

            <h2>5.3. User Defined Functions</h2>
            <p>User-defined functions are the functions created by YOU (the programmer) to do a specific task.</p>
            <p><strong>Defining functions in Python:</strong></p>
            <div class="code-block">
def function_name(Parameters):
    Statements
    return
            </div>

            <div class="highlight-box">
                <h4>Common Mistakes to Avoid</h4>
                <p>
                    1. Forgetting the colon : after the function definition line<br>
                    2. Not indenting the code inside the function<br>
                    3. Calling a function before defining it<br>
                    4. def keyword is fully lower case
                </p>
            </div>

            <h2>6. Flow Of Execution In a Function Call</h2>
            <p>The flow of execution means the order in which Python runs each line of code. When a function is called, Python pauses the current code, jumps into the function, executes it, and then comes back to where it left off.</p>
            
            <div class="code-block">
def sum(x, y):
    result = x + y
    return result

total = sum(10, 5)
print(total)
            </div>

            <p><strong>Execution Steps:</strong></p>
            <ol>
                <li>Python starts reading the program from top to bottom</li>
                <li>It sees the function definition but does not run it yet</li>
                <li>When it reaches total = sum(10, 5), Python:
                    <ul>
                        <li>Pauses the current line</li>
                        <li>Jumps into the function with values x=10 and y=5</li>
                        <li>Executes the statements inside the function</li>
                        <li>Returns 15 back and stores it in total</li>
                    </ul>
                </li>
                <li>Then it continues to the next line and prints 15</li>
            </ol>

            <h2>7. Arguments and Functions in Python</h2>
            <h3>Understanding Parameters vs Arguments</h3>
            <ul>
                <li><strong>Parameter:</strong> the variable that receives a value when the function is called</li>
                <li><strong>Argument:</strong> the actual value passed to the function during a function call</li>
            </ul>

            <div class="code-block">
def calcSum(x, y):  # x and y are parameters
    s = x + y
    return s

a = int(input("Enter first number: "))
b = int(input("Enter second number: "))
z = calcSum(a, b)  # a and b are arguments
print("Sum:", z)
            </div>

            <h2>7.1. Positional (Required) Arguments</h2>
            <p>Arguments must be passed in the correct order and all are required.</p>
            <div class="code-block">
def check(a, b, c):
    # function body
    pass

# Valid calls:
check(x, y, z)    # 3 variables passed
check(2, x, y)    # literal + variables
check(2, 5, 7)    # all literals
            </div>

            <h2>7.2. Default Arguments</h2>
            <p>Parameters can have default values, making them optional in function calls.</p>
            <div class="code-block">
def interest(principal, time, rate=0.10):
    return principal * time * rate

# Valid calls:
interest(5400, 2)        # Uses default rate = 0.10
interest(6100, 3, 0.15)  # Overrides default rate
            </div>

            <h2>7.3. Keyword (Named) Arguments</h2>
            <p>Arguments can be passed by name, allowing you to change their order.</p>
            <div class="code-block">
def interest(principal, time, rate):
    return principal * time * rate

# Valid calls:
interest(principal=5400, time=2, rate=0.10)
interest(time=3, principal=6100, rate=0.15)
interest(rate=0.20, time=3, principal=6100)
            </div>

            <h2>8. Returning values for functions</h2>
            
            <h3>8.1. Functions That Return a Value (Non-Void Functions)</h3>
            <p>These functions calculate something and send the result back.</p>
            <div class="code-block">
def sum(x, y):
    s = x + y
    return s

result = sum(5, 3)
print("Result:", result)  # Output: Result: 8
            </div>

            <h3>8.2. Functions That Don't Return a Value (Void Functions)</h3>
            <p>These functions perform an action but don't return any result.</p>
            <div class="code-block">
def greet():
    print("Hello Python")

def quote():
    print("Goodness")
    return  # function ends here
            </div>

            <h3>8.3. Returning Multiple Values</h3>
            <p>Python allows you to return more than one value from a function.</p>
            <div class="code-block">
def calculate(x, y, z, a):
    return x * x, y * 2, z + 5, 5, a

res1, res2, res3, res4, res5 = calculate(2, 3, 4, 1)
print(res1, res2, res3, res4, res5)  # Output: 4 6 9 5 1
            </div>

            <h2>9. Scope of Variables in Python</h2>
            <p>The scope refers to the part of the program where a variable is recognized and accessible.</p>

            <h3>Types of Scope:</h3>
            <ol>
                <li><strong>Local Scope:</strong> Variables defined inside a function</li>
                <li><strong>Global Scope:</strong> Variables defined outside any function</li>
            </ol>

            <h3>Name Resolution (LEGB Rule)</h3>
            <p>Python follows this order to find variables: L > E > G > B</p>
            <ul>
                <li><strong>L:</strong> Local</li>
                <li><strong>E:</strong> Enclosing</li>
                <li><strong>G:</strong> Global</li>
                <li><strong>B:</strong> Built-in</li>
            </ul>

            <div class="code-block">
x = 95  # Global variable

def state():
    global x
    x += 15
    print("Inside function:", x)

print("Global before:", x)  # 95
state()                     # Inside function: 110
print("Global after:", x)   # 110
            </div>

            <h2>10. Practice Questions</h2>
            <ol>
                <li>Write a Python program to calculate the area of a rectangle. Take length and width as input from the user.</li>
                <li>Write a Python program to convert temperature from Celsius to Fahrenheit. The formula is: F = (C * 9/5) + 32</li>
                <li>Write a Python program to swap the values of two variables without using a temporary variable.</li>
                <li>Write a Python program to calculate the simple interest. The formula is: SI = (P * R * T) / 100</li>
                <li>Write a Python program to find the average of three numbers entered by the user.</li>
            </ol>

            <div class="highlight-box">
                <h4>Board Exam Important Questions</h4>
                <p>
                    • Differentiate between parameters and arguments<br>
                    • Explain the types of arguments in Python<br>
                    • What is the scope of variables?<br>
                    • Write a function to return multiple values<br>
                    • Explain the flow of execution in function calls
                </p>
            </div>
        </div>

        <div class="footer">
            © 2025 Smart Aspire Success | www.smartaspiresuccess.com
        </div>
    </body>
    </html>
    `

    // Return HTML content that can be converted to PDF by the browser
    return new NextResponse(htmlContent, {
      headers: {
        "Content-Type": "text/html",
        "Content-Disposition": 'inline; filename="Working-with-Functions-Notes.html"',
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
