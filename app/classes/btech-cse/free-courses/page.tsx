import { ResourcePage } from "@/components/resource-page"

export default function BTechCSEFreeCoursesPage() {
  const resources = [
    {
      id: 1,
      title: "Introduction to Python Programming",
      description: "A beginner-friendly course covering Python basics and applications.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Web Development with Node.js and Express",
      description: "Learn to build backend applications using Node.js and Express.js.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Machine Learning with Python",
      description: "An introductory course to machine learning algorithms and libraries.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Cloud Computing Fundamentals (AWS)",
      description: "Understand the basics of cloud computing and AWS services.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Cybersecurity Basics",
      description: "Learn fundamental cybersecurity concepts and best practices.",
      type: "course",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      isCompleted: false,
    },
  ]

  return (
    <ResourcePage
      title="B.Tech CSE Free Courses"
      description="Access free online courses relevant to B.Tech Computer Science Engineering."
      resources={resources}
    />
  )
}
