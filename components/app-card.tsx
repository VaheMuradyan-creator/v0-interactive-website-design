"use client"

import { useState } from "react"
import { ImageIcon, Code, Music, Bot, Download, Star, Plus } from "lucide-react"
import { Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AppCardProps {
  title: string
  description: string
  icon: "image" | "code" | "music" | "bot"
  color: string
  downloads: string
}

export default function AppCard({ title, description, icon, downloads }: AppCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case "image":
        return <ImageIcon className="h-6 w-6" />
      case "code":
        return <Code className="h-6 w-6" />
      case "music":
        return <Music className="h-6 w-6" />
      case "bot":
        return <Bot className="h-6 w-6" />
      default:
        return <ImageIcon className="h-6 w-6" />
    }
  }

  return (
    <Card
      className="overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-gray-300/10 dark:hover:shadow-black/30 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-6">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black opacity-10 transition-opacity duration-300 ${isHovered ? "opacity-20" : "opacity-10"}`}
        />

        <div className="relative flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 text-white dark:text-gray-900">
            {getIcon()}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{downloads} downloads</p>
          </div>
        </div>

        <div className="mt-4 relative">
          <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 text-gray-700 dark:text-gray-300" />
            <span>4.8</span>
          </div>
          <span className="mx-2">•</span>
          <span>Free</span>
        </div>
      </div>

      <CardFooter className="border-t border-gray-200 dark:border-gray-800 p-4">
        <div className="flex w-full justify-between">
          <Button
            variant="outline"
            size="sm"
            className="border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
          >
            <Plus className="mr-2 h-4 w-4" />
            Details
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 hover:opacity-90"
          >
            <Download className="mr-2 h-4 w-4" />
            Install
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
