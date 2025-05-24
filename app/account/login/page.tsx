"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, KeyRound, User, Lock, Eye, EyeOff, Fingerprint, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import PatternLock from "@/components/pattern-lock"
import HeroBackground from "@/components/hero-background"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loginMethod, setLoginMethod] = useState<"password" | "pattern" | "pin">("password")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would authenticate the user
    router.push("/account/profile")
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <HeroBackground />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-4 text-gray-400 hover:text-white"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Account Login
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-gray-800">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Sign In
              </CardTitle>
              <CardDescription className="text-center text-gray-500 dark:text-gray-400">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>

            <Tabs defaultValue="password" className="w-full" onValueChange={(value) => setLoginMethod(value as any)}>
              <TabsList className="grid grid-cols-3 mb-4 bg-gray-200 dark:bg-gray-800">
                <TabsTrigger
                  value="password"
                  className="text-gray-700 dark:text-gray-300 data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:text-black dark:data-[state=active]:text-white"
                >
                  <KeyRound className="h-4 w-4 mr-2" />
                  Password
                </TabsTrigger>
                <TabsTrigger
                  value="pin"
                  className="text-gray-700 dark:text-gray-300 data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:text-black dark:data-[state=active]:text-white"
                >
                  <Fingerprint className="h-4 w-4 mr-2" />
                  PIN
                </TabsTrigger>
                <TabsTrigger
                  value="pattern"
                  className="text-gray-700 dark:text-gray-300 data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:text-black dark:data-[state=active]:text-white"
                >
                  <Grid3X3 className="h-4 w-4 mr-2" />
                  Pattern
                </TabsTrigger>
              </TabsList>

              <CardContent>
                <TabsContent value="password" className="mt-0">
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="username">ID Number</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="username"
                            placeholder="Enter your ID number"
                            className="pl-10 border-gray-700 text-gray-200"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-10 pr-10 border-gray-700 text-gray-200"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 hover:opacity-90"
                      >
                        Sign In
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="pin" className="mt-0">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="pin">PIN Code</Label>
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <Input
                            key={i}
                            type="password"
                            maxLength={1}
                            className="w-12 h-12 text-center text-xl border-gray-700 text-gray-200"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, "del"].map((num, i) => (
                        <Button
                          key={i}
                          type="button"
                          variant={num === "del" ? "destructive" : "outline"}
                          className={`h-12 ${num === null ? "invisible" : ""} ${num !== "del" ? "border-gray-700 hover:bg-gray-800 text-white" : ""}`}
                        >
                          {num === "del" ? "Delete" : num}
                        </Button>
                      ))}
                    </div>

                    <Button
                      type="button"
                      className="w-full mt-4 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 hover:opacity-90"
                      onClick={() => router.push("/account/profile")}
                    >
                      Sign In
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="pattern" className="mt-0">
                  <div className="space-y-4">
                    <Label>Pattern Lock</Label>
                    <div className="flex justify-center">
                      <PatternLock onComplete={() => router.push("/account/profile")} />
                    </div>

                    <p className="text-center text-sm text-gray-400 mt-4">Draw your pattern to sign in</p>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>

            <CardFooter className="flex flex-col space-y-4 mt-4">
              <div className="text-sm text-gray-400 text-center">
                Don't have an account?{" "}
                <Link href="/account/register" className="text-gray-300 hover:underline">
                  Sign up
                </Link>
              </div>

              <div className="text-xs text-gray-500 text-center">
                By signing in, you agree to our{" "}
                <Link href="/terms" className="text-gray-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-gray-400 hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
