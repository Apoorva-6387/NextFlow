"use client";

import { useState } from "react";
import { Handle, Position } from "reactflow";

export default function NodeImage() {
  const [image, setImage] = useState<string | null>(null);

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

  return (
    <div className="bg-[#1e293b] text-white p-3 rounded-xl border border-purple-500 shadow-lg w-52">

      {/*Title */}
      <div className="text-sm font-bold mb-2 text-purple-300">
        🖼 Image Node
      </div>

      {/* Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="text-xs mb-2"
      />

      {/* Preview */}
      {image && (
        <img
          src={image}
          alt="preview"
          className="rounded-lg w-full h-24 object-cover"
        />
      )}

      {/* Handles */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

    </div>
  );
}