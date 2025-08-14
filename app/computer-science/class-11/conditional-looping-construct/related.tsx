import Link from "next/link"
import { BookOpen, Code, FileText, CheckCircle, Clock } from "lucide-react"

export default function RelatedTopics() {
  const topics = [
    {
      title: "Getting Started with Python",
      href: "/computer-science/class-11/getting-started-with-python",
      icon: <BookOpen size={20} />,
      status: "coming-soon",
      description: "Python basics and setup",
    },
    {
      title: "Python Fundamentals",
      href: "/computer-science/class-11/python-fundamentals",
      icon: <BookOpen size={20} />,
      status: "available",
      description: "Basic concepts and syntax",
    },
    {
      title: "Flow of Control",
      href: "/computer-science/class-11/flow-of-control",
      icon: <Code size={20} />,
      status: "available",
      description: "Conditional statements and loops",
    },
    {
      title: "Strings in Python",
      href: "/computer-science/class-11/strings-python",
      icon: <FileText size={20} />,
      status: "available",
      description: "String manipulation and methods",
    },
    {
      title: "List Manipulation",
      href: "/computer-science/class-11/list-manipulation-python",
      icon: <Code size={20} />,
      status: "available",
      description: "Working with Python lists",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-[#1f888f] mb-4">Related Topics</h2>
      <div className="space-y-3">
        {topics.map((topic, index) => (
          <div key={index} className="group">
            {topic.status === "available" ? (
              <Link
                href={topic.href}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#1f888f] hover:bg-blue-50 transition-all"
              >
                <div className="text-[#1f888f]">{topic.icon}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 group-hover:text-[#1f888f]">{topic.title}</h3>
                  <p className="text-sm text-gray-600">{topic.description}</p>
                </div>
                <CheckCircle size={16} className="text-green-500" />
              </Link>
            ) : (
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-gray-50">
                <div className="text-gray-400">{topic.icon}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-600">{topic.title}</h3>
                  <p className="text-sm text-gray-500">{topic.description}</p>
                </div>
                <div className="flex items-center gap-1 text-orange-500">
                  <Clock size={16} />
                  <span className="text-xs">Coming Soon</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
