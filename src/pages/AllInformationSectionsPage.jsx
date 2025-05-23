import React from "react";
import AllInformationSections from "../components/information-sections/AllInformationSections";
import Navbar from "../components/ui/Navbar";

const AllInformationSectionsPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="p-4">
        <AllInformationSections />
      </div>
    </div>
  );
};

export default AllInformationSectionsPage;
