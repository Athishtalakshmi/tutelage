import { Shield, Eye, Lock, UserCheck, FileText, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1f888f] to-[#b80877] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your privacy is important to us. Learn how we protect your information.
          </p>
          <p className="text-lg opacity-80">Last updated: December 8, 2024</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <Eye className="h-6 w-6 mr-2" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              At Tutelage, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website, use our services, or engage with our online tuition platform.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Name, email address, and phone number</li>
                <li>Educational background and academic information</li>
                <li>Payment information for tuition services</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Website usage patterns and navigation data</li>
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
                <li>Session recordings for quality improvement</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational Data</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Academic performance and progress tracking</li>
                <li>Assignment submissions and grades</li>
                <li>Learning preferences and study patterns</li>
                <li>Interaction with educational content</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <UserCheck className="h-6 w-6 mr-2" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Provision</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Deliver online tuition classes and educational content</li>
                  <li>Track academic progress and provide feedback</li>
                  <li>Customize learning experiences</li>
                  <li>Process payments and manage subscriptions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Send important updates about classes</li>
                  <li>Respond to inquiries and support requests</li>
                  <li>Share educational resources and tips</li>
                  <li>Notify about new features and services</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Analyze usage patterns to improve services</li>
                  <li>Develop new educational features</li>
                  <li>Enhance website performance and security</li>
                  <li>Conduct research for educational purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Compliance</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Comply with applicable laws and regulations</li>
                  <li>Protect against fraud and security threats</li>
                  <li>Respond to legal requests and court orders</li>
                  <li>Enforce our terms of service</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <Lock className="h-6 w-6 mr-2" />
              Information Sharing and Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">We Do Not Sell Your Information</h3>
              <p className="text-yellow-700">
                We do not sell, trade, or rent your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Limited Sharing</h3>
              <p className="text-gray-700 mb-3">We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With your explicit consent</li>
                <li>With service providers who assist in delivering our services</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Measures</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Organizational Measures</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Staff training on data protection</li>
                  <li>Limited access to personal information</li>
                  <li>Regular privacy policy reviews</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <UserCheck className="h-6 w-6 mr-2" />
              Your Rights and Choices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              You have certain rights regarding your personal information. You may exercise these rights by contacting
              us using the information provided below.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Access and Control</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Update or correct your information</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Preferences</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Opt-out of marketing communications</li>
                  <li>Choose notification preferences</li>
                  <li>Unsubscribe from newsletters</li>
                  <li>Manage cookie preferences</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookies and Tracking */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f]">Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website and provide
              personalized services.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Essential Cookies:</strong> Required for website functionality
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Help us analyze website usage
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your preferences
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Deliver relevant advertisements
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f]">Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are designed for students of various ages, including minors. We take special care to protect
              the privacy of children under 18 years of age.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We require parental consent for children under 13</li>
              <li>We limit the collection of personal information from minors</li>
              <li>Parents can review and request deletion of their child's information</li>
              <li>We do not knowingly share children's information with third parties</li>
            </ul>
          </CardContent>
        </Card>

        {/* Updates to Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f]">Updates to This Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
              laws. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Posting the updated policy on our website</li>
              <li>Sending an email notification to registered users</li>
              <li>Displaying a prominent notice on our platform</li>
              <li>Providing at least 30 days' notice for significant changes</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-[#1f888f] flex items-center">
              <Mail className="h-6 w-6 mr-2" />
              Contact Us
            </CardTitle>
            <CardDescription>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
                <h3 className="font-semibold text-gray-900 mb-3">Response Time</h3>
                <p className="text-gray-700 mb-3">
                  We will respond to your privacy-related inquiries within 30 days of receipt. For urgent matters,
                  please call or WhatsApp us directly.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-700 text-sm">
                    <strong>Note:</strong> This Privacy Policy is effective as of December 8, 2024, and applies to all
                    information collected by Tutelage.
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
