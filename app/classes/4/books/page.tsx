import { ResourcePage } from "@/components/resource-page"

export default function Class4BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 4 Math Textbook",
      description: "Comprehensive textbook for 4th grade mathematics.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 4 English Reader",
      description: "Engaging stories and exercises for young readers.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 4 Environmental Studies",
      description: "Introduction to the environment and basic science concepts.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 4 Hindi Vyakaran",
      description: "Basic Hindi grammar and vocabulary.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 4 Computer Basics",
      description: "Introduction to computers for young learners.",
      type: "book",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 4 Books"
      description="Explore a collection of textbooks and reading materials for Class 4."
      resources={resources}
    />
  )
}
