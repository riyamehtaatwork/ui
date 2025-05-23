import AllBentoGridsSection from "../components/bentogrids/AllBentoGridsSection";
import Navbar from "../components/ui/Navbar";

export default function BentoGridPage() {
  return (
    <div className="">
      <Navbar />
      <div className="p-4">
        <AllBentoGridsSection />
      </div>
    </div>
  );
}
