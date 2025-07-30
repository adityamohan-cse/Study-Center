import { ResourcePage } from "@/components/resource-page"

export default function Class2FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Advanced Math for Kids",
      description: "An interactive course to make math enjoyable for Class 2 students.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Phonics and Reading Advanced",
      description: "Learn phonics and improve reading skills with this engaging course.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Introduction to Plants",
      description: "Discover different plants and their habitats in this fun course.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Basic Coding for Kids",
      description: "A creative course to teach fundamental coding techniques.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Creative Writing Adventures",
      description: "Develop imagination and language skills through creative writing.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 2 Free Courses"
      description="Access free online courses designed for Class 2 students."
      resources={resources}
    />
  )
}
