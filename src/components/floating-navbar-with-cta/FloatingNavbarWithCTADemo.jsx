import { FloatingNavbarWithCTA } from "./FloatingNavbarWithCTA";
import { Home, Info } from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="w-4 h-4" /> },
  { name: "About", link: "/about", icon: <Info className="w-4 h-4" /> },
];

export default function FloatingNavbarWithCTADemo() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-5 ">
        Floating Navbar With Call-To-Action Button
      </h1>
      <FloatingNavbarWithCTA navItems={navItems} />
      {/* rest of your content */}
    </div>
  );
}
