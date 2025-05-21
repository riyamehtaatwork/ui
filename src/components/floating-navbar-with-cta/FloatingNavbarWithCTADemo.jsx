import ContainerForComponents from "../ui/ContainerForComponents";
import Headlines from "../ui/Headlines";
import { FloatingNavbarWithCTA } from "./FloatingNavbarWithCTA";
import { Home, Info } from "lucide-react";

const navItems = [
  { name: "Home", link: "/", icon: <Home className="w-4 h-4" /> },
  { name: "About", link: "/about", icon: <Info className="w-4 h-4" /> },
];

export default function FloatingNavbarWithCTADemo() {
  return (
    <ContainerForComponents>
      <Headlines> Floating Navbar With Call-To-Action Button</Headlines>
      <FloatingNavbarWithCTA navItems={navItems} />
      {/* rest of your content */}
    </ContainerForComponents>
  );
}
