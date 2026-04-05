"use client";

import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

export default function Canvas() {
  return (
    <div className="flex-1 bg-black">

      <ReactFlow>
        <Background color="#444" gap={16} />
        <Controls />
      </ReactFlow>

    </div>
  );
}