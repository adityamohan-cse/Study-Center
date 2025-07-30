import { ResourcePage } from "@/components/resource-page"

export default function Class11NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math - Chapter 1: Sets",
      description: "Detailed notes on sets and their operations for Class 11.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English - Chapter 2: Advanced Writing Skills",
      description: "Comprehensive notes on essay writing, report writing, etc.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Physics - Chapter 3: Units and Measurements",
      description: "Notes on physical quantities, units, and dimensional analysis.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Chemistry - Chapter 4: Some Basic Concepts of Chemistry",
      description: "Notes on atomic mass, molecular mass, and mole concept.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Biology - Chapter 1: The Living World",
      description: "Notes on characteristics of living organisms and biodiversity.",
      type: "notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 11 Notes"
      description="Access comprehensive notes for all subjects in Class 11."
      resources={resources}
    />
  )
}
