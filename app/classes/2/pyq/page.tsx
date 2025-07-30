import { ResourcePage } from "@/components/resource-page"

export default function Class2PYQPage() {
  const resources = [
    {
      id: 1,
      title: "Class 2 Math PYQ - 2023",
      description: "Previous year question paper for Class 2 Math (2023).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 2 English PYQ - 2022",
      description: "Previous year question paper for Class 2 English (2022).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 2 EVS PYQ - 2021",
      description: "Previous year question paper for Class 2 EVS (2021).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 2 Hindi PYQ - 2020",
      description: "Previous year question paper for Class 2 Hindi (2020).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 2 Computer PYQ - 2019",
      description: "Previous year question paper for Class 2 Computer (2019).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 2 Previous Year Questions (PYQ)"
      description="Practice with previous year question papers for Class 2 exams."
      resources={resources}
    />
  )
}
