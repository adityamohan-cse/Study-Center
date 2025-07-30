import { ResourcePage } from "@/components/resource-page"

export default function BTechCSEHandwrittenNotesPage() {
  const resources = [
    {
      id: 1,
      title: "Data Structures - Handwritten",
      description: "Handwritten notes on various data structures like arrays, linked lists, trees.",
      type: "handwritten-notes",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Operating Systems - Key Concepts",
      description: "Handwritten notes summarizing important concepts in Operating Systems.",
      type: "handwritten-notes",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "DBMS - SQL Queries",
      description: "Handwritten examples and explanations of complex SQL queries.",
      type: "handwritten-notes",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Computer Networks - Protocols",
      description: "Handwritten diagrams and notes on network protocols (TCP/IP, UDP, etc.).",
      type: "handwritten-notes",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Software Engineering - SDLC Models",
      description: "Handwritten notes on different Software Development Life Cycle models.",
      type: "handwritten-notes",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="B.Tech CSE Handwritten Notes"
      description="Browse handwritten notes for various B.Tech CSE subjects."
      resources={resources}
    />
  )
}
