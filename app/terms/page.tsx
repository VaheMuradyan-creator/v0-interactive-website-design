import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <PageLayout title="Terms of Service">
      <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">
            Please read these terms of service carefully before using our platform. By accessing or using our services,
            you agree to be bound by these terms.
          </p>
          <div className="space-y-4 text-gray-400">
            <p>This page is currently under development. Our full terms of service will be available soon.</p>
            <p>
              In the meantime, please be aware that all content and services provided are subject to change, and we
              reserve the right to modify or discontinue any aspect of our platform without notice.
            </p>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
