"use client";

import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";

export default function NodeLLM({ id }: any) {
  const { getNodes, getEdges } = useReactFlow();

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    setLoading(true);

    const nodes = getNodes();
    const edges = getEdges();

    const connectedEdge = edges.find((e) => e.target === id);

    let finalInput = input;

    if (connectedEdge) {
      const sourceNode = nodes.find((n) => n.id === connectedEdge.source);

      if (sourceNode?.data?.text) {
        finalInput = sourceNode.data.text;
      }
    }

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ prompt: finalInput }),
      });

      const data = await res.json();
      setOutput(data.output);
    } catch (err) {
      setOutput("❌ Error generating response");
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#1e293b] text-white p-3 rounded-xl border border-purple-500 shadow-lg w-60">

      <div className="text-sm font-bold mb-2 text-purple-300">
        🤖 LLM Node
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter prompt or connect input..."
        className="w-full p-2 rounded bg-black text-white text-xs outline-none mb-2"
      />

      <button
        onClick={generateText}
        className="w-full py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs mb-2"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {output && (
        <div className="text-xs bg-black p-2 rounded max-h-32 overflow-auto">
          {output}
        </div>
      )}

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

    </div>
  );
}