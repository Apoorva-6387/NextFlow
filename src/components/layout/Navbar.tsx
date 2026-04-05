"use client";

import { useStore } from "@/store/useStore";

export default function Navbar() {
  const { nodes, edges } = useStore();

  const saveWorkflow = async () => {
    await fetch("/api/workflow", {
      method: "POST",
      body: JSON.stringify({
        name: "My Workflow",
        nodes,
        edges,
      }),
    });

    alert("✅ Workflow Saved!");
  };

  return (
    <div className="h-16 flex items-center justify-between px-6 glass border-b border-gray-800">

      <h1 className="text-xl font-bold text-purple-400">
        🚀 NextFlow
      </h1>

      <button
        onClick={saveWorkflow}
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg smooth glow"
      >
        💾 Save Workflow
      </button>

    </div>
  );
}