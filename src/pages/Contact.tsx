import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/Navbar"
import { BackButton } from "@/components/ui/back-button"

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6 text-green-500" />,
    title: "Visit Us",
    details: ["123 Education Boulevard", "Smart City, SC 12345", "United States"]
  },
  {
    icon: <Phone className="h-6 w-6 text-green-500" />,
    title: "Call Us",
    details: ["+1 (555) 123-4567", "+1 (555) 123-4568", "Toll-free: 1-800-SMART-ED"]
  },
  {
    icon: <Mail className="h-6 w-6 text-green-500" />,
    title: "Email Us",
    details: ["info@smartrootsschool.edu", "admissions@smartrootsschool.edu", "support@smartrootsschool.edu"]
  },
  {
    icon: <Clock className="h-6 w-6 text-green-500" />,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"]
  }
]

const departments = [
  { value: "admissions", label: "Admissions" },
  { value: "academic", label: "Academic Support" },
  { value: "technical", label: "Technical Support" },
  { value: "billing", label: "Billing & Finance" },
  { value: "general", label: "General Inquiry" }
]

const faqs = [
  {
    question: "How do I apply for admission?",
    answer: "You can apply online through our admissions portal. Simply click \'Register\' and follow the step-by-step application process."
  },
  {
    question: "What are the technical requirements?",
    answer: "You\'ll need a computer or tablet with internet access, a modern web browser, and basic computer skills. We support all major operating systems."
  },
  {
    question: "Do you offer financial aid?",
    answer: "Yes, we offer various financial aid options including scholarships, payment plans, and need-based assistance. Contact our financial aid office for more information."
  },
  {
    question: "Can I transfer credits from other institutions?",
    answer: "We accept transfer credits from accredited institutions. Our admissions team will evaluate your transcripts and provide a credit transfer assessment."
  }
]

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-br from-psyco-black-DEFAULT to-psyco-black-light">
        <div className="max-w-7xl mx-auto text-center">
          <BackButton to="/" /> {/* Added BackButton */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="text-green-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our programs? Need technical support? Want to learn more about Smart Roots School? 
            We\'re here to help and would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="glassmorphism p-6 rounded-xl text-center hover:translate-y-[-5px] transition-transform">
                <div className="mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-psyco-black-light to-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glassmorphism p-8 rounded-2xl">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                <p className="text-gray-300">
                  Fill out the form below and we\'ll get back to you within 24 hours.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept.value} value={dept.value}>
                          {dept.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your inquiry..." 
                    className="mt-1 min-h-[120px]" 
                  />
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="glassmorphism p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Find Us</h3>
                <div className="bg-gray-800 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-300">Interactive Map</p>
                    <p className="text-sm text-gray-400">123 Education Boulevard, Smart City</p>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="glassmorphism p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-2xl font-bold">Live Chat Support</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Need immediate assistance? Our support team is available 24/7 to help you with any questions.
                </p>
                <Button variant="outline" className="w-full">
                  Start Live Chat
                </Button>
              </div>

              {/* Emergency Contact */}
              <div className="glassmorphism p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-red-400">Emergency Contact</h3>
                <p className="text-gray-300 mb-4">
                  For urgent matters outside business hours:
                </p>
                <div className="space-y-2">
                  <p className="text-white font-semibold">Emergency Hotline: +1 (555) 911-HELP</p>
                  <p className="text-gray-300">Available 24/7 for critical issues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-DEFAULT">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions. Can\'t find what you\'re looking for? Contact us directly.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="glassmorphism p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-green-500">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-psyco-black-light to-psyco-black-DEFAULT">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Connect With Us</h2>
          <p className="text-xl text-gray-300 mb-8">
            Follow us on social media for the latest updates, educational content, and community highlights.
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg">Facebook</Button>
            <Button variant="outline" size="lg">Twitter</Button>
            <Button variant="outline" size="lg">LinkedIn</Button>
            <Button variant="outline" size="lg">Instagram</Button>
            <Button variant="outline" size="lg">YouTube</Button>
          </div>
        </div>
      </section>
    </div>
  )
}


