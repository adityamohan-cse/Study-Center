import { ResourcePage } from "@/components/resource-page"

export default function Class9FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Trigonometry Basics for Class 9",
      description: "An introductory course to trigonometric concepts for Class 9 students.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Advanced English Literature",
      description: "Explore classic literature and analytical skills.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Chemical Reactions and Equations",
      description: "Understand different types of chemical reactions and balancing equations.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Java Programming for Beginners",
      description: "Learn the fundamentals of Java programming.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Indian Freedom Struggle",
      description: "A detailed study of India's struggle for independence.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 9 Free Courses"
      description="Access free online courses designed for Class 9 students."
      resources={resources}
    />
  )
}
