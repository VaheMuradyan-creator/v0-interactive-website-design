"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Settings, LogOut, Edit, Camera, Download, Star, Clock, ImageIcon, Bot, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import HeroBackground from "@/components/hero-background"

export default function ProfilePage() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    username: "johndoe",
    bio: "Software developer and tech enthusiast. I love exploring new apps and technologies.",
    email: "john.doe@example.com",
  })

  const handleSaveProfile = () => {
    setIsEditing(false)
    // In a real app, this would save the profile data to a database
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <HeroBackground />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-4 text-gray-400 hover:text-white"
              onClick={() => router.push("/")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              My Profile
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              onClick={() => router.push("/account/settings")}
            >
              <Settings className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              onClick={() => router.push("/")}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="md:col-span-1 border-gray-800">
            <CardHeader className="pb-0">
              <CardTitle className="text-xl font-semibold text-center">Profile</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <div className="relative group">
                  <Avatar className="h-32 w-32 border-4 border-gray-800 shadow-lg">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                    <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 text-3xl text-white dark:text-gray-900">
                      JD
                    </AvatarFallback>
                  </Avatar>

                  {isEditing && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute bottom-0 right-0 rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                {isEditing ? (
                  <div className="w-full mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                        className="border-gray-700 text-gray-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={profileData.username}
                        onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                        className="border-gray-700 text-gray-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="border-gray-700 text-gray-200"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        className="border-gray-700 text-gray-200 min-h-[100px]"
                      />
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button
                        onClick={handleSaveProfile}
                        className="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 hover:opacity-90"
                      >
                        Save
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                        className="flex-1 border-gray-700 hover:bg-gray-800 text-white"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full mt-6 space-y-4">
                    <h2 className="text-xl font-bold text-white text-center">@{profileData.username}</h2>
                    <p className="text-gray-400 text-center">{profileData.name}</p>

                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-gray-300 text-center">{profileData.bio}</p>
                    </div>

                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-gray-400 text-sm">
                        <span className="font-semibold">Email:</span> {profileData.email}
                      </p>
                    </div>

                    <Button
                      onClick={() => setIsEditing(true)}
                      variant="outline"
                      className="w-full border-gray-700 hover:bg-gray-800 text-white"
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Activity Tabs */}
          <Card className="md:col-span-2 border-gray-800">
            <Tabs defaultValue="downloads">
              <CardHeader className="pb-0">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-semibold">Activity</CardTitle>
                  <TabsList>
                    <TabsTrigger value="downloads" className="data-[state=active]:bg-gray-700">
                      <Download className="h-4 w-4 mr-2" />
                      Downloads
                    </TabsTrigger>
                    <TabsTrigger value="favorites" className="data-[state=active]:bg-gray-700">
                      <Star className="h-4 w-4 mr-2" />
                      Favorites
                    </TabsTrigger>
                    <TabsTrigger value="recent" className="data-[state=active]:bg-gray-700">
                      <Clock className="h-4 w-4 mr-2" />
                      Recent
                    </TabsTrigger>
                  </TabsList>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <TabsContent value="downloads" className="mt-0">
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center p-3 rounded-lg border border-gray-800">
                        <div className="flex-shrink-0 h-12 w-12 rounded-md bg-gradient-to-br from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 flex items-center justify-center text-white dark:text-gray-900">
                          <ImageIcon className="h-6 w-6" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className="text-sm font-medium text-white">PhotoEditor Pro</h3>
                          <p className="text-xs text-gray-400">Downloaded on April 15, 2025</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}

                    <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 text-white">
                      View All Downloads
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="favorites" className="mt-0">
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center p-3 rounded-lg border border-gray-800">
                        <div className="flex-shrink-0 h-12 w-12 rounded-md bg-gradient-to-br from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 flex items-center justify-center text-white dark:text-gray-900">
                          <Bot className="h-6 w-6" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className="text-sm font-medium text-white">AI Assistant</h3>
                          <p className="text-xs text-gray-400">Added to favorites on April 10, 2025</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-yellow-500 hover:text-yellow-400">
                          <Star className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    ))}

                    <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 text-white">
                      View All Favorites
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="recent" className="mt-0">
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center p-3 rounded-lg border border-gray-800">
                        <div className="flex-shrink-0 h-12 w-12 rounded-md bg-gradient-to-br from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 flex items-center justify-center text-white dark:text-gray-900">
                          <Code className="h-6 w-6" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className="text-sm font-medium text-white">CodeStudio</h3>
                          <p className="text-xs text-gray-400">Used 2 hours ago</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <Clock className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}

                    <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 text-white">
                      View All Recent Activity
                    </Button>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>
  )
}
