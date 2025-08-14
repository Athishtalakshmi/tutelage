import Link from "next/link"
import { Bot, Brain, Cpu, Zap, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1f888f] to-[#b80877] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Bot size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Tools & Resources</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore cutting-edge AI tools and learn about artificial intelligence concepts for CBSE curriculum
          </p>
          <Button asChild size="lg" className="bg-white text-[#1f888f] hover:bg-gray-100 font-semibold px-8 py-3">
            <Link href="#tools">Explore AI Tools</Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* AI Tools Section */}
        <section id="tools" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI-Powered Learning Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your learning experience with our intelligent tools designed for CBSE students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-[#1f888f] mb-4" />
                <CardTitle>Smart Study Assistant</CardTitle>
                <CardDescription>AI-powered study companion that helps you understand complex concepts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Personalized explanations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Interactive Q&A sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Concept visualization
                  </li>
                </ul>
                <Button className="w-full bg-[#1f888f] hover:bg-[#1a7a80]">Try Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cpu className="h-12 w-12 text-[#b80877] mb-4" />
                <CardTitle>Code Analyzer</CardTitle>
                <CardDescription>Intelligent code review and optimization suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Error detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Performance optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Best practices suggestions
                  </li>
                </ul>
                <Button className="w-full bg-[#b80877] hover:bg-[#a0076a]">Analyze Code</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-[#1f888f] mb-4" />
                <CardTitle>Quick Problem Solver</CardTitle>
                <CardDescription>Instant solutions and step-by-step explanations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Step-by-step solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Multiple approaches
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Learning insights
                  </li>
                </ul>
                <Button className="w-full bg-[#1f888f] hover:bg-[#1a7a80]">Solve Problem</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Curriculum Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI in CBSE Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about artificial intelligence concepts as part of your CBSE studies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Class 9 & 10 AI Topics</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#1f888f] p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Introduction to AI</h4>
                    <p className="text-gray-600">Understanding what AI is and its applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#b80877] p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Ethics</h4>
                    <p className="text-gray-600">Responsible AI development and usage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#1f888f] p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Machine Learning Basics</h4>
                    <p className="text-gray-600">Fundamental concepts of machine learning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#b80877] p-2 rounded-full">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI in Daily Life</h4>
                    <p className="text-gray-600">Real-world applications and examples</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Learn AI?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Future-ready skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Career opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Problem-solving skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Innovation mindset</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">AI Learning Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#1f888f]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-[#1f888f]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Adaptive Learning</h3>
                <p className="text-gray-600">AI adapts to your learning pace and style</p>
              </div>
              <div className="text-center">
                <div className="bg-[#b80877]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-[#b80877]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Instant Feedback</h3>
                <p className="text-gray-600">Get immediate responses and corrections</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1f888f]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Cpu className="h-8 w-8 text-[#1f888f]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Smart Analytics</h3>
                <p className="text-gray-600">Track progress with intelligent insights</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#1f888f] to-[#b80877] rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore AI?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of students already using AI to enhance their learning experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#1f888f] hover:bg-gray-100 font-semibold">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#1f888f] bg-transparent"
              >
                <Link href="/tuition">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
