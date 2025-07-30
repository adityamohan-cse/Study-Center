import { ResourcePage } from "@/components/resource-page"

export default function Class10SyllabusPage() {
  const resources = [
    {
      id: 1,
      title: "Class 10 Math Syllabus",
      description: "Detailed syllabus for Class 10 Mathematics.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 10 English Syllabus",
      description: "Complete syllabus for Class 10 English language and literature.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 10 Science Syllabus",
      description: "Syllabus for Science in Class 10.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 10 Social Science Syllabus",
      description: "Syllabus for Social Science in Class 10.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 10 Computer Syllabus",
      description: "Syllabus for Computer Science in Class 10.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 10 Syllabus"
      description="View the complete syllabus for all subjects in Class 10."
      resources={resources}
    />
  )
}
