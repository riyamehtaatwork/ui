import React from "react";
import ContainerForComponents from "../ui/ContainerForComponents";
import Headlines from "../ui/Headlines";
import FeaturesWithSimpleCards from "./simple-features-section/FeaturesWithSimpleCards";
import FeaturesWithImagesAndLink from "./features-with-images-and-bg-gradient/FeaturesWithImagesAndLink";
import FeaturesWithHoverEffect from "./features-with-hover-effect/FeaturesWithHoverEffect";
import FlowingInFeatures from "./flowing-in-features/FlowingInFeatures";
import ComparingFeatures from "./comparing-features/ComparingFeatures";
import CollapsableCardsFeatures from "./collapsed-features/CollapsableCardsFeatures";
const AllFeaturesSections = () => {
  return (
    <div>
      <ContainerForComponents>
        <Headlines>Features With Simple Cards</Headlines>
        <FeaturesWithSimpleCards />
      </ContainerForComponents>

      <ContainerForComponents>
        <Headlines className="">Collapsable Features Cards</Headlines>
        <CollapsableCardsFeatures />
      </ContainerForComponents>

      <FeaturesWithImagesAndLink />

      <ContainerForComponents>
        <Headlines className="">Features With Hover Effect</Headlines>
        <FeaturesWithHoverEffect />
      </ContainerForComponents>

      <ContainerForComponents>
        <Headlines className="">
          Features With Flowing In Effect/Fade In Effect
        </Headlines>
        <FlowingInFeatures />
      </ContainerForComponents>

      <ContainerForComponents>
        <Headlines className="">Features Comparison</Headlines>
        <ComparingFeatures />
      </ContainerForComponents>
    </div>
  );
};

export default AllFeaturesSections;
