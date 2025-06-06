import React from "react";
import ContainerForComponents from "../ui/ContainerForComponents";
import Headlines from "../ui/Headlines";
import FeaturesWithSimpleCards from "./simple-features-section/FeaturesWithSimpleCards";
import FeaturesWithImagesAndLink from "./features-with-images-and-bg-gradient/FeaturesWithImagesAndLink";
import FeaturesWithHoverEffect from "./features-with-hover-effect/FeaturesWithHoverEffect";
import FlowingInFeatures from "./flowing-in-features/FlowingInFeatures";
import ComparingFeatures from "./comparing-features/ComparingFeatures";
import CollapsableCardsFeatures from "./collapsed-features/CollapsableCardsFeatures";
import ZfeatureCards from "./z-features/ZfeatureCards";
const AllFeaturesSections = () => {
  return (
    <div>
      <ContainerForComponents className="bg-black">
        <Headlines className="">Features With Simple Cards</Headlines>
        <FeaturesWithSimpleCards />
      </ContainerForComponents>

      <ContainerForComponents className="bg-black">
        <Headlines className="">Collapsable Features Cards</Headlines>
        <CollapsableCardsFeatures />
      </ContainerForComponents>

      <ContainerForComponents className="bg-black">
        <Headlines className="">Z Features Cards</Headlines>
        <ZfeatureCards />
      </ContainerForComponents>

      <FeaturesWithImagesAndLink />

      <ContainerForComponents className="bg-black">
        <Headlines className="">Features With Hover Effect</Headlines>
        <FeaturesWithHoverEffect />
      </ContainerForComponents>

      <ContainerForComponents className="bg-black">
        <Headlines className="">
          Features With Flowing In Effect/Fade In Effect
        </Headlines>
        <FlowingInFeatures />
      </ContainerForComponents>

      <ContainerForComponents className="bg-black">
        <Headlines className="">Features Comparison</Headlines>
        <ComparingFeatures />
      </ContainerForComponents>
    </div>
  );
};

export default AllFeaturesSections;
