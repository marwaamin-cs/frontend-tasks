import { stats, chartData } from "../data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Overview() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3 className="text-gray-600">{s.title}</h3>
            <p className="text-2xl">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="mb-3 font-semibold">Monthly Earnings</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
