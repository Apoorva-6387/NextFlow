import { create } from "zustand";

type Store = {
  nodes: any[];
  edges: any[];

  setNodes: (nodes: any[]) => void;
  setEdges: (edges: any[]) => void;
};

export const useStore = create<Store>((set) => ({
  nodes: [],
  edges: [],

  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
}));