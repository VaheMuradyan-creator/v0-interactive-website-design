"use client"

import { useState } from "react"
import Link from "next/link"
import { Laptop, Brain, Film, BookOpen, Code2, Newspaper, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

interface CategorySectionProps {
  title: string
  count: number
  icon: "laptop" | "brain" | "film" | "book-open" | "code-2" | "newspaper"
  color: string
}

export default function CategorySection({ title, count, icon }: CategorySectionProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case "laptop":
        return <Laptop className="h-6 w-6" />
      case "brain":
        return <Brain className="h-6 w-6" />
      case "film":
        return <Film className="h-6 w-6" />
      case "book-open":
        return <BookOpen className="h-6 w-6" />
      case "code-2":
        return <Code2 className="h-6 w-6" />
      case "newspaper":
        return <Newspaper className="h-6 w-6" />
      default:
        return <Laptop className="h-6 w-6" />
    }
  }

  return (
    <Link href={`/category/${title.toLowerCase()}`}>
      <Card
        className="overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/10 dark:hover:shadow-black/30 hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative p-6">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black opacity-10 transition-opacity duration-300 ${isHovered ? "opacity-20" : "opacity-10"}`}
          />

          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 text-white dark:text-gray-900">
                {getIcon()}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{count} apps</p>
              </div>
            </div>

            <ChevronRight
              className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
            />
          </div>
        </div>
      </Card>
    </Link>
  )
}
