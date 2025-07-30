import { ResourcePage } from "@/components/resource-page"

export default function Class4FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Advanced Math for Class 4",
      description: "An interactive course to make math enjoyable for Class 4 students.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Creative Writing Workshop",
      description: "Learn creative writing techniques and improve storytelling skills.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Introduction to Physics",
      description: "Discover basic physics concepts through fun experiments.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Python for Kids",
      description: "A beginner-friendly course to introduce Python programming.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Indian History for Young Learners",
      description: "Explore major historical events and figures in Indian history.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 4 Free Courses"
      description="Access free online courses designed for Class 4 students."
      resources={resources}
    />
  )
}
