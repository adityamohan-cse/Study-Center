import { ResourcePage } from "@/components/resource-page"

export default function Class8SyllabusPage() {
  const resources = [
    {
      id: 1,
      title: "Class 8 Math Syllabus",
      description: "Detailed syllabus for Class 8 Mathematics.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 8 English Syllabus",
      description: "Complete syllabus for Class 8 English language and literature.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 8 Science Syllabus",
      description: "Syllabus for Science in Class 8.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 8 Social Science Syllabus",
      description: "Syllabus for Social Science in Class 8.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 8 Computer Syllabus",
      description: "Syllabus for Computer Science in Class 8.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 8 Syllabus"
      description="View the complete syllabus for all subjects in Class 8."
      resources={resources}
    />
  )
}
