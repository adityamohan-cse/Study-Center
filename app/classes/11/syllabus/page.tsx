import { ResourcePage } from "@/components/resource-page"

export default function Class11SyllabusPage() {
  const resources = [
    {
      id: 1,
      title: "Class 11 Math Syllabus",
      description: "Detailed syllabus for Class 11 Mathematics.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 11 English Syllabus",
      description: "Complete syllabus for Class 11 English language and literature.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 11 Physics Syllabus",
      description: "Syllabus for Physics in Class 11.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 11 Chemistry Syllabus",
      description: "Syllabus for Chemistry in Class 11.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 11 Biology Syllabus",
      description: "Syllabus for Biology in Class 11.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 11 Syllabus"
      description="View the complete syllabus for all subjects in Class 11."
      resources={resources}
    />
  )
}
