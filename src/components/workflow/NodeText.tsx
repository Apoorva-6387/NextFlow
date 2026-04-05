"use client";

import { Handle, Position } from "reactflow";

export default function NodeText({ data }: any) {
  return (
    <div className="bg-[#1e293b] text-white p-3 rounded-xl border border-purple-500 shadow-lg w-48">

      {/* Title */}
      <div className="text-sm font-bold mb-2 text-purple-300">
        📝 Text Node
      </div>

      {/* Input */}
      <textarea
        placeholder="Enter text..."
        className="w-full p-2 rounded bg-black text-white text-xs outline-none"
      />

      {/* Handles */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

    </div>
  );
}