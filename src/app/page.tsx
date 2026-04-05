import SidebarLeft from "@/components/layout/SidebarLeft";
import SidebarRight from "@/components/layout/SidebarRight";
import Canvas from "@/components/workflow/Canvas";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      
    
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar */}
        <SidebarLeft />

        {/* Canvas */}
        <Canvas />

        {/* Right Sidebar */}
        <SidebarRight />

      </div>
    </div>
  );
}