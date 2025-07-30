import { ResourcePage } from "@/components/resource-page"

export default function Class9PYQPage() {
  const resources = [
    {
      id: 1,
      title: "Class 9 Math PYQ - 2023",
      description: "Previous year question paper for Class 9 Math (2023).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 9 English PYQ - 2022",
      description: "Previous year question paper for Class 9 English (2022).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 9 Science PYQ - 2021",
      description: "Previous year question paper for Class 9 Science (2021).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 9 Social Science PYQ - 2020",
      description: "Previous year question paper for Class 9 Social Science (2020).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 9 Computer PYQ - 2019",
      description: "Previous year question paper for Class 9 Computer (2019).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 9 Previous Year Questions (PYQ)"
      description="Practice with previous year question papers for Class 9 exams."
      resources={resources}
    />
  )
}
