import { ResourcePage } from "@/components/resource-page"

export default function Class12NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math - Chapter 1: Relations and Functions",
      description: "Detailed notes on relations, functions, and inverse trigonometric functions for Class 12.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English - Chapter 2: Literary Criticism",
      description: "Comprehensive notes on different approaches to literary criticism.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Physics - Chapter 3: Electrostatics",
      description: "Notes on electric charges, fields, and potential.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Chemistry - Chapter 4: Solutions",
      description: "Notes on types of solutions, concentration, and colligative properties.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Biology - Chapter 1: Reproduction in Organisms",
      description: "Notes on modes of reproduction in plants and animals.",
      type: "notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 12 Notes"
      description="Access comprehensive notes for all subjects in Class 12."
      resources={resources}
    />
  )
}
