import Link from "next/link"
import { GraduationCap, Users, Clock, Award, CheckCircle, Star, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TuitionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1f888f] to-[#b80877] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Online Tuition Classes</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert online tuitions for CBSE Computer Science, Informatics Practices, IT, and AI subjects
          </p>
          <Button asChild size="lg" className="bg-white text-[#1f888f] hover:bg-gray-100 font-semibold px-8 py-3">
            <Link href="#contact">Book Free Demo</Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Tuition?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized attention and expert guidance to excel in your CBSE computer subjects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-[#1f888f] mx-auto mb-4" />
                <CardTitle>Small Batch Size</CardTitle>
                <CardDescription>Maximum 8 students per batch for personalized attention</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-[#b80877] mx-auto mb-4" />
                <CardTitle>Expert Teachers</CardTitle>
                <CardDescription>Experienced educators with proven track record</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-[#1f888f] mx-auto mb-4" />
                <CardTitle>Flexible Timing</CardTitle>
                <CardDescription>Choose from morning, evening, or weekend slots</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-[#b80877] mx-auto mb-4" />
                <CardTitle>100% Results</CardTitle>
                <CardDescription>Guaranteed improvement in grades and understanding</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subjects We Teach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage of all CBSE computer-related subjects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1f888f]">Computer Science</CardTitle>
                <CardDescription>Class 11 & 12 - Python Programming & Theory</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Python Fundamentals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Data Structures</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>File Handling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Database Connectivity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Practical Programming</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Class 11</Badge>
                  <Badge variant="secondary">Class 12</Badge>
                  <Badge variant="outline">Theory + Practical</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-[#b80877]">Informatics Practices</CardTitle>
                <CardDescription>Class 11 & 12 - Data Analysis & Database</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Pandas & NumPy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Data Visualization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>MySQL Database</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Web Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Project Work</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Class 11</Badge>
                  <Badge variant="secondary">Class 12</Badge>
                  <Badge variant="outline">Theory + Practical</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1f888f]">Information Technology</CardTitle>
                <CardDescription>Class 9 & 10 - Digital Skills & Applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Digital Documentation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Spreadsheet Applications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Database Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Web Applications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Digital Communication</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Class 9</Badge>
                  <Badge variant="secondary">Class 10</Badge>
                  <Badge variant="outline">Practical Focus</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-[#b80877]">Artificial Intelligence</CardTitle>
                <CardDescription>Class 9 & 10 - AI Concepts & Ethics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Introduction to AI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Machine Learning Basics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>AI Ethics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>AI Applications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Future of AI</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Class 9</Badge>
                  <Badge variant="secondary">Class 10</Badge>
                  <Badge variant="outline">Conceptual</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Affordable Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality education at prices that won't break the bank
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Individual Classes</CardTitle>
                <CardDescription>One-on-one personalized sessions</CardDescription>
                <div className="text-3xl font-bold text-[#1f888f] mt-4">₹800/hour</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Personal attention
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Flexible timing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Customized curriculum
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Doubt clearing
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#1f888f] hover:bg-[#1a7a80]">Choose Plan</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-[#b80877] border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#b80877] text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Group Classes</CardTitle>
                <CardDescription>Small batch of 4-6 students</CardDescription>
                <div className="text-3xl font-bold text-[#b80877] mt-4">₹500/hour</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Interactive learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Peer discussions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Competitive environment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Cost effective
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#b80877] hover:bg-[#a0076a]">Choose Plan</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Crash Courses</CardTitle>
                <CardDescription>Intensive exam preparation</CardDescription>
                <div className="text-3xl font-bold text-[#1f888f] mt-4">₹300/hour</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Exam focused
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Quick revision
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Practice tests
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Last minute prep
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#1f888f] hover:bg-[#1a7a80]">Choose Plan</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our successful students and their parents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The teaching method is excellent. My son improved from 60% to 95% in Computer Science within 6
                  months!"
                </p>
                <div className="font-semibold text-gray-900">- Mrs. Sharma, Parent</div>
                <div className="text-sm text-gray-500">Class 12 Student</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "I was struggling with Python programming. The teacher explained concepts so clearly that now I love
                  coding!"
                </p>
                <div className="font-semibold text-gray-900">- Priya Patel</div>
                <div className="text-sm text-gray-500">Class 11 Student</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The practical sessions and project guidance helped me score 98% in Informatics Practices board exam."
                </p>
                <div className="font-semibold text-gray-900">- Rahul Kumar</div>
                <div className="text-sm text-gray-500">Class 12 Graduate</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-[#1f888f]">Ready to Start Your Learning Journey?</CardTitle>
              <CardDescription className="text-lg">
                Book a free demo class today and experience our teaching methodology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="h-8 w-8 text-[#1f888f]" />
                  <div className="text-center">
                    <div className="font-semibold">Call Us</div>
                    <div className="text-gray-600">+91 8428233960</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MessageCircle className="h-8 w-8 text-[#b80877]" />
                  <div className="text-center">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-gray-600">+91 9600856026</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="h-8 w-8 text-[#1f888f]" />
                  <div className="text-center">
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">pythontyro0341@gmail.com</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#1f888f] to-[#b80877] hover:from-[#1a7a80] hover:to-[#a0076a]"
                >
                  <Link href="/contact">Book Free Demo</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://wa.me/919600856026" target="_blank" rel="noopener noreferrer">
                    WhatsApp Now
                  </a>
                </Button>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Free Demo Includes:</h3>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    30-minute trial class
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Learning assessment
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Personalized study plan
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Course recommendations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
