import { ResourcePage } from "@/components/resource-page"

export default function Class1BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 1 Math Textbook",
      description: "Comprehensive textbook for 1st grade mathematics.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 1 English Reader",
      description: "Engaging stories and exercises for young readers.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 1 Environmental Studies",
      description: "Introduction to the environment and basic science concepts.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 1 Hindi Vyakaran",
      description: "Basic Hindi grammar and vocabulary.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 1 Computer Basics",
      description: "Introduction to computers for young learners.",
      type: "book",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 1 Books"
      description="Explore a collection of textbooks and reading materials for Class 1."
      resources={resources}
    />
  )
}
