import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <p className="text-gray-300 mb-4">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal
            information when you use our services.
          </p>
          <div className="space-y-4 text-gray-400">
            <p>This page is currently under development. Our full privacy policy will be available soon.</p>
            <p>
              We are committed to ensuring that your privacy is protected. Any information we collect will only be used
              in accordance with this privacy statement and applicable data protection laws.
            </p>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
