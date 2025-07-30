import { ResourcePage } from "@/components/resource-page"

export default function Class12FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Advanced Calculus for Class 12",
      description: "A comprehensive course on advanced calculus topics for Class 12 students.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "IELTS Preparation Course",
      description: "Prepare for the IELTS exam with this comprehensive course.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Quantum Physics Explained",
      description: "An introduction to the fascinating world of quantum mechanics.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      description: "Learn the basics of machine learning and its applications.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Sociology: Indian Society",
      description: "A study of the structure and dynamics of Indian society.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 12 Free Courses"
      description="Access free online courses designed for Class 12 students."
      resources={resources}
    />
  )
}
