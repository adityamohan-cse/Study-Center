import { ResourcePage } from "@/components/resource-page"

export default function Class3FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Intermediate Math for Kids",
      description: "An interactive course to make math enjoyable for Class 3 students.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Grammar and Writing Skills",
      description: "Learn grammar and improve writing skills with this engaging course.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Science Experiments for Kids",
      description: "Discover basic science concepts through fun experiments.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Scratch Programming for Beginners",
      description: "A creative course to teach fundamental programming concepts using Scratch.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "World History for Young Learners",
      description: "Explore major historical events and figures in this introductory course.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 3 Free Courses"
      description="Access free online courses designed for Class 3 students."
      resources={resources}
    />
  )
}
