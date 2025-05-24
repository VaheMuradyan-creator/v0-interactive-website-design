import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function AIModelsPage() {
  return (
    <PageLayout title="AI Models">
      <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">
            Discover cutting-edge AI models that can transform your workflow and unlock new possibilities.
          </p>
          <p className="text-gray-400">
            This page is currently under development. Check back soon for our collection of AI models.
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
