import NotesViewer from "@/components/notes-viewer"

export default function PythonFundamentalsNotesPage() {
  const previewContent = (
    <>
      <h2 className="text-xl font-bold mb-4">Python Fundamentals</h2>

      <p className="mb-4">
        Python is a high-level, interpreted programming language known for its readability and simplicity. It was
        created by Guido van Rossum and first released in 1991.
      </p>

      <h3 className="text-lg font-bold mt-6 mb-3">Key Features of Python</h3>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Easy to learn and use</li>
        <li>Interpreted language</li>
        <li>Object-oriented programming support</li>
        <li>Extensive standard library</li>
        <li>Dynamic typing</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
        <h4 className="font-bold text-yellow-800">Important Note</h4>
        <p className="text-yellow-800">
          This is just a preview of the notes. The complete PDF includes detailed explanations, examples, practice
          questions, and board exam tips.
        </p>
      </div>

      <h3 className="text-lg font-bold mt-6 mb-3">Sample Code</h3>
      <div className="bg-gray-800 text-white p-4 rounded-md mb-6 overflow-x-auto">
        <pre>
          <code>
            # This is a simple Python program print("Hello, World!") # Variables and data types name = "Student" #
            String age = 16 # Integer height = 5.8 # Float is_student = True # Boolean # Output with formatting
            print(f"Name: {name}, Age: {age}, Height: {height}") # Conditional statement if age >= 16: print("You can
            apply for a learner's driving license") else: print("You cannot apply for a driving license yet")
          </code>
        </pre>
      </div>

      <p className="text-gray-500 italic mt-8">Download the complete notes to access all content including:</p>
      <ul className="list-disc pl-6 space-y-1 text-gray-500 italic">
        <li>Detailed explanations of all concepts</li>
        <li>Step-by-step examples with outputs</li>
        <li>Practice questions with solutions</li>
        <li>Board exam important questions</li>
        <li>Marking scheme tips</li>
      </ul>
    </>
  )

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <NotesViewer
          title="Python Fundamentals"
          subject="Computer Science"
          className="11"
          price={49}
          previewContent={previewContent}
          pdfUrl="/notes/cs-11-python-fundamentals.pdf"
        />
      </div>
    </div>
  )
}
