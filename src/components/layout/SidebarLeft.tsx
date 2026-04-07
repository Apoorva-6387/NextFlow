"use client";

const buttons = [
  { type: "text", label: "Text" },
  { type: "image", label: "Image" },
  { type: "video", label: "Video" },
  { type: "llm", label: "LLM" },
  { type: "crop", label: "Crop" },
  { type: "frame", label: "Frame" },
];

export default function SidebarLeft() {
  const onDragStart = (event: any, type: string) => {
    event.dataTransfer.setData("application/reactflow", type);
    event.dataTransfer.effectAllowed = "move";
  };

return (
    <div className="w-64 p-4 glass border-r border-gray-800">
      
      <h2 className="mb-4 text-lg font-semibold text-purple-300">
        ⚡ Nodes
      </h2>

      <div className="space-y-3">
        {buttons.map((btn) => (
          <div
            key={btn.type}
            draggable
            onDragStart={(e) => onDragStart(e, btn.type)}
            className="p-3 rounded-xl bg-gray-800 hover:bg-purple-600 cursor-grab smooth"
          >
            {btn.label}
          </div>
        ))}
      </div>

    </div>
  );
}