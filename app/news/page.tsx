import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsPage() {
  return (
    <PageLayout title="News">
      <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">
            Stay up-to-date with the latest developments in technology, app releases, and industry trends.
          </p>
          <p className="text-gray-400">
            This page is currently under development. Check back soon for the latest news and updates.
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
