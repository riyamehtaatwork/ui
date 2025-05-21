import FloatingNavbarWithCTADemo from "../components/floating-navbar-with-cta/FloatingNavbarWithCTADemo";
import Navbar from "../components/ui/Navbar";
export default function AllComponentsPage() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <FloatingNavbarWithCTADemo />
      </div>
    </>
  );
}
