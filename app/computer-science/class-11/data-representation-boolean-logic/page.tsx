// app/computer-science/class-11/data-representation-boolean-logic/page.tsx
import React from "react";

const DataRepresentationBooleanLogic = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Data Representation & Boolean Logic</h1>
      <p>
        This page explains Python code examples related to data representation
        and boolean logic.
      </p>

      <h2>Example: Fibonacci Series in Python</h2>
      <pre
        style={{
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        <code>
          {`def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# Print first 10 Fibonacci numbers
for i in range(10):
    print(fibonacci(i), end=" ")
# Output: 0 1 1 2 3 5 8 13 21 34`}
        </code>
      </pre>

      <h2>Boolean Logic Example</h2>
      <pre
        style={{
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        <code>
          {`x = True
y = False

print(x and y)  # False
print(x or y)   # True
print(not x)    # False`}
        </code>
      </pre>
    </div>
  );
};

export default DataRepresentationBooleanLogic;
