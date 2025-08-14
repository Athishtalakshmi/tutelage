import { AlertTriangle, Shield, BookOpen, Users, Gavel, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1f888f] to-[#b80877] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Important information about the use of our website and services
          </p>
          <p className="text-lg opacity-80">Last updated: December 8, 2024</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* General Disclaimer */}
        <Alert className="mb-8 border-yellow-400 bg-yellow-50">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            <strong>Important Notice:</strong> The information provided on this website is for educational purposes
            only. While we strive for accuracy, we make no warranties about the completeness, reliability, or
            suitability of the information.
          </AlertDescription>
        </Alert>

        {/* Educational Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <BookOpen className="h-6 w-6 mr-2" />
              Educational Content Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Accuracy</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  All educational content is prepared based on CBSE curriculum and best practices in computer science
                  education
                </li>
                <li>
                  We regularly update our materials, but curriculum changes may occur that could affect content
                  relevance
                </li>
                <li>
                  Students should always refer to official CBSE guidelines and textbooks for authoritative information
                </li>
                <li>
                  Programming examples and code snippets are provided for educational purposes and may require
                  adaptation
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Performance</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  While our teaching methods have helped many students improve their grades, individual results may vary
                </li>
                <li>
                  Academic success depends on various factors including student effort, prior knowledge, and study
                  habits
                </li>
                <li>We cannot guarantee specific grade improvements or examination results</li>
                <li>Students are responsible for their own learning outcomes and examination preparation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Service Limitations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              Service Limitations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Online Tuition Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Online classes are subject to internet connectivity and technical requirements</li>
                <li>
                  We are not responsible for technical issues on the student's end that may affect class attendance
                </li>
                <li>Class recordings, when available, are for educational use only and should not be shared</li>
                <li>Makeup classes are subject to teacher availability and scheduling constraints</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Website Availability</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We strive to maintain website availability but cannot guarantee 100% uptime</li>
                <li>Scheduled maintenance may temporarily affect access to resources</li>
                <li>We are not liable for any losses resulting from website downtime</li>
                <li>Users should maintain local copies of important materials when possible</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f]">Third-Party Content and Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites, resources, or tools. We provide these links for
              convenience and educational purposes only.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">External Links</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>We do not control or endorse the content of external websites</li>
                  <li>External sites have their own terms of use and privacy policies</li>
                  <li>We are not responsible for the accuracy or availability of external content</li>
                  <li>Users access external links at their own risk</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Tools</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Programming tools and software recommendations are provided for educational purposes</li>
                  <li>Users should verify software compatibility and security before installation</li>
                  <li>We are not responsible for issues arising from third-party software use</li>
                  <li>Always download software from official sources</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Advice */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <Users className="h-6 w-6 mr-2" />
              Professional and Career Advice
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Any career guidance or professional advice provided is based on general industry knowledge and should not
              be considered as personalized career counseling.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Career advice is provided for informational purposes only</li>
              <li>Individual career decisions should be made after consulting with qualified career counselors</li>
              <li>Job market conditions and industry requirements may change over time</li>
              <li>We do not guarantee employment or career outcomes based on our educational services</li>
              <li>Students should research and verify career information independently</li>
            </ul>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f]">Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Content</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>All original content, including notes, videos, and materials, is owned by Tutelage</li>
                <li>Content is provided for personal educational use only</li>
                <li>Redistribution or commercial use of our materials is prohibited without permission</li>
                <li>Students may use materials for their own learning and examination preparation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Content</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We respect the intellectual property rights of others</li>
                <li>Any third-party content is used under fair use or with appropriate permissions</li>
                <li>If you believe your copyright has been infringed, please contact us immediately</li>
                <li>We will promptly address any valid copyright concerns</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <Gavel className="h-6 w-6 mr-2" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <h3 className="font-semibold text-red-800 mb-2">Important Legal Notice</h3>
              <p className="text-red-700">
                To the fullest extent permitted by law, Tutelage shall not be liable for any direct, indirect,
                incidental, special, or consequential damages arising from the use of our services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Scope of Limitation</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We are not liable for any academic or examination results</li>
                <li>Technical issues or service interruptions are not grounds for liability claims</li>
                <li>We are not responsible for decisions made based on our educational content</li>
                <li>Our liability is limited to the amount paid for our services, if any</li>
                <li>These limitations apply regardless of the legal theory of liability</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f]">User Responsibilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              By using our website and services, users agree to certain responsibilities and acknowledge the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Users are responsible for verifying the accuracy of information before relying on it</li>
              <li>Students must follow their school's academic integrity policies</li>
              <li>Users should not share login credentials or access materials inappropriately</li>
              <li>Any misuse of our services may result in termination of access</li>
              <li>Users must comply with applicable laws and regulations</li>
              <li>Parents/guardians are responsible for supervising minors' use of our services</li>
            </ul>
          </CardContent>
        </Card>

        {/* Changes to Disclaimer */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f]">Changes to This Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon
              posting on our website. Users are encouraged to review this disclaimer periodically.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Material changes will be highlighted on our website</li>
              <li>Continued use of our services constitutes acceptance of any changes</li>
              <li>Users who disagree with changes should discontinue use of our services</li>
              <li>The most current version will always be available on our website</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <Mail className="h-6 w-6 mr-2" />
              Questions About This Disclaimer
            </CardTitle>
            <CardDescription>
              If you have any questions about this disclaimer or need clarification on any points, please contact us:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong> pythontyro0341@gmail.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 8428233960
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +91 9600856026
                  </p>
                  <p>
                    <strong>Address:</strong> Thudiyalur, Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Legal Jurisdiction</h3>
                  <p className="text-blue-700 text-sm">
                    This disclaimer is governed by the laws of India. Any disputes arising from the use of our services
                    will be subject to the jurisdiction of courts in Coimbatore, Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
