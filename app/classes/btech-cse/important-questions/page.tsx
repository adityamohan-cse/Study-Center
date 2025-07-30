import { ResourcePage } from "@/components/resource-page"

export default function BTechCSEImportantQuestionsPage() {
  const resources = [
    {
      id: 1,
      title: "DSA - Top Interview Questions",
      description: "Most frequently asked Data Structures and Algorithms questions in interviews.",
      type: "important-questions",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "OS - Critical Concepts",
      description: "Important questions covering critical concepts in Operating Systems.",
      type: "important-questions",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "DBMS - Normalization & Transactions",
      description: "Crucial questions on database normalization and transaction management.",
      type: "important-questions",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "CN - Network Security Questions",
      description: "Important questions related to network security and cryptography.",
      type: "important-questions",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "SE - Agile vs Waterfall",
      description: "Comparative questions on Agile and Waterfall software development methodologies.",
      type: "important-questions",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="B.Tech CSE Important Questions"
      description="Find a curated list of important questions for B.Tech CSE subjects."
      resources={resources}
    />
  )
}
