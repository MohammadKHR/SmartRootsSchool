import { Outlet } from "react-router-dom"
import Sidebar from "@/components/navigation/Sidebar"
import Topbar from "@/components/navigation/Topbar"

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <Topbar />
        <main className="p-6 overflow-auto h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}