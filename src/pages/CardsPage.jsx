import React from "react";
import Navbar from "../components/ui/Navbar";
import AllFeaturesSections from "../components/features/AllFeaturesSections";

const CardsPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="p-4">
        <AllFeaturesSections />
      </div>
    </div>
  );
};

export default CardsPage;
