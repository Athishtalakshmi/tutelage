import Image from "next/image"
import Link from "next/link"
import { Users, Target, Award, BookOpen, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1f888f] to-[#b80877] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Tutelage</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering students with comprehensive CBSE resources and expert online tuitions for Computer Science,
            Informatics Practices, IT, and AI subjects.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Tutelage, we are committed to providing high-quality educational resources and personalized online
                tuitions that help students excel in their CBSE Computer Science and related subjects.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that every student deserves access to excellent education, regardless of their location or
                background. Our comprehensive study materials, practical programs, and expert guidance are designed to
                make learning engaging and effective.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-[#1f888f]" />
                  <span className="text-gray-700">Goal-Oriented Learning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-[#b80877]" />
                  <span className="text-gray-700">Personalized Attention</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-[#1f888f]" />
                  <span className="text-gray-700">Proven Results</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Students learning"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational resources and services designed to help students succeed in their academic
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-[#1f888f] mb-4" />
                <CardTitle>Comprehensive Study Materials</CardTitle>
                <CardDescription>
                  Detailed notes, practical programs, and MCQs for Computer Science and Informatics Practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Class 11 & 12 Complete Syllabus</li>
                  <li>• Practical Programming Examples</li>
                  <li>• MCQs for Practice</li>
                  <li>• Textbook Solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-[#b80877] mb-4" />
                <CardTitle>Online Tuition Classes</CardTitle>
                <CardDescription>Personalized one-on-one and group classes with experienced educators</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Individual Attention</li>
                  <li>• Flexible Timings</li>
                  <li>• Interactive Sessions</li>
                  <li>• Regular Assessments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-[#1f888f] mb-4" />
                <CardTitle>AI-Powered Tools</CardTitle>
                <CardDescription>Modern learning tools and AI assistance for better understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Smart Study Assistance</li>
                  <li>• Automated Code Review</li>
                  <li>• Personalized Learning Paths</li>
                  <li>• Progress Tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#1f888f] to-[#b80877] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Students Taught</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Study Materials</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Tutelage?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional teaching methods with modern technology to provide the best learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1f888f] p-2 rounded-full">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                  <p className="text-gray-600">
                    Our experienced educators have years of teaching experience and deep subject knowledge.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#b80877] p-2 rounded-full">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Updated Curriculum</h3>
                  <p className="text-gray-600">
                    Our study materials are regularly updated to match the latest CBSE syllabus and exam patterns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1f888f] p-2 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Learning</h3>
                  <p className="text-gray-600">
                    We understand that every student is unique and provide customized learning solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Online education"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved academic success with Tutelage. Contact us today to begin your
            learning journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#b80877] to-[#1f888f] hover:from-[#a0076a] hover:to-[#1a7a80]"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/tuition">View Our Courses</Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-[#1f888f]" />
              <span>+91 8428233960</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-[#b80877]" />
              <span>+91 9600856026</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-[#1f888f]" />
              <span>pythontyro0341@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
