import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Users, Calendar, FileText } from "lucide-react"
import { BackButton } from "@/components/ui/back-button"

const courses = [
  {
    id: 1,
    title: "Mathematics",
    code: "MATH101",
    instructor: "Mr. Smith",
    schedule: "Mon/Wed 9:00-10:30",
    students: 28,
    assignments: 3
  },
  {
    id: 2,
    title: "Science",
    code: "SCI201",
    instructor: "Ms. Johnson",
    schedule: "Tue/Thu 11:00-12:30",
    students: 24,
    assignments: 2
  },
  {
    id: 3,
    title: "History",
    code: "HIST301",
    instructor: "Dr. Williams",
    schedule: "Mon/Fri 13:00-14:30",
    students: 32,
    assignments: 1
  },
  {
    id: 4,
    title: "Literature",
    code: "LIT401",
    instructor: "Mrs. Brown",
    schedule: "Wed/Fri 10:00-11:30",
    students: 18,
    assignments: 4
  }
]

export default function Courses() {
  return (
    <div className="space-y-6">
      <BackButton /> {/* Added BackButton */}
      <h1 className="text-3xl font-bold">Courses</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="glassmorphism card-hover">
            <CardHeader>
              <CardTitle className="text-xl">{course.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{course.code}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Instructor: {course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{course.schedule}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{course.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{course.assignments} assignments</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

