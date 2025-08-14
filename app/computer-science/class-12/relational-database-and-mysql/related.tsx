import Link from "next/link"
import { FileText, Code, HelpCircle, Video, Download, ExternalLink, Database, BookOpen } from "lucide-react"

export default function Related() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
      <h3 className="font-bold text-[#1f888f] mb-4 flex items-center gap-2">
        <BookOpen size={18} />
        Related Resources
      </h3>

      <div className="space-y-4 text-sm">
        {/* Study Notes */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
            <FileText size={14} />
            Study Notes
          </h4>
          <div className="space-y-1 ml-4">
            <Link
              href="/computer-science/class-12/relational-database-and-mysql/notes"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Complete Database Notes
            </Link>
            <Link
              href="/computer-science/class-12/relational-database-and-mysql/sql-reference"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              SQL Commands Reference
            </Link>
            <Link
              href="/computer-science/class-12/relational-database-and-mysql/data-types-guide"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              MySQL Data Types Guide
            </Link>
            <Link
              href="/computer-science/class-12/relational-database-and-mysql/normalization"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Database Normalization
            </Link>
          </div>
        </div>

        {/* Practical Programs */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
            <Code size={14} />
            Practical Programs
          </h4>
          <div className="space-y-1 ml-4">
            <Link
              href="/computer-science/practical/class-12/database-creation"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Database Creation Programs
            </Link>
            <Link
              href="/computer-science/practical/class-12/sql-queries"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              SQL Query Examples
            </Link>
            <Link
              href="/computer-science/practical/class-12/table-operations"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Table Operations
            </Link>
            <Link
              href="/computer-science/practical/class-12/joins-examples"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Joins and Relationships
            </Link>
            <Link
              href="/computer-science/practical/class-12/stored-procedures"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Stored Procedures
            </Link>
          </div>
        </div>

        {/* Practice MCQs */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
            <HelpCircle size={14} />
            Practice MCQs
          </h4>
          <div className="space-y-1 ml-4">
            <Link
              href="/mcqs/computer-science/class-12/database-concepts"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Database Concepts MCQs
            </Link>
            <Link
              href="/mcqs/computer-science/class-12/sql-commands"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              SQL Commands MCQs
            </Link>
            <Link
              href="/mcqs/computer-science/class-12/mysql-data-types"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              MySQL Data Types MCQs
            </Link>
            <Link
              href="/mcqs/computer-science/class-12/database-design"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Database Design MCQs
            </Link>
            <Link
              href="/mcqs/computer-science/class-12/joins-mcqs"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Joins and Keys MCQs
            </Link>
          </div>
        </div>

        {/* Video Tutorials */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
            <Video size={14} />
            Video Tutorials
          </h4>
          <div className="space-y-1 ml-4">
            <a
              href="https://www.youtube.com/@pythontyro4579"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors flex items-center gap-1"
            >
              Database Introduction
              <ExternalLink size={10} />
            </a>
            <a
              href="https://www.youtube.com/@pythontyro4579"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors flex items-center gap-1"
            >
              MySQL Installation Guide
              <ExternalLink size={10} />
            </a>
            <a
              href="https://www.youtube.com/@pythontyro4579"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors flex items-center gap-1"
            >
              SQL Basics Tutorial
              <ExternalLink size={10} />
            </a>
            <a
              href="https://www.youtube.com/@pythontyro4579"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors flex items-center gap-1"
            >
              Database Design Principles
              <ExternalLink size={10} />
            </a>
          </div>
        </div>

        {/* Downloads */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
            <Download size={14} />
            Downloads
          </h4>
          <div className="space-y-1 ml-4">
            <a
              href="/downloads/mysql-cheat-sheet.pdf"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              MySQL Cheat Sheet
            </a>
            <a
              href="/downloads/sql-commands-reference.pdf"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              SQL Commands Reference
            </a>
            <a
              href="/downloads/sample-database.sql"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Sample Database Files
            </a>
            <a
              href="/downloads/database-design-template.pdf"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors"
            >
              Database Design Template
            </a>
          </div>
        </div>

        {/* Tools & Resources */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
            <Database size={14} />
            Tools & Resources
          </h4>
          <div className="space-y-1 ml-4">
            <a
              href="https://www.youtube.com/@pythontyro4579"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors flex items-center gap-1"
            >
              MySQL Workbench Guide
              <ExternalLink size={10} />
            </a>
            <a
              href="https://www.youtube.com/@pythontyro4579"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors flex items-center gap-1"
            >
              phpMyAdmin Tutorial
              <ExternalLink size={10} />
            </a>
            <a
              href="https://www.youtube.com/@pythontyro4579"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors flex items-center gap-1"
            >
              Online SQL Practice
              <ExternalLink size={10} />
            </a>
            <a
              href="https://www.youtube.com/@pythontyro4579"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-[#1f888f] transition-colors flex items-center gap-1"
            >
              Database Design Tools
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
