export default function TableOfContents() {
  const sections = [
    {
      title: "1. Introduction to Python",
      subsections: [
        "What is Python?",
        "History and Features of Python",
        "Applications of Python",
        "Python vs Other Languages",
      ],
    },
    {
      title: "2. Setting Up Python Environment",
      subsections: ["Installing Python", "Python IDLE", "Setting up Code Editors", "Virtual Environments"],
    },
    {
      title: "3. Your First Python Program",
      subsections: ["Interactive Mode", "Script Mode", "Hello World Program", "Running Python Programs"],
    },
    {
      title: "4. Python Syntax Basics",
      subsections: [
        "Indentation in Python",
        "Comments and Documentation",
        "Keywords and Identifiers",
        "Case Sensitivity",
      ],
    },
    {
      title: "5. Variables and Data Types",
      subsections: ["Creating Variables", "Variable Naming Rules", "Basic Data Types", "Type Conversion"],
    },
    {
      title: "6. Input and Output",
      subsections: ["print() Function", "input() Function", "Formatting Output", "Escape Sequences"],
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-[#1f888f] mb-4">Table of Contents</h2>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border-l-4 border-[#1f888f] pl-4">
            <h3 className="font-semibold text-gray-800 mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.subsections.map((subsection, subIndex) => (
                <li key={subIndex} className="text-sm text-gray-600 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#b80877] rounded-full"></div>
                  {subsection}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-700">
          <strong>Note:</strong> This content is currently under development. We're preparing comprehensive materials
          with examples, exercises, and practical applications.
        </p>
      </div>
    </div>
  )
}
