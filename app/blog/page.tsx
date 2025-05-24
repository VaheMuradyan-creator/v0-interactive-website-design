import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <PageLayout title="Blog">
      <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">
            Read articles, tutorials, and insights from our team about technology trends, app development, and more.
          </p>
          <p className="text-gray-400">
            This page is currently under development. Check back soon for our blog posts and articles.
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
