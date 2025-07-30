import { ResourcePage } from "@/components/resource-page"

export default function Class11FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Calculus Introduction for Class 11",
      description: "An introductory course to calculus concepts for Class 11 students.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Advanced English Communication Skills",
      description: "Improve your spoken and written English for academic and professional settings.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Thermodynamics Explained",
      description: "Understand the laws of thermodynamics and their applications.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Data Structures and Algorithms",
      description: "Learn fundamental data structures and algorithms for competitive programming.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Political Science: Indian Constitution",
      description: "A detailed study of the Indian Constitution and its features.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 11 Free Courses"
      description="Access free online courses designed for Class 11 students."
      resources={resources}
    />
  )
}
