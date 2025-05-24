import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import HeroBackground from "@/components/hero-background"

interface PageLayoutProps {
  title: string
  children: React.ReactNode
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <HeroBackground />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 pt-32 pb-20">
        <div className="mb-8 flex items-center">
          <Button asChild variant="ghost" size="icon" className="mr-4 text-gray-400 hover:text-white">
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            {title}
          </h1>
        </div>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">© 2025 AppHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
