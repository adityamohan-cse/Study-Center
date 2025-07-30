import { ResourcePage } from "@/components/resource-page"

export default function Class8FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Linear Equations for Class 8",
      description: "A course on solving linear equations and inequalities.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Poetry and Literary Devices",
      description: "Explore different forms of poetry and literary techniques.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Physics: Force and Pressure",
      description: "Understand concepts of force, pressure, and their applications.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Introduction to Data Science",
      description: "Learn basic data science concepts and tools.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "World Wars History",
      description: "A detailed look into the causes and effects of World Wars.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 8 Free Courses"
      description="Access free online courses designed for Class 8 students."
      resources={resources}
    />
  )
}
