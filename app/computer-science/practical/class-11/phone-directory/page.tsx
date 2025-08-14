import Link from "next/link"
import { ChevronRight, Download } from 'lucide-react'
import TOC from "./toc"
import Related from "./related"

export default function PhoneDirectoryPage() {
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
            <span className="text-[#1f888f] font-medium">Friends Phone Directory</span>
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
                <h1 className="text-xl font-bold text-[#1f888f]">Friends Phone Directory Dictionary Operations</h1>
                <button className="flex items-center gap-1 bg-[#b80877] hover:bg-[#b80877]/90 text-white px-3 py-1.5 rounded-md text-sm">
                  <Download size={16} />
                  Download PDF (₹29)
                </button>
              </div>

              <div className="prose max-w-none text-sm">
                {/* AIM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">AIM</h2>
                  <p>To write a program to input friends' names and their phone numbers, store them in a dictionary as key-value pairs, and perform various operations like display, add, delete, modify, search, and sort.</p>
                </div>

                {/* ALGORITHM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALGORITHM</h2>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Start</li>
                    <li>Input the number of friends and create an empty dictionary</li>
                    <li>For each friend, input name and phone number and store in dictionary</li>
                    <li>Display the initial dictionary</li>
                    <li>Start a menu-driven loop with 7 options</li>
                    <li>Based on user choice, perform the following operations:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Display all friends and their phone numbers</li>
                        <li>Add a new friend to the dictionary</li>
                        <li>Delete a friend using pop() method</li>
                        <li>Modify phone number of an existing friend</li>
                        <li>Search for a friend in the dictionary</li>
                        <li>Display dictionary in sorted order of names</li>
                        <li>Exit the program</li>
                      </ul>
                    </li>
                    <li>Repeat until user chooses to exit</li>
                    <li>Stop</li>
                  </ol>
                </div>

                {/* PROGRAM */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">PROGRAM</h2>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Friends Phone Directory Dictionary Operations

n = int(input("How many friends?"))
fd = {}

for i in range(n):
    print("Enter details of Friend:", (i+1))
    name = input("Name:")
    ph = int(input("Phone:"))
    fd[name] = ph

print("Friends dictionary is", fd)

ch = 0
while ch != 7:
    print("\\t MENU")
    print("1. Display all Friends")
    print("2. Add a new Friend")
    print("3. Delete a Friend")
    print("4. Modify a Phone Number")
    print("5. Search for a Friend")
    print("6. Sort the Names")
    print("7. Exit")
    
    ch = int(input("Enter your choice(1 to 7):"))
    
    if ch == 1:
        print(fd)
    elif ch == 2:
        print("Enter Details of New Friend:")
        name = input("Name")
        ph = int(input("Phone:"))
        fd[name] = ph
    elif ch == 3:
        nm = input("Friend Name to be deleted:")
        res = fd.pop(nm, -1)
        if res != -1:
            print(res, "Deleted")
        else:
            print("No Such friend")
    elif ch == 4:
        name = input("Friend Name:")
        ph = int(input("Changed Phone:"))
        fd[name] = ph
    elif ch == 5:
        name = input("Friend Name:")
        if name in fd:
            print(name, "Exists in the dictionary.")
        else:
            print(name, "does not exist in the dictionary..")
    elif ch == 6:
        lst = sorted(fd)
        print("{", end='')
        for a in lst:
            print(a, ":", fd[a], end='')
        print("}")
    elif ch == 7:
        print("Exited successfully..")
        break
    else:
        print("Valid choices are 1 to 7")`}
                      </code>
                    </pre>
                  </div>
                </div>

                {/* OUTPUT */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">OUTPUT</h2>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>How many friends?3</p>
                    <p>Enter details of Friend: 1</p>
                    <p>Name:Alice</p>
                    <p>Phone:9876543210</p>
                    <p>Enter details of Friend: 2</p>
                    <p>Name:Bob</p>
                    <p>Phone:8765432109</p>
                    <p>Enter details of Friend: 3</p>
                    <p>Name:Charlie</p>
                    <p>Phone:7654321098</p>
                    <p>{'Friends dictionary is {"Alice": 9876543210, "Bob": 8765432109, "Charlie": 7654321098}'}</p>
                    <br />
                    <p>	 MENU</p>
                    <p>1. Display all Friends</p>
                    <p>2. Add a new Friend</p>
                    <p>3. Delete a Friend</p>
                    <p>4. Modify a Phone Number</p>
                    <p>5. Search for a Friend</p>
                    <p>6. Sort the Names</p>
                    <p>7. Exit</p>
                    <p>Enter your choice(1 to 7):1</p>
                    <p>{'{"Alice": 9876543210, "Bob": 8765432109, "Charlie": 7654321098}'}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-sm">
                    <p>Enter your choice(1 to 7):2</p>
                    <p>Enter Details of New Friend:</p>
                    <p>NameDiana</p>
                    <p>Phone:6543210987</p>
                    <br />
                    <p>Enter your choice(1 to 7):6</p>
                    <p>{'{"Alice": 9876543210 "Bob": 8765432109 "Charlie": 7654321098 "Diana": 6543210987}'}</p>
                  </div>
                </div>

                {/* ALTERNATIVE METHODS */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold mt-6 mb-3 text-[#1f888f]">ALTERNATIVE METHODS</h2>
                  
                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">Method 2: Using Functions</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`def display_friends(directory):
    if directory:
        print("\\nFriends Directory:")
        for name, phone in directory.items():
            print(f"{name}: {phone}")
    else:
        print("No friends in directory!")

def add_friend(directory):
    name = input("Enter friend's name: ")
    phone = input("Enter phone number: ")
    directory[name] = phone
    print(f"{name} added successfully!")

def delete_friend(directory):
    name = input("Enter friend's name to delete: ")
    if name in directory:
        del directory[name]
        print(f"{name} deleted successfully!")
    else:
        print(f"{name} not found in directory!")

def modify_phone(directory):
    name = input("Enter friend's name: ")
    if name in directory:
        new_phone = input("Enter new phone number: ")
        directory[name] = new_phone
        print(f"{name}'s phone number updated!")
    else:
        print(f"{name} not found in directory!")

def search_friend(directory):
    name = input("Enter friend's name to search: ")
    if name in directory:
        print(f"{name}: {directory[name]}")
    else:
        print(f"{name} not found in directory!")

def sort_friends(directory):
    if directory:
        sorted_names = sorted(directory.keys())
        print("\\nSorted Directory:")
        for name in sorted_names:
            print(f"{name}: {directory[name]}")
    else:
        print("No friends to sort!")

def main():
    friends = {}
    
    # Initial input
    n = int(input("How many friends? "))
    for i in range(n):
        name = input(f"Enter name of friend {i+1}: ")
        phone = input(f"Enter phone number: ")
        friends[name] = phone
    
    while True:
        print("\\n" + "="*30)
        print("FRIENDS DIRECTORY MENU")
        print("="*30)
        print("1. Display all friends")
        print("2. Add new friend")
        print("3. Delete friend")
        print("4. Modify phone number")
        print("5. Search friend")
        print("6. Sort friends")
        print("7. Exit")
        
        choice = input("Enter your choice (1-7): ")
        
        if choice == '1':
            display_friends(friends)
        elif choice == '2':
            add_friend(friends)
        elif choice == '3':
            delete_friend(friends)
        elif choice == '4':
            modify_phone(friends)
        elif choice == '5':
            search_friend(friends)
        elif choice == '6':
            sort_friends(friends)
        elif choice == '7':
            print("Thank you for using Friends Directory!")
            break
        else:
            print("Invalid choice! Please try again.")

if __name__ == "__main__":
    main()`}
                      </code>
                    </pre>
                  </div>

                  <h3 className="text-md font-semibold mt-4 mb-2 text-[#1f888f]">Method 3: Using Dictionary Methods</h3>
                  <div className="bg-gray-800 text-white p-3 rounded-md mb-4 overflow-x-auto">
                    <pre>
                      <code>
                        {`# Enhanced version using dictionary methods

def create_directory():
    friends = {}
    n = int(input("How many friends? "))
    
    for i in range(n):
        print(f"\\nEnter details for friend {i+1}:")
        name = input("Name: ").strip().title()
        
        while True:
            try:
                phone = input("Phone: ").strip()
                # Basic phone validation
                if len(phone) >= 10 and phone.isdigit():
                    friends[name] = phone
                    break
                else:
                    print("Please enter a valid 10-digit phone number!")
            except ValueError:
                print("Invalid input! Please try again.")
    
    return friends

def display_all(friends):
    if not friends:
        print("\\nNo friends in directory!")
        return
    
    print("\\n" + "="*40)
    print("FRIENDS DIRECTORY")
    print("="*40)
    for name, phone in friends.items():
        print(f"{name:<20} : {phone}")
    print("="*40)

def add_new_friend(friends):
    name = input("\\nEnter friend's name: ").strip().title()
    
    if name in friends:
        print(f"{name} already exists! Use modify option to change phone number.")
        return
    
    phone = input("Enter phone number: ").strip()
    friends[name] = phone
    print(f"\\n{name} added successfully!")

def remove_friend(friends):
    if not friends:
        print("\\nNo friends to delete!")
        return
    
    name = input("\\nEnter friend's name to delete: ").strip().title()
    removed_phone = friends.pop(name, None)
    
    if removed_phone:
        print(f"\\n{name} (Phone: {removed_phone}) deleted successfully!")
    else:
        print(f"\\n{name} not found in directory!")

def update_phone(friends):
    if not friends:
        print("\\nNo friends to modify!")
        return
    
    name = input("\\nEnter friend's name: ").strip().title()
    
    if name in friends:
        old_phone = friends[name]
        new_phone = input(f"Current phone: {old_phone}\\nEnter new phone: ").strip()
        friends[name] = new_phone
        print(f"\\n{name}'s phone updated from {old_phone} to {new_phone}")
    else:
        print(f"\\n{name} not found in directory!")

def find_friend(friends):
    if not friends:
        print("\\nNo friends to search!")
        return
    
    name = input("\\nEnter friend's name to search: ").strip().title()
    phone = friends.get(name)
    
    if phone:
        print(f"\\nFound: {name} - {phone}")
    else:
        print(f"\\n{name} not found in directory!")

def show_sorted(friends):
    if not friends:
        print("\\nNo friends to sort!")
        return
    
    print("\\n" + "="*40)
    print("SORTED FRIENDS DIRECTORY")
    print("="*40)
    
    for name in sorted(friends.keys()):
        print(f"{name:<20} : {friends[name]}")
    print("="*40)

def main():
    print("FRIENDS PHONE DIRECTORY")
    print("="*30)
    
    friends = create_directory()
    
    menu_options = {
        '1': ("Display all friends", display_all),
        '2': ("Add new friend", add_new_friend),
        '3': ("Delete friend", remove_friend),
        '4': ("Modify phone number", update_phone),
        '5': ("Search friend", find_friend),
        '6': ("Show sorted directory", show_sorted),
        '7': ("Exit", None)
    }
    
    while True:
        print("\\n" + "="*30)
        print("MENU OPTIONS")
        print("="*30)
        for key, (description, _) in menu_options.items():
            print(f"{key}. {description}")
        print("="*30)
        
        choice = input("Enter your choice (1-7): ").strip()
        
        if choice == '7':
            print("\\nThank you for using Friends Directory!")
            print("Goodbye!")
            break
        elif choice in menu_options:
            _, function = menu_options[choice]
            if function:
                function(friends)
        else:
            print("\\nInvalid choice! Please enter a number between 1-7.")

if __name__ == "__main__":
    main()`}
                      </code>
                    </pre>
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
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <p className="font-medium">What is the advantage of using a dictionary over a list for storing phone directory data?</p>
                      <p className="text-gray-600">
                        Dictionaries provide O(1) average time complexity for search, insert, and delete operations using keys, while lists require O(n) time for searching. Dictionaries also provide meaningful key-value associations.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What does the pop() method return when the key is not found?</p>
                      <p className="text-gray-600">
                        The pop() method returns the default value (second argument) if the key is not found. In our program, pop(nm, -1) returns -1 when the friend's name is not found, allowing us to handle the error gracefully.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How does the sorted() function work with dictionaries?</p>
                      <p className="text-gray-600">
                        sorted(fd) returns a sorted list of dictionary keys. To access the corresponding values, we iterate through the sorted keys and use them to retrieve values from the original dictionary.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What happens if we try to modify a phone number for a non-existent friend?</p>
                      <p className="text-gray-600">
                        The program will create a new key-value pair in the dictionary. To prevent this, we should check if the key exists using 'if name in fd:' before modification.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can we handle duplicate phone numbers in this program?</p>
                      <p className="text-gray-600">
                        We can check if the phone number already exists by iterating through dictionary values or maintaining a reverse dictionary. We could also use validation to prevent duplicate entries.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">What are the limitations of storing phone numbers as integers?</p>
                      <p className="text-gray-600">
                        Storing as integers removes leading zeros, doesn't support international formats with '+' or '-', and may cause overflow for very large numbers. Strings are better for phone number storage.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How would you implement case-insensitive name searching?</p>
                      <p className="text-gray-600">
                        Convert both the search key and dictionary keys to lowercase using .lower() method, or store all names in a consistent case (title case) when adding them to the dictionary.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">How can this program be extended to store additional information about friends?</p>
                      <p className="text-gray-600">
                        Instead of storing phone numbers as values, we can store dictionaries or lists containing multiple pieces of information like email, address, birthday, etc. For example: {'friends[name] = {"phone": ph, "email": email}'}.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="/computer-science/practical/class-11/list-swap"
                    className="bg-[#1f888f] hover:bg-[#1f888f]/90 text-white px-6 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                  >
                    Next Program: List Element Swapping
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
