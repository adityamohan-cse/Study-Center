import { ResourcePage } from "@/components/resource-page"

export default function Class1NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math - Chapter 1: Numbers",
      description: "Detailed notes on numbers and counting for Class 1.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English - Chapter 2: Vowels and Consonants",
      description: "Comprehensive notes on English vowels and consonants.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "EVS - Chapter 3: Plants Around Us",
      description: "Notes on different types of plants and their uses.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Hindi - Chapter 4: Matras",
      description: "Notes explaining Hindi matras and their usage.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Computer - Chapter 1: Parts of a Computer",
      description: "Notes on the basic components of a computer system.",
      type: "notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 1 Notes"
      description="Access comprehensive notes for all subjects in Class 1."
      resources={resources}
    />
  )
}
