export default function SidebarRight() {
  return (
    <div className="w-72 p-4 glass border-l border-gray-800">

      <h2 className="text-lg font-semibold text-purple-300 mb-4">
        📜 History
      </h2>

      <div className="space-y-3">
        <div className="p-3 bg-gray-800 rounded-lg">
          Run #123 ✅
        </div>

        <div className="p-3 bg-gray-800 rounded-lg">
          Run #124 ❌
        </div>
      </div>

    </div>
  );
}