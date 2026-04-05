const buttons = [
  "Text",
  "Image",
  "Video",
  "LLM",
  "Crop",
  "Frame",
];

export default function SidebarLeft() {
  return (
    <div className="w-64 p-4 glass border-r border-gray-800">

      <h2 className="mb-4 text-lg font-semibold text-purple-300">
        ⚡ Nodes
      </h2>

      <div className="space-y-3">
        {buttons.map((btn) => (
          <button
            key={btn}
            className="w-full p-3 rounded-xl bg-gray-800 hover:bg-purple-600 smooth"
          >
            {btn}
          </button>
        ))}
      </div>

    </div>
  );
}