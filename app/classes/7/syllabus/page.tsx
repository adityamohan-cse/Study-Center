import { ResourcePage } from "@/components/resource-page"

export default function Class7SyllabusPage() {
  const resources = [
    {
      id: 1,
      title: "Class 7 Math Syllabus",
      description: "Detailed syllabus for Class 7 Mathematics.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 7 English Syllabus",
      description: "Complete syllabus for Class 7 English language and literature.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 7 Science Syllabus",
      description: "Syllabus for Science in Class 7.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 7 Social Science Syllabus",
      description: "Syllabus for Social Science in Class 7.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 7 Computer Syllabus",
      description: "Syllabus for Computer Science in Class 7.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 7 Syllabus"
      description="View the complete syllabus for all subjects in Class 7."
      resources={resources}
    />
  )
}
