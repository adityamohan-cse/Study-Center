import { ResourcePage } from "@/components/resource-page"

export default function Class12PYQPage() {
  const resources = [
    {
      id: 1,
      title: "Class 12 Math PYQ - 2023",
      description: "Previous year question paper for Class 12 Math (2023).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "Class 12 English PYQ - 2022",
      description: "Previous year question paper for Class 12 English (2022).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "Class 12 Physics PYQ - 2021",
      description: "Previous year question paper for Class 12 Physics (2021).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Class 12 Chemistry PYQ - 2020",
      description: "Previous year question paper for Class 12 Chemistry (2020).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "Class 12 Biology PYQ - 2019",
      description: "Previous year question paper for Class 12 Biology (2019).",
      type: "pyq",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 12 Previous Year Questions (PYQ)"
      description="Practice with previous year question papers for Class 12 exams."
      resources={resources}
    />
  )
}
