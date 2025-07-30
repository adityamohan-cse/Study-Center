import { ResourcePage } from "@/components/resource-page"

export default function Class4SyllabusPage() {
  const resources = [
    {
      id: 1,
      title: "Class 4 Math Syllabus",
      description: "Detailed syllabus for Class 4 Mathematics.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 4 English Syllabus",
      description: "Complete syllabus for Class 4 English language and literature.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 4 EVS Syllabus",
      description: "Syllabus for Environmental Studies in Class 4.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 4 Hindi Syllabus",
      description: "Syllabus for Hindi language in Class 4.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 4 Computer Syllabus",
      description: "Syllabus for basic computer education in Class 4.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 4 Syllabus"
      description="View the complete syllabus for all subjects in Class 4."
      resources={resources}
    />
  )
}
