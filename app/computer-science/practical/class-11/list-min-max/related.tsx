import Link from "next/link"

export default function Related() {
  const relatedResources = [
    {
      id: 1,
      title: "List Manipulation in Python",
      type: "theory",
      url: "/computer-science/class-11/list-manipulation-python",
    },
    {
      id: 2,
      title: "Tuples and Dictionary",
      type: "theory",
      url: "/computer-science/class-11/tuples-dictionary",
    },
    {
      id: 3,
      title: "List Extremes Program",
      type: "practical",
      url: "/computer-science/practical/class-11/list-extremes",
    },
    {
      id: 4,
      title: "List Search Program",
      type: "practical",
      url: "/computer-science/practical/class-11/list-search",
    },
    {
      id: 5,
      title: "Python Lists MCQs",
      type: "link",
      url: "/mcqs/computer-science/class-11/lists",
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
              <span>{resource.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-4 p-3 bg-[#b80877]/10 rounded-md">
        <h3 className="font-medium text-[#b80877] mb-2 text-sm">List Tips</h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Use sort() for in-place sorting</li>
          <li>• Negative indices count from end</li>
          <li>• max()/min() work on any iterable</li>
          <li>• Handle empty lists to avoid errors</li>
        </ul>
      </div>

      <div className="mt-3 p-3 bg-[#1f888f]/10 rounded-md">
        <h3 className="font-medium text-[#1f888f] mb-2 text-sm">Practice More</h3>
        <p className="text-xs text-gray-600 mb-2">Try more list manipulation programs to master data structures.</p>
        <Link
          href="/computer-science/practical/class-11"
          className="text-xs text-[#1f888f] font-medium hover:underline"
        >
          View All Programs →
        </Link>
      </div>
    </div>
  )
}
