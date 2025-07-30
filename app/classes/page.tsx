import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, Award } from "lucide-react"
import Link from "next/link"

const classGroups = [
 
  {
    id: "secondary",
    title: "Secondary Classes (6-10)",
    description: "Core subjects and skill development",
    classes: ["6", "7", "8", "9", "10"],
    color: "bg-blue-600",
    icon: Users,
    hashId: "class-group-secondary", // Updated hashId
  },
  {
    id: "higher-secondary",
    title: "Higher Secondary (11-12)",
    description: "Advanced concepts and board preparation",
    classes: ["11", "12"],
    color: "bg-green-600",
    icon: Award,
    hashId: "class-group-higher-secondary", // Updated hashId
  },
  {
    id: "btech",
    title: "BTech CSE",
    description: "Computer Science Engineering curriculum",
    classes: ["BTech CSE"],
    color: "bg-purple-600",
    icon: GraduationCap,
    hashId: "class-group-btech-cse", // Updated hashId
  },
]

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Class</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your class to access comprehensive study materials, notes, books, and resources.
          </p>
        </div>

        <div className="grid gap-8">
          {classGroups.map((group) => {
            const Icon = group.icon
            return (
              <Card key={group.id} id={group.hashId} className="overflow-hidden scroll-mt-16">
                {" "}
                {/* Added scroll-mt-16 */}
                <CardHeader className={`${group.color} text-white p-6 rounded-t-lg`}>
                  <div className="flex items-center space-x-4">
                    <Icon className="h-10 w-10" />
                    <div>
                      <CardTitle className="text-3xl font-bold">{group.title}</CardTitle>
                      <CardDescription className="text-gray-200 text-lg">{group.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {group.classes.map((classNum) => (
                      <Link key={classNum} href={`/classes/${classNum.toLowerCase().replace(" ", "-")}`}>
                        <Button
                          variant="outline"
                          className="w-full h-16 text-lg font-semibold hover:bg-gray-100 border-2 border-gray-200 bg-white text-gray-800 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          {classNum === "BTech CSE" ? "BTech CSE" : `Class ${classNum}`}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
