import { ResourcePage } from "@/components/resource-page"

export default function Class2BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 2 Math Textbook",
      description: "Comprehensive textbook for 2nd grade mathematics.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 2 English Reader",
      description: "Engaging stories and exercises for young readers.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 2 Environmental Studies",
      description: "Introduction to the environment and basic science concepts.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 2 Hindi Vyakaran",
      description: "Basic Hindi grammar and vocabulary.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 2 Computer Basics",
      description: "Introduction to computers for young learners.",
      type: "book",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 2 Books"
      description="Explore a collection of textbooks and reading materials for Class 2."
      resources={resources}
    />
  )
}
