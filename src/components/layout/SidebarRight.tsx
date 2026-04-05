"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";

export default function SidebarRight() {
  const [workflows, setWorkflows] = useState<any[]>([]);
  const { setNodes, setEdges } = useStore();

  useEffect(() => {
    fetch("/api/workflow")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("API Error");
        }
        return res.json();
      })
      .then((data) => setWorkflows(data))
      .catch((err) => {
        console.log("⚠️ API not working yet:", err);
      });
  }, []);

  const loadWorkflow = (wf: any) => {
    setNodes(wf.nodes);
    setEdges(wf.edges);
  };

  return (
    <div className="w-72 p-4 glass border-l border-gray-800">

      <h2 className="text-lg font-semibold text-purple-300 mb-4">
        📜 History
      </h2>

      <div className="space-y-3 overflow-y-auto max-h-[80vh]">

        {workflows.length === 0 && (
          <div className="text-gray-400 text-sm">
            No workflows yet
          </div>
        )}

        {workflows.map((wf) => (
          <div
            key={wf.id}
            onClick={() => loadWorkflow(wf)}
            className="p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-purple-600 smooth"
          >
            <div className="text-sm font-semibold">
              {wf.name}
            </div>

            <div className="text-xs text-gray-400">
              {new Date(wf.createdAt).toLocaleString()}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}