import { ResourcePage } from "@/components/resource-page"

export default function Class6FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Algebra Basics for Class 6",
      description: "An introductory course to algebraic concepts for Class 6 students.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "English Grammar Masterclass",
      description: "Comprehensive course on English grammar rules and usage.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Biology Fundamentals",
      description: "Explore basic biological concepts and life processes.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Introduction to Robotics",
      description: "Learn about robotics and build simple robots.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Ancient Civilizations",
      description: "Discover the history and culture of ancient civilizations.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 6 Free Courses"
      description="Access free online courses designed for Class 6 students."
      resources={resources}
    />
  )
}
