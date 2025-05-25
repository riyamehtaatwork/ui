import React from "react";
import PricingWithGradient from "./gradient-pricing-cards/PricingWithGradient";
import Headlines from "../ui/Headlines";
import ContainerForComponents from "../ui/ContainerForComponents";

const AllPrincingSections = () => {
  return (
    <div>
      {" "}
      <ContainerForComponents className="bg-black">
        <Headlines className="">Pricing Cards with Gradient Effect</Headlines>
        <PricingWithGradient />
      </ContainerForComponents>
    </div>
  );
};

export default AllPrincingSections;
