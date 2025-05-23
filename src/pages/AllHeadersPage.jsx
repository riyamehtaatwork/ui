import React from "react";
import AllHeaders from "../components/headers/AllHeaders";
import Navbar from "../components/ui/Navbar";

const AllHeadersPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="p-4">
        <AllHeaders />
      </div>
    </div>
  );
};

export default AllHeadersPage;
