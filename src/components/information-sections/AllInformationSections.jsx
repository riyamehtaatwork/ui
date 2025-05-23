import React from "react";
import AboutSection from "./simple-about-section/AboutSection";
import ContainerForComponents from "../ui/ContainerForComponents";

const AllInformationSections = () => {
  return (
    <div>
      <ContainerForComponents className="bg-black">
        <AboutSection />
      </ContainerForComponents>
    </div>
  );
};

export default AllInformationSections;
