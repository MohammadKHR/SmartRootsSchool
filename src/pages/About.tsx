import { Users, Target, Award, Heart, BookOpen, Globe } from "lucide-react"
import Navbar from "@/components/Navbar"
import { BackButton } from "@/components/ui/back-button"

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Founder & CEO",
    image: "/collaboration-classroom.jpg",
    description: "Former Harvard educator with 15+ years in educational technology"
  },
  {
    name: "Prof. Michael Chen",
    role: "Head of Curriculum",
    image: "/modern-learning.jpg", 
    description: "Stanford PhD in Education, specializing in digital learning methodologies"
  },
  {
    name: "Lisa Rodriguez",
    role: "Technology Director",
    image: "/hero-classroom.jpg",
    description: "MIT graduate with expertise in AI-powered educational platforms"
  }
]

const values = [
  {
    icon: <Target className="h-8 w-8 text-green-500" />,
    title: "Innovation",
    description: "Pioneering the future of education through cutting-edge technology"
  },
  {
    icon: <Heart className="h-8 w-8 text-green-500" />,
    title: "Student-Centered",
    description: "Every decision we make prioritizes student success and well-being"
  },
  {
    icon: <Globe className="h-8 w-8 text-green-500" />,
    title: "Accessibility",
    description: "Making quality education accessible to learners worldwide"
  },
  {
    icon: <Award className="h-8 w-8 text-green-500" />,
    title: "Excellence",
    description: "Maintaining the highest standards in educational delivery"
  }
]

const achievements = [
  { number: "10,000+", label: "Students Graduated" },
  { number: "95%", label: "Job Placement Rate" },
  { number: "50+", label: "Industry Partners" },
  { number: "15", label: "Years of Excellence" }
]

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-12 bg-gradient-to-br from-psyco-black-DEFAULT to-psyco-black-light">
        <div className="max-w-7xl mx-auto text-center">
          <BackButton to="/" /> {/* Added BackButton */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-green-500">Smart Roots School</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming education through innovation, technology, and a deep commitment to student success. 
            We're building the future of learning, one student at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                At Smart Roots School, we believe that education is the foundation of human progress. 
                Our mission is to democratize access to high-quality education by leveraging technology 
                to create engaging, personalized, and effective learning experiences.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We're committed to preparing students for the challenges of tomorrow by fostering 
                critical thinking, creativity, and collaboration skills that will serve them throughout their lives.
              </p>
              <div className="flex items-center space-x-4">
                <BookOpen className="h-6 w-6 text-green-500" />
                <span className="text-green-500 font-semibold">Empowering minds, shaping futures</span>
              </div>
            </div>
            <div className="glassmorphism p-2 rounded-2xl">
              <img 
                src="/modern-learning.jpg" 
                alt="Our mission in action" 
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-psyco-black-light to-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture of our educational community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glassmorphism p-6 rounded-xl text-center hover:translate-y-[-5px] transition-transform">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate educators and technologists dedicated to revolutionizing the learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="glassmorphism p-6 rounded-xl text-center hover:translate-y-[-5px] transition-transform">
                <div className="mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-green-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-green-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-psyco-black-light to-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to educational excellence and student success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">{achievement.number}</p>
                <p className="text-gray-300 font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glassmorphism p-2 rounded-2xl">
              <img 
                src="/hero-classroom.jpg" 
                alt="Our journey" 
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-2">2010 - The Beginning</h3>
                  <p className="text-gray-300">
                    Founded with a vision to make quality education accessible to all, starting with just 50 students.
                  </p>
                </div>
                <div className="border-l-2 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-2">2015 - Digital Transformation</h3>
                  <p className="text-gray-300">
                    Launched our first online learning platform, reaching students across the globe.
                  </p>
                </div>
                <div className="border-l-2 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-2">2020 - AI Integration</h3>
                  <p className="text-gray-300">
                    Introduced AI-powered personalized learning paths and adaptive assessments.
                  </p>
                </div>
                <div className="border-l-2 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-2">2025 - Smart School System</h3>
                  <p className="text-gray-300">
                    Launched our comprehensive smart school management system, revolutionizing educational administration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


