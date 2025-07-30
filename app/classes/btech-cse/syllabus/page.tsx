import { ResourcePage } from "@/components/resource-page"

export default function BTechCSESyllabusPage() {
  const resources = [
    {
      id: 1,
      title: "B.Tech CSE 1st Year Syllabus",
      description: "Detailed syllabus for the first year of B.Tech Computer Science Engineering.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "B.Tech CSE 2nd Year Syllabus",
      description: "Detailed syllabus for the second year of B.Tech Computer Science Engineering.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "B.Tech CSE 3rd Year Syllabus",
      description: "Detailed syllabus for the third year of B.Tech Computer Science Engineering.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "B.Tech CSE 4th Year Syllabus",
      description: "Detailed syllabus for the fourth year of B.Tech Computer Science Engineering.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "B.Tech CSE Electives List",
      description: "List of elective courses available for B.Tech CSE students.",
      type: "syllabus",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="B.Tech CSE Syllabus"
      description="View the complete syllabus for all years and subjects in B.Tech Computer Science Engineering."
      resources={resources}
    />
  )
}
