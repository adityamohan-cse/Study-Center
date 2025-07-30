import { ResourcePage } from "@/components/resource-page"

export default function Class8BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 8 Math Textbook",
      description: "Comprehensive textbook for 8th grade mathematics.",
      type: "book",
      link: "/Class-8/Books/class-8-maths-textbook-NCERT.pdf",
    },
    
    {
      id: 2,
      title: "Class 8 Science Textbook",
      description: "Introduction to science concepts for Class 8.",
      type: "book",
      link: "/Class-8/Books/Class-8-Science-textbook-NCERT.pdf",
    },
    {
      id: 3,
      title: "Class 8 Social Science",
      description: "History, Geography, and Civics for Class 8.",
      type: "book",
      link: "/Class-8/Books/Class-8-social-science-textbook-NCERT.pdf",
    },
   
  ]

  return (
    <ResourcePage
      title="Class 8 Books"
      description="Explore a collection of textbooks and reading materials for Class 8."
      resources={resources}
    />
  )
}
