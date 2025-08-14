"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  Home,
  BookOpen,
  Database,
  HelpCircle,
  FileText,
  Bot,
  GraduationCap,
  Info,
  Contact,
  Youtube,
  Code,
  Calculator,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-gray-100 py-1 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} className="text-[#1f888f]" />
              <span className="text-gray-600">+91 8428233960</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle size={14} className="text-[#b80877]" />
              <span className="text-gray-600">+91 9600856026</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} className="text-[#1f888f]" />
              <span className="text-gray-600">pythontyro0341@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/tuition" className="text-[#b80877] hover:text-[#1f888f] font-medium">
              Join Online Classes
            </Link>
            <Link
              href="https://www.youtube.com/@pythontyro4579"
              target="_blank"
              className="flex items-center space-x-1 text-red-600 hover:text-red-700"
            >
              <Youtube size={16} />
              <span>YouTube</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/tutelage-logo.png"
              alt="Tutelage Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <Image src="/images/title.png" alt="Tutelage" width={140} height={36} className="h-9 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium">
              <Home size={18} />
              <span>Home</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium">
                <BookOpen size={18} />
                <span>Computer Science</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Link href="/computer-science/class-11" className="flex items-center space-x-2 w-full">
                    <Code size={16} />
                    <span>Class 11</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/computer-science/class-12" className="flex items-center space-x-2 w-full">
                    <Code size={16} />
                    <span>Class 12</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/computer-science/practical" className="flex items-center space-x-2 w-full">
                    <Calculator size={16} />
                    <span>Practical Programs</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium">
                <Database size={18} />
                <span>Informatics Practices</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Link href="/informatics-practices/class-11" className="flex items-center space-x-2 w-full">
                    <Database size={16} />
                    <span>Class 11</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/informatics-practices/class-12" className="flex items-center space-x-2 w-full">
                    <Database size={16} />
                    <span>Class 12</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/informatics-practices/practical" className="flex items-center space-x-2 w-full">
                    <Calculator size={16} />
                    <span>Practical Programs</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/mcqs" className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium">
              <HelpCircle size={18} />
              <span>MCQs</span>
            </Link>

            <Link href="/ai" className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium">
              <Bot size={18} />
              <span>AI Tools</span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium">
                <FileText size={18} />
                <span>More</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Link href="/about" className="flex items-center space-x-2 w-full">
                    <Info size={16} />
                    <span>About Us</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact" className="flex items-center space-x-2 w-full">
                    <Contact size={16} />
                    <span>Contact</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/tuition" className="flex items-center space-x-2 w-full">
                    <GraduationCap size={16} />
                    <span>Tuition Classes</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/textbook-solution/ncert" className="flex items-center space-x-2 w-full">
                    <BookOpen size={16} />
                    <span>NCERT Solutions</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/textbook-solution/sumita-arora" className="flex items-center space-x-2 w-full">
                    <BookOpen size={16} />
                    <span>Sumita Arora Solutions</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="https://www.youtube.com/@pythontyro4579"
                    target="_blank"
                    className="flex items-center space-x-2 w-full"
                  >
                    <Youtube size={16} />
                    <span>YouTube Channel</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-[#b80877] to-[#1f888f] hover:from-[#a0076a] hover:to-[#1a7a80]"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium">
                <Home size={18} />
                <span>Home</span>
              </Link>

              <div className="border-l-2 border-gray-200 pl-4">
                <div className="flex items-center space-x-2 text-gray-900 font-semibold mb-2">
                  <BookOpen size={18} />
                  <span>Computer Science</span>
                </div>
                <div className="ml-6 space-y-2">
                  <Link
                    href="/computer-science/class-11"
                    className="flex items-center space-x-2 text-gray-600 hover:text-[#1f888f]"
                  >
                    <Code size={16} />
                    <span>Class 11</span>
                  </Link>
                  <Link
                    href="/computer-science/class-12"
                    className="flex items-center space-x-2 text-gray-600 hover:text-[#1f888f]"
                  >
                    <Code size={16} />
                    <span>Class 12</span>
                  </Link>
                  <Link
                    href="/computer-science/practical"
                    className="flex items-center space-x-2 text-gray-600 hover:text-[#1f888f]"
                  >
                    <Calculator size={16} />
                    <span>Practical Programs</span>
                  </Link>
                </div>
              </div>

              <div className="border-l-2 border-gray-200 pl-4">
                <div className="flex items-center space-x-2 text-gray-900 font-semibold mb-2">
                  <Database size={18} />
                  <span>Informatics Practices</span>
                </div>
                <div className="ml-6 space-y-2">
                  <Link
                    href="/informatics-practices/class-11"
                    className="flex items-center space-x-2 text-gray-600 hover:text-[#1f888f]"
                  >
                    <Database size={16} />
                    <span>Class 11</span>
                  </Link>
                  <Link
                    href="/informatics-practices/class-12"
                    className="flex items-center space-x-2 text-gray-600 hover:text-[#1f888f]"
                  >
                    <Database size={16} />
                    <span>Class 12</span>
                  </Link>
                  <Link
                    href="/informatics-practices/practical"
                    className="flex items-center space-x-2 text-gray-600 hover:text-[#1f888f]"
                  >
                    <Calculator size={16} />
                    <span>Practical Programs</span>
                  </Link>
                </div>
              </div>

              <Link href="/mcqs" className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium">
                <HelpCircle size={18} />
                <span>MCQs</span>
              </Link>

              <Link href="/ai" className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium">
                <Bot size={18} />
                <span>AI Tools</span>
              </Link>

              <Link
                href="/tuition"
                className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium"
              >
                <GraduationCap size={18} />
                <span>Tuition Classes</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium"
              >
                <Info size={18} />
                <span>About Us</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center space-x-2 text-gray-700 hover:text-[#1f888f] font-medium"
              >
                <Contact size={18} />
                <span>Contact</span>
              </Link>

              <Link
                href="https://www.youtube.com/@pythontyro4579"
                target="_blank"
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
              >
                <Youtube size={18} />
                <span>YouTube Channel</span>
              </Link>

              <Button
                asChild
                className="bg-gradient-to-r from-[#b80877] to-[#1f888f] hover:from-[#a0076a] hover:to-[#1a7a80] w-fit"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
