import { ResourcePage } from "@/components/resource-page"

export default function Class1FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Fun Math for Kids",
      description: "An interactive course to make math enjoyable for Class 1 students.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Phonics and Reading Basics",
      description: "Learn phonics and improve reading skills with this engaging course.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Introduction to Animals",
      description: "Discover different animals and their habitats in this fun course.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Basic Drawing for Kids",
      description: "A creative course to teach fundamental drawing techniques.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Storytelling Adventures",
      description: "Develop imagination and language skills through storytelling.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 1 Free Courses"
      description="Access free online courses designed for Class 1 students."
      resources={resources}
    />
  )
}
