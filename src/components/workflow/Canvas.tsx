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
import { useCallback, useEffect } from "react";

import NodeText from "./NodeText";
import NodeImage from "./NodeImage";
import NodeLLM from "./NodeLLM";

import { useStore } from "@/store/useStore";

let id = 1;
const getId = () => `${id++}`;

const nodeTypes = {
  text: NodeText,
  image: NodeImage,
  llm: NodeLLM,
};

function Flow() {
  const { nodes, edges, setNodes, setEdges } = useStore();

  const [rfNodes, setRfNodes, onNodesChange] = useNodesState(nodes);
  const [rfEdges, setRfEdges, onEdgesChange] = useEdgesState(edges);

  // 🔥 sync Zustand
  useEffect(() => {
    setNodes(rfNodes);
  }, [rfNodes]);

  useEffect(() => {
    setEdges(rfEdges);
  }, [rfEdges]);

  const onConnect = useCallback(
    (params: Connection) => setRfEdges((eds) => addEdge(params, eds)),
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

    setRfNodes((nds) => nds.concat(newNode));
  }, []);

  const onDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  return (
    <ReactFlow
      nodes={rfNodes}
      edges={rfEdges}
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
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    </div>
  );
}