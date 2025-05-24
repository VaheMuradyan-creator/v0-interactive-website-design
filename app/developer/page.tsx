import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function DeveloperPortalPage() {
  return (
    <PageLayout title="Developer Portal">
      <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">
            Access tools, documentation, and resources to build and publish your applications on our platform.
          </p>
          <p className="text-gray-400">
            This page is currently under development. Check back soon for developer resources and documentation.
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
