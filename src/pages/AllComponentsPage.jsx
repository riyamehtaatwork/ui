import AllFeaturesSections from "../components/features/AllFeaturesSections";
import FloatingNavbarWithCTADemo from "../components/navbars/floating-navbar-with-cta/FloatingNavbarWithCTADemo";
import AllHeaders from "../components/headers/AllHeaders";
import Navbar from "../components/ui/Navbar";
export default function AllComponentsPage() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <FloatingNavbarWithCTADemo />
        <AllHeaders />
        <AllFeaturesSections />
      </div>
    </>
  );
}
