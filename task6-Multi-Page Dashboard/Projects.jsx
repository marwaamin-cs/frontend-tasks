import { projects } from "../data";

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Project</th>
            <th className="p-2">Status</th>
            <th className="p-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{p.name}</td>
              <td className="p-2">{p.status}</td>
              <td className="p-2">{p.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
