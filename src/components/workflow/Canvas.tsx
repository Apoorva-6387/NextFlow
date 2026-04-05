"use client";

import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from "react";

import NodeText from "./NodeText";
import NodeImage from "./NodeImage";
import NodeLLM from "./NodeLLM";

let id = 1;
const getId = () => `${id++}`;

const nodeTypes = {
  text: NodeText,
  image: NodeImage,
  llm: NodeLLM,
};

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDrop = useCallback((event: any) => {
    event.preventDefault();

    const type = event.dataTransfer.getData("application/reactflow");

    const position = {
      x: event.clientX - 250,
      y: event.clientY - 100,
    };

    const newNode = {
      id: getId(),
      type: type,
      position,
      data: {},
    };

    setNodes((nds) => nds.concat(newNode));
  }, []);

  const onDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onDrop={onDrop}
      onDragOver={onDragOver}
      fitView
    >
      <Background gap={16} color="#444" />
      <Controls />
    </ReactFlow>
  );
}

export default function Canvas() {
  return (
    <div className="flex-1">
      {/* 🔥 THIS FIXES YOUR ERROR */}
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}