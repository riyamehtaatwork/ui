import AllFeaturesSections from "../components/features/AllFeaturesSections";

import AllHeaders from "../components/headers/AllHeaders";
import Navbar from "../components/ui/Navbar";

import AllInformationSections from "../components/information-sections/AllInformationSections";
import AllMiscellaneous from "../components/miscellaneous/AllMiscellaneous";
export default function AllComponentsPage() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <AllMiscellaneous />
        <AllInformationSections />
        <AllHeaders />
      </div>
    </>
  );
}
