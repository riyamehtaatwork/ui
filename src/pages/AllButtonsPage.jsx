import React from "react";
import AllButtons from "../components/buttons/AllButtons";
import Navbar from "../components/ui/Navbar";
const AllButtonsPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="p-4">
        <AllButtons />
      </div>
    </div>
  );
};

export default AllButtonsPage;
