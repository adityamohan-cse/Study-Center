import { ResourcePage } from "@/components/resource-page"

export default function BTechCSEBooksPage() {
  const resources = [
    {
      id: 1,
      title: "C Language Programming",
      description: "Textbook covering fundamental concepts of C programming.",
      type: "book",
      link: "/C Book.pdf",
    },
    {
      id: 2,
      title: "Operating Systems Concepts",
      description: "Comprehensive guide to operating system principles.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Database Management Systems",
      description: "Introduction to database design and management.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Computer Networks",
      description: "Fundamentals of computer networking and protocols.",
      type: "book",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Software Engineering",
      description: "Principles and practices of software development.",
      type: "book",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="B.Tech CSE Books"
      description="Explore a collection of essential textbooks for B.Tech Computer Science Engineering."
      resources={resources}
    />
  )
}
