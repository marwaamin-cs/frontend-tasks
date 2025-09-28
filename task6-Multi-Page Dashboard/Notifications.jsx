import { useState } from "react";
import { notifications } from "../data";

export default function Notifications() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="px-3 py-1 bg-gray-200 rounded">
        🔔
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow w-60 rounded p-2 text-sm">
          <h3 className="font-bold mb-2">Recent</h3>
          {notifications.slice(0, 3).map((n, i) => (
            <p key={i} className="border-b py-1">{n}</p>
          ))}
        </div>
      )}
    </div>
  );
}
