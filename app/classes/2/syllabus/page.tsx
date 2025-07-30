import { ResourcePage } from "@/components/resource-page"

export default function Class2SyllabusPage() {
  const resources = [
    {
      id: 1,
      title: "Class 2 Math Syllabus",
      description: "Detailed syllabus for Class 2 Mathematics.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 2 English Syllabus",
      description: "Complete syllabus for Class 2 English language and literature.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 2 EVS Syllabus",
      description: "Syllabus for Environmental Studies in Class 2.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 2 Hindi Syllabus",
      description: "Syllabus for Hindi language in Class 2.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 2 Computer Syllabus",
      description: "Syllabus for basic computer education in Class 2.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 2 Syllabus"
      description="View the complete syllabus for all subjects in Class 2."
      resources={resources}
    />
  )
}
