import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

const students = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@school.edu",
    grade: "10",
    avatar: "/student1.jpg"
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@school.edu",
    grade: "11",
    avatar: "/student2.jpg"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@school.edu",
    grade: "9",
    avatar: "/student3.jpg"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@school.edu",
    grade: "12",
    avatar: "/student4.jpg"
  },
  {
    id: 5,
    name: "Daniel Wilson",
    email: "daniel.wilson@school.edu",
    grade: "10",
    avatar: "/student5.jpg"
  },
  {
    id: 6,
    name: "Olivia Martinez",
    email: "olivia.martinez@school.edu",
    grade: "11",
    avatar: "/student6.jpg"
  }
]

export default function Students() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Students</h1>
        <Input
          placeholder="Search students..."
          className="max-w-xs"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <div key={student.id} className="glassmorphism p-4 rounded-lg flex items-center gap-4">
            <Avatar>
              <AvatarImage src={student.avatar} />
              <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{student.name}</h3>
              <p className="text-sm text-muted-foreground">{student.email}</p>
              <p className="text-sm">Grade {student.grade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}