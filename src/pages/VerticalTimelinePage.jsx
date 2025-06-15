import Navbar from "../components/ui/Navbar";
import AllVerticalTimelines from "../components/verticaltimeline/AllVerticalTimelines";

export default function VerticalTimelinePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-4">
        <AllVerticalTimelines />
      </div>
    </div>
  );
}
