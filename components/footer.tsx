import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle, Youtube, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/tutelage-logo.png"
                alt="Tutelage Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <Image src="/images/title.png" alt="Tutelage" width={120} height={32} className="h-8 w-auto" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students with comprehensive CBSE resources for Computer Science, Informatics Practices, IT, and
              AI subjects. Expert online tuitions for Class 11 and 12.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.youtube.com/@pythontyro4579"
                target="_blank"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tuition" className="text-gray-300 hover:text-white transition-colors">
                  Online Tuition
                </Link>
              </li>
              <li>
                <Link href="/ai" className="text-gray-300 hover:text-white transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/mcqs" className="text-gray-300 hover:text-white transition-colors">
                  MCQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subjects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/computer-science/class-11" className="text-gray-300 hover:text-white transition-colors">
                  Computer Science Class 11
                </Link>
              </li>
              <li>
                <Link href="/computer-science/class-12" className="text-gray-300 hover:text-white transition-colors">
                  Computer Science Class 12
                </Link>
              </li>
              <li>
                <Link
                  href="/informatics-practices/class-11"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Informatics Practices Class 11
                </Link>
              </li>
              <li>
                <Link
                  href="/informatics-practices/class-12"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Informatics Practices Class 12
                </Link>
              </li>
              <li>
                <Link href="/computer-science/practical" className="text-gray-300 hover:text-white transition-colors">
                  Practical Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#1f888f]" />
                <span className="text-gray-300">+91 8428233960</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={16} className="text-[#b80877]" />
                <span className="text-gray-300">+91 9600856026</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#1f888f]" />
                <span className="text-gray-300">pythontyro0341@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#b80877] mt-1" />
                <div className="text-gray-300">
                  <p>Thudiyalur, Coimbatore</p>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Tutelage. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
