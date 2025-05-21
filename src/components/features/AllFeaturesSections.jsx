import React from "react";
import ContainerForComponents from "../ui/ContainerForComponents";
import Headlines from "../ui/Headlines";
import FeaturesWithSimpleCards from "./simple-features-section/FeaturesWithSimpleCards";
import FeaturesWithImagesAndLink from "./features-with-images-and-bg-gradient/FeaturesWithImagesAndLink";

const AllFeaturesSections = () => {
  return (
    <div>
      <ContainerForComponents>
        <Headlines>Features With Simple Cards</Headlines>
        <FeaturesWithSimpleCards />
      </ContainerForComponents>
      <FeaturesWithImagesAndLink />
    </div>
  );
};

export default AllFeaturesSections;
