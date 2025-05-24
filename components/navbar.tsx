"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // Make the navbar visible when scrolling up or when at the top of the page
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      setPrevScrollPos(currentScrollPos)
      setVisible(isVisible)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-transform duration-300 backdrop-blur-md ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-black dark:from-white dark:to-gray-300 rounded-lg animate-pulse"></div>
            <div className="absolute inset-0.5 bg-transparent rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-gray-900 font-bold text-xl">A</span>
            </div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            AppHub
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/apps"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Apps
          </Link>
          <Link
            href="/ai-models"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            AI Models
          </Link>
          <Link
            href="/news"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            News
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search apps..."
              className="pl-10 border-gray-300/50 dark:border-gray-700/50 text-gray-800 dark:text-gray-200 w-64 focus:ring-gray-500"
            />
          </div>
          <ThemeToggle />
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hover:bg-gray-200/30 dark:hover:bg-gray-800/30 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
          >
            <Link href="/settings">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="hover:bg-gray-200/30 dark:hover:bg-gray-800/30 text-gray-800 dark:text-white border-0"
          >
            <Link href="/account/login">Account</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
