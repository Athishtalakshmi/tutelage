import Link from "next/link"

export default function Related() {
  const relatedResources = [
    {
      id: 1,
      title: "Prime/Composite Numbers",
      type: "practical",
      url: "/computer-science/practical/class-11/prime-composite",
    },
    {
      id: 2,
      title: "Fibonacci Series Program",
      type: "practical",
      url: "/computer-science/practical/class-11/fibonacci-series",
    },
    {
      id: 3,
      title: "GCD and LCM Program",
      type: "practical",
      url: "/computer-science/practical/class-11/gcd-lcm",
    },
    {
      id: 4,
      title: "String Palindrome Check",
      type: "practical",
      url: "/computer-science/practical/class-11/string-palindrome",
    },
    {
      id: 5,
      title: "Flow of Control Theory",
      type: "theory",
      url: "/computer-science/class-11/flow-of-control",
    },
    {
      id: 6,
      title: "Python Fundamentals",
      type: "theory",
      url: "/computer-science/class-11/python-fundamentals",
    },
    {
      id: 7,
      title: "Number Theory MCQs",
      type: "link",
      url: "/mcqs/computer-science/class-11/number-theory",
    },
    {
      id: 8,
      title: "Mathematical Functions in Python",
      type: "video",
      url: "https://youtube.com/@pythontyro4579",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
      <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Related Resources</h2>
      <ul className="space-y-2">
        {relatedResources.map((resource) => (
          <li key={resource.id}>
            <Link
              href={resource.url}
              className="flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm"
              target={resource.type === "video" ? "_blank" : undefined}
            >
              {resource.type === "theory" && (
                <svg className="w-4 h-4 mr-1.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              )}
              {resource.type === "video" && (
                <svg className="w-4 h-4 mr-1.5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              )}
              {resource.type === "link" && (
                <svg className="w-4 h-4 mr-1.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              )}
              {resource.type === "practical" && (
                <svg className="w-4 h-4 mr-1.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              )}
              <span>{resource.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-4 p-3 bg-[#1f888f]/10 rounded-md">
        <h3 className="font-medium text-[#1f888f] mb-2 text-sm">Mathematical Concepts</h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Perfect numbers: 6, 28, 496, 8128</li>
          <li>• Armstrong: 153, 371, 407, 1634</li>
          <li>• Palindromes: 121, 1331, 12321</li>
          <li>• Digit manipulation techniques</li>
        </ul>
      </div>

      <div className="mt-3 p-3 bg-[#b80877]/10 rounded-md">
        <h3 className="font-medium text-[#b80877] mb-2 text-sm">Programming Tips</h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Use // for integer division</li>
          <li>• Modulo (%) for digit extraction</li>
          <li>• Store original value before loops</li>
          <li>• Validate input for edge cases</li>
        </ul>
      </div>

      <div className="mt-3 p-3 bg-green-50 rounded-md">
        <h3 className="font-medium text-green-800 mb-2 text-sm">Need Help?</h3>
        <p className="text-xs text-green-700 mb-2">
          Join our tuition classes for detailed explanations of number theory and mathematical programming.
        </p>
        <Link href="/tuition" className="text-xs text-green-800 font-medium hover:underline">
          Register for Classes →
        </Link>
      </div>
    </div>
  )
}
