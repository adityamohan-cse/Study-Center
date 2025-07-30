"use client"

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  FileText,
  BookOpen,
  PenTool,
  Video,
  FileCheck,
  HelpCircle,
  Star,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const validClasses = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "btech-cse",
]

// Resources to hide per class
const hiddenResourcesPerClass: Record<string, string[]> = {
  "6": ["pyq","syllabus","important-questions","Roadmaps","handwritten-notes"], // Example: hide Notes card in Class 6
  "7": ["handwritten-notes","pyq","syllabus","important-questions","Roadmaps"], // Example: hide Notes card in Class 7
  "8": ["handwritten-notes","pyq","syllabus","important-questions","Roadmaps"], // Example: hide Notes card in Class 8
  "9": ["notes","handwritten-notes","pyq","syllabus","important-questions","Roadmaps"],
  "10": ["notes","handwritten-notes","pyq","syllabus","important-questions","Roadmaps"],
  "11": ["notes","handwritten-notes","pyq","syllabus","important-questions","Roadmaps"],
  "12": ["notes","handwritten-notes","pyq","syllabus","important-questions","Roadmaps"],



}

const hardcodedResourceCounts: Record<string, Record<string, number>> = {
  "6": {
    notes: 2,
    books: 2,
    "handwritten-notes": 1,
    "free-courses": 1,
    syllabus: 1,
    pyq: 1,
    "important-questions": 1,
    Roadmaps: 1,
  },
  "7": {
    notes: 2,
    books: 2,
    "handwritten-notes": 1,
    "free-courses": 1,
    syllabus: 1,
    pyq: 1,
    "important-questions": 1,
    Roadmaps: 1,
  },
  "8": {
    notes: 2,
    books: 2,
    "handwritten-notes": 1,
    "free-courses": 1,
    syllabus: 1,
    pyq: 1,
    "important-questions": 1,
    Roadmaps: 1,
  },
  "9": {
    notes: 2,
    books: 2,
    "handwritten-notes": 1,
    "free-courses": 1,
    syllabus: 1,
    pyq: 1,
    "important-questions": 1,
    Roadmaps: 1,
  },
  "10": {
    notes: 2,
    books: 2,
    "handwritten-notes": 1,
    "free-courses": 1,
    syllabus: 1,
    pyq: 1,
    "important-questions": 1,
    Roadmaps: 1,
  },
  "11": {
    notes: 2,
    books: 2,
    "handwritten-notes": 1,
    "free-courses": 1,
    syllabus: 1,
    pyq: 1,
    "important-questions": 1,
    Roadmaps: 1,
  },
  "12": {
    notes: 2,
    books: 2,
    "handwritten-notes": 1,
    "free-courses": 1,
    syllabus: 1,
    pyq: 1,
    "important-questions": 1,
    Roadmaps: 1,
  },
  "btech-cse": {
    notes: 3,
    books: 3,
    "handwritten-notes": 2,
    "free-courses": 3,
    syllabus: 1,
    pyq: 2,
    "important-questions": 2,
    Roadmaps: 1,
  },
}

const resourceTypes = [
  { key: "notes", name: "Notes", icon: FileText, description: "Study notes and summaries", color: "text-blue-600" },
  {
    key: "books",
    name: "Books",
    icon: BookOpen,
    description: "Textbooks and reference materials",
    color: "text-green-600",
  },
  {
    key: "handwritten-notes",
    name: "Handwritten Notes",
    icon: PenTool,
    description: "Student/teacher handwritten content",
    color: "text-purple-600",
  },
  {
    key: "free-courses",
    name: "Free Courses",
    icon: Video,
    description: "Video courses and tutorials",
    color: "text-red-600",
  },
  {
    key: "syllabus",
    name: "Syllabus",
    icon: FileCheck,
    description: "Complete curriculum documents",
    color: "text-indigo-600",
  },
  {
    key: "pyq",
    name: "Previous Year Questions",
    icon: HelpCircle,
    description: "Past exam papers and solutions",
    color: "text-orange-600",
  },
  {
    key: "important-questions",
    name: "Important Questions",
    icon: Star,
    description: "Curated exam questions",
    color: "text-yellow-600",
  },
  {
    key: "Roadmaps",
    name: "Roadmaps",
    icon: FileText,
    description: "Study notes and summaries",
    color: "text-blue-600",
  },
]

export default function ClassPage({ params }: { params: { classId: string } }) {
  // ✅ New way
  const { classId } = React.use(params);

  if (!validClasses.includes(classId)) {
    notFound()
  }

  const getClassName = (id: string) => {
    if (id === "btech-cse") return "BTech Computer Science Engineering"
    return `Class ${id.toUpperCase()}`
  }

  const className = getClassName(classId)
  const currentClassCounts = hardcodedResourceCounts[classId] || {}

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>{">"}</span>
          <Link href="/classes" className="hover:text-blue-600 transition-colors">
            Classes
          </Link>
          <span>{">"}</span>
          <span className="text-gray-900 font-medium">{className}</span>
        </div>

        {/* Back Button */}
        <Link href="/classes">
          <Button variant="outline" className="mb-6 bg-white hover:bg-gray-100 shadow-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Classes
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{className}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Access comprehensive educational resources including notes, books, handwritten materials, video courses, and
            exam papers.
          </p>
        </div>

        {/* Resource Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resourceTypes
            .filter((type) => !(hiddenResourcesPerClass[classId]?.includes(type.key)))
            .map((type) => {
              const Icon = type.icon
              const count = currentClassCounts[type.key] || 0

              return (
                <Link key={type.key} href={`/classes/${classId}/${type.key}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-full bg-gray-100 group-hover:bg-blue-50 transition-colors`}>
                            <Icon className={`h-7 w-7 ${type.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-semibold">{type.name}</CardTitle>
                            {/*<Badge variant="secondary" className="mt-1 text-sm px-3 py-1 rounded-full">
                              {count} {count === 1 ? "resource" : "resources"}
                            </Badge>*/}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-sm text-gray-700">{type.description}</CardDescription>
                      {count > 0 && (
                        <div className="mt-3 text-sm text-green-600 font-medium flex items-center">
                          <FileCheck className="h-4 w-4 mr-1" /> Available for download
                        </div>
                      )}
                      {count === 0 && (
                        <div className="mt-3 text-sm text-gray-500 flex items-center">
                          <HelpCircle className="h-4 w-4 mr-1" /> Coming soon...
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Overview</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-4xl font-extrabold text-blue-600">
                {Object.values(currentClassCounts).reduce((sum, count) => sum + count, 0)}
              </div>
              <div className="text-sm text-gray-600">Total Resources</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-4xl font-extrabold text-green-600">
                {Object.values(currentClassCounts).filter((count) => count > 0).length}
              </div>
              <div className="text-sm text-gray-600">Available Types</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-4xl font-extrabold text-purple-600">{currentClassCounts["free-courses"] || 0}</div>
              <div className="text-sm text-gray-600">Video Courses</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-4xl font-extrabold text-orange-600">
                {(currentClassCounts["pyq"] || 0) + (currentClassCounts["important-questions"] || 0)}
              </div>
              <div className="text-sm text-gray-600">Exam Resources</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
