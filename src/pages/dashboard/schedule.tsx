import { Calendar } from "@/components/ui/calendar"
import { Clock } from "lucide-react"

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "9:00-10:30", subject: "Mathematics", room: "A101" },
      { time: "11:00-12:30", subject: "Physics", room: "B205" }
    ]
  },
  {
    day: "Tuesday",
    classes: [
      { time: "10:00-11:30", subject: "Literature", room: "C302" },
      { time: "13:00-14:30", subject: "History", room: "A101" }
    ]
  },
  {
    day: "Wednesday",
    classes: [
      { time: "9:00-10:30", subject: "Mathematics", room: "A101" },
      { time: "11:00-12:30", subject: "Chemistry", room: "Lab1" }
    ]
  },
  {
    day: "Thursday",
    classes: [
      { time: "10:00-11:30", subject: "Physical Education", room: "Gym" },
      { time: "13:00-14:30", subject: "Computer Science", room: "Lab2" }
    ]
  },
  {
    day: "Friday",
    classes: [
      { time: "9:00-10:30", subject: "Art", room: "D105" },
      { time: "11:00-12:30", subject: "Music", room: "Auditorium" }
    ]
  }
]

export default function Schedule() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Schedule</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Calendar
          mode="single"
          className="rounded-md border"
        />
        <div className="space-y-4">
          {schedule.map((day) => (
            <div key={day.day} className="glassmorphism p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">{day.day}</h2>
              <div className="space-y-3">
                {day.classes.map((cls, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Clock className="h-5 w-5 mt-0.5 text-psyco-green-DEFAULT" />
                    <div>
                      <p className="font-medium">{cls.subject}</p>
                      <p className="text-sm text-muted-foreground">
                        {cls.time} • Room {cls.room}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}