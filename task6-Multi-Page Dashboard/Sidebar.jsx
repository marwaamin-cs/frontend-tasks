import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-56 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <div className="flex flex-col space-y-3">
        <Link to="/">Overview</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}
