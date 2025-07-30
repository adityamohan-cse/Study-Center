import { ResourcePage } from "@/components/resource-page"

export default function Class1PYQPage() {
  const resources = [
    {
      id: 1,
      title: "Class 1 Math PYQ - 2023",
      description: "Previous year question paper for Class 1 Math (2023).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 1 English PYQ - 2022",
      description: "Previous year question paper for Class 1 English (2022).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 1 EVS PYQ - 2021",
      description: "Previous year question paper for Class 1 EVS (2021).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 1 Hindi PYQ - 2020",
      description: "Previous year question paper for Class 1 Hindi (2020).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 1 Computer PYQ - 2019",
      description: "Previous year question paper for Class 1 Computer (2019).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 1 Previous Year Questions (PYQ)"
      description="Practice with previous year question papers for Class 1 exams."
      resources={resources}
    />
  )
}
