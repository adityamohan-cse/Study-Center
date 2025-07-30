"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Download, Eye, Search, XCircle } from "lucide-react"
import Link from "next/link"

interface Resource {
  id: number
  title: string
  description: string
  type: "book" | "course" | "notes" | "handwritten-notes" | "pyq" | "important-questions" | "syllabus"
  link: string
  isCompleted?: boolean
}

interface ResourcePageProps {
  title: string
  description: string
  resources: Resource[]
}

export function ResourcePage({ title, description, resources }: ResourcePageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [completedResources, setCompletedResources] = useState<Set<number>>(new Set())

  useEffect(() => {
    const storedCompleted = localStorage.getItem(`completed-${title}`)
    if (storedCompleted) {
      setCompletedResources(new Set(JSON.parse(storedCompleted)))
    }
  }, [title])

  useEffect(() => {
    localStorage.setItem(`completed-${title}`, JSON.stringify(Array.from(completedResources)))
  }, [completedResources, title])

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDownload = (link: string) => {
    if (link.startsWith("/")) {
      // Assuming local files are in the public directory
      window.open(link, "_blank")
    } else {
      // External links
      window.open(link, "_blank")
    }
  }

  const handleWatch = (link: string) => {
    window.open(link, "_blank")
  }

  const handlePreview = (link: string) => {
    window.open(link, "_blank")
  }

  const handleMarkComplete = (id: number) => {
    setCompletedResources((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">{title}</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      <div className="relative mb-6">
        <Input
          type="text"
          placeholder={`Search ${title.toLowerCase()}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400">No resources found matching your search.</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Card key={resource.id} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {resource.title}
                {completedResources.has(resource.id) && (
                  <span className="text-green-500 flex items-center gap-1 text-sm">
                    <CheckCircle2 className="w-4 h-4" /> Completed
                  </span>
                )}
              </CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400">Type: {resource.type.replace("-", " ")}</p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {resource.type === "book" ||
              resource.type === "notes" ||
              resource.type === "handwritten-notes" ||
              resource.type === "pyq" ||
              resource.type === "important-questions" ||
              resource.type === "syllabus" ? (
                <>
                  <a href={resource.link} download className="flex-1">
                    <Button size="sm" className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </a>
                  <Button onClick={() => handlePreview(resource.link)} size="sm" variant="outline" className="flex-1">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </>
              ) : resource.type === "course" ? (
                <>
                  <Button onClick={() => handleWatch(resource.link)} size="sm" className="flex-1">
                    <Eye className="mr-2 h-4 w-4" /> Watch Course
                  </Button>
                  <Button
                    onClick={() => handleMarkComplete(resource.id)}
                    size="sm"
                    variant={completedResources.has(resource.id) ? "secondary" : "outline"}
                    className="flex-1"
                  >
                    {completedResources.has(resource.id) ? (
                      <>
                        <XCircle className="mr-2 h-4 w-4" /> Unmark Complete
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" /> Mark as Complete
                      </>
                    )}
                  </Button>
                </>
              ) : (
                <Link href={resource.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="sm" className="w-full">
                    Access Resource
                  </Button>
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
