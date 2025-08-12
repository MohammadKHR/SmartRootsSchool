import { Link, useLocation } from "react-router-dom"
import { 
  Home, 
  BookOpen, 
  Users, 
  FileText,
  Settings,
  Calendar,
  ClipboardList,
  BarChart2
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/student",
    roles: ["student", "teacher", "admin"]
  },
  {
    title: "Courses",
    icon: BookOpen,
    href: "/courses",
    roles: ["student", "teacher", "admin"]
  },
  {
    title: "Schedule",
    icon: Calendar,
    href: "/schedule",
    roles: ["student", "teacher", "admin"]
  },
  {
    title: "Grades",
    icon: ClipboardList,
    href: "/grades",
    roles: ["student", "teacher"]
  },
  {
    title: "Students",
    icon: Users,
    href: "/students",
    roles: ["teacher", "admin"]
  },
  {
    title: "Reports",
    icon: BarChart2,
    href: "/reports",
    roles: ["admin"]
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    roles: ["admin"]
  }
]

export default function MobileSidebar() {
  const { pathname } = useLocation()
  
  // Get role from current path
  const role = pathname.split('/')[1] || 'student'

  return (
    <div className="h-full">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-xl font-semibold">Smart Roots School</h2>
      </div>
      <nav className="grid gap-1 p-2">
        {navItems.filter(item => item.roles.includes(role)).map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname.startsWith(item.href)
                ? "bg-primary/10 text-primary"
                : "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}