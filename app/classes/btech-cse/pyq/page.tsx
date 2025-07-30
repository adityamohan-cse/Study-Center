import { ResourcePage } from "@/components/resource-page"

export default function BTechCSEPYQPage() {
  const resources = [
    {
      id: 1,
      title: "DSA PYQ - 2023",
      description: "Previous year question paper for Data Structures and Algorithms (2023).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "OS PYQ - 2022",
      description: "Previous year question paper for Operating Systems (2022).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "DBMS PYQ - 2021",
      description: "Previous year question paper for Database Management Systems (2021).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "CN PYQ - 2020",
      description: "Previous year question paper for Computer Networks (2020).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "SE PYQ - 2019",
      description: "Previous year question paper for Software Engineering (2019).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="B.Tech CSE Previous Year Questions (PYQ)"
      description="Practice with previous year question papers for B.Tech CSE exams."
      resources={resources}
    />
  )
}
