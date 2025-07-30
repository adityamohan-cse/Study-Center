import { ResourcePage } from "@/components/resource-page"

export default function Class6HandwrittenNotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math Concepts - Handwritten",
      description: "Neatly written notes on basic math concepts for Class 6.",
      type: "handwritten-notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English Alphabet Practice",
      description: "Handwritten practice sheets for English alphabets and simple words.",
      type: "handwritten-notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "EVS - My Body Parts",
      description: "Handwritten notes and diagrams on human body parts for EVS.",
      type: "handwritten-notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Hindi Swar & Vyanjan",
      description: "Handwritten notes for Hindi vowels and consonants.",
      type: "handwritten-notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Shapes and Colors Notes",
      description: "Handwritten notes with illustrations of basic shapes and colors.",
      type: "handwritten-notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 6 Handwritten Notes"
      description="Browse handwritten notes for various subjects in Class 6."
      resources={resources}
    />
  )
}
