import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Study Center</span>
            </div>
            <p className="text-gray-400">
              Empowering students with free educational resources from Class 6 to BTech CSE.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-400 hover:text-white">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Classes</h3>
            <ul className="space-y-2">

              <li>
                <Link href="/classes" className="text-gray-400 hover:text-white">
                  Class 6-10
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-400 hover:text-white">
                  Class 11-12
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-400 hover:text-white">
                  BTech CSE
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:adityamohan.cse@gmail.com"
                  className="text-gray-400 hover:text-white"
                >
                  adityamohan.cse@gmail.com
                </a>
              </li>
              {/*<li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+91 12345 67890</span>
              </li>*/}
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Study Center. All rights reserved. Made with ❤️ for students.</p>
        </div>
      </div>
    </footer>
  )
}
