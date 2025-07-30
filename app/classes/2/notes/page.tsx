import { ResourcePage } from "@/components/resource-page"

export default function Class2NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math - Chapter 1: Addition & Subtraction",
      description: "Detailed notes on addition and subtraction for Class 2.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English - Chapter 2: Nouns & Verbs",
      description: "Comprehensive notes on English nouns and verbs.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "EVS - Chapter 3: Our Family",
      description: "Notes on family structures and relationships.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Hindi - Chapter 4: Simple Sentences",
      description: "Notes explaining how to form simple Hindi sentences.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Computer - Chapter 1: Using a Mouse & Keyboard",
      description: "Notes on basic computer input devices.",
      type: "notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 2 Notes"
      description="Access comprehensive notes for all subjects in Class 2."
      resources={resources}
    />
  )
}
