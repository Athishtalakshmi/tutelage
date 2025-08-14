"use client"
import { Clock, ArrowLeft, BookOpen, Users, Mail } from "lucide-react"
import Link from "next/link"

interface ComingSoonProps {
  title: string
  description: string
  subject: string
  className: string
  backLink: string
  expectedTopics?: string[]
}

export default function ComingSoon({
  title,
  description,
  subject,
  className,
  backLink,
  expectedTopics = [],
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-[#1f888f] hover:text-[#1f888f]/80 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to {subject} {className}
          </Link>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1f888f] to-[#b80877] text-white p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Clock size={32} className="animate-pulse" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{title}</h1>
                  <p className="text-white/90">
                    {subject} • {className}
                  </p>
                </div>
              </div>
              <p className="text-lg text-white/95">{description}</p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Coming Soon Message */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Content Under Development</h2>
                  <p className="text-gray-600 mb-6">
                    We're working hard to bring you comprehensive study materials for this topic. Our team is preparing
                    detailed notes, practical examples, and interactive content to help you master {title.toLowerCase()}
                    .
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-blue-800 mb-2">What to expect:</h3>
                    <ul className="text-blue-700 space-y-1">
                      <li>• Comprehensive theory notes</li>
                      <li>• Practical examples and code snippets</li>
                      <li>• Interactive exercises</li>
                      <li>• MCQs for practice</li>
                      <li>• PDF downloads for offline study</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#1f888f] text-white px-4 py-2 rounded-lg hover:bg-[#1f888f]/90 transition-colors"
                    >
                      <Mail size={18} />
                      Get Notified
                    </Link>
                    <Link
                      href="/tuition"
                      className="inline-flex items-center gap-2 bg-[#b80877] text-white px-4 py-2 rounded-lg hover:bg-[#b80877]/90 transition-colors"
                    >
                      <Users size={18} />
                      Book Tuition
                    </Link>
                  </div>
                </div>

                {/* Expected Topics */}
                {expectedTopics.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Topics We'll Cover</h3>
                    <div className="space-y-3">
                      {expectedTopics.map((topic, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-[#1f888f] to-[#b80877] rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Alternative Content */}
                <div className="md:col-span-2 mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Explore Available Content</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link
                      href="/computer-science/class-11"
                      className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all"
                    >
                      <BookOpen className="text-blue-600 mb-2" size={24} />
                      <h4 className="font-semibold text-blue-800 group-hover:text-blue-900">Class 11 Topics</h4>
                      <p className="text-sm text-blue-600">Explore available chapters</p>
                    </Link>

                    <Link
                      href="/computer-science/class-12"
                      className="group p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all"
                    >
                      <BookOpen className="text-purple-600 mb-2" size={24} />
                      <h4 className="font-semibold text-purple-800 group-hover:text-purple-900">Class 12 Topics</h4>
                      <p className="text-sm text-purple-600">Advanced concepts</p>
                    </Link>

                    <Link
                      href="/computer-science/practical"
                      className="group p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-all"
                    >
                      <BookOpen className="text-green-600 mb-2" size={24} />
                      <h4 className="font-semibold text-green-800 group-hover:text-green-900">Practical Programs</h4>
                      <p className="text-sm text-green-600">Hands-on coding</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
