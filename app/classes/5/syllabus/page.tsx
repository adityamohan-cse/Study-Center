import { ResourcePage } from "@/components/resource-page"

export default function Class5SyllabusPage() {
  const resources = [
    {
      id: 1,
      title: "Class 5 Math Syllabus",
      description: "Detailed syllabus for Class 5 Mathematics.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 5 English Syllabus",
      description: "Complete syllabus for Class 5 English language and literature.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 5 EVS Syllabus",
      description: "Syllabus for Environmental Studies in Class 5.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 5 Hindi Syllabus",
      description: "Syllabus for Hindi language in Class 5.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 5 Computer Syllabus",
      description: "Syllabus for basic computer education in Class 5.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 5 Syllabus"
      description="View the complete syllabus for all subjects in Class 5."
      resources={resources}
    />
  )
}
