"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, CheckCircle, XCircle } from "lucide-react"

export default function ComputerScienceClass11MCQsPage() {
  // Sample chapters for TOC
  const chapters = [
    { id: 1, title: "Computer Overview", slug: "computer-overview" },
    { id: 2, title: "Python Fundamentals", slug: "python-fundamentals" },
    { id: 3, title: "Flow of Control", slug: "flow-of-control" },
    { id: 4, title: "Functions", slug: "functions" },
    { id: 5, title: "Lists and Tuples", slug: "lists-and-tuples" },
    { id: 6, title: "Dictionaries and Sets", slug: "dictionaries-and-sets" },
    { id: 7, title: "String Manipulation", slug: "string-manipulation" },
    { id: 8, title: "File Handling", slug: "file-handling" },
    { id: 9, title: "Data Visualization", slug: "data-visualization" },
    { id: 10, title: "Computer Networks", slug: "computer-networks" },
  ]

  // Sample MCQs for Python Fundamentals
  const pythonMcqs = [
    {
      id: 1,
      question: "Which of the following is not a valid data type in Python?",
      options: ["int", "float", "char", "bool"],
      correctAnswer: 2, // Index of the correct answer (0-based)
      explanation:
        "Python does not have a 'char' data type. Characters in Python are represented as strings of length 1.",
    },
    {
      id: 2,
      question: "What will be the output of the following code?\n\nx = 5\ny = 2\nprint(x // y)",
      options: ["2", "2.5", "2.0", "Error"],
      correctAnswer: 0,
      explanation:
        "The // operator performs floor division, which returns the largest integer less than or equal to the result of the division. 5 // 2 = 2.",
    },
    {
      id: 3,
      question: "Which of the following is used to take user input in Python?",
      options: ["get()", "input()", "scanf()", "read()"],
      correctAnswer: 1,
      explanation:
        "The input() function is used to take user input in Python. It reads a line from the input and returns it as a string.",
    },
    {
      id: 4,
      question: "What is the correct way to create a list in Python?",
      options: ["list = (1, 2, 3)", "list = [1, 2, 3]", "list = {1, 2, 3}", "list = <1, 2, 3>"],
      correctAnswer: 1,
      explanation:
        "In Python, lists are created using square brackets []. Parentheses () are used for tuples, and curly braces {} are used for dictionaries and sets.",
    },
    {
      id: 5,
      question: "Which of the following is the correct way to comment multiple lines in Python?",
      options: ["// This is a comment", "/* This is a comment */", "''' This is a comment '''", "# This is a comment"],
      correctAnswer: 2,
      explanation:
        "In Python, multi-line comments can be written using triple quotes (''' or \"\"\"). Single-line comments use the # symbol.",
    },
  ]

  // Sample MCQs for Computer Overview
  const computerOverviewMcqs = [
    {
      id: 1,
      question: "Which of the following is not a type of computer?",
      options: ["Mainframe", "Supercomputer", "Minicomputer", "Megacomputer"],
      correctAnswer: 3,
      explanation:
        "Megacomputer is not a standard type of computer. The main types are Supercomputers, Mainframes, Minicomputers, and Microcomputers.",
    },
    {
      id: 2,
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Processing Unit",
        "Central Program Unit",
        "Control Processing Unit",
      ],
      correctAnswer: 0,
      explanation:
        "CPU stands for Central Processing Unit. It is the primary component of a computer that performs most of the processing.",
    },
    {
      id: 3,
      question: "Which of the following is an input device?",
      options: ["Printer", "Monitor", "Speaker", "Scanner"],
      correctAnswer: 3,
      explanation:
        "A scanner is an input device that captures images from physical items and converts them into digital format.",
    },
  ]

  // State variables
  const [currentChapter, setCurrentChapter] = useState("python-fundamentals")
  const [mcqs, setMcqs] = useState(pythonMcqs)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])

  // Change MCQs when chapter changes
  useEffect(() => {
    if (currentChapter === "python-fundamentals") {
      setMcqs(pythonMcqs)
    } else if (currentChapter === "computer-overview") {
      setMcqs(computerOverviewMcqs)
    } else {
      // Default to Python MCQs for other chapters
      setMcqs(pythonMcqs)
    }

    // Reset states when changing chapters
    setCurrentQuestion(0)
    setSelectedOption(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions([])
  }, [currentChapter])

  const handleChapterChange = (slug: string) => {
    setCurrentChapter(slug)
  }

  const handleOptionSelect = (optionIndex: number) => {
    if (answeredQuestions.includes(currentQuestion)) return
    setSelectedOption(optionIndex)
  }

  const handleCheckAnswer = () => {
    if (selectedOption === null) return

    if (!answeredQuestions.includes(currentQuestion)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestion])

      if (selectedOption === mcqs[currentQuestion].correctAnswer) {
        setScore(score + 1)
      }
    }

    setShowResult(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < mcqs.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setShowResult(false)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(null)
      setShowResult(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions([])
  }

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
            <Link href="/mcqs" className="hover:text-[#1f888f]">
              MCQs
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href="/mcqs/computer-science" className="hover:text-[#1f888f]">
              Computer Science
            </Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-[#1f888f] font-medium">Class 11</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4 flex-1">
        <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Computer Science Class 11 MCQs</h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left Sidebar - TOC (20%) */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Chapters</h2>
              <ul className="space-y-1">
                {chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <button
                      onClick={() => handleChapterChange(chapter.slug)}
                      className={`flex items-center text-left w-full text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm ${
                        currentChapter === chapter.slug ? "bg-gray-50 text-[#b80877] font-medium" : ""
                      }`}
                    >
                      <span className="mr-1.5 text-xs font-medium">{chapter.id}.</span>
                      {chapter.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Middle Content - MCQs (60%) */}
          <div className="md:col-span-3">
            {/* Score Display */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
              <div>
                <span className="font-medium">Score: </span>
                <span className="text-[#1f888f] font-bold">{score}</span>
                <span className="text-gray-600"> / {mcqs.length}</span>
              </div>
              <div>
                <span className="font-medium">Question: </span>
                <span className="text-[#1f888f] font-bold">{currentQuestion + 1}</span>
                <span className="text-gray-600"> / {mcqs.length}</span>
              </div>
              <button onClick={resetQuiz} className="text-[#b80877] hover:text-[#b80877]/80 text-sm font-medium">
                Reset Quiz
              </button>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-bold mb-4">
                {currentQuestion + 1}. {mcqs[currentQuestion].question}
              </h2>

              <div className="space-y-3 mb-6">
                {mcqs[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`p-3 border rounded-md cursor-pointer transition-colors ${
                      selectedOption === index
                        ? "border-[#1f888f] bg-[#1f888f]/5"
                        : "border-gray-200 hover:border-gray-300"
                    } ${
                      showResult && index === mcqs[currentQuestion].correctAnswer ? "border-green-500 bg-green-50" : ""
                    } ${
                      showResult && selectedOption === index && index !== mcqs[currentQuestion].correctAnswer
                        ? "border-red-500 bg-red-50"
                        : ""
                    }`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center mr-3 mt-0.5 ${
                          selectedOption === index ? "border-[#1f888f] bg-[#1f888f] text-white" : "border-gray-300"
                        }`}
                      >
                        {selectedOption === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <div className="flex-1">
                        <span>{option}</span>
                      </div>
                      {showResult && index === mcqs[currentQuestion].correctAnswer && (
                        <CheckCircle size={20} className="text-green-500 ml-2" />
                      )}
                      {showResult && selectedOption === index && index !== mcqs[currentQuestion].correctAnswer && (
                        <XCircle size={20} className="text-red-500 ml-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Explanation */}
              {showResult && (
                <div
                  className={`p-4 rounded-md mb-6 ${
                    selectedOption === mcqs[currentQuestion].correctAnswer
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <h3 className="font-bold mb-2">Explanation:</h3>
                  <p>{mcqs[currentQuestion].explanation}</p>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 0}
                  className={`px-4 py-2 rounded-md ${
                    currentQuestion === 0
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Previous
                </button>

                {!showResult ? (
                  <button
                    onClick={handleCheckAnswer}
                    disabled={selectedOption === null}
                    className={`px-4 py-2 rounded-md ${
                      selectedOption === null
                        ? "bg-[#1f888f]/50 text-white cursor-not-allowed"
                        : "bg-[#1f888f] text-white hover:bg-[#1f888f]/90"
                    }`}
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    disabled={currentQuestion === mcqs.length - 1}
                    className={`px-4 py-2 rounded-md ${
                      currentQuestion === mcqs.length - 1
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-[#b80877] text-white hover:bg-[#b80877]/90"
                    }`}
                  >
                    Next Question
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Related Resources (20%) */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <h2 className="text-base font-bold mb-3 text-[#1f888f] border-b pb-2">Related Resources</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/computer-science/class-11/python-fundamentals"
                    className="flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-1.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>Python Notes</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com/@pythontyro4579"
                    target="_blank"
                    className="flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-1.5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                    <span>Video Tutorials</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/python-cheatsheet.pdf"
                    className="flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm"
                  >
                    <svg className="w-4 h-4 mr-1.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>Python Cheatsheet</span>
                    <svg
                      className="w-3 h-3 ml-auto text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/computer-science/practical"
                    className="flex items-center text-gray-700 hover:text-[#b80877] hover:bg-gray-50 p-1.5 rounded-md transition-colors text-sm"
                  >
                    <svg
                      className="w-4 h-4 mr-1.5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>Practical Programs</span>
                  </Link>
                </li>
              </ul>

              <div className="mt-4 p-3 bg-[#b80877]/10 rounded-md">
                <h3 className="font-medium text-[#b80877] mb-2 text-sm">Need Help?</h3>
                <p className="text-xs text-gray-600 mb-2">
                  Join our tuition classes for personalized guidance and doubt clearing.
                </p>
                <Link href="/tuition" className="text-xs text-[#b80877] font-medium hover:underline">
                  Register for Classes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
