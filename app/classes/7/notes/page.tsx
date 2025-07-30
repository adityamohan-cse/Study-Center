import { ResourcePage } from "@/components/resource-page"

export default function Class7NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math",
      description: "Detailed notes on rational numbers and their operations for Class 7.",
      type: "notes",
      link: "/Class-7/Notes/Class-7-Maths-Notes.pdf",
    },
    {
      id: 2,
      title: "Science",
      description: "Notes on heat transfer and its effects.",
      type: "notes",
      link: "/Class-7/Notes/Class-7-Science-Notes.pdf",
    },
    
  ] 
  return (
    <ResourcePage
      title="Class 7 Notes"
      description="Access comprehensive notes for all subjects in Class 7."
      resources={resources}
    />
  )
}
