import GeneralLayout from "@/layouts/GeneralLayout";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/ui/card"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import { Textarea } from "@/ui/textarea"

export default function Contact() {
  return (
    <GeneralLayout>
      <section className={cn(
        'flex flex-col min-h-slide justify-start items-center',
        'w-full'
      )}>
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
              <CardDescription className="">
                We&apos;d love to hear from you. Fill out the form below to get in touch.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="">Name</Label>
                    <Input id="name" placeholder="Your name" className="" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" className="" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="">Message</Label>
                  <Textarea id="message" placeholder="Your message" className="" />
                </div>
                <Button type="submit" variant='outline' className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </GeneralLayout>
  );
}