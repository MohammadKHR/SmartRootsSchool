import { Link } from "react-router-dom"
import { School, BookOpen, Users, Award, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-green-500" />,
    title: "Interactive Courses",
    description: "Engaging curriculum designed for modern learning"
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: "Expert Teachers",
    description: "Certified educators with industry experience"
  },
  {
    icon: <Award className="h-8 w-8 text-green-500" />,
    title: "Certification",
    description: "Recognized credentials upon completion"
  },
  {
    icon: <Clock className="h-8 w-8 text-green-500" />,
    title: "Flexible Schedule",
    description: "Learn at your own pace and time"
  }
]

const stats = [
  { value: "500+", label: "Students Enrolled" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "50+", label: "Qualified Teachers" },
  { value: "24/7", label: "Support Available" }
]

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-br from-psyco-black-DEFAULT to-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center bg-green-500/20 text-green-400 rounded-full px-4 py-1 text-sm font-medium">
                <School className="h-4 w-4 mr-2" />
                Smart Roots School
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight space-y-4">
                <span className="block">Transforming</span>
                <span className="block">Education</span>
                <span className="block">Through</span>
                <span className="block text-green-500">Innovation</span>
              </h1>
              <p className="text-xl text-gray-300">
                Our cutting-edge platform provides students and educators with the tools they need to succeed in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link to="/login">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/courses">
                    Explore Courses
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="glassmorphism p-2 rounded-2xl overflow-hidden">
                <img 
                  src="/hero-classroom.jpg" 
                  alt="Students learning in modern classroom" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Smart Roots School?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to provide the best learning experience for students and teaching tools for educators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glassmorphism p-6 rounded-xl hover:translate-y-[-5px] transition-transform">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-psyco-black-light to-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-green-500 mb-2">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Learning Environment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glassmorphism rounded-xl overflow-hidden">
              <img 
                src="/collaboration-classroom.jpg" 
                alt="Students collaborating in modern classroom" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="glassmorphism rounded-xl overflow-hidden">
              <img 
                src="/modern-learning.jpg" 
                alt="Advanced learning environment" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="glassmorphism rounded-xl overflow-hidden">
              <img 
                src="/hero-classroom.jpg" 
                alt="Students in technology-enhanced classroom" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-DEFAULT">
        <div className="max-w-4xl mx-auto text-center glassmorphism p-8 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students and educators who are already benefiting from our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/register">
                Create Account
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/login">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}