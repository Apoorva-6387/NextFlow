"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import SidebarLeft from "@/components/layout/SidebarLeft";
import SidebarRight from "@/components/layout/SidebarRight";
import Canvas from "@/components/workflow/Canvas";
import Navbar from "@/components/layout/Navbar";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.replace("/sign-in");
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return null;
  }

  // Logged in
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