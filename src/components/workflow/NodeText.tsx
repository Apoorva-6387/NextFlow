"use client";

import { Handle, Position } from "reactflow";
import { useState } from "react";

export default function NodeText({ id, data }: any) {
  const [text, setText] = useState("");

  // Save text in node data
  data.text = text;

  return (
    <div className="bg-[#1e293b] text-white p-3 rounded-xl border border-purple-500 shadow-lg w-48">

      <div className="text-sm font-bold mb-2 text-purple-300">
        📝 Text Node
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        className="w-full p-2 rounded bg-black text-white text-xs outline-none"
      />

      <Handle type="source" position={Position.Right} />
    </div>
  );
}