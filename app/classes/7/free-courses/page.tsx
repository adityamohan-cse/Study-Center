import { ResourcePage } from "@/components/resource-page"

export default function Class7FreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Geometry Fundamentals for Class 7",
      description: "An introductory course to geometric concepts for Class 7 students.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Advanced English Writing",
      description: "Comprehensive course on advanced English writing skills.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Chemistry Basics",
      description: "Explore basic chemical concepts and reactions.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "App Development with MIT App Inventor",
      description: "Learn to build mobile apps using MIT App Inventor.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Medieval History",
      description: "Discover the history and culture of the medieval period.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="Class 7 Free Courses"
      description="Access free online courses designed for Class 7 students."
      resources={resources}
    />
  )
}
