import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      
      <div className="glassmorphism p-6 rounded-lg space-y-6">
        <h2 className="text-xl font-semibold">Account Settings</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>First Name</Label>
            <Input defaultValue="John" />
          </div>
          <div className="space-y-2">
            <Label>Last Name</Label>
            <Input defaultValue="Doe" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue="john.doe@school.edu" type="email" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
        </div>
        <Button>Save Changes</Button>
      </div>

      <div className="glassmorphism p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Notification Preferences</h2>
        <div className="flex items-center justify-between">
          <div>
            <Label>Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive email notifications
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label>Push Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive push notifications
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Label>SMS Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive SMS notifications
            </p>
          </div>
          <Switch />
        </div>
      </div>

      <div className="glassmorphism p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Danger Zone</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Delete Account</Label>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account
              </p>
            </div>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  )
}