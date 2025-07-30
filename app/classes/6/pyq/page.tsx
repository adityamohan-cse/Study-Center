import { ResourcePage } from "@/components/resource-page"

export default function Class6PYQPage() {
  const resources = [
    {
      id: 1,
      title: "Class 6 Math PYQ - 2023",
      description: "Previous year question paper for Class 6 Math (2023).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 6 English PYQ - 2022",
      description: "Previous year question paper for Class 6 English (2022).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 6 Science PYQ - 2021",
      description: "Previous year question paper for Class 6 Science (2021).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 6 Social Science PYQ - 2020",
      description: "Previous year question paper for Class 6 Social Science (2020).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 6 Computer PYQ - 2019",
      description: "Previous year question paper for Class 6 Computer (2019).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 6 Previous Year Questions (PYQ)"
      description="Practice with previous year question papers for Class 6 exams."
      resources={resources}
    />
  )
}
