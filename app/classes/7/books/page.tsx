import { ResourcePage } from "@/components/resource-page"

export default function Class7BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 7 Math Textbook",
      description: "Comprehensive textbook for 7th grade mathematics.",
      type: "book",
      link: "/Class-7/Books/Class-7-Maths-Textbook-NCERT.pdf",
    },
    {
      id: 2,
      title: "Class 7 Science Textbook",
      description: "Introduction to science concepts for Class 7.",
      type: "book",
      link: "/Class-7/Books/Class-7-science-textbook-NCERT.pdf",
    },
    {
      id: 3,
      title: "Class 7 Social Science Textbook",
      description: "Introduction to social science concepts for Class 7.",
      type: "book",
      link: "/Class-7/Books/Class-7-Social-science-Textbook-NCERT.pdf",
    },
    
  ]

  return (
    <ResourcePage
      title="Class 7 Books"
      description="Explore a collection of textbooks and reading materials for Class 7."
      resources={resources}
    />
  )
}
