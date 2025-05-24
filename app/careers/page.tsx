import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function CareersPage() {
  return (
    <PageLayout title="Careers">
      <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">
            Join our team and help shape the future of app discovery and distribution. Explore current openings and
            opportunities.
          </p>
          <p className="text-gray-400">
            This page is currently under development. Check back soon for job listings and career information.
          </p>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
