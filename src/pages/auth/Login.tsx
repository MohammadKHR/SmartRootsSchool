import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const { toast } = useToast()
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await signIn(email, password)
      toast({
        title: "Login Successful",
        description: "Welcome back to Smart Roots School!",
      })
      // Redirect will be handled by auth state change
      navigate("/student") // Default redirect, will be updated based on user role
    } catch (error: any) {
      setError(error.message || "Failed to sign in")
    } finally {
      setLoading(false)
    }
  }

  const handleDebugLogin = (role: string) => {
    // Debug credentials for each role
    const credentials = {
      student: { email: "student@school.edu", password: "student123" },
      teacher: { email: "teacher@school.edu", password: "teacher123" },
      admin: { email: "admin@school.edu", password: "admin123" }
    }

    const cred = credentials[role as keyof typeof credentials]
    setEmail(cred.email)
    setPassword(cred.password)

    toast({
      title: "Debug Credentials Loaded",
      description: `Use these credentials to login as ${role}`,
    })
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="grid gap-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="user@school.edu" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                disabled={loading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  disabled={loading}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm text-muted-foreground text-center mb-2">Quick Login (Demo)</p>
            <div className="grid grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleDebugLogin("student")}
                disabled={loading}
              >
                Student
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleDebugLogin("teacher")}
                disabled={loading}
              >
                Teacher
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleDebugLogin("admin")}
                disabled={loading}
              >
                Admin
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="/collaboration-classroom.jpg"
          alt="Students learning"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

