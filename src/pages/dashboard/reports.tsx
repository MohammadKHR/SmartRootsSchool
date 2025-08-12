import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', students: 400, teachers: 24 },
  { name: 'Feb', students: 600, teachers: 26 },
  { name: 'Mar', students: 800, teachers: 28 },
  { name: 'Apr', students: 1000, teachers: 30 },
  { name: 'May', students: 1200, teachers: 32 },
  { name: 'Jun', students: 900, teachers: 30 },
  { name: 'Jul', students: 700, teachers: 28 },
  { name: 'Aug', students: 500, teachers: 26 },
  { name: 'Sep', students: 1100, teachers: 34 },
  { name: 'Oct', students: 1300, teachers: 36 },
  { name: 'Nov', students: 1500, teachers: 38 },
  { name: 'Dec', students: 1400, teachers: 40 }
]

const gradeDistribution = [
  { name: 'A', value: 25 },
  { name: 'B', value: 35 },
  { name: 'C', value: 20 },
  { name: 'D', value: 10 },
  { name: 'F', value: 5 }
]

export default function Reports() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Reports</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glassmorphism p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Enrollment Trends</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#10B981" />
                <Bar dataKey="teachers" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glassmorphism p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Grade Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gradeDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="glassmorphism p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Attendance Statistics</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="students" stackId="a" fill="#10B981" />
              <Bar dataKey="teachers" stackId="a" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}