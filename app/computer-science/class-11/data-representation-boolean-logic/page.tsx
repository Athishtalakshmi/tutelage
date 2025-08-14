import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, Binary, Hash, FileText, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DataRepresentationTOC } from "./toc"
import { DataRepresentationRelated } from "./related"
import ContentLayout from "@/components/content-layout"

export default function DataRepresentationPage() {
  return (
    <ContentLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/computer-science">Computer Science</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/computer-science/class-11">Class 11</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Representation & Boolean Logic</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <DataRepresentationTOC />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Binary className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                    Data Representation & Boolean Logic
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Class 11 Computer Science - Chapter 3
                  </CardDescription>
                  <div className="flex justify-center gap-2 mt-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Theory
                    </Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Calculator className="w-3 h-3 mr-1" />
                      Number Systems
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      <Hash className="w-3 h-3 mr-1" />
                      Binary Operations
                    </Badge>
                  </div>
                </CardHeader>
              </Card>

              {/* Introduction */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                    <FileText className="mr-2 h-6 w-6 text-blue-600" />
                    Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In Digital Computer, data and instructions are stored in computer memory using binary code (or
                    machine code) represented by Binary digIT's 1 and 0 called BIT's.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The data may contain digits, alphabets or special character, which are converted to bits,
                    understandable by the computer.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The number system uses well defined symbols called digits. Number systems are basically classified
                    into two types:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>
                      <strong>Non-positional number system</strong>
                    </li>
                    <li>
                      <strong>Positional number system</strong>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Non-Positional Number System */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Non-Positional Number System</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In olden days people use of this type of number system for simple calculations like additions and
                    subtractions.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The non-positional number system consists of different symbols that are used to represent numbers.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Roman number system is an example of the non-positional number system i.e. I=1, V=5, X=10, L=50.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This number system cannot be used effectively to perform arithmetic operations.
                  </p>
                </CardContent>
              </Card>

              {/* Positional Number System */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Positional Number System</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">This type of number system includes:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Decimal number system</li>
                    <li>Binary number system</li>
                    <li>Octal number system</li>
                    <li>Hexadecimal number system</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The total number of digits present in any number system is called its <strong>Base or Radix</strong>
                    .
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Every number is represented by a base (or radix) x, which represents x digits. The base is written
                    after the number as subscript such as 512₍₁₀₎. It is a Decimal number as its base is 10.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Example:</strong> Consider a decimal number 512.45₍₁₀₎ which can be represented in
                      equivalent value as:
                    </p>
                    <p className="text-center font-mono text-lg mt-2">5×10² + 1×10¹ + 2×10⁰ + 4×10⁻¹ + 5×10⁻²</p>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <Link href="/computer-science/class-11/computer-system-organization">
                  <Button variant="outline" className="flex items-center bg-transparent">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous: Computer System Organization
                  </Button>
                </Link>
                <Link href="/computer-science/class-11/getting-started-with-python">
                  <Button variant="outline" className="flex items-center bg-transparent">
                    Next: Getting Started with Python
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Related Resources Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <DataRepresentationRelated />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
