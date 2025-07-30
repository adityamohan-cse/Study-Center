import { ResourcePage } from "@/components/resource-page"

export default function Class4NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math - Chapter 1: Fractions",
      description: "Detailed notes on fractions and decimals for Class 4.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English - Chapter 2: Pronouns & Prepositions",
      description: "Comprehensive notes on English pronouns and prepositions.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "EVS - Chapter 3: Water Resources",
      description: "Notes on water cycle and conservation.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Hindi - Chapter 4: Letter Writing",
      description: "Notes explaining how to write formal and informal Hindi letters.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Computer - Chapter 1: Introduction to Internet",
      description: "Notes on basic internet concepts and safe browsing.",
      type: "notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 4 Notes"
      description="Access comprehensive notes for all subjects in Class 4."
      resources={resources}
    />
  )
}
