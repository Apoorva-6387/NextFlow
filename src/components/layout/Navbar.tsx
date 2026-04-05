export default function Navbar() {
  return (
    <div className="h-16 flex items-center justify-between px-6 glass border-b border-gray-800">

      <h1 className="text-xl font-bold text-purple-400">
        🚀 NextFlow
      </h1>

      <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg smooth glow">
        + New Workflow
      </button>

    </div>
  );
}