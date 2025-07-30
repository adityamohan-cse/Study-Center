import { ResourcePage } from "@/components/resource-page"

export default function Class11BooksPage() {
  const resources = [
    {
      id: 1,
      title: "Class 11 Math Textbook",
      description: "Comprehensive textbook for 11th grade mathematics.",
      type: "book",
      link: "/Class-11/Books/Maths-11th-NCERT.pdf",
    },
   
    {
      id: 2,
      title: "Class 11 Physics Textbook",
      description: "Introduction to physics concepts for Class 11.",
      type: "book",
      link: "/Class-11/Books/PHY-11-FULL.pdf",
    },
    {
      id: 3,
      title: "Class 11 Chemistry Textbook",
      description: "Introduction to chemistry concepts for Class 11.",
      type: "book",
      link: "/Class-11/Books/CHEM-11TH-FULL.pdf",
    },
    {
      id: 4,
      title: "Class 11 Biology Textbook",
      description: "Introduction to biology concepts for Class 11.",
      type: "book",
      link: "/Class-11/Books/BIOLOGY-11TH-NCERT.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 11 Books"
      description="Explore a collection of textbooks and reading materials for Class 11."
      resources={resources}
    />
  )
}
