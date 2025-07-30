import { ResourcePage } from "@/components/resource-page"

export default function Class3NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math - Chapter 1: Multiplication & Division",
      description: "Detailed notes on multiplication and division for Class 3.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English - Chapter 2: Adjectives & Adverbs",
      description: "Comprehensive notes on English adjectives and adverbs.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "EVS - Chapter 3: Our Community",
      description: "Notes on community helpers and services.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Hindi - Chapter 4: Paragraph Writing",
      description: "Notes explaining how to write simple Hindi paragraphs.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Computer - Chapter 1: Introduction to MS Paint",
      description: "Notes on using MS Paint for basic drawing.",
      type: "notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 3 Notes"
      description="Access comprehensive notes for all subjects in Class 3."
      resources={resources}
    />
  )
}
