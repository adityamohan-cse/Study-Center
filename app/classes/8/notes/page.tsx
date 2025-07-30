import { ResourcePage } from "@/components/resource-page"

export default function Class8NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math ",
      description: "Detailed notes  for Class 8.",
      type: "notes",
      link: "/Class-8/Notes/Class-8-Maths-Notes.pdf",
    },
    {
      id: 2,
      title: "Science",
      description: "Notes on agricultural practices and food production.",
      type: "notes",
      link: "/Class-8/Notes/Class-8-Science-Notes.pdf",
    },
    
  ]

  return (
    <ResourcePage
      title="Class 8 Notes"
      description="Access comprehensive notes for all subjects in Class 8."
      resources={resources}
    />
  )
}
