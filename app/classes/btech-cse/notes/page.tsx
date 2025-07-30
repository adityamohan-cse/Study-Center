import { ResourcePage } from "@/components/resource-page"

export default function BTechCSENotesPage() {
  const resources = [
    {
      id: 1,
      title: "DSA - Linked Lists",
      description: "Detailed notes on linked lists, types, and operations.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "OS - Process Management",
      description: "Comprehensive notes on process scheduling and synchronization.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "DBMS - ER Model",
      description: "Notes on Entity-Relationship (ER) modeling for database design.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "CN - OSI Model",
      description: "Notes on the OSI model and its layers.",
      type: "notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "SE - Software Testing",
      description: "Notes on different types of software testing and methodologies.",
      type: "notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="B.Tech CSE Notes"
      description="Access comprehensive notes for various B.Tech Computer Science Engineering subjects."
      resources={resources}
    />
  )
}
