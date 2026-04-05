"use client";

import SidebarLeft from "@/components/layout/SidebarLeft";
import SidebarRight from "@/components/layout/SidebarRight";
import Canvas from "@/components/workflow/Canvas";
import Navbar from "@/components/layout/Navbar";

import { useUser, SignIn } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useUser();

  // 🔐 Not logged in
  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SignIn />
      </div>
    );
  }

  // ✅ Logged in
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <SidebarLeft />
        <Canvas />
        <SidebarRight />
      </div>
    </div>
  );
}