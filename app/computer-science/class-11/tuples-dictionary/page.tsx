import Link from "next/link"
import { ChevronRight } from "lucide-react"
import TOC from "./toc"
import Related from "./related"

export default function TuplesDictionaryPage() {
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
            <span className="text-[#1f888f] font-medium">Tuples and Dictionary</span>
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
              <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Chapter 8: Tuples and Dictionary</h1>

              <div className="prose max-w-none text-sm">
                {/* Introduction to Tuples */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Introduction to Tuples</h2>

                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-blue-800 mb-2">Key Characteristics of Tuples</h3>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Enclosed within parentheses ( )</li>
                      <li>• Tuple is immutable (cannot be changed after creation)</li>
                      <li>• Similar to lists but immutable</li>
                      <li>• Can be heterogeneous (different data types)</li>
                    </ul>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Syntax</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>{"<Tuple_name/variable_name> = (val1, val2, val3, ..., valn)"}</p>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Examples of Different Tuple Types</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`# Basic Tuple
t1 = ('Apple', 'Mango', 'Orange')
t1 = (10, 20, 30)

# Empty Tuple
t1 = ()

# Heterogeneous Tuple
t1 = ('Apple', 100, 23.25, 'Python')

# Nested Tuple
t1 = ((1, 2, 3), (10, 20, 30, 40, 50))

# List within Tuple
t1 = ([1, 2, 3], [4, 5, 6])

# Tuple and list inside a tuple - nested tuple
t1 = ((0, 1, 2, 3), ['a', 'b', 'python'])

# Parentheses are not mandatory
t1 = 10, 20, 30`}</code>
                    </pre>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-yellow-800 mb-2">Important Notes</h3>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• List is mutable but tuple is immutable</li>
                      <li>• Iterating through a tuple is faster compared to list</li>
                      <li>• If data doesn't need to be changed, use tuple to prevent accidental modification</li>
                      <li>• Tuples are immutable, but member objects may be mutable</li>
                    </ul>
                  </div>
                </section>

                {/* Dictionary Section */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Dictionary in Python</h2>

                  <div className="bg-green-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-green-800 mb-2">What is a Dictionary?</h3>
                    <ul className="text-green-700 space-y-1">
                      <li>• A collection in Python which is known as Dictionary</li>
                      <li>
                        • Python dictionary is an unordered collection of items where each item is a key-value pair
                      </li>
                      <li>
                        • We can also refer to a dictionary as a mapping between a set of keys/indices and a set of
                        values
                      </li>
                      <li>• Enclosed in curly braces {}</li>
                    </ul>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Syntax</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>{"{'key': 'values'}"}</p>
                    <p>{"{'key1': 'values1', 'key2': 'values2'}"}</p>
                    <p>One item: "Key": "Value"</p>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Important Features of Dictionary</h3>
                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <ol className="text-blue-700 space-y-2">
                      <li>
                        1. Each key maps to a value. The association of a key and value is called a key-value pair.
                      </li>
                      <li>
                        2. Each key is separated from its value by a colon (:), the items are separated by commas, and
                        the entire dictionary is enclosed in curly braces.
                      </li>
                      <li>3. Keys are unique within a dictionary while values may not be.</li>
                      <li>
                        4. The values of a dictionary can be of any type, but the keys must be of an immutable data type
                        such as strings, numbers, or tuple.
                      </li>
                      <li>5. Dictionary is mutable. We can add new items or change the value of existing items.</li>
                    </ol>
                  </div>
                </section>

                {/* Creating a Dictionary */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Creating a Dictionary</h2>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Syntax</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>{"<Dic_name> = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}"}</p>
                  </div>

                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`# Basic dictionary creation
>>> a = {"one": 10, "two": 20}
>>> a
{'one': 10, 'two': 20}

# Duplicate keys - only last value is kept
>>> a = {"one": 10, "one": 20}
>>> a
{'one': 20}

# Mixed data types
>>> a = {"one": 10, "two": 20, 1: "three", 10: 345, 3: 34.25}
>>> a
{'one': 10, 'two': 20, 1: 'three', 10: 345, 3: 34.25}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Empty Dictionary</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`# Method 1: Using curly braces
>>> dic = {}
>>> dic
{}
>>> type(dic)
<class 'dict'>

# Method 2: Using dict() function
>>> a = dict()
>>> a
{}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Accessing Dictionary Elements</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> a = {"one": 10, "two": 20, 1: "three", 10: 345, 3: 34.25}

# Accessing by key
>>> a["one"]
10
>>> a[3]
34.25

# Error examples
>>> a[0]  # KeyError: 0
>>> a["34"]  # KeyError: '34'
>>> a[one]  # NameError: name 'one' is not defined`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">
                    Creating and Adding to Empty Dictionary
                  </h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> a = {}
>>> a[1] = "ONE"
>>> a
{1: 'ONE'}
>>> a[2] = "TWO"
>>> a
{1: 'ONE', 2: 'TWO'}
>>> a[3] = 30
>>> a
{1: 'ONE', 2: 'TWO', 3: 30}`}</code>
                    </pre>
                  </div>
                </section>

                {/* Traversing a Dictionary */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Traversing a Dictionary</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`dic = {1: "one", 2: 20, 3: "three"}
for i in dic:
    print(i, ":", dic[i])

# Output:
# 1 : one
# 2 : 20
# 3 : three`}</code>
                    </pre>
                  </div>
                </section>

                {/* Appending Values */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Appending Values to a Dictionary</h2>
                  <p className="mb-3">
                    We can add new elements to the existing dictionary, extend it with single pair of values or join two
                    dictionaries into one.
                  </p>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Syntax</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Dictionary_Name[Key] = values</p>
                  </div>

                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {'mon': "MONDAY", 'tue': "TUESDAY", 'wed': "WEDNESDAY"}
>>> d1['thu'] = "THURSDAY"
>>> d1
{'mon': 'MONDAY', 'tue': 'TUESDAY', 'wed': 'WEDNESDAY', 'thu': 'THURSDAY'}
>>> d1['fri'] = "FRIDAY"
>>> d1
{'mon': 'MONDAY', 'tue': 'TUESDAY', 'wed': 'WEDNESDAY', 'thu': 'THURSDAY', 'fri': 'FRIDAY'}`}</code>
                    </pre>
                  </div>
                </section>

                {/* Updating Elements */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Updating Elements in a Dictionary</h2>
                  <p className="mb-3">
                    You can update a dictionary by modifying existing key-value pairs or by merging another dictionary
                    with an existing one.
                  </p>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Method 1: Direct Assignment</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Dictionary_Name['key'] = 'Values'</p>
                  </div>

                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d2 = {'Teena': 18, 'Riya': 12, 'Alya': 22}
>>> d2
{'Teena': 18, 'Riya': 12, 'Alya': 22}
>>> d2['Alya'] = 10
>>> d2
{'Teena': 18, 'Riya': 12, 'Alya': 10}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">Method 2: Using update() Method</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {1: "one", 2: "two"}
>>> d2.update(d1)
>>> d2
{'Teena': 18, 'Riya': 12, 'Alya': 10, 1: 'one', 2: 'two'}

>>> d3 = {100: "String"}
>>> d2.update(d3)
>>> d2
{'Teena': 18, 'Riya': 12, 'Alya': 10, 1: 'one', 2: 'two', 100: 'String'}`}</code>
                    </pre>
                  </div>
                </section>

                {/* Removing Items */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">Removing an Item from Dictionary</h2>
                  <p className="mb-3">
                    We can remove an item from the existing dictionary by using del command or using pop() method.
                  </p>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">1. Using del Command</h3>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>del dicname[key]</p>
                  </div>

                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {1: 100, 2: 200, 3: "three", 23.34: [1, 2, 3]}
>>> del d1[23.34]
>>> d1
{1: 100, 2: 200, 3: 'three'}
>>> del d1[2]
>>> d1
{1: 100, 3: 'three'}

# Error example
>>> del d1[100]  # KeyError: 100`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">2. Using pop() Method</h3>
                  <p className="mb-3">
                    Pop() method will not only delete the item from the dictionary but also returns the deleted value.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>dictname.pop(key)</p>
                  </div>

                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {1: 100, 3: 'three'}
>>> d1.pop(1)
100
>>> d1
{3: 'three'}`}</code>
                    </pre>
                  </div>
                </section>

                {/* Membership Operators */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">'in' and 'not in' Membership Operators</h2>
                  <p className="mb-3">
                    The "in" operator checks whether a particular key is there in the dictionary. It returns true if the
                    key appears in the dictionary, otherwise returns false.
                  </p>

                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {1: 100, 2: 200, 3: "three", 23.34: [1, 2, 3]}
>>> d1
{1: 100, 2: 200, 3: 'three', 23.34: [1, 2, 3]}

# Checking for keys (not values)
>>> 1 in d1
True
>>> 200 in d1  # 200 is a value, not a key
False
>>> "three" in d1  # "three" is a value, not a key
False
>>> 23.34 in d1
True
>>> 1 not in d1
False`}</code>
                    </pre>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-md mb-4">
                    <h3 className="font-bold text-yellow-800 mb-2">Important Note</h3>
                    <p className="text-yellow-700">The 'in' operator checks for keys in the dictionary, not values.</p>
                  </div>
                </section>

                {/* Common Dictionary Functions and Methods */}
                <section className="mb-8">
                  <h2 className="text-xl font-bold mt-6 mb-4 text-[#1f888f]">
                    Common Dictionary Functions and Methods
                  </h2>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">1. len() - Count the Elements</h3>
                  <p className="mb-3">This method returns number of key-value pairs in the given dictionary.</p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>len(dictionary_name)</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {1: 100, 2: 200, 3: "three", 23.34: [1, 2, 3]}
>>> len(d1)
4`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">2. clear()</h3>
                  <p className="mb-3">It removes all items from the particular dictionary.</p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>d1.clear()</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {1: 100, 2: 200, 3: 'three', 23.34: [1, 2, 3]}
>>> d1.clear()
>>> d1
{}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">3. get()</h3>
                  <p className="mb-3">
                    The get method returns a value for the given key. If key is not available then returns default value
                    None.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>d1.get(key, default=None)</p>
                    <p>Key: This is the key to be searched in the dictionary.</p>
                    <p>Default: This is a value to be returned in case the key does not exist.</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {'sun': 'SUNDAY', 'mon': 'MONDAY', 'tue': 'TUESDAY'}
>>> d1.get('sun')
'SUNDAY'
>>> d1.get('fri')  # Returns None
>>> d1.get('fri', 'never')
'never'
>>> d1.get('mon', 'never')
'MONDAY'
>>> d1.get('fri', None)`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">4. items()</h3>
                  <p className="mb-3">
                    It returns the content of the dictionary as a list of tuples having key-value pairs.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>d1.items()</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {'sun': 'SUNDAY', 'mon': 'MONDAY', 'tue': 'TUESDAY'}
>>> d1.items()
dict_items([('sun', 'SUNDAY'), ('mon', 'MONDAY'), ('tue', 'TUESDAY')])`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">5. keys()</h3>
                  <p className="mb-3">It returns a list of the key values in a dictionary.</p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>d1.keys()</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {'sun': 'SUNDAY', 'mon': 'MONDAY', 'tue': 'TUESDAY'}
>>> d1.keys()
dict_keys(['sun', 'mon', 'tue'])`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">6. values()</h3>
                  <p className="mb-3">It returns a list of values from key-value pairs in a dictionary.</p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>d1.values()</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {'sun': 'SUNDAY', 'mon': 'MONDAY', 'tue': 'TUESDAY'}
>>> d1.values()
dict_values(['SUNDAY', 'MONDAY', 'TUESDAY'])`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">7. fromkeys()</h3>
                  <p className="mb-3">
                    This function is used to create a dictionary from a collection of keys (tuple/list).
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>dict.fromkeys(keys, value)</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> keys1 = [1, 2, 3]; values1 = 1000
>>> d1 = dict.fromkeys(keys1, values1)
>>> d1
{1: 1000, 2: 1000, 3: 1000}

>>> keys2 = [1, 2, 3]; values2 = "Undefined"
>>> d1 = dict.fromkeys(keys2, values2)
>>> d1
{1: 'Undefined', 2: 'Undefined', 3: 'Undefined'}

>>> keys2 = [1, 2, 3]
>>> d1 = dict.fromkeys(keys2)
>>> d1
{1: None, 2: None, 3: None}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">8. copy()</h3>
                  <p className="mb-3">This method creates a copy of a dictionary.</p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>d1.copy()</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {1: None, 2: 2900, 3: None}
>>> d2 = d1.copy()
>>> d2
{1: None, 2: 2900, 3: None}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">9. popitem()</h3>
                  <p className="mb-3">
                    This method removes the last item from the dictionary and returns this deleted item.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>d2.popitem()</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d2 = {1: None, 2: 2900, 3: None}
>>> d2.popitem()
(3, None)
>>> d2
{1: None, 2: 2900}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">10. setdefault()</h3>
                  <p className="mb-3">
                    This method returns the value of the item with the specified key. If the key does not exist, it
                    inserts the key with the specified value.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>{"<Value> = <Dict>.setdefault(<key>, <default_value>)"}</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <h4 className="font-bold text-blue-800 mb-2">The setdefault returns:</h4>
                    <ul className="text-blue-700 space-y-1">
                      <li>1. Value of the key, if key is in the dictionary</li>
                      <li>2. None, if key is not in the dictionary and default_value is not specified</li>
                      <li>3. Default_value, if key is not in the dictionary and default value is specified</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d = {'Name': "Athishta", "Gender": "Female"}
>>> a = d.setdefault('Name', "Name not available")
>>> a
'Athishta'
>>> a = d.setdefault('Gender', "Gender not available")
>>> a
'Female'
>>> a = d.setdefault('Age', "Age not available")
>>> a
'Age not available'`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">11. max() and min()</h3>
                  <p className="mb-3">
                    max() returns key having maximum value. On the contrary, min() returns key having minimum value.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>max(d1), min(d1)</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {"a": 100, "b": 50, "c": 85, "d": 65}
>>> max(d1)  # Maximum key alphabetically
'd'
>>> min(d1)  # Minimum key alphabetically
'a'
>>> max(d1.values())  # Maximum value
100
>>> min(d1.values())  # Minimum value
50
>>> max(d1.items())
('d', 65)
>>> min(d1.items())
('a', 100)`}</code>
                    </pre>
                  </div>

                  <h3 className="text-lg font-bold mt-4 mb-3 text-[#1f888f]">12. sorted()</h3>
                  <p className="mb-3">This method sorts the elements of a dictionary by its key or values.</p>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>sorted(d1)</p>
                  </div>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>{`>>> d1 = {"a": 100, "b": 50, "c": 85, "d": 65}
>>> a = sorted(d1)  # Sort by keys
>>> a
['a', 'b', 'c', 'd']

>>> d = {"a": 10, "b": 20, "d": 90, "c": 100}
>>> x = sorted(d)
>>> x
['a', 'b', 'c', 'd']

>>> y = sorted(d.values())  # Sort by values
>>> y
[10, 20, 90, 100]

>>> z = sorted(d.items())  # Sort by key-value pairs
>>> z
[('a', 10), ('b', 20), ('c', 100), ('d', 90)]`}</code>
                    </pre>
                  </div>
                </section>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/class-11/introduction-to-python-modules"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Chapter: Introduction to Python Modules
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
