import React from "react";
import AllNavbarsSection from "../components/navbars/AllNavbarsSection";
import Navbar from "../components/ui/Navbar";
const NavbarPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="p-4">
        <AllNavbarsSection />
      </div>
    </div>
  );
};

export default NavbarPage;
