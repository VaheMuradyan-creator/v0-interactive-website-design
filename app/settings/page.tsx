"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { ArrowLeft, Moon, Sun, Monitor } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import HeroBackground from "@/components/hero-background"

export default function SettingsPage() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState(theme)

  const handleThemeChange = (value: string) => {
    setCurrentTheme(value)
    setTheme(value)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <HeroBackground />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Settings
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-gray-200 dark:border-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Appearance</CardTitle>
              <CardDescription className="text-gray-500 dark:text-gray-400">
                Customize how the app looks and feels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Theme</h3>
                  <RadioGroup
                    value={currentTheme}
                    onValueChange={handleThemeChange}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="light" id="light" className="peer sr-only" />
                      <Label
                        htmlFor="light"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 dark:border-gray-800 p-4 hover:border-gray-300 dark:hover:border-gray-700 peer-data-[state=checked]:border-gray-900 dark:peer-data-[state=checked]:border-gray-300 peer-data-[state=checked]:bg-gray-50 dark:peer-data-[state=checked]:bg-gray-800 transition-all cursor-pointer"
                      >
                        <Sun className="h-6 w-6 mb-3 text-gray-900 dark:text-gray-400" />
                        <div className="font-medium text-gray-900 dark:text-white">Light</div>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="dark" id="dark" className="peer sr-only" />
                      <Label
                        htmlFor="dark"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 dark:border-gray-800 p-4 hover:border-gray-300 dark:hover:border-gray-700 peer-data-[state=checked]:border-gray-900 dark:peer-data-[state=checked]:border-gray-300 peer-data-[state=checked]:bg-gray-50 dark:peer-data-[state=checked]:bg-gray-800 transition-all cursor-pointer"
                      >
                        <Moon className="h-6 w-6 mb-3 text-gray-900 dark:text-gray-400" />
                        <div className="font-medium text-gray-900 dark:text-white">Dark</div>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="system" id="system" className="peer sr-only" />
                      <Label
                        htmlFor="system"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 dark:border-gray-800 p-4 hover:border-gray-300 dark:hover:border-gray-700 peer-data-[state=checked]:border-gray-900 dark:peer-data-[state=checked]:border-gray-300 peer-data-[state=checked]:bg-gray-50 dark:peer-data-[state=checked]:bg-gray-800 transition-all cursor-pointer"
                      >
                        <Monitor className="h-6 w-6 mb-3 text-gray-900 dark:text-gray-400" />
                        <div className="font-medium text-gray-900 dark:text-white">System</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
