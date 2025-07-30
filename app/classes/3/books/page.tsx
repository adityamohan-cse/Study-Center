import { ResourcePage } from "@/components/resource-page"

export default function Class3BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 3 Math Textbook",
      description: "Comprehensive textbook for 3rd grade mathematics.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 3 English Reader",
      description: "Engaging stories and exercises for young readers.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 3 Environmental Studies",
      description: "Introduction to the environment and basic science concepts.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 3 Hindi Vyakaran",
      description: "Basic Hindi grammar and vocabulary.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 3 Computer Basics",
      description: "Introduction to computers for young learners.",
      type: "book",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 3 Books"
      description="Explore a collection of textbooks and reading materials for Class 3."
      resources={resources}
    />
  )
}
