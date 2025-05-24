import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <PageLayout title="About Us">
      <Card className="border-gray-800">
        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">
            Learn about our mission, vision, and the team behind AppHub. We're dedicated to creating the ultimate app
            ecosystem.
          </p>
          <p className="text-gray-400">
            This page is currently under development. Check back soon for more information about our company.
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
