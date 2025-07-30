import { ResourcePage } from "@/components/resource-page"

export default function Class5FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Advanced Math for Class 5",
      description: "An interactive course to make math enjoyable for Class 5 students.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Public Speaking for Kids",
      description: "Learn to speak confidently and express ideas clearly.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Chemistry Fundamentals",
      description: "Discover basic chemistry concepts through fun experiments.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Web Development for Kids",
      description: "A beginner-friendly course to introduce HTML, CSS, and JavaScript.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "World Geography for Young Learners",
      description: "Explore different countries, cultures, and geographical features.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 5 Free Courses"
      description="Access free online courses designed for Class 5 students."
      resources={resources}
    />
  )
}
