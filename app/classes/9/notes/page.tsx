import { ResourcePage } from "@/components/resource-page"

export default function Class9NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math - Chapter 1: Number Systems",
      description: "Detailed notes on number systems for Class 9.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English - Chapter 2: Modals",
      description: "Comprehensive notes on modal verbs in English grammar.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Science - Chapter 3: Matter in Our Surroundings",
      description: "Notes on states of matter and their properties.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Social Science - Chapter 4: French Revolution",
      description: "Notes on the causes and impact of the French Revolution.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Computer - Chapter 1: Introduction to Python",
      description: "Notes on basic Python programming concepts.",
      type: "notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 9 Notes"
      description="Access comprehensive notes for all subjects in Class 9."
      resources={resources}
    />
  )
}
