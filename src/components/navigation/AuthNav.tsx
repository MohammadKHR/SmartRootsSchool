import { Link } from "react-router-dom"
import { School } from "lucide-react"

export default function AuthNav() {
  return (
    <nav className="border-b bg-card">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <School className="h-6 w-6 text-primary" />
          Smart Roots School
        </Link>
        <div className="flex gap-4">
          <Link 
            to="/login" 
            className="hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="hover:text-primary transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}