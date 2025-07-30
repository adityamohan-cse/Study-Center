import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Heart, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Study Center</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Study Center is a comprehensive educational platform dedicated to providing free, high-quality learning resources
            for students from Class 6 to BTech CSE. Our mission is to democratize education and make quality learning
            materials accessible to everyone.
          </p>
          <Badge variant="secondary" className="mt-6 text-lg px-6 py-3">
            100% Free • Always
          </Badge>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To provide free, comprehensive, and high-quality educational resources that empower students to achieve
                their academic goals and unlock their full potential, regardless of their economic background.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To become the leading platform for free educational resources, creating a world where quality education
                is accessible to every student, fostering a generation of knowledgeable and skilled individuals.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
                <CardTitle>Comprehensive Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Study notes and summaries</li>
                  <li>• Reference books and textbooks</li>
                  <li>• Handwritten notes</li>
                  <li>• Video courses and tutorials</li>
                  <li>• Complete syllabus coverage</li>
                  <li>• Previous year questions</li>
                  <li>• Important exam questions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-green-600 mb-4" />
                <CardTitle>Wide Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Class 6-10 (Secondary)</li>
                  <li>• Class 11-12 (Higher Secondary)</li>
                  <li>• BTech CSE (Engineering)</li>
                  <li>• All major subjects covered</li>
                  <li>• Regular content updates</li>
                  <li>• Quality assured materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-purple-600 mb-4" />
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Expert-reviewed content</li>
                  <li>• Curriculum-aligned materials</li>
                  <li>• Regular quality checks</li>
                  <li>• Student feedback integration</li>
                  <li>• Updated exam patterns</li>
                  <li>• Mobile-friendly formats</li>
                  <li>• Easy download and access</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg p-8 shadow-sm mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-600">
            <p className="text-lg mb-4">
              Study Center was born from a simple yet powerful idea: students should not have to struggle to find quality educational resources. As a student myself, I faced many challenges in locating the right study materials. This experience inspired me to create a platform that brings everything a student needs into one place.
            </p>
            <p className="text-lg mb-4">
              Our small but passionate team of students, educators, and tech enthusiasts came together to solve this problem. We began by gathering and organizing study resources for a few classes and gradually expanded to cover the entire academic journey—from Class 6 to BTech CSE.
            </p>
            <p className="text-lg">
              Today, Study Center supports thousands of students across the country, offering them access to books, notes, previous year papers, handwritten materials, and more. We continue to grow and evolve, guided by our core mission: to make quality educational content easily accessible, all in one place.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Accessibility",
                desc: "Education should be free and accessible to everyone",
              },
              {
                icon: Award,
                title: "Quality",
                desc: "We maintain high standards in all our resources",
              },
              {
                icon: Users,
                title: "Community",
                desc: "Building a supportive learning community",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "Continuously improving our platform and resources",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Students Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Resources Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-blue-100">Classes Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Free Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
