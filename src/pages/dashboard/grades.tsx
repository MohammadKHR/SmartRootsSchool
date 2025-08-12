import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const grades = [
  {
    course: "Mathematics",
    assignments: [
      { name: "Algebra Test", grade: "A", weight: "20%" },
      { name: "Geometry Quiz", grade: "B+", weight: "15%" }
    ],
    overall: "A-"
  },
  {
    course: "Science",
    assignments: [
      { name: "Chemistry Lab", grade: "A", weight: "25%" },
      { name: "Physics Exam", grade: "B", weight: "30%" }
    ],
    overall: "B+"
  },
  {
    course: "History",
    assignments: [
      { name: "Research Paper", grade: "A-", weight: "35%" },
      { name: "Midterm Exam", grade: "B+", weight: "25%" }
    ],
    overall: "A-"
  }
]

export default function Grades() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Grades</h1>
      <div className="space-y-8">
        {grades.map((course) => (
          <div key={course.course} className="glassmorphism p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">{course.course}</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Assignment</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Weight</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {course.assignments.map((assignment, i) => (
                  <TableRow key={i}>
                    <TableCell>{assignment.name}</TableCell>
                    <TableCell>{assignment.grade}</TableCell>
                    <TableCell>{assignment.weight}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-semibold">
                  <TableCell>Overall Grade</TableCell>
                  <TableCell colSpan={2}>{course.overall}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  )
}