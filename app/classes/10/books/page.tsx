import { ResourcePage } from "@/components/resource-page"

export default function Class10BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 10 Math Textbook",
      description: "Comprehensive textbook for 10th grade mathematics.",
      type: "book",
      link: "/Class-10/Books/Class-10-Math-Textbook-NCERT.pdf",
    },
    
    {
      id: 2,
      title: "Class 10 Science Textbook",
      description: "Introduction to science concepts for Class 10.",
      type: "book",
      link: "/Class-10/Books/NCERT-CLASS-10-SCIENCE.pdf",
    },
    {
      id: 3,
      title: "Class 10 History Textbook",
      description: "History, Geography, and Civics for Class 10.",
      type: "book",
      link: "/Class-10/Books/NCERT-CLASS-10-History.pdf",
    },
    {
      id: 4,
      title: "Class 10 Geography Textbook",
      description: "Introduction to geography concepts for Class 10.",
      type: "book",
      link: "/Class-10/Books/NCERT-CLASS-10-Geography.pdf",
    },
    {
      id: 5,
      title: "Class 10 Economics Textbook",
      description: "Introduction to economics concepts for Class 10.",
      type: "book",
      link: "/Class-10/Books/NCERT-CLASS-10-Economics.pdf",
    },
    {
      id: 6,
      title: "Class 10 Political Science Textbook",
      description: "Introduction to political science concepts for Class 10.",
      type: "book",
      link: "/Class-10/Books/NCERT-CLASS-10-Political Science.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 10 Books"
      description="Explore a collection of textbooks and reading materials for Class 10."
      resources={resources}
    />
  )
}
