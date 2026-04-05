"use client";

import ReactFlow, {
  Background,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
} from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from "react";

import NodeText from "./NodeText";
import NodeImage from "./NodeImage";

let id = 1;
const getId = () => `${id++}`;

const nodeTypes = {
  text: NodeText,
  image: NodeImage,
};

export default function Canvas() {
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
      type: type, // 🔥 now dynamic (text, image, etc.)
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
    <div className="flex-1">
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
    </div>
  );
}