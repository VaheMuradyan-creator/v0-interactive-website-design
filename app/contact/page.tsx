import PageLayout from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <PageLayout title="Contact">
      <Card className="border-gray-800">
        <CardContent className="p-6">
          <p className="text-gray-300 mb-6">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as
            soon as possible.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="border-gray-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" className="border-gray-700" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Subject" className="border-gray-700" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" className="border-gray-700 min-h-[150px]" />
            </div>

            <Button className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-white dark:to-gray-300 text-white dark:text-gray-900 hover:opacity-90">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
