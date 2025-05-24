import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function CookiesPage() {
  return (
    <PageLayout title="Cookie Policy">
      <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">
            This cookie policy explains how we use cookies and similar technologies to recognize you when you visit our
            platform.
          </p>
          <div className="space-y-4 text-gray-400">
            <p>This page is currently under development. Our full cookie policy will be available soon.</p>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used
              to make websites work more efficiently and provide information to the website owners.
            </p>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
