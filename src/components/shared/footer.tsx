import Link from "next/link"
import { GraduationCap, MessageCircle, Send, Camera, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "Find Tutors", href: "/find-tutors" },
      { name: "Become a Tutor", href: "/become-tutor" },
      { name: "Subjects", href: "/subjects" },
      { name: "Pricing", href: "/pricing" },
      { name: "Online Classes", href: "/classes" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Safety Center", href: "/safety" },
      { name: "Community Guidelines", href: "/guidelines" },
      { name: "Tutor Support", href: "/tutor-support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EduElite</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering students worldwide with premium tutoring from world-class educators. 
              Join the elite circle of learners today.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <Send className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <Camera className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                <Briefcase className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full md:w-auto">
            <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="max-w-[240px] rounded-full px-4" />
              <Button className="rounded-full px-6">Subscribe</Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EduElite Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
