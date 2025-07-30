import { ResourcePage } from "@/components/resource-page"

export default function Class12BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 12 Math Textbook",
      description: "Comprehensive textbook for 12th grade mathematics.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 12 English Reader",
      description: "Engaging stories and exercises for young readers.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 12 Physics Textbook",
      description: "Introduction to physics concepts for Class 12.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 12 Chemistry Textbook",
      description: "Introduction to chemistry concepts for Class 12.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 12 Biology Textbook",
      description: "Introduction to biology concepts for Class 12.",
      type: "book",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 12 Books"
      description="Explore a collection of textbooks and reading materials for Class 12."
      resources={resources}
    />
  )
}
