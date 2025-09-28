export default function Profile() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input type="email" className="w-full border p-2 rounded" placeholder="Your email" />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input type="password" className="w-full border p-2 rounded" placeholder="******" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}
