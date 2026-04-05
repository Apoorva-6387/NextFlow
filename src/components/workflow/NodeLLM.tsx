"use client";

import { useState } from "react";
import { Handle, Position } from "reactflow";

export default function NodeLLM() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    if (!input) return;

    setLoading(true);

    // Temporary fake response (later we connect Gemini API)
    setTimeout(() => {
      setOutput("✨ AI Response: " + input);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-[#1e293b] text-white p-3 rounded-xl border border-purple-500 shadow-lg w-60">

      {/* 🔹 Title */}
      <div className="text-sm font-bold mb-2 text-purple-300">
        🤖 LLM Node
      </div>

      {/* Input */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter prompt..."
        className="w-full p-2 rounded bg-black text-white text-xs outline-none mb-2"
      />

      {/* Button */}
      <button
        onClick={generateText}
        className="w-full py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs mb-2"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {/* Output */}
      {output && (
        <div className="text-xs bg-black p-2 rounded">
          {output}
        </div>
      )}

      {/* Handles */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

    </div>
  );
}