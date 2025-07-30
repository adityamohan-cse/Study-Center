import { ResourcePage } from "@/components/resource-page"

export default function Class10NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math - Chapter 1: Real Numbers",
      description: "Detailed notes on real numbers and Euclidean division lemma for Class 10.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English - Chapter 2: Clauses",
      description: "Comprehensive notes on different types of clauses in English grammar.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Science - Chapter 3: Chemical Reactions and Equations",
      description: "Notes on types of chemical reactions and balancing equations.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Social Science - Chapter 4: Nationalism in India",
      description: "Notes on the rise of nationalism and the freedom movement in India.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Computer - Chapter 1: Cyber Ethics",
      description: "Notes on ethical practices and safety in the digital world.",
      type: "notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 10 Notes"
      description="Access comprehensive notes for all subjects in Class 10."
      resources={resources}
    />
  )
}
