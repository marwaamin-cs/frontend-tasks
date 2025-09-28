import Notifications from "./Notifications";

export default function Header() {
  return (
    <div className="bg-white shadow px-4 py-2 flex justify-between items-center">
      <h1 className="font-semibold text-lg">Freelance Dashboard</h1>
      <Notifications />
    </div>
  );
}
