import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function CSVImportPage() {
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
            <Link href="/informatics-practices" className="hover:text-[#1f888f]">
              Informatics Practices
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href="/informatics-practices/practical" className="hover:text-[#1f888f]">
              Practical Programs
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href="/informatics-practices/practical/class-11" className="hover:text-[#1f888f]">
              Class 11
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">CSV Import</span>
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
              <h1 className="text-xl font-bold mb-4 text-[#1f888f]">Data Import from CSV Files</h1>

              <div className="prose max-w-none text-sm">
                {/* AIM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">AIM</h2>
                  <p>
                    To write a Python program that imports data from a CSV file using Pandas and performs basic
                    analysis.
                  </p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Import the necessary libraries (pandas)</li>
                    <li>Read the CSV file using pandas.read_csv() function</li>
                    <li>Display the first few rows of the DataFrame using head() method</li>
                    <li>Display information about the DataFrame using info() method</li>
                    <li>Display statistical summary of the DataFrame using describe() method</li>
                    <li>Perform basic data analysis on the DataFrame</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Python program to import data from a CSV file using Pandas

# Import the necessary libraries
import pandas as pd

# Read the CSV file
# Assuming we have a file named 'student_data.csv' with student information
df = pd.read_csv('student_data.csv')

# Display the first 5 rows of the DataFrame
print("First 5 rows of the DataFrame:")
print(df.head())

# Display information about the DataFrame
print("\nDataFrame Information:")
print(df.info())

# Display statistical summary of the DataFrame
print("\nStatistical Summary:")
print(df.describe())

# Basic data analysis
print("\nNumber of students:", len(df))

# Calculate the average marks
if 'Marks' in df.columns:
    print("Average Marks:", df['Marks'].mean())
    print("Highest Marks:", df['Marks'].max())
    print("Lowest Marks:", df['Marks'].min())

# Count the number of students by gender
if 'Gender' in df.columns:
    print("\nNumber of students by gender:")
    print(df['Gender'].value_counts())

# Group students by class and calculate average marks
if 'Class' in df.columns and 'Marks' in df.columns:
    print("\nAverage marks by class:")
    print(df.groupby('Class')['Marks'].mean())`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>First 5 rows of the DataFrame:</p>
                    <pre>
                      {`   ID       Name  Age Gender  Class  Marks
0   1      Rahul   16      M     11     85
1   2      Priya   15      F     10     92
2   3      Amit    16      M     11     78
3   4      Neha    15      F     10     88
4   5  Rajesh K    17      M     12     95`}
                    </pre>
                    <p>&nbsp;</p>
                    <p>DataFrame Information:</p>
                    <pre>
                      {`<class 'pandas.core.frame.DataFrame'>
RangeIndex: 10 entries, 0 to 9
Data columns (total 6 columns):
 #   Column  Non-Null Count  Dtype 
---  ------  --------------  ----- 
 0   ID      10 non-null     int64 
 1   Name    10 non-null     object
 2   Age     10 non-null     int64 
 3   Gender  10 non-null     object
 4   Class   10 non-null     int64 
 5   Marks   10 non-null     int64 
dtypes: int64(4), object(2)
memory usage: 608.0+ bytes
None`}
                    </pre>
                    <p>&nbsp;</p>
                    <p>Statistical Summary:</p>
                    <pre>
                      {`              ID        Age      Class      Marks
count  10.000000  10.000000  10.000000  10.000000
mean    5.500000  15.800000  11.000000  86.500000
std     3.027650   0.788811   0.816497   6.687823
min     1.000000  15.000000  10.000000  75.000000
25%     3.250000  15.000000  10.250000  82.250000
50%     5.500000  16.000000  11.000000  86.500000
75%     7.750000  16.000000  11.750000  91.500000
max    10.000000  17.000000  12.000000  95.000000`}
                    </pre>
                    <p>&nbsp;</p>
                    <p>Number of students: 10</p>
                    <p>Average Marks: 86.5</p>
                    <p>Highest Marks: 95</p>
                    <p>Lowest Marks: 75</p>
                    <p>&nbsp;</p>
                    <p>Number of students by gender:</p>
                    <pre>
                      {`M    6
F    4
Name: Gender, dtype: int64`}
                    </pre>
                    <p>&nbsp;</p>
                    <p>Average marks by class:</p>
                    <pre>
                      {`Class
10    87.75
11    82.33
12    93.00
Name: Marks, dtype: float64`}
                    </pre>
                  </div>
                </div>

                {/* CONCLUSION */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">CONCLUSION</h2>
                  <p>
                    In this program, we learned how to import data from a CSV file using the Pandas library and perform
                    basic data analysis:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>We used the pandas.read_csv() function to read data from a CSV file into a DataFrame</li>
                    <li>We displayed the first few rows of the DataFrame using the head() method</li>
                    <li>We obtained information about the DataFrame using the info() method</li>
                    <li>We generated a statistical summary of the numerical columns using the describe() method</li>
                    <li>We performed basic data analysis, including calculating averages and grouping data</li>
                  </ol>
                  <p className="mt-2">
                    This program demonstrates the power of Pandas for data manipulation and analysis. Pandas provides a
                    wide range of functions and methods to work with structured data, making it an essential tool for
                    data analysis in Python.
                  </p>
                </div>

                {/* VIVA QUESTIONS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">VIVA QUESTIONS</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      <p className="font-medium">What is Pandas and why is it used?</p>
                      <p className="text-gray-600">
                        Pandas is a Python library used for data manipulation and analysis. It provides data structures
                        like DataFrame and Series that make it easy to work with structured data.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is a DataFrame in Pandas?</p>
                      <p className="text-gray-600">
                        A DataFrame is a two-dimensional, size-mutable, and potentially heterogeneous tabular data
                        structure with labeled axes (rows and columns). It's similar to a spreadsheet or SQL table.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can you handle missing values in a DataFrame?</p>
                      <p className="text-gray-600">
                        Missing values can be handled using methods like dropna() to remove rows or columns with missing
                        values, or fillna() to fill missing values with a specific value or method (like mean, median,
                        etc.).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What is the difference between loc and iloc in Pandas?</p>
                      <p className="text-gray-600">
                        loc is label-based indexing, which means you use the actual row and column labels to select
                        data. iloc is integer-based indexing, where you use integer positions to select data.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you filter rows in a DataFrame based on a condition?</p>
                      <p className="text-gray-600">
                        You can filter rows using boolean indexing. For example, df[df['Marks'] &gt; 80] would return
                        all rows where the 'Marks' column has values greater than 80.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/informatics-practices/practical/class-11/data-filtering"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: Data Filtering and Selection
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
