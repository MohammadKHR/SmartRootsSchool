import { Outlet } from "react-router-dom"
import AuthNav from "@/components/navigation/AuthNav"

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-background">
      <AuthNav />
      <main className="container py-8">
        <Outlet />
      </main>
    </div>
  )
}