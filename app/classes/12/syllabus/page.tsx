import { ResourcePage } from "@/components/resource-page"

export default function Class12SyllabusPage() {
  const resources = [
    {
      id: 1,
      title: "Class 12 Math Syllabus",
      description: "Detailed syllabus for Class 12 Mathematics.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 12 English Syllabus",
      description: "Complete syllabus for Class 12 English language and literature.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 12 Physics Syllabus",
      description: "Syllabus for Physics in Class 12.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 12 Chemistry Syllabus",
      description: "Syllabus for Chemistry in Class 12.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 12 Biology Syllabus",
      description: "Syllabus for Biology in Class 12.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 12 Syllabus"
      description="View the complete syllabus for all subjects in Class 12."
      resources={resources}
    />
  )
}
