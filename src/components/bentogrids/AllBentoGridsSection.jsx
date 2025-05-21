import React from "react";
import ContainerForComponents from "../ui/ContainerForComponents";
import BentoGridDemo from "./bentogridwithhover/BentoDemo";
import Headlines from "../ui/Headlines";

const AllBentoGridsSection = () => {
  return (
    <div>
      <ContainerForComponents>
        <Headlines>Bento grid with hover effect</Headlines>
        <BentoGridDemo />
      </ContainerForComponents>
    </div>
  );
};

export default AllBentoGridsSection;
