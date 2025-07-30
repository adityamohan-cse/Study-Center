import { ResourcePage } from "@/components/resource-page"

export default function Class10FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Quadratic Equations for Class 10",
      description: "A course on solving quadratic equations and their applications.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Advanced English Grammar and Composition",
      description: "Master complex grammar rules and essay writing.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Electricity and Magnetism",
      description: "Understand concepts of electricity, circuits, and magnetism.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Web Development with React",
      description: "Learn to build dynamic web applications using React.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Economics Basics",
      description: "An introduction to fundamental economic principles.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 10 Free Courses"
      description="Access free online courses designed for Class 10 students."
      resources={resources}
    />
  )
}
