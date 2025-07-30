import { ResourcePage } from "@/components/resource-page"

export default function Class6BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 6 Math Textbook",
      description: "Comprehensive textbook for 6th grade mathematics.",
      type: "book",
      link: "/Class-6/Book/Class-6-Maths-Textbook-NCERT.pdf",
    },
    {
      id: 2,
      title: "Class 6 Science Textbook",
      description: "Introduction to science concepts for Class 6.",
      type: "book",
      link: "/Class-6/Book/Class-6-Science-Textbook-NCERT.pdf",
    },
    {
      id: 3,
      title: "Class 6 Social Science",
      description: "History, Geography, and Civics for Class 6.",
      type: "book",
      link: "/Class-6/Book/Class-6-Social-Science-Textbook-NCERT.pdf",
    },
    {
      id: 4,
      title: "Class 6 English Both Textbook",
      description: "Comprehensive textbook for 6th grade English.",
      type: "book",
      link: "/Class-6/Book/Class-6-English-Textbook-NCERT.pdf",
    },
   
  ]

  return (
    <ResourcePage
      title="Class 6 Books"
      description="Explore a collection of textbooks and reading materials for Class 6."
      resources={resources}
    />
  )
}
