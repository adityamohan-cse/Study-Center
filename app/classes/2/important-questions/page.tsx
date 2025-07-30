import { ResourcePage } from "@/components/resource-page"

export default function Class2ImportantQuestionsPage() {
  const resources = [
    {
      id: 1,
      title: "Math - Top 20 Questions",
      description: "Most frequently asked questions in Class 2 Math exams.",
      type: "important-questions",
      link: "/placeholder.pdf",
    },
    {
      id: 2,
      title: "English - Key Grammar Questions",
      description: "Important questions covering basic English grammar for Class 2.",
      type: "important-questions",
      link: "/placeholder.pdf",
    },
    {
      id: 3,
      title: "EVS - Important Concepts",
      description: "Crucial questions on environmental studies topics for Class 2.",
      type: "important-questions",
      link: "/placeholder.pdf",
    },
    {
      id: 4,
      title: "Hindi - Essential Questions",
      description: "Important questions for Hindi language and literature in Class 2.",
      type: "important-questions",
      link: "/placeholder.pdf",
    },
    {
      id: 5,
      title: "General Knowledge Quiz",
      description: "A set of important GK questions suitable for Class 2.",
      type: "important-questions",
      link: "/placeholder.pdf",
    },
  ]

  return (
    <ResourcePage
      title="Class 2 Important Questions"
      description="Find a curated list of important questions for Class 2 subjects."
      resources={resources}
    />
  )
}
