import { ResourcePage } from "@/components/resource-page"

export default function Class5NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math - Chapter 1: Geometry",
      description: "Detailed notes on basic geometry concepts for Class 5.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English - Chapter 2: Tenses",
      description: "Comprehensive notes on English verb tenses.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "EVS - Chapter 3: Natural Disasters",
      description: "Notes on different types of natural disasters and safety measures.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Hindi - Chapter 4: Essay Writing",
      description: "Notes explaining how to write essays in Hindi.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Computer - Chapter 1: MS Word Basics",
      description: "Notes on basic features of Microsoft Word.",
      type: "notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 5 Notes"
      description="Access comprehensive notes for all subjects in Class 5."
      resources={resources}
    />
  )
}
