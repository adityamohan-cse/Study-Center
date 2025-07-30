import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Award, Download } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Study Center - Free Learning Platform</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access comprehensive educational resources for Class 6-12 and BTech CSE. Everything you need to excel in
            your studies, completely free.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/classes">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Classes
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Study Center?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Comprehensive Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Notes, books, handwritten notes, courses, syllabus, PYQs, and important questions for all classes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Class 6 to BTech</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete coverage from Class 6 to advanced BTech CSE curriculum.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>100% Free</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All resources are completely free to access and download. No hidden charges.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              
              {
                range: "Class 6-10",
                desc: "Secondary Education",
                color: "bg-blue-500",
                hashId: "class-group-secondary",
              }, // Updated hashId
              {
                range: "Class 11-12",
                desc: "Higher Secondary",
                color: "bg-green-500",
                hashId: "class-group-higher-secondary", // Updated hashId
              },
              { range: "BTech CSE", desc: "Engineering", color: "bg-purple-500", hashId: "class-group-btech-cse" }, // Updated hashId
            ].map((item, index) => (
              <Link key={index} href={`/classes#${item.hashId}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className={`h-16 w-16 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-center">{item.range}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{item.desc}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
