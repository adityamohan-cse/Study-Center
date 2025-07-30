import { ResourcePage } from "@/components/resource-page"

export default function Class6NotesPage() {
  const resources = [
    {
      id: 1,
      title: "Math",
      description: "Detailed notes of Maths for Class 6.",
      type: "notes",
      link: "/Class-6/Notes/Class-6-Maths-Notes.pdf",
    },
    {
      id: 3,
      title: "Science",
      description: "Notes of Science for Class 6.",
      type: "notes",
      link: "/Class-6/Notes/Class-6-SCI-Notes.pdf",
    },
    {
      id: 4,
      title: "Geography",
      description: "Notes of Geography for Class 6.",
      type: "notes",
      link: "/Class-6/Notes/Class-6-Geo-Notes.pdf",
    },
    
    {
      id: 5,
      title: "History",
      description: "Notes of History for Class 6.",
      type: "notes",
      link: "/Class-6/Notes/Class-6-His-Notes.pdf",
    },
   
    {
      id: 6,
      title: "Civics",
      description: "Notes of Civics for Class 6.",
      type: "notes",
      link: "/Class-6/Notes/Class-6-Civics-Notes.pdf",
    },
   
   
  ]

  return (
    <ResourcePage
      title="Class 6 Notes"
      description="Access comprehensive notes for all subjects in Class 6."
      resources={resources}
    />
  )
}
