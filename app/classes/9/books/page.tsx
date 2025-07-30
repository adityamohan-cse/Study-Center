import { ResourcePage } from "@/components/resource-page"

export default function Class9BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 9 Math Textbook",
      description: "Comprehensive textbook for 9th grade mathematics.",
      type: "book",
      link: "/Class-9/Books/Class-9 Maths-Textbook-NCERT.pdf",
    },
    {
      id: 2,
      title: "Class 9 Civics Textbook",
      description: "Civics",
      type: "book",
      link: "/Class-9/Books/Class-9-Civics-Textbook-NCERT.pdf",
    },
    {
      id: 3,
      title: "Class 9 Science Textbook",
      description: "Introduction to science concepts for Class 9.",
      type: "book",
      link: "/Class-9/Books/Class-9-Scince-Textbook-NCERT.pdf",
    },
    {
      id: 4,
      title: "Class 9 History Textbook",
      description: "History textbook covering key events and figures.",
      type: "book",
      link: "/Class-9/Books/Class-9 History-Textbook-NCERT.pdf",
    },
    {
      id: 5,
      title: "Class 9 Economics Textbook",
      description: "Introduction to economics for Class 9.",
      type: "book",
      link: "/Class-9/Books/Class-9-Economics-Textbook-NCERT.pdf",
    },
    {
      id: 6,
      title: "Class 9 Geography Textbook",
      description: "Introduction to geography for Class 9.",
      type: "book",
      link: "/Class-9/Books/Class-9-Geography-Textbook-NCERT.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 9 Books"
      description="Explore a collection of textbooks and reading materials for Class 9."
      resources={resources}
    />
  )
}
