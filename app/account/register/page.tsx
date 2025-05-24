"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, User, Mail, Lock, Eye, EyeOff, RefreshCw, Check, X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import HeroBackground from "@/components/hero-background"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [passwordLength, setPasswordLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [passwordStrength, setPasswordStrength] = useState<"weak" | "medium" | "strong" | "">("")

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    agreeTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Add a function to generate a random password
  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?"

    let chars = ""
    if (includeUppercase) chars += uppercase
    if (includeLowercase) chars += lowercase
    if (includeNumbers) chars += numbers
    if (includeSymbols) chars += symbols

    // Ensure at least one character set is selected
    if (chars.length === 0) {
      chars = lowercase + numbers
    }

    let password = ""
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      password += chars[randomIndex]
    }

    // Update the form data with the new password
    setFormData({
      ...formData,
      password,
    })

    // Calculate password strength
    checkPasswordStrength(password)
  }

  // Add a function to check password strength
  const checkPasswordStrength = (password: string) => {
    if (!password) {
      setPasswordStrength("")
      return
    }

    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumbers = /[0-9]/.test(password)
    const hasSymbols = /[!@#$%^&*()_+[\]{}|;:,.<>?]/.test(password)

    const varietyCount = [hasUppercase, hasLowercase, hasNumbers, hasSymbols].filter(Boolean).length

    if (password.length < 8 || varietyCount < 2) {
      setPasswordStrength("weak")
    } else if (password.length < 12 || varietyCount < 3) {
      setPasswordStrength("medium")
    } else {
      setPasswordStrength("strong")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }

    // Check password strength when password changes
    if (name === "password") {
      checkPasswordStrength(value)
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, this would register the user
      console.log("Registration data:", formData)
      router.push("/account/profile")
    }
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
            Create Account
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-gray-800">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Sign Up
              </CardTitle>
              <CardDescription className="text-center text-gray-500 dark:text-gray-400">
                Create an account to access all features
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Enter your full name"
                      className="pl-10 border-gray-700 text-gray-200"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="username"
                      name="username"
                      placeholder="Choose a username"
                      className="pl-10 border-gray-700 text-gray-200"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.username && <p className="text-xs text-red-500 mt-1">{errors.username}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 border-gray-700 text-gray-200"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 px-2 text-xs text-gray-400 hover:text-white">
                          <RefreshCw className="h-3 w-3 mr-1" />
                          Generate Password
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 border-gray-800">
                        <div className="space-y-4">
                          <h4 className="font-medium text-sm text-gray-200">Password Generator</h4>

                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <Label htmlFor="password-length">Length: {passwordLength}</Label>
                            </div>
                            <Slider
                              id="password-length"
                              min={8}
                              max={32}
                              step={1}
                              value={[passwordLength]}
                              onValueChange={(value) => setPasswordLength(value[0])}
                              className="[&_[role=slider]]:bg-gray-500"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-xs text-gray-400">Include:</Label>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="uppercase"
                                  checked={includeUppercase}
                                  onCheckedChange={(checked) => setIncludeUppercase(!!checked)}
                                />
                                <label htmlFor="uppercase" className="text-sm text-gray-300 cursor-pointer">
                                  Uppercase (A-Z)
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="lowercase"
                                  checked={includeLowercase}
                                  onCheckedChange={(checked) => setIncludeLowercase(!!checked)}
                                />
                                <label htmlFor="lowercase" className="text-sm text-gray-300 cursor-pointer">
                                  Lowercase (a-z)
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="numbers"
                                  checked={includeNumbers}
                                  onCheckedChange={(checked) => setIncludeNumbers(!!checked)}
                                />
                                <label htmlFor="numbers" className="text-sm text-gray-300 cursor-pointer">
                                  Numbers (0-9)
                                </label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="symbols"
                                  checked={includeSymbols}
                                  onCheckedChange={(checked) => setIncludeSymbols(!!checked)}
                                />
                                <label htmlFor="symbols" className="text-sm text-gray-300 cursor-pointer">
                                  Symbols (!@#$)
                                </label>
                              </div>
                            </div>
                          </div>

                          <Button
                            onClick={generatePassword}
                            className="w-full bg-gradient-to-r from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 hover:opacity-90"
                          >
                            Generate Password
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      className="pl-10 pr-10 border-gray-700 text-gray-200"
                      value={formData.password}
                      onChange={handleChange}
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

                  {/* Password strength indicator */}
                  {passwordStrength && (
                    <div className="mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              passwordStrength === "weak"
                                ? "bg-red-500 w-1/3"
                                : passwordStrength === "medium"
                                  ? "bg-yellow-500 w-2/3"
                                  : "bg-green-500 w-full"
                            }`}
                          />
                        </div>
                        <span className="text-xs flex items-center">
                          {passwordStrength === "weak" && (
                            <>
                              <X className="h-3 w-3 text-red-500 mr-1" />
                              <span className="text-red-500">Weak</span>
                            </>
                          )}
                          {passwordStrength === "medium" && (
                            <>
                              <AlertTriangle className="h-3 w-3 text-yellow-500 mr-1" />
                              <span className="text-yellow-500">Medium</span>
                            </>
                          )}
                          {passwordStrength === "strong" && (
                            <>
                              <Check className="h-3 w-3 text-green-500 mr-1" />
                              <span className="text-green-500">Strong</span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  )}

                  {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
                </div>

                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                  />
                  <label
                    htmlFor="agreeTerms"
                    className="text-sm text-gray-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <Link href="/terms" className="text-gray-300 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-gray-300 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.agreeTerms && <p className="text-xs text-red-500 mt-1">{errors.agreeTerms}</p>}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 hover:opacity-90"
                >
                  Create Account
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 mt-4">
              <div className="text-sm text-gray-400 text-center">
                Already have an account?{" "}
                <Link href="/account/login" className="text-gray-300 hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
